# -*- coding: utf-8 -*-

# ======================================================================
# =========== INTEGRAZIONE CLAUDE PER ANALISI SEMANTICA ===============
# ======================================================================

import base64
import json
import time
import os
import requests
import re
from concurrent.futures import ThreadPoolExecutor

# Configurazioni per l'API Claude
CLAUDE_MODEL = "claude-3-sonnet-20240229"  # Imposta il modello Claude
MAX_BATCH_SIZE = 5  # Numero di query da analizzare in batch
MAX_WORKERS = 5  # Numero massimo di worker thread
MAX_RETRIES = 3  # Numero massimo di tentativi per chiamata API
RETRY_DELAY = 2  # Secondi di attesa tra i tentativi
RATE_LIMIT_PAUSE = 0.5  # Secondi di pausa tra le chiamate API per rate limiting

# Offuscamento API Key - usa base64 per facilità di lettura/modifica
# La chiave offuscata è facilmente decodificabile, ma offre una protezione base dal furto accidentale
CLAUDE_API_KEY_ENCODED = "c2stYW50LWFwaTAzLXhVM1p0c0Y1cTVMYXJzbkZjN180b0NLd2tVQWZ1SDE0alJLaXM5cjYwcm5OZ3picUtzdEhQZ2R2QU55R29jS1FfdzJzTUFCZDBUQnpGTkpzYkZBVjJ3LWlhMkhadwAA"

# Funzione per decodificare l'API key
def get_api_key():
    try:
        # Decodifica la chiave dall'offuscamento base64
        return base64.b64decode(CLAUDE_API_KEY_ENCODED).decode('utf-8')
    except Exception as e:
        print(f"Errore nella decodifica dell'API key: {e}")
        return None

# Schema per la validazione del JSON di output
QUERY_ANALYSIS_SCHEMA = {
    "type": "object",
    "required": ["original_query", "primary_entity", "is_meta_query", "secondary_entities", "confidence"],
    "properties": {
        "original_query": {"type": "string"},
        "primary_entity": {"type": "string"},
        "is_meta_query": {"type": "boolean"},
        "secondary_entities": {
            "type": "array",
            "items": {
                "type": "object",
                "required": ["entity", "type", "weight"],
                "properties": {
                    "entity": {"type": "string"},
                    "type": {"type": "string"},
                    "weight": {"type": "number", "minimum": 0, "maximum": 1}
                }
            }
        },
        "confidence": {"type": "number", "minimum": 0.1, "maximum": 1.0}
    }
}

# Funzione per estrarre JSON dalla risposta
def extract_json_from_text(text):
    try:
        # Cerca pattern JSON nella risposta
        json_match = re.search(r'({[\s\S]*})', text)
        if json_match:
            json_str = json_match.group(1)
            # Verifica che sia un JSON valido
            data = json.loads(json_str)
            return data
        else:
            raise ValueError("Nessun JSON trovato nella risposta")
    except (ValueError, json.JSONDecodeError) as e:
        print(f"Errore nell'estrazione JSON: {e}")
        return None

# Funzione per validare che il JSON sia conforme allo schema atteso
def validate_json_structure(json_data):
    try:
        # Verifica manuale della struttura (senza dipendenza jsonschema)
        required_keys = ["original_query", "primary_entity", "is_meta_query", "secondary_entities", "confidence"]
        for key in required_keys:
            if key not in json_data:
                raise ValueError(f"Campo richiesto mancante: {key}")
        
        if not isinstance(json_data["is_meta_query"], bool):
            raise ValueError("is_meta_query deve essere un booleano")
        
        if not isinstance(json_data["secondary_entities"], list):
            raise ValueError("secondary_entities deve essere una lista")
        
        if not isinstance(json_data["confidence"], (int, float)) or not 0 <= json_data["confidence"] <= 1:
            raise ValueError("confidence deve essere un numero tra 0 e 1")
        
        # Verifica struttura per ogni entità secondaria
        for entity in json_data["secondary_entities"]:
            if not all(k in entity for k in ["entity", "type", "weight"]):
                raise ValueError("Struttura entità secondaria non valida")
            
            if not isinstance(entity["weight"], (int, float)) or not 0 <= entity["weight"] <= 1:
                raise ValueError("Il peso dell'entità deve essere un numero tra 0 e 1")
        
        return True
    except Exception as e:
        print(f"Errore nella validazione JSON: {e}")
        return False

