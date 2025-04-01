# -*- coding: utf-8 -*-

# 🚀 Script Ottimizzato per Google Trends - V7.9.0 (Docs Only & OpenAI & Saturation via curl_cffi)
#    Lavora direttamente con i file nella cartella 'docs'.
#    Genera solo 'docs/data.js'.
#    Integra OpenAI.
#    **Formula V7.9 per Discover Score (Numeratore Pesato).**
#    **Saturazione Intitle (24h) via curl_cffi + Headers Specifici.**

# --- Import Librerie Essenziali ---
import requests # Per eccezioni standard e fallback scraper
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
import cloudscraper # Mantenuto per estrazione iniziale
import socket
import threading
from copy import deepcopy
from pytrends.request import TrendReq
from bs4 import BeautifulSoup
from tqdm import tqdm
from datetime import datetime
import shutil
import openai
import math
from urllib.parse import quote_plus

# NUOVA DIPENDENZA per scraping SERP
try:
    from curl_cffi.requests import get as impersonate_get, Session as ImpersonateSession
    CURL_CFFI_AVAILABLE = True
    print("Libreria 'curl_cffi' importata con successo.")
except ImportError:
    warnings.warn("Libreria 'curl_cffi' non trovata. Lo scraping SERP per la saturazione fallirà. Installa con 'pip install curl_cffi'", ImportWarning)
    CURL_CFFI_AVAILABLE = False
    # Definisci un placeholder se non importato per evitare NameError dopo
    def impersonate_get(*args, **kwargs): raise ImportError("curl_cffi non è installato")

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
# Silenzia warning specifici di curl_cffi se necessario (potrebbero apparire su alcuni sistemi)
# warnings.filterwarnings("ignore", message="curl_cffi version lower than.*", category=UserWarning)

# ==============================================================================
# ==================== SEZIONE PARAMETRI CONFIGURABILI =========================
# ==============================================================================

SCRIPT_VERSION = "7.9.0" # Versione aggiornata con curl_cffi

# --- Parametri Principali ---
TOP_N_FINAL_DISPLAY = 50
OUTPUT_FILENAME = "index.html"
OUTPUT_DIR = "docs"
CHECKPOINT_DIR = "checkpoint_data"

# --- Parametri Contesto di Volume ---
FETCH_VOLUME_CONTEXT = True
N_PROCESS_FOR_CONTEXT = 50
CONTEXT_TIMEFRAMES = ['now 1-H', 'now 4-H', 'now 7-d']
CONTEXT_N_RUNS = 2

# --- Parametri Integrazione OpenAI ---
FETCH_OPENAI_ENTITIES = True
N_PROCESS_FOR_OPENAI = N_PROCESS_FOR_CONTEXT
OPENAI_MODEL = "gpt-4o"
OPENAI_MAX_RETRIES = 3
OPENAI_REQUEST_TIMEOUT = 30
MAX_OPENAI_THREADS = 10

# --- Parametri Saturazione Concorrenza (con curl_cffi) ---
FETCH_SATURATION_DATA = True
N_PROCESS_FOR_SATURATION = TOP_N_FINAL_DISPLAY
MAX_THREADS_SATURATION = 25 # Riduciamolo leggermente per sicurezza con curl_cffi
SATURATION_MAX_RETRIES = 4 # Tentativi per singola SERP con curl_cffi
SATURATION_IMPERSONATE_BROWSER = 'chrome124' # Target per curl_cffi
SATURATION_CONNECT_TIMEOUT = 20 # Aumenta leggermente timeout connessione
SATURATION_READ_TIMEOUT = 30 # Aumenta timeout lettura
SATURATION_INITIAL_BACKOFF_429 = 12
SATURATION_BACKOFF_MULTIPLIER_429 = 1.6

# --- Chiave API OpenAI ---
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
MAX_THREADS_PYTRENDS = 80

# --- Parametri Ritardi e Pause ---
MIN_DELAY_BETWEEN_REQUESTS = 0
MAX_DELAY_BETWEEN_REQUESTS = 2.0
ENTITY_EXTRACTION_INITIAL_WAIT = 5

# --- Parametri Gestione Errori e Tentativi ---
ENTITY_EXTRACTION_MAX_RETRIES = 15
MAX_RETRIES_PYTRENDS_CONTEXT = 8
INITIAL_BACKOFF_SECONDS_429 = 5 # Per pytrends/extraction
BACKOFF_MULTIPLIER_429 = 1.2 # Per pytrends/extraction
MAX_WAIT_SECONDS = 25 # Aumentato leggermente
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
# ============= FUNZIONE CALCOLO DISCOVER SCORE (V7.9) =========================
# ==============================================================================
def calculate_discover_score(rank_series, score_4h, score_7d, k_penalty=V7D_PENALTY_K, epsilon=V7D_PENALTY_EPSILON, weight_v4h=WEIGHT_V4H_NUMERATOR, weight_v7d=WEIGHT_V7D_NUMERATOR):
    """Calcola l'Heuristic Discover Score V7.9 (Numeratore Pesato)."""
    low_v7d_penalty_factor = np.maximum(1.0, k_penalty / (score_7d + epsilon))
    effective_rank = rank_series * low_v7d_penalty_factor
    denominator = np.log1p(effective_rank)
    denominator = np.maximum(denominator, 1e-9)
    numerator = 1 + (score_4h * weight_v4h) + (score_7d * weight_v7d)
    discover_score = numerator / denominator
    discover_score = discover_score.fillna(0)
    return discover_score
# ==============================================================================

# --- Definizione Stringa Base Proxy e Filtro ---
# NOTA: Inserisci qui le tue credenziali proxy reali!
proxy_base_string = "v2.proxyempire.io:5000:USER-country-{geo}:PASSWORD"
original_country_codes = ['af', 'al', 'dz', 'as', 'ad', 'ao', 'ai', 'aq', 'ag', 'ar', 'am', 'aw', 'au', 'at', 'az', 'bs', 'bh', 'bd', 'bb', 'by', 'be', 'bz', 'bj', 'bm', 'bt', 'bo', 'ba', 'bw', 'br', 'io', 'bn', 'bg', 'bf', 'bi', 'kh', 'cm', 'ca', 'cv', 'ky', 'cf', 'td', 'cl', 'cn', 'co', 'km', 'cg', 'ck', 'cr', 'hr', 'cu', 'cy', 'cz', 'dk', 'dj', 'dm', 'do', 'ec', 'eg', 'sv', 'gq', 'er', 'ee', 'et', 'fk', 'fo', 'fj', 'fi', 'fr', 'gf', 'pf', 'ga', 'gm', 'ge', 'de', 'gh', 'gi', 'gr', 'gl', 'gd', 'gp', 'gu', 'gt', 'gg', 'gn', 'gw', 'gy', 'ht', 'va', 'hn', 'hk', 'hu', 'is', 'in', 'id', 'ir', 'iq', 'ie', 'im', 'il', 'it', 'ci', 'jm', 'jp', 'je', 'jo', 'kz', 'ke', 'ki', 'kw', 'kg', 'la', 'lv', 'lb', 'ls', 'lr', 'ly', 'li', 'lt', 'lu', 'mo', 'mk', 'mg', 'mw', 'my', 'mv', 'ml', 'mt', 'mh', 'mq', 'mr', 'mu', 'yt', 'mx', 'fm', 'md', 'mc', 'mn', 'me', 'ms', 'ma', 'mz', 'mm', 'na', 'nr', 'np', 'nl', 'nc', 'nz', 'ni', 'ne', 'ng', 'nu', 'nf', 'kp', 'gb', 'mp', 'no', 'om', 'pk', 'pw', 'ps', 'pa', 'pg', 'py', 'pe', 'ph', 'pl', 'pt', 'pr', 'qa', 're', 'ro', 'ru', 'rw', 'sh', 'kn', 'lc', 'vc', 'ws', 'sm', 'st', 'sa', 'sn', 'rs', 'sc', 'sl', 'sg', 'sk', 'si', 'sb', 'so', 'za', 'kr', 'ss', 'es', 'lk', 'sd', 'sr', 'sz', 'se', 'ch', 'sy', 'tj', 'tw', 'tz', 'th', 'cd', 'tl', 'tg', 'tk', 'to', 'tt', 'tn', 'tr', 'tm', 'tc', 'tv', 'ug', 'ua', 'ae', 'us', 'uy', 'uz', 'vu', 've', 'vn', 'vg', 'vi', 'wf', 'eh', 'ye', 'zm', 'zw']
proxies_to_remove_geo = {'aq', 'io', 'cf', 'bi', 'td', 'km', 'fk', 'cn', 'gw', 'va', 'ki', 'nr', 'nu', 'nf', 'kp', 'pg', 'sh', 'ws', 'tl', 'tk', 'tv', 'wf', 'eh', 'dj', 'gl', 'al', 'cu', 'ir', 'sy', 'sd'}
country_codes = [code for code in original_country_codes if code not in proxies_to_remove_geo]
print(f"GEO usati: {len(country_codes)}.")
proxies_list_with_geo = []
for geo in country_codes:
    proxy_str = proxy_base_string.format(geo=geo.lower()); parts = proxy_str.split(':')
    if len(parts) == 4:
        # Verifica se user e password sono presenti (non stringhe vuote)
        if parts[2] and parts[3] and parts[2] != 'USER' and parts[3] != 'PASSWORD':
             match = re.search(r'-country-([a-z]{2})', parts[2], re.IGNORECASE)
             if match: proxies_list_with_geo.append({"proxy": proxy_str, "geo": match.group(1).upper()})
        elif 'USER' in parts[2] or 'PASSWORD' in parts[3]:
             warnings.warn("!!! Proxy base string contiene ancora USER/PASSWORD placeholder! Inserisci credenziali reali. !!!", UserWarning)
             # Puoi decidere di bloccare l'esecuzione qui se le credenziali sono mancanti
             # raise ValueError("Credenziali proxy mancanti in proxy_base_string")
             break # Interrompi la generazione lista proxy se le credenziali mancano

