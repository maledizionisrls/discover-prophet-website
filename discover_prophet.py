# -*- coding: utf-8 -*-

# 🚀 Script Ottimizzato per Google Trends - V7.8 (Docs Only & OpenAI + Saturation Score)
#    Lavora direttamente con i file nella cartella 'docs'.
#    Eliminata la cartella 'templates' e la logica di copia file.
#    Genera solo 'docs/data.js'.
#    Integra OpenAI per estrarre entità chiave dalle query di tendenza.
#    Legge la chiave API OpenAI dalla variabile d'ambiente OPENAI_API_KEY.
#    **Formula V7.9 per Discover Score (Numeratore Pesato).**
#    **NUOVO: Aggiunge il calcolo della Saturazione tramite scraping SERP intitle.**

# --- Import Librerie Essenziali ---
import requests
import random
import time
import json
import warnings
import os
import hashlib
import pandas as pd
import numpy as np
import re
import traceback
import concurrent.futures
from collections import defaultdict, deque
import cloudscraper
import socket
import threading
from copy import deepcopy
from pytrends.request import TrendReq
from bs4 import BeautifulSoup
from tqdm import tqdm
from datetime import datetime
import shutil
import openai # Libreria OpenAI
from urllib.parse import quote_plus

# --- Import per Scraping Saturazione ---
try:
    from curl_cffi.requests import Session as ImpersonateSession, get as impersonate_get, RequestsError
    print("Libreria curl_cffi importata con successo.")
except ImportError:
    print("!!! ATTENZIONE: Libreria 'curl_cffi' non trovata. Installala con 'pip install curl_cffi'. La funzione di saturazione non funzionerà. !!!")
    ImpersonateSession = None
    impersonate_get = None
    RequestsError = requests.exceptions.RequestException # Fallback generico

# --- Patch per errore method_whitelist vs allowed_methods ---
import urllib3
from urllib3.util import Retry
original_init = Retry.__init__
def patched_init(self, *args, **kwargs):
    if 'method_whitelist' in kwargs:
        kwargs['allowed_methods'] = kwargs.pop('method_whitelist')
    return original_init(self, *args, **kwargs)
Retry.__init__ = patched_init
# --- Fine patch ---

# --- Gestione Import Opzionale (FakeUserAgent) ---
try: from fake_useragent import UserAgent, FakeUserAgentError
except ImportError:
    print("FakeUserAgentError non trovato, FakeUserAgent potrebbe non funzionare come previsto.")
    FakeUserAgentError = Exception
    class UserAgent:
        def __init__(self, *args, **kwargs): warnings.warn("Libreria fake-useragent non trovata. Uso UA di fallback.")
        @property
        def chrome(self): return self._fallback_ua()
        @property
        def random(self): return self._fallback_ua()
        def _fallback_ua(self): return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
# --- Fine Gestione ---

# --- Ignora Warning Specifici ---
warnings.filterwarnings("ignore", category=FutureWarning, module='pytrends')
warnings.filterwarnings("ignore", category=UserWarning, message='Setting null property')
warnings.filterwarnings("ignore", message="urllib3 v2 only supports OpenSSL 1.1.1+")

# ==============================================================================
# ==================== SEZIONE PARAMETRI CONFIGURABILI =========================
# ==============================================================================

# --- Parametri Principali ---
TOP_N_FINAL_DISPLAY = 50
OUTPUT_FILENAME = "index.html" # Nome file principale in docs/
OUTPUT_DIR = "docs" # Directory di output E sorgente per file statici
CHECKPOINT_DIR = "checkpoint_data" # Directory checkpoint

# --- Parametri Contesto di Volume ---
FETCH_VOLUME_CONTEXT = True
N_PROCESS_FOR_CONTEXT = 50
CONTEXT_TIMEFRAMES = ['now 1-H', 'now 4-H', 'now 7-d']
CONTEXT_N_RUNS = 2

# --- Parametri Integrazione OpenAI ---
FETCH_OPENAI_ENTITIES = True
N_PROCESS_FOR_OPENAI = N_PROCESS_FOR_CONTEXT # Usa lo stesso numero di entità del contesto
OPENAI_MODEL = "gpt-4o"
OPENAI_MAX_RETRIES = 3
OPENAI_REQUEST_TIMEOUT = 30
MAX_OPENAI_THREADS = 10

# --- Parametri Calcolo Saturazione (NUOVO) ---
FETCH_SATURATION_SCORE = True # ATTIVA/DISATTIVA il calcolo della saturazione
N_PROCESS_FOR_SATURATION = TOP_N_FINAL_DISPLAY # Calcola solo per le top N finali
MAX_THREADS_SATURATION = 20 # Numero di thread per lo scraping SERP (regolare con cautela!)
SATURATION_IMPERSONATE_BROWSER = 'chrome124' # Profilo browser per curl_cffi
SATURATION_REQUEST_TIMEOUT = 40 # Timeout per le richieste SERP
SATURATION_MAX_RETRIES_PER_KEYWORD = 3 # Tentativi per singola keyword nello scraping saturazione

# --- Chiave API OpenAI (LEGGI DA VARIABILE D'AMBIENTE!) ---
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
client = None
if FETCH_OPENAI_ENTITIES:
    if not OPENAI_API_KEY:
        warnings.warn("FETCH_OPENAI_ENTITIES=True ma OPENAI_API_KEY non impostata! Estrazione saltata.", UserWarning)
        FETCH_OPENAI_ENTITIES = False
    else:
        try:
            client = openai.OpenAI(api_key=OPENAI_API_KEY)
            print(f"Client OpenAI inizializzato (Modello: {OPENAI_MODEL}).")
        except Exception as e:
            warnings.warn(f"Errore inizializzazione client OpenAI: {e}. Estrazione saltata.", UserWarning)
            FETCH_OPENAI_ENTITIES = False

# Disabilita saturazione se curl_cffi non è disponibile
if FETCH_SATURATION_SCORE and impersonate_get is None:
    warnings.warn("FETCH_SATURATION_SCORE=True ma curl_cffi non è installato/importato. Saturazione disattivata.", UserWarning)
    FETCH_SATURATION_SCORE = False

# --- Parametri Formula Discover Score V7.9 ---
V7D_PENALTY_K = 50.0 # Mantenuto per il denominatore
V7D_PENALTY_EPSILON = 0.1 # Mantenuto per il denominatore
WEIGHT_V4H_NUMERATOR = 0.5 # Nuovi pesi per il numeratore V7.9
WEIGHT_V7D_NUMERATOR = 1.5 # Nuovi pesi per il numeratore V7.9

# --- Parametri Gestione Proxy e Concorrenza ---
MAX_CONCURRENT_PROXIES = 210
PROXY_USE_COOLDOWN = 7
MAX_THREADS_PYTRENDS = 80

# --- Parametri Ritardi e Pause ---
MIN_DELAY_BETWEEN_REQUESTS = 0
MAX_DELAY_BETWEEN_REQUESTS = 2.0
ENTITY_EXTRACTION_INITIAL_WAIT = 5
SATURATION_DELAY_BETWEEN_REQUESTS = (2.0, 5.0) # Delay tra richieste SERP

# --- Parametri Gestione Errori e Tentativi ---
ENTITY_EXTRACTION_MAX_RETRIES = 15
MAX_RETRIES_PYTRENDS_CONTEXT = 8
INITIAL_BACKOFF_SECONDS_429 = 5
BACKOFF_MULTIPLIER_429 = 1.2
MAX_WAIT_SECONDS = 20
PROXY_FAILURE_THRESHOLD = 3
PROXY_FAILURE_COOLDOWN_MULTIPLIER = 1.2

# --- Parametri Timeout Connessioni ---
ENTITY_EXTRACTION_CONNECT_TIMEOUT = 20
ENTITY_EXTRACTION_READ_TIMEOUT = 25
PYTRENDS_CONNECT_TIMEOUT = 10
PYTRENDS_READ_TIMEOUT = 25

# --- Parametri Interni Pytrends ---
PYTRENDS_RETRIES = 1
PYTRENDS_BACKOFF_FACTOR = 0.2

# ==============================================================================
# ================== FINE SEZIONE PARAMETRI CONFIGURABILI ======================
# ==============================================================================

# ==============================================================================
# ============= FUNZIONE CALCOLO DISCOVER SCORE (V7.9 - Numeratore Pesato) ======
# ==============================================================================
def calculate_discover_score(rank_series, score_4h, score_7d, k_penalty=V7D_PENALTY_K, epsilon=V7D_PENALTY_EPSILON, weight_v4h=WEIGHT_V4H_NUMERATOR, weight_v7d=WEIGHT_V7D_NUMERATOR):
    """Calcola l'Heuristic Discover Score V7.9 (Numeratore Pesato)."""
    # --- Calcolo Denominatore (basato su V7.5) ---
    low_v7d_penalty_factor = np.maximum(1.0, k_penalty / (score_7d + epsilon))
    effective_rank = rank_series * low_v7d_penalty_factor
    denominator = np.log1p(effective_rank)
    denominator = np.maximum(denominator, 1e-9) # Evita divisione per zero
    # --- Calcolo Numeratore MODIFICATO (V7.9) ---
    numerator = 1 + (score_4h * weight_v4h) + (score_7d * weight_v7d)
    # --- Calcolo Score Finale ---
    discover_score = numerator / denominator
    discover_score = discover_score.fillna(0) # Gestisce eventuali NaN
    return discover_score
# ==============================================================================

