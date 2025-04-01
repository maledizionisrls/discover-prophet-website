# -*- coding: utf-8 -*-

# 🚀 Script Ottimizzato per Google Trends - V7.9 (Docs Only, OpenAI & Saturation Score via curl_cffi)
#    Lavora direttamente con i file nella cartella 'docs'.
#    Genera solo 'docs/data.js'.
#    Integra OpenAI per estrarre entità chiave.
#    Formula V7.9 per Discover Score (Numeratore Pesato).
#    Aggiunta funzione Saturazione (scrape intitle: 24h IT via curl_cffi, score 1-100)

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
import cloudscraper # Usato per estrazione iniziale TV
import socket
import threading
from copy import deepcopy
from pytrends.request import TrendReq # Usato per contesto Pytrends
from bs4 import BeautifulSoup
from tqdm import tqdm
from datetime import datetime
import shutil
import openai # Libreria OpenAI
from urllib.parse import quote_plus # Per URL encoding

# +++ Import per Saturazione SERP +++
try:
    from curl_cffi.requests import Session as ImpersonateSession, get as impersonate_get, RequestException as CurlRequestException, CurlError # Usa curl_cffi per SERP
    CURL_CFFI_AVAILABLE = True
    print("Libreria 'curl_cffi' trovata e importata per lo scraping SERP.")
except ImportError:
    CURL_CFFI_AVAILABLE = False
    CurlRequestException = requests.exceptions.RequestException # Fallback per tipo eccezione
    CurlError = Exception # Fallback generico
    print("ATTENZIONE: Libreria 'curl_cffi' non trovata. Lo scraping SERP per la saturazione non funzionerà.")
    print("Installa con: pip install curl_cffi")
# +++ Fine Import per Saturazione +++


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
warnings.filterwarnings("ignore", message="`impersonate` does not support None", category=UserWarning) # Ignora warning curl_cffi


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
N_PROCESS_FOR_CONTEXT = 50 # Numero di trend (top N da TV) da usare per il contesto
CONTEXT_TIMEFRAMES = ['now 1-H', 'now 4-H', 'now 7-d']
CONTEXT_N_RUNS = 2 # Numero di volte che si ripete la raccolta contesto (per media)
MAX_THREADS_PYTRENDS = 80 # Thread per Pytrends (contesto)
MAX_RETRIES_PYTRENDS_CONTEXT = 8 # Tentativi per richiesta Pytrends (contesto)

# --- Parametri Integrazione OpenAI ---
FETCH_OPENAI_ENTITIES = True
N_PROCESS_FOR_OPENAI = N_PROCESS_FOR_CONTEXT # Numero di trend per cui estrarre entità (default = contesto)
OPENAI_MODEL = "gpt-4o" # gpt-4-turbo or gpt-3.5-turbo or gpt-4o
OPENAI_MAX_RETRIES = 3
OPENAI_REQUEST_TIMEOUT = 30
MAX_OPENAI_THREADS = 10 # Limita i thread per OpenAI per evitare rate limiting

# --- Parametri Punteggio Saturazione (SERP Scrape via curl_cffi) ---
FETCH_SATURATION_SCORE = True # Attiva/Disattiva il calcolo della saturazione
N_PROCESS_FOR_SATURATION = TOP_N_FINAL_DISPLAY # Processa i top N trend finali per la saturazione
MAX_THREADS_SATURATION = 20 # Thread per scraping SERP (curl_cffi) - **RIDOTTO** per cautela
SATURATION_MAX_RETRIES = 4  # Tentativi per singola keyword SERP con curl_cffi
SATURATION_TIMEOUTS = 30    # Timeout UNICO per curl_cffi (in secondi)
SATURATION_IMPERSONATE_BROWSER = 'chrome124' # Profilo browser da impersonare con curl_cffi

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
V7D_PENALTY_K = 50.0 # Mantenuto per il denominatore
V7D_PENALTY_EPSILON = 0.1 # Mantenuto per il denominatore
WEIGHT_V4H_NUMERATOR = 0.5 # Pesi per il numeratore V7.9
WEIGHT_V7D_NUMERATOR = 1.5 # Pesi per il numeratore V7.9

# --- Parametri Gestione Proxy e Concorrenza ---
MAX_CONCURRENT_PROXIES = 210
PROXY_USE_COOLDOWN = 7

# --- Parametri Ritardi e Pause ---
MIN_DELAY_BETWEEN_REQUESTS = 0 # Pytrends
MAX_DELAY_BETWEEN_REQUESTS = 2.0 # Pytrends
ENTITY_EXTRACTION_INITIAL_WAIT = 5 # Estrazione TV iniziale
SATURATION_MIN_DELAY = 2.5 # Ritardo minimo tra richieste SERP (curl_cffi) - **AUMENTATO**
SATURATION_MAX_DELAY = 6.0 # Ritardo massimo tra richieste SERP (curl_cffi) - **AUMENTATO**

# --- Parametri Gestione Errori e Tentativi ---
ENTITY_EXTRACTION_MAX_RETRIES = 15 # Estrazione TV iniziale
INITIAL_BACKOFF_SECONDS_429 = 5 # Backoff 429
BACKOFF_MULTIPLIER_429 = 1.2 # Backoff 429
MAX_WAIT_SECONDS = 20 # Attesa generica max
PROXY_FAILURE_THRESHOLD = 3 # Numero fallimenti consecutivi per estendere cooldown proxy
PROXY_FAILURE_COOLDOWN_MULTIPLIER = 1.2 # Moltiplicatore cooldown esteso

# --- Parametri Timeout Connessioni ---
ENTITY_EXTRACTION_CONNECT_TIMEOUT = 20 # Per cloudscraper estrazione TV
ENTITY_EXTRACTION_READ_TIMEOUT = 25    # Per cloudscraper estrazione TV
PYTRENDS_CONNECT_TIMEOUT = 10          # Per pytrends
PYTRENDS_READ_TIMEOUT = 25             # Per pytrends
# SATURATION_TIMEOUTS definito sopra (singolo valore per curl_cffi)

# --- Parametri Interni Pytrends ---
PYTRENDS_RETRIES = 1 # Tentativi interni di Pytrends (usiamo i nostri sopra)
PYTRENDS_BACKOFF_FACTOR = 0.2

# ==============================================================================
# ================== FINE SEZIONE PARAMETRI CONFIGURABILI ======================
# ==============================================================================

# Verifica disponibilità curl_cffi e disattiva funzione se non presente
if not CURL_CFFI_AVAILABLE:
    FETCH_SATURATION_SCORE = False
    print(">>> FUNZIONE SATURAZIONE DISATTIVATA (curl_cffi non trovato) <<<")

# ==============================================================================
# ============= FUNZIONE CALCOLO DISCOVER SCORE (V7.9 - Numeratore Pesato) ======
# ==============================================================================
def calculate_discover_score(rank_series, score_4h, score_7d, k_penalty=V7D_PENALTY_K, epsilon=V7D_PENALTY_EPSILON, weight_v4h=WEIGHT_V4H_NUMERATOR, weight_v7d=WEIGHT_V7D_NUMERATOR):
    """Calcola l'Heuristic Discover Score V7.9 (Numeratore Pesato)."""
    low_v7d_penalty_factor = np.maximum(1.0, k_penalty / (score_7d + epsilon))
    effective_rank = rank_series * low_v7d_penalty_factor
    denominator = np.log1p(effective_rank)
    denominator = np.maximum(denominator, 1e-9) # Evita divisione per zero
    numerator = 1 + (score_4h * weight_v4h) + (score_7d * weight_v7d)
    discover_score = numerator / denominator
    discover_score = discover_score.fillna(0) # Gestisce eventuali NaN
    return discover_score
# ==============================================================================

# --- Definizione Stringa Base Proxy e Rimozione Proxy Problematici ---
proxy_base_string = "v2.proxyempire.io:5000:r_46aa61f010-country-{geo}:8186bbae3e"
original_country_codes = ['af', 'al', 'dz', 'as', 'ad', 'ao', 'ai', 'aq', 'ag', 'ar', 'am', 'aw', 'au', 'at', 'az', 'bs', 'bh', 'bd', 'bb', 'by', 'be', 'bz', 'bj', 'bm', 'bt', 'bo', 'ba', 'bw', 'br', 'io', 'bn', 'bg', 'bf', 'bi', 'kh', 'cm', 'ca', 'cv', 'ky', 'cf', 'td', 'cl', 'cn', 'co', 'km', 'cg', 'ck', 'cr', 'hr', 'cu', 'cy', 'cz', 'dk', 'dj', 'dm', 'do', 'ec', 'eg', 'sv', 'gq', 'er', 'ee', 'et', 'fk', 'fo', 'fj', 'fi', 'fr', 'gf', 'pf', 'ga', 'gm', 'ge', 'de', 'gh', 'gi', 'gr', 'gl', 'gd', 'gp', 'gu', 'gt', 'gg', 'gn', 'gw', 'gy', 'ht', 'va', 'hn', 'hk', 'hu', 'is', 'in', 'id', 'ir', 'iq', 'ie', 'im', 'il', 'it', 'ci', 'jm', 'jp', 'je', 'jo', 'kz', 'ke', 'ki', 'kw', 'kg', 'la', 'lv', 'lb', 'ls', 'lr', 'ly', 'li', 'lt', 'lu', 'mo', 'mk', 'mg', 'mw', 'my', 'mv', 'ml', 'mt', 'mh', 'mq', 'mr', 'mu', 'yt', 'mx', 'fm', 'md', 'mc', 'mn', 'me', 'ms', 'ma', 'mz', 'mm', 'na', 'nr', 'np', 'nl', 'nc', 'nz', 'ni', 'ne', 'ng', 'nu', 'nf', 'kp', 'gb', 'mp', 'no', 'om', 'pk', 'pw', 'ps', 'pa', 'pg', 'py', 'pe', 'ph', 'pl', 'pt', 'pr', 'qa', 're', 'ro', 'ru', 'rw', 'sh', 'kn', 'lc', 'vc', 'ws', 'sm', 'st', 'sa', 'sn', 'rs', 'sc', 'sl', 'sg', 'sk', 'si', 'sb', 'so', 'za', 'kr', 'ss', 'es', 'lk', 'sd', 'sr', 'sz', 'se', 'ch', 'sy', 'tj', 'tw', 'tz', 'th', 'cd', 'tl', 'tg', 'tk', 'to', 'tt', 'tn', 'tr', 'tm', 'tc', 'tv', 'ug', 'ua', 'ae', 'us', 'uy', 'uz', 'vu', 've', 'vn', 'vg', 'vi', 'wf', 'eh', 'ye', 'zm', 'zw']
proxies_to_remove_geo = {'aq', 'io', 'cf', 'bi', 'td', 'km', 'fk', 'cn', 'gw', 'va', 'ki', 'nr', 'nu', 'nf', 'kp', 'pg', 'sh', 'ws', 'tl', 'tk', 'tv', 'wf', 'eh', 'dj', 'gl', 'al', 'cu', 'ir', 'ly', 'sy', 'ye'} # Aggiunti altri problematici
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

