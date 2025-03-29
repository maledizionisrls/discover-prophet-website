import json
import time
import os
import logging
import anthropic
from typing import List, Dict, Tuple, Any, Optional

# Configurazione logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger("claude_integration")

class ClaudeEntityExtractor:
    def __init__(self, api_key: str, model: str = "claude-3-7-sonnet-20240229"):
        """
        Inizializza l'estrattore di entità basato su Claude.
        
        Args:
            api_key: Anthropic API key
            model: Modello Claude da utilizzare
        """
        self.api_key = api_key
        self.model = model
        # Inizializzazione semplice senza parametri aggiuntivi
        self.client = anthropic.Anthropic(api_key=api_key)
        logger.info(f"Inizializzato estrattore entità con modello {model}")
    
    def extract_entity(self, query: str) -> Tuple[str, float]:
        """
        Estrae l'entità principale da una query.
        
        Args:
            query: La query da cui estrarre l'entità
            
        Returns:
            Tuple[str, float]: L'entità estratta e il punteggio di confidenza
        """
        prompt = f"""
        Sei un assistente specializzato nell'identificazione delle entità principali nelle query di ricerca.
        Devi estrarre l'ENTITÀ PRINCIPALE da questa query di ricerca. L'entità principale è il soggetto o il concetto centrale della ricerca.
        
        Query di ricerca: "{query}"
        
        Devi fornire:
        1. L'entità principale (sostantivo, nome proprio, concetto, ecc.)
        2. Un punteggio di confidenza da 0.0 a 1.0 che indica quanto sei sicuro che questa sia l'entità corretta.
        
        Esempi:
        - "stasera in tv programmi prima serata" → Entità: "programmi tv", Confidenza: 0.9
        - "terremoto myanmar oggi" → Entità: "terremoto myanmar", Confidenza: 0.95
        - "cambio ora 2025" → Entità: "cambio ora", Confidenza: 0.9
        - "napoli milan risultato" → Entità: "napoli milan", Confidenza: 0.95
        - "probabili formazioni serie a" → Entità: "probabili formazioni", Confidenza: 0.85
        - "il paradiso delle signore in tv oggi" → Entità: "Il Paradiso delle signore", Confidenza: 0.95
        
        Fornisci solo l'entità principale e il punteggio di confidenza in formato JSON, senza altri commenti o spiegazioni.
        Esempio di output: {{"entity": "terremoto myanmar", "confidence": 0.95}}
        """
        
        try:
            response = self.client.messages.create(
                model=self.model,
                max_tokens=150,
                temperature=0.0, # Completamente deterministico
                system="Sei un assistente specializzato nell'identificazione delle entità principali nelle query di ricerca.",
                messages=[
                    {"role": "user", "content": prompt}
                ]
            )
            
            # Estrai il contenuto della risposta
            response_content = response.content[0].text
            
            # Trova l'oggetto JSON nella risposta
            import re
            json_match = re.search(r'\{.*\}', response_content, re.DOTALL)
            
            if json_match:
                json_text = json_match.group(0)
                result = json.loads(json_text)
                entity = result.get("entity", "")
                confidence = result.get("confidence", 0.0)
                logger.info(f"Estratta entità '{entity}' (conf: {confidence}) da query '{query}'")
                return entity, confidence
            else:
                # Fallback: usa la query originale
                logger.warning(f"Impossibile estrarre JSON dalla risposta. Query: {query}, Risposta: {response_content}")
                return query, 0.0
                
        except Exception as e:
            logger.error(f"Errore durante l'estrazione dell'entità da '{query}': {e}")
            return query, 0.0  # Fallback: usa la query originale
    
    def extract_entities_batch(self, queries: List[str], 
                               batch_size: int = 10, 
                               delay: float = 1.0,
                               min_confidence: float = 0.6) -> Dict[str, Dict[str, Any]]:
        """
        Estrae entità da un batch di query con gestione degli errori e fallback.
        
        Args:
            queries: Lista di query da cui estrarre le entità
            batch_size: Numero di query da processare prima di una pausa
            delay: Ritardo in secondi tra batch
            min_confidence: Confidenza minima per accettare un'entità
            
        Returns:
            Dict[str, Dict]: Mapping delle query originali alle informazioni estratte
        """
        results = {}
        batch_count = 0
        
        for query in queries:
            try:
                # Evita query vuote o None
                if not query or not isinstance(query, str):
                    results[query] = {
                        "entity": query,
                        "confidence": 0.0,
                        "status": "invalid_query",
                        "fallback_used": True
                    }
                    continue
                
                # Estrai l'entità
                entity, confidence = self.extract_entity(query)
                
                # Implementa logica di fallback basata sulla confidenza
                fallback_used = False
                if confidence < min_confidence:
                    # Se confidenza bassa, usa l'intera query come entità
                    entity = query
                    fallback_used = True
                    logger.warning(f"Confidenza bassa ({confidence}) per query '{query}', usando fallback")
                
                results[query] = {
                    "entity": entity,
                    "confidence": confidence,
                    "status": "success" if not fallback_used else "low_confidence",
                    "fallback_used": fallback_used
                }
                
                # Incrementa il contatore di batch e pausa se necessario
                batch_count += 1
                if batch_count % batch_size == 0:
                    logger.info(f"Elaborato batch di {batch_size} query, pausa di {delay} secondi")
                    time.sleep(delay)
                    
            except Exception as e:
                logger.error(f"Errore non gestito durante l'elaborazione della query '{query}': {e}")
                results[query] = {
                    "entity": query,  # Fallback all'intera query
                    "confidence": 0.0,
                    "status": "error",
                    "error": str(e),
                    "fallback_used": True
                }
        
        # Statistiche finali
        success_count = sum(1 for r in results.values() if r["status"] == "success")
        fallback_count = sum(1 for r in results.values() if r["fallback_used"])
        logger.info(f"Estrazione entità completata: {len(results)} totali, "
                   f"{success_count} successi, {fallback_count} fallback utilizzati")
        
        return results

