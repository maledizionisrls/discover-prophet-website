# -*- coding: utf-8 -*-

# 🚀 Script Ottimizzato per Google Trends TV (Hot Trends) - V8.0 (AI Entity Linking)
#    Utilizza Claude 3.5 Sonnet (via claude_integration.py) per estrarre entità principali.
#    Implementa Heuristic Discover Score V7.5 sulla base delle entità AI.
#    Formula V7.5: (1 + V4h + V7d) / log1p(Rank * max(1, K / (V7d + epsilon)))
#    Gestisce fallback per entità non identificate.
#    Output in HTML con Entità Principale e Query Originale.

# --- Import Librerie Essenziali ---
import requests
import random
import time
import json
import warnings
import os
import hashlib
import pandas as pd
import numpy as np # Necessario per log, log1p, sqrt, power etc.
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

# --- Import Modulo AI ---
try:
    import claude_integration
except ImportError:
    print("ERRORE: File 'claude_integration.py' non trovato. Assicurati che sia nella stessa directory.")
    exit() # Esce se il modulo AI non è presente

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

# --- Ignora Warning Specifici ---
warnings.filterwarnings("ignore", category=FutureWarning, module='pytrends')
warnings.filterwarnings("ignore", category=UserWarning, message='Setting null property')
warnings.filterwarnings("ignore", message="urllib3 v2 only supports OpenSSL 1.1.1+")


# ==============================================================================
# ==================== SEZIONE PARAMETRI CONFIGURABILI =========================
# ==============================================================================

# --- Parametri Principali ---
TOP_N_FINAL_DISPLAY = 50
OUTPUT_FILENAME = "index.html"
OUTPUT_DIR = "docs"
CHECKPOINT_DIR = "checkpoint_data"
TEMPLATE_DIR = "templates"

# --- Parametri Contesto di Volume ---
FETCH_VOLUME_CONTEXT = True
N_PROCESS_FOR_CONTEXT = 50 # Numero di ENTITÀ UNICHE VALIDE (post AI) per cui cercare contesto
CONTEXT_TIMEFRAMES = ['now 1-H', 'now 4-H', 'now 7-d']
CONTEXT_N_RUNS = 2

# --- Parametri Formula Discover Score V7.5 ---
V7D_PENALTY_K = 5.0
V7D_PENALTY_EPSILON = 0.1

# --- Parametri Gestione Proxy e Concorrenza ---
MAX_CONCURRENT_PROXIES = 210
PROXY_USE_COOLDOWN = 7
MAX_THREADS = 80

# --- Parametri Ritardi e Pause ---
MIN_DELAY_BETWEEN_REQUESTS = 0
MAX_DELAY_BETWEEN_REQUESTS = 2.0
ENTITY_EXTRACTION_INITIAL_WAIT = 5

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
# ==================== FUNZIONE CALCOLO DISCOVER SCORE (V7.5) ==================
# ==============================================================================
# La logica è qui per chiarezza, ma potresti anche importarla se preferisci

def calculate_discover_score(rank_series, score_4h, score_7d, k_penalty=V7D_PENALTY_K, epsilon=V7D_PENALTY_EPSILON):
    """
    Calcola l'Heuristic Discover Score V7.5.
    Formula: (1 + V4h + V7d) / log1p(Rank * max(1, K / (V7d + epsilon)))
    """
    formula_str = f"(1 + V4h + V7d) / log1p(Rank * max(1, {k_penalty:.1f} / (V7d + {epsilon:.1f})))"
    # Non stampiamo qui per evitare output ripetuto durante l'apply
    # print(f"        Applicando Formula V7.5: {formula_str}")

    # --- Calcolo Denominatore ---
    low_v7d_penalty_factor = np.maximum(1.0, k_penalty / (score_7d + epsilon))
    effective_rank = rank_series * low_v7d_penalty_factor
    denominator = np.log1p(effective_rank)
    denominator = np.maximum(denominator, 1e-9)

    # --- Calcolo Numeratore ---
    numerator = 1 + score_4h + score_7d

    # --- Calcolo Score Finale ---
    discover_score = numerator / denominator
    discover_score = discover_score.fillna(0)
    return discover_score

# ==============================================================================
# ================== FINE FUNZIONE CALCOLO DISCOVER SCORE ======================
# ==============================================================================


# --- Definizione Stringa Base Proxy e Rimozione Proxy Problematici ---
# (Codice omesso per brevità - invariato)
proxy_base_string = "v2.proxyempire.io:5000:r_46aa61f010-country-{geo}:8186bbae3e"
original_country_codes = [ # Lista completa originale
    'af', 'al', 'dz', 'as', 'ad', 'ao', 'ai', 'aq', 'ag', 'ar', 'am', 'aw', 'au', 'at', 'az', 'bs', 'bh', 'bd', 'bb', 'by', 'be', 'bz', 'bj', 'bm', 'bt', 'bo', 'ba', 'bw', 'br', 'io', 'bn', 'bg', 'bf', 'bi', 'kh', 'cm', 'ca', 'cv', 'ky', 'cf', 'td', 'cl', 'cn', 'co', 'km', 'cg', 'ck', 'cr', 'hr', 'cu', 'cy', 'cz', 'dk', 'dj', 'dm', 'do', 'ec', 'eg', 'sv', 'gq', 'er', 'ee', 'et', 'fk', 'fo', 'fj', 'fi', 'fr', 'gf', 'pf', 'ga', 'gm', 'ge', 'de', 'gh', 'gi', 'gr', 'gl', 'gd', 'gp', 'gu', 'gt', 'gg', 'gn', 'gw', 'gy', 'ht', 'va', 'hn', 'hk', 'hu', 'is', 'in', 'id', 'ir', 'iq', 'ie', 'im', 'il', 'it', 'ci', 'jm', 'jp', 'je', 'jo', 'kz', 'ke', 'ki', 'kw', 'kg', 'la', 'lv', 'lb', 'ls', 'lr', 'ly', 'li', 'lt', 'lu', 'mo', 'mk', 'mg', 'mw', 'my', 'mv', 'ml', 'mt', 'mh', 'mq', 'mr', 'mu', 'yt', 'mx', 'fm', 'md', 'mc', 'mn', 'me', 'ms', 'ma', 'mz', 'mm', 'na', 'nr', 'np', 'nl', 'nc', 'nz', 'ni', 'ne', 'ng', 'nu', 'nf', 'kp', 'gb', 'mp', 'no', 'om', 'pk', 'pw', 'ps', 'pa', 'pg', 'py', 'pe', 'ph', 'pl', 'pt', 'pr', 'qa', 're', 'ro', 'ru', 'rw', 'sh', 'kn', 'lc', 'vc', 'ws', 'sm', 'st', 'sa', 'sn', 'rs', 'sc', 'sl', 'sg', 'sk', 'si', 'sb', 'so', 'za', 'kr', 'ss', 'es', 'lk', 'sd', 'sr', 'sz', 'se', 'ch', 'sy', 'tj', 'tw', 'tz', 'th', 'cd', 'tl', 'tg', 'tk', 'to', 'tt', 'tn', 'tr', 'tm', 'tc', 'tv', 'ug', 'ua', 'ae', 'us', 'uy', 'uz', 'vu', 've', 'vn', 'vg', 'vi', 'wf', 'eh', 'ye', 'zm', 'zw'
]
proxies_to_remove_geo = { # Set GEOs da rimuovere
    'aq', 'io', 'cf', 'bi', 'td', 'km', 'fk', 'cn', 'gw', 'va', 'ki', 'nr', 'nu', 'nf', 'kp', 'pg', 'sh', 'ws', 'tl', 'tk', 'tv', 'wf', 'eh', 'dj', 'gl', 'al'
}
country_codes = [code for code in original_country_codes if code not in proxies_to_remove_geo]
print(f"Lista originale GEO: {len(original_country_codes)}. Rimossi {len(proxies_to_remove_geo)}. GEO usati: {len(country_codes)}.")

