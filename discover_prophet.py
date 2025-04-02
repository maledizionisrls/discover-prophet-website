# -*- coding: utf-8 -*-

# 🚀 Script Ottimizzato per Google Trends - V7.9.3 (Saturation Retry Increased Patience)
#     Lavora direttamente con i file nella cartella 'docs'.
#     Eliminata la cartella 'templates' e la logica di copia file.
#     Genera solo 'docs/data.js'.
#     Integra OpenAI per estrarre entità chiave dalle query di tendenza.
#     Legge la chiave API OpenAI dalla variabile d'ambiente OPENAI_API_KEY.
#     **Formula V7.9 per Discover Score (Numeratore Pesato).**
#     **Corretto: Calcolo Saturazione usa Headers specifici da ConsistentBrowserProfile.**
#     **Migliorato: Retry robusto, logging dettagliato e URL google.com per Saturazione.**
#     **Fix: Evita crash dovuto a pd.reset_option('all') senza matplotlib.**
#     **Update: Aumentati tentativi e tempi di backoff per scraping saturazione.**

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
# import logging # Opzionale: per un logging più avanzato

# --- Import per Scraping Saturazione ---
try:
    from curl_cffi.requests import Session as ImpersonateSession, get as impersonate_get, RequestsError
    print("[INFO] Libreria curl_cffi importata con successo.")
except ImportError:
    print("[WARN] !!! ATTENZIONE: Libreria 'curl_cffi' non trovata. Installala con 'pip install curl_cffi'. La funzione di saturazione non funzionerà. !!!")
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
    print("[WARN] FakeUserAgentError non trovato, FakeUserAgent potrebbe non funzionare come previsto.")
    FakeUserAgentError = Exception
    class UserAgent:
        def __init__(self, *args, **kwargs): warnings.warn("Libreria fake-useragent non trovata. Uso UA di fallback.", UserWarning)
        @property
        def chrome(self): return self._fallback_ua()
        @property
        def random(self): return self._fallback_ua()
        def _fallback_ua(self): return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
# --- Fine Gestione ---

# --- Ignora Warning Specifici ---
warnings.filterwarnings("ignore", category=FutureWarning, module='pytrends')
warnings.filterwarnings("ignore", category=UserWarning, message='Setting null property')
warnings.filterwarnings("ignore", message="urllib3 v2 only supports OpenSSL 1.1.1+")
warnings.filterwarnings("ignore", message="data_manager option is deprecated") # Ignora warning pandas da reset_option specifico
warnings.filterwarnings("ignore", message="use_inf_as_na option is deprecated") # Ignora warning pandas da reset_option specifico


# ==============================================================================
# ==================== SEZIONE PARAMETRI CONFIGURABILI =========================
# ==============================================================================

# --- Parametri Principali ---
TOP_N_FINAL_DISPLAY = 50
OUTPUT_FILENAME = "index.html" # Nome file principale in docs/
OUTPUT_DIR = "docs" # Directory di output E sorgente per file statici
CHECKPOINT_DIR = "checkpoint_data" # Directory checkpoint
SAVE_FAILED_SERP_HTML = os.getenv("SAVE_FAILED_SERP", "false").lower() == "true" # Salva HTML su Parse Fail (200) o Block?

# --- Parametri Contesto di Volume ---
FETCH_VOLUME_CONTEXT = True
N_PROCESS_FOR_CONTEXT = 50 # Numero di entità TOP (dopo estrazione iniziale) per cui calcolare il contesto
CONTEXT_TIMEFRAMES = ['now 1-H', 'now 4-H', 'now 7-d']
CONTEXT_N_RUNS = 2 # Numero di volte che si ripete la raccolta contesto per mediare

# --- Parametri Integrazione OpenAI ---
FETCH_OPENAI_ENTITIES = True
N_PROCESS_FOR_OPENAI = N_PROCESS_FOR_CONTEXT # Usa lo stesso numero di entità del contesto
OPENAI_MODEL = "gpt-4o"
OPENAI_MAX_RETRIES = 3
OPENAI_REQUEST_TIMEOUT = 30
MAX_OPENAI_THREADS = 10

# --- Parametri Calcolo Saturazione (Retry Increased Patience) ---
FETCH_SATURATION_SCORE = True # ATTIVA/DISATTIVA il calcolo della saturazione
N_PROCESS_FOR_SATURATION = TOP_N_FINAL_DISPLAY # Calcola solo per le top N finali DOPO ordinamento Discover Score
MAX_THREADS_SATURATION = 15 # Numero di thread per lo scraping SERP
SATURATION_IMPERSONATE_BROWSER = 'chrome124' # Profilo browser per curl_cffi
SATURATION_REQUEST_TIMEOUT = 45 # Timeout per singola richiesta SERP
# --- Parametri Retry Saturazione AUMENTATI ---
SATURATION_MAX_RETRIES_PER_KEYWORD = 7 # Tentativi MASSIMI per singola keyword (ERA 5)
SATURATION_INITIAL_BACKOFF = 5.0 # Backoff iniziale tra tentativi (ERA 3.0)
SATURATION_BACKOFF_MULTIPLIER = 1.8 # Moltiplicatore backoff (ERA 1.5)
SATURATION_MAX_BACKOFF = 90.0 # Backoff massimo (ERA 60.0)
# --- Fine Parametri Retry Aumentati ---
SATURATION_SEARCH_URL_BASE = "https://www.google.com" # Usa google.com invece di .it

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
            print(f"[INFO] Client OpenAI inizializzato (Modello: {OPENAI_MODEL}).")
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
PROXY_USE_COOLDOWN = 7 # Cooldown base
PROXY_FAILURE_THRESHOLD = 3 # Fallimenti consecutivi prima di aumentare cooldown
PROXY_FAILURE_COOLDOWN_MULTIPLIER = 1.6 # Moltiplicatore per cooldown esteso (AUMENTATO LEGGERMENTE)
MAX_THREADS_PYTRENDS = 80

# --- Parametri Ritardi e Pause ---
MIN_DELAY_BETWEEN_REQUESTS = 0 # Delay per Pytrends/Estrazione iniziale
MAX_DELAY_BETWEEN_REQUESTS = 2.0 # Delay per Pytrends/Estrazione iniziale
ENTITY_EXTRACTION_INITIAL_WAIT = 5 # Attesa iniziale per estrazione entità

# --- Parametri Gestione Errori e Tentativi ---
ENTITY_EXTRACTION_MAX_RETRIES = 15
MAX_RETRIES_PYTRENDS_CONTEXT = 8
INITIAL_BACKOFF_SECONDS_429 = 5 # Backoff Pytrends 429
BACKOFF_MULTIPLIER_429 = 1.2 # Moltiplicatore Pytrends 429
MAX_WAIT_SECONDS = 20 # Attesa massima generica

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

# --- Setup Logging Semplificato ---
# Configurabile con variabili d'ambiente se necessario
LOG_LEVEL = os.getenv("SCRIPT_LOG_LEVEL", "INFO").upper()

def log_print(level, message):
    """ Stampa messaggi con un livello (INFO, WARN, ERROR, DEBUG) """
    if LOG_LEVEL == "DEBUG" or \
       (LOG_LEVEL == "INFO" and level in ["INFO", "WARN", "ERROR"]) or \
       (LOG_LEVEL == "WARN" and level in ["WARN", "ERROR"]) or \
       (LOG_LEVEL == "ERROR" and level == "ERROR"):
        timestamp = datetime.now().strftime('%H:%M:%S')
        print(f"[{timestamp} {level}] {message}")

# Esempio Uso: log_print("INFO", "Messaggio informativo")
#             log_print("WARN", "Attenzione, possibile problema")
#             log_print("ERROR", "Errore grave!")
#             log_print("DEBUG", "Dettaglio per debug") # Visibile solo se LOG_LEVEL="DEBUG"

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
log_print("INFO", f"GEO usati: {len(country_codes)}.")
proxies_list_with_geo = []
for geo in country_codes:
    proxy_str = proxy_base_string.format(geo=geo.lower()); parts = proxy_str.split(':')
    if len(parts) == 4:
        match = re.search(r'-country-([a-z]{2})', parts[2], re.IGNORECASE)
        if match: proxies_list_with_geo.append({"proxy": proxy_str, "geo": match.group(1).upper()})
if not proxies_list_with_geo: raise ValueError("!!! Lista proxy VUOTA dopo filtro! !!!")
log_print("INFO", f"Generati {len(proxies_list_with_geo)} proxy con geo.")

# --- Mapping Geo -> Lingua/Timezone ---
COUNTRY_LOCALE_MAP = {'IT': {'hl': 'it-IT', 'tz': 60}, 'US': {'hl': 'en-US', 'tz': -300}, 'GB': {'hl': 'en-GB', 'tz': 0}, 'FR': {'hl': 'fr-FR', 'tz': 60}, 'DE': {'hl': 'de-DE', 'tz': 60}, 'ES': {'hl': 'es-ES', 'tz': 60}, 'JP': {'hl': 'ja-JP', 'tz': 540}, 'AU': {'hl': 'en-AU', 'tz': 600}, 'CA': {'hl': 'en-CA', 'tz': -300}, 'BR': {'hl': 'pt-BR', 'tz': -180}, 'IN': {'hl': 'en-IN', 'tz': 330}, 'MA': {'hl': 'fr-MA', 'tz': 0}, 'HN': {'hl': 'es-HN', 'tz': -360}, 'BS': {'hl': 'en-BS', 'tz': -300}, 'TO': {'hl': 'en-TO', 'tz': 780}, 'BE': {'hl': 'fr-BE', 'tz': 60}, 'OM': {'hl': 'ar-OM', 'tz': 240}, 'GM': {'hl': 'en-GM', 'tz': 0}, 'LU': {'hl': 'fr-LU', 'tz': 60}, 'BN': {'hl': 'ms-BN', 'tz': 480}, 'SZ': {'hl': 'en-SZ', 'tz': 120}, 'MN': {'hl': 'mn-MN', 'tz': 480}, 'EG': {'hl': 'ar-EG', 'tz': 120}, 'AT': {'hl': 'de-AT', 'tz': 60}, 'IE': {'hl': 'en-IE', 'tz': 0}, 'KW': {'hl': 'ar-KW', 'tz': 180}, 'MM': {'hl': 'my-MM', 'tz': 390}, 'LV': {'hl': 'lv-LV', 'tz': 120}, 'RW': {'hl': 'rw-RW', 'tz': 120}, 'KR': {'hl': 'ko-KR', 'tz': 540}, 'TJ': {'hl': 'tg-TJ', 'tz': 300}, 'MH': {'hl': 'en-MH', 'tz': 720}, 'ZA': {'hl': 'en-ZA', 'tz': 120}, 'FI': {'hl': 'fi-FI', 'tz': 120}, 'DEFAULT': {'hl': 'en-US', 'tz': 0}}
def get_locale_for_geo(geo_code): return COUNTRY_LOCALE_MAP.get(geo_code.upper(), COUNTRY_LOCALE_MAP['DEFAULT'])

