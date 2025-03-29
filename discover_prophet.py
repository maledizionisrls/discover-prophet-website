# -*- coding: utf-8 -*-

# 🚀 Script Ottimizzato per Google Trends TV (Hot Trends) - V8.0 (Con Integrazione Claude AI)
#    Analisi semantica avanzata e gestione entità via Claude AI
#    Formula V7.5: (1 + V4h + V7d) / log1p(Rank * max(1, K / (V7d + epsilon)))
#    Obiettivo: Penalizzare Rank alto se V7d è basso, validando esplosioni con storico.
#    Ordina per Discover_Score decrescente. Contesto per Top N.
#    Output in HTML.

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

# Import del modulo Claude Integration
import claude_integration

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
OUTPUT_FILENAME = "index.html" # Modificato per output HTML
OUTPUT_DIR = "docs" # Directory per output GitHub Pages
CHECKPOINT_DIR = "checkpoint_data" # Directory checkpoint
TEMPLATE_DIR = "templates" # Directory template HTML

# --- Parametri Contesto di Volume ---
FETCH_VOLUME_CONTEXT = True
N_PROCESS_FOR_CONTEXT = 50
CONTEXT_TIMEFRAMES = ['now 1-H', 'now 4-H', 'now 7-d']
CONTEXT_N_RUNS = 2

# --- Parametri Formula Discover Score V7.5 ---
# Puoi modificare K ed epsilon per regolare la penalità per V7d basso
V7D_PENALTY_K = 5.0      # Costante K: valore più alto = penalità maggiore per V7d basso
V7D_PENALTY_EPSILON = 0.1 # Valore piccolo per evitare divisione per zero

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

# --- Parametri Claude AI ---
ANTHROPIC_API_KEY = "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"  # Sostituire con la tua API Key Claude
CLAUDE_MODEL = "claude-3-sonnet-20240229"
CLAUDE_CACHE_FILE = os.path.join(CHECKPOINT_DIR, "claude_analysis_cache.json")
CLAUDE_BATCH_SIZE = 5  # Numero di query da analizzare in un batch

# --- Parametri Interni Pytrends (Non modificare se non sai cosa fai) ---
PYTRENDS_RETRIES = 1
PYTRENDS_BACKOFF_FACTOR = 0.2

# ==============================================================================
# ================== FINE SEZIONE PARAMETRI CONFIGURABILI ======================
# ==============================================================================

# Inizializzazione Claude Analyzer
print("Inizializzazione Claude Analyzer...")
CLAUDE_ANALYZER = None

def init_claude_analyzer():
    global CLAUDE_ANALYZER
    if CLAUDE_ANALYZER is None:
        try:
            CLAUDE_ANALYZER = claude_integration.ClaudeAnalyzer(
                api_key=ANTHROPIC_API_KEY,
                model=CLAUDE_MODEL,
                cache_file=CLAUDE_CACHE_FILE
            )
            print(f"Claude Analyzer inizializzato con modello {CLAUDE_MODEL}")
        except Exception as e:
            print(f"ERRORE inizializzazione Claude Analyzer: {e}")
            CLAUDE_ANALYZER = None
    return CLAUDE_ANALYZER


# ==============================================================================
# ==================== FUNZIONE CALCOLO DISCOVER SCORE (V7.5) ==================
# ==============================================================================
# Modifica questa funzione per cambiare la logica di calcolo dello score.
# Riceve Series Pandas per rank, score_4h, score_7d (già pulite).
# Restituisce una Series Pandas con i punteggi calcolati.
# ------------------------------------------------------------------------------

