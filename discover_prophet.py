# -*- coding: utf-8 -*-

# 🚀 Discover Prophet - Google Trends TV Analysis V8.1 (HTML Templating)
#    Generates index.html using Jinja2 template, with Plotly charts
#    and optional related keywords. Based on V7.1 heuristic score.

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
import plotly.graph_objects as go
import plotly.io as pio
from jinja2 import Environment, FileSystemLoader # Aggiunto per templating

print("--- Discover Prophet V8.1 Initializing ---")

# --- Gestione Import Opzionale (FakeUserAgent) ---
try:
    from fake_useragent import UserAgent, FakeUserAgentError
    print("FakeUserAgent library found.")
except ImportError:
    print("WARNING: fake-useragent library not found. Using fallback User-Agent.")
    print("         Consider running: pip install fake-useragent")
    FakeUserAgentError = Exception
    class UserAgent:
        def __init__(self, *args, **kwargs):
            warnings.warn("Libreria fake-useragent non trovata. Uso UA di fallback.")
        @property
        def chrome(self): return self._fallback_ua()
        @property
        def random(self): return self._fallback_ua()
        def _fallback_ua(self): return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

# --- Ignora Warning Specifici ---
warnings.filterwarnings("ignore", category=FutureWarning, module='pytrends')
warnings.filterwarnings("ignore", category=UserWarning, message='Setting null property')
warnings.filterwarnings("ignore", message="urllib3 v2 only supports OpenSSL 1.1.1+")
warnings.filterwarnings("ignore", category=UserWarning, module='bs4')

# ==============================================================================
# ==================== SEZIONE PARAMETRI CONFIGURABILI =========================
# ==============================================================================

# --- Parametri Principali ---
TOP_N_FINAL_DISPLAY = 50 # Quante entità mostrare nella pagina HTML finale
HTML_OUTPUT_FILENAME = "index.html" # Nome del file HTML generato (standard per web)
TEMPLATE_FILENAME = "template.html" # Nome del file template HTML da usare
CSS_FILENAME = "styles.css"        # Nome del file CSS che useremo
CSV_OUTPUT_FILENAME = "discover_prophet_data.csv" # Nome file CSV di backup
CHECKPOINT_DIR = "checkpoint_data_v8_1" # Dir checkpoint aggiornata

# --- Parametri Contesto di Volume ---
FETCH_VOLUME_CONTEXT = True # True per calcolare gli score medi, False per saltare
N_PROCESS_FOR_CONTEXT = 50 # Quante delle entità top usare per calcolare il contesto
CONTEXT_TIMEFRAMES = ['now 1-H', 'now 4-H', 'now 7-d'] # Periodi per calcolare score medi
CONTEXT_N_RUNS = 1 # Quante volte ripetere il fetch del contesto per mediare

# --- Parametri Keyword Correlate (OPZIONALE) ---
FETCH_RELATED_KEYWORDS = False # !!! DISABILITATO DI DEFAULT !!! Abilita con cautela.
MAX_RELATED_TO_FETCH = 10      # Max entità per cui cercare keyword correlate (se abilitato)
RELATED_KEYWORDS_DELAY = 3.0   # Secondi di pausa tra richieste di keyword correlate

# --- Parametri Gestione Proxy e Concorrenza ---
# !!! IMPORTANTE: INSERISCI QUI LA TUA STRINGA PROXY BASE REALE !!!
# Se vuoi usare GitHub Actions per automatizzare, NON mettere la password qui.
# Usa invece le GitHub Secrets (vedi spiegazione dopo i file).
# Per ora, metti la tua stringa qui per testare localmente.
# proxy_base_string = "your_proxy_provider:port:username-country-{geo}:password"
# Esempio (DA SOSTITUIRE CON IL TUO REALE):
proxy_base_string = "v2.proxyempire.io:5000:r_46aa61f010-country-{geo}:8186bbae3e" # <<< TUA STRINGA QUI

# !!! PER GITHUB ACTIONS: Se la stringa proxy è in una Secret chiamata PROXY_STRING:
# try:
#     proxy_base_string = os.environ['PROXY_STRING']
#     print("Using proxy string from environment variable/secret.")
# except KeyError:
#     print("Proxy string secret not found, using hardcoded value (INSECURE for Actions).")
#     # proxy_base_string = "HARDCODED_STRING_AS_FALLBACK_OR_ERROR" # Fallback o errore
#     # Manteniamo l'esempio sopra per ora

MAX_CONCURRENT_PROXIES = 150 # Riduci se hai problemi
PROXY_USE_COOLDOWN = 7
MAX_THREADS = 60

# --- Parametri Ritardi e Pause ---
MIN_DELAY_BETWEEN_REQUESTS = 0.5
MAX_DELAY_BETWEEN_REQUESTS = 2.5
ENTITY_EXTRACTION_INITIAL_WAIT = 5

# --- Parametri Gestione Errori e Tentativi ---
ENTITY_EXTRACTION_MAX_RETRIES = 10
MAX_RETRIES_PYTRENDS_CONTEXT = 5
INITIAL_BACKOFF_SECONDS_429 = 7
BACKOFF_MULTIPLIER_429 = 1.3
MAX_WAIT_SECONDS = 30
PROXY_FAILURE_THRESHOLD = 3
PROXY_FAILURE_COOLDOWN_MULTIPLIER = 1.2

# --- Parametri Timeout Connessioni ---
ENTITY_EXTRACTION_CONNECT_TIMEOUT = 25
ENTITY_EXTRACTION_READ_TIMEOUT = 30
PYTRENDS_CONNECT_TIMEOUT = 15
PYTRENDS_READ_TIMEOUT = 30

# --- Parametri Interni Pytrends ---
PYTRENDS_RETRIES = 1
PYTRENDS_BACKOFF_FACTOR = 0.2

# ==============================================================================
# ================== FINE SEZIONE PARAMETRI CONFIGURABILI ======================
# ==============================================================================

# --- Validazione Proxy Base String ---
if "your_proxy_provider" in proxy_base_string or "username-country-{geo}" in proxy_base_string or proxy_base_string == "v2.proxyempire.io:5000:r_46aa61f010-country-{geo}:8186bbae3e": # Aggiunto check sull'esempio
     print("\n" + "="*60)
     print("!!! ATTENZIONE: Controlla la variabile 'proxy_base_string'!         !!!")
     print("!!! Devi inserire la stringa del TUO provider proxy reale.        !!!")
     print("!!! Se usi l'esempio ProxyEmpire, assicurati che sia ancora valido !!!")
     print("!!! Per GitHub Actions, USA LE SECRETS, non hardcodare qui!      !!!")
     print("="*60 + "\n")
     # Potresti voler aggiungere un input per confermare o uscire se non modificato
     # input("Premi Invio per continuare con la stringa proxy attuale (potrebbe fallire)...")