# Funzione principale per l'analisi di una singola query con Claude
def analyze_query_with_claude(query, api_key, retries=MAX_RETRIES):
    if not api_key:
        print("API key non valida o mancante")
        return create_fallback_analysis(query)
    
    # Sistema di prompt per ottenere l'analisi corretta
    system_prompt = """Sei un esperto di analisi semantica specializzato nell'identificare le entità principali nelle query di ricerca. Rispondi SOLO con JSON valido, senza testo aggiuntivo prima o dopo."""
    
    user_prompt = f"""
    Analizza la seguente query di ricerca: "{query}"
    
    Identifica:
    1. L'entità principale (il vero oggetto della ricerca)
    2. Eventuali entità secondarie
    3. Se è una meta-query (ricerca generica di informazioni)
    
    Restituisci SOLO un oggetto JSON con questa struttura esatta:
    {{
        "original_query": "{query}",
        "primary_entity": "l'entità principale identificata",
        "is_meta_query": true/false,
        "secondary_entities": [
            {{"entity": "entità secondaria 1", "type": "tipo entità", "weight": 0.X}},
            ...
        ],
        "confidence": 0.X (da 0.1 a 1.0)
    }}
    
    Note:
    - Le meta-query sono ricerche generiche come "come fare qualcosa" o "programmi stasera in tv"
    - Il peso delle entità secondarie deve essere tra 0 e 1
    - La somma dei pesi delle entità secondarie non deve superare 1.0
    - I tipi di entità possono essere: person, location, organization, event, product, concept, time, date, etc.
    """
    
    headers = {
        "x-api-key": api_key,
        "content-type": "application/json",
        "anthropic-version": "2023-06-01"
    }
    
    data = {
        "model": CLAUDE_MODEL,
        "max_tokens": 1000,
        "temperature": 0.0,
        "system": system_prompt,
        "messages": [
            {"role": "user", "content": user_prompt}
        ]
    }
    
    for attempt in range(retries):
        try:
            response = requests.post(
                "https://api.anthropic.com/v1/messages",
                headers=headers,
                json=data
            )
            
            if response.status_code == 200:
                response_data = response.json()
                content = response_data.get('content', [])
                
                if content and len(content) > 0 and 'text' in content[0]:
                    text_response = content[0]['text']
                    json_data = extract_json_from_text(text_response)
                    
                    if json_data and validate_json_structure(json_data):
                        return json_data
                    else:
                        print(f"Risposta API non valida per query: {query}")
                
            elif response.status_code == 429:
                wait_time = RETRY_DELAY * (2 ** attempt)
                print(f"Rate limit superato. Attendo {wait_time}s prima di riprovare...")
                time.sleep(wait_time)
            else:
                print(f"Errore API ({response.status_code}): {response.text}")
            
            if attempt < retries - 1:
                time.sleep(RETRY_DELAY)
                
        except Exception as e:
            print(f"Eccezione durante l'analisi di '{query}': {type(e).__name__} - {e}")
            if attempt < retries - 1:
                time.sleep(RETRY_DELAY)
    
    # Fallback in caso di errori persistenti
    return create_fallback_analysis(query)

# Crea un'analisi di fallback per una query
def create_fallback_analysis(query):
    return {
        "original_query": query,
        "primary_entity": query,  # fallback alla query originale
        "is_meta_query": False,
        "secondary_entities": [],
        "confidence": 0.1,
        "is_fallback": True  # Flag che indica fallback
    }

# Analizza un batch di query in parallelo
def analyze_queries_batch(queries, api_key, max_workers=MAX_WORKERS):
    results = {}
    
    # Verifica che ci sia almeno una query
    if not queries:
        return results
    
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        # Crea i futures per ogni query
        future_to_query = {
            executor.submit(analyze_query_with_claude, query, api_key): query 
            for query in queries
        }
        
        # Processa i risultati man mano che completano
        for future in future_to_query:
            query = future_to_query[future]
            try:
                result = future.result()
                results[query] = result
                # Breve pausa per evitare rate limiting
                time.sleep(RATE_LIMIT_PAUSE)
            except Exception as e:
                print(f"Errore nell'elaborazione della query '{query}': {e}")
                results[query] = create_fallback_analysis(query)
    
    return results

