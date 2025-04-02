# -*- coding: utf-8 -*-

# 🚀 Script Ottimizzato per Google Trends - V7.8 (Docs Only, OpenAI & DataForSEO Saturation)
#    Lavora direttamente con i file nella cartella 'docs'.
#    Genera solo 'docs/data.js'.
#    Integra OpenAI per estrarre entità chiave dalle query di tendenza.
#    Integra DataForSEO per l'analisi di saturazione (intitle:keyword, qdr:d).
#    Legge le chiavi API da variabili d'ambiente: OPENAI_API_KEY, DATA_FOR_SEO.
#    **Formula V7.9 per Discover Score (Numeratore Pesato).**

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
# import base64 # Non necessario se la chiave è già codificata

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

# --- Parametri Contesto di Volume (Pytrends) ---
FETCH_VOLUME_CONTEXT = True
N_PROCESS_FOR_CONTEXT = 50 # Numero di entità da processare per contesto
CONTEXT_TIMEFRAMES = ['now 1-H', 'now 4-H', 'now 7-d']
CONTEXT_N_RUNS = 2

# --- Parametri Integrazione OpenAI ---
FETCH_OPENAI_ENTITIES = True
N_PROCESS_FOR_OPENAI = N_PROCESS_FOR_CONTEXT # Numero di entità da processare con OpenAI
OPENAI_MODEL = "gpt-4o"
OPENAI_MAX_RETRIES = 3
OPENAI_REQUEST_TIMEOUT = 30
MAX_OPENAI_THREADS = 10

# --- Parametri Integrazione DataForSEO (Saturazione) ---
FETCH_SATURATION = True
N_PROCESS_FOR_SATURATION = N_PROCESS_FOR_CONTEXT # Numero di entità da processare con DataForSEO
DATA_FOR_SEO_URL = "https://api.dataforseo.com/v3/serp/google/organic/live/advanced"
DATA_FOR_SEO_LOCATION = 2380 # Italia
DATA_FOR_SEO_LANGUAGE = "it"
DATA_FOR_SEO_MAX_RETRIES = 3
DATA_FOR_SEO_CONNECT_TIMEOUT = 10
DATA_FOR_SEO_READ_TIMEOUT = 20
DATA_FOR_SEO_REQUEST_TIMEOUT = DATA_FOR_SEO_CONNECT_TIMEOUT + DATA_FOR_SEO_READ_TIMEOUT + 5 # Timeout globale un po' più alto
MAX_SATURATION_THREADS = 15 # Adattare in base ai limiti API e risorse

# --- Chiave API OpenAI (LEGGI DA VARIABILE D'AMBIENTE!) ---
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
openai_client = None # Rinominato per chiarezza
if FETCH_OPENAI_ENTITIES:
    if not OPENAI_API_KEY:
        warnings.warn("FETCH_OPENAI_ENTITIES=True ma OPENAI_API_KEY non impostata! Estrazione OpenAI saltata.", UserWarning)
        FETCH_OPENAI_ENTITIES = False
    else:
        try:
            openai_client = openai.OpenAI(api_key=OPENAI_API_KEY)
            print(f"Client OpenAI inizializzato (Modello: {OPENAI_MODEL}).")
        except Exception as e:
            warnings.warn(f"Errore inizializzazione client OpenAI: {e}. Estrazione OpenAI saltata.", UserWarning)
            FETCH_OPENAI_ENTITIES = False

# --- Chiave API DataForSEO (LEGGI DA VARIABILE D'AMBIENTE!) ---
# Deve contenere la stringa 'Basic xxxxxxxxxxxxxxxxxxxxxxxx==' completa
DATA_FOR_SEO_AUTH = os.getenv("DATA_FOR_SEO")
if FETCH_SATURATION:
    if not DATA_FOR_SEO_AUTH:
        warnings.warn("FETCH_SATURATION=True ma DATA_FOR_SEO non impostata! Analisi Saturazione saltata.", UserWarning)
        FETCH_SATURATION = False
    else:
        # Verifica base (opzionale): controlla che inizi con 'Basic '
        if not DATA_FOR_SEO_AUTH.startswith('Basic '):
             warnings.warn("Formato DATA_FOR_SEO non sembra corretto (dovrebbe iniziare con 'Basic '). Analisi Saturazione saltata.", UserWarning)
             FETCH_SATURATION = False
        else:
            print("Credenziali DataForSEO caricate.")


# --- Parametri Formula Discover Score V7.9 ---
V7D_PENALTY_K = 50.0 # Mantenuto per il denominatore
V7D_PENALTY_EPSILON = 0.1 # Mantenuto per il denominatore
WEIGHT_V4H_NUMERATOR = 0.5 # Peso per V4h nel numeratore
WEIGHT_V7D_NUMERATOR = 1.5 # Peso per V7d nel numeratore

# --- Parametri Gestione Proxy Pytrends/Google ---
MAX_CONCURRENT_PROXIES = 210
PROXY_USE_COOLDOWN = 7
MAX_THREADS_PYTRENDS = 80

# --- Parametri Ritardi e Pause ---
MIN_DELAY_BETWEEN_REQUESTS = 0
MAX_DELAY_BETWEEN_REQUESTS = 2.0
ENTITY_EXTRACTION_INITIAL_WAIT = 5

# --- Parametri Gestione Errori e Tentativi (Pytrends/Google) ---
ENTITY_EXTRACTION_MAX_RETRIES = 15
MAX_RETRIES_PYTRENDS_CONTEXT = 8
INITIAL_BACKOFF_SECONDS_429 = 5
BACKOFF_MULTIPLIER_429 = 1.2
MAX_WAIT_SECONDS = 20
PROXY_FAILURE_THRESHOLD = 3
PROXY_FAILURE_COOLDOWN_MULTIPLIER = 1.2

# --- Parametri Timeout Connessioni (Pytrends/Google) ---
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

# --- Definizione Stringa Base Proxy e Rimozione Proxy Problematici (PER PYTRENDS/GOOGLE) ---
proxy_base_string = "v2.proxyempire.io:5000:r_46aa61f010-country-{geo}:8186bbae3e"
original_country_codes = ['af', 'al', 'dz', 'as', 'ad', 'ao', 'ai', 'aq', 'ag', 'ar', 'am', 'aw', 'au', 'at', 'az', 'bs', 'bh', 'bd', 'bb', 'by', 'be', 'bz', 'bj', 'bm', 'bt', 'bo', 'ba', 'bw', 'br', 'io', 'bn', 'bg', 'bf', 'bi', 'kh', 'cm', 'ca', 'cv', 'ky', 'cf', 'td', 'cl', 'cn', 'co', 'km', 'cg', 'ck', 'cr', 'hr', 'cu', 'cy', 'cz', 'dk', 'dj', 'dm', 'do', 'ec', 'eg', 'sv', 'gq', 'er', 'ee', 'et', 'fk', 'fo', 'fj', 'fi', 'fr', 'gf', 'pf', 'ga', 'gm', 'ge', 'de', 'gh', 'gi', 'gr', 'gl', 'gd', 'gp', 'gu', 'gt', 'gg', 'gn', 'gw', 'gy', 'ht', 'va', 'hn', 'hk', 'hu', 'is', 'in', 'id', 'ir', 'iq', 'ie', 'im', 'il', 'it', 'ci', 'jm', 'jp', 'je', 'jo', 'kz', 'ke', 'ki', 'kw', 'kg', 'la', 'lv', 'lb', 'ls', 'lr', 'ly', 'li', 'lt', 'lu', 'mo', 'mk', 'mg', 'mw', 'my', 'mv', 'ml', 'mt', 'mh', 'mq', 'mr', 'mu', 'yt', 'mx', 'fm', 'md', 'mc', 'mn', 'me', 'ms', 'ma', 'mz', 'mm', 'na', 'nr', 'np', 'nl', 'nc', 'nz', 'ni', 'ne', 'ng', 'nu', 'nf', 'kp', 'gb', 'mp', 'no', 'om', 'pk', 'pw', 'ps', 'pa', 'pg', 'py', 'pe', 'ph', 'pl', 'pt', 'pr', 'qa', 're', 'ro', 'ru', 'rw', 'sh', 'kn', 'lc', 'vc', 'ws', 'sm', 'st', 'sa', 'sn', 'rs', 'sc', 'sl', 'sg', 'sk', 'si', 'sb', 'so', 'za', 'kr', 'ss', 'es', 'lk', 'sd', 'sr', 'sz', 'se', 'ch', 'sy', 'tj', 'tw', 'tz', 'th', 'cd', 'tl', 'tg', 'tk', 'to', 'tt', 'tn', 'tr', 'tm', 'tc', 'tv', 'ug', 'ua', 'ae', 'us', 'uy', 'uz', 'vu', 've', 'vn', 'vg', 'vi', 'wf', 'eh', 'ye', 'zm', 'zw']
proxies_to_remove_geo = {'aq', 'io', 'cf', 'bi', 'td', 'km', 'fk', 'cn', 'gw', 'va', 'ki', 'nr', 'nu', 'nf', 'kp', 'pg', 'sh', 'ws', 'tl', 'tk', 'tv', 'wf', 'eh', 'dj', 'gl', 'al'}
country_codes = [code for code in original_country_codes if code not in proxies_to_remove_geo]
print(f"GEO usati per Pytrends/Google: {len(country_codes)}.")
proxies_list_with_geo = []
for geo in country_codes:
    proxy_str = proxy_base_string.format(geo=geo.lower()); parts = proxy_str.split(':')
    if len(parts) == 4:
        match = re.search(r'-country-([a-z]{2})', parts[2], re.IGNORECASE)
        if match: proxies_list_with_geo.append({"proxy": proxy_str, "geo": match.group(1).upper()})