# --- Definizione Stringa Base Proxy e Rimozione Proxy Problematici ---
# (Codice invariato per generazione lista proxy)
original_country_codes = [
    'af', 'al', 'dz', 'as', 'ad', 'ao', 'ai', 'aq', 'ag', 'ar', 'am', 'aw', 'au', 'at', 'az', 'bs', 'bh', 'bd', 'bb', 'by', 'be', 'bz', 'bj', 'bm', 'bt', 'bo', 'ba', 'bw', 'br', 'io', 'bn', 'bg', 'bf', 'bi', 'kh', 'cm', 'ca', 'cv', 'ky', 'cf', 'td', 'cl', 'cn', 'co', 'km', 'cg', 'ck', 'cr', 'hr', 'cu', 'cy', 'cz', 'dk', 'dj', 'dm', 'do', 'ec', 'eg', 'sv', 'gq', 'er', 'ee', 'et', 'fk', 'fo', 'fj', 'fi', 'fr', 'gf', 'pf', 'ga', 'gm', 'ge', 'de', 'gh', 'gi', 'gr', 'gl', 'gd', 'gp', 'gu', 'gt', 'gg', 'gn', 'gw', 'gy', 'ht', 'va', 'hn', 'hk', 'hu', 'is', 'in', 'id', 'ir', 'iq', 'ie', 'im', 'il', 'it', 'ci', 'jm', 'jp', 'je', 'jo', 'kz', 'ke', 'ki', 'kw', 'kg', 'la', 'lv', 'lb', 'ls', 'lr', 'ly', 'li', 'lt', 'lu', 'mo', 'mk', 'mg', 'mw', 'my', 'mv', 'ml', 'mt', 'mh', 'mq', 'mr', 'mu', 'yt', 'mx', 'fm', 'md', 'mc', 'mn', 'me', 'ms', 'ma', 'mz', 'mm', 'na', 'nr', 'np', 'nl', 'nc', 'nz', 'ni', 'ne', 'ng', 'nu', 'nf', 'kp', 'gb', 'mp', 'no', 'om', 'pk', 'pw', 'ps', 'pa', 'pg', 'py', 'pe', 'ph', 'pl', 'pt', 'pr', 'qa', 're', 'ro', 'ru', 'rw', 'sh', 'kn', 'lc', 'vc', 'ws', 'sm', 'st', 'sa', 'sn', 'rs', 'sc', 'sl', 'sg', 'sk', 'si', 'sb', 'so', 'za', 'kr', 'ss', 'es', 'lk', 'sd', 'sr', 'sz', 'se', 'ch', 'sy', 'tj', 'tw', 'tz', 'th', 'cd', 'tl', 'tg', 'tk', 'to', 'tt', 'tn', 'tr', 'tm', 'tc', 'tv', 'ug', 'ua', 'ae', 'us', 'uy', 'uz', 'vu', 've', 'vn', 'vg', 'vi', 'wf', 'eh', 'ye', 'zm', 'zw'
]
proxies_to_remove_geo = {
    'aq', 'io', 'cf', 'bi', 'td', 'km', 'fk', 'cn', 'gw', 'va', 'ki', 'nr', 'nu', 'nf', 'kp', 'pg', 'sh', 'ws', 'tl', 'tk', 'tv', 'wf', 'eh', 'dj', 'gl', 'al', 'cu', 'ir', 'sy', 'kp' # Aggiunti alcuni noti per problemi
}
country_codes = sorted([code for code in original_country_codes if code not in proxies_to_remove_geo])
print(f"Proxy GEOs: Original {len(original_country_codes)}, Removed {len(proxies_to_remove_geo)}, Using {len(country_codes)}.")

# --- Generazione Lista Proxy Effettiva ---
proxies_list_with_geo = []
for geo in country_codes:
    try:
        proxy_str = proxy_base_string.format(geo=geo.lower())
        parts = proxy_str.split(':')
        if len(parts) == 4:
            match = re.search(r'-country-([a-z]{2})', parts[2], re.IGNORECASE)
            if match:
                proxies_list_with_geo.append({"proxy": proxy_str, "geo": match.group(1).upper()})
            else:
                 warnings.warn(f"Username format might be unexpected: {parts[2]} in {proxy_str}", UserWarning)
                 proxies_list_with_geo.append({"proxy": proxy_str, "geo": geo.upper()}) # Still add it
        else:
            warnings.warn(f"Invalid proxy format (expected 4 parts): {proxy_str}", UserWarning)
    except Exception as e:
         warnings.warn(f"Error formatting proxy for GEO '{geo}': {e} - Proxy string: {proxy_base_string}", UserWarning)

if not proxies_list_with_geo:
    print("\n" + "="*60)
    print("!!! ERRORE CRITICO: La lista dei proxy è VUOTA dopo il filtraggio! !!!")
    print("!!! Controlla la 'proxy_base_string' e i codici GEO.           !!!")
    print("="*60 + "\n")
    raise ValueError("Proxy list is empty after filtering!")
print(f"Generated {len(proxies_list_with_geo)} proxies with associated geo codes.")


# --- Mapping Geo -> Lingua/Timezone ---
COUNTRY_LOCALE_MAP = {
    'IT': {'hl': 'it-IT', 'tz': 60}, 'US': {'hl': 'en-US', 'tz': -300}, 'GB': {'hl': 'en-GB', 'tz': 0},
    'FR': {'hl': 'fr-FR', 'tz': 60}, 'DE': {'hl': 'de-DE', 'tz': 60}, 'ES': {'hl': 'es-ES', 'tz': 60},
    'JP': {'hl': 'ja-JP', 'tz': 540}, 'AU': {'hl': 'en-AU', 'tz': 600}, 'CA': {'hl': 'en-CA', 'tz': -300},
    'BR': {'hl': 'pt-BR', 'tz': -180}, 'IN': {'hl': 'en-IN', 'tz': 330},
    'DEFAULT': {'hl': 'en-US', 'tz': -300}
}
def get_locale_for_geo(geo_code):
    return COUNTRY_LOCALE_MAP.get(geo_code.upper(), COUNTRY_LOCALE_MAP['DEFAULT'])

# --- Funzione Utilità get_proxy_url ---
def get_proxy_url(proxy_str):
    # (Codice invariato)
    if not proxy_str: return None
    parts = proxy_str.split(':')
    if len(parts) == 4:
        host, port, user, pwd = parts
        if port.isdigit():
            return f"http://{user}:{pwd}@{host}:{port}"
        else:
            warnings.warn(f"Invalid port in proxy string: {proxy_str}", UserWarning)
            return None
    else:
        warnings.warn(f"Invalid proxy format (expected 4 parts): {proxy_str}", UserWarning)
        return None

# --- Classi AdvancedProxyManager e ConsistentBrowserProfile ---
# (Codice delle classi invariato rispetto alla versione V8.0 precedente - Omesse per brevità)
# Assicurati che siano presenti qui nel tuo file reale.
class ConsistentBrowserProfile:
    # ... (Codice classe V8.0 qui) ...
        BROWSER_TYPES = ['chrome']
        OS_MAP = {'WINDOWS': ['windows'], 'MACOS': ['darwin'], 'LINUX': ['linux']}
        GEO_OS_PREFERENCE = {'US': ['WINDOWS', 'MACOS'], 'CA': ['WINDOWS', 'MACOS'], 'GB': ['WINDOWS', 'MACOS'], 'FR': ['WINDOWS', 'MACOS'], 'DE': ['WINDOWS', 'MACOS'], 'IT': ['WINDOWS', 'MACOS'], 'ES': ['WINDOWS', 'MACOS'], 'AU': ['WINDOWS', 'MACOS'], 'JP': ['WINDOWS', 'MACOS'], 'BR': ['WINDOWS'], 'IN': ['WINDOWS'], 'DEFAULT': ['WINDOWS', 'MACOS', 'LINUX']}
        FALLBACK_USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

        def __init__(self, geo_code):
            if not geo_code or not isinstance(geo_code, str):
                geo_code = 'DEFAULT'
            else:
                geo_code = geo_code.upper()
            self.geo_code = geo_code
            self.locale_info = get_locale_for_geo(self.geo_code)
            possible_os = self.GEO_OS_PREFERENCE.get(self.geo_code, self.GEO_OS_PREFERENCE['DEFAULT'])
            os_group = random.choice(possible_os)
            self.os_platform = random.choice(self.OS_MAP.get(os_group, ['windows'])) # e.g., 'windows'
            self.os_name = os_group # e.g., 'WINDOWS'
            self.browser = 'chrome'
            self.user_agent = self.FALLBACK_USER_AGENT
            try:
                ua_gen = UserAgent(use_external_data=False, browsers=['chrome'])
                self.user_agent = ua_gen.chrome
            except Exception as ua_err:
                 pass # Use fallback
            lang_base = self.locale_info['hl'].split('-')[0]
            self.accept_language = f"{self.locale_info['hl']},{lang_base};q=0.9,en;q=0.8"

        def get_headers(self):
            return {
                'User-Agent': self.user_agent, 'Accept-Language': self.accept_language,
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'Accept-Encoding': 'gzip, deflate, br', 'Connection': 'keep-alive',
                'Sec-Fetch-Dest': 'document', 'Sec-Fetch-Mode': 'navigate',
                'Sec-Fetch-Site': random.choice(['none', 'same-origin', 'cross-site']),
                'Sec-Fetch-User': '?1', 'Upgrade-Insecure-Requests': '1',
                'Cache-Control': 'max-age=0',
            }

        def get_pytrends_params(self):
            return {'hl': self.locale_info['hl'], 'tz': self.locale_info['tz']}

