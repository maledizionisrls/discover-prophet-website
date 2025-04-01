# -*- coding: utf-8 -*-

# 🚀 Script Ottimizzato per Google Trends - V7.8 (Docs Only, OpenAI & Saturation)
#    Lavora direttamente con i file nella cartella 'docs'.
#    Eliminata la cartella 'templates' e la logica di copia file.
#    Genera solo 'docs/data.js'.
#    Integra OpenAI per estrarre entità chiave dalle query di tendenza.
#    Legge la chiave API OpenAI dalla variabile d'ambiente OPENAI_API_KEY.
#    **Formula V7.9 per Discover Score (Numeratore Pesato).**
#    **AGGIUNTO: Calcolo Punteggio Saturazione (intitle: scrape con curl_cffi).**

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
from urllib.parse import quote_plus # Per URL encoding saturazione
try:
    from curl_cffi.requests import get as impersonate_get # Per scraping saturazione
except ImportError:
    print("!!! ATTENZIONE: Libreria 'curl_cffi' non trovata. Lo scraping della saturazione fallirà. !!!")
    print("!!! Esegui: pip install curl_cffi !!!")
    impersonate_get = None # Imposta a None per controlli successivi

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
        def _fallback_ua(self): return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36" # Aggiornato UA
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
N_PROCESS_FOR_OPENAI = N_PROCESS_FOR_CONTEXT # Processa le stesse entità del contesto
OPENAI_MODEL = "gpt-4o"
OPENAI_MAX_RETRIES = 3
OPENAI_REQUEST_TIMEOUT = 30
MAX_OPENAI_THREADS = 10

# --- Parametri Calcolo Saturazione (NUOVO) ---
FETCH_SATURATION_SCORE = True
N_PROCESS_FOR_SATURATION = 50 # Quante keyword processare per la saturazione (max 50)
SATURATION_IMPERSONATE_BROWSER = 'chrome124' # Browser da impersonare con curl_cffi
SATURATION_MAX_RETRIES = 5      # Tentativi per richiesta singola saturazione
SATURATION_REQUEST_TIMEOUT = 30 # Timeout per richiesta singola saturazione
MAX_SATURATION_THREADS = 20     # Thread concorrenti per scraping saturazione
SATURATION_MIN_DELAY = 2.0      # Pausa minima tra richieste saturazione
SATURATION_MAX_DELAY = 5.0      # Pausa massima tra richieste saturazione

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

# --- Parametri Formula Discover Score V7.9 ---
V7D_PENALTY_K = 50.0
V7D_PENALTY_EPSILON = 0.1
WEIGHT_V4H_NUMERATOR = 0.5
WEIGHT_V7D_NUMERATOR = 1.5

# --- Parametri Gestione Proxy e Concorrenza ---
MAX_CONCURRENT_PROXIES = 210
PROXY_USE_COOLDOWN = 7
MAX_THREADS_PYTRENDS = 80 # Mantenuto per pytrends

# --- Parametri Ritardi e Pause ---
MIN_DELAY_BETWEEN_REQUESTS = 0 # Per pytrends
MAX_DELAY_BETWEEN_REQUESTS = 2.0 # Per pytrends
ENTITY_EXTRACTION_INITIAL_WAIT = 5

# --- Parametri Gestione Errori e Tentativi ---
ENTITY_EXTRACTION_MAX_RETRIES = 15
MAX_RETRIES_PYTRENDS_CONTEXT = 8
INITIAL_BACKOFF_SECONDS_429 = 5
BACKOFF_MULTIPLIER_429 = 1.2
MAX_WAIT_SECONDS = 20 # Aumentato leggermente
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

# Verifica preliminare curl_cffi se la saturazione è richiesta
if FETCH_SATURATION_SCORE and impersonate_get is None:
    warnings.warn("FETCH_SATURATION_SCORE è True ma 'curl_cffi' non è importabile. Saturazione disabilitata.", UserWarning)
    FETCH_SATURATION_SCORE = False

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
# !!! SOSTITUISCI QUESTA STRINGA CON LA TUA REALE STRINGA PROXY !!!
proxy_base_string = "v2.proxyempire.io:5000:r_xxxxxxxxxx-country-{geo}:xxxxxxxxxx"
# !!! FINE SEZIONE DA SOSTITUIRE !!!

original_country_codes = ['af', 'al', 'dz', 'as', 'ad', 'ao', 'ai', 'aq', 'ag', 'ar', 'am', 'aw', 'au', 'at', 'az', 'bs', 'bh', 'bd', 'bb', 'by', 'be', 'bz', 'bj', 'bm', 'bt', 'bo', 'ba', 'bw', 'br', 'io', 'bn', 'bg', 'bf', 'bi', 'kh', 'cm', 'ca', 'cv', 'ky', 'cf', 'td', 'cl', 'cn', 'co', 'km', 'cg', 'ck', 'cr', 'hr', 'cu', 'cy', 'cz', 'dk', 'dj', 'dm', 'do', 'ec', 'eg', 'sv', 'gq', 'er', 'ee', 'et', 'fk', 'fo', 'fj', 'fi', 'fr', 'gf', 'pf', 'ga', 'gm', 'ge', 'de', 'gh', 'gi', 'gr', 'gl', 'gd', 'gp', 'gu', 'gt', 'gg', 'gn', 'gw', 'gy', 'ht', 'va', 'hn', 'hk', 'hu', 'is', 'in', 'id', 'ir', 'iq', 'ie', 'im', 'il', 'it', 'ci', 'jm', 'jp', 'je', 'jo', 'kz', 'ke', 'ki', 'kw', 'kg', 'la', 'lv', 'lb', 'ls', 'lr', 'ly', 'li', 'lt', 'lu', 'mo', 'mk', 'mg', 'mw', 'my', 'mv', 'ml', 'mt', 'mh', 'mq', 'mr', 'mu', 'yt', 'mx', 'fm', 'md', 'mc', 'mn', 'me', 'ms', 'ma', 'mz', 'mm', 'na', 'nr', 'np', 'nl', 'nc', 'nz', 'ni', 'ne', 'ng', 'nu', 'nf', 'kp', 'gb', 'mp', 'no', 'om', 'pk', 'pw', 'ps', 'pa', 'pg', 'py', 'pe', 'ph', 'pl', 'pt', 'pr', 'qa', 're', 'ro', 'ru', 'rw', 'sh', 'kn', 'lc', 'vc', 'ws', 'sm', 'st', 'sa', 'sn', 'rs', 'sc', 'sl', 'sg', 'sk', 'si', 'sb', 'so', 'za', 'kr', 'ss', 'es', 'lk', 'sd', 'sr', 'sz', 'se', 'ch', 'sy', 'tj', 'tw', 'tz', 'th', 'cd', 'tl', 'tg', 'tk', 'to', 'tt', 'tn', 'tr', 'tm', 'tc', 'tv', 'ug', 'ua', 'ae', 'us', 'uy', 'uz', 'vu', 've', 'vn', 'vg', 'vi', 'wf', 'eh', 'ye', 'zm', 'zw']
proxies_to_remove_geo = {'aq', 'io', 'cf', 'bi', 'td', 'km', 'fk', 'cn', 'gw', 'va', 'ki', 'nr', 'nu', 'nf', 'kp', 'pg', 'sh', 'ws', 'tl', 'tk', 'tv', 'wf', 'eh', 'dj', 'gl', 'al'}
country_codes = [code for code in original_country_codes if code not in proxies_to_remove_geo]
print(f"GEO usati: {len(country_codes)}.")
proxies_list_with_geo = []
for geo in country_codes:
    try:
        proxy_str = proxy_base_string.format(geo=geo.lower())
        parts = proxy_str.split(':')
        if len(parts) == 4:
            # Cerca il codice paese nel terzo elemento (username)
            match = re.search(r'-country-([a-z]{2})', parts[2], re.IGNORECASE)
            if match:
                proxies_list_with_geo.append({"proxy": proxy_str, "geo": match.group(1).upper()})
            # else: # Debug: Username non contiene il geo atteso
            #     print(f"Debug: GEO non trovato nell'username per {geo}: {parts[2]}")
        # else: # Debug: Formato stringa proxy non corretto
        #     print(f"Debug: Formato proxy non valido per {geo}: {proxy_str}")
    except Exception as e_format: # Cattura errori nella formattazione della stringa
         print(f"Errore formattazione proxy per GEO '{geo}': {e_format}")

if not proxies_list_with_geo:
    raise ValueError("!!! Lista proxy VUOTA dopo filtro! Controlla la 'proxy_base_string' e i codici GEO. !!!")
print(f"Generati {len(proxies_list_with_geo)} proxy con geo.")