def calculate_discover_score(rank_series, score_4h, score_7d, k_penalty=V7D_PENALTY_K, epsilon=V7D_PENALTY_EPSILON, 
                            entity_analysis=None):
    """
    Calcola l'Heuristic Discover Score basato su rank, volume 4h e volume 7d.
    Formula V8.0: (1 + V4h + V7d) * EntityFactor / log1p(Rank * max(1, K / (V7d + epsilon)))
    - V4h: Score medio ultime 4 ore
    - V7d: Score medio ultimi 7 giorni
    - Rank: Rank iniziale estratto da Google Trends TV
    - K, epsilon: Parametri per regolare la penalità del rank se V7d è basso.
    - entity_analysis: Dizionario contenente l'analisi semantica delle query
    
    Logica: Usa un numeratore semplice (somma volumi). Penalizza il Rank nel
            denominatore in modo dinamico: se V7d è basso, il Rank effettivo
            usato nel logaritmo viene aumentato, abbassando lo score finale.
            
            Ora include il fattore EntityFactor che considera l'analisi semantica Claude.
    """
    formula_str = f"(1 + V4h + V7d) * EntityFactor / log1p(Rank * max(1, {k_penalty:.1f} / (V7d + {epsilon:.1f})))"
    print(f"        Applicando Formula V8.0: {formula_str}")

    # --- Calcolo Denominatore ---
    # Calcola il fattore di penalità basato su V7d basso
    low_v7d_penalty_factor = np.maximum(1.0, k_penalty / (score_7d + epsilon))

    # Calcola l'Effective Rank (Rank originale * fattore di penalità)
    effective_rank = rank_series * low_v7d_penalty_factor

    # Calcola il denominatore usando l'Effective Rank
    denominator = np.log1p(effective_rank)
    # Assicura che il denominatore non sia mai zero
    denominator = np.maximum(denominator, 1e-9)

    # --- Calcolo Numeratore ---
    # Semplice somma dei volumi + 1
    numerator = 1 + score_4h + score_7d
    
    # --- Incorpora l'analisi semantica se disponibile ---
    entity_factor_series = pd.Series(1.0, index=rank_series.index)
    
    if entity_analysis is not None:
        entity_factors = {}
        
        for index, query in enumerate(entity_analysis.keys()):
            analysis = entity_analysis[query]
            is_meta_query = analysis.get('is_meta_query', False)
            confidence = analysis.get('confidence', 0.5)
            
            # Calcola fattore entità
            # - Meta query hanno un fattore leggermente penalizzato
            # - La confidence dell'analisi influisce sul fattore
            base_factor = 0.9 if is_meta_query else 1.1
            
            # Moltiplica per la confidence (0.1-1.0)
            entity_factor = base_factor * (0.5 + 0.5 * confidence)
            
            # Tronca i valori troppo estremi
            entity_factor = max(0.7, min(1.3, entity_factor))
            
            entity_factors[query] = entity_factor
        
        # Applica i fattori entità
        entity_factor_series = pd.Series(entity_factors).reindex(rank_series.index).fillna(1.0)
        
        print(f"        Analisi Claude applicata al Discover Score: {len(entity_factors)} query analizzate")
        
    # Moltiplica il numeratore per il fattore entità
    numerator = numerator * entity_factor_series

    # --- Calcolo Score Finale ---
    discover_score = numerator / denominator

    # Riempi eventuali NaN risultanti con 0
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