# --- Classi AdvancedProxyManager e ConsistentBrowserProfile (Migliorato Release Cooldown) ---
class AdvancedProxyManager:
    def __init__(self, proxy_geo_list, max_concurrent, cooldown_seconds): self.max_concurrent=max_concurrent; self.cooldown_seconds=cooldown_seconds; self.lock=threading.Lock(); self.all_proxies={i['proxy']: i['geo'] for i in proxy_geo_list}; self.available_proxies=deque(self.all_proxies.keys()); random.shuffle(list(self.available_proxies)); self.active_proxies={}; self.cooldown_proxies={}; self.proxy_consecutive_failures=defaultdict(int); self.proxy_stats=defaultdict(lambda: {"success":0,"fail_429":0,"fail_5xx":0,"fail_other":0,"fail_timeout":0,"fail_proxy_error":0,"fail_parse":0, "fail_block":0}); self.active_sessions={}; log_print("INFO", f"AdvProxyManager: {len(self.all_proxies)} proxies, MaxConc: {self.max_concurrent}, CD: {self.cooldown_seconds}s")
    def _check_cooldown(self): ct=time.time(); reactivate=[]; [reactivate.append(p) for p, et in list(self.cooldown_proxies.items()) if ct >= et]; [self.available_proxies.append(p) for p in reactivate if self.cooldown_proxies.pop(p,None)]
    def get_proxy(self):
        with self.lock:
            self._check_cooldown();
            if len(self.active_proxies)<self.max_concurrent and self.available_proxies:
                p_str=self.available_proxies.popleft(); geo=self.all_proxies[p_str]; self.active_proxies[p_str]=time.time(); p_url=get_proxy_url(p_str);
                try: prof=ConsistentBrowserProfile(geo)
                except Exception as e: log_print("WARN", f"Profilo err {geo}: {e}. Uso def."); prof=ConsistentBrowserProfile('DEFAULT')
                scr=None;
                try:
                    bcfg={'browser':'chrome','platform':prof.os if prof.os in ['windows','darwin','linux'] else 'windows','mobile':False,'desktop':True,'user_agent':prof.user_agent}
                    scr=cloudscraper.create_scraper(browser=bcfg,delay=random.uniform(0.5,1.5))
                    scr.headers.update(prof.get_headers());
                except Exception as e:
                    # log_print("DEBUG", f"Scraper err {geo} ({type(e).__name__}). Uso base.") # Meno verboso
                    scr=requests.Session() # Crea una sessione base solo per placeholder
                    scr.headers.update(prof.get_headers());
                if p_url: scr.proxies={'http':p_url,'https':p_url} # Imposta proxy anche sulla sessione placeholder
                # Memorizza tutto ciò che serve: scraper (anche se placeholder), profilo e url proxy formattato
                self.active_sessions[p_str]={'scraper':scr, 'profile':prof, 'proxy_url': p_url}
                log_print("DEBUG", f"PROXY GET: Assegnato {geo} ({p_str[-10:]})")
                return p_str, geo, self.active_sessions[p_str] # Restituisce tutto il necessario
            else: return None
    def get_pytrends_session(self,p_str,prof): p_url=get_proxy_url(p_str); p_list=[p_url] if p_url else []; params=prof.get_pytrends_params(); return TrendReq(hl=params['hl'],tz=params['tz'],timeout=(PYTRENDS_CONNECT_TIMEOUT,PYTRENDS_READ_TIMEOUT),retries=PYTRENDS_RETRIES,backoff_factor=PYTRENDS_BACKOFF_FACTOR,proxies=p_list)
    def release_proxy(self,p_str,success=True,status_code=None,error_type=None):
        with self.lock:
            if p_str not in self.all_proxies: log_print("WARN", f"Release proxy non gestito: {p_str}"); return
            if p_str in self.active_sessions:
                s_data=self.active_sessions.pop(p_str)
                if isinstance(s_data.get('scraper'), (cloudscraper.CloudScraper, requests.Session)):
                    try: s_data['scraper'].close()
                    except: pass # Ignora errori chiusura
            if p_str in self.active_proxies: del self.active_proxies[p_str]
            cd_end=time.time()+self.cooldown_seconds; geo=self.all_proxies.get(p_str,'N/A');
            error_type_str = str(error_type) if error_type else "" # Converti a stringa per sicurezza

            if success:
                self.proxy_stats[p_str]["success"]+=1; self.proxy_consecutive_failures[p_str]=0
                log_print("DEBUG", f"PROXY REL: Successo {geo} ({p_str[-10:]})")
            else:
                self.proxy_consecutive_failures[p_str]+=1; fails=self.proxy_consecutive_failures[p_str];
                # Categorizzazione errori migliorata per cooldown differenziato
                if error_type_str.startswith('429') or status_code==429:
                    self.proxy_stats[p_str]["fail_429"]+=1; cd_end=time.time()+(self.cooldown_seconds*5) # Cooldown più lungo per 429
                    log_print("DEBUG", f"PROXY REL: Fail 429 {geo} ({p_str[-10:]}). Fails: {fails}. CD: {cd_end-time.time():.0f}s")
                elif 'Timeout' in error_type_str:
                    self.proxy_stats[p_str]["fail_timeout"]+=1; cd_end=time.time()+(self.cooldown_seconds*2)
                    log_print("DEBUG", f"PROXY REL: Fail Timeout {geo} ({p_str[-10:]}). Fails: {fails}. CD: {cd_end-time.time():.0f}s")
                elif 'ProxyError' in error_type_str or 'ConnectionError' in error_type_str or 'Connect tunnel failed' in error_type_str or (isinstance(status_code,int) and 500<=status_code<=599):
                    self.proxy_stats[p_str]["fail_proxy_error"]+=1; cd_end=time.time()+(self.cooldown_seconds*3)
                    log_print("DEBUG", f"PROXY REL: Fail Proxy/Conn {geo} ({p_str[-10:]}). Fails: {fails}. CD: {cd_end-time.time():.0f}s")
                elif 'parse_fail' in error_type_str or 'empty_data' in error_type_str or 'Parse Fail (200' in error_type_str:
                    self.proxy_stats[p_str]["fail_parse"]+=1
                    # Se è un parse fail 200, consideralo grave come un blocco
                    cd_mult = 4.5 if 'Parse Fail (200' in error_type_str else 1.5
                    cd_end=time.time()+(self.cooldown_seconds * cd_mult)
                    log_print("DEBUG", f"PROXY REL: Fail Parse {geo} ({p_str[-10:]}). ParseFail200: {'200' in error_type_str}. Fails: {fails}. CD: {cd_end-time.time():.0f}s")
                elif 'Redirect Blocco' in error_type_str or 'Verifica Connessione' in error_type_str or 'Consent' in error_type_str or 'Block Page Detected' in error_type_str or 'Query Automatiche' in error_type_str:
                     self.proxy_stats[p_str]["fail_block"]+=1 # Nuova categoria per blocchi
                     cd_end=time.time()+(self.cooldown_seconds*5.5) # Cooldown molto lungo per blocco rilevato
                     log_print("DEBUG", f"PROXY REL: Fail BLOCK {geo} ({p_str[-10:]}). Fails: {fails}. CD: {cd_end-time.time():.0f}s")
                else: # Altri errori (es. generici, sessione pytrends)
                     self.proxy_stats[p_str]["fail_other"]+=1; cd_end=time.time()+(self.cooldown_seconds*1.2)
                     log_print("DEBUG", f"PROXY REL: Fail OTHER {geo} ({p_str[-10:]}). Type: {error_type_str}. Fails: {fails}. CD: {cd_end-time.time():.0f}s")

                # Aumenta cooldown esponenzialmente se i fallimenti consecutivi superano la soglia
                if fails>=PROXY_FAILURE_THRESHOLD:
                    mult = 1 + (PROXY_FAILURE_COOLDOWN_MULTIPLIER**(fails - PROXY_FAILURE_THRESHOLD + 1)) # Esponenziale
                    add_cd=self.cooldown_seconds * mult
                    ct=time.time(); base_dur=cd_end-ct; final_dur=min(base_dur+add_cd, 3600) # Limita cooldown massimo a 1 ora
                    cd_end=ct+final_dur;
                    log_print("INFO", f"Proxy {geo} ({p_str[-10:]}) ha {fails} fails cons. CD ESTESO a {final_dur:.0f}s.")
            self.cooldown_proxies[p_str]=cd_end

    def get_proxy_stats_summary(self):
        with self.lock:
            ts=sum(s.get("success",0) for s in self.proxy_stats.values())
            tf429=sum(s.get("fail_429",0) for s in self.proxy_stats.values())
            tf_block=sum(s.get("fail_block",0) for s in self.proxy_stats.values()) # Conta blocchi
            tfp=sum(s.get("fail_proxy_error",0)+s.get("fail_5xx",0)+s.get("fail_timeout",0) for s in self.proxy_stats.values())
            tfo=sum(s.get("fail_other",0)+s.get("fail_parse",0) for s in self.proxy_stats.values())
            fpd={};
            for p, s in self.proxy_stats.items():
                geo=self.all_proxies.get(p,'N/A')
                f429=s.get("fail_429",0); fblk=s.get("fail_block",0)
                fp=s.get("fail_proxy_error",0)+s.get("fail_5xx",0)+s.get("fail_timeout",0)
                fo=s.get("fail_other",0)+s.get("fail_parse",0); tf=f429+fp+fo+fblk;
                if tf>0:
                    fpd[f"{geo} ({p[-10:]})"]={
                        "success":s.get("success",0),
                        "fail_429":f429,
                        "fail_block":fblk,
                        "fail_proxy/timeout":fp,
                        "fail_other/parse":fo,
                        "consecutive_fails":self.proxy_consecutive_failures.get(p,0)
                    }
            sfp=dict(sorted(fpd.items(),key=lambda i:sum(i[1][k] for k in i[1] if k.startswith('fail')),reverse=True));
            return {
                "total_success":ts,
                "total_fail_429":tf429,
                "total_fail_block":tf_block, # Aggiunto
                "total_fail_proxy_timeout":tfp,
                "total_fail_other_parse":tfo,
                "top_failing_proxies":dict(list(sfp.items())[:15])
            }