if not proxies_list_with_geo: raise ValueError("!!! Lista proxy Pytrends VUOTA dopo filtro! !!!")
print(f"Generati {len(proxies_list_with_geo)} proxy Pytrends con geo.")

# --- Mapping Geo -> Lingua/Timezone (PER PYTRENDS/GOOGLE) ---
COUNTRY_LOCALE_MAP = {'IT': {'hl': 'it-IT', 'tz': 60}, 'US': {'hl': 'en-US', 'tz': -300}, 'GB': {'hl': 'en-GB', 'tz': 0}, 'FR': {'hl': 'fr-FR', 'tz': 60}, 'DE': {'hl': 'de-DE', 'tz': 60}, 'ES': {'hl': 'es-ES', 'tz': 60}, 'JP': {'hl': 'ja-JP', 'tz': 540}, 'AU': {'hl': 'en-AU', 'tz': 600}, 'CA': {'hl': 'en-CA', 'tz': -300}, 'BR': {'hl': 'pt-BR', 'tz': -180}, 'IN': {'hl': 'en-IN', 'tz': 330}, 'MA': {'hl': 'fr-MA', 'tz': 0}, 'HN': {'hl': 'es-HN', 'tz': -360}, 'BS': {'hl': 'en-BS', 'tz': -300}, 'TO': {'hl': 'en-TO', 'tz': 780}, 'BE': {'hl': 'fr-BE', 'tz': 60}, 'OM': {'hl': 'ar-OM', 'tz': 240}, 'GM': {'hl': 'en-GM', 'tz': 0}, 'LU': {'hl': 'fr-LU', 'tz': 60}, 'BN': {'hl': 'ms-BN', 'tz': 480}, 'SZ': {'hl': 'en-SZ', 'tz': 120}, 'MN': {'hl': 'mn-MN', 'tz': 480}, 'EG': {'hl': 'ar-EG', 'tz': 120}, 'AT': {'hl': 'de-AT', 'tz': 60}, 'IE': {'hl': 'en-IE', 'tz': 0}, 'KW': {'hl': 'ar-KW', 'tz': 180}, 'MM': {'hl': 'my-MM', 'tz': 390}, 'LV': {'hl': 'lv-LV', 'tz': 120}, 'RW': {'hl': 'rw-RW', 'tz': 120}, 'KR': {'hl': 'ko-KR', 'tz': 540}, 'TJ': {'hl': 'tg-TJ', 'tz': 300}, 'MH': {'hl': 'en-MH', 'tz': 720}, 'ZA': {'hl': 'en-ZA', 'tz': 120}, 'FI': {'hl': 'fi-FI', 'tz': 120}, 'DEFAULT': {'hl': 'en-US', 'tz': 0}}
def get_locale_for_geo(geo_code): return COUNTRY_LOCALE_MAP.get(geo_code.upper(), COUNTRY_LOCALE_MAP['DEFAULT'])

# --- Funzione Utilità get_proxy_url (PER PYTRENDS/GOOGLE) ---
def get_proxy_url(proxy_str):
    """Converte la stringa proxy nel formato URL http://user:pass@host:port."""
    if not proxy_str: return None
    parts = proxy_str.split(':')
    if len(parts) == 4:
        host, port, user, pwd = parts
        if port.isdigit(): return f"http://{user}:{pwd}@{host}:{port}"
    return None

# --- Classi AdvancedProxyManager e ConsistentBrowserProfile (PER PYTRENDS/GOOGLE) ---
class AdvancedProxyManager:
    def __init__(self, proxy_geo_list, max_concurrent, cooldown_seconds): self.max_concurrent=max_concurrent; self.cooldown_seconds=cooldown_seconds; self.lock=threading.Lock(); self.all_proxies={i['proxy']: i['geo'] for i in proxy_geo_list}; self.available_proxies=deque(self.all_proxies.keys()); random.shuffle(list(self.available_proxies)); self.active_proxies={}; self.cooldown_proxies={}; self.proxy_consecutive_failures=defaultdict(int); self.proxy_stats=defaultdict(lambda: {"success":0,"fail_429":0,"fail_5xx":0,"fail_other":0,"fail_timeout":0,"fail_proxy_error":0,"fail_parse":0}); self.active_sessions={}; print(f"AdvProxyManager (Pytrends): {len(self.all_proxies)} proxies, MaxConc: {self.max_concurrent}, CD: {self.cooldown_seconds}s")
    def _check_cooldown(self): ct=time.time(); reactivate=[]; [reactivate.append(p) for p, et in list(self.cooldown_proxies.items()) if ct >= et]; [self.available_proxies.append(p) for p in reactivate if self.cooldown_proxies.pop(p,None)]
    def get_proxy(self):
        with self.lock:
            self._check_cooldown();
            if len(self.active_proxies)<self.max_concurrent and self.available_proxies:
                p_str=self.available_proxies.popleft(); geo=self.all_proxies[p_str]; self.active_proxies[p_str]=time.time(); p_url=get_proxy_url(p_str);
                try: prof=ConsistentBrowserProfile(geo)
                except Exception as e: print(f"      Profilo err {geo}: {e}. Uso def."); prof=ConsistentBrowserProfile('DEFAULT')
                scr=None;
                try: bcfg={'browser':'chrome','platform':prof.os if prof.os in ['windows','darwin','linux'] else 'windows','mobile':False,'desktop':True,'user_agent':prof.user_agent}; scr=cloudscraper.create_scraper(browser=bcfg,delay=random.uniform(0.5,1.5)); scr.headers.update(prof.get_headers());
                except Exception as e: print(f"      Scraper err {geo} ({type(e).__name__}). Uso base."); scr=requests.Session(); scr.headers.update(prof.get_headers());
                if p_url: scr.proxies={'http':p_url,'https':p_url}
                self.active_sessions[p_str]={'scraper':scr,'profile':prof}; return p_str, geo, self.active_sessions[p_str]
            else: return None
    def get_pytrends_session(self,p_str,prof): p_url=get_proxy_url(p_str); p_list=[p_url] if p_url else []; params=prof.get_pytrends_params(); return TrendReq(hl=params['hl'],tz=params['tz'],timeout=(PYTRENDS_CONNECT_TIMEOUT,PYTRENDS_READ_TIMEOUT),retries=PYTRENDS_RETRIES,backoff_factor=PYTRENDS_BACKOFF_FACTOR,proxies=p_list)
    def release_proxy(self,p_str,success=True,status_code=None,error_type=None):
        with self.lock:
            if p_str not in self.all_proxies: warnings.warn(f"Release proxy (Pytrends) non gestito: {p_str}", UserWarning); return
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
                if fails>=PROXY_FAILURE_THRESHOLD: mult=1+(PROXY_FAILURE_COOLDOWN_MULTIPLIER*(fails-PROXY_FAILURE_THRESHOLD+1)); add_cd=self.cooldown_seconds*mult; ct=time.time(); base_dur=cd_end-ct; final_dur=base_dur+add_cd; cd_end=ct+final_dur; print(f"      INFO: Proxy Pytrends {geo} ({p_str[-10:]}) ha {fails} fails cons. CD esteso a {final_dur:.0f}s.")
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