# --- Estrazione Entità ORDINATA ---
# (Codice omesso per brevità - invariato)
def extract_ordered_entities(max_retries=ENTITY_EXTRACTION_MAX_RETRIES, initial_wait=ENTITY_EXTRACTION_INITIAL_WAIT):
    attempts = 0; current_wait = initial_wait; proxy_info, geo_code = None, None; print(f"Avvio estrazione lista entità ORDINATA (max {max_retries} tentativi)...")
    while attempts < max_retries:
        attempts += 1; print(f"Tentativo {attempts}/{max_retries} per estrarre entità ordinate...")
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
            status_code = res.status_code; soup = BeautifulSoup(res.text, 'html.parser'); scripts = soup.find_all('script'); found_data = False; ordered_entities_found = []
            for script in scripts:
                if script.string and 'AF_initDataCallback' in script.string and 'key: \'ds:0\'' in script.string:
                    try:
                        match = re.search(r"data:(.*), sideChannel:", script.string, re.DOTALL)
                        if match: json_text = match.group(1).strip().rstrip(','); data = json.loads(json_text)
                        if isinstance(data, list) and len(data) > 1 and isinstance(data[1], list):
                            entities = [item[0] for item in data[1] if isinstance(item, list) and item and isinstance(item[0], str)]
                            if entities: ordered_entities_found = entities; found_data = True; break
                    except Exception as e_parse: print(f"       Parse JSON err (Proxy: {geo_code}): {e_parse}"); error_type_str = 'parse_fail'
            if found_data and ordered_entities_found: print(f"    Estratte {len(ordered_entities_found)} entità ordinate via {geo_code}."); release_success = True; return ordered_entities_found
            else: print(f"    Status 200 ma dati non trovati/parsati via {geo_code}."); error_type_str = 'parse_fail'; time.sleep(current_wait); current_wait = min(current_wait * 1.5, MAX_WAIT_SECONDS / 2)
        except Exception as e:
            error_type_str = type(e).__name__; print(f"!! Errore estrazione (Tentativo {attempts}, Proxy: {geo_code}): {error_type_str}: {e} !!"); traceback.print_exc(); wait_time = min(current_wait * 1.5, MAX_WAIT_SECONDS / 2); time.sleep(wait_time); current_wait = wait_time * 1.5
            if isinstance(e, (requests.exceptions.ProxyError, requests.exceptions.ConnectionError)): error_type_str = 'ProxyError'
            elif isinstance(e, requests.exceptions.Timeout): error_type_str = 'Timeout'
            if 'res' not in locals() or res is None: status_code = None
        finally:
            if proxy_info: proxy_manager.release_proxy(proxy_info[0], success=release_success, status_code=status_code, error_type=error_type_str); proxy_info = None
    print(f"!!! Estrazione entità ORDINATE fallita dopo {max_retries} tentativi. !!!"); return None

# --- Funzione get_trends_scores ---
# (Codice omesso per brevità - invariato)
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


# --- Funzione get_all_context_scores ---
# (Codice omesso per brevità - invariato)
def get_all_context_scores(entities_subset, timeframe):
    all_scores = {}; entity_list = list(set(entities_subset)); random.shuffle(entity_list)
    group_size = 4; groups = [entity_list[i:i+group_size] for i in range(0, len(entity_list), group_size)]
    print(f"\n--- Raccolta score CONTESTO: {timeframe} ({len(groups)} gruppi / {len(entity_list)} entità / {MAX_THREADS} threads) ---")
    sem = threading.Semaphore(MAX_THREADS)
    def get_trends_scores_safe(kw, tf):
        with sem:
            try: return get_trends_scores(kw, tf)
            except Exception as e: print(f"\n!!! Exc safe ctx: {type(e).__name__} !!!"); return {k: 0 for k in kw}
    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_THREADS) as executor:
        future_to_group = {}; print(f"    Sottomissione {len(groups)} task CONTESTO..."); time.sleep(0.5)
        for idx, group in enumerate(groups): future = executor.submit(get_trends_scores_safe, group, timeframe); future_to_group[future] = group; time.sleep(random.uniform(0.05, 0.15) if idx % 10 != 0 else random.uniform(0.3, 0.6))
        print(f"    Attesa completamento task CONTESTO..."); completed_count, failed_count = 0, 0; failed_groups = []; total_tasks = len(groups)
        for future in concurrent.futures.as_completed(future_to_group):
            completed_count += 1; group = future_to_group[future]
            try:
                result = future.result(timeout=MAX_WAIT_SECONDS * 2)
                if result and all(s == 0 for s in result.values()): failed_count += 1; failed_groups.append(group); [all_scores.setdefault(e, 0) for e in group]
                elif result: all_scores.update(result)
                else: failed_count += 1; failed_groups.append(group); [all_scores.setdefault(e, 0) for e in group]
                if completed_count % 20 == 0 or completed_count == total_tasks: print(f"       ...completati {completed_count}/{total_tasks} task CONTESTO ({timeframe})...")
            except Exception as exc: print(f"\n!!! Errore recupero CONTESTO {group} ({timeframe}): {exc} !!!"); failed_count += 1; failed_groups.append(group); [all_scores.setdefault(e, 0) for e in group]
        if failed_groups and len(failed_groups) < total_tasks // 2: # Retry
            print(f"\n--- Riprovando {len(failed_groups)} gruppi CONTESTO falliti per {timeframe} ---"); random.shuffle(failed_groups); retry_futures = {}
            for group in failed_groups: time.sleep(random.uniform(1.0, 2.0)); future = executor.submit(get_trends_scores_safe, group, timeframe); retry_futures[future] = group
            for future in concurrent.futures.as_completed(retry_futures):
                group = retry_futures[future]
                try:
                    result = future.result(timeout=MAX_WAIT_SECONDS * 2.5)
                    if result and not all(s == 0 for s in result.values()): all_scores.update(result); failed_count -= 1; print(f"       Recuperato ctx (Retry): {group}")
                    else: [all_scores.setdefault(e, 0) for e in group]
                except Exception as retry_exc: print(f"       Errore retry ctx {group}: {retry_exc}"); [all_scores.setdefault(e, 0) for e in group]
    print(f"--- Raccolta score CONTESTO {timeframe} completata. ({total_tasks} task, {failed_count} falliti) ---")
    return {entity: all_scores.get(entity, 0) for entity in entity_list}


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