if not proxies_list_with_geo and ('USER' not in proxy_base_string and 'PASSWORD' not in proxy_base_string):
    raise ValueError("!!! Lista proxy VUOTA dopo filtro e credenziali sembrano inserite! Controlla formato credenziali/geo. !!!")
elif proxies_list_with_geo:
     print(f"Generati {len(proxies_list_with_geo)} proxy con geo.")

# --- Mapping Geo -> Lingua/Timezone ---
COUNTRY_LOCALE_MAP = {'IT': {'hl': 'it-IT', 'tz': 60}, 'US': {'hl': 'en-US', 'tz': -300}, 'GB': {'hl': 'en-GB', 'tz': 0}, 'FR': {'hl': 'fr-FR', 'tz': 60}, 'DE': {'hl': 'de-DE', 'tz': 60}, 'ES': {'hl': 'es-ES', 'tz': 60}, 'JP': {'hl': 'ja-JP', 'tz': 540}, 'AU': {'hl': 'en-AU', 'tz': 600}, 'CA': {'hl': 'en-CA', 'tz': -300}, 'BR': {'hl': 'pt-BR', 'tz': -180}, 'IN': {'hl': 'en-IN', 'tz': 330}, 'MA': {'hl': 'fr-MA', 'tz': 0}, 'HN': {'hl': 'es-HN', 'tz': -360}, 'BS': {'hl': 'en-BS', 'tz': -300}, 'TO': {'hl': 'en-TO', 'tz': 780}, 'BE': {'hl': 'fr-BE', 'tz': 60}, 'OM': {'hl': 'ar-OM', 'tz': 240}, 'GM': {'hl': 'en-GM', 'tz': 0}, 'LU': {'hl': 'fr-LU', 'tz': 60}, 'BN': {'hl': 'ms-BN', 'tz': 480}, 'SZ': {'hl': 'en-SZ', 'tz': 120}, 'MN': {'hl': 'mn-MN', 'tz': 480}, 'EG': {'hl': 'ar-EG', 'tz': 120}, 'AT': {'hl': 'de-AT', 'tz': 60}, 'IE': {'hl': 'en-IE', 'tz': 0}, 'KW': {'hl': 'ar-KW', 'tz': 180}, 'MM': {'hl': 'my-MM', 'tz': 390}, 'LV': {'hl': 'lv-LV', 'tz': 120}, 'RW': {'hl': 'rw-RW', 'tz': 120}, 'KR': {'hl': 'ko-KR', 'tz': 540}, 'TJ': {'hl': 'tg-TJ', 'tz': 300}, 'MH': {'hl': 'en-MH', 'tz': 720}, 'ZA': {'hl': 'en-ZA', 'tz': 120}, 'FI': {'hl': 'fi-FI', 'tz': 120}, 'DEFAULT': {'hl': 'en-US', 'tz': 0}}
def get_locale_for_geo(geo_code): return COUNTRY_LOCALE_MAP.get(geo_code.upper(), COUNTRY_LOCALE_MAP['DEFAULT'])

# --- Classi AdvancedProxyManager e ConsistentBrowserProfile ---
class AdvancedProxyManager:
    def __init__(self, proxy_geo_list, max_concurrent, cooldown_seconds):
        self.max_concurrent = max_concurrent
        self.cooldown_seconds = cooldown_seconds
        self.lock = threading.Lock()
        self.all_proxies = {i['proxy']: i['geo'] for i in proxy_geo_list}
        self.available_proxies = deque(self.all_proxies.keys())
        random.shuffle(list(self.available_proxies)) # Shuffle iniziale
        self.active_proxies = {} # proxy_str: start_time
        self.cooldown_proxies = {} # proxy_str: cooldown_end_time
        self.proxy_consecutive_failures = defaultdict(int)
        self.proxy_stats = defaultdict(lambda: {"success": 0, "fail_429": 0, "fail_5xx": 0, "fail_other": 0, "fail_timeout": 0, "fail_proxy_error": 0, "fail_parse": 0})
        # Rimuovi gestione sessione scraper, non più necessaria qui
        # self.active_sessions = {}
        print(f"AdvProxyManager: {len(self.all_proxies)} proxies, MaxConc: {self.max_concurrent}, CD: {self.cooldown_seconds}s")

    def _check_cooldown(self):
        current_time = time.time()
        reactivate = []
        # Itera su una copia per poter modificare il dizionario
        for proxy, cooldown_end_time in list(self.cooldown_proxies.items()):
            if current_time >= cooldown_end_time:
                reactivate.append(proxy)
        # Riattiva i proxy usciti dal cooldown
        for proxy in reactivate:
            if proxy in self.cooldown_proxies: # Verifica se ancora presente (potrebbe essere stato rimosso)
                 del self.cooldown_proxies[proxy]
                 self.available_proxies.append(proxy) # Rimetti in coda

    def get_proxy(self):
        """Ottiene una stringa proxy disponibile e il suo codice geo."""
        with self.lock:
            self._check_cooldown()
            if len(self.active_proxies) < self.max_concurrent and self.available_proxies:
                proxy_str = self.available_proxies.popleft()
                geo_code = self.all_proxies[proxy_str]
                self.active_proxies[proxy_str] = time.time() # Segna come attivo
                proxy_url = get_proxy_url(proxy_str) # Ottieni formato URL
                if not proxy_url:
                     # Se l'URL non è valido, rilascia subito e prova a prenderne un altro
                     print(f"      WARN: Formato proxy non valido per {proxy_str}. Rilascio immediato.")
                     del self.active_proxies[proxy_str]
                     self.proxy_consecutive_failures[proxy_str] += 1 # Consideralo un fallimento
                     self.cooldown_proxies[proxy_str] = time.time() + self.cooldown_seconds * 2 # Penalità media
                     return self.get_proxy() # Tentativo ricorsivo (con cautela)
                return proxy_str, geo_code, proxy_url # Restituisce str originale, geo e URL formattato
            else:
                # print("      DEBUG: No proxy available or max concurrency reached.")
                return None, None, None # Nessun proxy disponibile

    # Rimuovi get_pytrends_session e gestione scraper
    # def get_pytrends_session(...)
    # def __init__(...): self.active_sessions = {} ...
    # if p_str in self.active_sessions: ...

    def release_proxy(self, proxy_str, success=True, status_code=None, error_type=None):
        """Rilascia un proxy, applicando cooldown in caso di fallimento."""
        with self.lock:
            if proxy_str not in self.all_proxies:
                warnings.warn(f"Tentativo di rilasciare proxy non gestito: {proxy_str}", UserWarning)
                return

            # Rimuovi da attivi se presente
            if proxy_str in self.active_proxies:
                del self.active_proxies[proxy_str]

            cooldown_end_time = time.time() + self.cooldown_seconds # Cooldown base
            geo_code = self.all_proxies.get(proxy_str, 'N/A')

            if success:
                self.proxy_stats[proxy_str]["success"] += 1
                self.proxy_consecutive_failures[proxy_str] = 0 # Reset fallimenti consecutivi
                # Proxy di successo torna subito disponibile (o dopo cooldown base)
                self.available_proxies.append(proxy_str) # Rimetti in coda subito? O dopo cooldown base? Mettiamolo dopo cooldown base per ora.
                # self.cooldown_proxies[proxy_str] = cooldown_end_time
            else:
                # Incrementa fallimenti consecutivi
                self.proxy_consecutive_failures[proxy_str] += 1
                fails = self.proxy_consecutive_failures[proxy_str]

                # Applica cooldown maggiorato in base al tipo di errore e ai fallimenti consecutivi
                base_multiplier = 1.0
                if error_type == '429_related' or status_code == 429:
                    self.proxy_stats[proxy_str]["fail_429"] += 1
                    base_multiplier = 4.0 # Cooldown molto più lungo per 429
                elif error_type == 'Timeout':
                    self.proxy_stats[proxy_str]["fail_timeout"] += 1
                    base_multiplier = 2.0
                elif error_type == 'ProxyError' or (isinstance(status_code, int) and (500 <= status_code <= 599 or status_code in [403, 503])):
                    self.proxy_stats[proxy_str]["fail_proxy_error"] += 1
                    base_multiplier = 3.0 # Cooldown lungo per errori proxy/blocco
                elif error_type == 'parse_fail' or error_type == 'empty_data' or error_type == 'parse_fail_serp':
                    self.proxy_stats[proxy_str]["fail_parse"] += 1
                    base_multiplier = 1.5
                else: # Altri errori HTTP o generici
                    self.proxy_stats[proxy_str]["fail_other"] += 1
                    base_multiplier = 1.2

                # Calcola cooldown finale
                current_cooldown_duration = self.cooldown_seconds * base_multiplier
                # Aggiungi penalità extra per fallimenti consecutivi
                if fails >= PROXY_FAILURE_THRESHOLD:
                    penalty_multiplier = 1 + (PROXY_FAILURE_COOLDOWN_MULTIPLIER * (fails - PROXY_FAILURE_THRESHOLD + 1))
                    final_duration = current_cooldown_duration * penalty_multiplier
                    print(f"      INFO: Proxy {geo_code} ({proxy_str[-10:]}) ha {fails} fails cons. CD esteso a {final_duration:.0f}s (Base: {current_cooldown_duration:.0f}s * Penalty: {penalty_multiplier:.1f}).")
                else:
                    final_duration = current_cooldown_duration

                cooldown_end_time = time.time() + final_duration
                self.cooldown_proxies[proxy_str] = cooldown_end_time # Metti in cooldown

    def get_proxy_stats_summary(self):
         # ... (funzione invariata) ...
         pass