# --- Inizializzazione Manager Globale (PER PYTRENDS/GOOGLE) ---
proxy_manager = AdvancedProxyManager(proxies_list_with_geo, MAX_CONCURRENT_PROXIES, PROXY_USE_COOLDOWN)

# --- Estrazione Entità ORDINATA (Google Trends TV) ---
def extract_ordered_entities(max_retries=ENTITY_EXTRACTION_MAX_RETRIES, initial_wait=ENTITY_EXTRACTION_INITIAL_WAIT):
    """Estrae la lista ORDINATA di entità da Google Trends TV."""
    attempts = 0; current_wait = initial_wait; proxy_info, geo_code = None, None; print(f"Avvio estrazione lista entità ORDINATA (max {max_retries} tentativi)...")
    while attempts < max_retries:
        attempts += 1; print(f"Tentativo {attempts}/{max_retries} per estrarre entità ordinate...")
        proxy_info, status_code, error_type_str, release_success = None, None, None, False; scraper, session_data, geo_code = None, None, None
        try:
            get_proxy_attempts = 0
            while proxy_info is None and get_proxy_attempts < 5: get_proxy_attempts += 1; proxy_info = proxy_manager.get_proxy(); time.sleep(random.uniform(2, 5) if proxy_info is None else 0)
            if proxy_info is None: print("    Impossibile ottenere proxy (Pytrends) per estrazione iniziale. Attesa..."); time.sleep(min(current_wait * 1.5, MAX_WAIT_SECONDS / 2)); current_wait *= 1.5; continue
            proxy_str, geo_code, session_data = proxy_info; scraper = session_data['scraper']; print(f"    Tentativo estrazione con proxy Pytrends: {geo_code} ({proxy_str[-10:]})")
            time.sleep(random.uniform(0.5, 1.5)); target_url = "https://trends.google.com/tv/?geo=IT"; res = None; max_internal_retries = 2
            for internal_attempt in range(max_internal_retries):
                try:
                    res = scraper.get(target_url, timeout=(ENTITY_EXTRACTION_CONNECT_TIMEOUT, ENTITY_EXTRACTION_READ_TIMEOUT))
                    if res.status_code == 200: break
                    else: status_code = res.status_code; print(f"        Non-200: {status_code}, Retry {internal_attempt + 1}/{max_internal_retries}"); time.sleep(1.5 if internal_attempt < max_internal_retries - 1 else 0)
                except (requests.exceptions.Timeout, socket.timeout) as e_timeout_internal:
                    print(f"        Timeout interno req {internal_attempt + 1}/{max_internal_retries}: {type(e_timeout_internal).__name__}"); res = None; status_code = None
                    if internal_attempt < max_internal_retries - 1: time.sleep(2)
                    else: print(f"        Falliti tutti retry interni (Timeout)."); raise e_timeout_internal
                except Exception as e_int:
                    print(f"        Errore interno req {internal_attempt + 1}/{max_internal_retries}: {type(e_int).__name__} - {str(e_int)[:100]}"); res = None; status_code = None
                    if internal_attempt < max_internal_retries - 1: time.sleep(2)
                    else: print(f"        Falliti tutti retry interni (Exception)."); raise e_int
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
                    except Exception as e_parse: print(f"        Parse JSON err (Proxy: {geo_code}): {e_parse}"); error_type_str = 'parse_fail'
            if found_data and ordered_entities_found: print(f"    Estratte {len(ordered_entities_found)} entità ordinate via {geo_code}."); release_success = True; return ordered_entities_found
            else: print(f"    Status 200 ma dati non trovati/parsati via {geo_code}."); error_type_str = 'parse_fail'; wait_time = min(current_wait * 1.5, MAX_WAIT_SECONDS / 2); time.sleep(wait_time); current_wait = wait_time * 1.2
        except Exception as e:
            error_type_str = type(e).__name__; print(f"!! Errore estrazione (Tentativo {attempts}, Proxy Pytrends: {geo_code}): {error_type_str}: {e} !!");
            wait_time = min(current_wait * 1.2, MAX_WAIT_SECONDS / 2); time.sleep(wait_time); current_wait = wait_time * 1.2
            if isinstance(e, (requests.exceptions.ProxyError, requests.exceptions.ConnectionError)): error_type_str = 'ProxyError'
            elif isinstance(e, requests.exceptions.Timeout): error_type_str = 'Timeout'
            if 'res' not in locals() or res is None: status_code = None
        finally:
            if proxy_info: proxy_manager.release_proxy(proxy_info[0], success=release_success, status_code=status_code, error_type=error_type_str); proxy_info = None
    print(f"!!! Estrazione entità ORDINATE fallita dopo {max_retries} tentativi. !!!"); return None