# --- Classi AdvancedProxyManager e ConsistentBrowserProfile ---
class AdvancedProxyManager:
    # Inizializzazione e gestione cooldown/fallimenti proxy
    def __init__(self, proxy_geo_list, max_concurrent, cooldown_seconds):
        self.max_concurrent = max_concurrent
        self.cooldown_seconds = cooldown_seconds
        self.lock = threading.Lock()
        self.all_proxies = {i['proxy']: i['geo'] for i in proxy_geo_list}
        self.available_proxies = deque(self.all_proxies.keys())
        random.shuffle(list(self.available_proxies))
        self.active_proxies = {}
        self.cooldown_proxies = {}
        self.proxy_consecutive_failures = defaultdict(int)
        # Aggiunto fail_consent per statistiche
        self.proxy_stats = defaultdict(lambda: {"success":0,"fail_429":0,"fail_5xx":0,"fail_other":0,"fail_timeout":0,"fail_proxy_error":0,"fail_parse":0, "fail_consent":0})
        self.active_sessions = {}
        print(f"AdvProxyManager: {len(self.all_proxies)} proxies, MaxConc: {self.max_concurrent}, CD: {self.cooldown_seconds}s")

    def _check_cooldown(self):
        # Riattiva proxy che hanno terminato il cooldown
        current_time = time.time()
        reactivate = []
        # Usa list() per iterare su una copia mentre si modifica il dizionario
        for proxy, end_time in list(self.cooldown_proxies.items()):
            if current_time >= end_time:
                reactivate.append(proxy)
        for proxy in reactivate:
            # Rimuovi dal cooldown e aggiungi alla fine della coda disponibili
            if self.cooldown_proxies.pop(proxy, None):
                 self.available_proxies.append(proxy)

    def get_proxy(self):
        # Fornisce un proxy disponibile e la sua sessione/profilo associato
        with self.lock:
            self._check_cooldown()
            if len(self.active_proxies) < self.max_concurrent and self.available_proxies:
                proxy_str = self.available_proxies.popleft()
                geo = self.all_proxies[proxy_str]
                self.active_proxies[proxy_str] = time.time()
                proxy_url = get_proxy_url(proxy_str) # Formato http://user:pass@host:port

                # Crea profilo browser consistente per il proxy
                try:
                    profile = ConsistentBrowserProfile(geo)
                except Exception as e:
                    print(f"      Profilo err {geo}: {e}. Uso def.")
                    profile = ConsistentBrowserProfile('DEFAULT')

                # Prepara la sessione (Cloudscraper o Requests) - NON USATA per curl_cffi
                # Questa sessione serve per Pytrends e Estrazione TV iniziale
                scraper = None
                try:
                    bcfg = {'browser': 'chrome', 'platform': profile.os if profile.os in ['windows', 'darwin', 'linux'] else 'windows', 'mobile': False, 'desktop': True, 'user_agent': profile.user_agent}
                    scraper = cloudscraper.create_scraper(browser=bcfg, delay=random.uniform(0.5, 1.5), requestPostHook=None, requestGetHook=None)
                    scraper.headers.update(profile.get_headers())
                except Exception as e_cs:
                    print(f"      Scraper cloudscraper err {geo} ({type(e_cs).__name__}). Uso requests.Session.")
                    scraper = requests.Session()
                    scraper.headers.update(profile.get_headers())

                if proxy_url:
                    scraper.proxies = {'http': proxy_url, 'https': proxy_url}

                session_data = {'scraper': scraper, 'profile': profile}
                self.active_sessions[proxy_str] = session_data
                # Restituisce la stringa proxy originale, geo e dati sessione
                return proxy_str, geo, session_data
            else:
                # Nessun proxy disponibile o limite raggiunto
                return None, None, None

    def get_pytrends_session(self, proxy_str, profile):
        # Crea sessione Pytrends specifica (usa proxy_list)
        proxy_url = get_proxy_url(proxy_str)
        proxy_list = [proxy_url] if proxy_url else []
        params = profile.get_pytrends_params()
        return TrendReq(hl=params['hl'], tz=params['tz'],
                        timeout=(PYTRENDS_CONNECT_TIMEOUT, PYTRENDS_READ_TIMEOUT),
                        retries=PYTRENDS_RETRIES, backoff_factor=PYTRENDS_BACKOFF_FACTOR,
                        proxies=proxy_list)

    def release_proxy(self, proxy_str, success=True, status_code=None, error_type=None):
        # Rilascia il proxy, aggiorna statistiche e applica cooldown se necessario
        with self.lock:
            if proxy_str not in self.all_proxies:
                warnings.warn(f"Release proxy non gestito: {proxy_str}", UserWarning)
                return

            # Chiudi la sessione scraper se esiste (anche se non usata da curl_cffi, potremmo averla creata)
            if proxy_str in self.active_sessions:
                session_data = self.active_sessions.pop(proxy_str)
                scraper = session_data.get('scraper')
                if scraper and hasattr(scraper, 'close'):
                    try:
                        scraper.close()
                    except Exception as e_close:
                        print(f"      Errore chiusura sessione scraper per {proxy_str[-10:]}: {e_close}")


            if proxy_str in self.active_proxies:
                del self.active_proxies[proxy_str]

            cooldown_end = time.time() + self.cooldown_seconds
            geo = self.all_proxies.get(proxy_str, 'N/A')

            if success:
                self.proxy_stats[proxy_str]["success"] += 1
                self.proxy_consecutive_failures[proxy_str] = 0
            else:
                self.proxy_consecutive_failures[proxy_str] += 1
                fails = self.proxy_consecutive_failures[proxy_str]

                # Aggiorna statistiche fallimento e calcola cooldown specifico
                if error_type == '429_related' or status_code == 429:
                    self.proxy_stats[proxy_str]["fail_429"] += 1
                    cooldown_end = time.time() + (self.cooldown_seconds * 4)
                elif error_type == 'Timeout':
                    self.proxy_stats[proxy_str]["fail_timeout"] += 1
                    cooldown_end = time.time() + (self.cooldown_seconds * 2)
                # Include errori specifici curl_cffi come ProxyError
                elif error_type == 'ProxyError' or error_type == 'CurlError_Proxy' or (isinstance(status_code, int) and 500 <= status_code <= 599):
                    self.proxy_stats[proxy_str]["fail_proxy_error"] += 1
                    cooldown_end = time.time() + (self.cooldown_seconds * 3)
                elif error_type == 'parse_fail' or error_type == 'empty_data':
                    self.proxy_stats[proxy_str]["fail_parse"] += 1
                    cooldown_end = time.time() + (self.cooldown_seconds * 1.5)
                elif error_type == 'consent_page' or error_type == 'CurlError_Captcha': # Gestisce Captcha/Consenso
                    self.proxy_stats[proxy_str]["fail_consent"] += 1
                    cooldown_end = time.time() + (self.cooldown_seconds * 2.5)
                else: # Altri errori HTTP, errori connessione curl_cffi, etc.
                    self.proxy_stats[proxy_str]["fail_other"] += 1
                    cooldown_end = time.time() + (self.cooldown_seconds * 1.2)

                # Estendi cooldown se fallimenti consecutivi superano soglia
                if fails >= PROXY_FAILURE_THRESHOLD:
                    multiplier = 1 + (PROXY_FAILURE_COOLDOWN_MULTIPLIER * (fails - PROXY_FAILURE_THRESHOLD + 1))
                    additional_cooldown = self.cooldown_seconds * multiplier
                    current_time = time.time()
                    base_duration = cooldown_end - current_time
                    final_duration = max(base_duration, 0) + additional_cooldown # Assicura non sia negativo
                    cooldown_end = current_time + final_duration
                    print(f"      INFO: Proxy {geo} ({proxy_str[-10:]}) ha {fails} fails cons. CD esteso a {final_duration:.0f}s.")

            # Imposta il cooldown (anche se successo, c'è un cooldown base)
            self.cooldown_proxies[proxy_str] = cooldown_end

    def get_proxy_stats_summary(self):
        # Fornisce un riepilogo delle statistiche dei proxy
        with self.lock:
            total_success = sum(s.get("success", 0) for s in self.proxy_stats.values())
            total_fail_429 = sum(s.get("fail_429", 0) for s in self.proxy_stats.values())
            total_fail_proxy_timeout = sum(s.get("fail_proxy_error", 0) + s.get("fail_5xx", 0) + s.get("fail_timeout", 0) for s in self.proxy_stats.values())
            total_fail_other_parse_consent = sum(s.get("fail_other", 0) + s.get("fail_parse", 0) + s.get("fail_consent", 0) for s in self.proxy_stats.values())
            total_fail = total_fail_429 + total_fail_proxy_timeout + total_fail_other_parse_consent

            failing_proxies_details = {}
            for proxy, stats in self.proxy_stats.items():
                geo = self.all_proxies.get(proxy, 'N/A')
                f429 = stats.get("fail_429", 0)
                fp_t = stats.get("fail_proxy_error", 0) + stats.get("fail_5xx", 0) + stats.get("fail_timeout", 0)
                fo_p_c = stats.get("fail_other", 0) + stats.get("fail_parse", 0) + stats.get("fail_consent", 0)
                total_fails_proxy = f429 + fp_t + fo_p_c
                success_proxy = stats.get("success",0)

                # Include nelle statistiche proxy con fallimenti o successi
                if total_fails_proxy > 0 or success_proxy > 0:
                    failing_proxies_details[f"{geo} ({proxy[-10:]})"] = {
                        "success": success_proxy,
                        "fail_429": f429,
                        "fail_proxy/timeout": fp_t,
                        "fail_other/parse/consent": fo_p_c,
                        "consecutive_fails": self.proxy_consecutive_failures.get(proxy, 0)
                    }

            # Ordina i proxy per numero totale di fallimenti (decrescente)
            sorted_failing_proxies = dict(sorted(failing_proxies_details.items(),
                                                key=lambda item: (item[1]['fail_429'] + item[1]['fail_proxy/timeout'] + item[1]['fail_other/parse/consent']),
                                                reverse=True))

            return {
                "total_success": total_success,
                "total_fail": total_fail,
                "total_fail_429": total_fail_429,
                "total_fail_proxy_timeout": total_fail_proxy_timeout,
                "total_fail_other_parse_consent": total_fail_other_parse_consent,
                "top_failing_proxies": dict(list(sorted_failing_proxies.items())[:15]) # Mostra i top 15 per fallimenti
            }


