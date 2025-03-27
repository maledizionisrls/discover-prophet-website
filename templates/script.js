# --- 3. Calcolo Heuristic Discover Score (MIGLIORATA v7.3) ---
print("\n   Calcolo Heuristic Discover Score (Volume Lineare / Log Rank con penalità fuochi di paglia)...")
discover_score_col = 'Discover_Score'
score_1h_col = 'Score_Avg_now 1-H'
score_4h_col = 'Score_Avg_now 4-H'
score_7d_col = 'Score_Avg_now 7-d'

if score_1h_col in df_final.columns and score_4h_col in df_final.columns and score_7d_col in df_final.columns:
    # Numeratore: Somma lineare dei volumi + 1 (per evitare log(1) al denom se vol=0)
    numerator = 1 + df_final[score_4h_col] + df_final[score_7d_col]
    
    # Denominatore: log(Rank + 1) per smorzare la penalità del rank
    denominator = np.log1p(df_final['Rank'])
    
    # Calcolo base del Discover Score
    base_score = numerator / denominator
    
    # Calcolo fattore di sostenibilità (penalità per fuochi di paglia)
    # Un trend è più sostenibile se il valore a 4h e 7d è alto rispetto a quello a 1h
    df_final['Sustainability'] = (df_final[score_4h_col] + df_final[score_7d_col]) / (df_final[score_1h_col] * 2 + 0.1)  # +0.1 per evitare divisione per zero
    
    # Limitiamo la sostenibilità massima a 3 (300%)
    df_final['Sustainability'] = df_final['Sustainability'].clip(upper=3.0)
    
    # Applicare penalità su base logaritmica per i "fuochi di paglia"
    df_final['Penalty'] = df_final['Sustainability'].apply(
        lambda x: 1.0 if x >= 0.5 else max(0.3, np.sqrt(x))
    )
    
    # Calcolo Discover Score con penalità
    df_final[discover_score_col] = base_score * df_final['Penalty']
    
    # Rimuovi le colonne temporanee
    df_final.drop(['Sustainability', 'Penalty'], axis=1, inplace=True)
    
    # Pulisci eventuali NaN
    df_final[discover_score_col] = df_final[discover_score_col].fillna(0)
    
    print(f"     Colonna '{discover_score_col}' calcolata con formula migliorata (penalità fuochi di paglia).")
else:
    warnings.warn("Colonne score contesto mancanti, impossibile calcolare Discover_Score.", UserWarning)
    df_final[discover_score_col] = 0.0