class ConsistentBrowserProfile:
    BROWSER_TYPES=['chrome'];OS_MAP={'WINDOWS':['windows'],'MACOS':['darwin'],'LINUX':['linux']};GEO_OS_PREFERENCE={'US':['WINDOWS','MACOS'],'CA':['WINDOWS','MACOS'],'GB':['WINDOWS','MACOS'],'FR':['WINDOWS','MACOS'],'DE':['WINDOWS','MACOS'],'IT':['WINDOWS','MACOS'],'ES':['WINDOWS','MACOS'],'AU':['WINDOWS','MACOS'],'JP':['WINDOWS','MACOS'],'BR':['WINDOWS'],'IN':['WINDOWS'],'DEFAULT':['WINDOWS','MACOS','LINUX']};FALLBACK_USER_AGENT="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
    def __init__(self,geo_code):
        if not geo_code or not isinstance(geo_code,str): geo_code='DEFAULT'
        else: geo_code=geo_code.upper()
        self.geo_code=geo_code; self.locale_info=get_locale_for_geo(self.geo_code); pos_os=self.GEO_OS_PREFERENCE.get(self.geo_code,self.GEO_OS_PREFERENCE['DEFAULT']); os_g=random.choice(pos_os); self.os=random.choice(self.OS_MAP.get(os_g,['windows'])); self.browser='chrome'; self.user_agent=self.FALLBACK_USER_AGENT;
        try:
            # Usa fake-useragent se disponibile
            ua_gen=UserAgent(use_external_data=False, browsers=['chrome'], os=[self.os] if self.os in ['windows','macos','linux'] else None)
            if self.os == 'windows': self.user_agent=ua_gen.chrome
            elif self.os == 'macos': self.user_agent=ua_gen.chrome # fake-useragent potrebbe non differenziare UA chrome per macos specificamente
            elif self.os == 'linux': self.user_agent=ua_gen.chrome # fake-useragent potrebbe non differenziare UA chrome per linux specificamente
            else: self.user_agent=ua_gen.chrome # Fallback
        except:
             # Fallback manuale se fake-useragent fallisce o non è installato
             chrome_version = f"{random.randint(120, 125)}.0.0.0"
             if self.os == 'windows':
                 self.user_agent = f"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/{chrome_version} Safari/537.36"
             elif self.os == 'macos':
                 self.user_agent = f"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/{chrome_version} Safari/537.36"
             elif self.os == 'linux':
                 self.user_agent = f"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/{chrome_version} Safari/537.36"
             else: # Fallback generico
                 self.user_agent = self.FALLBACK_USER_AGENT

        lang_base=self.locale_info['hl'].split('-')[0]; self.accept_language=f"{self.locale_info['hl']},{lang_base};q=0.9,en;q=0.8" # Lingua basata su geo
    def get_headers(self):
         # Genera header Sec-CH-UA basati sull'UA selezionato
         ua_lower = self.user_agent.lower()
         brand = "Google Chrome" if "chrome" in ua_lower else "Chromium"
         try:
             version_match = re.search(r"chrome/(\d+)", ua_lower)
             version = version_match.group(1) if version_match else "124" # Fallback version
         except: version = "124"

         sec_ch_ua = f'"{brand}";v="{version}", "Not-A.Brand";v="99", "Chromium";v="{version}"' # Formato comune

         return {
             'User-Agent':self.user_agent,
             'Accept-Language':self.accept_language, # Usa lingua da geo
             'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
             'Accept-Encoding':'gzip, deflate, br, zstd', # Aggiunto zstd
             'Connection':'keep-alive',
             'Sec-CH-UA': sec_ch_ua, # Header CH UA dinamico
             'Sec-CH-UA-Mobile':'?0',
             'Sec-CH-UA-Platform': f'"{self.os.capitalize()}"', # Platform da OS rilevato
             'Sec-Fetch-Dest':'document',
             'Sec-Fetch-Mode':'navigate',
             'Sec-Fetch-Site':random.choice(['none','same-origin']), #'cross-site' è meno comune per navigazione diretta
             'Sec-Fetch-User':'?1',
             'Upgrade-Insecure-Requests':'1',
             'Cache-Control':'max-age=0',
             # 'Referer': f'{SATURATION_SEARCH_URL_BASE}/' # Aggiunto referer base google.com (ora aggiunto dinamicamente in fetch_intitle...)
             }
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
    attempts = 0; current_wait = initial_wait; proxy_info, geo_code = None, None; log_print("INFO", f"Avvio estrazione lista entità ORDINATA (max {max_retries} tentativi)...")
    while attempts < max_retries:
        attempts += 1; log_print("INFO", f"Tentativo {attempts}/{max_retries} per estrarre entità ordinate...")
        proxy_info, status_code, error_type_str, release_success = None, None, None, False; scraper, session_data, geo_code = None, None, None
        try:
            get_proxy_attempts = 0
            while proxy_info is None and get_proxy_attempts < 5:
                get_proxy_attempts += 1; proxy_info = proxy_manager.get_proxy();
                if proxy_info is None: time.sleep(random.uniform(2, 5)) # Attendi solo se non trovi proxy
            if proxy_info is None: log_print("WARN", "Impossibile ottenere proxy per estrazione iniziale. Attesa..."); time.sleep(min(current_wait * 1.5, MAX_WAIT_SECONDS / 2)); current_wait *= 1.5; continue
            proxy_str, geo_code, session_data = proxy_info; scraper = session_data['scraper']; log_print("DEBUG", f"Tentativo estrazione con proxy: {geo_code} ({proxy_str[-10:]})")
            time.sleep(random.uniform(0.5, 1.5)); target_url = "https://trends.google.com/tv/?geo=IT"; res = None; max_internal_retries = 2
            for internal_attempt in range(max_internal_retries):
                try:
                    res = scraper.get(target_url, timeout=(ENTITY_EXTRACTION_CONNECT_TIMEOUT, ENTITY_EXTRACTION_READ_TIMEOUT))
                    if res.status_code == 200: break
                    else: status_code = res.status_code; log_print("WARN", f"Estrazione iniziale Non-200: {status_code}, Retry {internal_attempt + 1}/{max_internal_retries}"); time.sleep(1.5 if internal_attempt < max_internal_retries - 1 else 0)
                except (requests.exceptions.Timeout, socket.timeout) as e_timeout_internal:
                    log_print("WARN", f"Estrazione iniziale Timeout interno req {internal_attempt + 1}/{max_internal_retries}: {type(e_timeout_internal).__name__}"); res = None; status_code = None
                    if internal_attempt < max_internal_retries - 1: time.sleep(2)
                    else: log_print("ERROR", f"Estrazione iniziale falliti tutti retry interni (Timeout)."); error_type_str = 'Timeout'; raise e_timeout_internal # Propaga errore specifico
                except (requests.exceptions.ProxyError, requests.exceptions.ConnectionError) as e_proxy_internal:
                    log_print("WARN", f"Estrazione iniziale Proxy/Conn interno req {internal_attempt + 1}/{max_internal_retries}: {type(e_proxy_internal).__name__}"); res = None; status_code = None
                    if internal_attempt < max_internal_retries - 1: time.sleep(2)
                    else: log_print("ERROR", f"Estrazione iniziale falliti tutti retry interni (Proxy/Conn)."); error_type_str = 'ProxyError'; raise e_proxy_internal # Propaga errore specifico
                except Exception as e_int:
                    log_print("ERROR", f"Estrazione iniziale Errore interno req {internal_attempt + 1}/{max_internal_retries}: {type(e_int).__name__} - {str(e_int)[:100]}"); res = None; status_code = None
                    if internal_attempt < max_internal_retries - 1: time.sleep(2)
                    else: log_print("ERROR", f"Estrazione iniziale falliti tutti retry interni (Exception)."); error_type_str = 'OtherError'; raise e_int # Propaga errore generico
            if res is None or res.status_code != 200:
                    if status_code is None: status_code = res.status_code if res else None # Prova a recuperare status
                    if error_type_str is None: error_type_str = f"FailedAfterRetry_{status_code}" # Imposta un tipo di errore se non già definito
                    raise Exception(f"Req estrazione iniziale fallita dopo retry interni. Status: {status_code}, ErrType: {error_type_str}")

            status_code = res.status_code; # Status code è sicuramente 200 qui
            error_type_str = None # Resetta tipo errore, la richiesta è andata a buon fine
            soup = BeautifulSoup(res.text, 'html.parser'); scripts = soup.find_all('script'); found_data = False; ordered_entities_found = []
            for script in scripts:
                if script.string and 'AF_initDataCallback' in script.string and 'key: \'ds:0\'' in script.string:
                    try:
                        match = re.search(r"data:(.*), sideChannel:", script.string, re.DOTALL)
                        if match:
                            json_text = match.group(1).strip().rstrip(',')
                            data = json.loads(json_text)
                            if isinstance(data, list) and len(data) > 1 and isinstance(data[1], list):
                                entities = [item[0] for item in data[1] if isinstance(item, list) and item and isinstance(item[0], str)]
                                if entities:
                                    ordered_entities_found = entities; found_data = True; break # Successo, esci
                    except json.JSONDecodeError as e_json:
                        log_print("WARN", f"Estrazione iniziale Parse JSON err (Proxy: {geo_code}): {e_json}"); error_type_str = 'parse_fail' # Errore JSON, ma non necessariamente colpa del proxy
                        break # Inutile continuare a ciclare script se uno è corrotto
                    except Exception as e_parse:
                        log_print("WARN", f"Estrazione iniziale Parse Data Structure err (Proxy: {geo_code}): {e_parse}"); error_type_str = 'parse_fail'
                        break # Errore inaspettato nell'estrazione dati
            if found_data and ordered_entities_found:
                log_print("INFO", f"Estratte {len(ordered_entities_found)} entità ordinate via {geo_code}."); release_success = True; return ordered_entities_found
            else:
                # Se non ha trovato dati o entità, considera un fallimento di parsing
                log_print("WARN", f"Estrazione iniziale Status 200 ma dati non trovati/parsati via {geo_code}."); error_type_str = 'parse_fail'; # Imposta errore per release proxy
                wait_time = min(current_wait * 1.5, MAX_WAIT_SECONDS / 2); time.sleep(wait_time); current_wait = wait_time * 1.2
        except Exception as e:
            # Cattura eccezioni sollevate dai tentativi interni o dalla richiesta iniziale
            if error_type_str is None: error_type_str = type(e).__name__ # Imposta tipo errore se non già definito
            log_print("ERROR", f"Errore estrazione iniziale (Tentativo {attempts}, Proxy: {geo_code}): {error_type_str}: {e}");
            # traceback.print_exc(); # Abilitare per debug dettagliato
            wait_time = min(current_wait * 1.2, MAX_WAIT_SECONDS / 2); time.sleep(wait_time); current_wait = wait_time * 1.2
            # Non re-impostare error_type_str qui, usa quello già determinato o dal tipo eccezione
            if isinstance(e, (requests.exceptions.ProxyError, requests.exceptions.ConnectionError)): error_type_str = 'ProxyError'
            elif isinstance(e, requests.exceptions.Timeout): error_type_str = 'Timeout'
            # status_code potrebbe essere già stato impostato, non sovrascriverlo
            if 'res' not in locals() or res is None: status_code = None # Assicurati che status_code sia None se res non esiste
        finally:
            if proxy_info:
                # Usa l'error_type_str definito nel blocco try o except
                proxy_manager.release_proxy(proxy_info[0], success=release_success, status_code=status_code, error_type=error_type_str); proxy_info = None
    log_print("ERROR", f"!!! Estrazione entità ORDINATE fallita dopo {max_retries} tentativi. !!!"); return None