class ConsistentBrowserProfile: # Mantenuta per pytrends e estrazione iniziale
    # ... (classe invariata) ...
    pass

# --- Inizializzazione Manager Globale ---
# Assicurati che proxies_list_with_geo sia popolata prima di chiamare
if proxies_list_with_geo:
     proxy_manager = AdvancedProxyManager(proxies_list_with_geo, MAX_CONCURRENT_PROXIES, PROXY_USE_COOLDOWN)
else:
     # Se la lista è vuota E non è perché mancano le credenziali, solleva errore
     if 'USER' not in proxy_base_string and 'PASSWORD' not in proxy_base_string:
          raise ValueError("Lista proxy vuota ma credenziali sembrano inserite. Esecuzione interrotta.")
     else:
          # Se mancano credenziali, esci o procedi senza proxy manager? Meglio uscire.
          raise ValueError("Credenziali proxy mancanti o lista proxy vuota. Esecuzione interrotta.")


# --- Funzione Utilità get_proxy_url ---
def get_proxy_url(proxy_str):
    """Converte la stringa proxy nel formato URL http://user:pass@host:port."""
    # ... (funzione invariata) ...
    pass

# --- Estrazione Entità ORDINATA (usa cloudscraper/requests) ---
def extract_ordered_entities(max_retries=ENTITY_EXTRACTION_MAX_RETRIES, initial_wait=ENTITY_EXTRACTION_INITIAL_WAIT):
    """Estrae la lista ORDINATA di entità da Google Trends TV (usa cloudscraper)."""
    attempts = 0; current_wait = initial_wait; proxy_info_tuple = None; # Cambiato nome variabile
    print(f"Avvio estrazione lista entità ORDINATA (max {max_retries} tentativi)...")
    while attempts < max_retries:
        attempts += 1; print(f"Tentativo {attempts}/{max_retries} per estrarre entità ordinate...")
        proxy_str, geo_code, proxy_url = None, None, None # Resetta variabili proxy
        status_code, error_type_str, release_success = None, None, False
        scraper = None # Resetta scraper

        try:
            # Ottieni Proxy dal manager
            get_proxy_attempts = 0
            proxy_info_tuple = None
            while proxy_info_tuple is None and get_proxy_attempts < 5:
                 get_proxy_attempts += 1
                 proxy_info_tuple = proxy_manager.get_proxy() # Ottiene (str, geo, url)
                 time.sleep(random.uniform(2, 5) if proxy_info_tuple is None else 0)

            if proxy_info_tuple is None:
                 print("    Impossibile ottenere proxy per estrazione iniziale. Attesa...");
                 time.sleep(min(current_wait * 1.5, MAX_WAIT_SECONDS / 2)); current_wait *= 1.5; continue

            proxy_str, geo_code, proxy_url = proxy_info_tuple # Unpack
            print(f"    Tentativo estrazione con proxy: {geo_code} ({proxy_str[-10:]})")

            # Crea scraper con profilo e proxy
            try: prof=ConsistentBrowserProfile(geo_code)
            except Exception as e: print(f"      Profilo err {geo_code}: {e}. Uso def."); prof=ConsistentBrowserProfile('DEFAULT')
            try:
                bcfg={'browser':'chrome','platform':prof.os if prof.os in ['windows','darwin','linux'] else 'windows','mobile':False,'desktop':True,'user_agent':prof.user_agent};
                scraper=cloudscraper.create_scraper(browser=bcfg, delay=random.uniform(0.5,1.5))
                scraper.headers.update(prof.get_headers())
            except Exception as e:
                print(f"      Scraper cloudscraper err {geo_code} ({type(e).__name__}). Uso requests base.");
                scraper=requests.Session(); scraper.headers.update(prof.get_headers());

            # Imposta proxy sullo scraper
            scraper.proxies = {'http': proxy_url, 'https': proxy_url}

            # Esegui richiesta
            time.sleep(random.uniform(0.5, 1.5)); target_url = "https://trends.google.com/tv/?geo=IT"; res = None; max_internal_retries = 2
            for internal_attempt in range(max_internal_retries):
                 # ... (logica retry interna GET invariata, usa `scraper.get`) ...
                 try:
                     res = scraper.get(target_url, timeout=(ENTITY_EXTRACTION_CONNECT_TIMEOUT, ENTITY_EXTRACTION_READ_TIMEOUT))
                     status_code = res.status_code
                     if status_code == 200: break
                     else: print(f"        Non-200: {status_code}, Retry {internal_attempt + 1}/{max_internal_retries}"); time.sleep(1.5 if internal_attempt < max_internal_retries - 1 else 0)
                 except (requests.exceptions.Timeout, socket.timeout) as e_timeout_internal:
                     # ... gestione timeout interna ...
                     status_code = None
                     if internal_attempt >= max_internal_retries - 1: raise e_timeout_internal
                     time.sleep(2)
                 except Exception as e_int:
                     # ... gestione eccezione interna ...
                     status_code = None
                     if internal_attempt >= max_internal_retries - 1: raise e_int
                     time.sleep(2)

            if res is None or res.status_code != 200: status_code = res.status_code if res else None; raise Exception(f"Req fallita dopo retry interni. Status: {status_code}")

            # Parsing HTML (invariato)
            soup = BeautifulSoup(res.text, 'html.parser'); scripts = soup.find_all('script'); found_data = False; ordered_entities_found = []
            for script in scripts:
                 # ... (logica parsing JSON da script invariata) ...
                 if script.string and 'AF_initDataCallback' in script.string and 'key: \'ds:0\'' in script.string:
                     try:
                         match = re.search(r"data:(.*), sideChannel:", script.string, re.DOTALL)
                         if match: json_text = match.group(1).strip().rstrip(','); data = json.loads(json_text)
                         if isinstance(data, list) and len(data) > 1 and isinstance(data[1], list):
                             entities = [item[0] for item in data[1] if isinstance(item, list) and item and isinstance(item[0], str)]
                             if entities: ordered_entities_found = entities; found_data = True; break
                     except Exception as e_parse: print(f"        Parse JSON err (Proxy: {geo_code}): {e_parse}"); error_type_str = 'parse_fail'


            if found_data and ordered_entities_found:
                print(f"    Estratte {len(ordered_entities_found)} entità ordinate via {geo_code}.");
                release_success = True; return ordered_entities_found
            else:
                 print(f"    Status 200 ma dati non trovati/parsati via {geo_code}.");
                 error_type_str = 'parse_fail'; wait_time = min(current_wait * 1.5, MAX_WAIT_SECONDS / 2); time.sleep(wait_time); current_wait = wait_time * 1.2

        except Exception as e:
             # ... (gestione eccezioni esterna invariata, determina error_type_str) ...
             error_type_str = type(e).__name__; print(f"!! Errore estrazione (Tentativo {attempts}, Proxy: {geo_code}): {error_type_str}: {e} !!");
             wait_time = min(current_wait * 1.2, MAX_WAIT_SECONDS / 2); time.sleep(wait_time); current_wait = wait_time * 1.2
             if isinstance(e, (requests.exceptions.ProxyError, requests.exceptions.ConnectionError)): error_type_str = 'ProxyError'
             elif isinstance(e, requests.exceptions.Timeout): error_type_str = 'Timeout'
             if 'res' not in locals() or res is None: status_code = None
        finally:
            # Rilascia il proxy usato (se ne è stato ottenuto uno)
            if proxy_str: # Usa proxy_str per rilasciare
                 proxy_manager.release_proxy(proxy_str, success=release_success, status_code=status_code, error_type=error_type_str)
                 proxy_info_tuple = None # Resetta per il prossimo ciclo while

    print(f"!!! Estrazione entità ORDINATE fallita dopo {max_retries} tentativi. !!!"); return None