# --- Definizione Stringa Base Proxy e Rimozione Proxy Problematici ---
proxy_base_string = "v2.proxyempire.io:5000:r_46aa61f010-country-{geo}:8186bbae3e"
original_country_codes = ['af', 'al', 'dz', 'as', 'ad', 'ao', 'ai', 'aq', 'ag', 'ar', 'am', 'aw', 'au', 'at', 'az', 'bs', 'bh', 'bd', 'bb', 'by', 'be', 'bz', 'bj', 'bm', 'bt', 'bo', 'ba', 'bw', 'br', 'io', 'bn', 'bg', 'bf', 'bi', 'kh', 'cm', 'ca', 'cv', 'ky', 'cf', 'td', 'cl', 'cn', 'co', 'km', 'cg', 'ck', 'cr', 'hr', 'cu', 'cy', 'cz', 'dk', 'dj', 'dm', 'do', 'ec', 'eg', 'sv', 'gq', 'er', 'ee', 'et', 'fk', 'fo', 'fj', 'fi', 'fr', 'gf', 'pf', 'ga', 'gm', 'ge', 'de', 'gh', 'gi', 'gr', 'gl', 'gd', 'gp', 'gu', 'gt', 'gg', 'gn', 'gw', 'gy', 'ht', 'va', 'hn', 'hk', 'hu', 'is', 'in', 'id', 'ir', 'iq', 'ie', 'im', 'il', 'it', 'ci', 'jm', 'jp', 'je', 'jo', 'kz', 'ke', 'ki', 'kw', 'kg', 'la', 'lv', 'lb', 'ls', 'lr', 'ly', 'li', 'lt', 'lu', 'mo', 'mk', 'mg', 'mw', 'my', 'mv', 'ml', 'mt', 'mh', 'mq', 'mr', 'mu', 'yt', 'mx', 'fm', 'md', 'mc', 'mn', 'me', 'ms', 'ma', 'mz', 'mm', 'na', 'nr', 'np', 'nl', 'nc', 'nz', 'ni', 'ne', 'ng', 'nu', 'nf', 'kp', 'gb', 'mp', 'no', 'om', 'pk', 'pw', 'ps', 'pa', 'pg', 'py', 'pe', 'ph', 'pl', 'pt', 'pr', 'qa', 're', 'ro', 'ru', 'rw', 'sh', 'kn', 'lc', 'vc', 'ws', 'sm', 'st', 'sa', 'sn', 'rs', 'sc', 'sl', 'sg', 'sk', 'si', 'sb', 'so', 'za', 'kr', 'ss', 'es', 'lk', 'sd', 'sr', 'sz', 'se', 'ch', 'sy', 'tj', 'tw', 'tz', 'th', 'cd', 'tl', 'tg', 'tk', 'to', 'tt', 'tn', 'tr', 'tm', 'tc', 'tv', 'ug', 'ua', 'ae', 'us', 'uy', 'uz', 'vu', 've', 'vn', 'vg', 'vi', 'wf', 'eh', 'ye', 'zm', 'zw']
proxies_to_remove_geo = {'aq', 'io', 'cf', 'bi', 'td', 'km', 'fk', 'cn', 'gw', 'va', 'ki', 'nr', 'nu', 'nf', 'kp', 'pg', 'sh', 'ws', 'tl', 'tk', 'tv', 'wf', 'eh', 'dj', 'gl', 'al'}
country_codes = [code for code in original_country_codes if code not in proxies_to_remove_geo]
print(f"GEO usati: {len(country_codes)}.")
proxies_list_with_geo = []
for geo in country_codes:
    proxy_str = proxy_base_string.format(geo=geo.lower()); parts = proxy_str.split(':')
    if len(parts) == 4:
        match = re.search(r'-country-([a-z]{2})', parts[2], re.IGNORECASE)
        if match: proxies_list_with_geo.append({"proxy": proxy_str, "geo": match.group(1).upper()})
if not proxies_list_with_geo: raise ValueError("!!! Lista proxy VUOTA dopo filtro! !!!")
print(f"Generati {len(proxies_list_with_geo)} proxy con geo.")

# --- Mapping Geo -> Lingua/Timezone ---
COUNTRY_LOCALE_MAP = {'IT': {'hl': 'it-IT', 'tz': 60}, 'US': {'hl': 'en-US', 'tz': -300}, 'GB': {'hl': 'en-GB', 'tz': 0}, 'FR': {'hl': 'fr-FR', 'tz': 60}, 'DE': {'hl': 'de-DE', 'tz': 60}, 'ES': {'hl': 'es-ES', 'tz': 60}, 'JP': {'hl': 'ja-JP', 'tz': 540}, 'AU': {'hl': 'en-AU', 'tz': 600}, 'CA': {'hl': 'en-CA', 'tz': -300}, 'BR': {'hl': 'pt-BR', 'tz': -180}, 'IN': {'hl': 'en-IN', 'tz': 330}, 'MA': {'hl': 'fr-MA', 'tz': 0}, 'HN': {'hl': 'es-HN', 'tz': -360}, 'BS': {'hl': 'en-BS', 'tz': -300}, 'TO': {'hl': 'en-TO', 'tz': 780}, 'BE': {'hl': 'fr-BE', 'tz': 60}, 'OM': {'hl': 'ar-OM', 'tz': 240}, 'GM': {'hl': 'en-GM', 'tz': 0}, 'LU': {'hl': 'fr-LU', 'tz': 60}, 'BN': {'hl': 'ms-BN', 'tz': 480}, 'SZ': {'hl': 'en-SZ', 'tz': 120}, 'MN': {'hl': 'mn-MN', 'tz': 480}, 'EG': {'hl': 'ar-EG', 'tz': 120}, 'AT': {'hl': 'de-AT', 'tz': 60}, 'IE': {'hl': 'en-IE', 'tz': 0}, 'KW': {'hl': 'ar-KW', 'tz': 180}, 'MM': {'hl': 'my-MM', 'tz': 390}, 'LV': {'hl': 'lv-LV', 'tz': 120}, 'RW': {'hl': 'rw-RW', 'tz': 120}, 'KR': {'hl': 'ko-KR', 'tz': 540}, 'TJ': {'hl': 'tg-TJ', 'tz': 300}, 'MH': {'hl': 'en-MH', 'tz': 720}, 'ZA': {'hl': 'en-ZA', 'tz': 120}, 'FI': {'hl': 'fi-FI', 'tz': 120}, 'DEFAULT': {'hl': 'en-US', 'tz': 0}}
def get_locale_for_geo(geo_code): return COUNTRY_LOCALE_MAP.get(geo_code.upper(), COUNTRY_LOCALE_MAP['DEFAULT'])

# --- Classi AdvancedProxyManager e ConsistentBrowserProfile (Invariate) ---
class AdvancedProxyManager:
    def __init__(self, proxy_geo_list, max_concurrent, cooldown_seconds): self.max_concurrent=max_concurrent; self.cooldown_seconds=cooldown_seconds; self.lock=threading.Lock(); self.all_proxies={i['proxy']: i['geo'] for i in proxy_geo_list}; self.available_proxies=deque(self.all_proxies.keys()); random.shuffle(list(self.available_proxies)); self.active_proxies={}; self.cooldown_proxies={}; self.proxy_consecutive_failures=defaultdict(int); self.proxy_stats=defaultdict(lambda: {"success":0,"fail_429":0,"fail_5xx":0,"fail_other":0,"fail_timeout":0,"fail_proxy_error":0,"fail_parse":0}); self.active_sessions={}; print(f"AdvProxyManager: {len(self.all_proxies)} proxies, MaxConc: {self.max_concurrent}, CD: {self.cooldown_seconds}s")
    def _check_cooldown(self): ct=time.time(); reactivate=[]; [reactivate.append(p) for p, et in list(self.cooldown_proxies.items()) if ct >= et]; [self.available_proxies.append(p) for p in reactivate if self.cooldown_proxies.pop(p,None)]
    def get_proxy(self):
        with self.lock:
            self._check_cooldown();
            if len(self.active_proxies)<self.max_concurrent and self.available_proxies:
                p_str=self.available_proxies.popleft(); geo=self.all_proxies[p_str]; self.active_proxies[p_str]=time.time(); p_url=get_proxy_url(p_str);
                try: prof=ConsistentBrowserProfile(geo)
                except Exception as e: print(f"     Profilo err {geo}: {e}. Uso def."); prof=ConsistentBrowserProfile('DEFAULT')
                scr=None;
                try: bcfg={'browser':'chrome','platform':prof.os if prof.os in ['windows','darwin','linux'] else 'windows','mobile':False,'desktop':True,'user_agent':prof.user_agent}; scr=cloudscraper.create_scraper(browser=bcfg,delay=random.uniform(0.5,1.5)); scr.headers.update(prof.get_headers());
                except Exception as e: print(f"     Scraper err {geo} ({type(e).__name__}). Uso base."); scr=requests.Session(); scr.headers.update(prof.get_headers());
                if p_url: scr.proxies={'http':p_url,'https':p_url}
                self.active_sessions[p_str]={'scraper':scr,'profile':prof, 'proxy_url': p_url}; return p_str, geo, self.active_sessions[p_str] # Restituisce anche proxy_url
            else: return None
    def get_pytrends_session(self,p_str,prof): p_url=get_proxy_url(p_str); p_list=[p_url] if p_url else []; params=prof.get_pytrends_params(); return TrendReq(hl=params['hl'],tz=params['tz'],timeout=(PYTRENDS_CONNECT_TIMEOUT,PYTRENDS_READ_TIMEOUT),retries=PYTRENDS_RETRIES,backoff_factor=PYTRENDS_BACKOFF_FACTOR,proxies=p_list)
    def release_proxy(self,p_str,success=True,status_code=None,error_type=None):
        with self.lock:
            if p_str not in self.all_proxies: warnings.warn(f"Release proxy non gestito: {p_str}", UserWarning); return
            if p_str in self.active_sessions: s_data=self.active_sessions.pop(p_str); [s_data['scraper'].close() for k in ['scraper'] if k in s_data and hasattr(s_data['scraper'],'close')]
            if p_str in self.active_proxies: del self.active_proxies[p_str]
            cd_end=time.time()+self.cooldown_seconds; geo=self.all_proxies.get(p_str,'N/A');
            if success: self.proxy_stats[p_str]["success"]+=1; self.proxy_consecutive_failures[p_str]=0
            else:
                self.proxy_consecutive_failures[p_str]+=1; fails=self.proxy_consecutive_failures[p_str];
                if error_type=='429_related' or status_code==429: self.proxy_stats[p_str]["fail_429"]+=1; cd_end=time.time()+(self.cooldown_seconds*4)
                elif error_type=='Timeout': self.proxy_stats[p_str]["fail_timeout"]+=1; cd_end=time.time()+(self.cooldown_seconds*2)
                elif error_type=='ProxyError' or (isinstance(status_code,int) and 500<=status_code<=599): self.proxy_stats[p_str]["fail_proxy_error"]+=1; cd_end=time.time()+(self.cooldown_seconds*3)
                elif error_type=='parse_fail' or error_type=='empty_data': self.proxy_stats[p_str]["fail_parse"]+=1; cd_end=time.time()+(self.cooldown_seconds*1.5)
                else: self.proxy_stats[p_str]["fail_other"]+=1; cd_end=time.time()+(self.cooldown_seconds*1.2)
                if fails>=PROXY_FAILURE_THRESHOLD: mult=1+(PROXY_FAILURE_COOLDOWN_MULTIPLIER*(fails-PROXY_FAILURE_THRESHOLD+1)); add_cd=self.cooldown_seconds*mult; ct=time.time(); base_dur=cd_end-ct; final_dur=base_dur+add_cd; cd_end=ct+final_dur; print(f"     INFO: Proxy {geo} ({p_str[-10:]}) ha {fails} fails cons. CD esteso a {final_dur:.0f}s.")
            self.cooldown_proxies[p_str]=cd_end
    def get_proxy_stats_summary(self):
        with self.lock:
            ts=sum(s.get("success",0) for s in self.proxy_stats.values()); tf429=sum(s.get("fail_429",0) for s in self.proxy_stats.values()); tfp=sum(s.get("fail_proxy_error",0)+s.get("fail_5xx",0)+s.get("fail_timeout",0) for s in self.proxy_stats.values()); tfo=sum(s.get("fail_other",0)+s.get("fail_parse",0) for s in self.proxy_stats.values()); fpd={};
            for p, s in self.proxy_stats.items(): geo=self.all_proxies.get(p,'N/A'); f429=s.get("fail_429",0); fp=s.get("fail_proxy_error",0)+s.get("fail_5xx",0)+s.get("fail_timeout",0); fo=s.get("fail_other",0)+s.get("fail_parse",0); tf=f429+fp+fo;
            if tf>0: fpd[f"{geo} ({p[-10:]})"]={"success":s.get("success",0),"fail_429":f429,"fail_proxy/timeout":fp,"fail_other/parse":fo,"consecutive_fails":self.proxy_consecutive_failures.get(p,0)}
            sfp=dict(sorted(fpd.items(),key=lambda i:sum(i[1][k] for k in i[1] if k.startswith('fail')),reverse=True)); return {"total_success":ts,"total_fail_429":tf429,"total_fail_proxy_timeout":tfp,"total_fail_other_parse":tfo,"top_failing_proxies":dict(list(sfp.items())[:15])}