# --- Mapping Geo -> Lingua/Timezone ---
COUNTRY_LOCALE_MAP = {'IT': {'hl': 'it-IT', 'tz': 60}, 'US': {'hl': 'en-US', 'tz': -300}, 'GB': {'hl': 'en-GB', 'tz': 0}, 'FR': {'hl': 'fr-FR', 'tz': 60}, 'DE': {'hl': 'de-DE', 'tz': 60}, 'ES': {'hl': 'es-ES', 'tz': 60}, 'JP': {'hl': 'ja-JP', 'tz': 540}, 'AU': {'hl': 'en-AU', 'tz': 600}, 'CA': {'hl': 'en-CA', 'tz': -300}, 'BR': {'hl': 'pt-BR', 'tz': -180}, 'IN': {'hl': 'en-IN', 'tz': 330}, 'MA': {'hl': 'fr-MA', 'tz': 0}, 'HN': {'hl': 'es-HN', 'tz': -360}, 'BS': {'hl': 'en-BS', 'tz': -300}, 'TO': {'hl': 'en-TO', 'tz': 780}, 'BE': {'hl': 'fr-BE', 'tz': 60}, 'OM': {'hl': 'ar-OM', 'tz': 240}, 'GM': {'hl': 'en-GM', 'tz': 0}, 'LU': {'hl': 'fr-LU', 'tz': 60}, 'BN': {'hl': 'ms-BN', 'tz': 480}, 'SZ': {'hl': 'en-SZ', 'tz': 120}, 'MN': {'hl': 'mn-MN', 'tz': 480}, 'EG': {'hl': 'ar-EG', 'tz': 120}, 'AT': {'hl': 'de-AT', 'tz': 60}, 'IE': {'hl': 'en-IE', 'tz': 0}, 'KW': {'hl': 'ar-KW', 'tz': 180}, 'MM': {'hl': 'my-MM', 'tz': 390}, 'LV': {'hl': 'lv-LV', 'tz': 120}, 'RW': {'hl': 'rw-RW', 'tz': 120}, 'KR': {'hl': 'ko-KR', 'tz': 540}, 'TJ': {'hl': 'tg-TJ', 'tz': 300}, 'MH': {'hl': 'en-MH', 'tz': 720}, 'ZA': {'hl': 'en-ZA', 'tz': 120}, 'FI': {'hl': 'fi-FI', 'tz': 120}, 'DEFAULT': {'hl': 'en-US', 'tz': 0}}
def get_locale_for_geo(geo_code): return COUNTRY_LOCALE_MAP.get(geo_code.upper(), COUNTRY_LOCALE_MAP['DEFAULT'])

# --- Funzione Utilità get_proxy_url (usata anche per curl_cffi) ---
def get_proxy_url(proxy_str):
    """Converte la stringa proxy nel formato URL http://user:pass@host:port."""
    if not proxy_str: return None
    parts = proxy_str.split(':')
    if len(parts) == 4:
        host, port, user, pwd = parts
        if port.isdigit(): return f"http://{user}:{pwd}@{host}:{port}"
    # warnings.warn(f"Formato proxy non valido: {proxy_str}", UserWarning) # Troppo verboso
    return None

# --- Classi AdvancedProxyManager e ConsistentBrowserProfile (INVARIATE) ---
class AdvancedProxyManager:
    def __init__(self, proxy_geo_list, max_concurrent, cooldown_seconds): self.max_concurrent=max_concurrent; self.cooldown_seconds=cooldown_seconds; self.lock=threading.Lock(); self.all_proxies={i['proxy']: i['geo'] for i in proxy_geo_list}; self.available_proxies=deque(self.all_proxies.keys()); random.shuffle(list(self.available_proxies)); self.active_proxies={}; self.cooldown_proxies={}; self.proxy_consecutive_failures=defaultdict(int); self.proxy_stats=defaultdict(lambda: {"success":0,"fail_429":0,"fail_5xx":0,"fail_other":0,"fail_timeout":0,"fail_proxy_error":0,"fail_parse":0}); self.active_sessions={}; print(f"AdvProxyManager: {len(self.all_proxies)} proxies, MaxConc: {self.max_concurrent}, CD: {self.cooldown_seconds}s")
    def _check_cooldown(self): ct=time.time(); reactivate=[]; [reactivate.append(p) for p, et in list(self.cooldown_proxies.items()) if ct >= et]; [self.available_proxies.append(p) for p in reactivate if self.cooldown_proxies.pop(p,None)]
    def get_proxy(self):
        with self.lock:
            self._check_cooldown();
            if len(self.active_proxies)<self.max_concurrent and self.available_proxies:
                p_str=self.available_proxies.popleft(); geo=self.all_proxies[p_str]; self.active_proxies[p_str]=time.time(); p_url=get_proxy_url(p_str); # Usa get_proxy_url
                try: prof=ConsistentBrowserProfile(geo)
                except Exception as e: print(f"     Profilo err {geo}: {e}. Uso def."); prof=ConsistentBrowserProfile('DEFAULT')
                scr=None;
                try: bcfg={'browser':'chrome','platform':prof.os if prof.os in ['windows','darwin','linux'] else 'windows','mobile':False,'desktop':True,'user_agent':prof.user_agent}; scr=cloudscraper.create_scraper(browser=bcfg,delay=random.uniform(0.5,1.5)); scr.headers.update(prof.get_headers());
                except Exception as e: print(f"     Scraper err {geo} ({type(e).__name__}). Uso base."); scr=requests.Session(); scr.headers.update(prof.get_headers());
                if p_url: scr.proxies={'http':p_url,'https':p_url}
                self.active_sessions[p_str]={'scraper':scr,'profile':prof}; return p_str, geo, self.active_sessions[p_str]
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
                elif error_type=='ProxyError' or error_type=='curl_cffi_err' or (isinstance(status_code,int) and 500<=status_code<=599): self.proxy_stats[p_str]["fail_proxy_error"]+=1; cd_end=time.time()+(self.cooldown_seconds*3) # Aggiunto curl_cffi_err
                elif error_type=='parse_fail' or error_type=='empty_data' or error_type=='consent_page': self.proxy_stats[p_str]["fail_parse"]+=1; cd_end=time.time()+(self.cooldown_seconds*1.5) # Aggiunto consent_page
                else: self.proxy_stats[p_str]["fail_other"]+=1; cd_end=time.time()+(self.cooldown_seconds*1.2)
                if fails>=PROXY_FAILURE_THRESHOLD: mult=1+(PROXY_FAILURE_COOLDOWN_MULTIPLIER*(fails-PROXY_FAILURE_THRESHOLD+1)); add_cd=self.cooldown_seconds*mult; ct=time.time(); base_dur=cd_end-ct; final_dur=base_dur+add_cd; cd_end=ct+final_dur; print(f"      INFO: Proxy {geo} ({p_str[-10:]}) ha {fails} fails cons. CD esteso a {final_dur:.0f}s.")
            self.cooldown_proxies[p_str]=cd_end
    def get_proxy_stats_summary(self):
        with self.lock:
            ts=sum(s.get("success",0) for s in self.proxy_stats.values()); tf429=sum(s.get("fail_429",0) for s in self.proxy_stats.values()); tfp=sum(s.get("fail_proxy_error",0)+s.get("fail_5xx",0)+s.get("fail_timeout",0) for s in self.proxy_stats.values()); tfo=sum(s.get("fail_other",0)+s.get("fail_parse",0) for s in self.proxy_stats.values()); fpd={};
            for p, s in self.proxy_stats.items(): geo=self.all_proxies.get(p,'N/A'); f429=s.get("fail_429",0); fp=s.get("fail_proxy_error",0)+s.get("fail_5xx",0)+s.get("fail_timeout",0); fo=s.get("fail_other",0)+s.get("fail_parse",0); tf=f429+fp+fo;
            if tf>0: fpd[f"{geo} ({p[-10:]})"]={"success":s.get("success",0),"fail_429":f429,"fail_proxy/timeout":fp,"fail_other/parse":fo,"consecutive_fails":self.proxy_consecutive_failures.get(p,0)}
            sfp=dict(sorted(fpd.items(),key=lambda i:sum(i[1][k] for k in i[1] if k.startswith('fail')),reverse=True)); return {"total_success":ts,"total_fail_429":tf429,"total_fail_proxy_timeout":tfp,"total_fail_other_parse":tfo,"top_failing_proxies":dict(list(sfp.items())[:15])}