# Funzione per aggiornare il Discover Score usando l'analisi semantica
def calculate_enhanced_discover_score(base_score, analysis):
    """
    Modifica il Discover Score in base all'analisi semantica.
    
    Args:
        base_score: Il Discover Score originale
        analysis: L'analisi semantica dalla chiamata Claude
        
    Returns:
        float: Il Discover Score aggiornato
    """
    # Fattori di modifica
    META_QUERY_FACTOR = 0.8  # Leggera penalizzazione per query generiche
    LOW_CONFIDENCE_FACTOR = 0.9  # Penalizzazione per analisi a bassa confidenza
    
    # Score iniziale
    enhanced_score = base_score
    
    # Applica modifiche in base all'analisi
    if analysis.get("is_meta_query", False):
        # Meta query (ricerche generiche) hanno un leggero abbassamento
        enhanced_score *= META_QUERY_FACTOR
    
    # Considera il livello di confidenza dell'analisi
    confidence = analysis.get("confidence", 1.0)
    if confidence < 0.7:  # Solo per analisi a bassa confidenza
        enhanced_score *= LOW_CONFIDENCE_FACTOR + (confidence * 0.1)
    
    return enhanced_score

# Funzione principale di integrazione da richiamare nello script principale
def integrate_claude_analysis(ordered_entities, df_final, checkpoint_dir=None, max_entities=50):
    """
    Integra l'analisi semantica di Claude nel processo di Discover Prophet.
    
    Args:
        ordered_entities: Lista ordinata di entità/query estratte
        df_final: DataFrame con i dati finali
        checkpoint_dir: Directory per salvare i checkpoint
        max_entities: Numero massimo di entità da analizzare (default: 50)
        
    Returns:
        tuple: (DataFrame aggiornato, dizionario con l'analisi delle entità)
    """
    # Controllo API key
    api_key = get_api_key()
    if not api_key:
        print("ERRORE: Impossibile decodificare l'API key. L'integrazione Claude non sarà disponibile.")
        return df_final, {}

    print(f"\n--- Avvio analisi semantica Claude per top {max_entities} entità ---")
    entity_analysis = {}
    
    # Limita alle prime N entità
    entities_to_analyze = ordered_entities[:min(len(ordered_entities), max_entities)]
    
    # Elabora in batch per efficienza
    total_entities = len(entities_to_analyze)
    batch_size = min(MAX_BATCH_SIZE, total_entities)
    
    for i in range(0, total_entities, batch_size):
        batch_end = min(i + batch_size, total_entities)
        current_batch = entities_to_analyze[i:batch_end]
        
        print(f"  Analizzo batch {i//batch_size + 1}/{(total_entities+batch_size-1)//batch_size}: entità {i+1}-{batch_end} di {total_entities}")
        batch_results = analyze_queries_batch(current_batch, api_key)
        
        # Aggiungi risultati al dizionario principale
        entity_analysis.update(batch_results)
        
        # Breve pausa tra batch
        if batch_end < total_entities:
            time.sleep(1)
    
    # Aggiorna il DataFrame con le analisi semantiche
    if entity_analysis:
        print("\n  Aggiornamento Discover Score con l'analisi semantica...")
        
        # Aggiungi colonne per l'analisi semantica
        df_final['Primary_Entity'] = df_final['Entita'].map(
            lambda x: entity_analysis.get(x, {}).get('primary_entity', x)
        )
        
        df_final['Is_Meta_Query'] = df_final['Entita'].map(
            lambda x: entity_analysis.get(x, {}).get('is_meta_query', False)
        )
        
        df_final['Analysis_Confidence'] = df_final['Entita'].map(
            lambda x: entity_analysis.get(x, {}).get('confidence', 0.1)
        )
        
        # Calcola il Discover Score aggiornato
        if 'Discover_Score' in df_final.columns:
            df_final['Enhanced_Discover_Score'] = df_final.apply(
                lambda row: calculate_enhanced_discover_score(
                    row['Discover_Score'],
                    entity_analysis.get(row['Entita'], {})
                ),
                axis=1
            )
            
            # Usa Enhanced_Discover_Score come nuovo punteggio principale
            df_final['Original_Discover_Score'] = df_final['Discover_Score']
            df_final['Discover_Score'] = df_final['Enhanced_Discover_Score']
            
            print("  Discover Score aggiornato con analisi semantica Claude.")
    
    # Salva l'analisi come checkpoint
    if checkpoint_dir:
        try:
            os.makedirs(checkpoint_dir, exist_ok=True)
            output_file = os.path.join(checkpoint_dir, "claude_entity_analysis.json")
            
            with open(output_file, "w", encoding="utf-8") as f:
                json.dump(entity_analysis, f, indent=2, ensure_ascii=False)
                
            print(f"  Analisi entità salvata in: {output_file}")
        except Exception as e:
            print(f"  Errore nel salvataggio dell'analisi: {e}")
    
    return df_final, entity_analysis