def extract_entities_from_trends(trend_queries: List[str], 
                                api_key: str, 
                                model: str = "claude-3-7-sonnet-20240229",
                                min_confidence: float = 0.6,
                                batch_size: int = 10,
                                delay: float = 1.0) -> Dict[str, Dict[str, Any]]:
    """
    Funzione wrapper per estrarre entità da query di trend.
    
    Args:
        trend_queries: Lista di query da Google Trends TV
        api_key: Anthropic API key
        model: Modello Claude da utilizzare
        min_confidence: Confidenza minima per accettare un'entità
        batch_size: Dimensione del batch per le richieste
        delay: Ritardo tra batch in secondi
        
    Returns:
        Dict[str, Dict]: Mapping delle query originali alle informazioni estratte
    """
    try:
        # Verifica che l'API key sia valida
        if not api_key:
            logger.error("API key non fornita o vuota!")
            # Fallback: ritorna le query originali come entità
            return {
                query: {
                    "entity": query,
                    "confidence": 0.0,
                    "status": "missing_api_key",
                    "fallback_used": True
                } for query in trend_queries
            }
            
        extractor = ClaudeEntityExtractor(api_key=api_key, model=model)
        return extractor.extract_entities_batch(
            queries=trend_queries,
            min_confidence=min_confidence,
            batch_size=batch_size,
            delay=delay
        )
    except Exception as e:
        logger.error(f"Errore durante l'estrazione delle entità: {e}")
        # Fallback di emergenza: ritorna le query originali come entità
        return {
            query: {
                "entity": query,
                "confidence": 0.0,
                "status": "system_error",
                "error": str(e),
                "fallback_used": True
            } for query in trend_queries
        }

# Test standalone
if __name__ == "__main__":
    # API key da parametro o ambiente
    api_key = os.environ.get("ANTHROPIC_API_KEY", "")
    
    if not api_key:
        api_key = input("Inserisci la tua API key di Anthropic: ")
        if not api_key:
            print("Errore: API key non fornita")
            exit(1)
    
    # Alcune query di test
    test_queries = [
        "stasera in tv programmi prima serata",
        "terremoto myanmar oggi",
        "cambio ora 2025",
        "napoli milan risultato",
        "probabili formazioni serie a",
        "il paradiso delle signore in tv oggi"
    ]
    
    results = extract_entities_from_trends(test_queries, api_key)
    
    # Stampa risultati formattati
    print("\nRisultati:")
    print("-" * 80)
    for query, data in results.items():
        print(f"Query: {query}")
        print(f"Entità: {data['entity']} (Confidenza: {data['confidence']:.2f})")
        print(f"Status: {data['status']}")
        if data["fallback_used"]:
            print("⚠️ Fallback utilizzato")
        print("-" * 80)