class ConsistentBrowserProfile:
    BROWSER_TYPES=['chrome'];OS_MAP={'WINDOWS':['windows'],'MACOS':['darwin'],'LINUX':['linux']};GEO_OS_PREFERENCE={'US':['WINDOWS','MACOS'],'CA':['WINDOWS','MACOS'],'GB':['WINDOWS','MACOS'],'FR':['WINDOWS','MACOS'],'DE':['WINDOWS','MACOS'],'IT':['WINDOWS','MACOS'],'ES':['WINDOWS','MACOS'],'AU':['WINDOWS','MACOS'],'JP':['WINDOWS','MACOS'],'BR':['WINDOWS'],'IN':['WINDOWS'],'DEFAULT':['WINDOWS','MACOS','LINUX']};FALLBACK_USER_AGENT="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
    def __init__(self,geo_code):
        if not geo_code or not isinstance(geo_code,str): geo_code='DEFAULT'
        else: geo_code=geo_code.upper()
        self.geo_code=geo_code; self.locale_info=get_locale_for_geo(self.geo_code); pos_os=self.GEO_OS_PREFERENCE.get(self.geo_code,self.GEO_OS_PREFERENCE['DEFAULT']); os_g=random.choice(pos_os); self.os=random.choice(self.OS_MAP.get(os_g,['windows']))[0]; self.browser='chrome'; self.user_agent=self.FALLBACK_USER_AGENT;
        try: ua=UserAgent(use_external_data=False,browsers=['chrome']); self.user_agent=ua.chrome
        except: pass
        lang_base=self.locale_info['hl'].split('-')[0]; self.accept_language=f"{self.locale_info['hl']},{lang_base};q=0.9,en;q=0.8"
    def get_headers(self): return {'User-Agent':self.user_agent,'Accept-Language':self.accept_language,'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7','Accept-Encoding':'gzip, deflate, br','Connection':'keep-alive','Sec-CH-UA':f'"Chromium";v="{random.randint(118,122)}", "Google Chrome";v="{random.randint(118,122)}", "Not?A_Brand";v="99"','Sec-CH-UA-Mobile':'?0','Sec-CH-UA-Platform':f'"{self.os.capitalize()}"','Sec-Fetch-Dest':'document','Sec-Fetch-Mode':'navigate','Sec-Fetch-Site':random.choice(['none','same-origin']),'Sec-Fetch-User':'?1','Upgrade-Insecure-Requests':'1','Cache-Control':'max-age=0',}
    def get_pytrends_params(self): return {'hl':self.locale_info['hl'],'tz':self.locale_info['tz']}

# --- Inizializzazione Manager Globale ---
proxy_manager = AdvancedProxyManager(proxies_list_with_geo, MAX_CONCURRENT_PROXIES, PROXY_USE_COOLDOWN)

# --- Funzione Utilità get_proxy_url (Invariata) ---
def get_proxy_url(proxy_str):
    """Converte la stringa proxy nel formato URL http://user:pass@host:port."""
    if not proxy_str: return None
    parts = proxy_str.split(':')
    if len(parts) == 4:
        host, port, user, pwd = parts
        if port.isdigit(): return f"http://{user}:{pwd}@{host}:{port}"
    return None

# --- Estrazione Entità ORDINATA (Invariata) ---
def extract_ordered_entities(max_retries=ENTITY_EXTRACTION_MAX_RETRIES, initial_wait=ENTITY_EXTRACTION_INITIAL_WAIT):
    """Estrae la lista ORDINATA di entità da Google Trends TV."""
    attempts = 0; current_wait = initial_wait; proxy_info, geo_code = None, None; print(f"Avvio estrazione lista entità ORDINATA (max {max_retries} tentativi)...")
    while attempts < max_retries:
        attempts += 1; print(f"Tentativo {attempts}/{max_retries} per estrarre entità ordinate...")
        proxy_info, status_code, error_type_str, release_success = None, None, None, False; scraper, session_data, geo_code = None, None, None
        try:
            get_proxy_attempts = 0
            while proxy_info is None and get_proxy_attempts < 5: get_proxy_attempts += 1; proxy_info = proxy_manager.get_proxy(); time.sleep(random.uniform(2, 5) if proxy_info is None else 0)
            if proxy_info is None: print("   Impossibile ottenere proxy per estrazione iniziale. Attesa..."); time.sleep(min(current_wait * 1.5, MAX_WAIT_SECONDS / 2)); current_wait *= 1.5; continue
            proxy_str, geo_code, session_data = proxy_info; scraper = session_data['scraper']; print(f"   Tentativo estrazione con proxy: {geo_code} ({proxy_str[-10:]})")
            time.sleep(random.uniform(0.5, 1.5)); target_url = "https://trends.google.com/tv/?geo=IT"; res = None; max_internal_retries = 2
            for internal_attempt in range(max_internal_retries):
                try:
                    res = scraper.get(target_url, timeout=(ENTITY_EXTRACTION_CONNECT_TIMEOUT, ENTITY_EXTRACTION_READ_TIMEOUT))
                    if res.status_code == 200: break
                    else: status_code = res.status_code; print(f"      Non-200: {status_code}, Retry {internal_attempt + 1}/{max_internal_retries}"); time.sleep(1.5 if internal_attempt < max_internal_retries - 1 else 0)
                except (requests.exceptions.Timeout, socket.timeout) as e_timeout_internal:
                    print(f"      Timeout interno req {internal_attempt + 1}/{max_internal_retries}: {type(e_timeout_internal).__name__}"); res = None; status_code = None
                    if internal_attempt < max_internal_retries - 1: time.sleep(2)
                    else: print(f"      Falliti tutti retry interni (Timeout)."); raise e_timeout_internal
                except Exception as e_int:
                    print(f"      Errore interno req {internal_attempt + 1}/{max_internal_retries}: {type(e_int).__name__} - {str(e_int)[:100]}"); res = None; status_code = None
                    if internal_attempt < max_internal_retries - 1: time.sleep(2)
                    else: print(f"      Falliti tutti retry interni (Exception)."); raise e_int
            if res is None or res.status_code != 200: status_code = res.status_code if res else None; raise Exception(f"Req fallita dopo retry interni. Status: {status_code}")
            status_code = res.status_code; soup = BeautifulSoup(res.text, 'html.parser'); scripts = soup.find_all('script'); found_data = False; ordered_entities_found = []
            for script in scripts:
                if script.string and 'AF_initDataCallback' in script.string and 'key: \'ds:0\'' in script.string:
                    try:
                        match = re.search(r"data:(.*), sideChannel:", script.string, re.DOTALL)
                        if match: json_text = match.group(1).strip().rstrip(','); data = json.loads(json_text)
                        if isinstance(data, list) and len(data) > 1 and isinstance(data[1], list):
                            entities = [item[0] for item in data[1] if isinstance(item, list) and item and isinstance(item[0], str)]
                            if entities: ordered_entities_found = entities; found_data = True; break
                    except Exception as e_parse: print(f"      Parse JSON err (Proxy: {geo_code}): {e_parse}"); error_type_str = 'parse_fail'
            if found_data and ordered_entities_found: print(f"   Estratte {len(ordered_entities_found)} entità ordinate via {geo_code}."); release_success = True; return ordered_entities_found
            else: print(f"   Status 200 ma dati non trovati/parsati via {geo_code}."); error_type_str = 'parse_fail'; wait_time = min(current_wait * 1.5, MAX_WAIT_SECONDS / 2); time.sleep(wait_time); current_wait = wait_time * 1.2
        except Exception as e:
            error_type_str = type(e).__name__; print(f"!! Errore estrazione (Tentativo {attempts}, Proxy: {geo_code}): {error_type_str}: {e} !!"); # traceback.print_exc();
            wait_time = min(current_wait * 1.2, MAX_WAIT_SECONDS / 2); time.sleep(wait_time); current_wait = wait_time * 1.2
            if isinstance(e, (requests.exceptions.ProxyError, requests.exceptions.ConnectionError)): error_type_str = 'ProxyError'
            elif isinstance(e, requests.exceptions.Timeout): error_type_str = 'Timeout'
            if 'res' not in locals() or res is None: status_code = None
        finally:
            if proxy_info: proxy_manager.release_proxy(proxy_info[0], success=release_success, status_code=status_code, error_type=error_type_str); proxy_info = None
    print(f"!!! Estrazione entità ORDINATE fallita dopo {max_retries} tentativi. !!!"); return None