# --- FUNZIONE: Generazione output HTML ---
# (Codice omesso per brevità - invariato)
def generate_html_output(df_final, runtime_info=None, entity_analysis=None):
    """Genera l'output HTML."""
    try:
        # Assicurati che la directory output esista
        os.makedirs(OUTPUT_DIR, exist_ok=True)

        # Crea file statici se necessario
        if not os.path.exists(os.path.join(OUTPUT_DIR, "index.html")):
            create_static_files()

        # Prepara la lista di trend per il template
        trend_list = []
        # Assicurati che le colonne esistano prima di accedervi
        required_cols = ['Rank', 'Entita', 'Discover_Score', 'Score_Avg_now 1-H', 'Score_Avg_now 4-H', 'Score_Avg_now 7-d']
        available_cols = df_final.columns

        for col in required_cols:
             if col not in available_cols:
                 warnings.warn(f"Colonna '{col}' mancante nel DataFrame finale per l'output HTML. Verrà usato 0.", UserWarning)


        for _, row in df_final.iterrows():
            # Seleziona e formatta le colonne rilevanti, gestendo quelle mancanti
            trend_data = {
                'rank': int(row['Rank']) if 'Rank' in available_cols else 0,
                'entity': row['Entita'] if 'Entita' in available_cols else 'N/A',
                'discover_score': float(row.get('Discover_Score', 0)), # Usa .get() per sicurezza
                'score_1h': float(row.get('Score_Avg_now 1-H', 0)), # Usa .get()
                'score_4h': float(row.get('Score_Avg_now 4-H', 0)), # Usa .get()
                'score_7d': float(row.get('Score_Avg_now 7-d', 0))  # Usa .get()
            }
            
            # Aggiungi informazioni sull'analisi semantica se disponibili
            if entity_analysis and trend_data['entity'] in entity_analysis:
                analysis = entity_analysis[trend_data['entity']]
                trend_data['primary_entity'] = analysis.get('primary_entity', trend_data['entity'])
                trend_data['is_meta_query'] = analysis.get('is_meta_query', False)
                trend_data['confidence'] = analysis.get('confidence', 0.5)
                trend_data['secondary_entities'] = analysis.get('secondary_entities', [])
            
            trend_list.append(trend_data)

        # Prepara i dati per il template
        template_data = {
            'run_metadata': {
                'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                'trends_count': len(trend_list),
                'top_score': max([t['discover_score'] for t in trend_list]) if trend_list else 0,
                'runtime_minutes': (runtime_info['end_time'] - runtime_info['start_time']) / 60 if runtime_info and 'start_time' in runtime_info and 'end_time' in runtime_info else 0,
                'proxies_used': len(proxy_manager.all_proxies),
                'claude_analysis': entity_analysis is not None
            }
        }

        # Prepara i file JS dati (solo questo file viene aggiornato ogni volta)
        js_data = "const trendData = " + json.dumps(trend_list, indent=2) + ";\n"
        js_data += "const runMetadata = " + json.dumps(template_data['run_metadata'], indent=2) + ";\n"

        with open(os.path.join(OUTPUT_DIR, 'data.js'), 'w', encoding='utf-8') as f:
            f.write(js_data)

        print(f"\nOutput HTML generato con successo: {os.path.join(OUTPUT_DIR, OUTPUT_FILENAME)}")
        return True
    except Exception as e:
        print(f"Errore durante la generazione dell'output HTML: {e}")
        traceback.print_exc()
        return False