# --- Funzione get_trends_scores (usa pytrends) ---
def get_trends_scores(keywords, timeframe):
    """Ottiene i punteggi medi da Pytrends (usa proxy da manager)."""
    attempts = 0; current_backoff_429 = INITIAL_BACKOFF_SECONDS_429; current_backoff_other = 3.0; start_time = time.time()
    proxy_info_tuple = None; pytrends = None; # Cambiato nome variabile
    max_proxy_attempts = min(len(proxy_manager.all_proxies) // 2, MAX_RETRIES_PYTRENDS_CONTEXT * 2); proxy_attempts_set = set()
    kw_list_str = ",".join(sorted(keywords)); kw_hash = hashlib.md5(kw_list_str.encode()).hexdigest()[:6]

    while attempts < MAX_RETRIES_PYTRENDS_CONTEXT and len(proxy_attempts_set) < max_proxy_attempts:
        attempts += 1; proxy_str, geo_code, proxy_url = None, None, None; # Resetta
        status_code, error_type_str, release_success = None, None, False; pytrends = None # Resetta

        try:
            # Ottieni proxy
            get_proxy_attempts = 0
            proxy_info_tuple = None
            while proxy_info_tuple is None and get_proxy_attempts < 5:
                 get_proxy_attempts += 1
                 proxy_info_tuple = proxy_manager.get_proxy()
                 time.sleep(random.uniform(2, 5) if proxy_info_tuple is None else 0)
            if proxy_info_tuple is None: print(f"        [CTX KW:{kw_hash} T{attempts}] No proxy for context. Skip."); time.sleep(min(current_backoff_other * 1.5, MAX_WAIT_SECONDS / 2)); current_backoff_other *= 1.2; continue

            proxy_str, geo_code, proxy_url = proxy_info_tuple

            # Controllo duplicati interni (invariato)
            if proxy_str in proxy_attempts_set: proxy_manager.release_proxy(proxy_str, success=False, error_type="duplicato_interno"); proxy_info_tuple = None; continue
            proxy_attempts_set.add(proxy_str);

            # Crea sessione Pytrends con proxy URL
            try:
                prof = ConsistentBrowserProfile(geo_code) # Profilo per parametri hl/tz
                params = prof.get_pytrends_params()
                pytrends = TrendReq(hl=params['hl'], tz=params['tz'], timeout=(PYTRENDS_CONNECT_TIMEOUT,PYTRENDS_READ_TIMEOUT), retries=PYTRENDS_RETRIES, backoff_factor=PYTRENDS_BACKOFF_FACTOR, proxies=[proxy_url]) # Passa URL proxy a pytrends
            except Exception as e_session: print(f"        [CTX KW:{kw_hash} T{attempts}] Session pytrends err (Proxy: {geo_code}): {e_session}"); error_type_str = "pytrends_session_error"; raise # Rilancia per far rilasciare il proxy nel finally

            # Esegui richiesta Pytrends (invariato)
            base_delay = random.uniform(MIN_DELAY_BETWEEN_REQUESTS, MAX_DELAY_BETWEEN_REQUESTS);
            time.sleep(base_delay)
            shuffled = keywords.copy(); random.shuffle(shuffled); pytrends.build_payload(shuffled, timeframe=timeframe, geo='IT', gprop='')
            df = pytrends.interest_over_time()

            # Gestione risultato (invariato)
            if df.empty or all(c == 'isPartial' for c in df.columns): print(f"        [CTX KW:{kw_hash} T{attempts}] Empty data (Proxy: {geo_code})."); error_type_str = 'empty_data'; time.sleep(current_backoff_other); current_backoff_other = min(current_backoff_other * 1.2, MAX_WAIT_SECONDS / 4)
            else: scores = df.drop(columns=['isPartial'], errors='ignore').mean().to_dict(); final = {kw: scores.get(kw, 0) for kw in keywords}; elapsed = time.time() - start_time;
            release_success = True; return final

        # Gestione eccezioni (invariata, determina error_type_str e status_code)
        except requests.exceptions.HTTPError as http_err:
             # ...
             status_code = http_err.response.status_code if hasattr(http_err, 'response') and http_err.response else None; print(f"      !![CTX KW:{kw_hash} T{attempts}] HTTP Err {status_code or 'N/A'} (Proxy: {geo_code}).")
             if status_code == 429: error_type_str = '429_related'; wait = min(current_backoff_429, MAX_WAIT_SECONDS); print(f"            -> 429! Wait: {wait:.1f}s..."); time.sleep(wait); current_backoff_429 = min(current_backoff_429 * BACKOFF_MULTIPLIER_429, MAX_WAIT_SECONDS * 1.5)
             elif status_code and 500 <= status_code <= 599: error_type_str = 'ProxyError'; wait = min(current_backoff_other*1.5, MAX_WAIT_SECONDS/2); print(f"            -> 5xx Err {status_code}. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
             else: error_type_str = f"HTTP_{status_code or 'N/A'}"; wait = min(current_backoff_other*1.5, MAX_WAIT_SECONDS/2); print(f"            -> HTTP Err {status_code}. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
        except (requests.exceptions.Timeout, socket.timeout) as timeout_err:
             # ...
             error_type_str = 'Timeout'; print(f"      !![CTX KW:{kw_hash} T{attempts}] Timeout (Proxy: {geo_code}): {timeout_err}"); wait = min(current_backoff_other*1.2, MAX_WAIT_SECONDS/2); print(f"            -> Timeout. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = wait * 1.2
        except (requests.exceptions.ProxyError, requests.exceptions.ConnectionError, ConnectionRefusedError, OSError) as proxy_err:
             # ...
             error_type_str = 'ProxyError'; status_code = 502 if '502' in str(proxy_err) else None
             print(f"      !![CTX KW:{kw_hash} T{attempts}] Proxy/Conn Err (Proxy: {geo_code}): {type(proxy_err).__name__} - {str(proxy_err)[:100]}")
             wait = min(current_backoff_other * 1.5, MAX_WAIT_SECONDS / 2); print(f"            -> Proxy Err. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other * 1.5, MAX_WAIT_SECONDS)
        except Exception as e:
             # ...
             msg = str(e); error_type_str = type(e).__name__; is_429 = '429' in msg or ('response' in dir(e) and hasattr(e.response, 'status_code') and e.response.status_code == 429) ; print(f"!! [CTX KW:{kw_hash} T{attempts}] UNEXPECTED Err (Proxy: {geo_code}): {error_type_str}: {msg[:150]}...")
             if is_429: error_type_str = '429_related'; wait = min(current_backoff_429, MAX_WAIT_SECONDS); print(f"            -> 429 DETECTED! Wait: {wait:.1f}s..."); time.sleep(wait); current_backoff_429 = min(current_backoff_429 * BACKOFF_MULTIPLIER_429, MAX_WAIT_SECONDS * 1.5)
             elif isinstance(e, AttributeError): error_type_str = 'parse_fail'; wait = min(current_backoff_other, MAX_WAIT_SECONDS/2); print(f"            -> Attr Err. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
             else: wait = min(current_backoff_other, MAX_WAIT_SECONDS/2); print(f"            -> Generic Err. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
        finally:
             # Rilascia il proxy se è stato ottenuto
             if proxy_str:
                 proxy_manager.release_proxy(proxy_str, success=release_success, status_code=status_code, error_type=error_type_str)
                 proxy_info_tuple = None # Resetta

    print(f"!!! [CTX KW:{kw_hash}] Failed {attempts} context attempts for {kw_list_str} ({timeframe}). Returning scores as 0.")
    return {kw: 0 for kw in keywords}

# --- Funzione get_all_context_scores ---
def get_all_context_scores(entities_subset, timeframe, max_threads=MAX_THREADS_PYTRENDS):
    """Ottiene i punteggi per tutte le entità in parallelo per un dato timeframe."""
    # ... (logica ThreadPoolExecutor invariata, chiama get_trends_scores_safe) ...
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
# ==================== FUNZIONI INTEGRAZIONE OPENAI ==========================
# ==============================================================================
# ... (funzioni OpenAI invariate: get_single_entity_openai, get_entities_with_openai) ...
def get_single_entity_openai(trend_string, model=OPENAI_MODEL, max_retries=OPENAI_MAX_RETRIES, request_timeout=OPENAI_REQUEST_TIMEOUT):
    """
    Chiama l'API OpenAI per estrarre entità da una singola stringa di trend.
    Restituisce una stringa di entità separate da ' - ' o None in caso di fallimento.
    """
    if not client:
        return None
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
            if e.status_code >= 500 or e.status_code in [401, 403]:
                print(f"  !! Errore {e.status_code} non recuperabile. Interruzione tentativi per '{trend_string}'.")
                return None
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
    """
    if not client or not FETCH_OPENAI_ENTITIES:
        print("\n--- Estrazione Entità OpenAI Saltata ---")
        return {}
    print(f"\n--- Avvio Estrazione Entità OpenAI ({len(trend_list)} trends, Max Workers: {max_workers}, Modello: {OPENAI_MODEL}) ---")
    extracted_entities_map = {}
    futures = {}
    sem = threading.Semaphore(max_workers)
    def call_openai_safe(trend):
        with sem: return get_single_entity_openai(trend)
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
# ========== FUNZIONI SCRAPING SATURAZIONE SERP (con curl_cffi) ================
# ==============================================================================

# Funzione di Parsing (uguale a Colab V5)
def parse_result_stats(html_content):
    """Estrae il numero di risultati dal div #result-stats. Con debug esteso."""
    # ... (funzione identica a quella testata con successo in Colab V5) ...
    try:
        # print("      [Parse Debug] Inizializzo BeautifulSoup...") # Meno verboso nello script principale
        soup = BeautifulSoup(html_content, 'html.parser')
        result_stats_div = None
        raw_stats_text = "N/D"

        if not soup.body:
            print("      [Parse FATAL] Tag <body> non trovato nell'HTML ricevuto!")
            return None, "Body HTML mancante"

        # print("      [Parse Debug] Cerco 'div#result-stats'...")
        result_stats_div = soup.find('div', id='result-stats')

        if not result_stats_div:
            # print("      [Parse Debug] 'div#result-stats' non trovato. Provo alternative...")
            result_stats_div = soup.find('div', class_='result-stats')
            if not result_stats_div:
                 # print("      [Parse Debug] 'div.result-stats' non trovato. Provo ricerca testuale euristica...")
                 possible_divs = soup.find_all('div')
                 for div in possible_divs:
                     div_text = div.get_text(separator=" ", strip=True).lower()
                     if 'risultat' in div_text and ('circa' in div_text or re.search(r'\d', div_text)):
                         # print(f"      [Parse Debug] Trovato div euristico potenziale...")
                         result_stats_div = div
                         break
                 # if not result_stats_div: print("      [Parse Debug] Nessun div euristico trovato.") # Meno verboso

        if result_stats_div:
            stats_text = result_stats_div.get_text(separator=" ", strip=True)
            raw_stats_text = stats_text
            # print(f"      [Parse Debug] Trovato testo stats: '{stats_text}'")
            match = re.search(r'([\d\.]+)\s+risultat', stats_text.replace('\xa0', ' '))
            if match:
                num_str = match.group(1).replace('.', '')
                if num_str.isdigit():
                    # print(f"      [Parse OK] Estratto numero: {int(num_str)}")
                    return int(num_str), raw_stats_text
            if "nessun risultato" in stats_text.lower():
                 # print(f"      [Parse OK] Rilevato 'nessun risultato'.")
                 return 0, raw_stats_text
            print(f"      [Parse WARN] Numero non estratto da testo stats: '{stats_text}'") # Warning importante
            return None, raw_stats_text

        else:
            print(f"      [Parse WARN] Nessun div stats trovato alla fine.") # Warning importante
            return None, raw_stats_text

    except Exception as e:
        print(f"      [Parse ERR] Eccezione durante parsing HTML: {e}")
        # traceback.print_exc() # Disabilitato per non floodare il log
        return None, "Errore Parsing Eccezione"


# Funzione Scraping SERP con curl_cffi e Proxy Manager
def get_intitle_results_count_cffi(keyword):
    """
    Esegue scraping SERP per intitle:keyword (24h, it) usando curl_cffi,
    proxy dal manager, e headers specifici. Restituisce il conteggio.
    """
    if not CURL_CFFI_AVAILABLE: return 0 # Salta se curl_cffi non è installato

    attempts = 0
    current_backoff_429 = SATURATION_INITIAL_BACKOFF_429
    current_backoff_other = 5.0 # Backoff base leggermente più alto
    search_term = f'intitle:{keyword}'
    encoded_query = quote_plus(search_term)
    target_url = f"https://www.google.it/search?q={encoded_query}&hl=it&gl=it&tbs=qdr:d&num=10"
    max_proxy_attempts_serp = min(len(proxy_manager.all_proxies) // 2, SATURATION_MAX_RETRIES * 2)
    proxy_attempts_set_serp = set()
    kw_short = keyword[:25] + '...' if len(keyword) > 25 else keyword

    # Headers specifici (come nel test V5)
    headers = {
        "Referer": "https://www.google.com/",
        "Accept-Language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "User-Agent": f"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/{SATURATION_IMPERSONATE_BROWSER[6:]}.0.0.0 Safari/537.36" # Adatta UA alla versione impersonata
    }

    while attempts < SATURATION_MAX_RETRIES and len(proxy_attempts_set_serp) < max_proxy_attempts_serp:
        attempts += 1
        proxy_info_tuple = None; proxy_str, geo_code, proxy_url = None, None, None
        status_code, error_type_str, release_success = None, None, False
        html_content = None # Resetta html content

        try:
            # 1. Ottieni Proxy
            get_proxy_attempts = 0
            while proxy_info_tuple is None and get_proxy_attempts < 5:
                 get_proxy_attempts += 1
                 proxy_info_tuple = proxy_manager.get_proxy() # (str, geo, url)
                 time.sleep(random.uniform(1.5, 4) if proxy_info_tuple is None else 0)
            if proxy_info_tuple is None:
                 print(f"    !! [SERP CFFI KW:{kw_short} T{attempts}] No proxy. Skipping attempt.")
                 time.sleep(min(current_backoff_other * 1.5, MAX_WAIT_SECONDS / 2))
                 current_backoff_other *= 1.2; continue

            proxy_str, geo_code, proxy_url = proxy_info_tuple

            if proxy_str in proxy_attempts_set_serp:
                 proxy_manager.release_proxy(proxy_str, success=False, error_type="duplicato_interno_serp_cffi")
                 proxy_info_tuple = None; continue
            proxy_attempts_set_serp.add(proxy_str)
            # print(f"    [SERP CFFI KW:{kw_short} T{attempts}] Using proxy {geo_code} ({proxy_str[-10:]}) Impersonating {SATURATION_IMPERSONATE_BROWSER}") # Debug verboso

            # 2. Esegui Richiesta con curl_cffi + Proxy
            proxies_dict = {'http': proxy_url, 'https': proxy_url}
            time.sleep(random.uniform(1.0, 3.0)) # Pausa prima della richiesta

            response = impersonate_get(
                target_url,
                headers=headers,
                impersonate=SATURATION_IMPERSONATE_BROWSER,
                proxies=proxies_dict, # Passa il proxy a curl_cffi
                timeout=(SATURATION_CONNECT_TIMEOUT, SATURATION_READ_TIMEOUT), # Usa timeout configurati
                allow_redirects=True,
                verify=False # Spesso utile con proxy, disabilita verifica SSL (usa con cautela)
            )
            status_code = response.status_code
            final_url = response.url

            try: html_content = response.text
            except Exception as e_enc: html_content = response.content.decode('utf-8', errors='ignore')


            # 3. Analizza Risposta
            if status_code == 200:
                # Controlla redirect a consenso
                if "consent.google.com" in final_url:
                    print(f"    ?? [SERP CFFI KW:{kw_short} T{attempts}] Redirect a Consenso (Proxy: {geo_code}).")
                    error_type_str = 'consent_redirect' # Errore specifico
                    # Trattalo come un fallimento medio
                    wait = min(current_backoff_other, MAX_WAIT_SECONDS / 3)
                    time.sleep(wait); current_backoff_other = min(current_backoff_other * 1.1, MAX_WAIT_SECONDS / 2)
                else:
                    # Parsing HTML
                    count, raw_text = parse_result_stats(html_content)
                    if count is not None:
                        # Successo!
                        release_success = True
                        # print(f"    [SERP CFFI OK] '{kw_short}' -> {count} (Proxy: {geo_code}, T:{attempts})") # Debug verboso
                        return count
                    else:
                        # Status 200 ma parse fallito
                        error_type_str = 'parse_fail_serp'
                        print(f"    ?? [SERP CFFI KW:{kw_short} T{attempts}] Status 200 ma parse fallito (Proxy: {geo_code}). HTML salvato se possibile.")
                        # Salva HTML per debug
                        try:
                            filename = f"serp_FAILCFFI_debug_{keyword.replace(' ', '_')[:20]}.html"
                            with open(os.path.join(CHECKPOINT_DIR, filename), 'w', encoding='utf-8') as f: f.write(html_content)
                        except Exception: pass
                        wait = min(current_backoff_other, MAX_WAIT_SECONDS / 3); time.sleep(wait)
                        current_backoff_other = min(current_backoff_other * 1.1, MAX_WAIT_SECONDS / 2)

            # --- Gestione Errori HTTP (simile a prima, ma con log CFFI) ---
            elif status_code == 429:
                error_type_str = '429_related'
                wait = min(current_backoff_429, MAX_WAIT_SECONDS * 0.9) # Backoff specifico SERP CFFI
                print(f"    !! [SERP CFFI KW:{kw_short} T{attempts}] 429 DETECTED! (Proxy: {geo_code}). Wait: {wait:.1f}s...")
                time.sleep(wait); current_backoff_429 = min(current_backoff_429 * SATURATION_BACKOFF_MULTIPLIER_429, MAX_WAIT_SECONDS * 2.5)
            elif status_code in [403, 503]: # Forbidden o Service Unavailable
                error_type_str = 'ProxyError'
                wait = min(current_backoff_other * 2.0, MAX_WAIT_SECONDS * 0.9) # Penalità alta
                print(f"    !! [SERP CFFI KW:{kw_short} T{attempts}] HTTP {status_code} (Proxy: {geo_code}). Likely Block. Wait {wait:.1f}s...")
                time.sleep(wait); current_backoff_other = min(current_backoff_other * 1.6, MAX_WAIT_SECONDS * 1.8)
            # ... (altri status code come 5xx gestiti da eccezione RequestException/ProxyError sotto) ...
            else: # Altri errori HTTP inattesi
                error_type_str = f"HTTP_{status_code}"
                wait = min(current_backoff_other * 1.3, MAX_WAIT_SECONDS / 2)
                print(f"    !! [SERP CFFI KW:{kw_short} T{attempts}] HTTP {status_code} (Proxy: {geo_code}). Wait {wait:.1f}s...")
                time.sleep(wait); current_backoff_other = min(current_backoff_other * 1.3, MAX_WAIT_SECONDS / 1.5)

        # --- Gestione Eccezioni (Timeout, Connessione/Proxy) ---
        except (requests.exceptions.Timeout, socket.timeout) as timeout_err: # curl_cffi può lanciare queste
             error_type_str = 'Timeout'; print(f"    !! [SERP CFFI KW:{kw_short} T{attempts}] Timeout (Proxy: {geo_code}): {timeout_err}")
             wait = min(current_backoff_other*1.3, MAX_WAIT_SECONDS/1.5); print(f"        -> Timeout SERP CFFI. Wait {wait:.1f}s...")
             time.sleep(wait); current_backoff_other = wait * 1.3
        except (requests.exceptions.ProxyError, requests.exceptions.ConnectionError, ConnectionRefusedError, OSError) as proxy_err: # curl_cffi può lanciare queste
             error_type_str = 'ProxyError'; status_code = None # Non abbiamo status code qui
             print(f"    !! [SERP CFFI KW:{kw_short} T{attempts}] Proxy/Conn Err (Proxy: {geo_code}): {type(proxy_err).__name__}")
             wait = min(current_backoff_other * 1.8, MAX_WAIT_SECONDS / 1.5); print(f"        -> Proxy Err SERP CFFI. Wait {wait:.1f}s...")
             time.sleep(wait); current_backoff_other = min(current_backoff_other * 1.8, MAX_WAIT_SECONDS * 1.2)
        except Exception as e: # Cattura altre eccezioni (anche da curl_cffi)
             error_type_str = type(e).__name__; print(f"    !! [SERP CFFI KW:{kw_short} T{attempts}] UNEXPECTED Err (Proxy: {geo_code}): {error_type_str}: {str(e)[:100]}...")
             wait = min(current_backoff_other, MAX_WAIT_SECONDS / 2); time.sleep(wait)
             current_backoff_other = min(current_backoff_other * 1.1, MAX_WAIT_SECONDS / 1.5)

        finally:
            # Rilascia sempre il proxy
            if proxy_str:
                proxy_manager.release_proxy(proxy_str, success=release_success, status_code=status_code, error_type=error_type_str)
                proxy_info_tuple = None

    print(f"!!! [SERP CFFI FAIL] Falliti {attempts} tentativi SERP per '{kw_short}'. Restituito 0.")
    return 0 # Fallback


# Funzione Esecuzione Parallela Saturazione (Usa CFFI)
def get_all_saturation_data(keywords_list, max_threads=MAX_THREADS_SATURATION):
    """Ottiene i conteggi intitle: dalle SERP (via CFFI) per la lista di keyword in parallelo."""
    all_counts = {}
    if not keywords_list or not CURL_CFFI_AVAILABLE:
         if not CURL_CFFI_AVAILABLE: print("\n--- Raccolta Dati Saturazione Saltata (curl_cffi non disponibile) ---")
         return {}

    print(f"\n--- Raccolta dati SATURAZIONE SERP via CFFI ({len(keywords_list)} keywords / {max_threads} threads) ---")
    sem_serp = threading.Semaphore(max_threads)

    def get_serp_count_safe_cffi(kw): # Funzione wrapper per CFFI
        with sem_serp:
            try:
                # Chiama la nuova funzione basata su curl_cffi
                return kw, get_intitle_results_count_cffi(kw)
            except Exception as e:
                print(f"\n!!! Exc safe SERP CFFI: {type(e).__name__} for {kw} !!!")
                return kw, 0 # Fallback a 0

    # Logica ThreadPoolExecutor invariata, ma chiama la nuova funzione wrapper
    with concurrent.futures.ThreadPoolExecutor(max_workers=max_threads) as executor:
        future_to_kw = {}
        print(f"  Sottomissione {len(keywords_list)} task SATURAZIONE CFFI...")
        time.sleep(0.5)
        for idx, kw in enumerate(keywords_list):
            future = executor.submit(get_serp_count_safe_cffi, kw) # Chiama wrapper CFFI
            future_to_kw[future] = kw
            time.sleep(random.uniform(0.15, 0.5) if idx % 5 != 0 else random.uniform(0.6, 1.2)) # Rallenta un po' di più

        print(f"  Attesa completamento task SATURAZIONE CFFI...")
        completed_count, failed_count = 0, 0
        total_tasks = len(keywords_list)

        for future in tqdm(concurrent.futures.as_completed(future_to_kw), total=total_tasks, desc="Saturazione CFFI", unit="kw", ncols=100):
            completed_count += 1
            kw = future_to_kw[future]
            try:
                _kw_result, count = future.result(timeout=MAX_WAIT_SECONDS * 1.8) # Timeout risultato leggermente più lungo
                all_counts[kw] = count if count is not None else 0
            except concurrent.futures.TimeoutError:
                print(f"\n!!! Timeout recupero risultato SATURAZIONE CFFI per '{kw}' !!!")
                all_counts[kw] = 0; failed_count += 1
            except Exception as exc:
                print(f"\n!!! Errore recupero SATURAZIONE CFFI per '{kw}': {exc} !!!")
                all_counts[kw] = 0; failed_count += 1

    print(f"--- Raccolta dati SATURAZIONE CFFI completata. ({total_tasks - failed_count}/{total_tasks} con successo approx.) ---")
    return all_counts

# Funzione Calcolo Punteggio Saturazione (invariata)
def calculate_saturation_scores(counts_dict):
    """
    Calcola un punteggio di saturazione da 1 (bassa) a 10 (alta)
    basato sui conteggi di risultati 'intitle:'. Usa scala logaritmica normalizzata.
    """
    # ... (logica invariata) ...
    scores = {}
    if not counts_dict: return {}
    log_counts = {kw: 1 + math.log10(count + 1) for kw, count in counts_dict.items()}
    max_log_score = 0
    for score in log_counts.values():
         if score > max_log_score: max_log_score = score
    if max_log_score <= 1: scores = {kw: 1 for kw in counts_dict}
    else:
        scale_factor = 9 / (max_log_score - 1)
        scores = {kw: max(1, min(10, round(1 + (log_score - 1) * scale_factor))) for kw, log_score in log_counts.items()}
    print(f"  Punteggi Saturazione calcolati (scala 1-10, logaritmica). Max Log Raw: {max_log_score:.2f}")
    return scores

# ==============================================================================

# --- FUNZIONE: Generazione output HTML (invariata rispetto a V7.8.1) ---
def generate_html_output(df_final, runtime_info=None):
    """
    Genera solo il file data.js nella directory di output.
    Include il campo 'saturation_score'.
    """
    # ... (funzione invariata) ...
    try:
        os.makedirs(OUTPUT_DIR, exist_ok=True)
        base_files_ok = True
        for file_name in [OUTPUT_FILENAME, "style.css", "script.js"]:
            if not os.path.exists(os.path.join(OUTPUT_DIR, file_name)):
                warnings.warn(f"File base '{file_name}' non trovato in '{OUTPUT_DIR}'. L'output potrebbe non funzionare correttamente.", UserWarning)
                base_files_ok = False
        trend_list = []
        required_cols = ['Rank', 'Entita', 'Discover_Score', 'Saturation_Score', 'Score_Avg_now 1-H', 'Score_Avg_now 4-H', 'Score_Avg_now 7-d', 'Extracted_Entities']
        available_cols = df_final.columns
        missing_warned = False
        for col in required_cols:
            if col not in available_cols and not missing_warned:
                warnings.warn(f"Colonne mancanti nel DF finale: {', '.join([c for c in required_cols if c not in available_cols])}. Default usati.", UserWarning)
                missing_warned = True
        for _, row in df_final.iterrows():
            trend_data = {
                'rank': int(row.get('Rank', 0)), 'entity': row.get('Entita', 'N/A'),
                'discover_score': float(row.get('Discover_Score', 0)),
                'saturation_score': int(row.get('Saturation_Score', 0)),
                'score_1h': float(row.get('Score_Avg_now 1-H', 0)),
                'score_4h': float(row.get('Score_Avg_now 4-H', 0)),
                'score_7d': float(row.get('Score_Avg_now 7-d', 0)),
                'extracted_entities': row.get('Extracted_Entities', '')
            }
            trend_list.append(trend_data)
        run_metadata = {
            'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            'trends_count': len(trend_list),
            'top_score': max((t['discover_score'] for t in trend_list), default=0),
            'runtime_minutes': (runtime_info['end_time'] - runtime_info['start_time']) / 60 if runtime_info and 'start_time' in runtime_info and 'end_time' in runtime_info else 0,
            'proxies_used': len(proxy_manager.all_proxies) if 'proxy_manager' in globals() else 0,
            'openai_enabled': FETCH_OPENAI_ENTITIES,
            'openai_model': OPENAI_MODEL if FETCH_OPENAI_ENTITIES else 'N/A',
            'saturation_check_enabled': FETCH_SATURATION_DATA,
            'saturation_method': 'curl_cffi' if CURL_CFFI_AVAILABLE and FETCH_SATURATION_DATA else 'N/A'
        }
        js_data = f"const trendData = {json.dumps(trend_list, indent=2, ensure_ascii=False)};\n\n"
        js_data += f"const runMetadata = {json.dumps(run_metadata, indent=2, ensure_ascii=False)};\n"
        data_js_path = os.path.join(OUTPUT_DIR, 'data.js')
        try:
            with open(data_js_path, 'w', encoding='utf-8') as f: f.write(js_data)
        except Exception as e_write:
            print(f"!!! Errore scrittura file {data_js_path}: {e_write} !!!"); return False
        print(f"\nFile dati '{os.path.basename(data_js_path)}' generato/aggiornato con successo in '{OUTPUT_DIR}'.")
        print(f"Apri '{os.path.join(OUTPUT_DIR, OUTPUT_FILENAME)}' nel browser per visualizzare.")
        return True
    except Exception as e:
        print(f"Errore durante la generazione di data.js: {e}"); traceback.print_exc(); return False

# ==============================================================================
# ================= SCRIPT PRINCIPALE (V7.9.0 - con curl_cffi) =================
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
    if FETCH_SATURATION_DATA:
         if not CURL_CFFI_AVAILABLE: warnings.warn("curl_cffi non disponibile. Saturazione disattivata.", UserWarning); FETCH_SATURATION_DATA = False
         if N_PROCESS_FOR_SATURATION <= 0: warnings.warn("N_PROCESS_FOR_SATURATION <= 0. Saturazione disattivata.", UserWarning); FETCH_SATURATION_DATA = False
         if MAX_THREADS_SATURATION <= 0: warnings.warn("MAX_THREADS_SATURATION <= 0. Saturazione disattivata.", UserWarning); FETCH_SATURATION_DATA = False

    print(f"--- Avvio script Discover Prophet V{SCRIPT_VERSION} (Docs Only, OpenAI, Saturazione CFFI) ---")
    print(f"Formula Discover Score: V7.9 (Numeratore Pesato)")
    print(f"Modalità: Lavora direttamente su '{OUTPUT_DIR}', genera solo 'data.js'.")
    print(f"Estrazione Contesto Volume: {'ATTIVA' if FETCH_VOLUME_CONTEXT else 'DISATTIVATA'} (Top {N_PROCESS_FOR_CONTEXT}, Runs: {CONTEXT_N_RUNS})")
    print(f"Estrazione Entità OpenAI: {'ATTIVA' if FETCH_OPENAI_ENTITIES else 'DISATTIVATA'} (Top {N_PROCESS_FOR_OPENAI}, Modello: {OPENAI_MODEL if FETCH_OPENAI_ENTITIES else 'N/A'})")
    print(f"Estrazione Saturazione SERP (curl_cffi): {'ATTIVA' if FETCH_SATURATION_DATA else 'DISATTIVATA'} (Top {N_PROCESS_FOR_SATURATION}, Threads: {MAX_THREADS_SATURATION}, Impersonate: {SATURATION_IMPERSONATE_BROWSER})")
    print(f"Config Proxy: MaxConc={MAX_CONCURRENT_PROXIES}, CD={PROXY_USE_COOLDOWN}s")
    print(f"Config Threads: Pytrends={MAX_THREADS_PYTRENDS}, OpenAI={MAX_OPENAI_THREADS}, Saturazione={MAX_THREADS_SATURATION}")
    print(f"Output: '{OUTPUT_DIR}', Checkpoints: '{CHECKPOINT_DIR}'")

    ordered_entities = None
    df_final = pd.DataFrame()
    df_initial = pd.DataFrame()

    try:
        # Crea directory
        os.makedirs(CHECKPOINT_DIR, exist_ok=True); print(f"Directory checkpoint: '{CHECKPOINT_DIR}'")
        os.makedirs(OUTPUT_DIR, exist_ok=True); print(f"Directory output: '{OUTPUT_DIR}'")

        # --- 1. Estrazione Lista Ordinata (usa cloudscraper/requests) ---
        ordered_entities = extract_ordered_entities()
        if not ordered_entities: raise Exception("Estrazione iniziale fallita.")
        print(f"\nLista Ordinata Iniziale Estratta ({len(ordered_entities)} entità).")
        try:
            df_initial = pd.DataFrame({'Rank': range(1, len(ordered_entities) + 1), 'Entita': ordered_entities})
            df_initial.to_csv(os.path.join(CHECKPOINT_DIR, "01_entities_ordered_extracted.csv"), index=False, encoding='utf-8-sig')
            print(f"  Checkpoint lista ordinata iniziale salvato.")
        except Exception as e: print(f"  Errore salvataggio checkpoint lista ordinata: {e}")

        # Prepara DataFrame finale
        df_final = df_initial.copy()
        for tf in CONTEXT_TIMEFRAMES: df_final[f'Score_Avg_{tf}'] = 0.0
        df_final['Extracted_Entities'] = ''
        df_final['Discover_Score'] = 0.0
        df_final['Saturation_Score'] = 0

        # --- 2. Raccolta Score di Contesto (usa pytrends) ---
        if FETCH_VOLUME_CONTEXT and N_PROCESS_FOR_CONTEXT > 0 and CONTEXT_TIMEFRAMES:
            # ... (logica raccolta contesto invariata) ...
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


        # --- 2.B Estrazione Entità con OpenAI ---
        if FETCH_OPENAI_ENTITIES:
             # ... (logica estrazione OpenAI invariata) ...
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
        # ... (logica calcolo score invariata) ...
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

        entities_for_saturation = list(df_final['Entita'].head(N_PROCESS_FOR_SATURATION))

        # --- 4.B Raccolta Dati Saturazione SERP (con curl_cffi) ---
        if FETCH_SATURATION_DATA and entities_for_saturation:
            print(f"\n--- Avvio Raccolta Dati Saturazione SERP (CFFI) per Top {len(entities_for_saturation)} Entità ---")
            # Chiama la funzione che usa curl_cffi
            saturation_counts = get_all_saturation_data(entities_for_saturation)

            # Salva checkpoint conteggi grezzi
            try:
                 df_sat_counts = pd.DataFrame(list(saturation_counts.items()), columns=['Entita', 'Intitle_Results_24h'])
                 chk_filename = "04b_saturation_raw_counts.csv"
                 df_sat_counts.to_csv(os.path.join(CHECKPOINT_DIR, chk_filename), index=False, encoding='utf-8-sig')
                 print(f"  Checkpoint conteggi saturazione grezzi salvato.")
            except Exception as e: print(f"  Errore salvataggio checkpoint conteggi saturazione: {e}")

            # Calcola punteggi saturazione (logica invariata)
            saturation_scores = calculate_saturation_scores(saturation_counts)

            # Mappa i punteggi nel DataFrame finale
            df_final['Saturation_Score'] = df_final['Entita'].map(saturation_scores).fillna(0).astype(int)
            print("  Punteggi Saturazione mappati nel DataFrame.")

            # Salva checkpoint punteggi
            try:
                 df_sat_scores = df_final.loc[df_final['Entita'].isin(entities_for_saturation), ['Entita', 'Saturation_Score']]
                 chk_filename = "04c_saturation_scores.csv"
                 df_sat_scores.to_csv(os.path.join(CHECKPOINT_DIR, chk_filename), index=False, encoding='utf-8-sig')
                 print(f"  Checkpoint punteggi saturazione salvato.")
            except Exception as e: print(f"  Errore salvataggio checkpoint punteggi saturazione: {e}")
        else:
            print("\n--- Raccolta Dati Saturazione SERP Saltata ---")
            if 'Saturation_Score' not in df_final.columns: df_final['Saturation_Score'] = 0


        # --- 5. Salva il DataFrame finale completo come CSV ---
        try:
            backup_filename = f"05_final_sorted_data_v{SCRIPT_VERSION}_saturation_cffi.csv" # Aggiorna nome
            df_final.to_csv(os.path.join(CHECKPOINT_DIR, backup_filename), index=False, encoding='utf-8-sig')
            print(f"\nDataFrame finale completo salvato: {os.path.join(CHECKPOINT_DIR, backup_filename)}")
        except Exception as e: print(f"\n!!! Errore salvataggio CSV finale completo: {e} !!!")

        # --- 6. Genera l'output data.js ---
        runtime_info['end_time'] = time.time()
        html_result = generate_html_output(df_final, runtime_info)

        # --- 7. Stampa Top N Finale ---
        print(f"\n--- Top {TOP_N_FINAL_DISPLAY} Entità (Ordinate per Discover Score, con Saturazione CFFI) ---")
        cols_to_show = [c for c in ['Discover_Score', 'Rank', 'Saturation_Score', 'Entita', 'Extracted_Entities', 'Score_Avg_now 1-H', 'Score_Avg_now 4-H', 'Score_Avg_now 7-d'] if c in df_final.columns]
        try:
            pd.set_option('display.max_rows', TOP_N_FINAL_DISPLAY + 5); pd.set_option('display.width', 220); pd.set_option('display.max_colwidth', 50); pd.set_option('display.float_format', '{:.3f}'.format)
            print(df_final[cols_to_show].head(TOP_N_FINAL_DISPLAY).to_string(index=False))
        except Exception as e_print: print(f"Errore stampa finale: {e_print}")
        finally: pd.reset_option('all')

    except Exception as main_exc:
        print(f"\n\n!!! ERRORE CRITICO SCRIPT: {type(main_exc).__name__} - {main_exc} !!!"); traceback.print_exc()
    finally:
        # Statistiche Proxy
        print("\n--- Statistiche Proxy Rilevate (Fine Esecuzione) ---")
        try:
             if 'proxy_manager' in locals() and proxy_manager:
                 # ... (logica stampa statistiche invariata) ...
                 ps = proxy_manager.get_proxy_stats_summary(); total_requests = ps.get('total_success', 0) + ps.get('total_fail_429', 0) + ps.get('total_fail_proxy_timeout', 0) + ps.get('total_fail_other_parse', 0); success_rate = (ps.get('total_success', 0) / total_requests * 100) if total_requests > 0 else 0
                 print(f"Req Tot Proxy: {total_requests}, Successi: {ps.get('total_success', 0)} ({success_rate:.1f}%)"); print(f"  Fail: 429={ps.get('total_fail_429', 0)}, Proxy/Timeout={ps.get('total_fail_proxy_timeout', 0)}, Altri/Parse={ps.get('total_fail_other_parse', 0)}")
                 tfp = ps.get('top_failing_proxies', {});
                 if tfp: print("Top Failing Proxies:"); [print(f"  - {pid}: Succ:{d['success']}, FailsCons:{d['consecutive_fails']} (429:{d['fail_429']}, P/T:{d['fail_proxy/timeout']}, O/P:{d['fail_other/parse']})") for pid, d in list(tfp.items())[:5]]
             else: print("Proxy Manager non disponibile per statistiche.")
        except Exception as stats_exc: print(f"Errore stampa stats proxy: {stats_exc}")

        main_end_time = time.time(); total_duration = main_end_time - main_start_time
        print(f"\n--- Script V{SCRIPT_VERSION} (Score V7.9, Saturazione CFFI) completato in {total_duration:.2f} sec ({total_duration/60:.2f} min) ---")