class AdvancedProxyManager:
    # ... (Codice classe V8.0 qui) ...
    def __init__(self, proxy_geo_list, max_concurrent, cooldown_seconds):
        self.max_concurrent = max_concurrent; self.cooldown_seconds = cooldown_seconds; self.lock = threading.Lock(); self.all_proxies = {item['proxy']: item['geo'] for item in proxy_geo_list}; self.available_proxies = deque(self.all_proxies.keys()); random.shuffle(list(self.available_proxies)); self.active_proxies = {}; self.cooldown_proxies = {}; self.proxy_consecutive_failures = defaultdict(int); self.proxy_stats = defaultdict(lambda: {"success": 0, "fail_429": 0, "fail_5xx": 0, "fail_other": 0, "fail_timeout": 0, "fail_proxy_error": 0, "fail_parse": 0, "fail_session": 0}); self.active_sessions = {}; print(f"AdvProxyManager: {len(self.all_proxies)} proxies, Max Concurrent: {self.max_concurrent}, Cooldown: {self.cooldown_seconds}s")
    def _check_cooldown(self): ct = time.time(); reactivated = []; [reactivated.append(p) for p, et in list(self.cooldown_proxies.items()) if ct >= et]; [self.available_proxies.append(p) for p in reactivated if self.cooldown_proxies.pop(p, None)] # Use pop
    def get_proxy(self):
        with self.lock:
            self._check_cooldown();
            if len(self.active_proxies) < self.max_concurrent and self.available_proxies:
                proxy_str = self.available_proxies.popleft(); geo = self.all_proxies[proxy_str]; self.active_proxies[proxy_str] = time.time(); proxy_url = get_proxy_url(proxy_str);
                try: profile = ConsistentBrowserProfile(geo)
                except Exception as e: warnings.warn(f"Error creating profile for {geo}: {e}. Using DEFAULT."); profile = ConsistentBrowserProfile('DEFAULT')
                scraper = None; session_creation_success = False;
                try:
                    browser_cfg = {'browser': 'chrome', 'platform': profile.os_platform if profile.os_platform in ['windows', 'darwin', 'linux'] else 'windows', 'mobile': False, 'desktop': True, 'user_agent': profile.user_agent};
                    scraper = cloudscraper.create_scraper(browser=browser_cfg, delay=random.uniform(0.5, 1.5)); scraper.headers.update(profile.get_headers()); session_creation_success = True
                except Exception as e:
                    warnings.warn(f"Cloudscraper creation failed for {geo}: {type(e).__name__}. Falling back to requests.Session."); scraper = requests.Session(); scraper.headers.update(profile.get_headers()); session_creation_success = True # Fallback is success
                if proxy_url and scraper: scraper.proxies = {'http': proxy_url, 'https': proxy_url}
                elif not proxy_url: warnings.warn(f"Invalid proxy URL for {proxy_str}, session will not use proxy.")
                if scraper: self.active_sessions[proxy_str] = {'scraper': scraper, 'profile': profile}; return proxy_str, geo, self.active_sessions[proxy_str]
                else: print(f"!! CRITICAL: Failed to create any session for proxy {geo}. Releasing."); del self.active_proxies[proxy_str]; self.cooldown_proxies[proxy_str] = time.time() + self.cooldown_seconds * 2; self.proxy_stats[proxy_str]["fail_session"] += 1; return None
            else: return None
    def get_pytrends_session(self, proxy_str, profile):
        proxy_url = get_proxy_url(proxy_str); proxies_list = [proxy_url] if proxy_url else []; pytrends_params = profile.get_pytrends_params();
        try:
            custom_session = requests.Session(); custom_session.headers.update(profile.get_headers());
            if proxies_list: custom_session.proxies = {'http': proxies_list[0], 'https': proxies_list[0]}
            pt = TrendReq(hl=pytrends_params['hl'], tz=pytrends_params['tz'], timeout=(PYTRENDS_CONNECT_TIMEOUT, PYTRENDS_READ_TIMEOUT), retries=PYTRENDS_RETRIES, backoff_factor=PYTRENDS_BACKOFF_FACTOR, requests_session=custom_session); return pt
        except Exception as e:
             warnings.warn(f"Error creating TrendReq session for {proxy_str}: {e}"); return TrendReq(hl=pytrends_params['hl'], tz=pytrends_params['tz'], timeout=(PYTRENDS_CONNECT_TIMEOUT, PYTRENDS_READ_TIMEOUT), retries=PYTRENDS_RETRIES, backoff_factor=PYTRENDS_BACKOFF_FACTOR, proxies=proxies_list)
    def release_proxy(self, proxy_str, success=True, status_code=None, error_type=None):
        with self.lock:
            if proxy_str not in self.all_proxies: warnings.warn(f"Attempted release unmanaged proxy: {proxy_str}", UserWarning); return
            if proxy_str in self.active_sessions: session_data = self.active_sessions.pop(proxy_str); scraper = session_data.get('scraper');
            if scraper and hasattr(scraper, 'close'):
                try: scraper.close()
                except Exception: pass
            if proxy_str in self.active_proxies: del self.active_proxies[proxy_str]
            base_cooldown = self.cooldown_seconds; cooldown_end_time = time.time() + base_cooldown; geo = self.all_proxies.get(proxy_str, 'N/A');
            if success: self.proxy_stats[proxy_str]["success"] += 1; self.proxy_consecutive_failures[proxy_str] = 0
            else:
                self.proxy_consecutive_failures[proxy_str] += 1; failures = self.proxy_consecutive_failures[proxy_str];
                if error_type == '429_related' or status_code == 429: self.proxy_stats[proxy_str]["fail_429"] += 1; cooldown_end_time = time.time() + (base_cooldown * 4)
                elif error_type == 'Timeout': self.proxy_stats[proxy_str]["fail_timeout"] += 1; cooldown_end_time = time.time() + (base_cooldown * 2)
                elif error_type == 'ProxyError' or (isinstance(status_code, int) and 500 <= status_code <= 599): self.proxy_stats[proxy_str]["fail_proxy_error"] += 1; cooldown_end_time = time.time() + (base_cooldown * 3)
                elif error_type == 'parse_fail' or error_type == 'empty_data': self.proxy_stats[proxy_str]["fail_parse"] += 1; cooldown_end_time = time.time() + (base_cooldown * 1.5)
                elif error_type in ['pytrends_session_error', 'related_query_error', 'fail_session']: self.proxy_stats[proxy_str]["fail_session"] += 1; cooldown_end_time = time.time() + (base_cooldown * 1.5)
                else: self.proxy_stats[proxy_str]["fail_other"] += 1; cooldown_end_time = time.time() + (base_cooldown * 1.2)
                if failures >= PROXY_FAILURE_THRESHOLD:
                    multiplier = 1 + (PROXY_FAILURE_COOLDOWN_MULTIPLIER * (failures - PROXY_FAILURE_THRESHOLD + 1)); additional_cooldown = base_cooldown * multiplier; current_time = time.time(); base_duration = max(0, cooldown_end_time - current_time); final_duration = base_duration + additional_cooldown; cooldown_end_time = current_time + final_duration; print(f"    INFO: Proxy {geo} ({proxy_str[-10:]}) has {failures} cons fails. CD extended to ~{final_duration:.0f}s.")
            self.cooldown_proxies[proxy_str] = cooldown_end_time
    def get_proxy_stats_summary(self):
         with self.lock:
            total_success = sum(s.get("success", 0) for s in self.proxy_stats.values()); total_fail_429 = sum(s.get("fail_429", 0) for s in self.proxy_stats.values()); total_fail_proxy_timeout_5xx = sum(s.get("fail_proxy_error", 0) + s.get("fail_5xx", 0) + s.get("fail_timeout", 0) for s in self.proxy_stats.values()); total_fail_other_parse_session = sum(s.get("fail_other", 0) + s.get("fail_parse", 0) + s.get("fail_session", 0) for s in self.proxy_stats.values()); failing_proxies_details = {};
            for p_str, stats in self.proxy_stats.items():
                geo = self.all_proxies.get(p_str, 'N/A'); f429 = stats.get("fail_429", 0); fpte = stats.get("fail_proxy_error", 0) + stats.get("fail_5xx", 0) + stats.get("fail_timeout", 0); fops = stats.get("fail_other", 0) + stats.get("fail_parse", 0) + stats.get("fail_session", 0); total_fails = f429 + fpte + fops;
                if total_fails > 0: failing_proxies_details[f"{geo} ({p_str[-10:]})"] = {"success": stats.get("success", 0), "fail_429": f429, "fail_proxy/timeout/5xx": fpte, "fail_other/parse/session": fops, "consecutive_fails": self.proxy_consecutive_failures.get(p_str, 0)}
            sorted_failing_proxies = dict(sorted(failing_proxies_details.items(), key=lambda item: sum(item[1][k] for k in item[1] if k.startswith('fail')), reverse=True));
            return {"total_success": total_success, "total_fail_429": total_fail_429, "total_fail_proxy_timeout_5xx": total_fail_proxy_timeout_5xx, "total_fail_other_parse_session": total_fail_other_parse_session, "top_failing_proxies": dict(list(sorted_failing_proxies.items())[:15])}