class ConsistentBrowserProfile:
    BROWSER_TYPES=['chrome'];OS_MAP={'WINDOWS':['windows'],'MACOS':['darwin'],'LINUX':['linux']};GEO_OS_PREFERENCE={'US':['WINDOWS','MACOS'],'CA':['WINDOWS','MACOS'],'GB':['WINDOWS','MACOS'],'FR':['WINDOWS','MACOS'],'DE':['WINDOWS','MACOS'],'IT':['WINDOWS','MACOS'],'ES':['WINDOWS','MACOS'],'AU':['WINDOWS','MACOS'],'JP':['WINDOWS','MACOS'],'BR':['WINDOWS'],'IN':['WINDOWS'],'DEFAULT':['WINDOWS','MACOS','LINUX']};FALLBACK_USER_AGENT="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"; # Aggiornato UA
    def __init__(self,geo_code):
        if not geo_code or not isinstance(geo_code,str): geo_code='DEFAULT'
        else: geo_code=geo_code.upper()
        self.geo_code=geo_code; self.locale_info=get_locale_for_geo(self.geo_code); pos_os=self.GEO_OS_PREFERENCE.get(self.geo_code,self.GEO_OS_PREFERENCE['DEFAULT']); os_g=random.choice(pos_os); self.os=random.choice(self.OS_MAP.get(os_g,['windows']))[0]; self.browser='chrome'; self.user_agent=self.FALLBACK_USER_AGENT;
        try: ua=UserAgent(use_external_data=False,browsers=['chrome']); self.user_agent=ua.chrome
        except: pass
        lang_base=self.locale_info['hl'].split('-')[0]; self.accept_language=f"{self.locale_info['hl']},{lang_base};q=0.9,en;q=0.8"
    def get_headers(self): return {'User-Agent':self.user_agent,'Accept-Language':self.accept_language,'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7','Accept-Encoding':'gzip, deflate, br','Connection':'keep-alive','Sec-CH-UA':f'"Chromium";v="{random.randint(120,124)}", "Google Chrome";v="{random.randint(120,124)}", "Not?A_Brand";v="99"','Sec-CH-UA-Mobile':'?0','Sec-CH-UA-Platform':f'"{self.os.capitalize()}"','Sec-Fetch-Dest':'document','Sec-Fetch-Mode':'navigate','Sec-Fetch-Site':random.choice(['none','same-origin']),'Sec-Fetch-User':'?1','Upgrade-Insecure-Requests':'1','Cache-Control':'max-age=0',}
    def get_pytrends_params(self): return {'hl':self.locale_info['hl'],'tz':self.locale_info['tz']}
    # NUOVO: Headers specifici per curl_cffi (basati sul tuo script V5)
    def get_saturation_headers(self):
        return {
            "Referer": "https://www.google.com/",
            "Accept-Language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "User-Agent": self.user_agent # Usa lo stesso UA del profilo
            # Altri header Sec-CH-UA etc sono gestiti da impersonate in curl_cffi
        }

# --- Inizializzazione Manager Globale ---
proxy_manager = AdvancedProxyManager(proxies_list_with_geo, MAX_CONCURRENT_PROXIES, PROXY_USE_COOLDOWN)

# --- Estrazione Entità ORDINATA (INVARIATA) ---
def extract_ordered_entities(max_retries=ENTITY_EXTRACTION_MAX_RETRIES, initial_wait=ENTITY_EXTRACTION_INITIAL_WAIT):
    """Estrae la lista ORDINATA di entità da Google Trends TV."""
    attempts = 0; current_wait = initial_wait; proxy_info, geo_code = None, None; print(f"Avvio estrazione lista entità ORDINATA (max {max_retries} tentativi)...")
    while attempts < max_retries:
        attempts += 1; print(f"Tentativo {attempts}/{max_retries} per estrarre entità ordinate...")
        proxy_info, status_code, error_type_str, release_success = None, None, None, False; scraper, session_data, geo_code = None, None, None
        try:
            get_proxy_attempts = 0
            while proxy_info is None and get_proxy_attempts < 5: get_proxy_attempts += 1; proxy_info = proxy_manager.get_proxy(); time.sleep(random.uniform(2, 5) if proxy_info is None else 0)
            if proxy_info is None: print("    Impossibile ottenere proxy per estrazione iniziale. Attesa..."); time.sleep(min(current_wait * 1.5, MAX_WAIT_SECONDS / 2)); current_wait *= 1.5; continue
            proxy_str, geo_code, session_data = proxy_info; scraper = session_data['scraper']; print(f"    Tentativo estrazione con proxy: {geo_code} ({proxy_str[-10:]})")
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
                        if match:
                            json_text = match.group(1).strip().rstrip(',')
                            # Tentativo di correggere JSON potenzialmente malformato (es. virgola finale)
                            try:
                                data = json.loads(json_text)
                            except json.JSONDecodeError as json_err:
                                print(f"        JSON Decode Error (Tentativo correzione): {json_err}")
                                json_text_corrected = json_text.strip()
                                if json_text_corrected.endswith(','):
                                    json_text_corrected = json_text_corrected[:-1]
                                try:
                                     data = json.loads(json_text_corrected)
                                     print("        JSON corretto con successo.")
                                except json.JSONDecodeError as json_err_2:
                                    print(f"        Correzione JSON fallita: {json_err_2}")
                                    raise # Rilancia l'errore originale se la correzione fallisce

                            if isinstance(data, list) and len(data) > 1 and isinstance(data[1], list):
                                entities = [item[0] for item in data[1] if isinstance(item, list) and item and isinstance(item[0], str)]
                                if entities:
                                    ordered_entities_found = entities
                                    found_data = True
                                    break # Esci dal loop degli script appena trovi i dati
                    except Exception as e_parse:
                         print(f"        Parse JSON err (Proxy: {geo_code}): {e_parse}")
                         error_type_str = 'parse_fail'
                         # Considera di non continuare se il parsing fallisce qui
            if found_data and ordered_entities_found: print(f"    Estrate {len(ordered_entities_found)} entità ordinate via {geo_code}."); release_success = True; return ordered_entities_found
            else: print(f"    Status 200 ma dati non trovati/parsati via {geo_code}."); error_type_str = 'parse_fail'; wait_time = min(current_wait * 1.5, MAX_WAIT_SECONDS / 2); time.sleep(wait_time); current_wait = wait_time * 1.2
        except Exception as e:
            error_type_str = type(e).__name__; print(f"!! Errore estrazione (Tentativo {attempts}, Proxy: {geo_code}): {error_type_str}: {e} !!");
            wait_time = min(current_wait * 1.2, MAX_WAIT_SECONDS / 2); time.sleep(wait_time); current_wait = wait_time * 1.2
            if isinstance(e, (requests.exceptions.ProxyError, requests.exceptions.ConnectionError)): error_type_str = 'ProxyError'
            elif isinstance(e, requests.exceptions.Timeout): error_type_str = 'Timeout'
            # Status code potrebbe non essere disponibile se la richiesta fallisce prima
            if 'res' in locals() and res is not None: status_code = res.status_code
            else: status_code = None
        finally:
            if proxy_info: proxy_manager.release_proxy(proxy_info[0], success=release_success, status_code=status_code, error_type=error_type_str); proxy_info = None
    print(f"!!! Estrazione entità ORDINATE fallita dopo {max_retries} tentativi. !!!"); return None