# ==============================================================================
# ==================== SCRIPT PRINCIPALE (Heuristic V8.0 con Claude) ===========
# ==============================================================================
if __name__ == "__main__":
    main_start_time = time.time()
    runtime_info = {'start_time': main_start_time}

    # Validazioni
    if FETCH_VOLUME_CONTEXT:
        if not CONTEXT_TIMEFRAMES: warnings.warn("FETCH_VOLUME_CONTEXT=True ma CONTEXT_TIMEFRAMES vuoto.", UserWarning)
        if CONTEXT_N_RUNS <= 0: raise ValueError("CONTEXT_N_RUNS >= 1")

    print(f"Avvio script V8.0: Heuristic Discover Score con Analisi Semantica Claude AI")
    print(f"Formula attuale: Vedi definizione funzione 'calculate_discover_score'")
    print(f"Parametri Penalità: K={V7D_PENALTY_K}, epsilon={V7D_PENALTY_EPSILON}")
    print(f"Obiettivo: Calcolare Discover Score considerando semantica ed entità")
    print(f"Analisi Claude: {CLAUDE_MODEL}")
    print(f"MAX_CONCURRENT_PROXIES={MAX_CONCURRENT_PROXIES}, THREADS={MAX_THREADS}")
    print(f"Output HTML: {os.path.join(OUTPUT_DIR, OUTPUT_FILENAME)}")

    ordered_entities = None
    entity_analysis = None

    try:
        os.makedirs(CHECKPOINT_DIR, exist_ok=True); print(f"Directory checkpoint: '{CHECKPOINT_DIR}'")
        os.makedirs(OUTPUT_DIR, exist_ok=True); print(f"Directory output: '{OUTPUT_DIR}'")
        os.makedirs(TEMPLATE_DIR, exist_ok=True); print(f"Directory template: '{TEMPLATE_DIR}'")

        # Verifica esistenza dei file template
        for file_name in ["index.html", "style.css", "script.js"]:
            template_path = os.path.join(TEMPLATE_DIR, file_name)
            if not os.path.exists(template_path):
                print(f"ATTENZIONE: File template {file_name} non trovato in {TEMPLATE_DIR}!")

        # 1. Estrazione Lista Ordinata
        ordered_entities = extract_ordered_entities()
        if not ordered_entities: raise Exception("Estrazione iniziale fallita.")
        print(f"\nLista Ordinata Iniziale Estratta ({len(ordered_entities)} entità).")
        try: pd.DataFrame({'Rank': range(1, len(ordered_entities) + 1), 'Entita': ordered_entities}).to_csv(os.path.join(CHECKPOINT_DIR, "entities_ordered_extracted.csv"), index=False, encoding='utf-8-sig'); print(f"Lista ordinata salvata.")
        except Exception as e: print(f"Errore salvataggio checkpoint lista ordinata: {e}")

        # Prepara DataFrame finale
        df_final = pd.DataFrame({'Rank': range(1, len(ordered_entities) + 1), 'Entita': ordered_entities})
        # Assicurati che le colonne per i punteggi esistano
        for tf in CONTEXT_TIMEFRAMES:
             col_name = f'Score_Avg_{tf}'
             if col_name not in df_final.columns:
                 df_final[col_name] = 0.0

        # 2. Raccolta Score di Contesto
        if FETCH_VOLUME_CONTEXT and N_PROCESS_FOR_CONTEXT > 0 and CONTEXT_TIMEFRAMES:
            print(f"\n--- Avvio Raccolta Score Contesto per Top {N_PROCESS_FOR_CONTEXT} Entità ---")
            entities_for_context = ordered_entities[:N_PROCESS_FOR_CONTEXT]
            timeframe_context_results = defaultdict(lambda: defaultdict(list))
            for run in range(1, CONTEXT_N_RUNS + 1): # Loop N_RUNS
                print(f"\n===== INIZIO RACCOLTA CONTESTO - RUN {run}/{CONTEXT_N_RUNS} ====="); rst = time.time()
                for tf in CONTEXT_TIMEFRAMES:
                    scores = get_all_context_scores(entities_for_context, tf)
                    for entity, score in scores.items(): timeframe_context_results[tf][entity].append(score)
                    try: # Checkpoint
                        pd.DataFrame({'Entita':list(scores.keys()), f'Score_{tf}_Run{run}':list(scores.values())}).to_csv(os.path.join(CHECKPOINT_DIR, f"context_run{run}_{tf.replace(' ','_')}_scores.csv"), index=False, encoding='utf-8-sig')
                    except Exception as e: print(f"Err salvataggio checkpoint ctx {run}/{tf}: {e}")
                    print(f"       Run {run}/{CONTEXT_N_RUNS}: Contesto {tf} completato.")
                print(f"===== FINE RACCOLTA CONTESTO - RUN {run}/{CONTEXT_N_RUNS} (Durata: {time.time() - rst:.2f}s) =====")
                if run < CONTEXT_N_RUNS: time.sleep(random.uniform(10, 20))

            # Calcola medie contesto e aggiorna df_final
            print("\n    Calcolo Score Medi di Contesto...")
            for tf_agg in CONTEXT_TIMEFRAMES:
                sc_avg_col = f'Score_Avg_{tf_agg}';
                avg_s = {e: sum(s)/len(s) if s else 0 for e, s in timeframe_context_results[tf_agg].items()}
                df_final[sc_avg_col] = df_final['Entita'].map(avg_s).fillna(0);
                print(f"       Calcolata media contesto per {tf_agg}.")
            print("--- Fine Raccolta Score Contesto ---")
        else:
             print("\n--- Raccolta Score Contesto Saltata ---")
             for tf in CONTEXT_TIMEFRAMES:
                 if f'Score_Avg_{tf}' not in df_final.columns: df_final[f'Score_Avg_{tf}'] = 0.0

        # ========================================================================
        # --- 3. Analisi Semantica con Claude AI ---
        # ========================================================================
        print("\n--- Avvio Analisi Semantica con Claude AI ---")
        try:
            # Inizializza Claude Analyzer
            claude = init_claude_analyzer()
            if claude:
                # Prepara le query da analizzare (le prime N per contesto)
                queries_to_analyze = ordered_entities[:N_PROCESS_FOR_CONTEXT]
                print(f"Analisi di {len(queries_to_analyze)} query con Claude AI...")
                
                # Esegui l'analisi in batch
                entity_analysis = claude.analyze_queries_batch(queries_to_analyze, batch_size=CLAUDE_BATCH_SIZE)
                
                # Salva i risultati dell'analisi
                try:
                    with open(os.path.join(CHECKPOINT_DIR, "claude_entity_analysis.json"), 'w', encoding='utf-8') as f:
                        json.dump(entity_analysis, f, ensure_ascii=False, indent=2)
                    print(f"Analisi Claude AI salvata in {os.path.join(CHECKPOINT_DIR, 'claude_entity_analysis.json')}")
                except Exception as e:
                    print(f"Errore salvataggio analisi Claude: {e}")
                
                # Stampa alcune statistiche sull'analisi
                meta_queries = sum(1 for analysis in entity_analysis.values() if analysis.get('is_meta_query', False))
                avg_confidence = sum(analysis.get('confidence', 0) for analysis in entity_analysis.values()) / len(entity_analysis) if entity_analysis else 0
                
                print(f"Analisi completata: {len(entity_analysis)} query analizzate")
                print(f"Meta-query identificate: {meta_queries} ({(meta_queries/len(entity_analysis)*100):.1f}%)")
                print(f"Confidenza media: {avg_confidence:.2f}")
                
                # Stampa alcuni esempi di analisi
                print("\nEsempi di analisi semantica:")
                sample_count = min(5, len(entity_analysis))
                sample_keys = list(entity_analysis.keys())[:sample_count]
                
                for key in sample_keys:
                    analysis = entity_analysis[key]
                    print(f"Query: '{key}'")
                    print(f"  → Entità principale: '{analysis.get('primary_entity', '?')}'")
                    print(f"  → Meta-query: {'Sì' if analysis.get('is_meta_query', False) else 'No'}")
                    if analysis.get('secondary_entities'):
                        print(f"  → Entità secondarie: " + ", ".join([f"'{e['entity']}' ({e['weight']:.1f})" for e in analysis.get('secondary_entities', [])[:2]]))
                    print()
            else:
                print("ATTENZIONE: Claude Analyzer non inizializzato correttamente. L'analisi semantica sarà saltata.")
                entity_analysis = None
        except Exception as claude_error:
            print(f"Errore durante l'analisi semantica Claude: {claude_error}")
            traceback.print_exc()
            entity_analysis = None
            
        print("--- Fine Analisi Semantica ---")
        # ========================================================================
        # --- Fine Sezione Analisi Semantica con Claude AI ---
        # ========================================================================

        # ========================================================================
        # --- 4. Calcolo Heuristic Discover Score (V8.0 con Claude AI) ---
        # ========================================================================
        print("\n    Calcolo Heuristic Discover Score V8.0 (con analisi semantica Claude)...")
        discover_score_col = 'Discover_Score'
        score_4h_col = 'Score_Avg_now 4-H'
        score_7d_col = 'Score_Avg_now 7-d'

        # Verifica presenza colonne necessarie
        if score_4h_col in df_final.columns and score_7d_col in df_final.columns and 'Rank' in df_final.columns:
            # Estrai le serie, assicurandoti che siano numeriche e nei range corretti
            score_4h = pd.to_numeric(df_final[score_4h_col], errors='coerce').fillna(0).clip(lower=0)
            score_7d = pd.to_numeric(df_final[score_7d_col], errors='coerce').fillna(0).clip(lower=0)
            rank_series = pd.to_numeric(df_final['Rank'], errors='coerce').fillna(1).clip(lower=1) # Rank >= 1

            # --- CHIAMA LA FUNZIONE DEDICATA PER IL CALCOLO (V8.0) ---
            # Passa i parametri K, epsilon e entity_analysis
            df_final[discover_score_col] = calculate_discover_score(
                rank_series, score_4h, score_7d,
                k_penalty=V7D_PENALTY_K,
                epsilon=V7D_PENALTY_EPSILON,
                entity_analysis=entity_analysis
            )
            # ---------------------------------------------------------

            print(f"       Colonna '{discover_score_col}' calcolata con formula V8.0 (con analisi semantica).")
        else:
            missing_cols = [col for col in [score_4h_col, score_7d_col, 'Rank'] if col not in df_final.columns]
            warnings.warn(f"Colonne necessarie ({', '.join(missing_cols)}) mancanti, impossibile calcolare Discover_Score V8.0.", UserWarning)
            if discover_score_col not in df_final.columns:
                 df_final[discover_score_col] = 0.0
        # ========================================================================
        # --- Fine Sezione Calcolo Heuristic Discover Score ---
        # ========================================================================

        # --- 5. Ordinamento Finale per Discover Score ---
        if discover_score_col in df_final.columns:
             df_final = df_final.sort_values(by=discover_score_col, ascending=False)
             print(f"\n    DataFrame ordinato per '{discover_score_col}'.")
        else:
             print(f"\n    ATTENZIONE: Colonna '{discover_score_col}' non trovata per l'ordinamento.")

        # --- 6. Salva il DataFrame finale come CSV (per backup) ---
        try:
            # Aggiorna nome file per riflettere la versione
            backup_filename = "final_data_v8.0.csv"
            df_final.to_csv(os.path.join(CHECKPOINT_DIR, backup_filename), index=False, encoding='utf-8-sig')
            print(f"\nDataFrame finale salvato come backup in: {os.path.join(CHECKPOINT_DIR, backup_filename)}")
        except Exception as e:
            print(f"\n!!! Errore salvataggio CSV finale: {e} !!!")

        # --- 7. Genera l'output HTML ---
        runtime_info['end_time'] = time.time()
        html_result = generate_html_output(df_final, runtime_info, entity_analysis)

        if html_result:
            print("\nGenerazione output HTML completata con successo.")
        else:
            print("\n!!! Errore durante la generazione dell'output HTML. !!!")

        # --- 8. Stampa Top N Finale (Ordinato per Discover Score) ---
        print(f"\n--- Top {TOP_N_FINAL_DISPLAY} Entità (Ordinate per Discover Score Heuristico V8.0) ---")
        cols_to_show = []
        if discover_score_col in df_final.columns: cols_to_show.append(discover_score_col)
        if 'Rank' in df_final.columns: cols_to_show.append('Rank')
        if 'Entita' in df_final.columns: cols_to_show.append('Entita')

        if FETCH_VOLUME_CONTEXT:
            for tf in CONTEXT_TIMEFRAMES:
                col_name = f'Score_Avg_{tf}'
                if col_name in df_final.columns:
                    cols_to_show.append(col_name)

        try:
            pd.set_option('display.max_rows', TOP_N_FINAL_DISPLAY + 5); pd.set_option('display.width', 180); pd.set_option('display.float_format', '{:.3f}'.format)
            print(df_final[cols_to_show].head(TOP_N_FINAL_DISPLAY).to_string(index=False))
        except KeyError as ke: print(f"Errore colonne stampa finale: {ke}. Disponibili: {df_final.columns.tolist()}")
        except Exception as e_print: print(f"Errore imprevisto durante la stampa finale: {e_print}")
        finally: pd.reset_option('display.max_rows'); pd.reset_option('display.width'); pd.reset_option('display.float_format')

    except Exception as main_exc: print(f"\n!!! ERRORE CRITICO SCRIPT: {type(main_exc).__name__} - {main_exc} !!!"); traceback.print_exc()
    finally: # Stampa statistiche proxy
        print("\n--- Statistiche Proxy Rilevate (Fine Esecuzione) ---")
        try:
            ps = proxy_manager.get_proxy_stats_summary(); print(f"Successi: {ps.get('total_success', 0)}"); print(f"Fail 429: {ps.get('total_fail_429', 0)}"); print(f"Fail Proxy/Timeout/5xx: {ps.get('total_fail_proxy_timeout', 0)}"); print(f"Fail Altri/Parse: {ps.get('total_fail_other_parse', 0)}")
            tfp = ps.get('top_failing_proxies', {});
            if tfp: print("\nTop Proxy con Fallimenti:"); [print(f"    - {pid}: Succ:{d['success']}, Fails Cons:{d['consecutive_fails']} (429:{d['fail_429']}, P/T:{d['fail_proxy/timeout']}, O/P:{d['fail_other/parse']})") for pid, d in tfp.items()]
            else: print("\nNessun fallimento proxy.")
        except Exception as stats_exc: print(f"Errore stampa statistiche proxy: {stats_exc}")
        
        # Chiudi Claude Analyzer se è stato inizializzato
        if CLAUDE_ANALYZER:
            try:
                CLAUDE_ANALYZER.close()
                print("Claude Analyzer chiuso correttamente.")
            except Exception as claude_close_err:
                print(f"Errore chiusura Claude Analyzer: {claude_close_err}")
                
        main_end_time = time.time(); total_duration = main_end_time - main_start_time
        print(f"\n--- Script completato in {total_duration:.2f} secondi ({total_duration/60:.2f} minuti) ---")