# --- Inizializzazione Manager Globale ---
try:
    proxy_manager = AdvancedProxyManager(proxies_list_with_geo, MAX_CONCURRENT_PROXIES, PROXY_USE_COOLDOWN)
except Exception as e:
    print(f"!!! CRITICAL ERROR initializing Proxy Manager: {e} !!!")
    print("!!! Check proxy list generation and parameters. Exiting. !!!")
    exit()

# --- Funzioni di Estrazione Dati, Calcolo Score, Grafici, Keyword ---
# (Codice per extract_ordered_entities, get_trends_scores, get_all_context_scores,
#  create_trend_chart, get_related_keywords invariato rispetto a V8.0 - Omesse per brevità)
# Assicurati che siano presenti qui nel tuo file reale.
def extract_ordered_entities(max_retries=ENTITY_EXTRACTION_MAX_RETRIES, initial_wait=ENTITY_EXTRACTION_INITIAL_WAIT):
    # ... (Codice funzione V8.0 qui) ...
    attempts = 0; current_wait = initial_wait; print(f"Starting ordered entity extraction (max {max_retries} attempts)...")
    while attempts < max_retries:
        attempts += 1; print(f"Attempt {attempts}/{max_retries} to extract ordered entities...")
        proxy_info, status_code, error_type_str, release_success = None, None, None, False; scraper, session_data, geo_code = None, None, None; proxy_str = None
        try:
            get_proxy_attempts = 0
            while proxy_info is None and get_proxy_attempts < 5:
                get_proxy_attempts += 1; proxy_info = proxy_manager.get_proxy();
                if proxy_info is None: time.sleep(random.uniform(2, 5))
            if proxy_info is None: print("    Could not get a proxy. Skipping attempt."); time.sleep(min(current_wait * 1.5, MAX_WAIT_SECONDS / 2)); current_wait = min(current_wait * 1.5, MAX_WAIT_SECONDS / 2); continue
            proxy_str, geo_code, session_data = proxy_info; scraper = session_data['scraper']; print(f"    Attempting with proxy: {geo_code} ({proxy_str[-10:]})")
            target_url = "https://trends.google.com/trends/hottrends/visualize/internal/embed/root?hl=it-IT&geo=IT"; response = None; max_internal_retries = 2
            for internal_attempt in range(max_internal_retries):
                try:
                    time.sleep(random.uniform(0.5, 1.5)); response = scraper.get(target_url, timeout=(ENTITY_EXTRACTION_CONNECT_TIMEOUT, ENTITY_EXTRACTION_READ_TIMEOUT)); status_code = response.status_code;
                    if status_code == 200: break
                    else: print(f"      Internal attempt {internal_attempt+1}: Status {status_code}. Retrying...");
                    if status_code == 429: wait_429 = random.uniform(3, 6); print(f"      -> 429 detected, waiting {wait_429:.1f}s..."); time.sleep(wait_429)
                    elif 500 <= status_code <= 599: time.sleep(random.uniform(2, 4))
                    else: time.sleep(random.uniform(1.5, 3))
                except (requests.exceptions.Timeout, socket.timeout) as e_timeout: print(f"      Internal attempt {internal_attempt+1}: Timeout. Retrying..."); status_code = None; time.sleep(random.uniform(2, 4))
                except (requests.exceptions.ProxyError, requests.exceptions.ConnectionError) as e_proxy: print(f"      Internal attempt {internal_attempt+1}: Proxy/Conn Error. Retrying..."); status_code = None; time.sleep(random.uniform(3, 5))
                except Exception as e_req: print(f"      Internal attempt {internal_attempt+1}: Request Error ({type(e_req).__name__}). Retrying..."); status_code = None; time.sleep(random.uniform(2, 4))
                if internal_attempt == max_internal_retries - 1 and (response is None or status_code != 200): print(f"    Failed all internal request attempts."); raise Exception(f"Failed request. Last status: {status_code}")
            if response is None or status_code != 200: error_type_str = f'request_failed_status_{status_code}'; raise Exception(f"Request failed, status: {status_code}")
            soup = BeautifulSoup(response.text, 'html.parser'); scripts = soup.find_all('script'); found_data = False; ordered_entities_found = []
            for script in scripts:
                if script.string and 'trends.HotTrendsWidget.render' in script.string:
                    match = re.search(r'trends\.HotTrendsWidget\.render\(\s*document\.getElementById\([^)]+\),\s*(\[.+\]),\s*\{', script.string, re.DOTALL);
                    if match:
                        json_text = match.group(1).strip();
                        try:
                            data = json.loads(json_text);
                            if isinstance(data, list) and len(data) > 0 and isinstance(data[0], list):
                                entities = [item.get('title') for item in data[0] if isinstance(item, dict) and 'title' in item];
                                if entities: ordered_entities_found = entities; found_data = True; break
                        except json.JSONDecodeError as e_json: print(f"      Error decoding JSON: {e_json}"); error_type_str = 'parse_fail'
                        except Exception as e_parse: print(f"      Unexpected error parsing data: {e_parse}"); error_type_str = 'parse_fail'
            if found_data and ordered_entities_found: print(f"    Successfully extracted {len(ordered_entities_found)} entities via {geo_code}."); release_success = True; return ordered_entities_found
            else: print(f"    Status 200 OK, but failed to parse entity data via {geo_code}."); error_type_str = 'parse_fail' if not error_type_str else error_type_str; time.sleep(current_wait); current_wait = min(current_wait * 1.5, MAX_WAIT_SECONDS / 2)
        except Exception as e:
            error_msg = str(e); print(f"!! ERROR attempt {attempts} (Proxy: {geo_code}): {type(e).__name__} - {error_msg[:200]}");
            if isinstance(e, (requests.exceptions.ProxyError, requests.exceptions.ConnectionError, socket.gaierror)): error_type_str = 'ProxyError'
            elif isinstance(e, (requests.exceptions.Timeout, socket.timeout)): error_type_str = 'Timeout'
            elif '429' in error_msg or status_code == 429: error_type_str = '429_related'
            elif error_type_str == 'parse_fail': pass
            else: error_type_str = f'other_{type(e).__name__}'
            wait_time = min(current_wait * 1.5, MAX_WAIT_SECONDS); print(f"    Waiting {wait_time:.1f}s..."); time.sleep(wait_time); current_wait = wait_time;
        finally:
            if proxy_info and proxy_str: proxy_manager.release_proxy(proxy_str, success=release_success, status_code=status_code, error_type=error_type_str); proxy_info = None; proxy_str = None
    print(f"!!! FAILED to extract ordered entities after {max_retries} attempts. !!!"); return None