class ConsistentBrowserProfile:
    # Crea profili browser (User-Agent, Headers) basati sul GEO
    # (Codice classe ConsistentBrowserProfile invariato...)
    BROWSER_TYPES=['chrome'];OS_MAP={'WINDOWS':['windows'],'MACOS':['darwin'],'LINUX':['linux']};GEO_OS_PREFERENCE={'US':['WINDOWS','MACOS'],'CA':['WINDOWS','MACOS'],'GB':['WINDOWS','MACOS'],'FR':['WINDOWS','MACOS'],'DE':['WINDOWS','MACOS'],'IT':['WINDOWS','MACOS'],'ES':['WINDOWS','MACOS'],'AU':['WINDOWS','MACOS'],'JP':['WINDOWS','MACOS'],'BR':['WINDOWS'],'IN':['WINDOWS'],'DEFAULT':['WINDOWS','MACOS','LINUX']};FALLBACK_USER_AGENT="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
    def __init__(self,geo_code):
        if not geo_code or not isinstance(geo_code,str): geo_code='DEFAULT'
        else: geo_code=geo_code.upper()
        self.geo_code=geo_code; self.locale_info=get_locale_for_geo(self.geo_code); pos_os=self.GEO_OS_PREFERENCE.get(self.geo_code,self.GEO_OS_PREFERENCE['DEFAULT']); os_g=random.choice(pos_os); self.os=random.choice(self.OS_MAP.get(os_g,['windows'])); self.browser='chrome'; self.user_agent=self.FALLBACK_USER_AGENT;
        try:
             # Tentativo di ottenere UA specifici per OS, altrimenti fallback
             ua_generator = UserAgent(use_external_data=False, browsers=['chrome'], os=[self.os])
             self.user_agent = ua_generator.chrome
        except:
             try: # Fallback a UA generico chrome
                 ua_generator = UserAgent(use_external_data=False, browsers=['chrome'])
                 self.user_agent = ua_generator.chrome
             except: # Fallback finale
                 pass # Usa self.FALLBACK_USER_AGENT già impostato
        lang_base=self.locale_info['hl'].split('-')[0]; self.accept_language=f"{self.locale_info['hl']},{lang_base};q=0.9,en;q=0.8" # Es: it-IT,it;q=0.9,en;q=0.8

    def get_headers(self):
        # Estrae la versione di Chrome dall'User Agent per Sec-CH-UA (se possibile)
        ua_version_match = re.search(r"Chrome/(\d+)", self.user_agent)
        chrome_version = ua_version_match.group(1) if ua_version_match else str(random.randint(118,124)) # Fallback a versioni recenti

        # Costruisce header Sec-CH-UA in modo dinamico
        sec_ch_ua = f'"Google Chrome";v="{chrome_version}", "Not(A:Brand";v="99", "Chromium";v="{chrome_version}"'
        # Capitalizza la piattaforma OS
        platform_name = self.os.capitalize() if self.os else "Windows"

        return {
            'User-Agent': self.user_agent,
            'Accept-Language': self.accept_language, # Lingua specifica
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Accept-Encoding': 'gzip, deflate, br', # Mantenuto standard
            'Connection': 'keep-alive',
            'Sec-CH-UA': sec_ch_ua,
            'Sec-CH-UA-Mobile': '?0',
            'Sec-CH-UA-Platform': f'"{platform_name}"',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': random.choice(['none', 'same-origin']), #'cross-site' a volte usato
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1',
            'Cache-Control': 'max-age=0',
            'Referer': 'https://www.google.com/' # Aggiunto Referer comune
            }
    def get_pytrends_params(self): return {'hl':self.locale_info['hl'],'tz':self.locale_info['tz']}

# --- Inizializzazione Manager Globale ---
proxy_manager = AdvancedProxyManager(proxies_list_with_geo, MAX_CONCURRENT_PROXIES, PROXY_USE_COOLDOWN)

# --- Funzione Utilità get_proxy_url ---
def get_proxy_url(proxy_str):
    """Converte la stringa proxy nel formato URL http://user:pass@host:port."""
    if not proxy_str: return None
    parts = proxy_str.split(':')
    if len(parts) == 4:
        host, port, user, pwd = parts
        if port.isdigit(): return f"http://{user}:{pwd}@{host}:{port}"
    return None

# --- Estrazione Entità ORDINATA (usa Cloudscraper/Requests via ProxyManager) ---
def extract_ordered_entities(max_retries=ENTITY_EXTRACTION_MAX_RETRIES, initial_wait=ENTITY_EXTRACTION_INITIAL_WAIT):
    # (Codice funzione extract_ordered_entities invariato, usa get_proxy() e session_data['scraper'])
    attempts = 0; current_wait = initial_wait; proxy_info, geo_code = None, None; print(f"Avvio estrazione lista entità ORDINATA (max {max_retries} tentativi)...")
    while attempts < max_retries:
        attempts += 1; print(f"Tentativo {attempts}/{max_retries} per estrarre entità ordinate...")
        proxy_info, status_code, error_type_str, release_success = None, None, None, False; scraper, session_data, geo_code = None, None, None
        try:
            get_proxy_attempts = 0; proxy_str = None
            while proxy_str is None and get_proxy_attempts < 5: # Ciclo per ottenere proxy valido
                 get_proxy_attempts += 1
                 proxy_str, geo_code, session_data = proxy_manager.get_proxy()
                 if proxy_str: break # Esce se ottiene un proxy
                 print(f"      [GetProxy TV] Tentativo {get_proxy_attempts}/5 fallito. Attesa...")
                 time.sleep(random.uniform(2, 5))

            if not proxy_str: print("   Impossibile ottenere proxy per estrazione iniziale TV. Attesa e retry..."); time.sleep(min(current_wait * 1.5, MAX_WAIT_SECONDS / 2)); current_wait *= 1.5; continue

            proxy_info = (proxy_str, geo_code, session_data) # Tiene traccia per release
            # *** USA LO SCRAPER FORNITO DAL PROXY MANAGER ***
            scraper = session_data['scraper'];
            print(f"   Tentativo estrazione TV con proxy: {geo_code} ({proxy_str[-10:]}) using {type(scraper).__name__}")
            time.sleep(random.uniform(0.5, 1.5)); target_url = "https://trends.google.com/tv/?geo=IT"; res = None; max_internal_retries = 2
            for internal_attempt in range(max_internal_retries):
                try:
                    # *** USA scraper.get() ***
                    res = scraper.get(target_url, timeout=(ENTITY_EXTRACTION_CONNECT_TIMEOUT, ENTITY_EXTRACTION_READ_TIMEOUT))
                    if res.status_code == 200: break
                    else: status_code = res.status_code; print(f"      Non-200 TV: {status_code}, Retry {internal_attempt + 1}/{max_internal_retries}"); time.sleep(1.5 if internal_attempt < max_internal_retries - 1 else 0)
                except (requests.exceptions.Timeout, socket.timeout, cloudscraper.exceptions.CloudflareChallengeError) as e_timeout_internal:
                     print(f"      Timeout/CF interno req TV {internal_attempt + 1}/{max_internal_retries}: {type(e_timeout_internal).__name__}"); res = None; status_code = None
                     error_type_str = 'Timeout' if isinstance(e_timeout_internal, (requests.exceptions.Timeout, socket.timeout)) else 'ProxyError' # Potrebbe essere blocco CF
                     if internal_attempt < max_internal_retries - 1: time.sleep(2)
                     else: print(f"      Falliti tutti retry TV interni (Timeout/CF)."); raise e_timeout_internal
                except Exception as e_int:
                     print(f"      Errore interno req TV {internal_attempt + 1}/{max_internal_retries}: {type(e_int).__name__} - {str(e_int)[:100]}"); res = None; status_code = None; error_type_str = 'ProxyError'
                     if internal_attempt < max_internal_retries - 1: time.sleep(2)
                     else: print(f"      Falliti tutti retry TV interni (Exception)."); raise e_int

            if res is None or res.status_code != 200: status_code = res.status_code if res else None; error_type_str = error_type_str or f"HTTP_{status_code or 'N/A'}" ; raise Exception(f"Req TV fallita dopo retry interni. Status: {status_code}")

            status_code = res.status_code; soup = BeautifulSoup(res.text, 'html.parser'); scripts = soup.find_all('script'); found_data = False; ordered_entities_found = []
            for script in scripts:
                if script.string and 'AF_initDataCallback' in script.string and 'key: \'ds:0\'' in script.string:
                    try:
                        # Regex per estrarre il JSON corretto
                        match = re.search(r"AF_initDataCallback\s*\(\s*(\{.*?\})\s*\)\s*;", script.string)
                        if not match:
                             match = re.search(r"data:(.*), sideChannel:", script.string, re.DOTALL) # Fallback a vecchio metodo

                        if match:
                             json_text = match.group(1).strip().rstrip(',')
                             # Pulizia ulteriore se necessario (es. rimuovere commenti JS nel JSON)
                             json_text = re.sub(r"//.*?\n|/\*.*?\*/", "", json_text, flags=re.DOTALL)
                             data = json.loads(json_text)

                             # Naviga la struttura dati trovata per 'ds:0'
                             # La struttura può cambiare, serve ispezione o debug
                             # Assumiamo una struttura simile a prima, ma potrebbe variare
                             if isinstance(data, dict) and 'ds:0' in data.get('key', ''): # Verifica se è il blocco giusto
                                 payload = data.get('data')
                                 if isinstance(payload, list) and len(payload) > 1 and isinstance(payload[1], list):
                                     entities = [item[0] for item in payload[1] if isinstance(item, list) and item and isinstance(item[0], str)]
                                     if entities:
                                         ordered_entities_found = entities
                                         found_data = True
                                         break
                    except (json.JSONDecodeError, IndexError, TypeError, KeyError) as e_parse:
                         print(f"      Parse JSON err TV (Proxy: {geo_code}): {type(e_parse).__name__} - {e_parse}")
                         error_type_str = 'parse_fail'
                    except Exception as e_generic_parse:
                        print(f"      Parse Generic err TV (Proxy: {geo_code}): {type(e_generic_parse).__name__} - {e_generic_parse}")
                        error_type_str = 'parse_fail'


            if found_data and ordered_entities_found: print(f"   Estratte {len(ordered_entities_found)} entità ordinate via {geo_code}."); release_success = True; return ordered_entities_found
            else: print(f"   Status 200 TV ma dati non trovati/parsati via {geo_code}."); error_type_str = error_type_str or 'parse_fail'; wait_time = min(current_wait * 1.5, MAX_WAIT_SECONDS / 2); time.sleep(wait_time); current_wait = wait_time * 1.2
        except Exception as e:
            error_type_str = error_type_str or type(e).__name__; print(f"!! Errore estrazione TV (Tentativo {attempts}, Proxy: {geo_code}): {error_type_str}: {e} !!");
            wait_time = min(current_wait * 1.2, MAX_WAIT_SECONDS / 2); time.sleep(wait_time); current_wait = wait_time * 1.2
            if isinstance(e, (requests.exceptions.ProxyError, requests.exceptions.ConnectionError, cloudscraper.exceptions.CloudflareException)): error_type_str = 'ProxyError'
            elif isinstance(e, requests.exceptions.Timeout): error_type_str = 'Timeout'
            if 'res' not in locals() or res is None: status_code = None
            release_success = False # Assicura che venga rilasciato come fallito
        finally:
            if proxy_info: proxy_manager.release_proxy(proxy_info[0], success=release_success, status_code=status_code, error_type=error_type_str); proxy_info = None
    print(f"!!! Estrazione entità ORDINATE TV fallita dopo {max_retries} tentativi. !!!"); return None