# --- Generazione Lista Proxy Effettiva ---
# (Codice omesso per brevità - invariato)
proxies_list_with_geo = []
for geo in country_codes:
    proxy_str = proxy_base_string.format(geo=geo.lower()); parts = proxy_str.split(':')
    if len(parts) == 4:
        match = re.search(r'-country-([a-z]{2})', parts[2], re.IGNORECASE)
        if match: proxies_list_with_geo.append({"proxy": proxy_str, "geo": match.group(1).upper()})
        else: warnings.warn(f"Username non riconosciuto: {proxy_str}", UserWarning)
    else: warnings.warn(f"Formato proxy non valido: {proxy_str}", UserWarning)
if not proxies_list_with_geo: raise ValueError("!!! Lista proxy VUOTA dopo filtro! !!!")
print(f"Generati {len(proxies_list_with_geo)} proxy con geo associato.")

# --- Mapping Geo -> Lingua/Timezone ---
# (Codice omesso per brevità - invariato)
COUNTRY_LOCALE_MAP = {
    'IT': {'hl': 'it-IT', 'tz': 60}, 'US': {'hl': 'en-US', 'tz': -300}, 'GB': {'hl': 'en-GB', 'tz': 0},
    'FR': {'hl': 'fr-FR', 'tz': 60}, 'DE': {'hl': 'de-DE', 'tz': 60}, 'ES': {'hl': 'es-ES', 'tz': 60},
    'JP': {'hl': 'ja-JP', 'tz': 540}, 'AU': {'hl': 'en-AU', 'tz': 600}, 'CA': {'hl': 'en-CA', 'tz': -300},
    'BR': {'hl': 'pt-BR', 'tz': -180}, 'IN': {'hl': 'en-IN', 'tz': 330}, 'MA': {'hl': 'fr-MA', 'tz': 0},
    'HN': {'hl': 'es-HN', 'tz': -360}, 'BS': {'hl': 'en-BS', 'tz': -300}, 'TO': {'hl': 'en-TO', 'tz': 780},
    'BE': {'hl': 'fr-BE', 'tz': 60}, 'OM': {'hl': 'ar-OM', 'tz': 240}, 'GM': {'hl': 'en-GM', 'tz': 0},
    'LU': {'hl': 'fr-LU', 'tz': 60}, 'BN': {'hl': 'ms-BN', 'tz': 480}, 'SZ': {'hl': 'en-SZ', 'tz': 120},
    'MN': {'hl': 'mn-MN', 'tz': 480}, 'EG': {'hl': 'ar-EG', 'tz': 120}, 'AT': {'hl': 'de-AT', 'tz': 60},
    'IE': {'hl': 'en-IE', 'tz': 0}, 'KW': {'hl': 'ar-KW', 'tz': 180}, 'MM': {'hl': 'my-MM', 'tz': 390},
    'LV': {'hl': 'lv-LV', 'tz': 120}, 'RW': {'hl': 'rw-RW', 'tz': 120}, 'KR': {'hl': 'ko-KR', 'tz': 540},
    'TJ': {'hl': 'tg-TJ', 'tz': 300}, 'MH': {'hl': 'en-MH', 'tz': 720}, 'ZA': {'hl': 'en-ZA', 'tz': 120},
    'FI': {'hl': 'fi-FI', 'tz': 120},
    'DEFAULT': {'hl': 'en-US', 'tz': 0}
}
def get_locale_for_geo(geo_code): return COUNTRY_LOCALE_MAP.get(geo_code.upper(), COUNTRY_LOCALE_MAP['DEFAULT'])

# --- Classi AdvancedProxyManager e ConsistentBrowserProfile ---
# (Codice omesso per brevità - invariato)
class AdvancedProxyManager:
    def __init__(self, proxy_geo_list, max_concurrent, cooldown_seconds): self.max_concurrent=max_concurrent; self.cooldown_seconds=cooldown_seconds; self.lock=threading.Lock(); self.all_proxies={i['proxy']: i['geo'] for i in proxy_geo_list}; self.available_proxies=deque(self.all_proxies.keys()); random.shuffle(list(self.available_proxies)); self.active_proxies={}; self.cooldown_proxies={}; self.proxy_consecutive_failures=defaultdict(int); self.proxy_stats=defaultdict(lambda: {"success":0,"fail_429":0,"fail_5xx":0,"fail_other":0,"fail_timeout":0,"fail_proxy_error":0,"fail_parse":0}); self.active_sessions={}; print(f"AdvProxyManager: {len(self.all_proxies)} proxies, MaxConc: {self.max_concurrent}, CD: {self.cooldown_seconds}s")
    def _check_cooldown(self): ct=time.time(); reactivate=[]; [reactivate.append(p) for p, et in list(self.cooldown_proxies.items()) if ct >= et]; [self.available_proxies.append(p) for p in reactivate if self.cooldown_proxies.pop(p,None)]
    def get_proxy(self):
        with self.lock:
            self._check_cooldown();
            if len(self.active_proxies)<self.max_concurrent and self.available_proxies:
                p_str=self.available_proxies.popleft(); geo=self.all_proxies[p_str]; self.active_proxies[p_str]=time.time(); p_url=get_proxy_url(p_str); # CHIAMATA CORRETTA V6.3
                try: prof=ConsistentBrowserProfile(geo)
                except Exception as e: print(f"     Profilo err {geo}: {e}. Uso def."); prof=ConsistentBrowserProfile('DEFAULT')
                scr=None;
                try: bcfg={'browser':'chrome','platform':prof.os if prof.os in ['windows','darwin','linux'] else 'windows','mobile':False,'desktop':True,'user_agent':prof.user_agent}; scr=cloudscraper.create_scraper(browser=bcfg,delay=random.uniform(0.5,1.5)); scr.headers.update(prof.get_headers());
                except Exception as e: print(f"     Scraper err {geo} ({type(e).__name__}). Uso base."); scr=requests.Session(); scr.headers.update(prof.get_headers());
                if p_url: scr.proxies={'http':p_url,'https':p_url} # Applica proxy allo scraper/sessione
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