# --- Funzione get_trends_scores (Invariata) ---
def get_trends_scores(keywords, timeframe):
    """Ottiene i punteggi medi da Pytrends per un gruppo di keyword e timeframe."""
    attempts = 0; current_backoff_429 = INITIAL_BACKOFF_SECONDS_429; current_backoff_other = 3.0; start_time = time.time()
    proxy_info, pytrends, geo_code = None, None, None
    max_proxy_attempts = min(len(proxy_manager.all_proxies) // 2, MAX_RETRIES_PYTRENDS_CONTEXT * 2); proxy_attempts_set = set()
    kw_list_str = ",".join(sorted(keywords)); kw_hash = hashlib.md5(kw_list_str.encode()).hexdigest()[:6]
    log_print("DEBUG", f"[CTX KW:{kw_hash} TF:{timeframe}] Inizio richiesta per {len(keywords)} keywords.")
    while attempts < MAX_RETRIES_PYTRENDS_CONTEXT and len(proxy_attempts_set) < max_proxy_attempts: # Usa retry contesto
        attempts += 1; proxy_info, status_code, error_type_str, release_success = None, None, None, False; pytrends, session_data, geo_code = None, None, None
        try:
            get_proxy_attempts = 0
            while proxy_info is None and get_proxy_attempts < 5:
                get_proxy_attempts += 1; proxy_info = proxy_manager.get_proxy();
                if proxy_info is None: time.sleep(random.uniform(2, 5))
            if proxy_info is None: log_print("WARN", f"[CTX KW:{kw_hash} T{attempts}] No proxy for context. Skip."); time.sleep(min(current_backoff_other * 1.5, MAX_WAIT_SECONDS / 2)); current_backoff_other *= 1.2; continue
            proxy_str, geo_code, session_data = proxy_info
            if proxy_str in proxy_attempts_set: proxy_manager.release_proxy(proxy_str, success=False, error_type="duplicato_interno"); proxy_info = None; continue # Rilascia duplicato
            proxy_attempts_set.add(proxy_str); profile = session_data['profile']
            log_print("DEBUG", f"[CTX KW:{kw_hash} T{attempts}] Using proxy {geo_code} ({proxy_str[-10:]})")
            try: pytrends = proxy_manager.get_pytrends_session(proxy_str, profile)
            except Exception as e_session: log_print("ERROR", f"[CTX KW:{kw_hash} T{attempts}] Session err (Proxy: {geo_code}): {e_session}"); error_type_str="pytrends_session_error"; raise # Rilancia l'errore per farlo catturare sotto e rilasciare il proxy
            base_delay = random.uniform(MIN_DELAY_BETWEEN_REQUESTS, MAX_DELAY_BETWEEN_REQUESTS);
            time.sleep(base_delay)
            shuffled = keywords.copy(); random.shuffle(shuffled); pytrends.build_payload(shuffled, timeframe=timeframe, geo='IT', gprop='')
            df = pytrends.interest_over_time()
            if df.empty or all(c == 'isPartial' for c in df.columns): log_print("WARN", f"[CTX KW:{kw_hash} T{attempts}] Empty data (Proxy: {geo_code})."); error_type_str = 'empty_data'; time.sleep(current_backoff_other); current_backoff_other = min(current_backoff_other * 1.2, MAX_WAIT_SECONDS / 4); release_success = False # Considera dato vuoto un fallimento 'soft'
            else: scores = df.drop(columns=['isPartial'], errors='ignore').mean().to_dict(); final = {kw: scores.get(kw, 0) for kw in keywords}; elapsed = time.time() - start_time; log_print("DEBUG", f"[CTX KW:{kw_hash} T{attempts}] Success via {geo_code}. Time: {elapsed:.1f}s"); release_success = True; return final # Esce qui se successo

        except requests.exceptions.HTTPError as http_err:
            status_code = http_err.response.status_code if hasattr(http_err, 'response') and http_err.response else None; log_print("WARN", f"[CTX KW:{kw_hash} T{attempts}] HTTP Err {status_code or 'N/A'} (Proxy: {geo_code}).")
            if status_code == 429: error_type_str = '429_related'; wait = min(current_backoff_429, MAX_WAIT_SECONDS); log_print("INFO", f"-> 429! Wait: {wait:.1f}s..."); time.sleep(wait); current_backoff_429 = min(current_backoff_429 * BACKOFF_MULTIPLIER_429, MAX_WAIT_SECONDS * 1.5)
            elif status_code and 500 <= status_code <= 599: error_type_str = 'ProxyError'; wait = min(current_backoff_other*1.5, MAX_WAIT_SECONDS/2); log_print("WARN", f"-> 5xx Err {status_code}. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
            else: error_type_str = f"HTTP_{status_code or 'N/A'}"; wait = min(current_backoff_other*1.5, MAX_WAIT_SECONDS/2); log_print("WARN", f"-> HTTP Err {status_code}. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
        except (requests.exceptions.Timeout, socket.timeout) as timeout_err: error_type_str = 'Timeout'; log_print("WARN", f"[CTX KW:{kw_hash} T{attempts}] Timeout (Proxy: {geo_code}): {timeout_err}"); wait = min(current_backoff_other*1.2, MAX_WAIT_SECONDS/2); log_print("WARN", f"-> Timeout. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = wait * 1.2
        except (requests.exceptions.ProxyError, requests.exceptions.ConnectionError, ConnectionRefusedError, OSError) as proxy_err:
            error_type_str = 'ProxyError'; status_code = 502 if '502' in str(proxy_err) else None
            log_print("WARN", f"[CTX KW:{kw_hash} T{attempts}] Proxy/Conn Err (Proxy: {geo_code}): {type(proxy_err).__name__} - {str(proxy_err)[:100]}")
            wait = min(current_backoff_other * 1.5, MAX_WAIT_SECONDS / 2); log_print("WARN", f"-> Proxy Err. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other * 1.5, MAX_WAIT_SECONDS)
        except Exception as e: # Cattura anche l'errore della sessione rilanciato
            msg = str(e); error_type_str = type(e).__name__; is_429 = '429' in msg or ('response' in dir(e) and hasattr(e.response, 'status_code') and e.response.status_code == 429) ; log_print("ERROR", f"[CTX KW:{kw_hash} T{attempts}] UNEXPECTED Err (Proxy: {geo_code}): {error_type_str}: {msg[:150]}...")
            if is_429: error_type_str = '429_related'; wait = min(current_backoff_429, MAX_WAIT_SECONDS); log_print("INFO", f"-> 429 DETECTED! Wait: {wait:.1f}s..."); time.sleep(wait); current_backoff_429 = min(current_backoff_429 * BACKOFF_MULTIPLIER_429, MAX_WAIT_SECONDS * 1.5)
            elif isinstance(e, AttributeError): error_type_str = 'parse_fail'; wait = min(current_backoff_other, MAX_WAIT_SECONDS/2); log_print("WARN", f"-> Attr Err. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
            else: wait = min(current_backoff_other, MAX_WAIT_SECONDS/2); log_print("WARN", f"-> Generic Err ({error_type_str}). Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
        finally:
            if proxy_info: proxy_manager.release_proxy(proxy_info[0], success=release_success, status_code=status_code, error_type=error_type_str); proxy_info = None
        # Se arrivi qui, significa che c'è stato un errore e il ciclo while continua (o finisce)
    # Se esci dal ciclo while senza successo
    log_print("ERROR", f"!!! [CTX KW:{kw_hash}] Failed {attempts} context attempts for {kw_list_str} ({timeframe}). Returning scores as 0.")
    return {kw: 0 for kw in keywords}

# --- Funzione get_all_context_scores (Invariata) ---
def get_all_context_scores(entities_subset, timeframe, max_threads=MAX_THREADS_PYTRENDS):
    """Ottiene i punteggi per tutte le entità in parallelo per un dato timeframe."""
    all_scores = {}; entity_list = list(set(entities_subset)); random.shuffle(entity_list)
    group_size = 3; groups = [entity_list[i:i+group_size] for i in range(0, len(entity_list), group_size)]
    log_print("INFO", f"\n--- Raccolta score CONTESTO: {timeframe} ({len(groups)} gruppi / {len(entity_list)} entità / {max_threads} threads) ---")
    sem = threading.Semaphore(max_threads)
    def get_trends_scores_safe(kw, tf):
        with sem:
            try: return get_trends_scores(kw, tf)
            except Exception as e: log_print("ERROR", f"\n!!! Exc safe ctx: {type(e).__name__} !!!"); return {k: 0 for k in kw}
    with concurrent.futures.ThreadPoolExecutor(max_workers=max_threads) as executor:
        future_to_group = {}; log_print("INFO", f"Sottomissione {len(groups)} task CONTESTO..."); time.sleep(0.5)
        for idx, group in enumerate(groups): future = executor.submit(get_trends_scores_safe, group, timeframe); future_to_group[future] = group; time.sleep(random.uniform(0.05, 0.15) if idx % 10 != 0 else random.uniform(0.3, 0.6))
        log_print("INFO", f"Attesa completamento task CONTESTO..."); completed_count, failed_count = 0, 0; failed_groups = []; total_tasks = len(groups)
        for future in tqdm(concurrent.futures.as_completed(future_to_group), total=total_tasks, desc=f"Context {timeframe}", unit="group"):
            completed_count += 1; group = future_to_group[future]
            try:
                result = future.result(timeout=MAX_WAIT_SECONDS * 2)
                if result and any(s > 0 for s in result.values()): all_scores.update(result)
                else: # Considera 0 e None come fallimenti parziali del gruppo
                    failed_count += 1; failed_groups.append(group); [all_scores.setdefault(e, 0) for e in group if e not in all_scores] # Aggiungi 0 solo se non già presente
            except concurrent.futures.TimeoutError: log_print("ERROR", f"\n!!! Timeout recupero risultato CONTESTO {group} ({timeframe}) !!!"); failed_count += 1; failed_groups.append(group); [all_scores.setdefault(e, 0) for e in group if e not in all_scores]
            except Exception as exc: log_print("ERROR", f"\n!!! Errore recupero CONTESTO {group} ({timeframe}): {exc} !!!"); failed_count += 1; failed_groups.append(group); [all_scores.setdefault(e, 0) for e in group if e not in all_scores]
        # Retry logic invariata
        if failed_groups and failed_count > 0 and failed_count < total_tasks:
            log_print("INFO", f"\n--- Riprovando {len(failed_groups)} gruppi CONTESTO falliti per {timeframe} ---");
            retry_failed_count = len(failed_groups); initial_failed_count = failed_count; retry_futures = {}
            with concurrent.futures.ThreadPoolExecutor(max_workers=max_threads // 2 + 1) as retry_executor:
                for group in failed_groups: time.sleep(random.uniform(0.5, 1.5)); future = retry_executor.submit(get_trends_scores_safe, group, timeframe); retry_futures[future] = group
                for future in tqdm(concurrent.futures.as_completed(retry_futures), total=len(failed_groups), desc=f"Retry Ctx {timeframe}", unit="group"):
                    group = retry_futures[future]
                    try:
                        result = future.result(timeout=MAX_WAIT_SECONDS * 2.5)
                        if result and any(s > 0 for s in result.values()): all_scores.update(result); retry_failed_count -= 1;
                    except Exception as retry_exc: log_print("WARN", f"Errore retry ctx {group}: {retry_exc}")
            failed_count = retry_failed_count
            log_print("INFO", f"--- Retry CONTESTO {timeframe} completato. Falliti finali: {failed_count} ---")
        else: log_print("INFO", f"--- Raccolta score CONTESTO {timeframe} completata. ({total_tasks} task, {failed_count} falliti) ---")
    # Assicura che tutte le entità richieste abbiano un valore (0 se non trovato)
    final_result = {entity: all_scores.get(entity, 0) for entity in entity_list}
    return final_result


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
            log_print("WARN", f"[OpenAI Timeout] Tentativo {attempts}/{max_retries} per '{trend_string}'. Attesa...")
            if attempts >= max_retries: log_print("ERROR", f"[OpenAI Timeout] Fallito dopo {max_retries} tentativi per '{trend_string}'."); return None
            time.sleep(3 * attempts)
        except openai.APIConnectionError as e:
            log_print("WARN", f"[OpenAI Connection Err] Tentativo {attempts}/{max_retries} per '{trend_string}': {e}. Attesa...")
            if attempts >= max_retries: log_print("ERROR", f"[OpenAI Connection Err] Fallito dopo {max_retries} tentativi per '{trend_string}'."); return None
            time.sleep(5 * attempts)
        except openai.RateLimitError:
            log_print("WARN", f"[OpenAI Rate Limit] Tentativo {attempts}/{max_retries} per '{trend_string}'. Attesa lunga...")
            if attempts >= max_retries: log_print("ERROR", f"[OpenAI Rate Limit] Fallito dopo {max_retries} tentativi per '{trend_string}'."); return None
            time.sleep(15 * attempts)
        except openai.APIStatusError as e:
            log_print("WARN", f"[OpenAI Status Err {e.status_code}] Tentativo {attempts}/{max_retries} per '{trend_string}': {e.message}. Attesa...")
            if attempts >= max_retries: log_print("ERROR", f"[OpenAI Status Err] Fallito dopo {max_retries} tentativi per '{trend_string}'."); return None
            if e.status_code >= 500 or e.status_code in [401, 403]: log_print("ERROR", f"Errore OpenAI {e.status_code} non recuperabile. Interruzione tentativi per '{trend_string}'."); return None
            time.sleep(5 * attempts)
        except Exception as e:
            log_print("ERROR", f"[OpenAI Generic Err] Tentativo {attempts}/{max_retries} per '{trend_string}': {type(e).__name__} - {e}")
            if attempts >= max_retries: log_print("ERROR", f"[OpenAI Generic Err] Fallito dopo {max_retries} tentativi per '{trend_string}'."); return None
            time.sleep(3 * attempts)
    log_print("ERROR", f"!!! [OpenAI FAIL] Falliti tutti i {max_retries} tentativi per '{trend_string}'")
    return None

def get_entities_with_openai(trend_list, max_workers=MAX_OPENAI_THREADS):
    """
    Ottiene le entità estratte da OpenAI per una lista di trend in parallelo.
    Restituisce un dizionario {trend_string: extracted_entities_string}.
    """
    if not client or not FETCH_OPENAI_ENTITIES:
        log_print("INFO", "\n--- Estrazione Entità OpenAI Saltata ---")
        return {}
    log_print("INFO", f"\n--- Avvio Estrazione Entità OpenAI ({len(trend_list)} trends, Max Workers: {max_workers}, Modello: {OPENAI_MODEL}) ---")
    extracted_entities_map = {}
    futures = {}
    sem = threading.Semaphore(max_workers)
    def call_openai_safe(trend):
        with sem:
            result = get_single_entity_openai(trend)
            return result
    with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
        log_print("INFO", f"Sottomissione {len(trend_list)} task a OpenAI...")
        for trend in trend_list:
            future = executor.submit(call_openai_safe, trend)
            futures[future] = trend
            time.sleep(random.uniform(0.02, 0.08))
        log_print("INFO", "Attesa completamento task OpenAI...")
        successful_count = 0
        total_tasks = len(trend_list)
        for future in tqdm(concurrent.futures.as_completed(futures), total=total_tasks, desc="Estrazione Entità OpenAI", unit="trend", ncols=100):
            trend = futures[future]
            result = '' # Default a stringa vuota
            try:
                result_raw = future.result(timeout=OPENAI_REQUEST_TIMEOUT * (OPENAI_MAX_RETRIES + 2))
                if result_raw: result = result_raw; successful_count += 1
            except concurrent.futures.TimeoutError: log_print("ERROR", f"\n!!! Timeout globale OpenAI per '{trend}' !!!")
            except Exception as exc: log_print("ERROR", f"\n!!! Errore recupero risultato OpenAI per '{trend}': {exc} !!!")
            extracted_entities_map[trend] = result # Mappa sempre
    log_print("INFO", f"--- Estrazione Entità OpenAI completata ({successful_count}/{total_tasks} con successo) ---")
    return extracted_entities_map

# ==============================================================================
# ============ FUNZIONI PER SCRAPING SATURAZIONE (RETRY Increased Patience) =====
# ==============================================================================

# --- Parsing Risultati SERP (Invariato - Ma verifica manuale consigliata su HTML salvati) ---
def parse_serp_result_stats(html_content):
    """Estrae il numero di risultati dal div #result-stats (o simili)."""
    try:
        soup = BeautifulSoup(html_content, 'html.parser')
        result_stats_div = None
        raw_stats_text = "N/D (Div non trovato)" # Default più specifico

        if not soup.body:
            return None, "Body HTML mancante"

        # 1. Ricerca per ID (più affidabile)
        result_stats_div = soup.find('div', id='result-stats')

        # 2. Fallback: Ricerca per classe (meno affidabile)
        if not result_stats_div:
            result_stats_div = soup.find('div', class_='result-stats') # Meno comune ora

        # 3. Fallback: Euristica su testo (molto meno affidabile)
        if not result_stats_div:
            possible_divs = soup.find_all('div')
            for div in possible_divs:
                # Ignora div troppo piccoli o senza testo significativo
                if len(div.get_text(strip=True)) < 10: continue
                div_text = div.get_text(separator=" ", strip=True).lower()
                # Cerca "risultat" o "result" e un numero o "circa"/"about"
                if ('risultat' in div_text or 'result' in div_text) and (re.search(r'\d', div_text) or 'circa' in div_text or 'about' in div_text):
                     # Verifica aggiuntiva: non deve contenere link tipici dei risultati di ricerca
                     if not div.find('a', href=True) or not div.find('h3'):
                          result_stats_div = div
                          raw_stats_text = f"N/D (Trovato Euristicamente: {div_text[:50]}...)"
                          break # Trovato euristicamente

        # --- Estrazione Numero dal Div Trovato ---
        if result_stats_div:
            stats_text = result_stats_div.get_text(separator=" ", strip=True)
            raw_stats_text = stats_text # Memorizza testo grezzo trovato
            # Pulisce e cerca il numero (gestisce separatori , . e spazi \xa0)
            cleaned_text = stats_text.replace('\xa0', ' ').replace(',', '').replace('.', '')
            match = re.search(r'(\d+)\s+(risultat|result)', cleaned_text, re.IGNORECASE)
            if not match: # Prova a cercare 'Circa' o 'About' prima del numero
                 match = re.search(r'(?:Circa|About)\s*(\d+)', cleaned_text, re.IGNORECASE)

            if match:
                num_str = match.group(1)
                if num_str.isdigit():
                    return int(num_str), raw_stats_text
                else: # Numero non estratto correttamente
                     return None, f"N/D (Numero non estratto da: {raw_stats_text[:50]}...)"

            # Se non trova numero ma il div esiste, controlla per "nessun risultato"
            if "nessun risultato trovato per" in stats_text.lower() or "no results found for" in stats_text.lower():
                 return 0, raw_stats_text
            # Div trovato ma nessun numero o zero risultati espliciti
            return None, f"N/D (Div trovato ma parsing fallito: {raw_stats_text[:50]}...)"
        else:
            # Nessun div trovato (nemmeno euristicamente)
            # Controlla per "Nessun risultato" nel body come ultima spiaggia
            body_text_lower = soup.body.get_text(separator=" ", strip=True).lower()
            if "nessun risultato trovato per" in body_text_lower or "no results found for" in body_text_lower:
                return 0, "Nessun risultato (rilevato nel body)"
            return None, raw_stats_text # Ritorna il default "N/D (Div non trovato)"

    except Exception as e:
        log_print("ERROR", f"[Parse SAT ERR] Errore durante parsing HTML: {type(e).__name__}")
        return None, f"Errore Parsing Eccezione: {type(e).__name__}"

# --- Funzione Scraping SERP con curl_cffi (URL .com, Block Check Enhanced) ---
def fetch_intitle_serp_count(keyword, proxy_url=None, browser_profile=None, impersonate_browser='chrome124', timeout=30):
    """
    Esegue UNA richiesta SERP usando curl_cffi + HEADERS DA PROFILO + proxy.
    URL base modificato in google.com. Controlli blocco migliorati.
    Restituisce il conteggio o (None, error_reason).
    """
    if impersonate_get is None: return None, "curl_cffi non disponibile"

    search_term = f'intitle:"{keyword}"'
    encoded_query = quote_plus(search_term)
    # URL USA google.com ma forza parametri italiani
    target_url = f"{SATURATION_SEARCH_URL_BASE}/search?q={encoded_query}&hl=it&gl=it&lr=lang_it&num=10"

    # Headers: USA QUELLI DAL PROFILO SE DISPONIBILE!
    if browser_profile:
        headers = browser_profile.get_headers()
        # Aggiungi/Forza Referer se mancante
        headers["Referer"] = f"{SATURATION_SEARCH_URL_BASE}/"
        if "Accept-Encoding" not in headers:
            headers["Accept-Encoding"] = "gzip, deflate, br, zstd"
        # log_print("DEBUG", f"[SAT Fetch] Usando headers da Profilo Geo {browser_profile.geo_code}") # Debug Verboso
    else:
        # Fallback (non dovrebbe succedere se chiamato correttamente)
        headers = {
            "Referer": f"{SATURATION_SEARCH_URL_BASE}/",
            "Accept-Language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "User-Agent": f"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/{random.randint(120, 125)}.0.0.0 Safari/537.36"
        }
        log_print("WARN", f"[SAT Fetch KW: {keyword[:20]}] Usando headers di FALLBACK") # Debug

    html_content = None
    status_code = None
    final_url = target_url
    error_reason = None

    proxies_dict = None
    if proxy_url:
        proxies_dict = {'http': proxy_url, 'https': proxy_url}

    try:
        log_print("DEBUG", f"[SAT REQ KW: {keyword[:20]}] URL: {target_url} Proxy: {proxy_url is not None} Profile: {browser_profile is not None}") # Debug richiesta
        response = impersonate_get(
            target_url,
            headers=headers, # Usa gli headers definiti sopra (da profilo o fallback)
            impersonate=impersonate_browser,
            proxies=proxies_dict,
            timeout=timeout,
            allow_redirects=True,
            verify=False # Aggiunto per evitare potenziali problemi SSL
        )
        status_code = response.status_code
        final_url = response.url

        try:
            html_content = response.text
        except Exception:
            # Fallback a decodifica forzata se .text fallisce (raro)
            html_content = response.content.decode('utf-8', errors='ignore')

        if status_code == 200:
            # Controlli blocco MIGLIORATI (prima del parsing)
            html_lower = html_content.lower()
            block_indicators = [
                "consent.google.com", "/sorry/", "ipv4.google.com", # Da URL
                "prima di continuare", "before you continue", "verifica di non essere un robot",
                "i'm not a robot", "recaptcha", "traffico insolito", "unusual traffic",
                "nostri sistemi hanno rilevato traffico insolito",
                "systems have detected unusual traffic",
                "<title>verifica la connessione</title>", "<title>connection check</title>"
            ]
            # Controlla sia URL finale che contenuto HTML
            if any(indicator in final_url.lower() for indicator in block_indicators[:3]) or \
               any(indicator in html_lower for indicator in block_indicators[3:]):

                # Determina causa blocco se possibile
                block_cause = "Unknown Block"
                for indicator in block_indicators:
                    if indicator in final_url.lower() or indicator in html_lower:
                       block_cause = indicator
                       break

                error_reason = f"Block Page Detected ({status_code}, Cause: {block_cause})"
                # Salva HTML se richiesto per blocchi
                if SAVE_FAILED_SERP_HTML:
                   try:
                       debug_dir = "debug_html_blocks"
                       os.makedirs(debug_dir, exist_ok=True)
                       safe_keyword = re.sub(r'[\\/*?:"<>|]', "", keyword)
                       filename = os.path.join(debug_dir, f"block_{safe_keyword[:30]}_{int(time.time())}.html")
                       with open(filename, 'w', encoding='utf-8') as f_debug:
                           f_debug.write(html_content)
                       log_print("DEBUG", f"[SAT DEBUG] Saved block page HTML to: {filename}")
                   except Exception as e_save:
                       log_print("WARN", f"Failed to save debug HTML for block page: {e_save}")
                return None, error_reason

            # Se non bloccato, prova a parsare
            count, raw_text = parse_serp_result_stats(html_content)

            if count is not None:
                log_print("DEBUG", f"[SAT OK KW: {keyword[:20]}] Count: {count}") # Debug Successo
                return count, None # Successo
            else:
                # Parsing fallito anche con status 200 (ma non era blocco rilevato)
                error_reason = f"Parse Fail ({status_code}, Raw: {raw_text[:100]}...)"
                 # Salva HTML se richiesto per Parse Fail
                if SAVE_FAILED_SERP_HTML:
                   try:
                       debug_dir = "debug_html_parse_fails"
                       os.makedirs(debug_dir, exist_ok=True)
                       safe_keyword = re.sub(r'[\\/*?:"<>|]', "", keyword)
                       filename = os.path.join(debug_dir, f"parse_fail_{safe_keyword[:30]}_{int(time.time())}.html")
                       with open(filename, 'w', encoding='utf-8') as f_debug:
                           f_debug.write(html_content)
                       log_print("DEBUG", f"[SAT DEBUG] Saved failing SERP HTML to: {filename}")
                   except Exception as e_save:
                       log_print("WARN", f"Failed to save debug HTML for parse fail: {e_save}")
                return None, error_reason
        elif status_code == 429:
             error_reason = f"Status 429"
             return None, error_reason
        else:
            # Status code non 200 e non 429
            error_reason = f"Status {status_code}"
            # Potrebbe essere utile salvare HTML anche per altri status? Forse.
            return None, error_reason

    except RequestsError as e: # Specifico per curl_cffi
         error_reason = f"RequestExc: {type(e).__name__} ({str(e)[:50]}...)"
         # Verifica se è un errore proxy comune
         if "CONNECT tunnel failed" in str(e) or "Connection refused" in str(e):
             error_reason = f"ProxyError (curl_cffi): {str(e)[:60]}"
         elif "timed out" in str(e).lower():
             error_reason = f"Timeout (curl_cffi): {str(e)[:60]}"
         # log_print("DEBUG", f"[SAT REQ ERR KW: {keyword[:20]}] {error_reason}")
         return None, error_reason
    except (requests.exceptions.Timeout, socket.timeout) as e_timeout: # Timeout generico (meno probabile con curl_cffi?)
        error_reason = f"Timeout: {type(e_timeout).__name__}"
        # log_print("DEBUG", f"[SAT REQ ERR KW: {keyword[:20]}] {error_reason}")
        return None, error_reason
    except Exception as e_main:
        error_reason = f"GenericExc: {type(e_main).__name__} ({str(e_main)[:50]}...)"
        log_print("ERROR", f"[SAT REQ UNEXPECTED ERR KW: {keyword[:20]}] {error_reason}")
        traceback.print_exc() # Debug eccezioni inattese
        return None, error_reason

# --- Funzione di Normalizzazione (Invariata) ---
def normalize_scores(scores_dict, min_val=1, max_val=100):
    """Normalizza un dizionario di punteggi su scala min_val-max_val."""
    # Filtra valori non validi (None, negativi) ma mantieni le chiavi
    valid_scores = {k: v for k, v in scores_dict.items() if v is not None and v >= 0}
    score_values = np.array(list(valid_scores.values()), dtype=float)

    if len(score_values) == 0: # Nessun punteggio valido
        log_print("WARN", "[SAT NORM] Nessun punteggio valido trovato per la normalizzazione. Assegno min_val a tutti.")
        return {k: min_val for k in scores_dict}

    min_score = np.min(score_values)
    max_score = np.max(score_values)

    # Se tutti i punteggi validi sono uguali
    if min_score == max_score:
        log_print("INFO", f"[SAT NORM] Tutti i punteggi validi sono uguali ({min_score}). Assegno min_val.")
        norm_value = min_val
        normalized_scores = {k: norm_value for k in valid_scores}
    else:
        # Normalizzazione lineare standard (più risultati = punteggio più alto = più saturazione)
        normalized_scores = {}
        for k, v in valid_scores.items():
            normalized = min_val + (v - min_score) * (max_val - min_val) / (max_score - min_score)
            normalized_scores[k] = normalized
        log_print("DEBUG", f"[SAT NORM] Normalizzazione completata. Min: {min_score}, Max: {max_score}")

    # Ricostruisci il dizionario finale, assegnando un valore ai falliti (None o negativi nell'input)
    final_normalized_dict = {}
    fallback_score = min_val # Assegna il valore minimo ai falliti
    num_failed = 0
    for k in scores_dict.keys():
        norm_val = normalized_scores.get(k, fallback_score)
        final_normalized_dict[k] = norm_val
        if k not in valid_scores:
             num_failed += 1
             final_normalized_dict[k] = fallback_score # Assicura fallback per i None/negativi originali

    log_print("INFO", f"[SAT NORM] Normalizzazione applicata. {len(valid_scores)} validi, {num_failed} falliti (assegnato {fallback_score}).")
    return final_normalized_dict

# --- Funzione Principale per Ottenere e Normalizzare Saturazione (RETRY Increased Patience) ---
def fetch_and_normalize_saturation_scores(entities_list, proxy_manager_instance, max_threads=MAX_THREADS_SATURATION):
    """
    Ottiene i conteggi SERP intitle per la lista di entità usando proxy, HEADERS CORRETTI,
    RETRY ROBUSTO (Increased Patience) e logging migliorato, poi normalizza.
    Restituisce un dizionario {entita: saturation_score_normalizzato}.
    """
    if not FETCH_SATURATION_SCORE:
        log_print("INFO", "\n--- Calcolo Saturazione Saltato (disattivato o curl_cffi mancante) ---")
        return {entity: 1.0 for entity in entities_list} # Ritorna 1 (minimo) per tutti

    log_print("INFO", f"\n--- Avvio Calcolo Saturazione per {len(entities_list)} Entità (Max Threads: {max_threads}, Max Retries/KW: {SATURATION_MAX_RETRIES_PER_KEYWORD}, URL: {SATURATION_SEARCH_URL_BASE}, Backoff Init: {SATURATION_INITIAL_BACKOFF}s, Mult: {SATURATION_BACKOFF_MULTIPLIER}, Max: {SATURATION_MAX_BACKOFF}s) ---")
    raw_results = {} # {entity: count} - Usiamo None per fallimento iniziale
    futures = {}
    sem = threading.Semaphore(max_threads)
    lock = threading.Lock() # Lock per aggiornare raw_results

    def fetch_single_saturation(entity):
        """Wrapper con RETRY robusto (Increased Patience) per ottenere saturazione per una singola entità."""
        nonlocal raw_results
        attempts = 0
        result_count = None # Inizializza a None (fallimento)
        last_error = "Max Retries Reached"
        current_backoff = SATURATION_INITIAL_BACKOFF

        while attempts < SATURATION_MAX_RETRIES_PER_KEYWORD:
            attempts += 1
            log_print("DEBUG", f"[SAT WORKER KW: {entity[:20]} T{attempts}/{SATURATION_MAX_RETRIES_PER_KEYWORD}] Inizio tentativo.")
            proxy_info, proxy_str, geo_code = None, None, None
            release_success = False
            status_code_proxy = None # Non direttamente disponibile qui
            error_type_proxy = None
            proxy_url = None
            browser_profile = None # Inizializza profilo

            try:
                # 1. Ottieni Proxy e Profilo (con mini-retry interno)
                get_proxy_attempts = 0
                while proxy_info is None and get_proxy_attempts < 3:
                    get_proxy_attempts += 1
                    proxy_info = proxy_manager_instance.get_proxy()
                    if proxy_info:
                        proxy_str, geo_code, session_data = proxy_info
                        proxy_url = session_data.get('proxy_url')
                        browser_profile = session_data.get('profile') # <-- Recupera il profilo!
                        if not proxy_url or not browser_profile: # Verifica essenziale
                            log_print("WARN", f"[SAT WORKER KW: {entity[:20]} T{attempts}] Proxy {geo_code} ottenuto ma mancano dati sessione (url/profilo). Rilascio e ritento get_proxy.")
                            error_type_proxy = "IncompleteSessionData"
                            if proxy_str: # Rilascia solo se abbiamo ottenuto una stringa proxy
                                 proxy_manager_instance.release_proxy(proxy_str, success=False, status_code=None, error_type=error_type_proxy)
                            proxy_info = None # Impedisce uso in questo giro, forza nuovo get_proxy
                        else:
                            break # Trovato proxy valido con dati
                    else: # get_proxy ha restituito None
                        log_print("WARN", f"[SAT WORKER KW: {entity[:20]} T{attempts}] get_proxy fallito (tentativo {get_proxy_attempts}/3). Attesa breve...")
                        time.sleep(random.uniform(3, 6)) # Attendi prima di riprovare get_proxy

                if not proxy_info: # Se dopo i tentativi non hai proxy valido
                    log_print("WARN", f"[SAT WORKER KW: {entity[:20]} T{attempts}] No valid proxy/profile available after get_proxy retries. Saltando questo tentativo.")
                    last_error = "No Proxy/Profile Available"
                    # Non fare break, ma continua al prossimo tentativo del ciclo while esterno
                    # Applica backoff anche se non abbiamo fatto la richiesta
                    wait_time = current_backoff # Salva il backoff attuale
                    log_print("INFO", f"[SAT WORKER KW: {entity[:20]} T{attempts}] No proxy, attesa {wait_time:.1f}s prima del prossimo tentativo...")
                    time.sleep(wait_time)
                    current_backoff = min(current_backoff * SATURATION_BACKOFF_MULTIPLIER, SATURATION_MAX_BACKOFF)
                    continue # Prova il prossimo tentativo (potrebbe liberarsi un proxy)

                log_print("DEBUG", f"[SAT WORKER KW: {entity[:20]} T{attempts}] Using proxy {geo_code} ({proxy_str[-10:]}) Profile: {browser_profile.os}/{browser_profile.geo_code}") # Debug

                # 2. Chiama lo Scraper SERP passando il profilo
                count, error_reason = fetch_intitle_serp_count(
                    entity,
                    proxy_url=proxy_url,
                    browser_profile=browser_profile, # <-- Passa il profilo!
                    impersonate_browser=SATURATION_IMPERSONATE_BROWSER,
                    timeout=SATURATION_REQUEST_TIMEOUT
                )

                # 3. Gestisci Risultato
                if count is not None:
                    result_count = count # Memorizza il conteggio valido
                    release_success = True
                    last_error = None # Successo
                    log_print("INFO", f"[SAT WORKER KW: {entity[:20]} T{attempts}] SUCCESSO. Conteggio: {count}. Proxy: {geo_code}")
                    break # Esce dal ciclo while dei tentativi, abbiamo finito per questa keyword

                else: # Fallimento nello scraping per questo tentativo
                    release_success = False
                    error_type_proxy = error_reason if error_reason else "Unknown SERP Fail"
                    last_error = error_type_proxy # Memorizza l'errore per questo tentativo
                    log_print("WARN", f"[SAT WORKER KW: {entity[:20]} T{attempts}] FALLITO. Proxy: {geo_code}. Errore: {error_type_proxy}")

                    # Applica backoff prima del prossimo tentativo
                    wait_time = current_backoff
                    # Se l'errore è 429 o Blocco, usa un backoff potenzialmente più lungo (ma già il moltiplicatore lo aumenta)
                    if "Status 429" in error_type_proxy or "Block Page Detected" in error_type_proxy:
                         # Potremmo aggiungere un minimo fisso più alto qui, es: max(wait_time, 10.0)
                         log_print("INFO", f"[SAT WORKER KW: {entity[:20]} T{attempts}] Errore 429/Blocco rilevato. Backoff standard applicato: {wait_time:.1f}s")

                    log_print("INFO", f"[SAT WORKER KW: {entity[:20]} T{attempts}] Attesa {wait_time:.1f}s prima del prossimo tentativo...")
                    time.sleep(wait_time)
                    current_backoff = min(current_backoff * SATURATION_BACKOFF_MULTIPLIER, SATURATION_MAX_BACKOFF)
                    # Continua al prossimo tentativo nel ciclo while

            except Exception as e_wrap:
                # Errore nel wrapper stesso (raro)
                log_print("ERROR", f"[SAT WRAP ERR KW: {entity[:20]} T{attempts}] {type(e_wrap).__name__}: {e_wrap}") # Debug
                traceback.print_exc()
                release_success = False
                error_type_proxy = f"WrapperExc: {type(e_wrap).__name__}"
                last_error = error_type_proxy
                # Applica backoff anche per errori wrapper
                wait_time = current_backoff # Salva il backoff attuale
                log_print("INFO", f"[SAT WORKER KW: {entity[:20]} T{attempts}] Errore Wrapper, attesa {wait_time:.1f}s prima del prossimo tentativo...")
                time.sleep(wait_time)
                current_backoff = min(current_backoff * SATURATION_BACKOFF_MULTIPLIER, SATURATION_MAX_BACKOFF)

            finally:
                # Rilascia sempre il proxy se è stato ottenuto E usato (proxy_info non è None)
                if proxy_info:
                    proxy_manager_instance.release_proxy(
                        proxy_str,
                        success=release_success,
                        status_code=None, # Status code non facilmente disponibile qui, affidati a error_type
                        error_type=error_type_proxy # Passa l'ultimo errore riscontrato in questo tentativo
                    )

            # Se sei qui e result_count è ancora None, il tentativo è fallito, continua il ciclo while

        # Fine tentativi per questa keyword
        with lock:
             raw_results[entity] = result_count # Salva il risultato (count o None se fallito tutti i tentativi)
             if result_count is None:
                 log_print("ERROR", f"!!! [SAT TOTAL FAIL KW: {entity[:30]}] Falliti tutti i {SATURATION_MAX_RETRIES_PER_KEYWORD} tentativi. Ultimo errore: {last_error}")

    # Sottometti i task
    with concurrent.futures.ThreadPoolExecutor(max_workers=max_threads) as executor:
        log_print("INFO", f"Sottomissione {len(entities_list)} task SERP Saturazione...")
        for entity in entities_list:
            future = executor.submit(fetch_single_saturation, entity)
            futures[future] = entity
            time.sleep(random.uniform(0.05, 0.15)) # Piccolo delay tra sottomissioni

        # Attendi risultati
        log_print("INFO", "Attesa completamento task SERP Saturazione...")
        success_count = 0
        fail_count = 0
        # Il risultato viene già messo in raw_results nel thread, qui aspettiamo solo il completamento e contiamo
        for future in tqdm(concurrent.futures.as_completed(futures), total=len(entities_list), desc="Calcolo Saturazione", unit="kw"):
            entity = futures[future]
            try:
                future.result() # Controlla se ci sono state eccezioni non gestite nel wrapper/thread
                with lock: # Controlla il risultato effettivo scritto nel dizionario
                    if raw_results.get(entity) is not None:
                        success_count += 1
                    else:
                        fail_count += 1
            except Exception as e_res:
                log_print("ERROR", f"\n!!! Eccezione inattesa recupero futuro saturazione per {entity}: {e_res}")
                fail_count += 1 # Conta come fallito se c'è eccezione qui anche se era già in raw_results come None


    log_print("INFO", f"--- Calcolo Saturazione completato ({success_count} successi, {fail_count} falliti su {len(entities_list)} keywords) ---")

    # Normalizza i risultati (la funzione normalize ora gestisce None/falliti)
    log_print("INFO", f"Normalizzazione {len(raw_results)} risultati SERP...")
    final_saturation_scores = normalize_scores(raw_results, min_val=1, max_val=100)

    log_print("INFO", "--- Normalizzazione Saturazione completata ---")
    return final_saturation_scores


# ==============================================================================
# ==================== FUNZIONE OUTPUT HTML (AGGIORNATA PER SATURAZIONE) =======
# ==============================================================================

def generate_html_output(df_final, runtime_info=None):
    """
    Genera solo il file data.js nella directory di output.
    Assume che index.html, style.css, script.js esistano già in OUTPUT_DIR.
    Include il nuovo 'Saturation_Score'.
    """
    try:
        os.makedirs(OUTPUT_DIR, exist_ok=True)

        # Prepara la lista di trend per il template
        trend_list = []
        # Aggiungi 'Rank_Sorted' se esiste, per riferimento nel JS se necessario
        required_cols = ['Rank', 'Rank_Sorted', 'Entita', 'Discover_Score', 'Score_Avg_now 1-H', 'Score_Avg_now 4-H', 'Score_Avg_now 7-d', 'Extracted_Entities', 'Saturation_Score']
        available_cols = df_final.columns
        missing_warned = False
        for col in required_cols:
             # Non avvisare se manca solo saturazione o Rank_Sorted (che è opzionale per JS)
             if col not in available_cols and col not in ['Saturation_Score', 'Rank_Sorted']:
                 if not missing_warned:
                     log_print("WARN", f"Colonne mancanti nel DF finale per output: {', '.join([c for c in required_cols if c not in available_cols and c not in ['Saturation_Score', 'Rank_Sorted']])}. Default usati.")
                     missing_warned = True

        # Usa solo le righe passate (dovrebbero essere già le top N)
        for _, row in df_final.iterrows():
            trend_data = {
                'rank': int(row.get('Rank', 0)), # Usa il rank originale pre-sort
                'rank_sorted': int(row.get('Rank_Sorted', 0)), # Usa il rank post-sort
                'entity': row.get('Entita', 'N/A'),
                'discover_score': float(row.get('Discover_Score', 0)),
                'score_1h': float(row.get('Score_Avg_now 1-H', 0)),
                'score_4h': float(row.get('Score_Avg_now 4-H', 0)),
                'score_7d': float(row.get('Score_Avg_now 7-d', 0)),
                'saturation_score': float(row.get('Saturation_Score', 1.0)), # Usa valore normalizzato (default 1 se fallito)
                'extracted_entities': row.get('Extracted_Entities', '')
            }
            trend_list.append(trend_data)

        # Prepara i metadati della run
        run_metadata = {
            'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S %Z'), # Aggiunge Timezone
            'trends_count': len(trend_list), # Numero di trend in data.js (è TOP_N_FINAL_DISPLAY)
            'total_trends_processed': runtime_info.get('total_trends_processed', len(trend_list)), # Numero totale processato prima del taglio
            'top_discover_score': max((t['discover_score'] for t in trend_list), default=0),
            'runtime_seconds': (runtime_info['end_time'] - runtime_info['start_time']) if runtime_info and 'start_time' in runtime_info and 'end_time' in runtime_info else 0,
            'proxies_available': len(proxy_manager.all_proxies) if proxy_manager else 0,
            'openai_enabled': FETCH_OPENAI_ENTITIES,
            'openai_model': OPENAI_MODEL if FETCH_OPENAI_ENTITIES else 'N/A',
            'saturation_enabled': FETCH_SATURATION_SCORE,
            'saturation_browser': SATURATION_IMPERSONATE_BROWSER if FETCH_SATURATION_SCORE else 'N/A',
            'saturation_url': SATURATION_SEARCH_URL_BASE if FETCH_SATURATION_SCORE else 'N/A', # Aggiunto URL base usato
            'saturation_retries': SATURATION_MAX_RETRIES_PER_KEYWORD if FETCH_SATURATION_SCORE else 0 # Aggiunto numero retry
        }
        run_metadata['runtime_minutes'] = round(run_metadata['runtime_seconds'] / 60, 2) # Aggiunge minuti arrotondati

        # Prepara il contenuto di data.js
        js_data = f"const trendData = {json.dumps(trend_list, indent=2, ensure_ascii=False)};\n\n"
        js_data += f"const runMetadata = {json.dumps(run_metadata, indent=2, ensure_ascii=False)};\n"

        data_js_path = os.path.join(OUTPUT_DIR, 'data.js')
        try:
            with open(data_js_path, 'w', encoding='utf-8') as f:
                f.write(js_data)
        except Exception as e_write:
            log_print("ERROR", f"!!! Errore scrittura file {data_js_path}: {e_write} !!!")
            return False

        log_print("INFO", f"\nFile dati '{os.path.basename(data_js_path)}' generato/aggiornato con successo in '{OUTPUT_DIR}'.")
        log_print("INFO", f"Apri '{os.path.join(OUTPUT_DIR, OUTPUT_FILENAME)}' nel browser per visualizzare.")
        return True
    except Exception as e:
        log_print("ERROR", f"Errore durante la generazione di data.js: {e}")
        traceback.print_exc()
        return False

# ==============================================================================
# ==================== SCRIPT PRINCIPALE (V7.9.3 - Increased Patience) =========
# ==============================================================================
if __name__ == "__main__":
    main_start_time = time.time()
    runtime_info = {'start_time': main_start_time}
    total_trends_processed = 0 # Contatore per metadati

    # Validazioni iniziali parametri
    if FETCH_VOLUME_CONTEXT:
        if not CONTEXT_TIMEFRAMES: log_print("WARN","CONTEXT_TIMEFRAMES vuoto. Contesto disattivato."); FETCH_VOLUME_CONTEXT = False
        if CONTEXT_N_RUNS <= 0: log_print("WARN","CONTEXT_N_RUNS <= 0. Contesto disattivato."); FETCH_VOLUME_CONTEXT = False
    if FETCH_OPENAI_ENTITIES:
        if N_PROCESS_FOR_OPENAI <= 0: log_print("WARN","N_PROCESS_FOR_OPENAI <= 0. OpenAI disattivato."); FETCH_OPENAI_ENTITIES = False
        if not client: log_print("WARN","Client OpenAI non inizializzato. OpenAI disattivato."); FETCH_OPENAI_ENTITIES = False
    if FETCH_SATURATION_SCORE:
        if N_PROCESS_FOR_SATURATION <= 0: log_print("WARN","N_PROCESS_FOR_SATURATION <= 0. Saturazione disattivata."); FETCH_SATURATION_SCORE = False
        if impersonate_get is None: log_print("WARN","curl_cffi non importato. Saturazione disattivata."); FETCH_SATURATION_SCORE = False
        if not SATURATION_SEARCH_URL_BASE: log_print("WARN","SATURATION_SEARCH_URL_BASE vuoto. Saturazione disattivata."); FETCH_SATURATION_SCORE = False

    log_print("INFO", f"--- Avvio script Discover Prophet V7.9.3 (Saturation Retry Increased Patience) ---")
    log_print("INFO", f"Formula Discover Score: V7.9 (Numeratore Pesato: V4h={WEIGHT_V4H_NUMERATOR}, V7d={WEIGHT_V7D_NUMERATOR}; Denominatore K={V7D_PENALTY_K}, epsilon={V7D_PENALTY_EPSILON})")
    log_print("INFO", f"Modalità: Lavora direttamente su '{OUTPUT_DIR}', genera solo 'data.js'.")
    log_print("INFO", f"Estrazione Contesto Volume: {'ATTIVA' if FETCH_VOLUME_CONTEXT else 'DISATTIVATA'} (Top {N_PROCESS_FOR_CONTEXT}, Runs: {CONTEXT_N_RUNS})")
    log_print("INFO", f"Estrazione Entità OpenAI: {'ATTIVA' if FETCH_OPENAI_ENTITIES else 'DISATTIVATA'} (Top {N_PROCESS_FOR_OPENAI}, Modello: {OPENAI_MODEL if FETCH_OPENAI_ENTITIES else 'N/A'})")
    log_print("INFO", f"Calcolo Saturazione SERP: {'ATTIVO' if FETCH_SATURATION_SCORE else 'DISATTIVATO'} (Top {N_PROCESS_FOR_SATURATION} dopo sort, URL: {SATURATION_SEARCH_URL_BASE if FETCH_SATURATION_SCORE else 'N/A'}, Browser: {SATURATION_IMPERSONATE_BROWSER if FETCH_SATURATION_SCORE else 'N/A'}, Threads: {MAX_THREADS_SATURATION}, Retries/KW: {SATURATION_MAX_RETRIES_PER_KEYWORD})")
    log_print("INFO", f"Config Proxy: MaxConc={MAX_CONCURRENT_PROXIES}, CD={PROXY_USE_COOLDOWN}s, FailThr={PROXY_FAILURE_THRESHOLD}, CDMult={PROXY_FAILURE_COOLDOWN_MULTIPLIER}")
    log_print("INFO", f"Config Threads: Pytrends={MAX_THREADS_PYTRENDS}, OpenAI={MAX_OPENAI_THREADS}, Saturazione={MAX_THREADS_SATURATION}")
    log_print("INFO", f"Output: '{OUTPUT_DIR}', Checkpoints: '{CHECKPOINT_DIR}', Salva SERP fallite: {SAVE_FAILED_SERP_HTML}")

    ordered_entities = None
    df_final = pd.DataFrame()

    try:
        # --- 0. Crea directory necessarie ---
        os.makedirs(CHECKPOINT_DIR, exist_ok=True); log_print("INFO", f"Directory checkpoint: '{CHECKPOINT_DIR}'")
        os.makedirs(OUTPUT_DIR, exist_ok=True); log_print("INFO", f"Directory output: '{OUTPUT_DIR}'")
        if SAVE_FAILED_SERP_HTML:
             os.makedirs("debug_html_parse_fails", exist_ok=True)
             os.makedirs("debug_html_blocks", exist_ok=True)
             log_print("INFO", "Directory per HTML di debug create.")


        # --- 1. Estrazione Lista Ordinata ---
        ordered_entities = extract_ordered_entities()
        if not ordered_entities: raise Exception("Estrazione iniziale entità fallita.")
        total_trends_processed = len(ordered_entities) # Memorizza numero totale entità
        runtime_info['total_trends_processed'] = total_trends_processed # Per metadati
        log_print("INFO", f"\nLista Ordinata Iniziale Estratta ({total_trends_processed} entità).")
        try:
            df_initial = pd.DataFrame({'Rank': range(1, total_trends_processed + 1), 'Entita': ordered_entities})
            chk_path = os.path.join(CHECKPOINT_DIR, "01_entities_ordered_extracted.csv")
            df_initial.to_csv(chk_path, index=False, encoding='utf-8-sig')
            log_print("INFO", f"Checkpoint 01 (Lista ordinata iniziale) salvato: {chk_path}")
        except Exception as e: log_print("ERROR", f"Errore salvataggio checkpoint 01: {e}")

        # Prepara DataFrame finale e inizializza colonne
        df_final = df_initial.copy()
        for tf in CONTEXT_TIMEFRAMES: df_final[f'Score_Avg_{tf}'] = 0.0
        df_final['Extracted_Entities'] = ''
        df_final['Discover_Score'] = 0.0
        df_final['Saturation_Score'] = 1.0 # Inizializza colonna saturazione (1 = minimo default)

        # --- 2. Raccolta Score di Contesto (se attivo) ---
        if FETCH_VOLUME_CONTEXT and N_PROCESS_FOR_CONTEXT > 0 and CONTEXT_TIMEFRAMES:
            log_print("INFO", f"\n--- Avvio Raccolta Score Contesto per Top {N_PROCESS_FOR_CONTEXT} Entità ---")
            entities_for_context = ordered_entities[:N_PROCESS_FOR_CONTEXT]
            timeframe_context_results = defaultdict(lambda: defaultdict(list)) # Usa lambda per sicurezza
            for run in range(1, CONTEXT_N_RUNS + 1):
                log_print("INFO", f"\n===== INIZIO RACCOLTA CONTESTO - RUN {run}/{CONTEXT_N_RUNS} ====="); rst = time.time()
                run_scores = {}
                for tf in CONTEXT_TIMEFRAMES:
                    # Assicurati che entities_for_context non sia vuoto
                    if not entities_for_context:
                        log_print("WARN", f"Nessuna entità per contesto {tf} in run {run}.")
                        continue
                    scores = get_all_context_scores(entities_for_context, tf)
                    run_scores[tf] = scores
                    # Aggiorna i risultati aggregati
                    for entity, score in scores.items():
                        if entity in entities_for_context: # Assicura che l'entità sia tra quelle richieste
                            timeframe_context_results[tf][entity].append(score)
                    log_print("INFO", f"Run {run}/{CONTEXT_N_RUNS}: Contesto {tf} completato.")
                # Salva checkpoint per la run corrente
                try:
                    # Crea df checkpoint solo con entità di contesto
                    df_run_checkpoint = pd.DataFrame(entities_for_context, columns=['Entita'])
                    for tf, scores_dict in run_scores.items():
                        # Mappa i punteggi ottenuti in questa run
                        df_run_checkpoint[f'Score_{tf.replace(" ","_")}_Run{run}'] = df_run_checkpoint['Entita'].map(scores_dict).fillna(0)
                    chk_filename = f"02_context_run_{run}_scores.csv"
                    chk_path = os.path.join(CHECKPOINT_DIR, chk_filename)
                    df_run_checkpoint.to_csv(chk_path, index=False, encoding='utf-8-sig'); log_print("INFO", f"Checkpoint 02 (Run {run}) salvato: {chk_path}")
                except Exception as e: log_print("ERROR", f"Errore salvataggio checkpoint contesto Run {run}: {e}")
                log_print("INFO", f"===== FINE RACCOLTA CONTESTO - RUN {run}/{CONTEXT_N_RUNS} (Durata: {time.time() - rst:.2f}s) =====")
                if run < CONTEXT_N_RUNS: time.sleep(random.uniform(5, 15)) # Pausa tra le run
            # Calcola medie finali
            log_print("INFO", "\nCalcolo Score Medi di Contesto dalle Run...")
            for tf_agg in CONTEXT_TIMEFRAMES:
                sc_avg_col = f'Score_Avg_{tf_agg}'
                # Calcola media solo per entità con almeno un risultato
                avg_scores_map = {entity: np.mean(scores) if scores else 0 for entity, scores in timeframe_context_results[tf_agg].items()}
                # Mappa le medie sul DataFrame principale
                df_final[sc_avg_col] = df_final['Entita'].map(avg_scores_map).fillna(0)
                log_print("INFO", f"Media contesto per {tf_agg} calcolata.")
            log_print("INFO", "--- Fine Raccolta Score Contesto ---")
            # Salva checkpoint medie
            try:
                cols_to_save = ['Rank', 'Entita'] + [f'Score_Avg_{tf}' for tf in CONTEXT_TIMEFRAMES]
                # Salva solo le righe per cui è stato calcolato il contesto
                chk_path = os.path.join(CHECKPOINT_DIR, "03_context_averages.csv")
                df_final.loc[df_final['Entita'].isin(entities_for_context), cols_to_save].to_csv(chk_path, index=False, encoding='utf-8-sig'); log_print("INFO", f"Checkpoint 03 (Medie contesto) salvato: {chk_path}")
            except Exception as e: log_print("ERROR", f"Errore salvataggio checkpoint medie contesto: {e}")
        else:
            log_print("INFO", "\n--- Raccolta Score Contesto Saltata ---")
            # Assicura che le colonne esistano anche se saltato
            for tf in CONTEXT_TIMEFRAMES:
                if f'Score_Avg_{tf}' not in df_final.columns: df_final[f'Score_Avg_{tf}'] = 0.0

        # --- 3. Estrazione Entità con OpenAI (se attiva) ---
        if FETCH_OPENAI_ENTITIES:
            # Processa solo le entità definite da N_PROCESS_FOR_OPENAI
            entities_to_process_openai = ordered_entities[:N_PROCESS_FOR_OPENAI]
            if entities_to_process_openai:
                extracted_entities_map = get_entities_with_openai(entities_to_process_openai)
                df_final['Extracted_Entities'] = df_final['Entita'].map(extracted_entities_map).fillna('')
                log_print("INFO", "Entità OpenAI mappate nel DataFrame.")
                # Salva Checkpoint OpenAI
                try:
                    df_openai_chk = df_final.loc[df_final['Entita'].isin(entities_to_process_openai), ['Entita', 'Extracted_Entities']]
                    chk_filename = "04_openai_extracted_entities.csv"
                    chk_path = os.path.join(CHECKPOINT_DIR, chk_filename)
                    df_openai_chk.to_csv(chk_path, index=False, encoding='utf-8-sig'); log_print("INFO", f"Checkpoint 04 (Entità OpenAI) salvato: {chk_path}")
                except Exception as e: log_print("ERROR", f"Errore salvataggio checkpoint entità OpenAI: {e}")
            else: log_print("INFO", "Nessuna entità specificata per OpenAI.")
        else:
            log_print("INFO", "\n--- Estrazione Entità OpenAI Saltata ---")
            df_final['Extracted_Entities'] = '' # Assicura colonna vuota


        # --- 4. Calcolo Heuristic Discover Score ---
        log_print("INFO", "\nCalcolo Heuristic Discover Score V7.9 (Numeratore Pesato)...")
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
            log_print("INFO", f"Colonna '{discover_score_col}' calcolata con formula V7.9.")
        else:
            missing_cols = [col for col in [score_4h_col, score_7d_col, 'Rank'] if col not in df_final.columns]
            log_print("WARN", f"Colonne necessarie ({', '.join(missing_cols)}) per Score mancanti. Score impostato a 0.")
            df_final[discover_score_col] = 0.0

        # --- 5. Ordinamento Finale per Discover Score ---
        if discover_score_col in df_final.columns:
            df_final = df_final.sort_values(by=discover_score_col, ascending=False).reset_index(drop=True)
            log_print("INFO", f"\nDataFrame finale ordinato per '{discover_score_col}'.")
             # Aggiorna la colonna Rank per riflettere il nuovo ordinamento (Opzionale, ma utile per l'output)
            df_final['Rank_Sorted'] = range(1, len(df_final) + 1)
        else: log_print("WARN", f"\nATTENZIONE: Colonna '{discover_score_col}' non trovata per l'ordinamento.")

        # --- 6. Calcolo Saturazione Score (se attivo, per TOP N dopo sort) ---
        if FETCH_SATURATION_SCORE:
            # Prendi le prime N entità DOPO l'ordinamento per Discover Score
            entities_for_saturation = df_final['Entita'].head(N_PROCESS_FOR_SATURATION).tolist()
            if entities_for_saturation:
                saturation_scores_normalized = fetch_and_normalize_saturation_scores(
                    entities_for_saturation,
                    proxy_manager # Passa l'istanza del manager
                )
                # Mappa i punteggi sul DataFrame completo (fillna gestirà quelle non processate)
                df_final['Saturation_Score'] = df_final['Entita'].map(saturation_scores_normalized).fillna(1.0) # Default 1 se non mappato
                log_print("INFO", "Punteggi di Saturazione mappati nel DataFrame.")
                # Salva Checkpoint Saturazione
                try:
                    chk_filename = "05_saturation_scores.csv"
                    cols_sat = ['Entita', 'Saturation_Score', 'Rank_Sorted'] # Aggiungi rank sortato
                    # Salva solo le entità per cui è stata tentata la saturazione
                    chk_path = os.path.join(CHECKPOINT_DIR, chk_filename)
                    df_final.loc[df_final['Entita'].isin(entities_for_saturation), cols_sat].to_csv(chk_path, index=False, encoding='utf-8-sig')
                    log_print("INFO", f"Checkpoint 05 (Punteggi saturazione) salvato: {chk_path}")
                except Exception as e: log_print("ERROR", f"Errore salvataggio checkpoint saturazione: {e}")
            else:
                log_print("WARN", "Nessuna entità da processare per la saturazione (lista vuota dopo sort/head?).")
                df_final['Saturation_Score'] = 1.0 # Assicura default
        else:
            log_print("INFO", "\n--- Calcolo Saturazione Score Saltato ---")
            df_final['Saturation_Score'] = 1.0 # Assicura che la colonna esista e abbia valore minimo


        # --- 7. Salva il DataFrame finale completo come CSV ---
        try:
            base_filename = "final_sorted_data_v7.9.3_score" # Aggiornato nome file
            if FETCH_SATURATION_SCORE: base_filename += "_with_saturation"
            backup_filename = f"06_{base_filename}.csv"
            chk_path = os.path.join(CHECKPOINT_DIR, backup_filename)
            df_final.to_csv(chk_path, index=False, encoding='utf-8-sig')
            log_print("INFO", f"\nDataFrame finale completo salvato: {chk_path}")
        except Exception as e: log_print("ERROR", f"\n!!! Errore salvataggio CSV finale completo: {e} !!!")

        # --- 8. Genera l'output data.js ---
        runtime_info['end_time'] = time.time() # Fine tempo esecuzione principale
        # Passa solo le top N righe a data.js per mantenere il file leggero
        # Assicurati di usare il Rank originale se serve nell'output JS, non Rank_Sorted
        df_output = df_final.head(TOP_N_FINAL_DISPLAY).copy()
        html_result = generate_html_output(df_output, runtime_info)

        # --- 9. Stampa Top N Finale a Console ---
        log_print("INFO", f"\n--- Top {TOP_N_FINAL_DISPLAY} Entità (Ordinate per Discover Score, con Saturazione se attiva) ---")
        # Usa Rank_Sorted per la stampa a console, ma Rank originale è nel df_output per data.js
        cols_to_show = [c for c in ['Rank_Sorted','Discover_Score', 'Saturation_Score', 'Rank', 'Entita', 'Extracted_Entities', 'Score_Avg_now 1-H', 'Score_Avg_now 4-H', 'Score_Avg_now 7-d'] if c in df_final.columns]

        # ---> FIX: Gestione reset opzioni Pandas <---
        # Store original options
        original_options = {
            'display.max_rows': pd.get_option('display.max_rows'),
            'display.width': pd.get_option('display.width'),
            'display.max_colwidth': pd.get_option('display.max_colwidth'),
            'display.float_format': pd.get_option('display.float_format')
        }
        try:
            # Set options for printing
            pd.set_option('display.max_rows', TOP_N_FINAL_DISPLAY + 5)
            pd.set_option('display.width', 200)
            pd.set_option('display.max_colwidth', 45)
            pd.set_option('display.float_format', '{:.2f}'.format)
            # Stampa le top N dal DataFrame completo (df_final)
            print("\n" + df_final[cols_to_show].head(TOP_N_FINAL_DISPLAY).to_string(index=False))
        except Exception as e_print:
            log_print("ERROR", f"Errore stampa finale: {e_print}")
        finally:
            # Reset only the options that were changed
            log_print("DEBUG", "Resetting specific pandas display options.")
            try:
                for option, value in original_options.items():
                    pd.set_option(option, value)
            except Exception as e_reset:
                 log_print("WARN", f"Error resetting pandas options: {e_reset}") # Log warning instead of crashing
            # Vecchia riga che causava il crash:
            # finally: pd.reset_option('all') # Resetta opzioni display pandas

    except Exception as main_exc:
        log_print("ERROR", f"\n\n!!! ERRORE CRITICO SCRIPT: {type(main_exc).__name__} - {main_exc} !!!"); traceback.print_exc()
    finally:
        # Blocco Stampa Statistiche Proxy
        log_print("INFO", "\n--- Statistiche Proxy Rilevate (Fine Esecuzione) ---")
        try:
            if 'proxy_manager' in locals() and proxy_manager:
                ps = proxy_manager.get_proxy_stats_summary()
                total_requests = ps.get('total_success', 0) + ps.get('total_fail_429', 0) + ps.get('total_fail_block', 0) + ps.get('total_fail_proxy_timeout', 0) + ps.get('total_fail_other_parse', 0);
                success_rate = (ps.get('total_success', 0) / total_requests * 100) if total_requests > 0 else 0
                print(f"Req Tot Proxy: {total_requests}, Successi: {ps.get('total_success', 0)} ({success_rate:.1f}%)")
                print(f"  Fail: 429={ps.get('total_fail_429', 0)}, Block={ps.get('total_fail_block',0)}, Proxy/Timeout={ps.get('total_fail_proxy_timeout', 0)}, Altri/Parse={ps.get('total_fail_other_parse', 0)}")
                tfp = ps.get('top_failing_proxies', {});
                if tfp:
                     print("Top Failing Proxies:")
                     # Formattazione migliorata per leggibilità
                     for pid, d in list(tfp.items())[:5]: # Mostra solo top 5
                         fails_str = f"FailsCons:{d['consecutive_fails']} (429:{d['fail_429']}, Blk:{d['fail_block']}, P/T:{d['fail_proxy/timeout']}, O/P:{d['fail_other/parse']})"
                         print(f"  - {pid}: Succ:{d['success']}, {fails_str}")
            else: print("Proxy Manager non disponibile per statistiche.")
        except Exception as stats_exc: log_print("ERROR", f"Errore stampa stats proxy: {stats_exc}")

        # Blocco Tempo Esecuzione
        main_end_time = time.time(); total_duration = main_end_time - main_start_time
        log_print("INFO", f"\n--- Script V7.9.3 completato in {total_duration:.2f} sec ({total_duration/60:.2f} min) ---")