# --- Funzione get_trends_scores (usa Pytrends via ProxyManager) ---
def get_trends_scores(keywords, timeframe):
    # (Codice funzione get_trends_scores invariato, usa get_proxy() e get_pytrends_session())
    attempts = 0; current_backoff_429 = INITIAL_BACKOFF_SECONDS_429; current_backoff_other = 3.0; start_time = time.time()
    proxy_info, pytrends, geo_code = None, None, None
    max_proxy_attempts = min(len(proxy_manager.all_proxies) // 2, MAX_RETRIES_PYTRENDS_CONTEXT * 2); proxy_attempts_set = set()
    kw_list_str = ",".join(sorted(keywords)); kw_hash = hashlib.md5(kw_list_str.encode()).hexdigest()[:6]
    while attempts < MAX_RETRIES_PYTRENDS_CONTEXT and len(proxy_attempts_set) < max_proxy_attempts:
        attempts += 1; proxy_info, status_code, error_type_str, release_success = None, None, None, False; pytrends, session_data, geo_code = None, None, None; proxy_str = None
        try:
            get_proxy_attempts = 0
            while proxy_str is None and get_proxy_attempts < 5: # Ciclo per proxy
                 get_proxy_attempts += 1
                 # *** USA get_proxy() PER OTTENERE ANCHE LA SESSIONE PYTRENDS CORRETTA ***
                 proxy_str, geo_code, session_data = proxy_manager.get_proxy()
                 if proxy_str: break
                 print(f"         [GetProxy Ctx:{kw_hash} T{attempts}] Tentativo {get_proxy_attempts}/5 fallito. Attesa..."); time.sleep(random.uniform(2, 5))

            if not proxy_str: print(f"      [CTX KW:{kw_hash} T{attempts}] No proxy for context. Skip attempt."); time.sleep(min(current_backoff_other * 1.5, MAX_WAIT_SECONDS / 2)); current_backoff_other *= 1.2; continue

            proxy_info = (proxy_str, geo_code, session_data) # Traccia per release
            if proxy_str in proxy_attempts_set: proxy_manager.release_proxy(proxy_str, success=False, error_type="duplicato_interno"); proxy_info = None; continue
            proxy_attempts_set.add(proxy_str); profile = session_data['profile']
            try:
                # *** USA get_pytrends_session() DAL MANAGER ***
                pytrends = proxy_manager.get_pytrends_session(proxy_str, profile)
            except Exception as e_session: print(f"         [CTX KW:{kw_hash} T{attempts}] Session err (Proxy: {geo_code}): {e_session}"); proxy_manager.release_proxy(proxy_str, success=False, error_type="pytrends_session_error"); proxy_info = None; continue
            base_delay = random.uniform(MIN_DELAY_BETWEEN_REQUESTS, MAX_DELAY_BETWEEN_REQUESTS); time.sleep(base_delay)
            shuffled = keywords.copy(); random.shuffle(shuffled); pytrends.build_payload(shuffled, timeframe=timeframe, geo='IT', gprop='')
            df = pytrends.interest_over_time()
            if df.empty or all(c == 'isPartial' for c in df.columns): print(f"         [CTX KW:{kw_hash} T{attempts}] Empty data (Proxy: {geo_code})."); error_type_str = 'empty_data'; time.sleep(current_backoff_other); current_backoff_other = min(current_backoff_other * 1.2, MAX_WAIT_SECONDS / 4)
            else: scores = df.drop(columns=['isPartial'], errors='ignore').mean().to_dict(); final = {kw: scores.get(kw, 0) for kw in keywords}; elapsed = time.time() - start_time; release_success = True; return final # Successo!
        # --- Gestione Errori (invariata) ---
        except requests.exceptions.HTTPError as http_err:
            status_code = http_err.response.status_code if hasattr(http_err, 'response') and http_err.response else None; print(f"     !![CTX KW:{kw_hash} T{attempts}] HTTP Err {status_code or 'N/A'} (Proxy: {geo_code}).")
            if status_code == 429: error_type_str = '429_related'; wait = min(current_backoff_429, MAX_WAIT_SECONDS); print(f"            -> 429! Wait: {wait:.1f}s..."); time.sleep(wait); current_backoff_429 = min(current_backoff_429 * BACKOFF_MULTIPLIER_429, MAX_WAIT_SECONDS * 1.5)
            elif status_code and 500 <= status_code <= 599: error_type_str = 'ProxyError'; wait = min(current_backoff_other*1.5, MAX_WAIT_SECONDS/2); print(f"            -> 5xx Err {status_code}. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
            else: error_type_str = f"HTTP_{status_code or 'N/A'}"; wait = min(current_backoff_other*1.5, MAX_WAIT_SECONDS/2); print(f"            -> HTTP Err {status_code}. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
            release_success = False
        except (requests.exceptions.Timeout, socket.timeout) as timeout_err: error_type_str = 'Timeout'; print(f"     !![CTX KW:{kw_hash} T{attempts}] Timeout (Proxy: {geo_code}): {timeout_err}"); wait = min(current_backoff_other*1.2, MAX_WAIT_SECONDS/2); print(f"            -> Timeout. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = wait * 1.2; release_success = False
        except (requests.exceptions.ProxyError, requests.exceptions.ConnectionError, ConnectionRefusedError, OSError) as proxy_err:
            error_type_str = 'ProxyError'; status_code = 502 if '502' in str(proxy_err) else None
            print(f"     !![CTX KW:{kw_hash} T{attempts}] Proxy/Conn Err (Proxy: {geo_code}): {type(proxy_err).__name__} - {str(proxy_err)[:100]}")
            wait = min(current_backoff_other * 1.5, MAX_WAIT_SECONDS / 2); print(f"            -> Proxy Err. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other * 1.5, MAX_WAIT_SECONDS); release_success = False
        except Exception as e:
            # Tentativo di catturare errori specifici di pytrends o JSON malformato
            msg = str(e); error_type_str = type(e).__name__;
            is_429 = '429' in msg or ('response' in dir(e) and hasattr(e.response, 'status_code') and e.response.status_code == 429)
            is_json_decode = isinstance(e, json.JSONDecodeError)
            is_attribute_error = isinstance(e, AttributeError) # Può capitare con risposte inattese

            print(f"!! [CTX KW:{kw_hash} T{attempts}] UNEXPECTED Err (Proxy: {geo_code}): {error_type_str}: {msg[:150]}...")

            if is_429: error_type_str = '429_related'; wait = min(current_backoff_429, MAX_WAIT_SECONDS); print(f"            -> 429 DETECTED! Wait: {wait:.1f}s..."); time.sleep(wait); current_backoff_429 = min(current_backoff_429 * BACKOFF_MULTIPLIER_429, MAX_WAIT_SECONDS * 1.5)
            elif is_json_decode or is_attribute_error: error_type_str = 'parse_fail'; wait = min(current_backoff_other, MAX_WAIT_SECONDS/2); print(f"            -> JSON/Attr Err. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
            else: wait = min(current_backoff_other, MAX_WAIT_SECONDS/2); print(f"            -> Generic Err. Wait {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other*1.5, MAX_WAIT_SECONDS)
            release_success = False
        finally:
            if proxy_info: proxy_manager.release_proxy(proxy_info[0], success=release_success, status_code=status_code, error_type=error_type_str); proxy_info = None
    print(f"!!! [CTX KW:{kw_hash}] Failed {attempts} context attempts for {kw_list_str} ({timeframe}). Returning scores as 0.")
    return {kw: 0 for kw in keywords}

# --- Funzione get_all_context_scores ---
def get_all_context_scores(entities_subset, timeframe, max_threads=MAX_THREADS_PYTRENDS):
    # (Codice funzione get_all_context_scores invariato, orchestra get_trends_scores)
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
        # --- Logica Retry (invariata) ---
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
# (Codice funzioni OpenAI get_single_entity_openai e get_entities_with_openai invariato)
def get_single_entity_openai(trend_string, model=OPENAI_MODEL, max_retries=OPENAI_MAX_RETRIES, request_timeout=OPENAI_REQUEST_TIMEOUT):
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
            else:
                # print(f"      [OpenAI WARN] Risposta vuota/corta per '{trend_string}' (Tentativo {attempts})") # Debug
                return None # Default a None se non valida
        except openai.APITimeoutError:
            print(f"  !! [OpenAI Timeout] T{attempts}/{max_retries} per '{trend_string}'. Wait...")
            if attempts >= max_retries: print(f"  !! [OpenAI Timeout] Fallito dopo {max_retries} T per '{trend_string}'."); return None
            time.sleep(3 * attempts)
        except openai.APIConnectionError as e:
              print(f"  !! [OpenAI Conn Err] T{attempts}/{max_retries} per '{trend_string}': {e}. Wait...")
              if attempts >= max_retries: print(f"  !! [OpenAI Conn Err] Fallito dopo {max_retries} T per '{trend_string}'."); return None
              time.sleep(5 * attempts)
        except openai.RateLimitError:
              print(f"  !! [OpenAI Rate Limit] T{attempts}/{max_retries} per '{trend_string}'. Wait long...")
              if attempts >= max_retries: print(f"  !! [OpenAI Rate Limit] Fallito dopo {max_retries} T per '{trend_string}'."); return None
              time.sleep(15 * attempts)
        except openai.APIStatusError as e:
              print(f"  !! [OpenAI Status Err {e.status_code}] T{attempts}/{max_retries} per '{trend_string}': {e.message}. Wait...")
              if attempts >= max_retries: print(f"  !! [OpenAI Status Err] Fallito dopo {max_retries} T per '{trend_string}'."); return None
              if e.status_code >= 500 or e.status_code in [401, 403]: print(f"  !! Errore {e.status_code} non recuperabile. Stop tentativi per '{trend_string}'."); return None
              time.sleep(5 * attempts)
        except Exception as e:
            print(f"  !! [OpenAI Generic Err] T{attempts}/{max_retries} per '{trend_string}': {type(e).__name__} - {e}")
            if attempts >= max_retries: print(f"  !! [OpenAI Generic Err] Fallito dopo {max_retries} T per '{trend_string}'."); return None
            time.sleep(3 * attempts)
    print(f"!!! [OpenAI FAIL] Falliti tutti i {max_retries} tentativi per '{trend_string}'")
    return None # Fallito dopo tutti i tentativi

def get_entities_with_openai(trend_list, max_workers=MAX_OPENAI_THREADS):
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
        for trend in trend_list: future = executor.submit(call_openai_safe, trend); futures[future] = trend; time.sleep(random.uniform(0.02, 0.08))
        print("  Attesa completamento task OpenAI...")
        successful_count = 0; total_tasks = len(trend_list)
        for future in tqdm(concurrent.futures.as_completed(futures), total=total_tasks, desc="Estrazione Entità OpenAI", unit="trend", ncols=100):
            trend = futures[future]; result = '' # Default a stringa vuota
            try:
                result_raw = future.result(timeout=OPENAI_REQUEST_TIMEOUT * (OPENAI_MAX_RETRIES + 2))
                if result_raw: result = result_raw; successful_count += 1
            except concurrent.futures.TimeoutError: print(f"\n!!! Timeout globale OpenAI per '{trend}' !!!")
            except Exception as exc: print(f"\n!!! Errore recupero risultato OpenAI per '{trend}': {exc} !!!")
            extracted_entities_map[trend] = result # Mappa sempre, vuoto se fallito/non trovato
    print(f"--- Estrazione Entità OpenAI completata ({successful_count}/{total_tasks} con successo) ---")
    return extracted_entities_map
# ==============================================================================


# ==============================================================================
# ================= FUNZIONI PER PUNTEGGIO SATURAZIONE (via curl_cffi) =========
# ==============================================================================

# *** Funzione di Parsing - IDENTICA A QUELLA FORNITA NEL SECONDO SCRIPT ***
def parse_google_result_stats(html_content):
    """Estrae il numero di risultati dal div #result-stats. Con debug esteso."""
    try:
        # print("         [Parse Debug Saturation] Inizializzo BeautifulSoup...") # Debug
        soup = BeautifulSoup(html_content, 'html.parser')
        result_stats_div = None
        raw_stats_text = "N/D"

        if not soup.body:
            print("         [Parse FATAL Saturation] Tag <body> non trovato nell'HTML ricevuto!")
            # print(f"         [Parse Debug FATAL Saturation] Inizio HTML senza body:\n{html_content[:500]}\n...") # Debug
            return None, "Body HTML mancante"

        # print("         [Parse Debug Saturation] Cerco 'div#result-stats'...") # Debug
        result_stats_div = soup.find('div', id='result-stats')

        if not result_stats_div:
            # print("         [Parse Debug Saturation] 'div#result-stats' non trovato. Provo alternative...") # Debug
            result_stats_div = soup.find('div', class_='result-stats') # Classe comune alternativa
            if not result_stats_div:
                # print("         [Parse Debug Saturation] 'div.result-stats' non trovato. Provo ricerca testuale euristica...") # Debug
                possible_divs = soup.find_all('div')
                found_heuristic = False
                for div in possible_divs:
                    div_text = div.get_text(separator=" ", strip=True).lower()
                    # Cerca div che contengano "risultat" e "circa" o un numero
                    if 'risultat' in div_text and ('circa' in div_text or re.search(r'\d', div_text)):
                        # print(f"         [Parse Debug Saturation] Trovato div euristico potenziale...") # Debug
                        result_stats_div = div
                        found_heuristic = True
                        break
                # if not found_heuristic:
                #     print("         [Parse Debug Saturation] Nessun div euristico trovato.") # Debug

        if result_stats_div:
            stats_text = result_stats_div.get_text(separator=" ", strip=True)
            raw_stats_text = stats_text
            # print(f"         [Parse Debug Saturation] Trovato testo stats: '{stats_text}'") # Debug

            # Regex migliorata per estrarre numeri con/senza punti/virgole e "Circa" opzionale
            match = re.search(r'(?:Circa\s+)?([\d\.,]+)\s+risultat', stats_text.replace('\xa0', ' '), re.IGNORECASE)
            if match:
                num_str = match.group(1).replace('.', '').replace(',', '') # Rimuove tutti i separatori
                if num_str.isdigit():
                    # print(f"         [Parse OK Saturation] Estratto numero: {int(num_str)}") # Debug
                    return int(num_str), raw_stats_text
            # Gestisce il caso esplicito "Nessun risultato"
            if "nessun risultato" in stats_text.lower() or "no results" in stats_text.lower():
                 # print(f"         [Parse OK Saturation] Rilevato 'nessun risultato'.") # Debug
                 return 0, raw_stats_text

            print(f"         [Parse WARN Saturation] Numero non estratto dal testo: '{stats_text}'")
            return None, raw_stats_text # Numero non trovato nel testo del div

        else: # Nessun div trovato (né id, né classe, né euristico)
            print(f"         [Parse WARN Saturation] Nessun div contenente statistiche trovato.")
            body_text_sample = soup.body.get_text(separator=' ', strip=True)[:500] if soup.body else "Body non trovato"
            # print(f"         [Parse Debug Final Saturation] Sample inizio body: {body_text_sample}...") # Debug
            # Verifica se potrebbe essere una pagina di consenso/CAPTCHA
            if "consent.google." in html_content or "/sorry/" in html_content:
                 raw_stats_text = "Pagina Consenso/CAPTCHA Probabile"
            return None, raw_stats_text

    except Exception as e:
        print(f"         [Parse ERR Saturation] Errore durante parsing HTML: {e}")
        # traceback.print_exc() # Debug
        return None, "Errore Parsing Eccezione"

# *** NUOVA Funzione per scraping SERP con curl_cffi ***
def get_single_intitle_count_curl(keyword, proxy_manager, max_retries=SATURATION_MAX_RETRIES, timeout=SATURATION_TIMEOUTS, impersonate_browser=SATURATION_IMPERSONATE_BROWSER):
    """
    Ottiene il numero di risultati 'intitle:' per una keyword usando curl_cffi,
    ottenendo il proxy dal proxy_manager e rilasciandolo correttamente.
    """
    if not CURL_CFFI_AVAILABLE:
        # print(f"      [Sat KW:{keyword[:10]}...] Skip - curl_cffi non disponibile.") # Debug
        return None # Non possiamo procedere senza curl_cffi

    search_term = f'intitle:"{keyword}"' # Usa virgolette per frasi esatte
    encoded_query = quote_plus(search_term)
    target_url = f"https://www.google.it/search?q={encoded_query}&hl=it&gl=it&tbs=qdr:d&num=10"

    # Headers specifici per la richiesta SERP (simili al secondo script fornito)
    headers = {
        "Referer": "https://www.google.com/",
        "Accept-Language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7", # Forza italiano
        "Accept-Encoding": "gzip, deflate, br, zstd", # Encoding comuni
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36", # UA recente fisso
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin", # o 'none'
        "Sec-Fetch-User": "?1",
        # Sec-CH-UA headers sono gestiti da curl_cffi impersonate
    }

    attempts = 0
    current_backoff = 3.0 # Backoff specifico per errori SERP curl_cffi

    kw_hash = hashlib.md5(keyword.encode()).hexdigest()[:6] # Per log brevi

    while attempts < max_retries:
        attempts += 1
        proxy_str_original, geo_code, _ = proxy_manager.get_proxy() # Ottieni proxy (ignora session_data)
        proxy_url_formatted = None # Resetta ad ogni tentativo
        status_code = None
        error_type_str = None
        release_success = False

        if not proxy_str_original:
            # print(f"      [Sat KW:{kw_hash} T{attempts}] No proxy available from manager. Waiting...") # Debug
            time.sleep(current_backoff); current_backoff = min(current_backoff * 1.3, MAX_WAIT_SECONDS)
            continue # Prova il prossimo tentativo del while

        # Formatta il proxy per curl_cffi
        proxy_url_formatted = get_proxy_url(proxy_str_original)
        if not proxy_url_formatted:
             print(f"      [Sat KW:{kw_hash} T{attempts}] Invalid proxy format from manager: {proxy_str_original}. Releasing as fail.")
             proxy_manager.release_proxy(proxy_str_original, success=False, error_type="ProxyError") # Rilascia come fallito
             time.sleep(1) # Piccola pausa
             continue # Prova prossimo tentativo

        proxies_dict = {'http': proxy_url_formatted, 'https': proxy_url_formatted}
        response = None # Resetta response

        try:
            # Pausa prima della richiesta
            delay = random.uniform(SATURATION_MIN_DELAY, SATURATION_MAX_DELAY)
            time.sleep(delay)

            # --- ESEGUI RICHIESTA CON CURL_CFFI ---
            # print(f"      [Sat KW:{kw_hash} T{attempts}] Requesting via {geo_code} ({proxy_str_original[-10:]}) using curl_cffi...") # Debug
            response = impersonate_get(
                target_url,
                headers=headers,
                proxies=proxies_dict,
                impersonate=impersonate_browser,
                timeout=timeout,
                allow_redirects=True
            )
            status_code = response.status_code
            final_url = response.url
            # print(f"      [Sat KW:{kw_hash} T{attempts}] curl_cffi Status: {status_code}, Final URL: {final_url}") # Debug

            # --- Gestisci Risposta ---
            html_content = None
            try: html_content = response.text
            except Exception: html_content = response.content.decode('utf-8', errors='ignore')

            if status_code == 200:
                # Controlla redirect a consenso/captcha anche con status 200
                if "consent.google." in final_url or "/sorry/" in final_url:
                    print(f"      [Sat KW:{kw_hash} T{attempts}] Got Consent/Captcha page via {geo_code} (curl_cffi).")
                    error_type_str = 'consent_page' # Usato per il cooldown specifico
                    time.sleep(current_backoff); current_backoff *= 1.3
                else:
                    # Prova a parsare il contenuto HTML
                    count, raw_text = parse_google_result_stats(html_content)
                    if count is not None: # Parsing riuscito (anche se 0)
                         release_success = True
                         # print(f"      [Sat KW:{kw_hash} T{attempts}] Success! Count: {count}") # Debug
                         # RILASCIA PROXY COME SUCCESSO e restituisci conteggio
                         proxy_manager.release_proxy(proxy_str_original, success=True, status_code=status_code)
                         return count # Successo!
                    else: # Parsing fallito
                         print(f"      [Sat KW:{kw_hash} T{attempts}] Parse failed (Status 200) via {geo_code} (curl_cffi). Raw: '{raw_text}'")
                         error_type_str = 'parse_fail'
                         # Considera se salvare HTML per debug
            elif status_code == 429:
                 print(f"      [Sat KW:{kw_hash} T{attempts}] Got 429 Too Many Requests via {geo_code} (curl_cffi).")
                 error_type_str = '429_related'
                 wait = min(INITIAL_BACKOFF_SECONDS_429 * (1.5**attempts), MAX_WAIT_SECONDS) # Backoff esponenziale per 429
                 print(f"         -> Waiting {wait:.1f}s...")
                 time.sleep(wait)
            elif 500 <= status_code <= 599:
                 print(f"      [Sat KW:{kw_hash} T{attempts}] Got Server Error {status_code} via {geo_code} (curl_cffi).")
                 error_type_str = 'ProxyError' # Tratta 5xx come errore proxy/server
                 time.sleep(current_backoff); current_backoff = min(current_backoff * 1.2, MAX_WAIT_SECONDS)
            else: # Altri errori HTTP (403, 404 etc.)
                 print(f"      [Sat KW:{kw_hash} T{attempts}] Got HTTP Error {status_code} via {geo_code} (curl_cffi).")
                 error_type_str = f'HTTP_{status_code}' # Tipo errore generico HTTP
                 time.sleep(current_backoff); current_backoff = min(current_backoff * 1.2, MAX_WAIT_SECONDS)

        # --- Gestione ECCEZIONI curl_cffi ---
        except CurlRequestException as e: # Eccezione generica per richieste curl_cffi
            error_msg = str(e)
            print(f"!! [Sat KW:{kw_hash} T{attempts}] curl_cffi Request Exception via {geo_code}: {type(e).__name__} - {error_msg[:150]}")
            if "timed out" in error_msg.lower() or "timeout" in error_msg.lower():
                 error_type_str = 'Timeout'
            elif "proxy" in error_msg.lower() or "could not resolve proxy" in error_msg.lower():
                 error_type_str = 'ProxyError' # Errore specifico del proxy
            elif "ssl" in error_msg.lower() or " CURLE_SSL_" in error_msg:
                 error_type_str = 'ProxyError' # Spesso errori SSL sono legati al proxy MITM
            else:
                 error_type_str = 'CurlError_Other' # Errore generico curl request
            time.sleep(current_backoff); current_backoff = min(current_backoff * 1.2, MAX_WAIT_SECONDS)
        except CurlError as e: # Errore più specifico di libcurl
             error_code = e.code
             error_msg = str(e)
             print(f"!! [Sat KW:{kw_hash} T{attempts}] curl_cffi CurlError via {geo_code}: Code {error_code} - {error_msg[:150]}")
             # Mappa alcuni codici errore comuni a tipi gestiti dal ProxyManager
             if error_code in [7, 5, 6]: # Couldn't resolve host/proxy, Couldn't connect
                  error_type_str = 'ProxyError'
             elif error_code == 28: # Operation timed out
                  error_type_str = 'Timeout'
             # Aggiungere altre mappature se necessario basandosi su https://curl.se/libcurl/c/libcurl-errors.html
             else:
                  error_type_str = f'CurlError_{error_code}'
             time.sleep(current_backoff); current_backoff = min(current_backoff * 1.2, MAX_WAIT_SECONDS)
        except Exception as e_generic:
            print(f"!! [Sat KW:{kw_hash} T{attempts}] UNEXPECTED Generic Exception via {geo_code} (curl_cffi block): {type(e_generic).__name__} - {str(e_generic)[:150]}")
            error_type_str = 'OtherError' # Errore non previsto
            time.sleep(current_backoff); current_backoff = min(current_backoff * 1.2, MAX_WAIT_SECONDS)

        # --- Rilascio Proxy (SEMPRE, tranne se già rilasciato per formato invalido) ---
        if proxy_str_original and proxy_url_formatted: # Assicura che abbiamo un proxy da rilasciare
             proxy_manager.release_proxy(proxy_str_original, success=release_success, status_code=status_code, error_type=error_type_str)
             proxy_str_original = None # Marca come rilasciato per questo tentativo

    # Se esce dal loop senza successo
    print(f"!!! [Sat KW:{kw_hash}] Failed all {max_retries} attempts (curl_cffi).")
    return None # Fallimento dopo tutti i tentativi

# *** NUOVA Funzione orchestratrice per curl_cffi ***
def get_all_saturation_counts_curl(keywords, proxy_manager, max_threads=MAX_THREADS_SATURATION):
    """Ottiene i conteggi 'intitle:' per una lista di keyword in parallelo usando curl_cffi."""
    if not FETCH_SATURATION_SCORE or not CURL_CFFI_AVAILABLE:
        print("\n--- Calcolo Saturazione Saltato (disattivato o curl_cffi mancante) ---")
        return {kw: None for kw in keywords} # Restituisce None per tutti

    print(f"\n--- Avvio Calcolo Saturazione SERP ({len(keywords)} keywords, Max Workers: {max_threads}, via curl_cffi) ---")
    saturation_counts = {}
    futures = {}
    # Usa un semaforo separato per limitare le richieste SERP
    sem_saturation = threading.Semaphore(max_threads)

    def get_count_safe_curl(kw):
        with sem_saturation:
            try:
                return get_single_intitle_count_curl(kw, proxy_manager)
            except Exception as e:
                kw_hash = hashlib.md5(kw.encode()).hexdigest()[:6]
                print(f"\n!!! [Sat KW:{kw_hash}] Exc in thread worker (curl): {type(e).__name__} !!!")
                return None # Fallimento catturato nel worker

    with concurrent.futures.ThreadPoolExecutor(max_workers=max_threads) as executor:
        print(f"  Sottomissione {len(keywords)} task scraping SERP (curl_cffi)...")
        # Sottometti i task con una piccola pausa per distribuire il carico iniziale
        for idx, keyword in enumerate(keywords):
            future = executor.submit(get_count_safe_curl, keyword)
            futures[future] = keyword
            time.sleep(random.uniform(0.05, 0.2)) # Pausa leggermente maggiore

        print("  Attesa completamento task scraping SERP...")
        successful_count = 0
        failed_count = 0
        total_tasks = len(keywords)

        for future in tqdm(concurrent.futures.as_completed(futures), total=total_tasks, desc="Saturation SERP (curl)", unit="kw", ncols=100):
            keyword = futures[future]
            result = None # Default a None (fallimento)
            try:
                # Usa un timeout generoso per ottenere il risultato dal future,
                # dato che la funzione interna ha già i suoi timeout e retries.
                result = future.result(timeout=SATURATION_TIMEOUTS * (SATURATION_MAX_RETRIES + 1) + 10) # Timeout risultato future
                if result is not None: # Considera 0 un successo
                    successful_count += 1
                else:
                    failed_count += 1
            except concurrent.futures.TimeoutError:
                 kw_hash = hashlib.md5(keyword.encode()).hexdigest()[:6]
                 print(f"\n!!! Timeout globale attesa risultato SERP per '{kw_hash}' !!!")
                 failed_count += 1
            except Exception as exc:
                 kw_hash = hashlib.md5(keyword.encode()).hexdigest()[:6]
                 print(f"\n!!! Errore recupero risultato SERP per '{kw_hash}': {exc} !!!")
                 failed_count += 1
            saturation_counts[keyword] = result # Mappa il risultato (conteggio o None)

    print(f"--- Calcolo Saturazione SERP completato ({successful_count} successi, {failed_count} fallimenti / {total_tasks} totali) ---")
    return saturation_counts


# *** Funzione di Normalizzazione (logica invariata) ***
def normalize_saturation_scores(counts_dict):
    """Normalizza i conteggi grezzi in un punteggio da 1 a 100."""
    scores = {}
    # Filtra None e valori non numerici, converti in numeri
    valid_counts = [int(c) for c in counts_dict.values() if c is not None and isinstance(c, (int, float))]

    if not valid_counts:
        print("  [Normalize Saturation] Nessun conteggio valido trovato per la normalizzazione.")
        return {kw: 0 for kw in counts_dict} # Restituisci 0 per tutti se non ci sono dati

    min_count = min(valid_counts)
    max_count = max(valid_counts)

    print(f"  [Normalize Saturation] Min count: {min_count}, Max count: {max_count}")

    # Gestione casi limite
    if min_count == max_count:
        if max_count == 0:
             print("  [Normalize Saturation] Tutti i conteggi validi sono 0. Punteggio normalizzato = 1.")
             score_val = 1 # Minimo punteggio se tutti 0
        else:
             print(f"  [Normalize Saturation] Tutti i conteggi validi sono uguali ({max_count}). Punteggio normalizzato = 100.")
             score_val = 100 # Massimo punteggio se tutti uguali > 0 (massima saturazione relativa)
        # Assegna lo stesso punteggio a tutti quelli con conteggio valido, 0 agli altri
        for keyword, count in counts_dict.items():
            scores[keyword] = score_val if count is not None and isinstance(count, (int, float)) else 0
        return scores

    # Normalizzazione standard 1-100
    denominator = max_count - min_count
    if denominator == 0: denominator = 1 # Prevenzione divisione per zero (anche se già gestito sopra)

    for keyword, count in counts_dict.items():
        if count is not None and isinstance(count, (int, float)):
            # Formula: 1 + 99 * (value - min) / (max - min)
            normalized_score = 1 + 99 * (int(count) - min_count) / denominator
            scores[keyword] = max(1, min(100, round(normalized_score))) # Arrotonda e limita a 1-100
        else:
            scores[keyword] = 0 # Assegna 0 se il conteggio originale era None/fallito

    return scores

# ==============================================================================

# --- FUNZIONE: Generazione output HTML (aggiornata per logica "Docs Only" + Saturation) ---
def generate_html_output(df_final, runtime_info=None):
    """
    Genera solo il file data.js nella directory di output.
    Assume che index.html, style.css, script.js esistano già in OUTPUT_DIR.
    Include Saturation_Score.
    """
    try:
        os.makedirs(OUTPUT_DIR, exist_ok=True)

        # Verifica (opzionale) file base
        base_files_ok = True
        for file_name in [OUTPUT_FILENAME, "style.css", "script.js"]:
            if not os.path.exists(os.path.join(OUTPUT_DIR, file_name)):
                warnings.warn(f"File base '{file_name}' non trovato in '{OUTPUT_DIR}'. L'output potrebbe non funzionare.", UserWarning)
                base_files_ok = False

        trend_list = []
        # Colonne necessarie/desiderate nel JS
        required_cols = ['Rank', 'Entita', 'Discover_Score',
                         'Score_Avg_now 1-H', 'Score_Avg_now 4-H', 'Score_Avg_now 7-d',
                         'Extracted_Entities', 'Saturation_Score'] # Aggiunta Saturation_Score
        available_cols = df_final.columns
        missing_warned = False
        for col in required_cols:
            if col not in available_cols and not missing_warned:
                missing_req = [c for c in required_cols if c not in available_cols]
                warnings.warn(f"Colonne mancanti nel DF finale per JS: {', '.join(missing_req)}. Default usati.", UserWarning)
                missing_warned = True

        for _, row in df_final.iterrows():
            trend_data = {
                'rank': int(row.get('Rank', 0)), # Rank originale da TV
                'entity': row.get('Entita', 'N/A'),
                'discover_score': float(row.get('Discover_Score', 0)),
                'score_1h': float(row.get('Score_Avg_now 1-H', 0)),
                'score_4h': float(row.get('Score_Avg_now 4-H', 0)),
                'score_7d': float(row.get('Score_Avg_now 7-d', 0)),
                'extracted_entities': row.get('Extracted_Entities', ''),
                # Aggiungi saturation score, default a 0 se mancante
                'saturation_score': int(row.get('Saturation_Score', 0))
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
            'saturation_enabled': FETCH_SATURATION_SCORE, # Info sulla saturazione
            'saturation_source': 'curl_cffi' if FETCH_SATURATION_SCORE else 'N/A' # Fonte dello scrape
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
# ==================== SCRIPT PRINCIPALE (V7.9 - con Saturation curl_cffi) =====
# ==============================================================================
if __name__ == "__main__":
    main_start_time = time.time()
    runtime_info = {'start_time': main_start_time}

    # Validazioni iniziali parametri
    if FETCH_VOLUME_CONTEXT:
        if not CONTEXT_TIMEFRAMES: warnings.warn("CONTEXT_TIMEFRAMES vuoto. Contesto disattivato.", UserWarning); FETCH_VOLUME_CONTEXT = False
        if CONTEXT_N_RUNS <= 0: warnings.warn("CONTEXT_N_RUNS deve essere >= 1. Contesto disattivato.", UserWarning); FETCH_VOLUME_CONTEXT = False # Correto: disattiva se <=0
    if FETCH_OPENAI_ENTITIES:
        # N_PROCESS_FOR_OPENAI validato implicitamente se > 0
        if not client: warnings.warn("Client OpenAI non inizializzato. OpenAI disattivato.", UserWarning); FETCH_OPENAI_ENTITIES = False
    # Validazione per Saturation
    if FETCH_SATURATION_SCORE and not CURL_CFFI_AVAILABLE:
         warnings.warn("FETCH_SATURATION_SCORE=True ma curl_cffi non trovato. Saturazione disattivata.", UserWarning)
         FETCH_SATURATION_SCORE = False
    if FETCH_SATURATION_SCORE and N_PROCESS_FOR_SATURATION <= 0:
         warnings.warn("N_PROCESS_FOR_SATURATION deve essere > 0. Saturazione disattivata.", UserWarning)
         FETCH_SATURATION_SCORE = False


    print(f"--- Avvio script Discover Prophet V7.9 (Docs Only, OpenAI, Saturation curl_cffi) ---")
    print(f"Formula Discover Score: V7.9 (Numeratore Pesato: V4h={WEIGHT_V4H_NUMERATOR}, V7d={WEIGHT_V7D_NUMERATOR}; Denom K={V7D_PENALTY_K}, eps={V7D_PENALTY_EPSILON})")
    print(f"Modalità: Lavora su '{OUTPUT_DIR}', genera solo 'data.js'.")
    print(f"Estrazione Contesto Volume (Pytrends): {'ATTIVA' if FETCH_VOLUME_CONTEXT else 'DISATTIVATA'} (Top {N_PROCESS_FOR_CONTEXT}, Runs: {CONTEXT_N_RUNS})")
    print(f"Estrazione Entità (OpenAI): {'ATTIVA' if FETCH_OPENAI_ENTITIES else 'DISATTIVATA'} (Top {N_PROCESS_FOR_OPENAI}, Modello: {OPENAI_MODEL if FETCH_OPENAI_ENTITIES else 'N/A'})")
    print(f"Calcolo Saturazione (curl_cffi): {'ATTIVO' if FETCH_SATURATION_SCORE else 'DISATTIVATO'} (Top {N_PROCESS_FOR_SATURATION}, Browser: {SATURATION_IMPERSONATE_BROWSER if FETCH_SATURATION_SCORE else 'N/A'})")
    print(f"Config Proxy: MaxConc={MAX_CONCURRENT_PROXIES}, CD={PROXY_USE_COOLDOWN}s")
    print(f"Config Threads: Pytrends={MAX_THREADS_PYTRENDS}, OpenAI={MAX_OPENAI_THREADS}, Saturation={MAX_THREADS_SATURATION}")
    print(f"Output: '{OUTPUT_DIR}', Checkpoints: '{CHECKPOINT_DIR}'")

    ordered_entities = None
    df_final = pd.DataFrame()

    try:
        # Crea directory necessarie
        os.makedirs(CHECKPOINT_DIR, exist_ok=True); print(f"Directory checkpoint: '{CHECKPOINT_DIR}'")
        os.makedirs(OUTPUT_DIR, exist_ok=True); print(f"Directory output: '{OUTPUT_DIR}'")

        # --- 1. Estrazione Lista Ordinata (usa cloudscraper/requests via Manager) ---
        ordered_entities = extract_ordered_entities()
        if not ordered_entities: raise Exception("Estrazione iniziale lista ordinata TV fallita.")
        print(f"\nLista Ordinata Iniziale Estratta ({len(ordered_entities)} entità).")
        try:
            df_initial = pd.DataFrame({'Rank': range(1, len(ordered_entities) + 1), 'Entita': ordered_entities})
            df_initial.to_csv(os.path.join(CHECKPOINT_DIR, "01_entities_ordered_extracted.csv"), index=False, encoding='utf-8-sig')
            print(f"  Checkpoint lista ordinata iniziale salvato.")
        except Exception as e: print(f"  Errore salvataggio checkpoint lista ordinata: {e}")

        # Prepara DataFrame finale e inizializza colonne
        df_final = df_initial.copy()
        # Colonne contesto Pytrends
        for tf in CONTEXT_TIMEFRAMES: df_final[f'Score_Avg_{tf}'] = 0.0
        # Colonna OpenAI
        df_final['Extracted_Entities'] = ''
        # Colonna Saturazione
        df_final['Saturation_Score'] = 0 # Inizializza a 0
        # Colonna Discover Score finale
        df_final['Discover_Score'] = 0.0

        # --- 2. Raccolta Score di Contesto (Pytrends via Manager, se attivo) ---
        if FETCH_VOLUME_CONTEXT:
            print(f"\n--- Avvio Raccolta Score Contesto per Top {N_PROCESS_FOR_CONTEXT} Entità ---")
            entities_for_context = ordered_entities[:N_PROCESS_FOR_CONTEXT]
            timeframe_context_results = defaultdict(lambda: defaultdict(list))
            for run in range(1, CONTEXT_N_RUNS + 1):
                print(f"\n===== INIZIO RACCOLTA CONTESTO - RUN {run}/{CONTEXT_N_RUNS} ====="); rst = time.time()
                run_scores = {}
                for tf in CONTEXT_TIMEFRAMES:
                    # Chiama la funzione che usa Pytrends
                    scores = get_all_context_scores(entities_for_context, tf, max_threads=MAX_THREADS_PYTRENDS)
                    run_scores[tf] = scores
                    for entity, score in scores.items(): timeframe_context_results[tf][entity].append(score)
                    print(f"    Run {run}/{CONTEXT_N_RUNS}: Contesto {tf} completato.")
                # Salva checkpoint per la run
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
                # Calcola media robusta (ignora errori/0 se ci sono valori validi)
                avg_scores_map = {}
                for entity, scores in timeframe_context_results[tf_agg].items():
                     valid_scores = [s for s in scores if isinstance(s, (int, float)) and s > 0] # Considera solo > 0 per media? O tutti? Usiamo tutti validi.
                     valid_scores = [s for s in scores if isinstance(s, (int, float))]
                     avg_scores_map[entity] = np.mean(valid_scores) if valid_scores else 0
                df_final[sc_avg_col] = df_final['Entita'].map(avg_scores_map).fillna(0)
                print(f"    Media contesto per {tf_agg} calcolata.")
            print("--- Fine Raccolta Score Contesto ---")
            try:
                cols_to_save = ['Rank', 'Entita'] + [f'Score_Avg_{tf}' for tf in CONTEXT_TIMEFRAMES]
                df_final[cols_to_save].head(N_PROCESS_FOR_CONTEXT).to_csv(os.path.join(CHECKPOINT_DIR, "03_context_averages.csv"), index=False, encoding='utf-8-sig'); print(f"  Checkpoint medie contesto salvato.")
            except Exception as e: print(f"  Errore salvataggio checkpoint medie contesto: {e}")
        else:
            print("\n--- Raccolta Score Contesto Saltata ---")
            # Assicura che le colonne esistano con 0 se il contesto è saltato
            for tf in CONTEXT_TIMEFRAMES:
                if f'Score_Avg_{tf}' not in df_final.columns: df_final[f'Score_Avg_{tf}'] = 0.0

        # --- 3. Estrazione Entità con OpenAI (se attivo) ---
        if FETCH_OPENAI_ENTITIES:
            entities_to_process_openai = ordered_entities[:N_PROCESS_FOR_OPENAI]
            extracted_entities_map = get_entities_with_openai(entities_to_process_openai, max_workers=MAX_OPENAI_THREADS)
            df_final['Extracted_Entities'] = df_final['Entita'].map(extracted_entities_map).fillna('')
            print("  Entità OpenAI mappate nel DataFrame.")
            try:
                df_openai_chk = df_final.loc[df_final['Entita'].isin(entities_to_process_openai), ['Entita', 'Extracted_Entities']]
                chk_filename = "04_openai_extracted_entities.csv"
                df_openai_chk.to_csv(os.path.join(CHECKPOINT_DIR, chk_filename), index=False, encoding='utf-8-sig'); print(f"  Checkpoint entità OpenAI salvato.")
            except Exception as e: print(f"  Errore salvataggio checkpoint entità OpenAI: {e}")
        else:
             print("\n--- Estrazione Entità OpenAI Saltata ---")
             df_final['Extracted_Entities'] = '' # Assicura colonna esista

        # --- 4. Calcolo Heuristic Discover Score ---
        print("\n  Calcolo Heuristic Discover Score V7.9 (Numeratore Pesato)...")
        discover_score_col = 'Discover_Score'; score_4h_col = 'Score_Avg_now 4-H'; score_7d_col = 'Score_Avg_now 7-d'
        if score_4h_col in df_final.columns and score_7d_col in df_final.columns and 'Rank' in df_final.columns:
            score_4h = pd.to_numeric(df_final[score_4h_col], errors='coerce').fillna(0).clip(lower=0)
            score_7d = pd.to_numeric(df_final[score_7d_col], errors='coerce').fillna(0).clip(lower=0)
            rank_series = pd.to_numeric(df_final['Rank'], errors='coerce').fillna(df_final.index + 1).clip(lower=1) # Usa index come fallback rank
            # Usa la funzione V7.9
            df_final[discover_score_col] = calculate_discover_score(
                rank_series, score_4h, score_7d,
                k_penalty=V7D_PENALTY_K,
                epsilon=V7D_PENALTY_EPSILON,
                weight_v4h=WEIGHT_V4H_NUMERATOR,
                weight_v7d=WEIGHT_V7D_NUMERATOR
            )
            print(f"    Colonna '{discover_score_col}' calcolata con formula V7.9.")
        else:
            missing_cols = [col for col in [score_4h_col, score_7d_col, 'Rank'] if col not in df_final.columns]
            warnings.warn(f"Colonne necessarie ({', '.join(missing_cols)}) per Discover Score mancanti. Score impostato a 0.", UserWarning)
            df_final[discover_score_col] = 0.0

        # --- 5. Ordinamento per Discover Score ---
        # Ordinamento PRIMA della saturazione, così prendiamo i TOP N per Discover Score
        if discover_score_col in df_final.columns:
            df_final = df_final.sort_values(by=discover_score_col, ascending=False).reset_index(drop=True)
            # Riassegna il Rank basato sull'ordinamento Discover Score? NO, manteniamo Rank originale TV.
            # df_final['Rank_By_Score'] = range(1, len(df_final) + 1) # Opzionale: nuovo rank
            print(f"\n  DataFrame ordinato per '{discover_score_col}'.")
        else: print(f"\n  ATTENZIONE: Colonna '{discover_score_col}' non trovata per l'ordinamento.")


        # --- 6. Calcolo Punteggio Saturazione (via curl_cffi, se attivo) ---
        if FETCH_SATURATION_SCORE:
             # Prendi i top N keyword DOPO l'ordinamento per Discover Score
             keywords_for_saturation = df_final['Entita'].head(N_PROCESS_FOR_SATURATION).tolist()
             if keywords_for_saturation:
                  # Chiama la funzione che usa curl_cffi
                  saturation_raw_counts = get_all_saturation_counts_curl(
                       keywords_for_saturation,
                       proxy_manager,
                       max_threads=MAX_THREADS_SATURATION
                  )
                  # Normalizza i punteggi ottenuti
                  saturation_normalized_scores = normalize_saturation_scores(saturation_raw_counts)

                  # Mappa i punteggi normalizzati nel DataFrame finale
                  df_final['Saturation_Score'] = df_final['Entita'].map(saturation_normalized_scores).fillna(0).astype(int)
                  print("  Punteggi Saturazione calcolati e mappati nel DataFrame.")

                  # Salva checkpoint saturazione
                  try:
                      df_sat_chk = df_final.loc[df_final['Entita'].isin(keywords_for_saturation), ['Entita', 'Saturation_Score']]
                      # Aggiungi conteggio grezzo se disponibile (utile per debug)
                      df_sat_chk['Raw_Count'] = df_sat_chk['Entita'].map(saturation_raw_counts).fillna('N/A')
                      chk_filename = "05_saturation_scores.csv"
                      df_sat_chk.to_csv(os.path.join(CHECKPOINT_DIR, chk_filename), index=False, encoding='utf-8-sig'); print(f"  Checkpoint punteggi saturazione salvato.")
                  except Exception as e: print(f"  Errore salvataggio checkpoint saturazione: {e}")

             else:
                  print("  Nessuna keyword valida per il calcolo della saturazione.")
                  df_final['Saturation_Score'] = 0 # Assicura colonna a 0
        else:
             print("\n--- Calcolo Punteggio Saturazione Saltato ---")
             df_final['Saturation_Score'] = 0 # Assicura colonna esista e sia 0


        # --- 7. Salva il DataFrame finale completo come CSV ---
        try:
            final_csv_filename = "06_final_sorted_data_v7.9_score_with_saturation.csv" # Nome file aggiornato
            # Seleziona e ordina colonne per il CSV finale
            cols_order = ['Discover_Score', 'Rank', 'Entita', 'Saturation_Score', 'Extracted_Entities',
                          'Score_Avg_now 1-H', 'Score_Avg_now 4-H', 'Score_Avg_now 7-d']
            # Aggiungi altre colonne se esistono e non sono già presenti
            existing_cols = [c for c in cols_order if c in df_final.columns]
            other_cols = [c for c in df_final.columns if c not in existing_cols]
            final_cols_order = existing_cols + sorted(other_cols) # Mette le altre alla fine

            df_final[final_cols_order].to_csv(os.path.join(CHECKPOINT_DIR, final_csv_filename), index=False, encoding='utf-8-sig')
            print(f"\nDataFrame finale completo salvato: {os.path.join(CHECKPOINT_DIR, final_csv_filename)}")
        except Exception as e: print(f"\n!!! Errore salvataggio CSV finale completo: {e} !!!")

        # --- 8. Genera l'output data.js ---
        runtime_info['end_time'] = time.time()
        html_result = generate_html_output(df_final.head(TOP_N_FINAL_DISPLAY), runtime_info) # Passa solo i top N per JS

        # --- 9. Stampa Top N Finale ---
        print(f"\n--- Top {TOP_N_FINAL_DISPLAY} Entità (Ordinate per Discover Score V7.9) ---")
        # Seleziona colonne da mostrare in console
        cols_to_show_console = ['Discover_Score', 'Rank', 'Entita', 'Saturation_Score', 'Extracted_Entities']
        # Aggiungi score contesto se esistono
        cols_to_show_console.extend([f'Score_Avg_{tf}' for tf in CONTEXT_TIMEFRAMES if f'Score_Avg_{tf}' in df_final.columns])
        # Filtra solo colonne esistenti nel df
        cols_to_show_console = [c for c in cols_to_show_console if c in df_final.columns]

        try:
            pd.set_option('display.max_rows', TOP_N_FINAL_DISPLAY + 5)
            pd.set_option('display.width', 200)
            pd.set_option('display.max_colwidth', 45) # Leggermente ridotto per far spazio a Saturazione
            pd.set_option('display.float_format', '{:.2f}'.format) # Formato float
            # Stampa solo le colonne selezionate per i top N
            print(df_final[cols_to_show_console].head(TOP_N_FINAL_DISPLAY).to_string(index=False))
        except Exception as e_print: print(f"Errore stampa finale: {e_print}")
        finally: pd.reset_option('all') # Resetta opzioni pandas

    except Exception as main_exc:
        print(f"\n\n!!! ERRORE CRITICO SCRIPT: {type(main_exc).__name__} - {main_exc} !!!"); traceback.print_exc()
    finally:
        # --- Stampa Statistiche Proxy ---
        print("\n--- Statistiche Proxy Rilevate (Fine Esecuzione) ---")
        try:
            if 'proxy_manager' in locals() and proxy_manager:
                ps = proxy_manager.get_proxy_stats_summary();
                total_requests = ps.get('total_success', 0) + ps.get('total_fail', 0)
                success_rate = (ps.get('total_success', 0) / total_requests * 100) if total_requests > 0 else 0
                print(f"Req Tot Proxy (stimate): {total_requests}, Successi: {ps.get('total_success', 0)} ({success_rate:.1f}%)");
                print(f"  Fail Dettaglio: 429={ps.get('total_fail_429', 0)}, Proxy/Timeout={ps.get('total_fail_proxy_timeout', 0)}, Altri/Parse/Consent={ps.get('total_fail_other_parse_consent', 0)}")
                tfp = ps.get('top_failing_proxies', {});
                if tfp:
                     print("Top Proxy per Fallimenti:")
                     # Mostra solo top 5-10 per brevità
                     for pid, d in list(tfp.items())[:10]:
                          print(f"  - {pid}: Succ:{d['success']}, FailsCons:{d['consecutive_fails']} (429:{d['fail_429']}, P/T:{d['fail_proxy/timeout']}, O/P/C:{d['fail_other/parse/consent']})")
            else: print("Proxy Manager non disponibile per statistiche.")
        except Exception as stats_exc: print(f"Errore stampa stats proxy: {stats_exc}")

        # --- Tempo Esecuzione Finale ---
        main_end_time = time.time(); total_duration = main_end_time - main_start_time
        print(f"\n--- Script V7.9 (Score V7.9, Saturation curl_cffi) completato in {total_duration:.2f} sec ({total_duration/60:.2f} min) ---")