# --- Funzione Utilità get_proxy_url ---
# (Codice omesso per brevità - invariato)
def get_proxy_url(proxy_str):
    """Converte la stringa proxy nel formato URL http://user:pass@host:port."""
    if not proxy_str: return None
    parts = proxy_str.split(':')
    if len(parts) == 4:
        host, port, user, pwd = parts
        if port.isdigit(): return f"http://{user}:{pwd}@{host}:{port}"
        else: warnings.warn(f"Porta non valida: {proxy_str}", UserWarning); return None
    else: warnings.warn(f"Formato proxy non valido (attese 4 parti): {proxy_str}", UserWarning); return None

# --- Estrazione Entità ORDINATA (Query Grezze) ---
# (Codice omesso per brevità - invariato, restituisce le query come prima)
def extract_ordered_entities(max_retries=ENTITY_EXTRACTION_MAX_RETRIES, initial_wait=ENTITY_EXTRACTION_INITIAL_WAIT):
    attempts = 0; current_wait = initial_wait; proxy_info, geo_code = None, None; print(f"Avvio estrazione lista query grezze da Trends TV (max {max_retries} tentativi)...") # Nome aggiornato
    while attempts < max_retries:
        attempts += 1; print(f"Tentativo {attempts}/{max_retries} per estrarre query...")
        proxy_info, status_code, error_type_str, release_success = None, None, None, False; scraper, session_data, geo_code = None, None, None
        try:
            get_proxy_attempts = 0
            while proxy_info is None and get_proxy_attempts < 5: get_proxy_attempts += 1; proxy_info = proxy_manager.get_proxy(); time.sleep(random.uniform(2, 5) if proxy_info is None else 0)
            if proxy_info is None: print("    Impossibile ottenere proxy. Salto."); time.sleep(min(current_wait * 1.5, MAX_WAIT_SECONDS / 2)); continue
            proxy_str, geo_code, session_data = proxy_info; scraper = session_data['scraper']; print(f"    Tentativo con proxy: {geo_code} ({proxy_str[-10:]})")
            time.sleep(random.uniform(0.5, 1.5)); target_url = "https://trends.google.com/tv/?geo=IT"; res = None; max_internal_retries = 2
            for internal_attempt in range(max_internal_retries):
                try:
                    res = scraper.get(target_url, timeout=(ENTITY_EXTRACTION_CONNECT_TIMEOUT, ENTITY_EXTRACTION_READ_TIMEOUT))
                    if res.status_code == 200: break
                    else: status_code = res.status_code; print(f"       Non-200: {status_code}, Retry {internal_attempt + 1}/{max_internal_retries}"); time.sleep(1.5 if internal_attempt < max_internal_retries - 1 else 0)
                except (requests.exceptions.Timeout, socket.timeout) as e_timeout_internal:
                    print(f"       Timeout interno req {internal_attempt + 1}/{max_internal_retries}: {type(e_timeout_internal).__name__}"); res = None; status_code = None
                    if internal_attempt < max_internal_retries - 1: time.sleep(2)
                    else: print(f"       Falliti tutti retry interni (Timeout)."); raise e_timeout_internal
                except Exception as e_int:
                    print(f"       Errore interno req {internal_attempt + 1}/{max_internal_retries}: {type(e_int).__name__} - {str(e_int)[:100]}"); res = None; status_code = None
                    if internal_attempt < max_internal_retries - 1: time.sleep(2)
                    else: print(f"       Falliti tutti retry interni (Exception)."); raise e_int
            if res is None or res.status_code != 200: status_code = res.status_code if res else None; raise Exception(f"Req fallita dopo retry interni. Status: {status_code}")
            status_code = res.status_code; soup = BeautifulSoup(res.text, 'html.parser'); scripts = soup.find_all('script'); found_data = False; ordered_queries_found = [] # Nome variabile cambiato
            for script in scripts:
                if script.string and 'AF_initDataCallback' in script.string and 'key: \'ds:0\'' in script.string:
                    try:
                        match = re.search(r"data:(.*), sideChannel:", script.string, re.DOTALL)
                        if match: json_text = match.group(1).strip().rstrip(','); data = json.loads(json_text)
                        if isinstance(data, list) and len(data) > 1 and isinstance(data[1], list):
                             # Estrae le stringhe delle query
                            queries = [item[0] for item in data[1] if isinstance(item, list) and item and isinstance(item[0], str)]
                            if queries: ordered_queries_found = queries; found_data = True; break
                    except Exception as e_parse: print(f"       Parse JSON err (Proxy: {geo_code}): {e_parse}"); error_type_str = 'parse_fail'
            if found_data and ordered_queries_found: print(f"    Estratte {len(ordered_queries_found)} query grezze via {geo_code}."); release_success = True; return ordered_queries_found
            else: print(f"    Status 200 ma dati query non trovati/parsati via {geo_code}."); error_type_str = 'parse_fail'; time.sleep(current_wait); current_wait = min(current_wait * 1.5, MAX_WAIT_SECONDS / 2)
        except Exception as e:
            error_type_str = type(e).__name__; print(f"!! Errore estrazione query (Tentativo {attempts}, Proxy: {geo_code}): {error_type_str}: {e} !!"); traceback.print_exc(); wait_time = min(current_wait * 1.5, MAX_WAIT_SECONDS / 2); time.sleep(wait_time); current_wait = wait_time * 1.5
            if isinstance(e, (requests.exceptions.ProxyError, requests.exceptions.ConnectionError)): error_type_str = 'ProxyError'
            elif isinstance(e, requests.exceptions.Timeout): error_type_str = 'Timeout'
            if 'res' not in locals() or res is None: status_code = None
        finally:
            if proxy_info: proxy_manager.release_proxy(proxy_info[0], success=release_success, status_code=status_code, error_type=error_type_str); proxy_info = None
    print(f"!!! Estrazione query grezze fallita dopo {max_retries} tentativi. !!!"); return None


