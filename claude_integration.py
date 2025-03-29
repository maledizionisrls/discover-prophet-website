# -*- coding: utf-8 -*-
import anthropic
import json
import os
import warnings
# Import necessari per type hinting compatibile con Python < 3.10
from typing import Union, List, Dict, Optional

# !!! ATTENZIONE: API Key inserita direttamente nel codice come richiesto. !!!
# !!! Per maggiore sicurezza, considera l'uso di variabili d'ambiente.  !!!
API_KEY = "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"
MODEL_NAME = "claude-3-5-sonnet-20240620"
MAX_TOKENS_RESPONSE = 2048

# Placeholder per indicare incertezza o fallimento nell'identificazione
UNCERTAIN_ENTITY_PLACEHOLDER = "[UNCERTAIN]"

# Inizializzazione client Anthropic
# VERIFICA: Assicurati che non ci siano argomenti extra come 'proxies=' qui.
# Se servono proxy, vanno configurati tramite variabili d'ambiente (HTTP_PROXY/HTTPS_PROXY)
# o passando un client httpx configurato all'argomento 'http_client'.
try:
    client = anthropic.Anthropic(api_key=API_KEY)
    # Esempio (se servissero proxy e avessi installato httpx):
    # import httpx
    # proxies = {"http://": "http://user:pass@host:port", "https://": "http://user:pass@host:port"}
    # http_client = httpx.Client(proxies=proxies)
    # client = anthropic.Anthropic(api_key=API_KEY, http_client=http_client)
except Exception as e:
    # Gestisce sia l'errore specifico 'proxies' (se presente per errore) sia altri errori
    warnings.warn(f"Errore inizializzazione client Anthropic: {e}. Le chiamate API falliranno.", RuntimeWarning)
    client = None

def _build_prompt(queries: List[str]) -> tuple[str, str]: # Usato List invece di list
    """Costruisce il system prompt e lo user prompt per Claude."""

    system_prompt = """Sei un analista esperto nell'interpretare query di ricerca provenienti da Google Trends (Hot Searches). Il tuo obiettivo è identificare l'entità principale o il concetto centrale rappresentato da ogni query, considerando che lo scopo finale è trovare argomenti adatti a Google Discover (che predilige entità riconoscibili e con una certa persistenza/rilevanza).

Per ogni query fornita:
1. Identifica la singola entità più rappresentativa (es. Persona, Organizzazione, Luogo, Evento, Opera Creativa, Concetto specifico).
2. Dai priorità a entità chiare e specifiche rispetto a termini generici.
3. Se la query è concettuale (es. "cambio ora legale", "stasera in tv programmi prima serata"), identifica il concetto sottostante (es. "Ora legale", "Palinsesto TV").
4. Se la query è ambigua o puramente funzionale con un soggetto chiaro (es. "meteo milano"), identifica il soggetto principale ("Milano").
5. Se contiene più entità (es. "squadraA vs squadraB"), scegli l'entità più centrale o l'evento stesso, oppure l'entità più probabile ad avere interesse generale (evita di scegliere solo una delle due squadre se l'interesse è per la partita). Scegli UNA sola entità rappresentativa.
6. Se sei molto incerto sull'entità principale, o se la query è troppo generica/incomprensibile o non rappresenta un'entità/concetto chiaro, restituisci ESATTAMENTE la stringa "[UNCERTAIN]". Non inventare entità se non sei ragionevolmente sicuro.

Formato Output Richiesto: Rispondi ESCLUSIVAMENTE con un oggetto JSON valido. L'oggetto JSON deve essere un dizionario dove le chiavi sono le query di ricerca originali fornite e i valori sono le stringhe delle entità principali identificate o la stringa "[UNCERTAIN]".

Esempio:
Input query: ["scossa terremoto myanmar", "probabili formazioni serie a", "ghibli ambiguo", "napoli milan"]
Output JSON Atteso:
{
  "scossa terremoto myanmar": "Myanmar",
  "probabili formazioni serie a": "Serie A",
  "ghibli ambiguo": "[UNCERTAIN]",
  "napoli milan": "SSC Napoli vs AC Milan"
}
"""

    user_prompt = f"""Analizza le seguenti query di ricerca e restituisci l'oggetto JSON come specificato nel system prompt:

{json.dumps(queries, indent=2, ensure_ascii=False)}"""

    return system_prompt, user_prompt


