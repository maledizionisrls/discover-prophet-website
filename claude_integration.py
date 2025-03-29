# -*- coding: utf-8 -*-
"""
Claude Integration Module for Discover Prophet
Provides semantic analysis of search queries using Anthropic's Claude API
"""

import json
import re
import time
import logging
from typing import Dict, List, Any, Optional, Union
import os
import anthropic
import jsonschema

# Setup logging
logging.basicConfig(
    level=logging.INFO, 
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger("ClaudeIntegration")

# JSON Schema for response validation
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

class ClaudeAnalyzer:
    """Class to handle semantic analysis using Claude API"""
    
    def __init__(self, api_key: str, model: str = "claude-3-sonnet-20240229", cache_file: Optional[str] = None):
        """
        Initialize the Claude analyzer
        
        Args:
            api_key: Anthropic API key
            model: Claude model to use
            cache_file: Path to JSON file for caching results
        """
        self.api_key = api_key
        self.model = model
        self.client = anthropic.Anthropic(api_key=api_key)
        self.cache_file = cache_file
        self.cache = self._load_cache() if cache_file else {}
        
        # Rate limiting parameters
        self.requests_per_minute = 50  # Adjust based on your API tier
        self.last_request_time = 0
        self.request_interval = 60.0 / self.requests_per_minute
        
        logger.info(f"Claude Analyzer initialized with model: {model}")
        
    def _load_cache(self) -> Dict[str, Any]:
        """Load cache from file if exists"""
        if os.path.exists(self.cache_file):
            try:
                with open(self.cache_file, 'r', encoding='utf-8') as f:
                    return json.load(f)
            except Exception as e:
                logger.warning(f"Error loading cache: {e}")
                return {}
        return {}
    
    def _save_cache(self) -> None:
        """Save cache to file"""
        if self.cache_file:
            try:
                with open(self.cache_file, 'w', encoding='utf-8') as f:
                    json.dump(self.cache, f, ensure_ascii=False, indent=2)
            except Exception as e:
                logger.warning(f"Error saving cache: {e}")
    
    def _rate_limit(self) -> None:
        """Implement rate limiting for API calls"""
        current_time = time.time()
        time_since_last_request = current_time - self.last_request_time
        
        if time_since_last_request < self.request_interval:
            sleep_time = self.request_interval - time_since_last_request
            time.sleep(sleep_time)
            
        self.last_request_time = time.time()
    
    def extract_json_from_text(self, text: str) -> str:
        """Extract JSON from text that might contain other content"""
        # Try to find JSON objects with regex
        json_matches = re.findall(r'({[\s\S]*})', text)
        
        # If found, try each match until we find a valid JSON
        if json_matches:
            for potential_json in json_matches:
                try:
                    # Verify it's valid JSON by parsing it
                    json.loads(potential_json)
                    return potential_json
                except json.JSONDecodeError:
                    continue
                    
        # If no valid JSON found, try a more aggressive approach
        # Look for the largest {...} pattern
        potential_json = re.search(r'({.*})', text.replace('\n', ' '))
        if potential_json:
            try:
                json_str = potential_json.group(0)
                json.loads(json_str)
                return json_str
            except json.JSONDecodeError:
                pass
                
        raise ValueError("No valid JSON found in the response")
    
    def validate_and_parse_json(self, json_str: str) -> Dict[str, Any]:
        """Validate and parse JSON against the schema"""
        try:
            data = json.loads(json_str)
            jsonschema.validate(instance=data, schema=QUERY_ANALYSIS_SCHEMA)
            return data
        except json.JSONDecodeError as e:
            raise ValueError(f"Invalid JSON format: {e}")
        except jsonschema.exceptions.ValidationError as e:
            raise ValueError(f"JSON does not conform to schema: {e}")
    
    def create_fallback_result(self, query: str) -> Dict[str, Any]:
        """Create a fallback result when analysis fails"""
        return {
            "original_query": query,
            "primary_entity": query,  # Use original query as primary entity
            "is_meta_query": False,
            "secondary_entities": [],
            "confidence": 0.1
        }
    
    def analyze_query(self, query: str, retry_count: int = 2) -> Dict[str, Any]:
        """
        Analyze a search query using Claude API
        
        Args:
            query: The search query to analyze
            retry_count: Number of retries if the API call fails
            
        Returns:
            Dict containing the semantic analysis
        """
        # Check cache first
        cache_key = query.lower().strip()
        if cache_key in self.cache:
            logger.info(f"Cache hit for query: {query}")
            return self.cache[cache_key]
        
        logger.info(f"Analyzing query: {query}")
        
        system_prompt = """
        You are a semantic analysis expert specializing in search query intent analysis. 
        Your task is to analyze search queries and extract the primary entity of interest along with any secondary entities.
        Respond ONLY with the requested JSON format, with no additional text, explanations, or notes.
        """
        
        user_prompt = f"""
        Analyze this search query: "{query}"
        
        Please identify:
        1. The primary entity (the main subject/focus of the search)
        2. Whether this is a meta-query (a search asking how to do something or requesting general information)
        3. Any secondary entities (related details or context)
        
        Consider:
        - For queries like "stasera in tv programmi prima serata", the primary entity would be "programmi TV" not "TV" or "prima serata"
        - For "terremoto myanmar oggi", the primary entity is "terremoto myanmar" not just "terremoto" or "myanmar"
        - For "napoli milan risultato", the primary entity is "napoli milan" (the match) not "risultato"
        
        Return EXACTLY this JSON structure and nothing else:
        {{
            "original_query": "{query}",
            "primary_entity": "the identified primary entity",
            "is_meta_query": true/false,
            "secondary_entities": [
                {{"entity": "secondary entity 1", "type": "entity type", "weight": 0.X}},
                ...
            ],
            "confidence": 0.X (from 0.1 to 1.0)
        }}
        """
        
        for attempt in range(retry_count + 1):
            try:
                # Implement rate limiting
                self._rate_limit()
                
                # Call Claude API
                message = self.client.messages.create(
                    model=self.model,
                    max_tokens=1000,
                    temperature=0,
                    system=system_prompt,
                    messages=[
                        {"role": "user", "content": user_prompt}
                    ]
                )
                
                # Extract the response
                response_text = message.content[0].text
                
                # Extract and validate JSON
                json_str = self.extract_json_from_text(response_text)
                result = self.validate_and_parse_json(json_str)
                
                # Add to cache
                self.cache[cache_key] = result
                if len(self.cache) % 10 == 0:  # Save every 10 new entries
                    self._save_cache()
                
                return result
                
            except Exception as e:
                logger.warning(f"Attempt {attempt+1}/{retry_count+1} failed: {e}")
                if attempt < retry_count:
                    # Wait before retrying (exponential backoff)
                    time.sleep(2 ** attempt)
                else:
                    logger.error(f"All retries failed for query: {query}")
                    fallback = self.create_fallback_result(query)
                    self.cache[cache_key] = fallback
                    return fallback
    
    def analyze_queries_batch(self, queries: List[str], batch_size: int = 5) -> Dict[str, Dict[str, Any]]:
        """
        Analyze multiple queries in batches
        
        Args:
            queries: List of queries to analyze
            batch_size: Number of queries to process in parallel (not actually parallel, but conceptually)
            
        Returns:
            Dict mapping queries to their analysis results
        """
        results = {}
        total = len(queries)
        
        logger.info(f"Processing {total} queries in batches of {batch_size}")
        
        for i in range(0, total, batch_size):
            batch = queries[i:i+batch_size]
            logger.info(f"Processing batch {i//batch_size + 1}/{(total-1)//batch_size + 1}: {len(batch)} queries")
            
            for query in batch:
                results[query] = self.analyze_query(query)
            
            # Save cache after each batch
            self._save_cache()
        
        return results
    
    def close(self) -> None:
        """Save cache and clean up"""
        self._save_cache()
        logger.info("Claude Analyzer closed")


# Helper functions for standalone usage
def setup_analyzer(api_key: Optional[str] = None, model: str = "claude-3-sonnet-20240229", 
                  cache_file: str = "query_analysis_cache.json") -> ClaudeAnalyzer:
    """Setup a Claude analyzer with the given parameters"""
    if not api_key:
        api_key = os.environ.get("ANTHROPIC_API_KEY")
        if not api_key:
            raise ValueError("No API key provided and ANTHROPIC_API_KEY not found in environment")
    
    return ClaudeAnalyzer(api_key=api_key, model=model, cache_file=cache_file)

def analyze_single_query(query: str, api_key: Optional[str] = None, 
                        model: str = "claude-3-sonnet-20240229") -> Dict[str, Any]:
    """Analyze a single query (convenience function)"""
    analyzer = setup_analyzer(api_key, model, cache_file=None)
    result = analyzer.analyze_query(query)
    return result

# Example usage if run as script
if __name__ == "__main__":
    # Example using the module
    ANTHROPIC_API_KEY = os.environ.get("ANTHROPIC_API_KEY")
    
    if not ANTHROPIC_API_KEY:
        print("Please set the ANTHROPIC_API_KEY environment variable")
        exit(1)
    
    # Example queries
    test_queries = [
        "stasera in tv programmi prima serata",
        "terremoto myanmar oggi",
        "napoli milan risultato",
        "come cucinare la pasta",
        "taylor swift nuovo album"
    ]
    
    analyzer = setup_analyzer(ANTHROPIC_API_KEY, model="claude-3-sonnet-20240229")
    
    for query in test_queries:
        result = analyzer.analyze_query(query)
        print(f"\nQuery: {query}")
        print(json.dumps(result, indent=2, ensure_ascii=False))
    
    analyzer.close()