def get_trends_scores(keywords, timeframe):
    # ... (Codice funzione V8.0 qui) ...
    attempts = 0; current_backoff_429 = INITIAL_BACKOFF_SECONDS_429; current_backoff_other = 3.0; start_time = time.time(); proxy_info, pytrends, geo_code = None, None, None; proxy_str = None; max_proxy_attempts_per_call = max(3, MAX_RETRIES_PYTRENDS_CONTEXT); proxies_tried_this_call = set(); kw_list_str = ",".join(sorted(keywords)); kw_hash = hashlib.md5(kw_list_str.encode()).hexdigest()[:6];
    while attempts < MAX_RETRIES_PYTRENDS_CONTEXT:
        attempts += 1; proxy_info, status_code, error_type_str, release_success = None, None, None, False; pytrends, session_data, geo_code = None, None, None; proxy_str = None;
        if len(proxies_tried_this_call) >= max_proxy_attempts_per_call: print(f"      [CTX KW:{kw_hash} T{attempts}] Reached max proxy attempts ({max_proxy_attempts_per_call}). Aborting."); break
        try:
            get_proxy_attempts = 0
            while proxy_info is None and get_proxy_attempts < 5:
                get_proxy_attempts += 1; candidate_proxy_info = proxy_manager.get_proxy();
                if candidate_proxy_info:
                    candidate_proxy_str = candidate_proxy_info[0];
                    if candidate_proxy_str not in proxies_tried_this_call: proxy_info = candidate_proxy_info; proxy_str = candidate_proxy_str; proxies_tried_this_call.add(proxy_str); break
                    else: proxy_manager.release_proxy(candidate_proxy_str, success=True); time.sleep(0.5)
                else: time.sleep(random.uniform(2, 4))
            if proxy_info is None: print(f"      [CTX KW:{kw_hash} T{attempts}] Could not get new proxy. Skipping attempt."); time.sleep(min(current_backoff_other * 1.5, MAX_WAIT_SECONDS / 2)); current_backoff_other = min(current_backoff_other * 1.5, MAX_WAIT_SECONDS / 2); continue
            geo_code = proxy_info[1]; session_data = proxy_info[2]; profile = session_data['profile'];
            try: pytrends = proxy_manager.get_pytrends_session(proxy_str, profile); assert pytrends is not None
            except Exception as e_session: print(f"      [CTX KW:{kw_hash} T{attempts}] Pytrends session error (Proxy: {geo_code}): {e_session}"); error_type_str = 'pytrends_session_error'; proxy_manager.release_proxy(proxy_str, success=False, error_type=error_type_str); proxy_info = None; proxy_str = None; time.sleep(random.uniform(1, 3)); continue
            base_delay = random.uniform(MIN_DELAY_BETWEEN_REQUESTS, MAX_DELAY_BETWEEN_REQUESTS); time.sleep(base_delay); shuffled_keywords = keywords.copy(); random.shuffle(shuffled_keywords); pytrends.build_payload(shuffled_keywords, timeframe=timeframe, geo='IT', gprop=''); df = pytrends.interest_over_time();
            if df.empty or all(c == 'isPartial' for c in df.columns): print(f"      [CTX KW:{kw_hash} T{attempts}] Empty data (Proxy: {geo_code})."); error_type_str = 'empty_data'; release_success = False; time.sleep(current_backoff_other); current_backoff_other = min(current_backoff_other * 1.2, MAX_WAIT_SECONDS / 3)
            else: scores = df.drop(columns=['isPartial'], errors='ignore').mean().to_dict(); final_scores = {kw: scores.get(kw, 0) for kw in keywords}; elapsed = time.time() - start_time; release_success = True; proxy_manager.release_proxy(proxy_str, success=True, status_code=200); return final_scores
        except requests.exceptions.HTTPError as http_err:
             status_code = http_err.response.status_code if hasattr(http_err, 'response') else None; print(f"      [CTX KW:{kw_hash} T{attempts}] HTTP Error {status_code or 'N/A'} (Proxy: {geo_code})");
             if status_code == 429: error_type_str = '429_related'; wait = min(current_backoff_429, MAX_WAIT_SECONDS); print(f"      -> 429! Waiting {wait:.1f}s..."); time.sleep(wait); current_backoff_429 = min(current_backoff_429 * BACKOFF_MULTIPLIER_429, MAX_WAIT_SECONDS * 1.5)
             elif status_code and 500 <= status_code <= 599: error_type_str = 'ProxyError'; wait = min(current_backoff_other * 1.5, MAX_WAIT_SECONDS / 2); print(f"      -> Server Error {status_code}. Waiting {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other * 1.5, MAX_WAIT_SECONDS)
             else: error_type_str = f'HTTP_{status_code or "N/A"}'; wait = min(current_backoff_other * 1.2, MAX_WAIT_SECONDS / 2); print(f"      -> HTTP Error {status_code}. Waiting {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other * 1.2, MAX_WAIT_SECONDS)
        except (requests.exceptions.Timeout, socket.timeout) as timeout_err: error_type_str = 'Timeout'; print(f"      [CTX KW:{kw_hash} T{attempts}] Timeout (Proxy: {geo_code}): {timeout_err}"); wait = min(current_backoff_other * 1.2, MAX_WAIT_SECONDS / 2); print(f"      -> Timeout. Waiting {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(wait * 1.2, MAX_WAIT_SECONDS)
        except (requests.exceptions.ProxyError, requests.exceptions.ConnectionError, ConnectionRefusedError, socket.gaierror, OSError) as proxy_conn_err: error_type_str = 'ProxyError'; status_code = 502 if any(s in str(proxy_conn_err) for s in ['502', '503', '504']) else None; print(f"      [CTX KW:{kw_hash} T{attempts}] Proxy/Conn Error (Proxy: {geo_code}): {type(proxy_conn_err).__name__}"); wait = min(current_backoff_other * 1.5, MAX_WAIT_SECONDS / 2); print(f"      -> Proxy/Conn Error. Waiting {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other * 1.5, MAX_WAIT_SECONDS)
        except json.JSONDecodeError as json_err: error_type_str = 'parse_fail'; status_code = None; print(f"      [CTX KW:{kw_hash} T{attempts}] JSON Decode Error (Proxy: {geo_code}): {json_err}"); wait = min(current_backoff_other, MAX_WAIT_SECONDS / 2); print(f"      -> JSON Error. Waiting {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other * 1.5, MAX_WAIT_SECONDS)
        except Exception as e:
            msg = str(e); error_type_str = f'other_{type(e).__name__}'; is_429_likely = '429' in msg; print(f"!!    [CTX KW:{kw_hash} T{attempts}] UNEXPECTED Pytrends Error (Proxy: {geo_code}): {type(e).__name__}: {msg[:150]}");
            if is_429_likely: error_type_str = '429_related'; wait = min(current_backoff_429, MAX_WAIT_SECONDS); print(f"      -> 429 in generic error! Waiting {wait:.1f}s..."); time.sleep(wait); current_backoff_429 = min(current_backoff_429 * BACKOFF_MULTIPLIER_429, MAX_WAIT_SECONDS * 1.5)
            elif isinstance(e, AttributeError): error_type_str = 'parse_fail'; wait = min(current_backoff_other, MAX_WAIT_SECONDS / 2); print(f"      -> Attribute Error. Waiting {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other * 1.5, MAX_WAIT_SECONDS)
            else: wait = min(current_backoff_other, MAX_WAIT_SECONDS / 2); print(f"      -> Generic Error. Waiting {wait:.1f}s..."); time.sleep(wait); current_backoff_other = min(current_backoff_other * 1.5, MAX_WAIT_SECONDS)
        finally:
            if proxy_info and proxy_str and not release_success: proxy_manager.release_proxy(proxy_str, success=False, status_code=status_code, error_type=error_type_str); proxy_info = None; proxy_str = None
    print(f"!!! [CTX KW:{kw_hash}] FAILED all {attempts} context attempts for {timeframe}. Returning zeros."); return {kw: 0 for kw in keywords}

def get_all_context_scores(entities_subset, timeframe):
    # ... (Codice funzione V8.0 qui) ...
    all_scores = {}; entity_list = sorted(list(set(entities_subset))); group_size = 4; groups = [entity_list[i:i+group_size] for i in range(0, len(entity_list), group_size)]; print(f"\n--- Starting CONTEXT score collection: Timeframe '{timeframe}' ---"); print(f"    Entities: {len(entity_list)}, Groups: {len(groups)}, Max Threads: {MAX_THREADS}"); thread_limiter = threading.Semaphore(MAX_THREADS);
    def get_trends_scores_thread_safe(keywords_group, tf):
        with thread_limiter:
            try: result = get_trends_scores(keywords_group, tf); return result
            except Exception as e: print(f"\n!!! CRITICAL THREAD ERROR group {keywords_group} ({tf}): {type(e).__name__} !!!"); return {k: 0 for k in keywords_group}
    results_list = [];
    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_THREADS) as executor:
        future_to_group = {executor.submit(get_trends_scores_thread_safe, group, timeframe): group for group in groups}; print(f"    Submitted {len(groups)} tasks. Waiting..."); completed_count = 0; failed_groups_count = 0;
        for future in tqdm(concurrent.futures.as_completed(future_to_group), total=len(groups), desc=f"Context {timeframe}"):
            group = future_to_group[future];
            try: result = future.result(timeout=MAX_WAIT_SECONDS * 3); results_list.append(result);
            if result and all(s == 0 for s in result.values()): failed_groups_count += 1
            except concurrent.futures.TimeoutError: print(f"\n!!! TIMEOUT waiting result for group: {group} !!!"); results_list.append({k: 0 for k in group}); failed_groups_count += 1
            except Exception as exc: print(f"\n!!! ERROR retrieving result for group {group}: {exc} !!!"); results_list.append({k: 0 for k in group}); failed_groups_count += 1
            finally: completed_count += 1;
    print(f"    Combining results for {timeframe}..."); [all_scores.update(result_dict) for result_dict in results_list]; final_scores_for_timeframe = {entity: all_scores.get(entity, 0) for entity in entity_list}; print(f"--- CONTEXT collection '{timeframe}' completed. Failed Groups: {failed_groups_count} ---"); time.sleep(random.uniform(2, 5)); return final_scores_for_timeframe


def create_trend_chart(entity_data, timeframes_for_chart):
    # ... (Codice funzione V8.0 qui) ...
    scores = []; labels = [];
    for tf in timeframes_for_chart:
        col_name = f'Score_Avg_{tf}';
        if col_name in entity_data and pd.notna(entity_data[col_name]) and entity_data[col_name] > 0: scores.append(entity_data[col_name]); label = tf.replace('now ', '').replace('-', ' '); labels.append(f"Avg {label}")
    if not scores: return "<small>No score data</small>"
    fig = go.Figure(data=[go.Bar(x=labels, y=scores, marker_color='rgb(26, 118, 255)', text=[f'{s:.1f}' for s in scores], textposition='outside')]);
    fig.update_layout(title=dict(text=f"{entity_data['Entita']}", font=dict(size=10), x=0.5, y=0.95), yaxis_title=None, xaxis_title=None, height=150, width=250, margin=dict(l=20, r=10, t=30, b=10), paper_bgcolor='rgba(248,249,250,1)', plot_bgcolor='rgba(248,249,250,1)', yaxis=dict(gridcolor='LightGrey', showticklabels=False, zeroline=False), xaxis=dict(tickfont=dict(size=9), showgrid=False, zeroline=False), showlegend=False);
    try: chart_html = pio.to_html(fig, full_html=False, include_plotlyjs=False, config={'displayModeBar': False}); return chart_html
    except Exception as e: print(f"Error generating Plotly chart for {entity_data.get('Entita', 'N/A')}: {e}"); return "<small>Chart error</small>"

def get_related_keywords(entity_name, proxy_manager, delay_seconds):
    # ... (Codice funzione V8.0 qui) ...
    suggestions = {'top': [], 'rising': []}; proxy_info, status_code, error_type_str, release_success = None, None, None, False; pytrends = None; proxy_str = None;
    try:
        get_proxy_attempts = 0
        while proxy_info is None and get_proxy_attempts < 3: get_proxy_attempts += 1; proxy_info = proxy_manager.get_proxy();
        if proxy_info is None: time.sleep(random.uniform(1, 2))
        if proxy_info is None: print(f"    [Related] No proxy for '{entity_name}'. Skipping."); return suggestions
        proxy_str, geo_code, session_data = proxy_info; profile = session_data['profile'];
        try: pytrends = proxy_manager.get_pytrends_session(proxy_str, profile); assert pytrends is not None
        except Exception as e_session: print(f"    [Related] Session error for '{entity_name}': {e_session}"); error_type_str = 'pytrends_session_error'; proxy_manager.release_proxy(proxy_str, success=False, error_type=error_type_str); proxy_info = None; proxy_str = None; return suggestions
        time.sleep(delay_seconds + random.uniform(0, 1.0)); pytrends.build_payload([entity_name], timeframe='now 7-d', geo='IT', gprop=''); related_dict = pytrends.related_queries(); status_code = 200; release_success = True;
        if related_dict and entity_name in related_dict and related_dict[entity_name]:
             related_data = related_dict[entity_name];
             if 'top' in related_data and isinstance(related_data['top'], pd.DataFrame): suggestions['top'] = related_data['top']['query'].head(5).tolist()
             if 'rising' in related_data and isinstance(related_data['rising'], pd.DataFrame): suggestions['rising'] = related_data['rising']['query'].head(5).tolist()
    except requests.exceptions.HTTPError as http_err: status_code = http_err.response.status_code if hasattr(http_err, 'response') else None; print(f"    [Related] HTTP Error {status_code or 'N/A'} for '{entity_name}'"); error_type_str = f'related_HTTP_{status_code}' if status_code else 'related_HTTP_err'; release_success = False
    except (requests.exceptions.Timeout, socket.timeout) as timeout_err: print(f"    [Related] Timeout Error for '{entity_name}': {timeout_err}"); error_type_str = 'Timeout'; release_success = False
    except (requests.exceptions.ProxyError, requests.exceptions.ConnectionError, ConnectionRefusedError, socket.gaierror, OSError) as proxy_conn_err: print(f"    [Related] Proxy/Conn Error for '{entity_name}': {type(proxy_conn_err).__name__}"); error_type_str = 'ProxyError'; release_success = False
    except json.JSONDecodeError as json_err: print(f"    [Related] JSON Decode Error for '{entity_name}': {json_err}"); error_type_str = 'parse_fail'; release_success = False
    except Exception as e: print(f"!!  [Related] UNEXPECTED Error for '{entity_name}': {type(e).__name__} - {str(e)[:100]}"); error_type_str = f'related_other_{type(e).__name__}'; release_success = False
    finally:
        if proxy_info and proxy_str: proxy_manager.release_proxy(proxy_str, success=release_success, status_code=status_code, error_type=error_type_str)
    return suggestions


# ==============================================================================
# ========================== SCRIPT PRINCIPALE =================================
# ==============================================================================
if __name__ == "__main__":
    main_start_time = time.time()
    print("\n" + "="*60)
    print("          🚀 DISCOVER PROPHET - Starting Analysis 🚀")
    print("="*60)

    # --- Validazioni Parametri ---
    if FETCH_VOLUME_CONTEXT:
        if not CONTEXT_TIMEFRAMES: warnings.warn("CONTEXT_TIMEFRAMES empty. Disabling context.", UserWarning); FETCH_VOLUME_CONTEXT = False
        if CONTEXT_N_RUNS <= 0: warnings.warn("CONTEXT_N_RUNS must be >= 1. Setting to 1.", UserWarning); CONTEXT_N_RUNS = 1
        if N_PROCESS_FOR_CONTEXT <= 0: warnings.warn("N_PROCESS_FOR_CONTEXT <= 0. Disabling context.", UserWarning); FETCH_VOLUME_CONTEXT = False

    print(f"Configuration: HTML Output='{HTML_OUTPUT_FILENAME}', Template='{TEMPLATE_FILENAME}', Top Display={TOP_N_FINAL_DISPLAY}")
    print(f"Context Fetching: {'Enabled' if FETCH_VOLUME_CONTEXT else 'Disabled'} (Entities:{N_PROCESS_FOR_CONTEXT}, Runs:{CONTEXT_N_RUNS})")
    print(f"Related Keywords: {'Enabled' if FETCH_RELATED_KEYWORDS else 'Disabled'} (for Top {MAX_RELATED_TO_FETCH})")
    print(f"Proxies: {len(proxies_list_with_geo)} configured, Max Concurrent: {MAX_CONCURRENT_PROXIES}, Threads: {MAX_THREADS}")
    print("-"*60)

    ordered_entities = None
    df_final = pd.DataFrame()

    try:
        # --- 0. Crea Directory Checkpoint ---
        os.makedirs(CHECKPOINT_DIR, exist_ok=True)
        print(f"Checkpoint directory: '{CHECKPOINT_DIR}'")

        # --- 1. Estrazione Lista Ordinata Entità ---
        print("\n--- Step 1: Extracting Ordered Entity List ---")
        ordered_entities = extract_ordered_entities()
        if not ordered_entities: raise Exception("Initial entity extraction failed.")
        print(f"Successfully extracted {len(ordered_entities)} initial entities.")
        try:
            entities_df = pd.DataFrame({'Rank': range(1, len(ordered_entities) + 1), 'Entita': ordered_entities})
            entities_df.to_csv(os.path.join(CHECKPOINT_DIR, "entities_ordered_extracted.csv"), index=False, encoding='utf-8-sig')
            print(f"Checkpoint saved: entities_ordered_extracted.csv")
        except Exception as e: print(f"Error saving entities checkpoint: {e}")

        # --- Prepara DataFrame finale ---
        df_final = pd.DataFrame({'Rank': range(1, len(ordered_entities) + 1), 'Entita': ordered_entities})
        for tf in CONTEXT_TIMEFRAMES: df_final[f'Score_Avg_{tf}'] = 0.0

        # --- 2. Raccolta Score di Contesto ---
        if FETCH_VOLUME_CONTEXT:
            print(f"\n--- Step 2: Fetching Context Scores for Top {N_PROCESS_FOR_CONTEXT} Entities ---")
            # (Codice invariato per raccolta contesto - Omesse stampe interne per brevità)
            entities_for_context = ordered_entities[:N_PROCESS_FOR_CONTEXT]; timeframe_context_results = defaultdict(lambda: defaultdict(list));
            for run in range(1, CONTEXT_N_RUNS + 1):
                print(f"\n===== CONTEXT COLLECTION - RUN {run}/{CONTEXT_N_RUNS} ====="); run_start_time = time.time();
                for tf in CONTEXT_TIMEFRAMES:
                    scores_this_run = get_all_context_scores(entities_for_context, tf);
                    for entity, score in scores_this_run.items(): timeframe_context_results[tf][entity].append(score)
                    try: # Checkpoint
                         run_df = pd.DataFrame({'Entita': list(scores_this_run.keys()), f'Score_{tf.replace(" ","_")}_Run{run}': list(scores_this_run.values())});
                         run_df.to_csv(os.path.join(CHECKPOINT_DIR, f"context_run{run}_{tf.replace(' ','_')}_scores.csv"), index=False, encoding='utf-8-sig');
                    except Exception as e: print(f"Error saving context checkpoint {run}/{tf}: {e}")
                run_duration = time.time() - run_start_time; print(f"===== CONTEXT RUN {run}/{CONTEXT_N_RUNS} COMPLETED (Duration: {run_duration:.2f}s) =====");
                if run < CONTEXT_N_RUNS: pause_duration = random.uniform(10, 20); print(f"    Pausing for {pause_duration:.1f}s..."); time.sleep(pause_duration)
            print("\n    Calculating Average Context Scores...");
            for tf_agg in CONTEXT_TIMEFRAMES:
                avg_scores_col = f'Score_Avg_{tf_agg}'; avg_scores_map = {entity: sum(score_list) / len(score_list) if score_list else 0 for entity, score_list in timeframe_context_results[tf_agg].items()};
                df_final[avg_scores_col] = df_final['Entita'].map(avg_scores_map).fillna(0); print(f"      Avg context score calculated for {tf_agg}.");
            print("--- Context Score Collection Finished ---")
        else:
            print("\n--- Step 2: Context Score Collection SKIPPED ---")
            for tf in CONTEXT_TIMEFRAMES:
                if f'Score_Avg_{tf}' not in df_final.columns: df_final[f'Score_Avg_{tf}'] = 0.0

        # --- 3. Calcolo Heuristic Discover Score ---
        print("\n--- Step 3: Calculating Heuristic Discover Score ---")
        # (Codice invariato per calcolo Discover Score)
        discover_score_col = 'Discover_Score'; score_cols_to_sum = [f'Score_Avg_{tf}' for tf in CONTEXT_TIMEFRAMES if f'Score_Avg_{tf}' in df_final.columns];
        if score_cols_to_sum:
            numerator = 1 + df_final[score_cols_to_sum].sum(axis=1); denominator = np.log1p(df_final['Rank']);
            df_final[discover_score_col] = numerator / denominator; df_final[discover_score_col] = df_final[discover_score_col].fillna(0);
            print(f"    '{discover_score_col}' calculated.")
        else: warnings.warn("No score columns found. Discover_Score set to 0.", UserWarning); df_final[discover_score_col] = 0.0

        # --- 4. Ordinamento Finale e Salvataggio CSV ---
        print("\n--- Step 4: Sorting and Saving Data ---")
        # (Codice invariato per ordinamento e salvataggio CSV)
        df_final = df_final.sort_values(by=discover_score_col, ascending=False).reset_index(drop=True);
        df_final.insert(0, 'Final_Rank', range(1, len(df_final) + 1));
        try:
            cols_for_csv = ['Final_Rank', discover_score_col, 'Rank'] + score_cols_to_sum + ['Entita'];
            df_to_save = df_final[cols_for_csv];
            df_to_save.to_csv(CSV_OUTPUT_FILENAME, index=False, encoding='utf-8-sig', float_format='%.3f');
            print(f"    Data successfully saved to: {CSV_OUTPUT_FILENAME}")
        except Exception as e: print(f"\n!!! ERROR saving final CSV '{CSV_OUTPUT_FILENAME}': {e} !!!")

        # --- 5. Preparazione Dati per HTML (Top N)---
        print(f"\n--- Step 5: Preparing HTML Output for Top {TOP_N_FINAL_DISPLAY} ---")
        # (Codice invariato per preparazione df_display, grafici, keyword, colonne HTML)
        df_display = df_final.head(TOP_N_FINAL_DISPLAY).copy();
        print("    Generating trend charts...");
        chart_timeframes = [tf for tf in CONTEXT_TIMEFRAMES if f'Score_Avg_{tf}' in df_display.columns];
        df_display['Trend_Chart'] = df_display.apply(lambda row: create_trend_chart(row, chart_timeframes), axis=1);
        print(f"    {len(df_display)} charts generated.")
        if FETCH_RELATED_KEYWORDS and N_PROCESS_FOR_CONTEXT > 0:
            print(f"    Fetching related keywords for top {min(MAX_RELATED_TO_FETCH, len(df_display))} entities...");
            all_suggestions = {}; entities_to_fetch_related = df_display['Entita'].head(MAX_RELATED_TO_FETCH).tolist();
            with tqdm(total=len(entities_to_fetch_related), desc="Fetching Related Keywords") as pbar:
                for entity in entities_to_fetch_related:
                    suggestions = get_related_keywords(entity, proxy_manager, RELATED_KEYWORDS_DELAY); all_suggestions[entity] = suggestions; pbar.update(1);
            def format_suggestions(row):
                entity = row['Entita'];
                if entity in all_suggestions:
                    sugg = all_suggestions[entity]; html_sugg = "";
                    if sugg.get('top'): html_sugg += "<div><small><strong>Top:</strong> " + ", ".join(sugg['top']) + "</small></div>"
                    if sugg.get('rising'): html_sugg += "<div><small><strong>Rising:</strong> " + ", ".join(sugg['rising']) + "</small></div>"
                    return f'<div class="related-keywords">{html_sugg}</div>' if html_sugg else "<small>N/A</small>" # Add wrapper class
                if row.name < MAX_RELATED_TO_FETCH: return "<small>Error/None</small>"
                else: return "<small>Not fetched</small>"
            df_display['Keyword_Suggestions'] = df_display.apply(format_suggestions, axis=1); print("    Related keywords fetched.")
        else: df_display['Keyword_Suggestions'] = "<small>Disabled</small>"
        rename_map = {f'Score_Avg_{tf}': f'Avg {tf.replace("now ","").replace("-"," ")}' for tf in CONTEXT_TIMEFRAMES};
        df_html_ready = df_display.rename(columns=rename_map);
        cols_for_html = ['Final_Rank'];
        df_html_ready['Discover_Score_Fmt'] = df_html_ready[discover_score_col].map('{:.2f}'.format);
        cols_for_html.append('Discover_Score_Fmt'); cols_for_html.append('Entita');
        for tf in CONTEXT_TIMEFRAMES:
             renamed_col = f'Avg {tf.replace("now ","").replace("-"," ")}';
             if renamed_col in df_html_ready.columns: df_html_ready[renamed_col] = df_html_ready[renamed_col].map('{:.1f}'.format); cols_for_html.append(renamed_col)
        cols_for_html.extend(['Trend_Chart', 'Keyword_Suggestions', 'Rank']);
        final_rename_map = {'Final_Rank': 'Rank', 'Discover_Score_Fmt': 'Discover Score', 'Rank': 'Original Rank', 'Trend_Chart': 'Trend Score', 'Keyword_Suggestions': 'Related Keywords'};
        df_html_ready = df_html_ready[cols_for_html].rename(columns=final_rename_map);


        # --- 6. Generazione File HTML (con Jinja2 Template) ---
        print(f"\n--- Step 6: Generating HTML File using '{TEMPLATE_FILENAME}' ---")

        # 6a. Genera tabella HTML usando Pandas
        html_table = df_html_ready.to_html(
            index=False, escape=False,
            classes="table table-striped table-hover table-bordered table-sm",
            justify="center", border=0
        )

        # 6b. Prepara i dati (contesto) da passare al template
        current_timestamp_str = pd.Timestamp.now(tz='Europe/Rome').strftime('%Y-%m-%d %H:%M:%S %Z') # Usa timezone
        html_context = {
            'page_title': 'Discover Prophet - Google Trends Analysis',
            'css_filename': CSS_FILENAME,
            'current_timestamp': current_timestamp_str,
            'main_heading': 'Discover Prophet',
            'sub_heading': 'Analisi Google Hot Trends (TV - Italia)',
            'top_n_display': TOP_N_FINAL_DISPLAY,
            'html_table': html_table,
            'current_year': pd.Timestamp.now().year,
            'script_version': 'V8.1 (Templated)'
        }

        # 6c. Carica e Rendi (renderizza) il Template HTML
        try:
            env = Environment(loader=FileSystemLoader('.')) # Cerca template nella dir corrente
            template = env.get_template(TEMPLATE_FILENAME)
            rendered_html = template.render(html_context)

            # Salva l'HTML renderizzato nel file di output
            with open(HTML_OUTPUT_FILENAME, 'w', encoding='utf-8') as f:
                f.write(rendered_html)
            print(f"    HTML file generated successfully: {HTML_OUTPUT_FILENAME}")

        except FileNotFoundError:
             print(f"\n!!! ERRORE CRITICO: File template '{TEMPLATE_FILENAME}' non trovato! !!!")
             print(f"!!! Assicurati che '{TEMPLATE_FILENAME}' sia nella stessa cartella dello script. !!!")
             raise
        except Exception as e:
            print(f"\n!!! ERRORE durante la generazione dell'HTML con Jinja2: {e} !!!")
            traceback.print_exc()


    # --- Gestione Errori Generali Script ---
    except Exception as main_exc:
        print(f"\n" + "!"*60); print(f"!!! CRITICAL SCRIPT ERROR: {type(main_exc).__name__} - {main_exc}"); print("!"*60); traceback.print_exc();

    # --- Blocco Finally: Statistiche e Tempo Esecuzione ---
    finally:
        print("\n" + "="*60); print("--- Execution Summary & Proxy Stats ---");
        try:
            stats = proxy_manager.get_proxy_stats_summary();
            print(f"Total Requests: Success={stats.get('total_success', 0)}"); print(f"Total Failures: 429={stats.get('total_fail_429', 0)}, Proxy/Timeout/5xx={stats.get('total_fail_proxy_timeout_5xx', 0)}, Other/Parse/Session={stats.get('total_fail_other_parse_session', 0)}");
            top_failing = stats.get('top_failing_proxies', {});
            if top_failing: print("\nTop Failing Proxies:"); [print(f"  - {pid}: Succ:{d['success']}, ConsFails:{d['consecutive_fails']} | Fails(429:{d['fail_429']}, P/T/5xx:{d['fail_proxy/timeout/5xx']}, O/P/S:{d['fail_other/parse/session']})") for pid, d in top_failing.items()]
            else: print("\nNo significant proxy failures recorded.")
        except Exception as stats_exc: print(f"Error retrieving proxy stats: {stats_exc}")
        main_end_time = time.time(); total_duration = main_end_time - main_start_time; print(f"\nTotal Execution Time: {total_duration:.2f} seconds ({total_duration/60:.2f} minutes)"); print("="*60); print("             🚀 Discover Prophet - Analysis Complete 🚀"); print("="*60);