# --- Funzione get_trends_scores (Invariata) ---
def get_trends_scores(keywords, timeframe):
    """Ottiene i punteggi medi da Pytrends per un gruppo di keyword e timeframe."""
    attempts = 0; current_backoff_429 = INITIAL_BACKOFF_SECONDS_429; current_backoff_other = 3.0; start_time = time.time()
    proxy_info, pytrends, geo_code = None, None, None
    max_proxy_attempts = min(len(proxy_manager.all_proxies) // 2, MAX_RETRIES_PYTRENDS_CONTEXT * 2); proxy_attempts_set = set()
    kw_list_str = ",".join(sorted(keywords)); kw_hash = hashlib.md5(kw_list_str.encode()).hexdigest()[:6]
    while attempts < MAX_RETRIES_PYTRENDS_CONTEXT and len(proxy_attempts_set) < max_proxy_attempts: # Usa retry contesto
        attempts += 1; proxy_info, status_code, error_type_str, release_success = None, None, None, False; pytrends, session_data, geo_code = None, None, None
        try:
            get_proxy_attempts = 0
            while proxy_info is None and get_proxy_attempts < 5: get_proxy_attempts += 1; proxy_info = proxy_manager.get_proxy(); time.sleep(random.uniform(2, 5) if proxy_info is None else 0)
            if proxy_info is None: print(f"       [CTX KW:{kw_hash} T{attempts}] No proxy for context. Skip."); time.sleep(min(current_backoff_other * 1.5, MAX_WAIT_SECONDS / 2)); current_backoff_other *= 1.2; continue
            proxy_str, geo_code, session_data = proxy_info
            if proxy_str in proxy_attempts_set: proxy_manager.release_proxy(proxy_str, success=False, error_type="duplicato_interno"); proxy_info = None; continue
            proxy_attempts_set.add(proxy_str); profile = session_data['profile']
            try: pytrends = proxy_manager.get_pytrends_session(proxy_str, profile)
            except Exception as e_session: print(f"       [CTX KW:{kw_hash} T{attempts}] Session err (Proxy: {geo_code}): {e_session}"); proxy_manager.release_proxy(proxy_str, success=False, error_type="pytrends_session_error"); proxy_info = None; continue
            base_delay = random.uniform(MIN_DELAY_BETWEEN_REQUESTS, MAX_DELAY_BETWEEN_REQUESTS);
            time.sleep(base_delay)
            shuffled = keywords.copy(); random.shuffle(shuffled); pytrends.build_payload(shuffled, timeframe=timeframe, geo='IT', gprop='')
            df = pytrends.interest_over_time()
            if df.empty or all(c == 'isPartial' for c in df.columns): print(f"       [CTX KW:{kw_hash} T{attempts}] Empty data (Proxy: {geo_code})."); error_type_str = 'empty_data'; time.sleep(current_backoff_other); current_backoff_other = min(current_backoff_other * 1.2, MAX_WAIT_SECONDS / 4)
            else: scores = df.drop(columns=['isPartial'], errors='ignore').mean().to_dict(); final = {kw: scores.get(kw, 0) for kw in keywords}; elapsed = time.time() - start_time;
            release_success = True; return final
        except requests.exceptions.HTTPError as http_err:
            status_code = http_err.response.status_code if hasattr(http_err, 'response') and http_err.response else None; print(f"     !![CTX KW:{kw_hash} T{attempts}] HTTP Err {status_code or 'N/A'} (Proxy: {geo_code}).")
            if status_code == 429: error_type_str = '429_related'; wait = min(current_backoff_429, MAX_WAIT_SECONDS); print(f"          -> 429! Wait: {wait:.1f}s..."); time.sleep(wait); current_backoff_429 = min(current_backoff_429 * BACKOFF_MULTIPLIER_429, MAX_WAIT_SECONDS * 1.5)
            elif status_code and 500 <= status_code <= 599: error_type_str = 'ProxyError'; wait = min(current_backoff_other*1.5, MAX_WAIT_SECONDS/2); print(f"          -> 5xx Err {status_code}. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
            else: error_type_str = f"HTTP_{status_code or 'N/A'}"; wait = min(current_backoff_other*1.5, MAX_WAIT_SECONDS/2); print(f"          -> HTTP Err {status_code}. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
        except (requests.exceptions.Timeout, socket.timeout) as timeout_err: error_type_str = 'Timeout'; print(f"     !![CTX KW:{kw_hash} T{attempts}] Timeout (Proxy: {geo_code}): {timeout_err}"); wait = min(current_backoff_other*1.2, MAX_WAIT_SECONDS/2); print(f"          -> Timeout. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = wait * 1.2
        except (requests.exceptions.ProxyError, requests.exceptions.ConnectionError, ConnectionRefusedError, OSError) as proxy_err:
            error_type_str = 'ProxyError'; status_code = 502 if '502' in str(proxy_err) else None
            print(f"     !![CTX KW:{kw_hash} T{attempts}] Proxy/Conn Err (Proxy: {geo_code}): {type(proxy_err).__name__} - {str(proxy_err)[:100]}")
            wait = min(current_backoff_other * 1.5, MAX_WAIT_SECONDS / 2); print(f"          -> Proxy Err. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other * 1.5, MAX_WAIT_SECONDS)
        except Exception as e:
            msg = str(e); error_type_str = type(e).__name__; is_429 = '429' in msg or ('response' in dir(e) and hasattr(e.response, 'status_code') and e.response.status_code == 429) ; print(f"!! [CTX KW:{kw_hash} T{attempts}] UNEXPECTED Err (Proxy: {geo_code}): {error_type_str}: {msg[:150]}...")
            if is_429: error_type_str = '429_related'; wait = min(current_backoff_429, MAX_WAIT_SECONDS); print(f"          -> 429 DETECTED! Wait: {wait:.1f}s..."); time.sleep(wait); current_backoff_429 = min(current_backoff_429 * BACKOFF_MULTIPLIER_429, MAX_WAIT_SECONDS * 1.5)
            elif isinstance(e, AttributeError): error_type_str = 'parse_fail'; wait = min(current_backoff_other, MAX_WAIT_SECONDS/2); print(f"          -> Attr Err. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
            else: wait = min(current_backoff_other, MAX_WAIT_SECONDS/2); print(f"          -> Generic Err. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
        finally:
            if proxy_info: proxy_manager.release_proxy(proxy_info[0], success=release_success, status_code=status_code, error_type=error_type_str); proxy_info = None
    print(f"!!! [CTX KW:{kw_hash}] Failed {attempts} context attempts for {kw_list_str} ({timeframe}). Returning scores as 0.")
    return {kw: 0 for kw in keywords}

# --- Funzione get_all_context_scores (Invariata) ---
def get_all_context_scores(entities_subset, timeframe, max_threads=MAX_THREADS_PYTRENDS):
    """Ottiene i punteggi per tutte le entità in parallelo per un dato timeframe."""
    all_scores = {}; entity_list = list(set(entities_subset)); random.shuffle(entity_list)
    group_size = 3; groups = [entity_list[i:i+group_size] for i in range(0, len(entity_list), group_size)]
    print(f"\n--- Raccolta score CONTESTO: {timeframe} ({len(groups)} gruppi / {len(entity_list)} entità / {max_threads} threads) ---")
    sem = threading.Semaphore(max_threads)
    def get_trends_scores_safe(kw, tf):
        with sem:
            try: return get_trends_scores(kw, tf)
            except Exception as e: print(f"\n!!! Exc safe ctx: {type(e).__name__} !!!"); return {k: 0 for k in kw}
    with concurrent.futures.ThreadPoolExecutor(max_workers=max_threads) as executor:
        future_to_group = {}; print(f"   Sottomissione {len(groups)} task CONTESTO..."); time.sleep(0.5)
        for idx, group in enumerate(groups): future = executor.submit(get_trends_scores_safe, group, timeframe); future_to_group[future] = group; time.sleep(random.uniform(0.05, 0.15) if idx % 10 != 0 else random.uniform(0.3, 0.6))
        print(f"   Attesa completamento task CONTESTO..."); completed_count, failed_count = 0, 0; failed_groups = []; total_tasks = len(groups)
        for future in tqdm(concurrent.futures.as_completed(future_to_group), total=total_tasks, desc=f"Context {timeframe}", unit="group"):
            completed_count += 1; group = future_to_group[future]
            try:
                result = future.result(timeout=MAX_WAIT_SECONDS * 2)
                if result and any(s > 0 for s in result.values()): all_scores.update(result)
                else: failed_count += 1; failed_groups.append(group); [all_scores.setdefault(e, 0) for e in group]
            except concurrent.futures.TimeoutError: print(f"\n!!! Timeout recupero risultato CONTESTO {group} ({timeframe}) !!!"); failed_count += 1; failed_groups.append(group); [all_scores.setdefault(e, 0) for e in group]
            except Exception as exc: print(f"\n!!! Errore recupero CONTESTO {group} ({timeframe}): {exc} !!!"); failed_count += 1; failed_groups.append(group); [all_scores.setdefault(e, 0) for e in group]
        if failed_groups and failed_count > 0 and failed_count < total_tasks:
            print(f"\n--- Riprovando {len(failed_groups)} gruppi CONTESTO falliti per {timeframe} ---");
            retry_failed_count = len(failed_groups); initial_failed_count = failed_count; retry_futures = {}
            with concurrent.futures.ThreadPoolExecutor(max_workers=max_threads // 2 + 1) as retry_executor:
                for group in failed_groups: time.sleep(random.uniform(0.5, 1.5)); future = retry_executor.submit(get_trends_scores_safe, group, timeframe); retry_futures[future] = group
                for future in tqdm(concurrent.futures.as_completed(retry_futures), total=len(failed_groups), desc=f"Retry Ctx {timeframe}", unit="group"):
                    group = retry_futures[future]
                    try:
                        result = future.result(timeout=MAX_WAIT_SECONDS * 2.5)
                        if result and any(s > 0 for s in result.values()): all_scores.update(result); retry_failed_count -= 1;
                    except Exception as retry_exc: print(f"     Errore retry ctx {group}: {retry_exc}")
            failed_count = retry_failed_count
            print(f"--- Retry CONTESTO {timeframe} completato. Falliti finali: {failed_count} ---")
        else: print(f"--- Raccolta score CONTESTO {timeframe} completata. ({total_tasks} task, {failed_count} falliti) ---")
    return {entity: all_scores.get(entity, 0) for entity in entity_list}

# ==============================================================================
# ==================== FUNZIONI INTEGRAZIONE OPENAI (Invariate) ================
# ==============================================================================
def get_single_entity_openai(trend_string, model=OPENAI_MODEL, max_retries=OPENAI_MAX_RETRIES, request_timeout=OPENAI_REQUEST_TIMEOUT):
    """
    Chiama l'API OpenAI per estrarre entità da una singola stringa di trend.
    Restituisce una stringa di entità separate da ' - ' o None in caso di fallimento.
    """
    if not client: return None
    prompt = f"""Data la seguente query di ricerca Google Trends, estrai le 3-5 entità o concetti chiave più importanti (persone, luoghi, eventi, organizzazioni, temi principali). Elencali separati da " - " (spazio trattino spazio). Sii conciso e pertinente alla query. Non aggiungere introduzioni, spiegazioni o virgolette attorno alla lista. Esempio: Se la query è "Meteo Roma prossimi giorni", la risposta dovrebbe essere "Meteo - Roma - Previsioni". Query di input: "{trend_string}" """
    attempts = 0
    while attempts < max_retries:
        attempts += 1
        try:
            response = client.chat.completions.create(
                model=model,
                messages=[
                    {"role": "system", "content": "Sei un assistente AI esperto nell'identificare e estrarre le entità e i concetti chiave principali da brevi query di ricerca, formattandoli come richiesto."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.1, max_tokens=60, n=1, stop=None, timeout=request_timeout
            )
            entities_text = response.choices[0].message.content.strip()
            entities_text = re.sub(r"^(Ecco le entità estratte:|Le entità chiave sono:|Entità estratte:|Risposta:)\s*", "", entities_text, flags=re.IGNORECASE)
            entities_text = entities_text.strip('\'" ')
            if entities_text.endswith('.'): entities_text = entities_text[:-1].strip()
            if entities_text and len(entities_text) > 1: return entities_text
            else: return None # Nessuna entità significativa
        except openai.APITimeoutError:
            print(f"  !! [OpenAI Timeout] Tentativo {attempts}/{max_retries} per '{trend_string}'. Attesa...")
            if attempts >= max_retries: print(f"  !! [OpenAI Timeout] Fallito dopo {max_retries} tentativi per '{trend_string}'."); return None
            time.sleep(3 * attempts)
        except openai.APIConnectionError as e:
            print(f"  !! [OpenAI Connection Err] Tentativo {attempts}/{max_retries} per '{trend_string}': {e}. Attesa...")
            if attempts >= max_retries: print(f"  !! [OpenAI Connection Err] Fallito dopo {max_retries} tentativi per '{trend_string}'."); return None
            time.sleep(5 * attempts)
        except openai.RateLimitError:
            print(f"  !! [OpenAI Rate Limit] Tentativo {attempts}/{max_retries} per '{trend_string}'. Attesa lunga...")
            if attempts >= max_retries: print(f"  !! [OpenAI Rate Limit] Fallito dopo {max_retries} tentativi per '{trend_string}'."); return None
            time.sleep(15 * attempts)
        except openai.APIStatusError as e:
            print(f"  !! [OpenAI Status Err {e.status_code}] Tentativo {attempts}/{max_retries} per '{trend_string}': {e.message}. Attesa...")
            if attempts >= max_retries: print(f"  !! [OpenAI Status Err] Fallito dopo {max_retries} tentativi per '{trend_string}'."); return None
            if e.status_code >= 500 or e.status_code in [401, 403]: print(f"  !! Errore {e.status_code} non recuperabile. Interruzione tentativi per '{trend_string}'."); return None
            time.sleep(5 * attempts)
        except Exception as e:
            print(f"  !! [OpenAI Generic Err] Tentativo {attempts}/{max_retries} per '{trend_string}': {type(e).__name__} - {e}")
            if attempts >= max_retries: print(f"  !! [OpenAI Generic Err] Fallito dopo {max_retries} tentativi per '{trend_string}'."); return None
            time.sleep(3 * attempts)
    print(f"!!! [OpenAI FAIL] Falliti tutti i {max_retries} tentativi per '{trend_string}'")
    return None

def get_entities_with_openai(trend_list, max_workers=MAX_OPENAI_THREADS):
    """
    Ottiene le entità estratte da OpenAI per una lista di trend in parallelo.
    Restituisce un dizionario {trend_string: extracted_entities_string}.
    """
    if not client or not FETCH_OPENAI_ENTITIES:
        print("\n--- Estrazione Entità OpenAI Saltata ---")
        return {}
    print(f"\n--- Avvio Estrazione Entità OpenAI ({len(trend_list)} trends, Max Workers: {max_workers}, Modello: {OPENAI_MODEL}) ---")
    extracted_entities_map = {}
    futures = {}
    sem = threading.Semaphore(max_workers)
    def call_openai_safe(trend):
        with sem:
            result = get_single_entity_openai(trend)
            return result
    with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
        print(f"  Sottomissione {len(trend_list)} task a OpenAI...")
        for trend in trend_list:
            future = executor.submit(call_openai_safe, trend)
            futures[future] = trend
            time.sleep(random.uniform(0.02, 0.08))
        print("  Attesa completamento task OpenAI...")
        successful_count = 0
        total_tasks = len(trend_list)
        for future in tqdm(concurrent.futures.as_completed(futures), total=total_tasks, desc="Estrazione Entità OpenAI", unit="trend", ncols=100):
            trend = futures[future]
            result = '' # Default a stringa vuota
            try:
                result_raw = future.result(timeout=OPENAI_REQUEST_TIMEOUT * (OPENAI_MAX_RETRIES + 2))
                if result_raw: result = result_raw; successful_count += 1
            except concurrent.futures.TimeoutError: print(f"\n!!! Timeout globale OpenAI per '{trend}' !!!")
            except Exception as exc: print(f"\n!!! Errore recupero risultato OpenAI per '{trend}': {exc} !!!")
            extracted_entities_map[trend] = result # Mappa sempre
    print(f"--- Estrazione Entità OpenAI completata ({successful_count}/{total_tasks} con successo) ---")
    return extracted_entities_map

# ==============================================================================
# ================== FUNZIONI PER SCRAPING SATURAZIONE (NUOVE) ==================
# ==============================================================================

# --- Parsing Risultati SERP (Adattato dal tuo script di test) ---
def parse_serp_result_stats(html_content):
    """Estrae il numero di risultati dal div #result-stats (o simili)."""
    # NOTA: Ho rimosso i print di debug verbosi per pulizia
    try:
        soup = BeautifulSoup(html_content, 'html.parser')
        result_stats_div = None
        raw_stats_text = "N/D (No Div)"

        if not soup.body:
            # print("   [Parse SAT FATAL] Tag <body> non trovato!")
            return None, "Body HTML mancante"

        # Prova con ID
        result_stats_div = soup.find('div', id='result-stats')

        # Prova con classe se ID fallisce
        if not result_stats_div:
            result_stats_div = soup.find('div', class_='result-stats')

        # Prova euristica se ancora non trovato
        if not result_stats_div:
             possible_divs = soup.find_all('div')
             for div in possible_divs:
                 div_text = div.get_text(separator=" ", strip=True).lower()
                 if 'risultat' in div_text and ('circa' in div_text or re.search(r'\d', div_text)):
                     result_stats_div = div
                     break # Trovato euristicamente

        if result_stats_div:
            stats_text = result_stats_div.get_text(separator=" ", strip=True)
            raw_stats_text = stats_text
            # Regex migliorata per gestire 'Circa X risultati' o solo 'X risultati'
            match = re.search(r'(?:Circa\s*)?([\d\.]+)\s+risultat', stats_text.replace('\xa0', ' '))
            if match:
                num_str = match.group(1).replace('.', '').replace(',', '') # Rimuovi punti e virgole
                if num_str.isdigit():
                    return int(num_str), raw_stats_text
            # Gestione esplicita 'Nessun risultato trovato'
            if "nessun risultato trovato per" in stats_text.lower() or "nessun risultato" in stats_text.lower():
                 return 0, raw_stats_text
            # Se non matcha ma c'è il div, forse formato strano? Restituisci None ma logga
            # print(f"   [Parse SAT WARN] Div trovato ma num non estratto: '{stats_text}'")
            return None, raw_stats_text # Fallito parsing numero
        else:
            # Nessun div trovato
            return None, raw_stats_text # Fallito trovamento div

    except Exception as e:
        print(f"   [Parse SAT ERR] Errore durante parsing HTML: {e}")
        # traceback.print_exc() # Troppo verboso in produzione
        return None, f"Errore Parsing Eccezione: {type(e).__name__}"

# --- Funzione Scraping SERP con curl_cffi (Adattata e integrata) ---
def fetch_intitle_serp_count(keyword, proxy_url=None, impersonate_browser='chrome124', timeout=30):
    """
    Esegue UNA richiesta SERP usando curl_cffi + headers specifici + proxy.
    Restituisce il conteggio o None in caso di errore.
    """
    if impersonate_get is None: return None # Salta se curl_cffi non c'è

    search_term = f'intitle:"{keyword}"' # Assicura virgolette attorno alla keyword
    encoded_query = quote_plus(search_term)
    # Cerca nelle ultime 24 ore (tbs=qdr:d) e solo pagine in italiano (lr=lang_it)
    target_url = f"https://www.google.it/search?q={encoded_query}&hl=it&gl=it&lr=lang_it&tbs=qdr:d,lr:lang_1it&num=10" # num=10 è sufficiente

    headers = {
        "Referer": "https://www.google.com/",
        "Accept-Language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
        "Accept-Encoding": "gzip, deflate, br, zstd",
         # Usa un UA consistente o quello dal profilo se disponibile
        "User-Agent": f"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/{random.randint(120, 125)}.0.0.0 Safari/537.36"
    }

    html_content = None
    status_code = None
    final_url = target_url
    error_reason = None

    proxies_dict = None
    if proxy_url:
        proxies_dict = {'http': proxy_url, 'https': proxy_url}
        # print(f"   [SAT Debug] Usando proxy: {proxy_url}") # Debug Proxy

    try:
        response = impersonate_get(
            target_url,
            headers=headers,
            impersonate=impersonate_browser,
            proxies=proxies_dict, # Passa il proxy qui
            timeout=timeout,
            allow_redirects=True
        )
        status_code = response.status_code
        final_url = response.url

        try:
            html_content = response.text
        except Exception: # Gestisce potenziali errori di decodifica
            html_content = response.content.decode('utf-8', errors='ignore')

        if status_code == 200:
            if "consent.google.com" in final_url or "/sorry/" in final_url or "ipv4.google.com" in final_url:
                 # print(f"   [SAT WARN KW: {keyword}] Reindirizzato a pagina consenso/blocco: {final_url}")
                 error_reason = f"Redirect Blocco ({status_code})"
                 return None, error_reason # Impossibile trovare risultati
            if "<title>Verifica la connessione</title>" in html_content:
                 # print(f"   [SAT WARN KW: {keyword}] Pagina 'Verifica Connessione'")
                 error_reason = f"Verifica Connessione ({status_code})"
                 return None, error_reason

            count, raw_text = parse_serp_result_stats(html_content)

            if count is not None:
                return count, None # Successo
            else:
                # print(f"   [SAT ERR KW: {keyword}] Parsing fallito (status 200). Raw: '{raw_text}'")
                error_reason = f"Parse Fail ({status_code}, Raw: {raw_text[:50]}...)"
                # Salva HTML per debug manuale se necessario
                # filename = f"serp_FAIL_debug_{keyword.replace(' ', '_')[:20]}.html"; open(filename, 'w', encoding='utf-8').write(html_content)
                # print(f"   [Debug FALLIMENTO SAT] HTML salvato.")
                return None, error_reason
        else:
            # print(f"   [SAT ERR KW: {keyword}] Status code non 200: {status_code}")
            error_reason = f"Status {status_code}"
            return None, error_reason

    except RequestsError as e: # Errore specifico di curl_cffi/requests
         # Gestisce timeout, errori proxy, connessione etc.
         # print(f"   [SAT ERR KW: {keyword}] Errore Richiesta/Connessione (curl_cffi): {type(e).__name__}")
         error_reason = f"RequestExc: {type(e).__name__}"
         return None, error_reason
    except Exception as e_main:
         # print(f"   [SAT ERR KW: {keyword}] Errore Inatteso scraping: {type(e_main).__name__}")
         # traceback.print_exc() # Debug
         error_reason = f"GenericExc: {type(e_main).__name__}"
         return None, error_reason

# --- Funzione di Normalizzazione ---
def normalize_scores(scores_dict, min_val=1, max_val=100):
    """Normalizza un dizionario di punteggi su scala min_val-max_val."""
    scores = np.array([v for v in scores_dict.values() if v is not None and v >= 0], dtype=float) # Ignora None e negativi

    if len(scores) == 0: # Nessun punteggio valido
        return {k: (min_val + max_val) / 2 for k in scores_dict} # Ritorna valore medio

    min_score = np.min(scores)
    max_score = np.max(scores)

    if min_score == max_score: # Tutti i punteggi sono uguali
        # Se tutti 0, assegna min_val, altrimenti max_val (o medio?)
        # Assegnamo il minimo (meno saturo) se tutti uguali e > 0, o 0 se tutti 0
        norm_value = min_val if max_score == 0 else min_val # Se tutti uguali e >0, considerali poco saturi
        return {k: norm_value if v is not None and v >= 0 else min_val for k, v in scores_dict.items()}

    # Normalizzazione lineare standard
    normalized_scores = {}
    for k, v in scores_dict.items():
        if v is not None and v >= 0:
            # Formula: min_val + (v - min_score) * (max_val - min_val) / (max_score - min_score)
            # Scala invertita: più risultati = punteggio più alto (più saturazione)
            normalized = min_val + (v - min_score) * (max_val - min_val) / (max_score - min_score)
            normalized_scores[k] = normalized
        else:
             # Assegna un valore medio per quelli falliti? O minimo? Usiamo il medio.
             normalized_scores[k] = (min_val + max_val) / 2

    return normalized_scores

# --- Funzione Principale per Ottenere e Normalizzare Saturazione ---
def fetch_and_normalize_saturation_scores(entities_list, proxy_manager_instance, max_threads=MAX_THREADS_SATURATION):
    """
    Ottiene i conteggi SERP intitle per la lista di entità usando proxy e li normalizza.
    Restituisce un dizionario {entita: saturation_score_normalizzato}.
    """
    if not FETCH_SATURATION_SCORE:
        print("\n--- Calcolo Saturazione Saltato (disattivato o curl_cffi mancante) ---")
        return {entity: 0 for entity in entities_list} # Ritorna 0 per tutti

    print(f"\n--- Avvio Calcolo Saturazione per {len(entities_list)} Entità (Max Threads: {max_threads}) ---")
    raw_results = {} # {entity: count}
    futures = {}
    sem = threading.Semaphore(max_threads)
    lock = threading.Lock() # Lock per aggiornare raw_results

    def fetch_single_saturation(entity):
        """Wrapper per ottenere un proxy e chiamare lo scraper SERP."""
        nonlocal raw_results
        attempts = 0
        result_count = None
        last_error = "Max Retries Reached"

        while attempts < SATURATION_MAX_RETRIES_PER_KEYWORD:
            attempts += 1
            proxy_info, proxy_str, geo_code = None, None, None
            release_success = False
            status_code_proxy = None
            error_type_proxy = None
            proxy_url = None

            try:
                # 1. Ottieni Proxy
                get_proxy_attempts = 0
                while proxy_info is None and get_proxy_attempts < 3:
                    get_proxy_attempts += 1
                    proxy_info = proxy_manager_instance.get_proxy()
                    if proxy_info:
                         proxy_str, geo_code, session_data = proxy_info
                         proxy_url = session_data.get('proxy_url') # Ottieni l'URL del proxy formattato
                         break
                    else: time.sleep(random.uniform(3,6)) # Attesa se non ci sono proxy
                if not proxy_info or not proxy_url:
                    # print(f"   [SAT SKIP KW: {entity} T{attempts}] No proxy available.")
                    last_error = "No Proxy Available"
                    time.sleep(random.uniform(SATURATION_DELAY_BETWEEN_REQUESTS[0], SATURATION_DELAY_BETWEEN_REQUESTS[1]))
                    continue # Prova il prossimo tentativo (potrebbe liberarsi un proxy)

                # print(f"   [SAT KW: {entity} T{attempts}] Using proxy {geo_code} ({proxy_str[-10:]})") # Debug

                # 2. Chiama lo Scraper SERP
                time.sleep(random.uniform(SATURATION_DELAY_BETWEEN_REQUESTS[0], SATURATION_DELAY_BETWEEN_REQUESTS[1]))
                count, error_reason = fetch_intitle_serp_count(
                    entity,
                    proxy_url=proxy_url,
                    impersonate_browser=SATURATION_IMPERSONATE_BROWSER,
                    timeout=SATURATION_REQUEST_TIMEOUT
                )

                # 3. Gestisci Risultato e Rilascia Proxy
                if count is not None:
                    result_count = count
                    release_success = True
                    last_error = None # Successo
                    # print(f"   [SAT OK KW: {entity} T{attempts}] Count: {count} via {geo_code}") # Debug
                    break # Esce dal ciclo while dei tentativi
                else:
                    # print(f"   [SAT FAIL KW: {entity} T{attempts}] Reason: {error_reason} via {geo_code}") # Debug
                    release_success = False
                    error_type_proxy = error_reason if error_reason else "Unknown SERP Fail"
                    last_error = error_type_proxy # Memorizza l'ultimo errore

            except Exception as e_wrap:
                # print(f"   [SAT WRAP ERR KW: {entity} T{attempts}] {type(e_wrap).__name__}") # Debug
                release_success = False
                error_type_proxy = f"WrapperExc: {type(e_wrap).__name__}"
                last_error = error_type_proxy
            finally:
                if proxy_info:
                    proxy_manager_instance.release_proxy(
                        proxy_str,
                        success=release_success,
                        status_code=None, # Non abbiamo uno status code diretto qui
                        error_type=error_type_proxy
                    )

        # Fine tentativi per questa keyword
        with lock:
             if result_count is not None:
                 raw_results[entity] = result_count
             else:
                 raw_results[entity] = -1 # Usa -1 per indicare fallimento totale per questa keyword
                 # print(f"!!! [SAT TOTAL FAIL KW: {entity}] Last error: {last_error}")

    # Sottometti i task
    with concurrent.futures.ThreadPoolExecutor(max_workers=max_threads) as executor:
        print(f"  Sottomissione {len(entities_list)} task SERP Saturazione...")
        for entity in entities_list:
             future = executor.submit(fetch_single_saturation, entity)
             futures[future] = entity
             time.sleep(random.uniform(0.05, 0.2)) # Piccolo delay tra sottomissioni

        # Attendi risultati
        print("  Attesa completamento task SERP Saturazione...")
        success_count = 0
        fail_count = 0
        for future in tqdm(concurrent.futures.as_completed(futures), total=len(entities_list), desc="Calcolo Saturazione", unit="kw"):
             entity = futures[future]
             # Il risultato è già in raw_results grazie al lock
             # Qui potremmo verificare se è fallito o meno
             try:
                 # future.result() # Solo per propagare eventuali eccezioni non gestite nel wrapper
                 with lock:
                     if raw_results.get(entity, -1) != -1:
                         success_count += 1
                     else:
                         fail_count += 1
             except Exception as e_res:
                 print(f"\n!!! Eccezione inattesa recupero futuro per {entity}: {e_res}")
                 fail_count += 1 # Conta come fallito se c'è eccezione qui


    print(f"--- Calcolo Saturazione completato ({success_count} successi, {fail_count} falliti) ---")

    # Filtra i risultati falliti (-1) prima della normalizzazione
    valid_raw_results = {k: v for k, v in raw_results.items() if v != -1}
    failed_keywords = {k for k, v in raw_results.items() if v == -1}

    if not valid_raw_results:
         print("  ATTENZIONE: Nessun risultato SERP valido ottenuto. Saturazione sarà 0 per tutti.")
         return {entity: 0 for entity in entities_list}

    # Normalizza solo i risultati validi
    print(f"  Normalizzazione {len(valid_raw_results)} risultati SERP validi...")
    normalized_scores = normalize_scores(valid_raw_results, min_val=1, max_val=100)

    # Ricostruisci il dizionario finale, assegnando 0 (o valore medio?) ai falliti
    final_saturation_scores = {}
    avg_fail_score = 0 # Punteggio da assegnare in caso di fallimento (0 = meno saturo)
    for entity in entities_list:
         if entity in normalized_scores:
             final_saturation_scores[entity] = normalized_scores[entity]
         else:
             final_saturation_scores[entity] = avg_fail_score # Assegna 0 ai falliti

    print("--- Normalizzazione Saturazione completata ---")
    return final_saturation_scores

# ==============================================================================
# ==================== FUNZIONE OUTPUT HTML (AGGIORNATA) =======================
# ==============================================================================

def generate_html_output(df_final, runtime_info=None):
    """
    Genera solo il file data.js nella directory di output.
    Assume che index.html, style.css, script.js esistano già in OUTPUT_DIR.
    Include il nuovo 'Saturation_Score'.
    """
    try:
        os.makedirs(OUTPUT_DIR, exist_ok=True)

        # Verifica file base (opzionale ma utile)
        # ... (codice verifica omesso per brevità)

        # Prepara la lista di trend per il template
        trend_list = []
        # Aggiungi 'Saturation_Score' alle colonne richieste/opzionali
        required_cols = ['Rank', 'Entita', 'Discover_Score', 'Score_Avg_now 1-H', 'Score_Avg_now 4-H', 'Score_Avg_now 7-d', 'Extracted_Entities', 'Saturation_Score']
        available_cols = df_final.columns
        missing_warned = False
        for col in required_cols:
             if col not in available_cols and col != 'Saturation_Score': # Non avvisare se manca solo saturazione (potrebbe essere disattivata)
                  if not missing_warned:
                     warnings.warn(f"Colonne mancanti nel DF finale: {', '.join([c for c in required_cols if c not in available_cols and c != 'Saturation_Score'])}. Default usati.", UserWarning)
                     missing_warned = True

        for _, row in df_final.iterrows():
            trend_data = {
                'rank': int(row.get('Rank', 0)),
                'entity': row.get('Entita', 'N/A'),
                'discover_score': float(row.get('Discover_Score', 0)),
                'score_1h': float(row.get('Score_Avg_now 1-H', 0)),
                'score_4h': float(row.get('Score_Avg_now 4-H', 0)),
                'score_7d': float(row.get('Score_Avg_now 7-d', 0)),
                'saturation_score': float(row.get('Saturation_Score', 0)), # Aggiunto! Default a 0 se non trovato
                'extracted_entities': row.get('Extracted_Entities', '')
            }
            trend_list.append(trend_data)

        # Prepara i metadati della run
        run_metadata = {
            'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            'trends_count': len(trend_list),
            'top_score': max((t['discover_score'] for t in trend_list), default=0),
            'runtime_minutes': (runtime_info['end_time'] - runtime_info['start_time']) / 60 if runtime_info and 'start_time' in runtime_info and 'end_time' in runtime_info else 0,
            'proxies_used': len(proxy_manager.all_proxies) if proxy_manager else 0,
            'openai_enabled': FETCH_OPENAI_ENTITIES,
            'openai_model': OPENAI_MODEL if FETCH_OPENAI_ENTITIES else 'N/A',
            'saturation_enabled': FETCH_SATURATION_SCORE, # Aggiunto metadato
            'saturation_browser': SATURATION_IMPERSONATE_BROWSER if FETCH_SATURATION_SCORE else 'N/A' # Aggiunto metadato
        }

        # Prepara il contenuto di data.js
        js_data = f"const trendData = {json.dumps(trend_list, indent=2, ensure_ascii=False)};\n\n"
        js_data += f"const runMetadata = {json.dumps(run_metadata, indent=2, ensure_ascii=False)};\n"

        data_js_path = os.path.join(OUTPUT_DIR, 'data.js')
        try:
            with open(data_js_path, 'w', encoding='utf-8') as f:
                f.write(js_data)
        except Exception as e_write:
            print(f"!!! Errore scrittura file {data_js_path}: {e_write} !!!")
            return False

        print(f"\nFile dati '{os.path.basename(data_js_path)}' generato/aggiornato con successo in '{OUTPUT_DIR}'.")
        print(f"Apri '{os.path.join(OUTPUT_DIR, OUTPUT_FILENAME)}' nel browser per visualizzare.")
        return True
    except Exception as e:
        print(f"Errore durante la generazione di data.js: {e}")
        traceback.print_exc()
        return False

# ==============================================================================
# ==================== SCRIPT PRINCIPALE (V7.8 - + Saturazione) ================
# ==============================================================================
if __name__ == "__main__":
    main_start_time = time.time()
    runtime_info = {'start_time': main_start_time}

    # Validazioni iniziali parametri
    if FETCH_VOLUME_CONTEXT:
        if not CONTEXT_TIMEFRAMES: warnings.warn("CONTEXT_TIMEFRAMES vuoto. Contesto disattivato.", UserWarning); FETCH_VOLUME_CONTEXT = False
        if CONTEXT_N_RUNS <= 0: raise ValueError("CONTEXT_N_RUNS >= 1")
    if FETCH_OPENAI_ENTITIES:
        if N_PROCESS_FOR_OPENAI <= 0: warnings.warn("N_PROCESS_FOR_OPENAI <= 0. OpenAI disattivato.", UserWarning); FETCH_OPENAI_ENTITIES = False
        if not client: warnings.warn("Client OpenAI non inizializzato. OpenAI disattivato.", UserWarning); FETCH_OPENAI_ENTITIES = False
    if FETCH_SATURATION_SCORE:
        if N_PROCESS_FOR_SATURATION <= 0: warnings.warn("N_PROCESS_FOR_SATURATION <= 0. Saturazione disattivata.", UserWarning); FETCH_SATURATION_SCORE = False
        if impersonate_get is None: warnings.warn("curl_cffi non importato. Saturazione disattivata.", UserWarning); FETCH_SATURATION_SCORE = False

    print(f"--- Avvio script Discover Prophet V7.8 (Docs Only & OpenAI & Saturazione) ---")
    print(f"Formula Discover Score: V7.9 (Numeratore Pesato: V4h={WEIGHT_V4H_NUMERATOR}, V7d={WEIGHT_V7D_NUMERATOR}; Denominatore K={V7D_PENALTY_K}, epsilon={V7D_PENALTY_EPSILON})")
    print(f"Modalità: Lavora direttamente su '{OUTPUT_DIR}', genera solo 'data.js'.")
    print(f"Estrazione Contesto Volume: {'ATTIVA' if FETCH_VOLUME_CONTEXT else 'DISATTIVATA'} (Top {N_PROCESS_FOR_CONTEXT}, Runs: {CONTEXT_N_RUNS})")
    print(f"Estrazione Entità OpenAI: {'ATTIVA' if FETCH_OPENAI_ENTITIES else 'DISATTIVATA'} (Top {N_PROCESS_FOR_OPENAI}, Modello: {OPENAI_MODEL if FETCH_OPENAI_ENTITIES else 'N/A'})")
    print(f"Calcolo Saturazione SERP: {'ATTIVO' if FETCH_SATURATION_SCORE else 'DISATTIVATO'} (Top {N_PROCESS_FOR_SATURATION}, Browser: {SATURATION_IMPERSONATE_BROWSER if FETCH_SATURATION_SCORE else 'N/A'})")
    print(f"Config Proxy: MaxConc={MAX_CONCURRENT_PROXIES}, CD={PROXY_USE_COOLDOWN}s")
    print(f"Config Threads: Pytrends={MAX_THREADS_PYTRENDS}, OpenAI={MAX_OPENAI_THREADS}, Saturazione={MAX_THREADS_SATURATION}")
    print(f"Output: '{OUTPUT_DIR}', Checkpoints: '{CHECKPOINT_DIR}'")

    ordered_entities = None
    df_final = pd.DataFrame()

    try:
        # Crea directory necessarie
        os.makedirs(CHECKPOINT_DIR, exist_ok=True); print(f"Directory checkpoint: '{CHECKPOINT_DIR}'")
        os.makedirs(OUTPUT_DIR, exist_ok=True); print(f"Directory output: '{OUTPUT_DIR}'")

        # --- 1. Estrazione Lista Ordinata ---
        ordered_entities = extract_ordered_entities()
        if not ordered_entities: raise Exception("Estrazione iniziale fallita.")
        print(f"\nLista Ordinata Iniziale Estratta ({len(ordered_entities)} entità).")
        try:
            df_initial = pd.DataFrame({'Rank': range(1, len(ordered_entities) + 1), 'Entita': ordered_entities})
            df_initial.to_csv(os.path.join(CHECKPOINT_DIR, "01_entities_ordered_extracted.csv"), index=False, encoding='utf-8-sig')
            print(f"  Checkpoint lista ordinata iniziale salvato.")
        except Exception as e: print(f"  Errore salvataggio checkpoint lista ordinata: {e}")

        # Prepara DataFrame finale e inizializza colonne
        df_final = df_initial.copy()
        for tf in CONTEXT_TIMEFRAMES: df_final[f'Score_Avg_{tf}'] = 0.0
        df_final['Extracted_Entities'] = ''
        df_final['Discover_Score'] = 0.0
        df_final['Saturation_Score'] = 0.0 # Inizializza colonna saturazione

        # --- 2. Raccolta Score di Contesto (se attivo) ---
        if FETCH_VOLUME_CONTEXT and N_PROCESS_FOR_CONTEXT > 0 and CONTEXT_TIMEFRAMES:
            print(f"\n--- Avvio Raccolta Score Contesto per Top {N_PROCESS_FOR_CONTEXT} Entità ---")
            entities_for_context = ordered_entities[:N_PROCESS_FOR_CONTEXT]
            timeframe_context_results = defaultdict(lambda: defaultdict(list))
            for run in range(1, CONTEXT_N_RUNS + 1):
                print(f"\n===== INIZIO RACCOLTA CONTESTO - RUN {run}/{CONTEXT_N_RUNS} ====="); rst = time.time()
                run_scores = {}
                for tf in CONTEXT_TIMEFRAMES:
                    scores = get_all_context_scores(entities_for_context, tf)
                    run_scores[tf] = scores
                    for entity, score in scores.items(): timeframe_context_results[tf][entity].append(score)
                    print(f"    Run {run}/{CONTEXT_N_RUNS}: Contesto {tf} completato.")
                try:
                    df_run_checkpoint = pd.DataFrame(entities_for_context, columns=['Entita'])
                    for tf, scores_dict in run_scores.items(): df_run_checkpoint[f'Score_{tf.replace(" ","_")}_Run{run}'] = df_run_checkpoint['Entita'].map(scores_dict).fillna(0)
                    chk_filename = f"02_context_run_{run}_scores.csv"
                    df_run_checkpoint.to_csv(os.path.join(CHECKPOINT_DIR, chk_filename), index=False, encoding='utf-8-sig'); print(f"  Checkpoint Run {run} salvato.")
                except Exception as e: print(f"  Errore salvataggio checkpoint contesto Run {run}: {e}")
                print(f"===== FINE RACCOLTA CONTESTO - RUN {run}/{CONTEXT_N_RUNS} (Durata: {time.time() - rst:.2f}s) =====")
                if run < CONTEXT_N_RUNS: time.sleep(random.uniform(5, 15))
            print("\n  Calcolo Score Medi di Contesto dalle Run...")
            for tf_agg in CONTEXT_TIMEFRAMES:
                sc_avg_col = f'Score_Avg_{tf_agg}'
                avg_scores_map = {entity: np.mean(scores) if scores else 0 for entity, scores in timeframe_context_results[tf_agg].items()}
                df_final[sc_avg_col] = df_final['Entita'].map(avg_scores_map).fillna(0)
                print(f"    Media contesto per {tf_agg} calcolata.")
            print("--- Fine Raccolta Score Contesto ---")
            try:
                cols_to_save = ['Rank', 'Entita'] + [f'Score_Avg_{tf}' for tf in CONTEXT_TIMEFRAMES]
                df_final[cols_to_save].head(N_PROCESS_FOR_CONTEXT).to_csv(os.path.join(CHECKPOINT_DIR, "03_context_averages.csv"), index=False, encoding='utf-8-sig'); print(f"  Checkpoint medie contesto salvato.")
            except Exception as e: print(f"  Errore salvataggio checkpoint medie contesto: {e}")
        else:
            print("\n--- Raccolta Score Contesto Saltata ---")
            for tf in CONTEXT_TIMEFRAMES:
                if f'Score_Avg_{tf}' not in df_final.columns: df_final[f'Score_Avg_{tf}'] = 0.0

        # --- 2.B Estrazione Entità con OpenAI (se attiva) ---
        if FETCH_OPENAI_ENTITIES:
            entities_to_process_openai = ordered_entities[:N_PROCESS_FOR_OPENAI]
            extracted_entities_map = get_entities_with_openai(entities_to_process_openai)
            df_final['Extracted_Entities'] = df_final['Entita'].map(extracted_entities_map).fillna('')
            print("  Entità OpenAI mappate nel DataFrame.")
            try:
                df_openai_chk = df_final.loc[df_final['Entita'].isin(entities_to_process_openai), ['Entita', 'Extracted_Entities']]
                chk_filename = "04_openai_extracted_entities.csv"
                df_openai_chk.to_csv(os.path.join(CHECKPOINT_DIR, chk_filename), index=False, encoding='utf-8-sig'); print(f"  Checkpoint entità OpenAI salvato.")
            except Exception as e: print(f"  Errore salvataggio checkpoint entità OpenAI: {e}")

        # --- 3. Calcolo Heuristic Discover Score ---
        print("\n  Calcolo Heuristic Discover Score V7.9 (Numeratore Pesato)...")
        discover_score_col = 'Discover_Score'; score_4h_col = 'Score_Avg_now 4-H'; score_7d_col = 'Score_Avg_now 7-d'
        if score_4h_col in df_final.columns and score_7d_col in df_final.columns and 'Rank' in df_final.columns:
            score_4h = pd.to_numeric(df_final[score_4h_col], errors='coerce').fillna(0).clip(lower=0)
            score_7d = pd.to_numeric(df_final[score_7d_col], errors='coerce').fillna(0).clip(lower=0)
            rank_series = pd.to_numeric(df_final['Rank'], errors='coerce').fillna(1).clip(lower=1)
            df_final[discover_score_col] = calculate_discover_score(
                rank_series, score_4h, score_7d,
                k_penalty=V7D_PENALTY_K, epsilon=V7D_PENALTY_EPSILON,
                weight_v4h=WEIGHT_V4H_NUMERATOR, weight_v7d=WEIGHT_V7D_NUMERATOR
            )
            print(f"    Colonna '{discover_score_col}' calcolata con formula V7.9.")
        else:
            missing_cols = [col for col in [score_4h_col, score_7d_col, 'Rank'] if col not in df_final.columns]
            warnings.warn(f"Colonne necessarie ({', '.join(missing_cols)}) per Score mancanti. Score impostato a 0.", UserWarning)
            df_final[discover_score_col] = 0.0

        # --- 4. Ordinamento Finale per Discover Score ---
        if discover_score_col in df_final.columns:
            df_final = df_final.sort_values(by=discover_score_col, ascending=False).reset_index(drop=True)
            print(f"\n  DataFrame finale ordinato per '{discover_score_col}'.")
        else: print(f"\n  ATTENZIONE: Colonna '{discover_score_col}' non trovata per l'ordinamento.")

        # --- 5. NUOVO: Calcolo Saturazione Score (se attivo) ---
        if FETCH_SATURATION_SCORE:
            entities_for_saturation = df_final['Entita'].head(N_PROCESS_FOR_SATURATION).tolist()
            if entities_for_saturation:
                 saturation_scores_normalized = fetch_and_normalize_saturation_scores(
                     entities_for_saturation,
                     proxy_manager # Passa l'istanza del manager
                 )
                 df_final['Saturation_Score'] = df_final['Entita'].map(saturation_scores_normalized).fillna(0) # Mappa i punteggi, default 0 per gli altri
                 print("  Punteggi di Saturazione mappati nel DataFrame.")
                 try:
                    chk_filename = "05_saturation_scores.csv"
                    cols_sat = ['Entita', 'Saturation_Score']
                    df_final.loc[df_final['Entita'].isin(entities_for_saturation), cols_sat].to_csv(os.path.join(CHECKPOINT_DIR, chk_filename), index=False, encoding='utf-8-sig')
                    print(f"  Checkpoint punteggi saturazione salvato.")
                 except Exception as e: print(f"  Errore salvataggio checkpoint saturazione: {e}")
            else:
                 print("  Nessuna entità da processare per la saturazione.")
        else:
            print("\n--- Calcolo Saturazione Score Saltato ---")
            df_final['Saturation_Score'] = 0 # Assicura che la colonna esista e sia 0


        # --- 6. Salva il DataFrame finale completo come CSV ---
        try:
            # Rinomina il file per includere anche la saturazione se calcolata
            base_filename = "final_sorted_data_v7.9_score"
            if FETCH_SATURATION_SCORE: base_filename += "_with_saturation"
            backup_filename = f"06_{base_filename}.csv" # Cambiato numero checkpoint
            df_final.to_csv(os.path.join(CHECKPOINT_DIR, backup_filename), index=False, encoding='utf-8-sig')
            print(f"\nDataFrame finale completo salvato: {os.path.join(CHECKPOINT_DIR, backup_filename)}")
        except Exception as e: print(f"\n!!! Errore salvataggio CSV finale completo: {e} !!!")

        # --- 7. Genera l'output data.js ---
        runtime_info['end_time'] = time.time()
        html_result = generate_html_output(df_final.head(TOP_N_FINAL_DISPLAY), runtime_info) # Passa solo il top N a data.js

        # --- 8. Stampa Top N Finale ---
        print(f"\n--- Top {TOP_N_FINAL_DISPLAY} Entità (Ordinate per Discover Score, con Saturazione se attiva) ---")
        # Aggiungi 'Saturation_Score' alle colonne da mostrare
        cols_to_show = [c for c in ['Discover_Score', 'Saturation_Score', 'Rank', 'Entita', 'Extracted_Entities', 'Score_Avg_now 1-H', 'Score_Avg_now 4-H', 'Score_Avg_now 7-d'] if c in df_final.columns]
        try:
            pd.set_option('display.max_rows', TOP_N_FINAL_DISPLAY + 5); pd.set_option('display.width', 200); pd.set_option('display.max_colwidth', 45); pd.set_option('display.float_format', '{:.2f}'.format) # Formato float più compatto
            print(df_final[cols_to_show].head(TOP_N_FINAL_DISPLAY).to_string(index=False))
        except Exception as e_print: print(f"Errore stampa finale: {e_print}")
        finally: pd.reset_option('all')

    except Exception as main_exc:
        print(f"\n\n!!! ERRORE CRITICO SCRIPT: {type(main_exc).__name__} - {main_exc} !!!"); traceback.print_exc()
    finally:
        print("\n--- Statistiche Proxy Rilevate (Fine Esecuzione) ---")
        try:
            if 'proxy_manager' in locals() and proxy_manager:
                ps = proxy_manager.get_proxy_stats_summary(); total_requests = ps.get('total_success', 0) + ps.get('total_fail_429', 0) + ps.get('total_fail_proxy_timeout', 0) + ps.get('total_fail_other_parse', 0); success_rate = (ps.get('total_success', 0) / total_requests * 100) if total_requests > 0 else 0
                print(f"Req Tot Proxy: {total_requests}, Successi: {ps.get('total_success', 0)} ({success_rate:.1f}%)"); print(f"  Fail: 429={ps.get('total_fail_429', 0)}, Proxy/Timeout={ps.get('total_fail_proxy_timeout', 0)}, Altri/Parse={ps.get('total_fail_other_parse', 0)}")
                tfp = ps.get('top_failing_proxies', {});
                if tfp: print("Top Failing Proxies:"); [print(f"  - {pid}: Succ:{d['success']}, FailsCons:{d['consecutive_fails']} (429:{d['fail_429']}, P/T:{d['fail_proxy/timeout']}, O/P:{d['fail_other/parse']})") for pid, d in list(tfp.items())[:5]]
            else: print("Proxy Manager non disponibile per statistiche.")
        except Exception as stats_exc: print(f"Errore stampa stats proxy: {stats_exc}")

        main_end_time = time.time(); total_duration = main_end_time - main_start_time
        print(f"\n--- Script V7.8 (Score V7.9 + Saturazione) completato in {total_duration:.2f} sec ({total_duration/60:.2f} min) ---")