# --- Funzione get_trends_scores (Context) ---
# (Codice omesso per brevità - invariato, prende keyword e timeframe)
def get_trends_scores(keywords, timeframe):
    # Contiene la CORREZIONE V6.2 al blocco except ProxyError
    attempts = 0; current_backoff_429 = INITIAL_BACKOFF_SECONDS_429; current_backoff_other = 3.0; start_time = time.time()
    proxy_info, pytrends, geo_code = None, None, None
    max_proxy_attempts = min(len(proxy_manager.all_proxies) // 2, MAX_RETRIES_PYTRENDS_CONTEXT * 2); proxy_attempts_set = set()
    kw_list_str = ",".join(sorted(keywords)); kw_hash = hashlib.md5(kw_list_str.encode()).hexdigest()[:6]
    while attempts < MAX_RETRIES_PYTRENDS_CONTEXT and len(proxy_attempts_set) < max_proxy_attempts: # Usa retry contesto
        attempts += 1; proxy_info, status_code, error_type_str, release_success = None, None, None, False; pytrends, session_data, geo_code = None, None, None
        try:
            get_proxy_attempts = 0
            while proxy_info is None and get_proxy_attempts < 5: get_proxy_attempts += 1; proxy_info = proxy_manager.get_proxy(); time.sleep(random.uniform(2, 5) if proxy_info is None else 0)
            if proxy_info is None: print(f"       [CTX KW:{kw_hash} T{attempts}] No proxy. Skip."); time.sleep(min(current_backoff_other * 1.5, MAX_WAIT_SECONDS / 2)); continue
            proxy_str, geo_code, session_data = proxy_info
            if proxy_str in proxy_attempts_set: proxy_manager.release_proxy(proxy_str, success=False, error_type="duplicato_interno"); proxy_info = None; continue
            proxy_attempts_set.add(proxy_str); profile = session_data['profile']
            try: pytrends = proxy_manager.get_pytrends_session(proxy_str, profile)
            except Exception as e_session: print(f"       [CTX KW:{kw_hash} T{attempts}] Session err (Proxy: {geo_code}): {e_session}"); proxy_manager.release_proxy(proxy_str, success=False, error_type="pytrends_session_error"); proxy_info = None; continue
            base_delay = random.uniform(MIN_DELAY_BETWEEN_REQUESTS, MAX_DELAY_BETWEEN_REQUESTS); print(f"       [CTX KW:{kw_hash} T{attempts}] Wait {base_delay:.1f}s (Proxy: {geo_code})..."); time.sleep(base_delay)
            shuffled = keywords.copy(); random.shuffle(shuffled); pytrends.build_payload(shuffled, timeframe=timeframe, geo='IT', gprop='')
            df = pytrends.interest_over_time()
            if df.empty or all(c == 'isPartial' for c in df.columns): print(f"       [CTX KW:{kw_hash} T{attempts}] Empty data (Proxy: {geo_code})."); error_type_str = 'empty_data'; time.sleep(current_backoff_other); current_backoff_other = min(current_backoff_other * 1.2, MAX_WAIT_SECONDS / 4)
            else: scores = df.drop(columns=['isPartial'], errors='ignore').mean().to_dict(); final = {kw: scores.get(kw, 0) for kw in keywords}; elapsed = time.time() - start_time; print(f"       [CTX KW:{kw_hash} T{attempts}] Data OK in {elapsed:.1f}s (Proxy: {geo_code})"); release_success = True; return final
        except requests.exceptions.HTTPError as http_err:
            status_code = http_err.response.status_code if hasattr(http_err, 'response') and http_err.response else None; print(f"       [CTX KW:{kw_hash} T{attempts}] HTTP Err {status_code or 'N/A'} (Proxy: {geo_code}).")
            if status_code == 429: error_type_str = '429_related'; wait = min(current_backoff_429, MAX_WAIT_SECONDS); print(f"       -> 429! Wait: {wait:.1f}s..."); time.sleep(wait); current_backoff_429 = min(current_backoff_429 * BACKOFF_MULTIPLIER_429, MAX_WAIT_SECONDS * 1.5)
            elif status_code and 500 <= status_code <= 599: error_type_str = 'ProxyError'; wait = min(current_backoff_other*1.5, MAX_WAIT_SECONDS/2); print(f"       -> 5xx Err {status_code}. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
            else: error_type_str = f"HTTP_{status_code or 'N/A'}"; wait = min(current_backoff_other*1.5, MAX_WAIT_SECONDS/2); print(f"       -> HTTP Err {status_code}. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
        except (requests.exceptions.Timeout, socket.timeout) as timeout_err: error_type_str = 'Timeout'; print(f"       [CTX KW:{kw_hash} T{attempts}] Timeout (Proxy: {geo_code}): {timeout_err}"); wait = min(current_backoff_other*1.2, MAX_WAIT_SECONDS/2); print(f"       -> Timeout. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = wait * 1.2
        # CORREZIONE V6.3 - Blocco except riscritto
        except (requests.exceptions.ProxyError, requests.exceptions.ConnectionError, ConnectionRefusedError, OSError) as proxy_err:
            error_type_str = 'ProxyError'
            if '502' in str(proxy_err): status_code = 502
            print(f"       [CTX KW:{kw_hash} T{attempts}] Proxy/Conn Err (Proxy: {geo_code}): {type(proxy_err).__name__} - {str(proxy_err)[:100]}")
            wait = min(current_backoff_other * 1.5, MAX_WAIT_SECONDS / 2)
            print(f"       -> Proxy Err. Wait {wait:.1f}s...")
            time.sleep(wait)
            current_backoff_other = min(current_backoff_other * 1.5, MAX_WAIT_SECONDS)
        # Fine Blocco Corretto
        except Exception as e:
            msg = str(e); error_type_str = type(e).__name__; is_429 = '429' in msg; print(f"!! [CTX KW:{kw_hash} T{attempts}] UNEXPECTED Err (Proxy: {geo_code}): {error_type_str}: {msg[:150]}...")
            if is_429: error_type_str = '429_related'; wait = min(current_backoff_429, MAX_WAIT_SECONDS); print(f"       -> 429 DETECTED! Wait: {wait:.1f}s..."); time.sleep(wait); current_backoff_429 = min(current_backoff_429 * BACKOFF_MULTIPLIER_429, MAX_WAIT_SECONDS * 1.5)
            elif isinstance(e, AttributeError): error_type_str = 'parse_fail'; wait = min(current_backoff_other, MAX_WAIT_SECONDS/2); print(f"       -> Attr Err. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
            else: wait = min(current_backoff_other, MAX_WAIT_SECONDS/2); print(f"       -> Generic Err. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
        finally:
            if proxy_info: proxy_manager.release_proxy(proxy_info[0], success=release_success, status_code=status_code, error_type=error_type_str); proxy_info = None
    print(f"!!! [CTX KW:{kw_hash}] Failed {attempts} ctx attempts for {kw_list_str} ({timeframe}). Scores 0.")
    return {kw: 0 for kw in keywords}

# --- Funzione get_all_context_scores (Context) ---
# (Codice omesso per brevità - invariato, prende lista entità e timeframe)
def get_all_context_scores(entities_subset, timeframe):
    # Filtra eventuali None o stringhe vuote dalla lista prima di processare
    valid_entities_subset = [e for e in entities_subset if e and isinstance(e, str)]
    if not valid_entities_subset:
        print(f"--- Nessuna entità valida fornita per il contesto {timeframe}. Salto. ---")
        return {}

    all_scores = {}; entity_list = list(set(valid_entities_subset)); random.shuffle(entity_list)
    group_size = 4; groups = [entity_list[i:i+group_size] for i in range(0, len(entity_list), group_size)]
    print(f"\n--- Raccolta score CONTESTO per {len(entity_list)} entità: {timeframe} ({len(groups)} gruppi / {MAX_THREADS} threads) ---")
    sem = threading.Semaphore(MAX_THREADS)

    def get_trends_scores_safe(kw_group, tf):
        # Assicurati che il gruppo contenga solo stringhe valide
        valid_kw_group = [kw for kw in kw_group if isinstance(kw, str) and kw]
        if not valid_kw_group:
            return {}
        with sem:
            try:
                # Pytrends potrebbe fallire con certi caratteri, fare un minimo di pulizia?
                # Per ora, passiamo così come sono.
                return get_trends_scores(valid_kw_group, tf)
            except Exception as e:
                print(f"\n!!! Eccezione non gestita in get_trends_scores_safe per {valid_kw_group}: {type(e).__name__} !!!")
                # traceback.print_exc() # Abilita per debug approfondito
                return {k: 0 for k in valid_kw_group} # Ritorna 0 per il gruppo fallito

    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_THREADS) as executor:
        future_to_group = {}; print(f"    Sottomissione {len(groups)} task CONTESTO..."); time.sleep(0.5)
        for idx, group in enumerate(groups):
             # Passa il gruppo originale, la pulizia avviene in get_trends_scores_safe
            future = executor.submit(get_trends_scores_safe, group, timeframe);
            future_to_group[future] = group;
            # Riduci sleep per velocizzare sottomissione? Modulato ogni 10/20 task
            sleep_time = random.uniform(0.02, 0.08) if idx % 15 != 0 else random.uniform(0.1, 0.3)
            time.sleep(sleep_time)

        print(f"    Attesa completamento task CONTESTO..."); completed_count, failed_count = 0, 0; failed_groups_info = []; total_tasks = len(groups)
        # Usiamo tqdm per la barra di avanzamento
        with tqdm(total=total_tasks, desc=f"Contesto {timeframe}", unit="task") as pbar:
            for future in concurrent.futures.as_completed(future_to_group):
                group = future_to_group[future]
                original_group_str = ", ".join(map(str, group)) # Per logging
                try:
                    result = future.result(timeout=MAX_WAIT_SECONDS * 2) # Timeout più generoso?
                    if result is None: # Caso di errore inatteso in safe wrapper
                         failed_count += 1
                         failed_groups_info.append(f"{original_group_str} (None result)")
                         # Assicura che le entità del gruppo siano in all_scores con 0
                         for e in group: all_scores.setdefault(e, 0)
                    elif isinstance(result, dict):
                        if all(s == 0 for s in result.values()):
                            # Potrebbe essere fallito o tutti a 0 realmente
                            # Consideriamolo fallito per ora per eventuale retry
                            failed_count += 1
                            failed_groups_info.append(f"{original_group_str} (all zero)")
                            # Aggiorna/inserisci comunque con 0
                            for e, s in result.items(): all_scores[e] = s
                            # Assicura che tutte le entità originali del gruppo abbiano uno score
                            for e_orig in group: all_scores.setdefault(e_orig, 0)
                        else:
                            # Successo parziale o totale
                            all_scores.update(result)
                            # Assicura che tutte le entità originali del gruppo abbiano uno score
                            for e_orig in group: all_scores.setdefault(e_orig, 0)
                    else: # Tipo di ritorno non atteso
                         failed_count += 1
                         failed_groups_info.append(f"{original_group_str} (bad result type: {type(result)})")
                         for e in group: all_scores.setdefault(e, 0)

                except concurrent.futures.TimeoutError:
                     failed_count += 1
                     failed_groups_info.append(f"{original_group_str} (TimeoutError)")
                     for e in group: all_scores.setdefault(e, 0)
                     # Cancella il future? Potrebbe essere utile in alcuni scenari
                     # future.cancel()
                except Exception as exc:
                    failed_count += 1
                    failed_groups_info.append(f"{original_group_str} (Exception: {type(exc).__name__})")
                    for e in group: all_scores.setdefault(e, 0)
                finally:
                     pbar.update(1) # Aggiorna la barra di avanzamento

        # Gestione Retry (semplificata, riprova solo i gruppi falliti una volta)
        # Potrebbe essere resa più sofisticata
        failed_groups = [group for group in future_to_group.values() if any(all_scores.get(e) == 0 for e in group)] # Logica di identificazione falliti migliorabile

        # Limitiamo il numero di retry per evitare loop o stalli
        max_retries = min(len(failed_groups), total_tasks // 3, 30) # Es: max 1/3 dei task o 30
        groups_to_retry = failed_groups[:max_retries]

        if groups_to_retry:
            print(f"\n--- Riprovando {len(groups_to_retry)}/{len(failed_groups)} gruppi CONTESTO falliti per {timeframe} ---")
            retry_futures = {}
            # Riduci numero worker per retry? O usa gli stessi? Usiamo gli stessi per ora.
            with tqdm(total=len(groups_to_retry), desc=f"Retry Ctx {timeframe}", unit="task") as pbar_retry:
                for group in groups_to_retry:
                    time.sleep(random.uniform(0.5, 1.5)) # Pausa prima di ritentare
                    future = executor.submit(get_trends_scores_safe, group, timeframe)
                    retry_futures[future] = group

                for future in concurrent.futures.as_completed(retry_futures):
                    group = retry_futures[future]
                    original_group_str = ", ".join(map(str, group))
                    try:
                        result = future.result(timeout=MAX_WAIT_SECONDS * 2.5) # Timeout leggermente più lungo
                        if result and isinstance(result, dict) and not all(s == 0 for s in result.values()):
                             all_scores.update(result)
                             print(f"       Recuperato ctx (Retry): {original_group_str}")
                             # Rimuovi da failed_groups_info se recuperato? Potrebbe complicare
                        # else: Non fare nulla, rimane 0
                    except Exception as retry_exc:
                        print(f"       Errore retry ctx {original_group_str}: {retry_exc}")
                    finally:
                        pbar_retry.update(1)

            # Conta i fallimenti finali dopo il retry
            final_failed_count = sum(1 for group in groups_to_retry if all(all_scores.get(e) == 0 for e in group))
            print(f"--- Retry completato. Fallimenti finali nei gruppi ritentati: {final_failed_count}/{len(groups_to_retry)} ---")
        else:
             final_failed_count = failed_count # Se non ci sono stati retry validi

    # Stampa un riepilogo dei fallimenti persistenti se ce ne sono
    if final_failed_count > 0:
         print(f"--- Raccolta score CONTESTO {timeframe} completata con {final_failed_count}/{total_tasks} task falliti definitivamente (o con tutti 0). ---")
         # Stampa i primi N gruppi falliti per debug, se necessario
         # print("    Gruppi falliti (o tutti 0):")
         # for i, fail_info in enumerate(failed_groups_info):
         #      if i < 10: print(f"     - {fail_info}")
         #      else: print(f"     ... e altri {len(failed_groups_info)-10}"); break
    else:
         print(f"--- Raccolta score CONTESTO {timeframe} completata con successo ({total_tasks} task). ---")

    # Ritorna un dizionario con score per tutte le entità valide originali
    return {entity: all_scores.get(entity, 0) for entity in valid_entities_subset}


# --- Creazione dei file base statici (HTML, CSS, JS) ---
# (Codice omesso per brevità - invariato)
def create_static_files():
    """Crea i file HTML, CSS e JS di base nella directory output."""
    try:
        os.makedirs(OUTPUT_DIR, exist_ok=True)

        # Copia i file da templates a output
        for file_name in ["index.html", "style.css", "script.js"]:
            source_path = os.path.join(TEMPLATE_DIR, file_name)
            dest_path = os.path.join(OUTPUT_DIR, file_name)
            if os.path.exists(source_path):
                shutil.copy2(source_path, dest_path)
                print(f"Copiato {file_name} da templates a output.")
            else:
                print(f"File {file_name} non trovato in {TEMPLATE_DIR}.")

        return True
    except Exception as e:
        print(f"Errore durante la creazione dei file statici: {e}")
        traceback.print_exc()
        return False


# --- FUNZIONE: Generazione output HTML (Modificata per Main_Entity/Original_Query) ---
def generate_html_output(df_final, runtime_info=None):
    """Genera l'output HTML, includendo Main_Entity e Original_Query."""
    try:
        os.makedirs(OUTPUT_DIR, exist_ok=True)
        if not os.path.exists(os.path.join(OUTPUT_DIR, "index.html")):
            create_static_files()

        trend_list = []
        required_cols = ['Rank', 'Original_Query', 'Main_Entity', 'Discover_Score', 'Score_Avg_now 1-H', 'Score_Avg_now 4-H', 'Score_Avg_now 7-d']
        available_cols = df_final.columns

        # Verifica presenza colonne necessarie
        for col in required_cols:
             if col not in available_cols and col != 'Main_Entity': # Main_Entity può essere None
                 warnings.warn(f"Colonna '{col}' mancante nel DataFrame finale per l'output HTML.", UserWarning)

        for _, row in df_final.iterrows():
            main_entity = row.get('Main_Entity') # Può essere None
            original_query = row.get('Original_Query', 'N/A')

            # Se Main_Entity è None, usa Original_Query come fallback per il display principale
            display_entity = main_entity if pd.notna(main_entity) else original_query

            trend_data = {
                'rank': int(row.get('Rank', 0)),
                'entity': display_entity, # Entità principale da mostrare
                'original_query': original_query, # Query originale (per tooltip o testo piccolo)
                'discover_score': float(row.get('Discover_Score', 0)),
                'score_1h': float(row.get('Score_Avg_now 1-H', 0)),
                'score_4h': float(row.get('Score_Avg_now 4-H', 0)),
                'score_7d': float(row.get('Score_Avg_now 7-d', 0))
            }
            trend_list.append(trend_data)

        # Prepara i dati per il template (metadati run)
        template_data = {
            'run_metadata': {
                'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                'trends_count': len(trend_list),
                'top_score': max([t['discover_score'] for t in trend_list]) if trend_list else 0,
                'runtime_minutes': (runtime_info['end_time'] - runtime_info['start_time']) / 60 if runtime_info and 'start_time' in runtime_info and 'end_time' in runtime_info else 0,
                'proxies_used': len(proxy_manager.all_proxies)
            }
        }

        # Scrive i dati JS
        js_data = "const trendData = " + json.dumps(trend_list, indent=2, ensure_ascii=False) + ";\n"
        js_data += "const runMetadata = " + json.dumps(template_data['run_metadata'], indent=2, ensure_ascii=False) + ";\n"

        output_js_path = os.path.join(OUTPUT_DIR, 'data.js')
        try:
            with open(output_js_path, 'w', encoding='utf-8') as f:
                f.write(js_data)
            print(f"\nOutput HTML (data.js) generato con successo: {output_js_path}")
            print(f"Ricorda di aggiornare index.html/script.js per mostrare 'original_query' se desiderato.")
            return True
        except Exception as e_write:
             print(f"Errore scrittura file data.js: {e_write}")
             return False

    except Exception as e:
        print(f"Errore durante la generazione dell'output HTML: {e}")
        traceback.print_exc()
        return False


# ==============================================================================
# ==================== SCRIPT PRINCIPALE (V8.0 - AI Entity Linking) ============
# ==============================================================================
if __name__ == "__main__":
    main_start_time = time.time()
    runtime_info = {'start_time': main_start_time}

    # Validazioni parametri (omesse per brevità)
    # ...

    print(f"Avvio script V8.0: AI Entity Linking + Heuristic Discover Score V7.5")
    print(f"Formula attuale Score: Vedi definizione funzione 'calculate_discover_score'")
    print(f"Parametri Penalità V7.5: K={V7D_PENALTY_K}, epsilon={V7D_PENALTY_EPSILON}")
    print(f"Obiettivo: Identificare entità da query via AI, calcolare score bilanciato.")
    # ... altri print info ...

    ordered_queries = None # Cambiato nome variabile

    try:
        # --- 0. Setup Directory ---
        os.makedirs(CHECKPOINT_DIR, exist_ok=True); print(f"Directory checkpoint: '{CHECKPOINT_DIR}'")
        os.makedirs(OUTPUT_DIR, exist_ok=True); print(f"Directory output: '{OUTPUT_DIR}'")
        os.makedirs(TEMPLATE_DIR, exist_ok=True); print(f"Directory template: '{TEMPLATE_DIR}'")
        # Verifica esistenza template (omesso per brevità)
        # ...

        # --- 1. Estrazione Query Grezze da Trends TV ---
        ordered_queries = extract_ordered_entities() # Ora restituisce lista di query
        if not ordered_queries: raise Exception("Estrazione iniziale query fallita.")
        print(f"\nLista Query Grezze Estratta ({len(ordered_queries)} query).")
        # Salva checkpoint query grezze
        try:
            pd.DataFrame({'Rank': range(1, len(ordered_queries) + 1), 'Original_Query': ordered_queries}).to_csv(
                os.path.join(CHECKPOINT_DIR, "initial_queries_extracted.csv"), index=False, encoding='utf-8-sig')
            print(f"Lista query grezze salvata.")
        except Exception as e: print(f"Errore salvataggio checkpoint query grezze: {e}")

        # Prepara DataFrame iniziale
        df_final = pd.DataFrame({'Rank': range(1, len(ordered_queries) + 1), 'Original_Query': ordered_queries})

        # --- 1.5 Estrazione Entità Principali tramite AI ---
        print("\n--- Avvio Estrazione Entità Principali tramite AI ---")
        start_ai_time = time.time()
        # Limita il numero di query inviate all'AI se necessario (es. prime 50-100)
        # query_to_process_ai = ordered_queries[:100] # Esempio: limita a 100
        query_to_process_ai = ordered_queries # Processa tutte le query estratte
        entity_mapping = claude_integration.get_main_entities(query_to_process_ai)
        ai_duration = time.time() - start_ai_time
        print(f"--- Fine Estrazione Entità AI (Durata: {ai_duration:.2f}s) ---")

        # Mappa i risultati nel DataFrame
        df_final['Main_Entity'] = df_final['Original_Query'].map(entity_mapping)
        # Gestisci casi in cui la query non era in quelle processate (se abbiamo limitato query_to_process_ai)
        # o se l'AI ha fallito/restituito None (già gestito in get_main_entities che ritorna None)
        df_final['Main_Entity'] = df_final['Main_Entity'].fillna(None) # Assicura che i mancanti siano None

        # Salva checkpoint dopo AI
        try:
             df_final[['Rank', 'Original_Query', 'Main_Entity']].to_csv(
                 os.path.join(CHECKPOINT_DIR, "queries_with_ai_entities.csv"), index=False, encoding='utf-8-sig')
             print(f"Checkpoint con entità AI salvato.")
        except Exception as e: print(f"Errore salvataggio checkpoint entità AI: {e}")


        # --- 2. Raccolta Score di Contesto (per le Main_Entity VALIDE) ---
        # Inizializza colonne score
        for tf in CONTEXT_TIMEFRAMES:
            col_name = f'Score_Avg_{tf}'
            if col_name not in df_final.columns:
                 df_final[col_name] = 0.0

        if FETCH_VOLUME_CONTEXT and N_PROCESS_FOR_CONTEXT > 0 and CONTEXT_TIMEFRAMES:
            print(f"\n--- Avvio Raccolta Score Contesto per Top {N_PROCESS_FOR_CONTEXT} Entità Valide ---")

            # Seleziona le righe tra le prime N originali che hanno una Main_Entity valida
            top_n_rows_with_query = df_final.head(N_PROCESS_FOR_CONTEXT * 2) # Prendi un buffer più grande
            valid_entities_df = top_n_rows_with_query.dropna(subset=['Main_Entity'])

            # Estrai le entità uniche da queste righe, limitando al numero desiderato
            entities_for_context = valid_entities_df['Main_Entity'].unique().tolist()
            if len(entities_for_context) > N_PROCESS_FOR_CONTEXT:
                 # Se abbiamo più di N entità uniche valide, potremmo prendere quelle dalle righe con Rank originale più alto
                 # O semplicemente prendere le prime N uniche trovate
                 entities_for_context = entities_for_context[:N_PROCESS_FOR_CONTEXT]

            if not entities_for_context:
                 print("Nessuna entità valida trovata tra le prime query per raccogliere contesto.")
            else:
                print(f"Selezionate {len(entities_for_context)} entità uniche valide per il contesto.")
                timeframe_context_results = defaultdict(lambda: defaultdict(list))
                for run in range(1, CONTEXT_N_RUNS + 1):
                    print(f"\n===== INIZIO RACCOLTA CONTESTO - RUN {run}/{CONTEXT_N_RUNS} ====="); rst = time.time()
                    for tf in CONTEXT_TIMEFRAMES:
                        # Passa le ENTITÀ VALIDE alla funzione di raccolta scores
                        scores = get_all_context_scores(entities_for_context, tf)
                        # Aggiorna i risultati per ogni entità
                        for entity, score in scores.items():
                             if entity in entities_for_context: # Sicurezza extra
                                 timeframe_context_results[tf][entity].append(score)
                        # Checkpoint (invariato)
                        try:
                            pd.DataFrame({'Entita':list(scores.keys()), f'Score_{tf}_Run{run}':list(scores.values())}).to_csv(os.path.join(CHECKPOINT_DIR, f"context_run{run}_{tf.replace(' ','_')}_scores.csv"), index=False, encoding='utf-8-sig')
                        except Exception as e: print(f"Err salvataggio checkpoint ctx {run}/{tf}: {e}")
                        # Stampa completamento timeframe rimossa da qui, ora è in get_all_context_scores

                    print(f"===== FINE RACCOLTA CONTESTO - RUN {run}/{CONTEXT_N_RUNS} (Durata: {time.time() - rst:.2f}s) =====")
                    if run < CONTEXT_N_RUNS: time.sleep(random.uniform(10, 20))

                # Calcola medie contesto e aggiorna df_final usando Main_Entity
                print("\n    Calcolo Score Medi di Contesto...")
                for tf_agg in CONTEXT_TIMEFRAMES:
                    sc_avg_col = f'Score_Avg_{tf_agg}';
                    avg_s = {e: sum(s)/len(s) if s else 0 for e, s in timeframe_context_results[tf_agg].items()}
                    # Mappa le medie al DataFrame usando la colonna 'Main_Entity'
                    df_final[sc_avg_col] = df_final['Main_Entity'].map(avg_s).fillna(0);
                    print(f"       Calcolata media contesto per {tf_agg} e mappata su Main_Entity.")
                print("--- Fine Raccolta Score Contesto ---")
        else:
             print("\n--- Raccolta Score Contesto Saltata ---")
             # Assicura colonne score esistano con 0.0
             for tf in CONTEXT_TIMEFRAMES:
                 if f'Score_Avg_{tf}' not in df_final.columns: df_final[f'Score_Avg_{tf}'] = 0.0


        # ========================================================================
        # --- 3. Calcolo Heuristic Discover Score (V7.5 via Funzione Dedicata) ---
        # ========================================================================
        print("\n    Calcolo Heuristic Discover Score V7.5 (via funzione)...")
        discover_score_col = 'Discover_Score'
        score_4h_col = 'Score_Avg_now 4-H'
        score_7d_col = 'Score_Avg_now 7-d'

        if score_4h_col in df_final.columns and score_7d_col in df_final.columns and 'Rank' in df_final.columns:
            score_4h = pd.to_numeric(df_final[score_4h_col], errors='coerce').fillna(0).clip(lower=0)
            score_7d = pd.to_numeric(df_final[score_7d_col], errors='coerce').fillna(0).clip(lower=0)
            rank_series = pd.to_numeric(df_final['Rank'], errors='coerce').fillna(1).clip(lower=1)

            # --- CHIAMA LA FUNZIONE DEDICATA PER IL CALCOLO ---
            df_final[discover_score_col] = calculate_discover_score(
                rank_series, score_4h, score_7d # K e epsilon usano i default globali
            )
            # ----------------------------------------------------

            # --- Fallback Score a 0 per righe senza Main_Entity valida ---
            # Queste righe non hanno ricevuto score di contesto e non dovrebbero averne uno finale
            rows_without_entity = df_final['Main_Entity'].isnull()
            count_no_entity = rows_without_entity.sum()
            if count_no_entity > 0:
                 df_final.loc[rows_without_entity, discover_score_col] = 0
                 print(f"        Score impostato a 0 per {count_no_entity} righe senza Main_Entity valida.")
            # -----------------------------------------------------------

            print(f"       Colonna '{discover_score_col}' calcolata.")
        else:
            missing_cols = [col for col in [score_4h_col, score_7d_col, 'Rank'] if col not in df_final.columns]
            warnings.warn(f"Colonne necessarie ({', '.join(missing_cols)}) mancanti, impossibile calcolare Discover_Score.", UserWarning)
            if discover_score_col not in df_final.columns:
                 df_final[discover_score_col] = 0.0
        # ========================================================================
        # --- Fine Sezione Calcolo Heuristic Discover Score ---
        # ========================================================================

        # --- 4. Ordinamento Finale per Discover Score ---
        if discover_score_col in df_final.columns:
             df_final = df_final.sort_values(by=discover_score_col, ascending=False)
             print(f"\n    DataFrame ordinato per '{discover_score_col}'.")
        else:
             print(f"\n    ATTENZIONE: Colonna '{discover_score_col}' non trovata per l'ordinamento.")

        # --- 5. Salva il DataFrame finale come CSV (per backup) ---
        try:
            backup_filename = "final_data_v8.0.csv" # Aggiorna versione
            df_final.to_csv(os.path.join(CHECKPOINT_DIR, backup_filename), index=False, encoding='utf-8-sig')
            print(f"\nDataFrame finale salvato come backup in: {os.path.join(CHECKPOINT_DIR, backup_filename)}")
        except Exception as e:
            print(f"\n!!! Errore salvataggio CSV finale: {e} !!!")

        # --- 6. Genera l'output HTML ---
        runtime_info['end_time'] = time.time()
        html_result = generate_html_output(df_final, runtime_info)
        # (Messaggi di successo/errore già in generate_html_output)

        # --- 7. Stampa Top N Finale (Ordinato per Discover Score) ---
        print(f"\n--- Top {TOP_N_FINAL_DISPLAY} Entità (Ordinate per Discover Score Heuristico V7.5 / AI V8.0) ---")
        cols_to_show = []
        # Ordine colonne per leggibilità
        if discover_score_col in df_final.columns: cols_to_show.append(discover_score_col)
        if 'Rank' in df_final.columns: cols_to_show.append('Rank')
        if 'Main_Entity' in df_final.columns: cols_to_show.append('Main_Entity')
        if 'Original_Query' in df_final.columns: cols_to_show.append('Original_Query')

        if FETCH_VOLUME_CONTEXT:
            # Mostra solo gli score usati nella formula V7.5 + 1h per confronto
            for tf_suffix in ['now 1-H', 'now 4-H', 'now 7-d']:
                col_name = f'Score_Avg_{tf_suffix}'
                if col_name in df_final.columns:
                    cols_to_show.append(col_name)

        try:
            # Aumenta larghezza per nuove colonne
            pd.set_option('display.max_rows', TOP_N_FINAL_DISPLAY + 5); pd.set_option('display.width', 220); pd.set_option('display.float_format', '{:.3f}'.format)
            # Seleziona solo colonne esistenti
            cols_to_show_existing = [col for col in cols_to_show if col in df_final.columns]
            print(df_final[cols_to_show_existing].head(TOP_N_FINAL_DISPLAY).to_string(index=False))
        except KeyError as ke: print(f"Errore colonne stampa finale: {ke}. Disponibili: {df_final.columns.tolist()}")
        except Exception as e_print: print(f"Errore imprevisto durante la stampa finale: {e_print}")
        finally: pd.reset_option('display.max_rows'); pd.reset_option('display.width'); pd.reset_option('display.float_format')

    except Exception as main_exc: print(f"\n!!! ERRORE CRITICO SCRIPT: {type(main_exc).__name__} - {main_exc} !!!"); traceback.print_exc()
    finally: # Stampa statistiche proxy
        print("\n--- Statistiche Proxy Rilevate (Fine Esecuzione) ---")
        # (Codice statistiche proxy omesso per brevità - invariato)
        try:
            ps = proxy_manager.get_proxy_stats_summary(); print(f"Successi: {ps.get('total_success', 0)}"); print(f"Fail 429: {ps.get('total_fail_429', 0)}"); print(f"Fail Proxy/Timeout/5xx: {ps.get('total_fail_proxy_timeout', 0)}"); print(f"Fail Altri/Parse: {ps.get('total_fail_other_parse', 0)}")
            tfp = ps.get('top_failing_proxies', {});
            if tfp: print("\nTop Proxy con Fallimenti:"); [print(f"    - {pid}: Succ:{d['success']}, Fails Cons:{d['consecutive_fails']} (429:{d['fail_429']}, P/T:{d['fail_proxy/timeout']}, O/P:{d['fail_other/parse']})") for pid, d in tfp.items()]
            else: print("\nNessun fallimento proxy.")
        except Exception as stats_exc: print(f"Errore stampa statistiche proxy: {stats_exc}")

        main_end_time = time.time(); total_duration = main_end_time - main_start_time
        print(f"\n--- Script completato in {total_duration:.2f} secondi ({total_duration/60:.2f} minuti) ---")