# --- Funzione get_trends_scores (Pytrends Context) ---
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
            if proxy_info is None: print(f"        [CTX KW:{kw_hash} T{attempts}] No proxy (Pytrends) for context. Skip."); time.sleep(min(current_backoff_other * 1.5, MAX_WAIT_SECONDS / 2)); current_backoff_other *= 1.2; continue
            proxy_str, geo_code, session_data = proxy_info
            if proxy_str in proxy_attempts_set: proxy_manager.release_proxy(proxy_str, success=False, error_type="duplicato_interno"); proxy_info = None; continue
            proxy_attempts_set.add(proxy_str); profile = session_data['profile']
            try: pytrends = proxy_manager.get_pytrends_session(proxy_str, profile)
            except Exception as e_session: print(f"        [CTX KW:{kw_hash} T{attempts}] Session err (Proxy Pytrends: {geo_code}): {e_session}"); proxy_manager.release_proxy(proxy_str, success=False, error_type="pytrends_session_error"); proxy_info = None; continue
            base_delay = random.uniform(MIN_DELAY_BETWEEN_REQUESTS, MAX_DELAY_BETWEEN_REQUESTS);
            time.sleep(base_delay)
            shuffled = keywords.copy(); random.shuffle(shuffled); pytrends.build_payload(shuffled, timeframe=timeframe, geo='IT', gprop='')
            df = pytrends.interest_over_time()
            if df.empty or all(c == 'isPartial' for c in df.columns): print(f"        [CTX KW:{kw_hash} T{attempts}] Empty data (Proxy Pytrends: {geo_code})."); error_type_str = 'empty_data'; time.sleep(current_backoff_other); current_backoff_other = min(current_backoff_other * 1.2, MAX_WAIT_SECONDS / 4)
            else: scores = df.drop(columns=['isPartial'], errors='ignore').mean().to_dict(); final = {kw: scores.get(kw, 0) for kw in keywords}; elapsed = time.time() - start_time;
            release_success = True; return final
        except requests.exceptions.HTTPError as http_err:
            status_code = http_err.response.status_code if hasattr(http_err, 'response') and http_err.response else None; print(f"      !![CTX KW:{kw_hash} T{attempts}] HTTP Err {status_code or 'N/A'} (Proxy Pytrends: {geo_code}).")
            if status_code == 429: error_type_str = '429_related'; wait = min(current_backoff_429, MAX_WAIT_SECONDS); print(f"            -> 429! Wait: {wait:.1f}s..."); time.sleep(wait); current_backoff_429 = min(current_backoff_429 * BACKOFF_MULTIPLIER_429, MAX_WAIT_SECONDS * 1.5)
            elif status_code and 500 <= status_code <= 599: error_type_str = 'ProxyError'; wait = min(current_backoff_other*1.5, MAX_WAIT_SECONDS/2); print(f"            -> 5xx Err {status_code}. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
            else: error_type_str = f"HTTP_{status_code or 'N/A'}"; wait = min(current_backoff_other*1.5, MAX_WAIT_SECONDS/2); print(f"            -> HTTP Err {status_code}. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
        except (requests.exceptions.Timeout, socket.timeout) as timeout_err: error_type_str = 'Timeout'; print(f"      !![CTX KW:{kw_hash} T{attempts}] Timeout (Proxy Pytrends: {geo_code}): {timeout_err}"); wait = min(current_backoff_other*1.2, MAX_WAIT_SECONDS/2); print(f"            -> Timeout. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = wait * 1.2
        except (requests.exceptions.ProxyError, requests.exceptions.ConnectionError, ConnectionRefusedError, OSError) as proxy_err:
            error_type_str = 'ProxyError'; status_code = 502 if '502' in str(proxy_err) else None
            print(f"      !![CTX KW:{kw_hash} T{attempts}] Proxy/Conn Err (Proxy Pytrends: {geo_code}): {type(proxy_err).__name__} - {str(proxy_err)[:100]}")
            wait = min(current_backoff_other * 1.5, MAX_WAIT_SECONDS / 2); print(f"            -> Proxy Err. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other * 1.5, MAX_WAIT_SECONDS)
        except Exception as e:
            msg = str(e); error_type_str = type(e).__name__; is_429 = '429' in msg or ('response' in dir(e) and hasattr(e.response, 'status_code') and e.response.status_code == 429) ; print(f"!! [CTX KW:{kw_hash} T{attempts}] UNEXPECTED Err (Proxy Pytrends: {geo_code}): {error_type_str}: {msg[:150]}...")
            if is_429: error_type_str = '429_related'; wait = min(current_backoff_429, MAX_WAIT_SECONDS); print(f"            -> 429 DETECTED! Wait: {wait:.1f}s..."); time.sleep(wait); current_backoff_429 = min(current_backoff_429 * BACKOFF_MULTIPLIER_429, MAX_WAIT_SECONDS * 1.5)
            elif isinstance(e, AttributeError): error_type_str = 'parse_fail'; wait = min(current_backoff_other, MAX_WAIT_SECONDS/2); print(f"            -> Attr Err. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
            else: wait = min(current_backoff_other, MAX_WAIT_SECONDS/2); print(f"            -> Generic Err. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
        finally:
            if proxy_info: proxy_manager.release_proxy(proxy_info[0], success=release_success, status_code=status_code, error_type=error_type_str); proxy_info = None
    print(f"!!! [CTX KW:{kw_hash}] Failed {attempts} context attempts for {kw_list_str} ({timeframe}). Returning scores as 0.")
    return {kw: 0 for kw in keywords}

# --- Funzione get_all_context_scores (Pytrends Context Parallel) ---
def get_all_context_scores(entities_subset, timeframe, max_threads=MAX_THREADS_PYTRENDS):
    """Ottiene i punteggi Pytrends per tutte le entità in parallelo per un dato timeframe."""
    all_scores = {}; entity_list = list(set(entities_subset)); random.shuffle(entity_list)
    group_size = 3; groups = [entity_list[i:i+group_size] for i in range(0, len(entity_list), group_size)]
    print(f"\n--- Raccolta score CONTESTO Pytrends: {timeframe} ({len(groups)} gruppi / {len(entity_list)} entità / {max_threads} threads) ---")
    sem = threading.Semaphore(max_threads)
    def get_trends_scores_safe(kw, tf):
        with sem:
            try: return get_trends_scores(kw, tf)
            except Exception as e: print(f"\n!!! Exc safe ctx Pytrends: {type(e).__name__} !!!"); return {k: 0 for k in kw}
    with concurrent.futures.ThreadPoolExecutor(max_workers=max_threads) as executor:
        future_to_group = {}; print(f"    Sottomissione {len(groups)} task CONTESTO Pytrends..."); time.sleep(0.5)
        for idx, group in enumerate(groups): future = executor.submit(get_trends_scores_safe, group, timeframe); future_to_group[future] = group; time.sleep(random.uniform(0.05, 0.15) if idx % 10 != 0 else random.uniform(0.3, 0.6))
        print(f"    Attesa completamento task CONTESTO Pytrends..."); completed_count, failed_count = 0, 0; failed_groups = []; total_tasks = len(groups)
        for future in tqdm(concurrent.futures.as_completed(future_to_group), total=total_tasks, desc=f"Context {timeframe}", unit="group"):
            completed_count += 1; group = future_to_group[future]
            try:
                result = future.result(timeout=MAX_WAIT_SECONDS * 2)
                if result and any(s > 0 for s in result.values()): all_scores.update(result)
                else: failed_count += 1; failed_groups.append(group); [all_scores.setdefault(e, 0) for e in group]
            except concurrent.futures.TimeoutError: print(f"\n!!! Timeout recupero risultato CONTESTO Pytrends {group} ({timeframe}) !!!"); failed_count += 1; failed_groups.append(group); [all_scores.setdefault(e, 0) for e in group]
            except Exception as exc: print(f"\n!!! Errore recupero CONTESTO Pytrends {group} ({timeframe}): {exc} !!!"); failed_count += 1; failed_groups.append(group); [all_scores.setdefault(e, 0) for e in group]
        if failed_groups and failed_count > 0 and failed_count < total_tasks:
            print(f"\n--- Riprovando {len(failed_groups)} gruppi CONTESTO Pytrends falliti per {timeframe} ---");
            retry_failed_count = len(failed_groups); initial_failed_count = failed_count; retry_futures = {}
            with concurrent.futures.ThreadPoolExecutor(max_workers=max_threads // 2 + 1) as retry_executor:
                for group in failed_groups: time.sleep(random.uniform(0.5, 1.5)); future = retry_executor.submit(get_trends_scores_safe, group, timeframe); retry_futures[future] = group
                for future in tqdm(concurrent.futures.as_completed(retry_futures), total=len(failed_groups), desc=f"Retry Ctx {timeframe}", unit="group"):
                    group = retry_futures[future]
                    try:
                        result = future.result(timeout=MAX_WAIT_SECONDS * 2.5)
                        if result and any(s > 0 for s in result.values()): all_scores.update(result); retry_failed_count -= 1;
                    except Exception as retry_exc: print(f"      Errore retry ctx Pytrends {group}: {retry_exc}")
            failed_count = retry_failed_count
            print(f"--- Retry CONTESTO Pytrends {timeframe} completato. Falliti finali: {failed_count} ---")
        else: print(f"--- Raccolta score CONTESTO Pytrends {timeframe} completata. ({total_tasks} task, {failed_count} falliti) ---")
    return {entity: all_scores.get(entity, 0) for entity in entity_list}

# ==============================================================================
# ==================== FUNZIONI INTEGRAZIONE OPENAI ==========================
# ==============================================================================
def get_single_entity_openai(trend_string, model=OPENAI_MODEL, max_retries=OPENAI_MAX_RETRIES, request_timeout=OPENAI_REQUEST_TIMEOUT):
    """Chiama l'API OpenAI per estrarre entità."""
    if not openai_client: return None
    prompt = f"""Data la seguente query di ricerca Google Trends, estrai le 3-5 entità o concetti chiave più importanti (persone, luoghi, eventi, organizzazioni, temi principali). Elencali separati da " - " (spazio trattino spazio). Sii conciso e pertinente alla query. Non aggiungere introduzioni, spiegazioni o virgolette attorno alla lista. Esempio: Se la query è "Meteo Roma prossimi giorni", la risposta dovrebbe essere "Meteo - Roma - Previsioni". Query di input: "{trend_string}" """
    attempts = 0
    while attempts < max_retries:
        attempts += 1
        try:
            response = openai_client.chat.completions.create(
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
            if entities_text and len(entities_text) > 1:
                # print(f"      [OpenAI OK] '{trend_string}' -> '{entities_text}' (Tentativo {attempts})") # Debug
                return entities_text
            else: # print(f"      [OpenAI WARN] Risposta vuota/corta per '{trend_string}' (Tentativo {attempts})") # Debug
                 return None
        except openai.APITimeoutError:
            print(f"  !! [OpenAI Timeout] Tentativo {attempts}/{max_retries} per '{trend_string}'. Attesa..."); wait_time = 3 * attempts
        except openai.APIConnectionError as e:
            print(f"  !! [OpenAI Connection Err] Tentativo {attempts}/{max_retries} per '{trend_string}': {e}. Attesa..."); wait_time = 5 * attempts
        except openai.RateLimitError:
            print(f"  !! [OpenAI Rate Limit] Tentativo {attempts}/{max_retries} per '{trend_string}'. Attesa lunga..."); wait_time = 15 * attempts
        except openai.APIStatusError as e:
            print(f"  !! [OpenAI Status Err {e.status_code}] Tentativo {attempts}/{max_retries} per '{trend_string}': {e.message}. Attesa...")
            if e.status_code >= 500 or e.status_code in [401, 403]: print(f"  !! Errore {e.status_code} non recuperabile OpenAI. Interruzione."); return None
            wait_time = 5 * attempts
        except Exception as e:
            print(f"  !! [OpenAI Generic Err] Tentativo {attempts}/{max_retries} per '{trend_string}': {type(e).__name__} - {e}"); wait_time = 3 * attempts

        if attempts >= max_retries: print(f"  !! [OpenAI FAIL] Falliti tutti {max_retries} tentativi per '{trend_string}'"); return None
        time.sleep(wait_time)
    return None # Fallito dopo tutti i tentativi

def get_entities_with_openai(trend_list, max_workers=MAX_OPENAI_THREADS):
    """Ottiene le entità estratte da OpenAI per una lista di trend in parallelo."""
    if not openai_client or not FETCH_OPENAI_ENTITIES:
        print("\n--- Estrazione Entità OpenAI Saltata (client non inizializzato o flag disattivo) ---")
        return {}

    print(f"\n--- Avvio Estrazione Entità OpenAI ({len(trend_list)} trends, Max Workers: {max_workers}, Modello: {OPENAI_MODEL}) ---")
    extracted_entities_map = {}
    futures = {}
    sem = threading.Semaphore(max_workers)

    def call_openai_safe(trend):
        with sem:
            return get_single_entity_openai(trend)

    with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
        print(f"  Sottomissione {len(trend_list)} task a OpenAI...")
        for trend in trend_list:
            future = executor.submit(call_openai_safe, trend)
            futures[future] = trend
            time.sleep(random.uniform(0.02, 0.08)) # Piccolo delay per non sovraccaricare subito

        print("  Attesa completamento task OpenAI...")
        successful_count = 0
        total_tasks = len(trend_list)

        for future in tqdm(concurrent.futures.as_completed(futures), total=total_tasks, desc="Estrazione Entità OpenAI", unit="trend", ncols=100):
            trend = futures[future]
            result = '' # Default a stringa vuota
            try:
                result_raw = future.result(timeout=OPENAI_REQUEST_TIMEOUT * (OPENAI_MAX_RETRIES + 2)) # Timeout generoso
                if result_raw:
                    result = result_raw
                    successful_count += 1
            except concurrent.futures.TimeoutError:
                print(f"\n!!! Timeout globale OpenAI per '{trend}' !!!")
            except Exception as exc:
                print(f"\n!!! Errore recupero risultato OpenAI per '{trend}': {exc} !!!")
            extracted_entities_map[trend] = result # Mappa sempre, vuoto se fallito/non trovato

    print(f"--- Estrazione Entità OpenAI completata ({successful_count}/{total_tasks} con successo) ---")
    return extracted_entities_map

# ==============================================================================
# ================= FUNZIONI INTEGRAZIONE DATAFORSEO (SATURAZIONE) =============
# ==============================================================================
def get_single_saturation_score(keyword, max_retries=DATA_FOR_SEO_MAX_RETRIES, connect_timeout=DATA_FOR_SEO_CONNECT_TIMEOUT, read_timeout=DATA_FOR_SEO_READ_TIMEOUT):
    """
    Chiama l'API DataForSEO per ottenere il numero di risultati per intitle:keyword con qdr:d.
    Restituisce se_results_count (int) o -1 in caso di fallimento.
    """
    if not FETCH_SATURATION or not DATA_FOR_SEO_AUTH:
        # print(f"      [DataForSEO SKIP] Saturazione disattivata o chiave mancante per '{keyword}'") # Debug
        return -1

    url = DATA_FOR_SEO_URL
    # Keyword nel formato richiesto: intitle:"keyword"
    search_keyword = f'intitle:"{keyword}"' # Assumiamo che keyword non contenga già virgolette
    # Payload per la richiesta POST
    payload = json.dumps([{
        "keyword": search_keyword,
        "location_code": DATA_FOR_SEO_LOCATION,
        "language_code": DATA_FOR_SEO_LANGUAGE,
        "device": "desktop",
        "os": "windows",
        "depth": 10, # Bastano pochi risultati, ci serve solo il count totale
        "calculate_rectangles": False,
        "group_organic_results": False, # Non necessario per il count
        "load_async_ai_overview": False,
        "search_param": "&tbs=qdr:d" # Cerca nelle ultime 24 ore
    }])
    headers = {
        'Authorization': DATA_FOR_SEO_AUTH, # Già contiene 'Basic '
        'Content-Type': 'application/json'
    }

    attempts = 0
    while attempts < max_retries:
        attempts += 1
        try:
            response = requests.request(
                "POST",
                url,
                headers=headers,
                data=payload,
                timeout=(connect_timeout, read_timeout)
            )
            response.raise_for_status() # Lancia HTTPError per status >= 400

            response_data = response.json()

            # --- Estrazione sicura del dato ---
            # Verifica la struttura base della risposta DataForSEO
            if response_data.get("status_code") == 20000 and \
               response_data.get("tasks_count") == 1 and \
               isinstance(response_data.get("tasks"), list) and \
               len(response_data["tasks"]) == 1:

                task = response_data["tasks"][0]
                if task.get("status_code") == 20000 and \
                   isinstance(task.get("result"), list) and \
                   len(task["result"]) == 1:

                    result_item = task["result"][0]
                    # se_results_count può essere None se Google non mostra il count
                    saturation_count = result_item.get("se_results_count")

                    if isinstance(saturation_count, int):
                        # print(f"      [DataForSEO OK] '{keyword}' -> {saturation_count} (Tentativo {attempts})") # Debug
                        return saturation_count
                    else:
                         # Google non ha fornito il count (comune per query specifiche o a basso volume)
                         # print(f"      [DataForSEO INFO] '{keyword}' -> Count non disponibile (Tentativo {attempts})") # Debug
                         return 0 # Restituisci 0 se non disponibile
                else:
                    # Errore nel task specifico
                    task_error = task.get("status_message", "Errore task sconosciuto")
                    print(f"  !! [DataForSEO Task Err] Tentativo {attempts}/{max_retries} per '{keyword}': {task_error}")
                    # Potrebbe essere un errore temporaneo, retry
            else:
                 # Errore generale API
                 api_error = response_data.get("status_message", "Errore API sconosciuto")
                 print(f"  !! [DataForSEO API Err] Tentativo {attempts}/{max_retries} per '{keyword}': {api_error}")
                 # Potrebbe essere un errore temporaneo, retry

        except requests.exceptions.HTTPError as http_err:
            status_code = http_err.response.status_code
            print(f"  !! [DataForSEO HTTP Err {status_code}] Tentativo {attempts}/{max_retries} per '{keyword}'.")
            if status_code == 401 or status_code == 403: # Auth error
                print("  !! Errore Autenticazione DataForSEO. Controlla la chiave API. Interruzione tentativi.")
                return -1 # Errore non recuperabile
            # Altri errori 4xx o 5xx potrebbero essere temporanei
            wait_time = 3 * attempts
        except requests.exceptions.Timeout:
            print(f"  !! [DataForSEO Timeout] Tentativo {attempts}/{max_retries} per '{keyword}'. Attesa...")
            wait_time = 5 * attempts
        except requests.exceptions.RequestException as req_err:
            print(f"  !! [DataForSEO Request Err] Tentativo {attempts}/{max_retries} per '{keyword}': {req_err}")
            wait_time = 4 * attempts
        except json.JSONDecodeError:
            print(f"  !! [DataForSEO JSON Err] Tentativo {attempts}/{max_retries} per '{keyword}'. Risposta non JSON.")
            wait_time = 3 * attempts
        except Exception as e:
            print(f"  !! [DataForSEO Generic Err] Tentativo {attempts}/{max_retries} per '{keyword}': {type(e).__name__} - {e}")
            wait_time = 3 * attempts

        if attempts >= max_retries:
            print(f"!!! [DataForSEO FAIL] Falliti tutti i {max_retries} tentativi per '{keyword}'")
            return -1 # Fallito dopo tutti i tentativi
        # print(f"      [DataForSEO RETRY] Attesa {wait_time}s...") # Debug
        time.sleep(wait_time)

    return -1 # Fallito dopo tutti i tentativi

def get_saturation_scores_parallel(entity_list, max_workers=MAX_SATURATION_THREADS):
    """
    Ottiene i punteggi di saturazione da DataForSEO per una lista di entità in parallelo.
    Restituisce un dizionario {entity: saturation_score}.
    Score è -1 in caso di errore nel recupero.
    """
    if not FETCH_SATURATION or not DATA_FOR_SEO_AUTH:
        print("\n--- Analisi Saturazione DataForSEO Saltata (flag disattivo o chiave mancante) ---")
        return {}

    print(f"\n--- Avvio Analisi Saturazione DataForSEO ({len(entity_list)} entità, Max Workers: {max_workers}) ---")
    saturation_map = {}
    futures = {}
    # Non usare Semaphore qui, le limitazioni sono più a livello di account/secondo che di connessioni TCP
    # L'API DataForSEO gestisce internamente la concorrenza lato server.
    # Un numero ragionevole di threads è comunque utile per gestire la latenza I/O.

    def call_saturation_safe(entity):
        # Non c'è bisogno di Semaphore qui
        return get_single_saturation_score(entity)

    with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
        print(f"  Sottomissione {len(entity_list)} task a DataForSEO...")
        for entity in entity_list:
            future = executor.submit(call_saturation_safe, entity)
            futures[future] = entity
            time.sleep(random.uniform(0.03, 0.1)) # Leggero stagger per evitare burst iniziali

        print("  Attesa completamento task DataForSEO...")
        successful_count = 0
        failed_count = 0
        total_tasks = len(entity_list)

        for future in tqdm(concurrent.futures.as_completed(futures), total=total_tasks, desc="Analisi Saturazione", unit="entity", ncols=100):
            entity = futures[future]
            result = -1 # Default a -1 (errore/non trovato)
            try:
                # Usare un timeout globale generoso per result()
                result_raw = future.result(timeout=DATA_FOR_SEO_REQUEST_TIMEOUT * (DATA_FOR_SEO_MAX_RETRIES + 1))
                if isinstance(result_raw, int): # Accetta 0 come risultato valido
                    result = result_raw
                    if result >= 0: # Considera successo se abbiamo un numero >= 0
                        successful_count += 1
                    else: # result == -1 indica fallimento interno
                        failed_count +=1
                else: # Non dovrebbe succedere se get_single_saturation_score ritorna int o -1
                     failed_count += 1

            except concurrent.futures.TimeoutError:
                print(f"\n!!! Timeout globale DataForSEO per '{entity}' !!!")
                failed_count += 1
            except Exception as exc:
                print(f"\n!!! Errore recupero risultato DataForSEO per '{entity}': {exc} !!!")
                failed_count += 1
            saturation_map[entity] = result # Mappa sempre, -1 se fallito/non trovato

    print(f"--- Analisi Saturazione DataForSEO completata ({successful_count}/{total_tasks} con successo, {failed_count} falliti/non disponibili) ---")
    return saturation_map

# ==============================================================================

# --- FUNZIONE: Generazione output HTML (aggiornata per logica "Docs Only" + Saturazione) ---
def generate_html_output(df_final, runtime_info=None):
    """
    Genera solo il file data.js nella directory di output, includendo la saturazione.
    Assume che index.html, style.css, script.js esistano già in OUTPUT_DIR.
    """
    try:
        os.makedirs(OUTPUT_DIR, exist_ok=True)
        base_files_ok = True
        for file_name in [OUTPUT_FILENAME, "style.css", "script.js"]:
            if not os.path.exists(os.path.join(OUTPUT_DIR, file_name)):
                warnings.warn(f"File base '{file_name}' non trovato in '{OUTPUT_DIR}'. L'output potrebbe non funzionare correttamente.", UserWarning)
                base_files_ok = False

        trend_list = []
        # Aggiungi 'Saturation_Score' alle colonne richieste per la verifica (opzionale)
        required_cols = ['Rank', 'Entita', 'Discover_Score', 'Score_Avg_now 1-H', 'Score_Avg_now 4-H', 'Score_Avg_now 7-d', 'Extracted_Entities', 'Saturation_Score']
        available_cols = df_final.columns
        missing_warned = False
        for col in required_cols:
            if col not in available_cols and not missing_warned:
                warnings.warn(f"Colonne mancanti nel DF finale: {', '.join([c for c in required_cols if c not in available_cols])}. Default usati.", UserWarning)
                missing_warned = True

        for _, row in df_final.iterrows():
            trend_data = {
                'rank': int(row.get('Rank', 0)),
                'entity': row.get('Entita', 'N/A'),
                'discover_score': float(row.get('Discover_Score', 0)),
                'score_1h': float(row.get('Score_Avg_now 1-H', 0)),
                'score_4h': float(row.get('Score_Avg_now 4-H', 0)),
                'score_7d': float(row.get('Score_Avg_now 7-d', 0)),
                'extracted_entities': row.get('Extracted_Entities', ''),
                # Aggiungi saturation_score, con default a -1.0 se non trovato/fallito
                'saturation_score': float(row.get('Saturation_Score', -1.0))
            }
            trend_list.append(trend_data)

        run_metadata = {
            'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            'trends_count': len(trend_list),
            'top_score': max((t['discover_score'] for t in trend_list), default=0),
            'runtime_minutes': (runtime_info['end_time'] - runtime_info['start_time']) / 60 if runtime_info and 'start_time' in runtime_info and 'end_time' in runtime_info else 0,
            'pytrends_proxies_used': len(proxy_manager.all_proxies) if proxy_manager else 0,
            'openai_enabled': FETCH_OPENAI_ENTITIES,
            'openai_model': OPENAI_MODEL if FETCH_OPENAI_ENTITIES else 'N/A',
            'saturation_enabled': FETCH_SATURATION,
            'saturation_location': DATA_FOR_SEO_LOCATION if FETCH_SATURATION else 'N/A'
        }

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
# ==================== SCRIPT PRINCIPALE (V7.8 - Docs Only, OpenAI, Saturation) ===================
# ==============================================================================
if __name__ == "__main__":
    main_start_time = time.time()
    runtime_info = {'start_time': main_start_time}

    # --- Validazioni iniziali parametri ---
    if FETCH_VOLUME_CONTEXT:
        if not CONTEXT_TIMEFRAMES: warnings.warn("CONTEXT_TIMEFRAMES vuoto. Contesto Pytrends disattivato.", UserWarning); FETCH_VOLUME_CONTEXT = False
        if CONTEXT_N_RUNS <= 0: warnings.warn("CONTEXT_N_RUNS <= 0 non valido. Contesto Pytrends disattivato.", UserWarning); FETCH_VOLUME_CONTEXT = False
        if N_PROCESS_FOR_CONTEXT <= 0: warnings.warn("N_PROCESS_FOR_CONTEXT <= 0 non valido. Contesto Pytrends disattivato.", UserWarning); FETCH_VOLUME_CONTEXT = False
    if FETCH_OPENAI_ENTITIES:
        if N_PROCESS_FOR_OPENAI <= 0: warnings.warn("N_PROCESS_FOR_OPENAI <= 0. OpenAI disattivato.", UserWarning); FETCH_OPENAI_ENTITIES = False
        if not openai_client: warnings.warn("Client OpenAI non inizializzato. OpenAI disattivato.", UserWarning); FETCH_OPENAI_ENTITIES = False
    if FETCH_SATURATION:
         if N_PROCESS_FOR_SATURATION <= 0: warnings.warn("N_PROCESS_FOR_SATURATION <= 0. Saturazione disattivata.", UserWarning); FETCH_SATURATION = False
         if not DATA_FOR_SEO_AUTH: warnings.warn("Credenziali DataForSEO non trovate. Saturazione disattivata.", UserWarning); FETCH_SATURATION = False


    print(f"--- Avvio script Discover Prophet V7.8 (Docs Only, OpenAI, Saturation) ---")
    print(f"Formula Discover Score: V7.9 (Numeratore Pesato: V4h={WEIGHT_V4H_NUMERATOR}, V7d={WEIGHT_V7D_NUMERATOR}; Denominatore K={V7D_PENALTY_K}, epsilon={V7D_PENALTY_EPSILON})")
    print(f"Modalità: Lavora direttamente su '{OUTPUT_DIR}', genera solo 'data.js'.")
    print(f"Estrazione Contesto Volume (Pytrends): {'ATTIVA' if FETCH_VOLUME_CONTEXT else 'DISATTIVATA'} (Top {N_PROCESS_FOR_CONTEXT}, Runs: {CONTEXT_N_RUNS})")
    print(f"Estrazione Entità OpenAI: {'ATTIVA' if FETCH_OPENAI_ENTITIES else 'DISATTIVATA'} (Top {N_PROCESS_FOR_OPENAI}, Modello: {OPENAI_MODEL if FETCH_OPENAI_ENTITIES else 'N/A'})")
    print(f"Analisi Saturazione (DataForSEO): {'ATTIVA' if FETCH_SATURATION else 'DISATTIVATA'} (Top {N_PROCESS_FOR_SATURATION}, Loc: {DATA_FOR_SEO_LOCATION}, Lang: {DATA_FOR_SEO_LANGUAGE})")
    print(f"Config Proxy Pytrends: MaxConc={MAX_CONCURRENT_PROXIES}, CD={PROXY_USE_COOLDOWN}s")
    print(f"Config Threads: Pytrends={MAX_THREADS_PYTRENDS}, OpenAI={MAX_OPENAI_THREADS}, Saturazione={MAX_SATURATION_THREADS}")
    print(f"Output: '{OUTPUT_DIR}', Checkpoints: '{CHECKPOINT_DIR}'")

    ordered_entities = None
    df_final = pd.DataFrame()

    try:
        # --- 0. Crea directory necessarie ---
        os.makedirs(CHECKPOINT_DIR, exist_ok=True); print(f"Directory checkpoint: '{CHECKPOINT_DIR}'")
        os.makedirs(OUTPUT_DIR, exist_ok=True); print(f"Directory output: '{OUTPUT_DIR}'")

        # --- 1. Estrazione Lista Ordinata (Google Trends TV) ---
        ordered_entities = extract_ordered_entities()
        if not ordered_entities: raise Exception("Estrazione iniziale entità ordinata fallita.")
        print(f"\nLista Ordinata Iniziale Estratta ({len(ordered_entities)} entità).")
        try:
            df_initial = pd.DataFrame({'Rank': range(1, len(ordered_entities) + 1), 'Entita': ordered_entities})
            df_initial.to_csv(os.path.join(CHECKPOINT_DIR, "01_entities_ordered_extracted.csv"), index=False, encoding='utf-8-sig')
            print(f"  Checkpoint lista ordinata iniziale salvato.")
        except Exception as e: print(f"  Errore salvataggio checkpoint lista ordinata: {e}")

        # --- Prepara DataFrame finale e inizializza colonne ---
        df_final = df_initial.copy()
        for tf in CONTEXT_TIMEFRAMES: df_final[f'Score_Avg_{tf}'] = 0.0
        df_final['Extracted_Entities'] = ''
        df_final['Saturation_Score'] = -1.0 # Inizializza saturazione a -1.0 (float)
        df_final['Discover_Score'] = 0.0

        # Determina le entità da processare (usa il minimo tra i vari N_PROCESS se attivi)
        num_to_process_list = []
        if FETCH_VOLUME_CONTEXT: num_to_process_list.append(N_PROCESS_FOR_CONTEXT)
        if FETCH_OPENAI_ENTITIES: num_to_process_list.append(N_PROCESS_FOR_OPENAI)
        if FETCH_SATURATION: num_to_process_list.append(N_PROCESS_FOR_SATURATION)
        n_process_max = min(num_to_process_list) if num_to_process_list else len(ordered_entities)
        n_process_max = min(n_process_max, len(ordered_entities)) # Non superare il numero totale di entità
        print(f"\nProcessando fino a {n_process_max} entità principali per contesto/OpenAI/saturazione.")

        entities_to_process = ordered_entities[:n_process_max]


        # --- 2. Raccolta Score di Contesto Pytrends (se attivo) ---
        if FETCH_VOLUME_CONTEXT:
            print(f"\n--- Avvio Raccolta Score Contesto Pytrends per Top {len(entities_to_process)} Entità ---")
            timeframe_context_results = defaultdict(lambda: defaultdict(list))
            for run in range(1, CONTEXT_N_RUNS + 1):
                print(f"\n===== INIZIO RACCOLTA CONTESTO PYTRENDS - RUN {run}/{CONTEXT_N_RUNS} ====="); rst = time.time()
                run_scores = {}
                for tf in CONTEXT_TIMEFRAMES:
                    scores = get_all_context_scores(entities_to_process, tf)
                    run_scores[tf] = scores
                    for entity, score in scores.items(): timeframe_context_results[tf][entity].append(score)
                    print(f"    Run {run}/{CONTEXT_N_RUNS}: Contesto Pytrends {tf} completato.")
                try:
                    df_run_checkpoint = pd.DataFrame(entities_to_process, columns=['Entita'])
                    for tf, scores_dict in run_scores.items(): df_run_checkpoint[f'Score_{tf.replace(" ","_")}_Run{run}'] = df_run_checkpoint['Entita'].map(scores_dict).fillna(0)
                    chk_filename = f"02_context_run_{run}_scores.csv"
                    df_run_checkpoint.to_csv(os.path.join(CHECKPOINT_DIR, chk_filename), index=False, encoding='utf-8-sig'); print(f"  Checkpoint Contesto Pytrends Run {run} salvato.")
                except Exception as e: print(f"  Errore salvataggio checkpoint contesto Pytrends Run {run}: {e}")
                print(f"===== FINE RACCOLTA CONTESTO PYTRENDS - RUN {run}/{CONTEXT_N_RUNS} (Durata: {time.time() - rst:.2f}s) =====")
                if run < CONTEXT_N_RUNS: time.sleep(random.uniform(5, 15))
            print("\n  Calcolo Score Medi di Contesto Pytrends dalle Run...")
            for tf_agg in CONTEXT_TIMEFRAMES:
                sc_avg_col = f'Score_Avg_{tf_agg}'
                avg_scores_map = {entity: np.mean(scores) if scores else 0 for entity, scores in timeframe_context_results[tf_agg].items()}
                df_final[sc_avg_col] = df_final['Entita'].map(avg_scores_map).fillna(0)
                print(f"    Media contesto Pytrends per {tf_agg} calcolata.")
            print("--- Fine Raccolta Score Contesto Pytrends ---")
            try:
                cols_to_save = ['Rank', 'Entita'] + [f'Score_Avg_{tf}' for tf in CONTEXT_TIMEFRAMES if f'Score_Avg_{tf}' in df_final.columns]
                df_final.loc[df_final['Entita'].isin(entities_to_process), cols_to_save].to_csv(os.path.join(CHECKPOINT_DIR, "03_context_pytrends_averages.csv"), index=False, encoding='utf-8-sig'); print(f"  Checkpoint medie contesto Pytrends salvato.")
            except Exception as e: print(f"  Errore salvataggio checkpoint medie contesto Pytrends: {e}")
        else:
            print("\n--- Raccolta Score Contesto Pytrends Saltata ---")
            # Assicura che le colonne esistano anche se saltato, inizializzate a 0.0
            for tf in CONTEXT_TIMEFRAMES:
                if f'Score_Avg_{tf}' not in df_final.columns: df_final[f'Score_Avg_{tf}'] = 0.0

        # --- 3. Estrazione Entità con OpenAI (se attiva) ---
        if FETCH_OPENAI_ENTITIES:
            extracted_entities_map = get_entities_with_openai(entities_to_process)
            df_final['Extracted_Entities'] = df_final['Entita'].map(extracted_entities_map).fillna('')
            print("  Entità OpenAI mappate nel DataFrame.")
            try:
                df_openai_chk = df_final.loc[df_final['Entita'].isin(entities_to_process), ['Entita', 'Extracted_Entities']]
                chk_filename = "04_openai_extracted_entities.csv"
                df_openai_chk.to_csv(os.path.join(CHECKPOINT_DIR, chk_filename), index=False, encoding='utf-8-sig'); print(f"  Checkpoint entità OpenAI salvato.")
            except Exception as e: print(f"  Errore salvataggio checkpoint entità OpenAI: {e}")
        else:
             print("\n--- Estrazione Entità OpenAI Saltata ---")
             if 'Extracted_Entities' not in df_final.columns: df_final['Extracted_Entities'] = ''


        # --- 4. Analisi Saturazione con DataForSEO (se attiva) ---
        if FETCH_SATURATION:
            saturation_map = get_saturation_scores_parallel(entities_to_process)
            # Applica i risultati al DataFrame, sovrascrivendo il default -1.0 solo dove abbiamo un risultato
            df_final['Saturation_Score'] = df_final['Entita'].map(saturation_map).fillna(df_final['Saturation_Score']) # Mantiene -1.0 se non processato/fallito
            # Converti in float, gestendo possibili NaN risultanti da .map() se entity non era in saturation_map (improbabile qui)
            df_final['Saturation_Score'] = df_final['Saturation_Score'].astype(float)
            print("  Punteggi di Saturazione DataForSEO mappati nel DataFrame.")
            try:
                df_saturation_chk = df_final.loc[df_final['Entita'].isin(entities_to_process), ['Entita', 'Saturation_Score']]
                chk_filename = "05_saturation_scores.csv"
                df_saturation_chk.to_csv(os.path.join(CHECKPOINT_DIR, chk_filename), index=False, encoding='utf-8-sig'); print(f"  Checkpoint punteggi saturazione salvato.")
            except Exception as e: print(f"  Errore salvataggio checkpoint saturazione: {e}")
        else:
            print("\n--- Analisi Saturazione DataForSEO Saltata ---")
            if 'Saturation_Score' not in df_final.columns: df_final['Saturation_Score'] = -1.0


        # --- 5. Calcolo Heuristic Discover Score (V7.9) ---
        print("\n  Calcolo Heuristic Discover Score V7.9 (Numeratore Pesato)...")
        discover_score_col = 'Discover_Score'; score_4h_col = 'Score_Avg_now 4-H'; score_7d_col = 'Score_Avg_now 7-d'
        # Assicurati che le colonne necessarie esistano e siano numeriche
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
            warnings.warn(f"Colonne necessarie ({', '.join(missing_cols)}) per Discover Score mancanti. Score impostato a 0.", UserWarning)
            df_final[discover_score_col] = 0.0
        # Assicura che la colonna sia float
        df_final[discover_score_col] = df_final[discover_score_col].astype(float)

        # --- 6. Ordinamento Finale per Discover Score ---
        if discover_score_col in df_final.columns:
            df_final = df_final.sort_values(by=discover_score_col, ascending=False).reset_index(drop=True)
            print(f"\n  DataFrame finale ordinato per '{discover_score_col}'.")
        else: print(f"\n  ATTENZIONE: Colonna '{discover_score_col}' non trovata per l'ordinamento.")

        # --- 7. Salva il DataFrame finale completo come CSV ---
        try:
            # Aggiorna nome file per riflettere la versione e l'inclusione della saturazione
            backup_filename = "06_final_sorted_data_v7.9_score_with_saturation.csv"
            df_final.to_csv(os.path.join(CHECKPOINT_DIR, backup_filename), index=False, encoding='utf-8-sig')
            print(f"\nDataFrame finale completo salvato: {os.path.join(CHECKPOINT_DIR, backup_filename)}")
        except Exception as e: print(f"\n!!! Errore salvataggio CSV finale completo: {e} !!!")

        # --- 8. Genera l'output data.js ---
        runtime_info['end_time'] = time.time()
        html_result = generate_html_output(df_final, runtime_info)
        # Non serve controllare html_result qui perché genera solo data.js

        # --- 9. Stampa Top N Finale ---
        print(f"\n--- Top {TOP_N_FINAL_DISPLAY} Entità (Ordinate per Discover Score Heuristico V7.9) ---")
        # Aggiungi Saturation_Score alle colonne da mostrare
        cols_to_show = [c for c in ['Discover_Score', 'Rank', 'Entita', 'Saturation_Score', 'Extracted_Entities', 'Score_Avg_now 1-H', 'Score_Avg_now 4-H', 'Score_Avg_now 7-d'] if c in df_final.columns]
        try:
            pd.set_option('display.max_rows', TOP_N_FINAL_DISPLAY + 5); pd.set_option('display.width', 220); pd.set_option('display.max_colwidth', 50); pd.set_option('display.float_format', '{:.2f}'.format) # Adatta width e colwidth
            # Formattazione specifica per Saturation_Score (intero, mostra -1 se è il caso)
            formatters = {'Discover_Score': '{:.3f}'.format,
                          'Score_Avg_now 1-H': '{:.1f}'.format,
                          'Score_Avg_now 4-H': '{:.1f}'.format,
                          'Score_Avg_now 7-d': '{:.1f}'.format,
                          'Saturation_Score': lambda x: f"{int(x)}" if x != -1.0 else "-"} # Mostra come intero o '-'
            print(df_final[cols_to_show].head(TOP_N_FINAL_DISPLAY).to_string(index=False, formatters=formatters))
        except Exception as e_print: print(f"Errore stampa finale: {e_print}")
        finally: pd.reset_option('display.max_rows'); pd.reset_option('display.width'); pd.reset_option('display.max_colwidth'); pd.reset_option('display.float_format')


    except Exception as main_exc:
        print(f"\n\n!!! ERRORE CRITICO SCRIPT: {type(main_exc).__name__} - {main_exc} !!!"); traceback.print_exc()
    finally:
        print("\n--- Statistiche Proxy Pytrends Rilevate (Fine Esecuzione) ---")
        try:
            if 'proxy_manager' in locals() and proxy_manager:
                ps = proxy_manager.get_proxy_stats_summary(); total_requests = ps.get('total_success', 0) + ps.get('total_fail_429', 0) + ps.get('total_fail_proxy_timeout', 0) + ps.get('total_fail_other_parse', 0); success_rate = (ps.get('total_success', 0) / total_requests * 100) if total_requests > 0 else 0
                print(f"Req Tot Proxy Pytrends: {total_requests}, Successi: {ps.get('total_success', 0)} ({success_rate:.1f}%)"); print(f"  Fail: 429={ps.get('total_fail_429', 0)}, Proxy/Timeout={ps.get('total_fail_proxy_timeout', 0)}, Altri/Parse={ps.get('total_fail_other_parse', 0)}")
                tfp = ps.get('top_failing_proxies', {});
                if tfp: print("Top Failing Proxies Pytrends:"); [print(f"  - {pid}: Succ:{d['success']}, FailsCons:{d['consecutive_fails']} (429:{d['fail_429']}, P/T:{d['fail_proxy/timeout']}, O/P:{d['fail_other/parse']})") for pid, d in list(tfp.items())[:5]] # Mostra solo top 5
            else: print("Proxy Manager Pytrends non disponibile per statistiche.")
        except Exception as stats_exc: print(f"Errore stampa stats proxy Pytrends: {stats_exc}")

        main_end_time = time.time(); total_duration = main_end_time - main_start_time
        print(f"\n--- Script V7.8 (Score V7.9, Saturation) completato in {total_duration:.2f} sec ({total_duration/60:.2f} min) ---")