# CORREZIONE TYPE HINT per compatibilità Python < 3.10
def get_main_entities(queries: List[str]) -> Dict[str, Optional[str]]:
    """
    Usa Claude 3.5 Sonnet per identificare l'entità principale per una lista di query.

    Args:
        queries: Lista di stringhe delle query di ricerca.

    Returns:
        Un dizionario che mappa ogni query originale alla sua entità principale identificata (stringa)
        o a None se l'AI ha restituito "[UNCERTAIN]" o si è verificato un errore.
    """
    if not client:
        warnings.warn("Client Anthropic non inizializzato. Impossibile chiamare l'API.", RuntimeWarning)
        return {query: None for query in queries}

    if not queries:
        return {}

    system_prompt, user_prompt = _build_prompt(queries)
    result_map: Dict[str, Optional[str]] = {query: None for query in queries} # Inizializza con fallback None

    try:
        print(f"    Invio {len(queries)} query a Claude ({MODEL_NAME})...")
        message = client.messages.create(
            model=MODEL_NAME,
            max_tokens=MAX_TOKENS_RESPONSE,
            system=system_prompt,
            messages=[
                {"role": "user", "content": user_prompt}
            ]
        )
        print("    Risposta ricevuta da Claude.")

        json_response_str = None
        if message.content and isinstance(message.content, list) and len(message.content) > 0:
             raw_text = message.content[0].text
             json_start = raw_text.find('{')
             json_end = raw_text.rfind('}') + 1
             if json_start != -1 and json_end != -1:
                 json_response_str = raw_text[json_start:json_end]
             else:
                 warnings.warn("Blocco JSON non trovato nella risposta di Claude.", RuntimeWarning)
        else:
             warnings.warn("Risposta di Claude vuota o in formato non atteso.", RuntimeWarning)


        if json_response_str:
            try:
                ai_results = json.loads(json_response_str)

                if isinstance(ai_results, dict):
                    for query in queries:
                        entity = ai_results.get(query)
                        if entity == UNCERTAIN_ENTITY_PLACEHOLDER:
                            result_map[query] = None
                            # print(f"      AI incerta per: '{query}'") # Rimosso per ridurre verbosità
                        elif isinstance(entity, str) and entity.strip():
                             result_map[query] = entity.strip()
                        else:
                            result_map[query] = None
                            warnings.warn(f"Risultato mancante o non valido da AI per: '{query}'", RuntimeWarning)
                else:
                    warnings.warn(f"L'output JSON di Claude non era un dizionario: {type(ai_results)}", RuntimeWarning)

            except json.JSONDecodeError as e:
                warnings.warn(f"Errore parsing JSON dalla risposta di Claude: {e}\nRisposta grezza: {json_response_str[:500]}...", RuntimeWarning)
            except Exception as e:
                 warnings.warn(f"Errore imprevisto durante l'elaborazione della risposta AI: {e}", RuntimeWarning)

    except anthropic.APIConnectionError as e:
        warnings.warn(f"Errore connessione API Anthropic: {e}", RuntimeWarning)
    except anthropic.RateLimitError as e:
        warnings.warn(f"Errore Rate Limit API Anthropic: {e}", RuntimeWarning)
    except anthropic.APIStatusError as e:
        warnings.warn(f"Errore stato API Anthropic (Status {e.status_code}): {e.message}", RuntimeWarning)
    except Exception as e:
        warnings.warn(f"Errore generico chiamata API Anthropic: {type(e).__name__} - {e}", RuntimeWarning)

    final_map = {query: result_map.get(query) for query in queries}
    num_identified = sum(1 for entity in final_map.values() if entity is not None)
    print(f"    Identificate {num_identified}/{len(queries)} entità principali dall'AI.")
    return final_map

# Esempio di utilizzo
if __name__ == '__main__':
    sample_queries = [
        "meteo milano",
        "scossa terremoto myanmar",
        "probabili formazioni serie a",
        "stasera in tv programmi prima serata",
        "napoli milan",
        "query incomprensibile xyz123",
        "pilar fogliati"
    ]
    print("Esempio chiamata API Claude...")
    # Verifica che il client sia inizializzato prima di chiamare
    if client:
        entities = get_main_entities(sample_queries)
        print("\nRisultato mappatura:")
        print(json.dumps(entities, indent=2, ensure_ascii=False))
    else:
        print("Client Anthropic non utilizzabile. Impossibile eseguire l'esempio.")