# --- Funzione get_trends_scores (INVARIATA) ---
def get_trends_scores(keywords, timeframe):
    """Ottiene i punteggi medi da Pytrends per un gruppo di keyword e timeframe."""
    attempts = 0; current_backoff_429 = INITIAL_BACKOFF_SECONDS_429; current_backoff_other = 3.0; start_time = time.time()
    proxy_info, pytrends, geo_code = None, None, None
    max_proxy_attempts = min(len(proxy_manager.all_proxies) // 2, MAX_RETRIES_PYTRENDS_CONTEXT * 2); proxy_attempts_set = set()
    kw_list_str = ",".join(sorted(keywords)); kw_hash = hashlib.md5(kw_list_str.encode()).hexdigest()[:6]
    while attempts < MAX_RETRIES_PYTRENDS_CONTEXT and len(proxy_attempts_set) < max_proxy_attempts:
        attempts += 1; proxy_info, status_code, error_type_str, release_success = None, None, None, False; pytrends, session_data, geo_code = None, None, None
        try:
            get_proxy_attempts = 0
            while proxy_info is None and get_proxy_attempts < 5: get_proxy_attempts += 1; proxy_info = proxy_manager.get_proxy(); time.sleep(random.uniform(2, 5) if proxy_info is None else 0)
            if proxy_info is None: print(f"        [CTX KW:{kw_hash} T{attempts}] No proxy for context. Skip."); time.sleep(min(current_backoff_other * 1.5, MAX_WAIT_SECONDS / 2)); current_backoff_other *= 1.2; continue
            proxy_str, geo_code, session_data = proxy_info
            if proxy_str in proxy_attempts_set: proxy_manager.release_proxy(proxy_str, success=False, error_type="duplicato_interno"); proxy_info = None; continue
            proxy_attempts_set.add(proxy_str); profile = session_data['profile']
            try: pytrends = proxy_manager.get_pytrends_session(proxy_str, profile)
            except Exception as e_session: print(f"        [CTX KW:{kw_hash} T{attempts}] Session err (Proxy: {geo_code}): {e_session}"); proxy_manager.release_proxy(proxy_str, success=False, error_type="pytrends_session_error"); proxy_info = None; continue
            base_delay = random.uniform(MIN_DELAY_BETWEEN_REQUESTS, MAX_DELAY_BETWEEN_REQUESTS);
            time.sleep(base_delay)
            shuffled = keywords.copy(); random.shuffle(shuffled); pytrends.build_payload(shuffled, timeframe=timeframe, geo='IT', gprop='')
            df = pytrends.interest_over_time()
            if df.empty or all(c == 'isPartial' for c in df.columns): print(f"        [CTX KW:{kw_hash} T{attempts}] Empty data (Proxy: {geo_code})."); error_type_str = 'empty_data'; time.sleep(current_backoff_other); current_backoff_other = min(current_backoff_other * 1.2, MAX_WAIT_SECONDS / 4)
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

# --- Funzione get_all_context_scores (INVARIATA) ---
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
        future_to_group = {}; print(f"    Sottomissione {len(groups)} task CONTESTO..."); time.sleep(0.5)
        for idx, group in enumerate(groups): future = executor.submit(get_trends_scores_safe, group, timeframe); future_to_group[future] = group; time.sleep(random.uniform(0.05, 0.15) if idx % 10 != 0 else random.uniform(0.3, 0.6))
        print(f"    Attesa completamento task CONTESTO..."); completed_count, failed_count = 0, 0; failed_groups = []; total_tasks = len(groups)
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
                    except Exception as retry_exc: print(f"      Errore retry ctx {group}: {retry_exc}")
            failed_count = retry_failed_count
            print(f"--- Retry CONTESTO {timeframe} completato. Falliti finali: {failed_count} ---")
        else: print(f"--- Raccolta score CONTESTO {timeframe} completata. ({total_tasks} task, {failed_count} falliti) ---")
    return {entity: all_scores.get(entity, 0) for entity in entity_list}

# ==============================================================================
# ==================== FUNZIONI INTEGRAZIONE OPENAI (INVARIATE) ================
# ==============================================================================
def get_single_entity_openai(trend_string, model=OPENAI_MODEL, max_retries=OPENAI_MAX_RETRIES, request_timeout=OPENAI_REQUEST_TIMEOUT):
    """Chiama l'API OpenAI per estrarre entità da una singola stringa di trend."""
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
            else: return None
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
    """Ottiene le entità estratte da OpenAI per una lista di trend in parallelo."""
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
        successful_count = 0; total_tasks = len(trend_list)
        for future in tqdm(concurrent.futures.as_completed(futures), total=total_tasks, desc="Estrazione Entità OpenAI", unit="trend", ncols=100):
            trend = futures[future]; result = ''
            try:
                result_raw = future.result(timeout=OPENAI_REQUEST_TIMEOUT * (OPENAI_MAX_RETRIES + 2))
                if result_raw: result = result_raw; successful_count += 1
            except concurrent.futures.TimeoutError: print(f"\n!!! Timeout globale OpenAI per '{trend}' !!!")
            except Exception as exc: print(f"\n!!! Errore recupero risultato OpenAI per '{trend}': {exc} !!!")
            extracted_entities_map[trend] = result
    print(f"--- Estrazione Entità OpenAI completata ({successful_count}/{total_tasks} con successo) ---")
    return extracted_entities_map
# ==============================================================================

# ==============================================================================
# ================= FUNZIONI PER SCRAPING SATURAZIONE (NUOVE) ==================
# ==============================================================================

def parse_google_result_stats(html_content):
    """Estrae il numero di risultati dal div #result-stats (Adattato da V5)."""
    # Ritorna (conteggio, raw_text, error_type)
    try:
        # print("       [Parse Debug] Inizializzo BeautifulSoup...") # Debug intenso
        soup = BeautifulSoup(html_content, 'html.parser')
        result_stats_div = None
        raw_stats_text = "N/D"

        if not soup.body:
            # print("       [Parse FATAL] Tag <body> non trovato!") # Debug intenso
            return None, "Body HTML mancante", "parse_fail"

        # print("       [Parse Debug] Cerco 'div#result-stats'...") # Debug intenso
        result_stats_div = soup.find('div', id='result-stats')

        if not result_stats_div:
            # print("       [Parse Debug] Provo alternative...") # Debug intenso
            result_stats_div = soup.find('div', class_='result-stats') # Prova con classe
            # Aggiungi qui altre logiche di fallback se necessario

        if result_stats_div:
            stats_text = result_stats_div.get_text(separator=" ", strip=True)
            raw_stats_text = stats_text
            # print(f"       [Parse Debug] Trovato testo stats: '{stats_text}'") # Debug intenso
            # Regex più robusta per numeri italiani (con o senza punti)
            match = re.search(r'Circa\s+([\d\.]+)\s+risultat', stats_text.replace('\xa0', ' '), re.IGNORECASE)
            if not match: # Prova senza "Circa"
                 match = re.search(r'([\d\.]+)\s+risultat', stats_text.replace('\xa0', ' '), re.IGNORECASE)

            if match:
                num_str = match.group(1).replace('.', '').replace(',', '') # Rimuovi punti e virgole
                if num_str.isdigit():
                    # print(f"       [Parse OK] Estratto numero: {int(num_str)}") # Debug intenso
                    return int(num_str), raw_stats_text, None # Successo
                else:
                    # print(f"       [Parse WARN] Match trovato ma non è un numero: '{match.group(1)}'") # Debug intenso
                    return None, raw_stats_text, "parse_fail"
            elif "nessun risultato" in stats_text.lower() or "nessuna pagina" in stats_text.lower():
                # print(f"       [Parse OK] Rilevato 'nessun risultato'.") # Debug intenso
                return 0, raw_stats_text, None # Successo, zero risultati
            else:
                # print(f"       [Parse WARN] Numero non estratto dal testo: '{stats_text}'") # Debug intenso
                return None, raw_stats_text, "parse_fail"
        else:
            # print(f"       [Parse WARN] Nessun div statistiche trovato.") # Debug intenso
            # Verifica se è una pagina CAPTCHA o consenso
            if "consent.google.com" in html_content or "CAPTCHA" in html_content or "before you continue" in html_content or "unusual traffic" in html_content:
                 print(f"       [Parse Info] Rilevata pagina Consenso/CAPTCHA/Blocco.")
                 return None, "Pagina Consenso/CAPTCHA/Blocco", "consent_page"
            return None, raw_stats_text, "parse_fail"

    except Exception as e:
        print(f"       [Parse ERR] Errore BeautifulSoup: {e}")
        # traceback.print_exc() # Rimuovi per meno verbosità
        return None, "Errore Parsing Eccezione", "parse_fail"

def fetch_single_saturation_count(keyword, profile, proxy_str, impersonate_browser=SATURATION_IMPERSONATE_BROWSER):
    """
    Esegue UNA richiesta SERP 'intitle:' usando curl_cffi, proxy e headers specifici.
    Adattato da V5 per integrazione. Ritorna il conteggio o None in caso di errore.
    """
    search_term = f'intitle:"{keyword}"' # Usa virgolette per frase esatta
    encoded_query = quote_plus(search_term)
    # URL per ricerca italiana, ultime 24 ore
    target_url = f"https://www.google.it/search?q={encoded_query}&hl=it&gl=it&tbs=qdr:d&num=10" # num=10 per pagina più leggera

    headers = profile.get_saturation_headers() # Usa headers specifici per saturazione
    proxy_url = get_proxy_url(proxy_str)
    proxies = {'http': proxy_url, 'https': proxy_url} if proxy_url else None

    # print(f"    [SAT] Req KW: '{keyword}' | Proxy: {proxy_str[-10:]} | URL: {target_url[:80]}...") # Debug
    html_content = None
    status_code = None
    error_type_str = None
    response = None

    try:
        response = impersonate_get(
            target_url,
            headers=headers,
            proxies=proxies,
            impersonate=impersonate_browser,
            timeout=SATURATION_REQUEST_TIMEOUT,
            allow_redirects=True,
            verify=False # Spesso utile con proxy/impersonation
        )
        status_code = response.status_code
        # print(f"    [SAT] Status: {status_code} | URL Finale: {response.url[:80]}...") # Debug

        try:
            # Tentativo di decodifica robusto
            html_content = response.content.decode('utf-8', errors='replace')
        except Exception as e_enc:
            print(f"    [SAT WARN] Encoding non riuscito per KW '{keyword}'. Errore: {e_enc}")
            return None, status_code, "encoding_error"

        if status_code == 200:
             # Verifica reindirizzamenti indesiderati anche con status 200
            if "consent.google.com" in response.url or "/sorry/" in response.url or "ipv4.google.com/sorry" in response.url:
                print(f"    [SAT WARN] Proxy {proxy_str[-10:]} -> Pagina Consenso/Blocco per '{keyword}'")
                error_type_str = 'consent_page'
                return None, status_code, error_type_str

            # Controlla se l'HTML sembra valido prima di parsare
            if not html_content or "<html" not in html_content.lower():
                 print(f"    [SAT WARN] Contenuto HTML non valido/vuoto per '{keyword}' (Proxy: {proxy_str[-10:]})")
                 error_type_str = 'empty_data'
                 return None, status_code, error_type_str

            count, raw_text, parse_error = parse_google_result_stats(html_content)

            if count is not None:
                # print(f"    [SAT OK] Conteggio per '{keyword}': {count} (Proxy: {proxy_str[-10:]})") # Debug
                return count, status_code, None # Successo
            else:
                # Se il parse fallisce, controlla se era a causa di una pagina di blocco/consenso
                if parse_error == "consent_page":
                     print(f"    [SAT WARN] Parse fallito (consent/captcha) per '{keyword}' (Proxy: {proxy_str[-10:]}).")
                     return None, status_code, parse_error # Errore specifico
                else:
                     print(f"    [SAT WARN] Parse fallito per '{keyword}' (Proxy: {proxy_str[-10:]}). Raw: '{raw_text[:100]}...'")
                     # Salva HTML per debug solo se necessario
                     # try:
                     #     filename = f"serp_SAT_FAIL_parse_{keyword.replace(' ', '_')[:20]}.html"
                     #     with open(os.path.join(CHECKPOINT_DIR, filename), 'w', encoding='utf-8', errors='replace') as f: f.write(html_content)
                     #     print(f"          [Debug SAT FALLIMENTO PARSE] HTML salvato in {filename}")
                     # except Exception as e_save: print(f"          [Debug SAT FALLIMENTO PARSE] Errore salvataggio HTML: {e_save}")
                     return None, status_code, parse_error # Errore parsing generico
        else:
            # print(f"    [SAT ERR] Status {status_code} per '{keyword}' (Proxy: {proxy_str[-10:]})") # Debug
            if status_code == 429: error_type_str = '429_related'
            elif status_code in [403, 407]: error_type_str = 'ProxyError' # 403/407 spesso legati ai proxy
            elif status_code >= 500: error_type_str = 'ProxyError' # Tratta 5xx come errori proxy/server
            else: error_type_str = f'HTTP_{status_code}'
            # Salva HTML anche per errori HTTP per debug
            # try:
            #     filename = f"serp_SAT_FAIL_http{status_code}_{keyword.replace(' ', '_')[:20]}.html"
            #     if html_content:
            #         with open(os.path.join(CHECKPOINT_DIR, filename), 'w', encoding='utf-8', errors='replace') as f: f.write(html_content)
            #         print(f"          [Debug SAT FALLIMENTO HTTP] HTML salvato in {filename}")
            # except Exception as e_save: print(f"          [Debug SAT FALLIMENTO HTTP] Errore salvataggio HTML: {e_save}")
            return None, status_code, error_type_str

    except (requests.exceptions.Timeout, socket.timeout, TimeoutError) as e_timeout: # Aggiunto TimeoutError base
        # print(f"    [SAT ERR] Timeout per '{keyword}' (Proxy: {proxy_str[-10:]}): {type(e_timeout).__name__}") # Debug
        error_type_str = 'Timeout'
        return None, None, error_type_str
    except requests.exceptions.ProxyError as e_proxy:
        # print(f"    [SAT ERR] Proxy Error per '{keyword}' (Proxy: {proxy_str[-10:]}): {e_proxy}") # Debug
        error_type_str = 'ProxyError'
        return None, None, error_type_str
    except requests.exceptions.ConnectionError as e_conn:
        # print(f"    [SAT ERR] Connection Error per '{keyword}' (Proxy: {proxy_str[-10:]}): {e_conn}") # Debug
        error_type_str = 'ProxyError' # Tratta come errore proxy
        return None, None, error_type_str
    except ImportError as e_imp: # Gestisce il caso in cui curl_cffi non sia installato
         print(f"!!! [SAT ERR] Errore Import curl_cffi: {e_imp}. Impossibile eseguire scraping.")
         error_type_str = 'ImportError'
         # Non possiamo fare nulla qui, la funzione get_saturation_scores dovrebbe già aver gestito questo
         raise e_imp # Rilancia per bloccare se necessario
    except Exception as e_curl: # Cattura eccezioni specifiche di curl_cffi o generiche
        print(f"    [SAT ERR] Errore cURL/Impersonate/Altro per '{keyword}' (Proxy: {proxy_str[-10:]}): {type(e_curl).__name__} - {str(e_curl)[:150]}")
        error_type_str = 'curl_cffi_err' # Tipo errore specifico
        # Status code potrebbe essere None se l'errore avviene prima della risposta
        current_status_code = response.status_code if response else None
        return None, current_status_code, error_type_str

def get_saturation_scores(keywords_list, proxy_manager_instance, max_threads=MAX_SATURATION_THREADS):
    """
    Ottiene i conteggi di saturazione 'intitle:' per la lista di keyword in parallelo.
    Ritorna un dizionario {keyword: conteggio}. Conteggio è None se fallito.
    """
    if not impersonate_get:
        print("!!! get_saturation_scores: curl_cffi non disponibile. Salto scraping.")
        return {kw: None for kw in keywords_list}

    print(f"\n--- Raccolta Conteggi Saturazione ({len(keywords_list)} keywords / {max_threads} threads) ---")
    all_counts = {}
    kw_list_unique = list(set(keywords_list)) # Assicura unicità
    random.shuffle(kw_list_unique) # Randomizza ordine

    sem = threading.Semaphore(max_threads)

    def get_single_count_safe(keyword):
        with sem:
            attempts = 0
            current_backoff = 2.0
            proxy_info = None
            last_error = "Max retries reached"
            last_status = None

            while attempts < SATURATION_MAX_RETRIES:
                attempts += 1
                proxy_info, status_code, error_type_str, release_success = None, None, None, False
                proxy_str, geo_code, session_data, profile = None, None, None, None

                try:
                    # Ottieni proxy DENTRO il loop dei tentativi
                    get_proxy_attempts = 0
                    while proxy_info is None and get_proxy_attempts < 3:
                        get_proxy_attempts += 1
                        proxy_info = proxy_manager_instance.get_proxy()
                        if proxy_info is None: time.sleep(random.uniform(3, 6)) # Attesa se non ci sono proxy

                    if proxy_info is None:
                        print(f"    [SAT Retry {attempts}/{SATURATION_MAX_RETRIES}] No proxy available for '{keyword}'. Waiting...")
                        time.sleep(min(current_backoff * 1.5, MAX_WAIT_SECONDS / 2))
                        current_backoff *= 1.2
                        continue # Prova il prossimo tentativo

                    proxy_str, geo_code, session_data = proxy_info
                    profile = session_data['profile'] # Usa il profilo associato al proxy

                    # Esegui la richiesta di scraping
                    time.sleep(random.uniform(SATURATION_MIN_DELAY, SATURATION_MAX_DELAY)) # Pausa prima della richiesta
                    count, status_code, error_type_str = fetch_single_saturation_count(keyword, profile, proxy_str)

                    if count is not None: # Successo!
                        release_success = True
                        # Rilascia il proxy PRIMA di ritornare il successo
                        proxy_manager_instance.release_proxy(proxy_str, success=release_success, status_code=status_code, error_type=error_type_str)
                        proxy_info = None # Segna come rilasciato
                        return count # Ritorna il conteggio

                    # --- Gestione errori per retry ---
                    last_status = status_code
                    last_error = error_type_str or f"Unknown error (Status: {status_code})"
                    wait_time = 0

                    if error_type_str == '429_related':
                         wait_time = min(current_backoff * 1.5, MAX_WAIT_SECONDS)
                         print(f"    [SAT Retry {attempts}/{SATURATION_MAX_RETRIES}] 429 for '{keyword}' (Proxy: {geo_code}). Wait {wait_time:.1f}s...")
                         current_backoff = min(current_backoff * 1.5, MAX_WAIT_SECONDS * 1.5)
                    elif error_type_str in ['Timeout', 'ProxyError', 'curl_cffi_err', 'consent_page']:
                         wait_time = min(current_backoff, MAX_WAIT_SECONDS / 1.5) # Attesa un po' più lunga per errori gravi
                         print(f"    [SAT Retry {attempts}/{SATURATION_MAX_RETRIES}] Error '{error_type_str}' for '{keyword}' (Proxy: {geo_code}). Wait {wait_time:.1f}s...")
                         current_backoff = min(current_backoff * 1.4, MAX_WAIT_SECONDS * 1.2)
                    else: # Altri errori (parsing, HTTP non 429/5xx, encoding)
                         wait_time = min(current_backoff * 1.1, MAX_WAIT_SECONDS / 2)
                         print(f"    [SAT Retry {attempts}/{SATURATION_MAX_RETRIES}] Error '{error_type_str}' for '{keyword}' (Proxy: {geo_code}). Wait {wait_time:.1f}s...")
                         current_backoff = min(current_backoff * 1.2, MAX_WAIT_SECONDS)

                    # Rilascia il proxy *dopo* aver gestito l'errore e prima dell'attesa
                    proxy_manager_instance.release_proxy(proxy_str, success=False, status_code=status_code, error_type=error_type_str)
                    proxy_info = None # Segna come rilasciato

                    time.sleep(wait_time) # Attendi prima del prossimo tentativo

                except Exception as e_outer: # Errore nel loop esterno (es. proxy manager non disponibile?)
                    print(f"!!! [SAT Outer ERR] Keyword '{keyword}', Attempt {attempts}: {type(e_outer).__name__} - {e_outer} !!!")
                    error_type_str = "OuterLoopError"
                    last_error = str(e_outer)
                    # Se abbiamo un proxy, rilasciamolo come fallito
                    if proxy_info:
                         proxy_manager_instance.release_proxy(proxy_str, success=False, status_code=None, error_type=error_type_str)
                         proxy_info = None
                    time.sleep(current_backoff) # Attesa generica
                    current_backoff *= 1.2

                # Assicurati che il proxy sia rilasciato anche se il loop viene interrotto
                finally:
                    if proxy_info: # Se per qualche motivo non è stato rilasciato nel try/except
                        print(f"    [SAT WARN] Proxy {proxy_str[-10:]} rilasciato nel finally per '{keyword}'.")
                        proxy_manager_instance.release_proxy(proxy_str, success=release_success, status_code=status_code, error_type=error_type_str)
                        proxy_info = None

            # Se tutti i tentativi falliscono
            print(f"!!! [SAT FAIL] Failed for '{keyword}' after {SATURATION_MAX_RETRIES} attempts. Last error: {last_error} (Status: {last_status})")
            return None # Ritorna None se fallisce

    with concurrent.futures.ThreadPoolExecutor(max_workers=max_threads) as executor:
        future_to_kw = {executor.submit(get_single_count_safe, kw): kw for kw in kw_list_unique}
        print(f"    Sottomissione {len(kw_list_unique)} task Saturazione...")

        successful_count = 0
        failed_count = 0
        total_tasks = len(future_to_kw)

        for future in tqdm(concurrent.futures.as_completed(future_to_kw), total=total_tasks, desc="Scraping Saturazione", unit="kw"):
            kw = future_to_kw[future]
            try:
                # Timeout leggermente più lungo per tener conto di tutti i retry interni
                result = future.result(timeout=SATURATION_REQUEST_TIMEOUT * SATURATION_MAX_RETRIES + MAX_WAIT_SECONDS)
                all_counts[kw] = result # Salva risultato (può essere None)
                if result is not None:
                    successful_count += 1
                else:
                    failed_count += 1
            except concurrent.futures.TimeoutError:
                print(f"\n!!! Timeout globale Saturazione per '{kw}' (possibile deadlock o retry infinito?) !!!")
                all_counts[kw] = None
                failed_count += 1
            except Exception as exc:
                print(f"\n!!! Errore recupero risultato Saturazione per '{kw}': {exc} !!!")
                all_counts[kw] = None
                failed_count += 1

    print(f"--- Raccolta Saturazione completata ({successful_count} successi, {failed_count} fallimenti / {total_tasks} totali) ---")
    # Assicura che tutte le keyword originali abbiano una voce (anche se None)
    final_results = {kw: all_counts.get(kw) for kw in keywords_list}
    return final_results

def normalize_saturation_scores(counts_dict):
    """Normalizza i conteggi su una scala da 1 a 100."""
    scores = {}
    # Filtra solo i conteggi validi (numeri >= 0)
    valid_counts = {k: v for k, v in counts_dict.items() if v is not None and isinstance(v, (int, float)) and v >= 0}

    if not valid_counts:
        print("    [NormSAT] Nessun conteggio valido trovato per la normalizzazione.")
        # Ritorna 1 per tutte le keyword originali se non ci sono dati validi
        return {k: 1 for k in counts_dict.keys()}

    counts_values = list(valid_counts.values())
    min_count = min(counts_values)
    max_count = max(counts_values)

    print(f"    [NormSAT] Conteggi validi: {len(valid_counts)}. Min: {min_count}, Max: {max_count}")

    # Normalizzazione
    for keyword, count in counts_dict.items():
        if count is None or not isinstance(count, (int, float)) or count < 0:
            scores[keyword] = 1 # Assegna 1 (minimo) ai falliti/invalidi
        elif max_count == min_count:
            # Se min e max sono uguali (e > 0), assegna 100. Se sono 0, assegna 1.
            scores[keyword] = 100 if max_count > 0 else 1
        else:
            # Formula di normalizzazione (scala 1-100)
            # Assicura che count sia float per la divisione
            normalized = 1 + 99 * (float(count) - min_count) / (max_count - min_count)
            # Arrotonda e limita tra 1 e 100
            scores[keyword] = max(1, min(100, int(round(normalized))))

    return scores

# ==============================================================================

# --- FUNZIONE: Generazione output HTML (aggiornata per logica "Docs Only" e Saturazione) ---
def generate_html_output(df_final, runtime_info=None):
    """Genera solo il file data.js nella directory di output."""
    try:
        os.makedirs(OUTPUT_DIR, exist_ok=True)
        # Verifica file base
        base_files_ok = True
        for file_name in [OUTPUT_FILENAME, "style.css", "script.js"]:
            if not os.path.exists(os.path.join(OUTPUT_DIR, file_name)):
                warnings.warn(f"File base '{file_name}' non trovato in '{OUTPUT_DIR}'. L'output potrebbe non funzionare correttamente.", UserWarning)
                base_files_ok = False
        # if not base_files_ok: return False # Decidi se bloccare qui

        trend_list = []
        # Aggiungi 'Saturation_Score' alle colonne richieste/opzionali
        required_cols = ['Rank', 'Entita', 'Discover_Score', 'Score_Avg_now 1-H', 'Score_Avg_now 4-H', 'Score_Avg_now 7-d', 'Extracted_Entities', 'Saturation_Score']
        available_cols = df_final.columns
        missing_warned = False
        for col in required_cols:
            if col not in available_cols and not missing_warned:
                # Non considerare 'Rank' come errore critico se manca (potrebbe essere aggiunto dopo)
                if col != 'Rank':
                     warnings.warn(f"Colonne mancanti nel DF finale per data.js: {', '.join([c for c in required_cols if c not in available_cols and c != 'Rank'])}. Default usati.", UserWarning)
                     missing_warned = True

        # Assicurati che 'Rank' sia presente prima di usarlo nel loop
        # Se manca, aggiungilo basato sull'indice dopo l'ordinamento finale
        if 'Rank' not in df_final.columns:
             df_final['Rank'] = range(1, len(df_final) + 1)
             print("    [WARN] Colonna 'Rank' mancante, aggiunta basandosi sull'ordine finale.")


        for index, row in df_final.iterrows():
            trend_data = {
                # Usa l'indice + 1 se 'Rank' originale manca ancora, altrimenti usa la colonna 'Rank'
                'rank': int(row.get('Rank', index + 1)),
                'entity': row.get('Entita', 'N/A'),
                'discover_score': float(row.get('Discover_Score', 0)),
                'score_1h': float(row.get('Score_Avg_now 1-H', 0)),
                'score_4h': float(row.get('Score_Avg_now 4-H', 0)),
                'score_7d': float(row.get('Score_Avg_now 7-d', 0)),
                'extracted_entities': row.get('Extracted_Entities', ''),
                'saturation_score': int(row.get('Saturation_Score', 1)) # AGGIUNTO: Default a 1
            }
            trend_list.append(trend_data)

        run_metadata = {
            'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            'trends_count': len(trend_list),
            'top_score': max((t['discover_score'] for t in trend_list), default=0),
            'runtime_minutes': (runtime_info['end_time'] - runtime_info['start_time']) / 60 if runtime_info and 'start_time' in runtime_info and 'end_time' in runtime_info else 0,
            'proxies_used': len(proxy_manager.all_proxies) if proxy_manager else 0,
            'openai_enabled': FETCH_OPENAI_ENTITIES,
            'openai_model': OPENAI_MODEL if FETCH_OPENAI_ENTITIES else 'N/A',
            'saturation_enabled': FETCH_SATURATION_SCORE, # AGGIUNTO
            'saturation_keywords_processed': N_PROCESS_FOR_SATURATION if FETCH_SATURATION_SCORE else 0 # AGGIUNTO
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
# ==================== SCRIPT PRINCIPALE (V7.8 - Con Saturazione) ==============
# ==============================================================================
if __name__ == "__main__":
    main_start_time = time.time()
    runtime_info = {'start_time': main_start_time}

    # Validazioni iniziali parametri (inclusa saturazione)
    if FETCH_VOLUME_CONTEXT:
        if not CONTEXT_TIMEFRAMES: warnings.warn("CONTEXT_TIMEFRAMES vuoto. Contesto disattivato.", UserWarning); FETCH_VOLUME_CONTEXT = False
        if CONTEXT_N_RUNS <= 0: raise ValueError("CONTEXT_N_RUNS deve essere >= 1")
    if FETCH_OPENAI_ENTITIES:
        if N_PROCESS_FOR_OPENAI <= 0: warnings.warn("N_PROCESS_FOR_OPENAI <= 0. OpenAI disattivato.", UserWarning); FETCH_OPENAI_ENTITIES = False
        if not client: warnings.warn("Client OpenAI non inizializzato (chiave API mancante o errata?). OpenAI disattivato.", UserWarning); FETCH_OPENAI_ENTITIES = False
    if FETCH_SATURATION_SCORE:
         if impersonate_get is None: warnings.warn("curl_cffi non importato. Saturazione DISATTIVATA.", UserWarning); FETCH_SATURATION_SCORE = False
         if N_PROCESS_FOR_SATURATION <= 0: warnings.warn("N_PROCESS_FOR_SATURATION <= 0. Saturazione disattivata.", UserWarning); FETCH_SATURATION_SCORE = False
         if N_PROCESS_FOR_SATURATION > 50:
             warnings.warn(f"N_PROCESS_FOR_SATURATION ({N_PROCESS_FOR_SATURATION}) > 50. Verranno processate solo le prime 50 keyword.", UserWarning)
             N_PROCESS_FOR_SATURATION = 50

    print(f"--- Avvio script Discover Prophet V7.8 (Docs Only, OpenAI & Saturation) ---")
    print(f"Formula Discover Score: V7.9 (Numeratore Pesato: V4h={WEIGHT_V4H_NUMERATOR}, V7d={WEIGHT_V7D_NUMERATOR}; Denominatore K={V7D_PENALTY_K}, epsilon={V7D_PENALTY_EPSILON})")
    print(f"Modalità: Lavora direttamente su '{OUTPUT_DIR}', genera solo 'data.js'.")
    print(f"Estrazione Contesto Volume: {'ATTIVA' if FETCH_VOLUME_CONTEXT else 'DISATTIVATA'} (Top {N_PROCESS_FOR_CONTEXT}, Runs: {CONTEXT_N_RUNS})")
    print(f"Estrazione Entità OpenAI: {'ATTIVA' if FETCH_OPENAI_ENTITIES else 'DISATTIVATA'} (Top {N_PROCESS_FOR_OPENAI}, Modello: {OPENAI_MODEL if FETCH_OPENAI_ENTITIES else 'N/A'})")
    print(f"Calcolo Saturazione: {'ATTIVA' if FETCH_SATURATION_SCORE else 'DISATTIVATA'} (Top {N_PROCESS_FOR_SATURATION}, Browser: {SATURATION_IMPERSONATE_BROWSER})")
    print(f"Config Proxy: MaxConc={MAX_CONCURRENT_PROXIES}, CD={PROXY_USE_COOLDOWN}s, GEOs={len(proxies_list_with_geo)}")
    print(f"Config Threads: Pytrends={MAX_THREADS_PYTRENDS}, OpenAI={MAX_OPENAI_THREADS}, Saturazione={MAX_SATURATION_THREADS}")
    print(f"Output: '{OUTPUT_DIR}', Checkpoints: '{CHECKPOINT_DIR}'")

    ordered_entities = None
    df_final = pd.DataFrame()

    try:
        # Crea directory necessarie
        os.makedirs(CHECKPOINT_DIR, exist_ok=True); print(f"Directory checkpoint: '{CHECKPOINT_DIR}'")
        os.makedirs(OUTPUT_DIR, exist_ok=True); print(f"Directory output: '{OUTPUT_DIR}'")

        # --- 1. Estrazione Lista Ordinata ---
        ordered_entities = extract_ordered_entities()
        if not ordered_entities: raise Exception("Estrazione iniziale delle entità ordinate fallita. Impossibile continuare.")
        print(f"\nLista Ordinata Iniziale Estratta ({len(ordered_entities)} entità).")
        try:
            # Crea DataFrame iniziale con Rank corretto
            df_initial = pd.DataFrame({'Rank': range(1, len(ordered_entities) + 1), 'Entita': ordered_entities})
            df_initial.to_csv(os.path.join(CHECKPOINT_DIR, "01_entities_ordered_extracted.csv"), index=False, encoding='utf-8-sig')
            print(f"  Checkpoint lista ordinata iniziale salvato.")
        except Exception as e: print(f"  Errore salvataggio checkpoint lista ordinata: {e}")

        # Prepara DataFrame finale e inizializza colonne
        df_final = df_initial.copy()
        for tf in CONTEXT_TIMEFRAMES: df_final[f'Score_Avg_{tf}'] = 0.0
        df_final['Extracted_Entities'] = ''
        df_final['Saturation_Score'] = 1 # Inizializza a 1 (minimo)
        df_final['Discover_Score'] = 0.0

        # --- 2. Raccolta Score di Contesto (se attivo) ---
        if FETCH_VOLUME_CONTEXT and N_PROCESS_FOR_CONTEXT > 0 and CONTEXT_TIMEFRAMES:
            print(f"\n--- Avvio Raccolta Score Contesto per Top {N_PROCESS_FOR_CONTEXT} Entità ---")
            # Assicurati di processare al massimo le entità disponibili
            num_entities_context = min(N_PROCESS_FOR_CONTEXT, len(ordered_entities))
            entities_for_context = ordered_entities[:num_entities_context]
            if not entities_for_context:
                 print("   Nessuna entità disponibile per il contesto.")
            else:
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
                    # Calcola la media solo per le entità processate
                    avg_scores_map = {entity: np.mean(scores) if scores else 0 for entity, scores in timeframe_context_results[tf_agg].items() if entity in entities_for_context}
                    df_final[sc_avg_col] = df_final['Entita'].map(avg_scores_map).fillna(0)
                    print(f"    Media contesto per {tf_agg} calcolata.")
                print("--- Fine Raccolta Score Contesto ---")
                try:
                    cols_to_save = ['Rank', 'Entita'] + [f'Score_Avg_{tf}' for tf in CONTEXT_TIMEFRAMES]
                    # Salva solo le righe effettivamente processate
                    df_final.loc[df_final['Entita'].isin(entities_for_context), cols_to_save].to_csv(os.path.join(CHECKPOINT_DIR, "03_context_averages.csv"), index=False, encoding='utf-8-sig'); print(f"  Checkpoint medie contesto salvato.")
                except Exception as e: print(f"  Errore salvataggio checkpoint medie contesto: {e}")
        else:
            print("\n--- Raccolta Score Contesto Saltata ---")
            for tf in CONTEXT_TIMEFRAMES:
                if f'Score_Avg_{tf}' not in df_final.columns: df_final[f'Score_Avg_{tf}'] = 0.0

        # --- 3. Estrazione Entità con OpenAI (se attiva) ---
        if FETCH_OPENAI_ENTITIES:
            num_entities_openai = min(N_PROCESS_FOR_OPENAI, len(ordered_entities))
            entities_to_process_openai = ordered_entities[:num_entities_openai]
            if not entities_to_process_openai:
                 print("   Nessuna entità disponibile per OpenAI.")
            else:
                 extracted_entities_map = get_entities_with_openai(entities_to_process_openai)
                 df_final['Extracted_Entities'] = df_final['Entita'].map(extracted_entities_map).fillna('')
                 print("  Entità OpenAI mappate nel DataFrame.")
                 try:
                     df_openai_chk = df_final.loc[df_final['Entita'].isin(entities_to_process_openai), ['Rank','Entita', 'Extracted_Entities']]
                     chk_filename = "04_openai_extracted_entities.csv"
                     df_openai_chk.to_csv(os.path.join(CHECKPOINT_DIR, chk_filename), index=False, encoding='utf-8-sig'); print(f"  Checkpoint entità OpenAI salvato.")
                 except Exception as e: print(f"  Errore salvataggio checkpoint entità OpenAI: {e}")
        else:
             print("\n--- Estrazione Entità OpenAI Saltata ---")

        # --- 4. Calcolo Saturazione (NUOVO) ---
        if FETCH_SATURATION_SCORE:
             num_entities_saturation = min(N_PROCESS_FOR_SATURATION, len(ordered_entities))
             keywords_for_saturation = ordered_entities[:num_entities_saturation]
             if not keywords_for_saturation:
                 print("   Nessuna keyword da processare per la saturazione.")
             else:
                 print(f"\n--- Avvio Calcolo Saturazione per Top {num_entities_saturation} Entità ---")
                 saturation_counts_raw = get_saturation_scores(keywords_for_saturation, proxy_manager)
                 normalized_saturation = normalize_saturation_scores(saturation_counts_raw)

                 # Salva checkpoint conteggi grezzi e normalizzati
                 try:
                    # Crea DF usando le keyword originali come riferimento
                    df_sat_chk = pd.DataFrame(keywords_for_saturation, columns=['Entita'])
                    df_sat_chk['Raw_Count'] = df_sat_chk['Entita'].map(saturation_counts_raw) # Mappa i conteggi grezzi
                    df_sat_chk['Saturation_Score'] = df_sat_chk['Entita'].map(normalized_saturation) # Mappa i punteggi normalizzati
                    # Aggiungi Rank per riferimento
                    rank_map = df_final.set_index('Entita')['Rank'].to_dict()
                    df_sat_chk['Rank'] = df_sat_chk['Entita'].map(rank_map)
                    df_sat_chk = df_sat_chk[['Rank', 'Entita', 'Raw_Count', 'Saturation_Score']] # Riordina
                    chk_filename = "05_saturation_scores.csv"
                    df_sat_chk.to_csv(os.path.join(CHECKPOINT_DIR, chk_filename), index=False, encoding='utf-8-sig'); print(f"  Checkpoint punteggi saturazione salvato.")
                 except Exception as e: print(f"  Errore salvataggio checkpoint saturazione: {e}")

                 # Aggiorna il DataFrame finale
                 df_final['Saturation_Score'] = df_final['Entita'].map(normalized_saturation).fillna(1) # Usa 1 come default se manca
                 print("  Punteggi di Saturazione (1-100) mappati nel DataFrame.")
        else:
            print("\n--- Calcolo Saturazione Saltato ---")
            # La colonna 'Saturation_Score' rimane inizializzata a 1

        # --- 5. Calcolo Heuristic Discover Score ---
        print("\n  Calcolo Heuristic Discover Score V7.9 (Numeratore Pesato)...")
        discover_score_col = 'Discover_Score'; score_4h_col = 'Score_Avg_now 4-H'; score_7d_col = 'Score_Avg_now 7-d'
        # Assicurati che le colonne necessarie esistano prima di procedere
        if score_4h_col in df_final.columns and score_7d_col in df_final.columns and 'Rank' in df_final.columns:
            score_4h = pd.to_numeric(df_final[score_4h_col], errors='coerce').fillna(0).clip(lower=0)
            score_7d = pd.to_numeric(df_final[score_7d_col], errors='coerce').fillna(0).clip(lower=0)
            rank_series = pd.to_numeric(df_final['Rank'], errors='coerce').fillna(1).clip(lower=1) # Usa il Rank già presente
            df_final[discover_score_col] = calculate_discover_score(
                rank_series, score_4h, score_7d,
                k_penalty=V7D_PENALTY_K, epsilon=V7D_PENALTY_EPSILON,
                weight_v4h=WEIGHT_V4H_NUMERATOR, weight_v7d=WEIGHT_V7D_NUMERATOR
            )
            print(f"    Colonna '{discover_score_col}' calcolata con formula V7.9.")
        else:
            missing_cols = [col for col in [score_4h_col, score_7d_col, 'Rank'] if col not in df_final.columns]
            warnings.warn(f"Colonne necessarie ({', '.join(missing_cols)}) per Discover Score mancanti nel DF. Score impostato a 0.", UserWarning)
            df_final[discover_score_col] = 0.0

        # --- 6. Ordinamento Finale per Discover Score ---
        if discover_score_col in df_final.columns:
            df_final = df_final.sort_values(by=discover_score_col, ascending=False).reset_index(drop=True)
             # Riassegna il Rank DOPO l'ordinamento finale per Discover Score
            df_final['Rank'] = range(1, len(df_final) + 1)
            print(f"\n  DataFrame finale ordinato per '{discover_score_col}' e Rank riassegnato.")
        else: print(f"\n  ATTENZIONE: Colonna '{discover_score_col}' non trovata per l'ordinamento.")

        # --- 7. Salva il DataFrame finale completo come CSV ---
        try:
            # Aggiorna nome file per riflettere V7.8 (con Saturation)
            backup_filename = "06_final_sorted_data_v7.9_score_with_saturation.csv"
            # Seleziona e ordina le colonne per il CSV finale
            cols_final_csv = [
                'Rank', 'Entita', 'Discover_Score', 'Saturation_Score',
                'Extracted_Entities', 'Score_Avg_now 1-H', 'Score_Avg_now 4-H',
                'Score_Avg_now 7-d'
            ]
            # Includi solo colonne che esistono effettivamente nel DataFrame
            cols_to_save_final = [c for c in cols_final_csv if c in df_final.columns]
            df_final[cols_to_save_final].to_csv(os.path.join(CHECKPOINT_DIR, backup_filename), index=False, encoding='utf-8-sig')
            print(f"\nDataFrame finale completo salvato: {os.path.join(CHECKPOINT_DIR, backup_filename)}")
        except Exception as e: print(f"\n!!! Errore salvataggio CSV finale completo: {e} !!!")

        # --- 8. Genera l'output data.js ---
        runtime_info['end_time'] = time.time()
        html_result = generate_html_output(df_final, runtime_info)
        if not html_result:
             print("!!! Generazione di data.js fallita. Controllare errori precedenti.")

        # --- 9. Stampa Top N Finale ---
        print(f"\n--- Top {TOP_N_FINAL_DISPLAY} Entità (Ordinate per Discover Score V7.9) ---")
        # Aggiungi Saturation_Score alla visualizzazione
        cols_to_show = [c for c in ['Rank', 'Discover_Score', 'Saturation_Score', 'Entita', 'Extracted_Entities', 'Score_Avg_now 1-H', 'Score_Avg_now 4-H', 'Score_Avg_now 7-d'] if c in df_final.columns]
        try:
            pd.set_option('display.max_rows', TOP_N_FINAL_DISPLAY + 5); pd.set_option('display.width', 240); pd.set_option('display.max_colwidth', 45); pd.set_option('display.float_format', '{:.2f}'.format) # Aggiustato width e colwidth
            # Formattazione specifica
            formatters = {
                'Discover_Score': '{:.2f}'.format,
                'Saturation_Score': '{:.0f}'.format, # Mostra come intero
                'Rank': '{:.0f}'.format,
                'Score_Avg_now 1-H': '{:.1f}'.format,
                'Score_Avg_now 4-H': '{:.1f}'.format,
                'Score_Avg_now 7-d': '{:.1f}'.format,
            }
            # Applica formattatori solo per colonne esistenti
            valid_formatters = {k: v for k, v in formatters.items() if k in cols_to_show}

            # Stampa usando to_string con gli indici nascosti e i formattatori
            print(df_final[cols_to_show].head(TOP_N_FINAL_DISPLAY).to_string(index=False, formatters=valid_formatters))

        except Exception as e_print: print(f"Errore stampa finale: {e_print}")
        finally: pd.reset_option('all') # Resetta tutte le opzioni di display

    except Exception as main_exc:
        print(f"\n\n!!! ERRORE CRITICO SCRIPT: {type(main_exc).__name__} - {main_exc} !!!"); traceback.print_exc()
    finally:
        print("\n--- Statistiche Proxy Rilevate (Fine Esecuzione) ---")
        try:
            if 'proxy_manager' in locals() and proxy_manager:
                ps = proxy_manager.get_proxy_stats_summary(); total_requests = ps.get('total_success', 0) + ps.get('total_fail_429', 0) + ps.get('total_fail_proxy_timeout', 0) + ps.get('total_fail_other_parse', 0); success_rate = (ps.get('total_success', 0) / total_requests * 100) if total_requests > 0 else 0
                print(f"Req Tot Proxy (Pytrends+Initial+Saturation): {total_requests}, Successi: {ps.get('total_success', 0)} ({success_rate:.1f}%)"); print(f"  Fail: 429={ps.get('total_fail_429', 0)}, Proxy/Timeout/cURL={ps.get('total_fail_proxy_timeout', 0)}, Parse/Consent/Altro={ps.get('total_fail_other_parse', 0)}")
                tfp = ps.get('top_failing_proxies', {});
                if tfp: print("Top Failing Proxies:"); [print(f"  - {pid}: Succ:{d['success']}, FailsCons:{d['consecutive_fails']} (429:{d['fail_429']}, P/T:{d['fail_proxy/timeout']}, O/P:{d['fail_other/parse']})") for pid, d in list(tfp.items())[:5]]
            else: print("Proxy Manager non disponibile per statistiche.")
        except Exception as stats_exc: print(f"Errore stampa stats proxy: {stats_exc}")
        main_end_time = time.time(); total_duration = main_end_time - main_start_time
        print(f"\n--- Script V7.8 (Score V7.9 + Saturation) completato in {total_duration:.2f} sec ({total_duration/60:.2f} min) ---")
