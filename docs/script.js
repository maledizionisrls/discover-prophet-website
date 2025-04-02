// Inizializzazione della dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Verifica caricamento dati
    if (typeof trendData === 'undefined' || typeof runMetadata === 'undefined') {
        console.error('Errore critico: file data.js non caricato o vuoto.');
        displayErrorMessage("Errore nel caricamento dei dati (data.js mancante o non valido). Impossibile visualizzare la dashboard.");
        return; // Blocca esecuzione se data.js non è valido
    }
    if (typeof trendData !== 'object' || !Array.isArray(trendData)) {
         console.error('Errore critico: trendData in data.js non è un array valido.');
         displayErrorMessage("Errore nel formato dei dati (trendData non è un array). Impossibile visualizzare la dashboard.");
         return; // Blocca esecuzione
    }

    // Imposta anno corrente nel footer
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // Carica metadati e tabella principale
    loadMetadata();
    try {
        renderTrendsTable(trendData); // Chiama la funzione che popola la tabella
    } catch (error) {
        console.error("Errore durante renderTrendsTable:", error);
        displayErrorMessage("Si è verificato un errore durante la visualizzazione dei dati della tabella.");
    }

    // Imposta ascoltatori eventi (ricerca, ordinamento)
    setupEventListeners();

    // Rimuovi messaggio "Caricamento..."
    const loadingRow = document.querySelector('.loading-row');
    if (loadingRow) {
        loadingRow.remove();
    }
});

// Mostra un messaggio di errore generale nella tabella
function displayErrorMessage(message) {
    const tableBody = document.getElementById('trendsTableBody');
    if(tableBody) {
        // Colspan corretto a 9
        tableBody.innerHTML = `<tr class="error-row"><td colspan="9" style="text-align: center; padding: 30px; color: red;">${escapeHtml(message)}</td></tr>`;
    }
    // Nasconde controlli e statistiche in caso di errore grave
    const controls = document.querySelector('.controls'); if(controls) controls.style.display = 'none';
    const stats = document.querySelector('.stats-container'); if(stats) stats.style.display = 'none';
}

// Carica i metadati nelle card statistiche e nell'header
function loadMetadata() {
    try {
        // Verifica che runMetadata esista e sia un oggetto
        if (typeof runMetadata === 'object' && runMetadata !== null) {
            document.getElementById('updateTimestamp').textContent = runMetadata.timestamp || 'N/A';
            document.getElementById('trendsCount').textContent = runMetadata.trends_count !== undefined ? runMetadata.trends_count : '?';
            document.getElementById('topScore').textContent = (runMetadata.top_score || 0).toFixed(1);
            document.getElementById('runtimeMinutes').textContent = (runMetadata.runtime_minutes || 0).toFixed(1) + 'm';
            // Assicurati che la chiave per i proxy corrisponda a quella in data.js generato da Python
            document.getElementById('proxiesUsed').textContent = runMetadata.pytrends_proxies_used !== undefined ? runMetadata.pytrends_proxies_used : '?';
            const openaiStatusEl = document.getElementById('openaiStatus');
            const openaiModelEl = document.getElementById('openaiModel');
            const openaiInfoP = document.querySelector('.openai-info');

            // Gestione info OpenAI
            if (openaiStatusEl && openaiModelEl && openaiInfoP) {
                if (runMetadata.openai_enabled) {
                    openaiStatusEl.textContent = 'ATTIVA';
                    openaiStatusEl.style.color = '#27ae60'; // Verde
                    openaiModelEl.textContent = runMetadata.openai_model || 'N/A';
                    openaiInfoP.style.display = ''; // Mostra paragrafo
                } else {
                    openaiStatusEl.textContent = 'DISATTIVATA';
                    openaiStatusEl.style.color = '#e74c3c'; // Rosso
                    openaiModelEl.textContent = 'N/A';
                    openaiInfoP.style.display = 'none'; // Nascondi paragrafo
                }
            }
             // Qui potresti aggiungere la gestione di 'runMetadata.saturation_enabled' se vuoi visualizzare lo stato
        } else {
            // Fallback se runMetadata non è valido
            console.error('Dati metadati (runMetadata) non disponibili o non validi.');
            document.getElementById('updateTimestamp').textContent = 'Errore';
            document.getElementById('trendsCount').textContent = '?';
            document.getElementById('topScore').textContent = '0.0';
            document.getElementById('runtimeMinutes').textContent = '?m';
            document.getElementById('proxiesUsed').textContent = '?';
            const openaiInfoP = document.querySelector('.openai-info');
            if(openaiInfoP) openaiInfoP.style.display = 'none';
        }
    } catch (error) {
        // Gestione errori nel caricamento metadati
        console.error("Errore durante loadMetadata:", error);
        // Potresti voler mostrare un errore più specifico o semplicemente loggare
    }
}

// Configura gli ascoltatori degli eventi per ricerca e ordinamento
function setupEventListeners() {
    try {
        const searchBox = document.getElementById('searchBox');
        if (searchBox) {
            // Usa 'input' per reazione immediata alla digitazione
            searchBox.addEventListener('input', () => filterTable(searchBox.value.trim().toLowerCase()));
        }
        const sortBy = document.getElementById('sortBy');
        const sortOrder = document.getElementById('sortOrder');
        if (sortBy) {
             sortBy.addEventListener('change', sortTable);
        }
        if (sortOrder) {
            sortOrder.addEventListener('change', sortTable);
        }
    } catch (error) {
        console.error("Errore durante setupEventListeners:", error);
    }
}

// Renderizza la tabella delle tendenze dai dati forniti
function renderTrendsTable(data) {
    const tableBody = document.getElementById('trendsTableBody');
    if (!tableBody) {
        console.error("Elemento 'trendsTableBody' non trovato nel DOM.");
        return; // Esce se la tabella non esiste
    }
    tableBody.innerHTML = ''; // Pulisce il corpo della tabella precedente

    // Gestisce caso in cui non ci sono dati
    if (!data || data.length === 0) {
         // Colspan corretto a 9
         tableBody.innerHTML = `<tr class="no-data-row"><td colspan="9" style="text-align: center;">Nessun dato disponibile.</td></tr>`;
         return;
    }

    // Itera sui dati e crea una riga per ogni trend
    data.forEach((item, index) => {
        const row = document.createElement('tr');

        // Imposta attributi data-* per ricerca e ordinamento
        row.dataset.entity = String(item.entity || '').toLowerCase();
        row.dataset.rank = String(item.rank || 0);
        row.dataset.discoverScore = String(item.discover_score || 0);
        row.dataset.score1h = String(item.score_1h || 0);
        row.dataset.score4h = String(item.score_4h || 0);
        row.dataset.score7d = String(item.score_7d || 0);
        // Salva saturation_score come stringa (-1 per errore, altrimenti il numero)
        row.dataset.saturationScore = String(item.saturation_score === -1.0 ? -1 : Math.round(item.saturation_score || 0));
        row.dataset.aiEntities = String(item.extracted_entities || '').toLowerCase();

        // Applica classe 'hot-trend' se le condizioni sono soddisfatte
        const isHot = isEntityHotOriginal(item.score_1h, item.score_4h, item.score_7d);
        if (isHot) {
            row.classList.add('hot-trend');
        }

        // Determina classe per il badge del rank
        let rankBadgeClass = '';
        if (item.rank <= 10) rankBadgeClass = 'top-10';
        else if (item.rank <= 25) rankBadgeClass = 'top-25';

        // Calcola indicatore di tendenza (freccia su/giù/uguale)
        const trendIndicator = calculateTrendIndicator(item.score_1h, item.score_4h);
        // Prepara nome entità principale (con escape HTML)
        let entityDisplay = escapeHtml(item.entity || 'N/A');

        // Prepara HTML per le entità estratte da AI (se presenti)
        let extractedEntitiesHtml = '';
        if (item.extracted_entities && typeof item.extracted_entities === 'string' && item.extracted_entities.trim() !== '') {
            const entitiesCleaned = item.extracted_entities.trim();
            // Escape HTML per sicurezza
            extractedEntitiesHtml = `<div class="extracted-entities">${escapeHtml(entitiesCleaned)}</div>`;
        }

        // Formatta il saturation score per la visualizzazione nella cella
        let saturationDisplay = '-'; // Default per errore (-1) o non definito
        if (item.saturation_score !== undefined && item.saturation_score >= 0) {
            // Formatta come numero intero con separatore migliaia italiano (punto)
            saturationDisplay = Math.round(item.saturation_score).toLocaleString('it-IT');
        }

        // Costruzione HTML della riga della tabella
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><span class="rank-badge ${rankBadgeClass}">${item.rank || 0}</span></td>
            <td class="trend-cell">
                 <div class="main-entity">${entityDisplay}</div>
                 ${extractedEntitiesHtml}
            </td>
            <td class="score">
                 ${(item.discover_score || 0).toFixed(1)} ${trendIndicator}
            </td>
            <td>${(item.score_1h || 0).toFixed(1)}</td>
            <td>${(item.score_4h || 0).toFixed(1)}</td>
            <td>${(item.score_7d || 0).toFixed(1)}</td>
            <td class="saturation-score">${saturationDisplay}</td> <td>
                 <div class="trend-chart-container" id="chart-${index}"></div>
            </td>
        `;
        // Aggiunge la riga completa al corpo della tabella
        tableBody.appendChild(row);
    });

    // Creazione asincrona dei grafici dopo il rendering delle righe
    console.log("Avvio creazione grafici...");
    requestAnimationFrame(() => { // Usa requestAnimationFrame per assicurare che il DOM sia pronto
        console.log(`Inizio loop creazione grafici per ${data.length} elementi.`);
        // Verifica se Chart.js è caricato
        if (typeof Chart === 'undefined') {
            console.error("Chart.js non è caricato!");
            const firstChartContainer = document.getElementById('chart-0');
            // Mostra messaggio di errore nel primo contenitore grafico come fallback
            if (firstChartContainer) firstChartContainer.innerHTML = '<span class="chart-fallback" style="color:red;">ChartJS Err!</span>';
            return;
        }
        // Itera nuovamente sui dati per creare i grafici
        data.forEach((item, index) => {
            const containerId = `chart-${index}`;
            // Prepara i dati per il grafico [7d, 4h, 1h]
            const chartData = [Number(item.score_7d) || 0, Number(item.score_4h) || 0, Number(item.score_1h) || 0];
            try {
                const container = document.getElementById(containerId);
                // Crea il grafico solo se il contenitore esiste
                if(container) {
                    createTrendChart(containerId, chartData);
                }
            } catch (chartError) {
                // Gestisce errori specifici della creazione del grafico
                console.error(`Errore durante la chiamata a createTrendChart per ${containerId}:`, chartError);
                const errorContainer = document.getElementById(containerId);
                // Mostra messaggio di errore nel contenitore del grafico fallito
                if(errorContainer) {
                    errorContainer.innerHTML = '<span class="chart-fallback" style="color:red;">Chart Err!</span>';
                }
            }
        });
        console.log("Fine loop creazione grafici.");
    });
}

// Funzione per determinare se un trend è "hot" (basata su logica originale)
function isEntityHotOriginal(score1h, score4h, score7d) {
    const s1h = Number(score1h) || 0;
    const s4h = Number(score4h) || 0;
    // Se lo score 4h è zero, basta che lo score 1h sia > 10
    if (s4h === 0) { return s1h > 10; }
    // Altrimenti, verifica aumenti significativi rispetto a 4h
    if (s1h > 30 && s1h > s4h * 1.5) return true; // Score alto e aumento > 50%
    if (s1h > 15 && s1h > s4h * 2.0) return true; // Score medio e raddoppio
    if (s1h > 10 && s1h > s4h * 3.0) return true; // Score > 10 e triplicato
    return false; // Altrimenti non è "hot"
}

// Crea un singolo grafico di tendenza usando Chart.js
function createTrendChart(containerId, dataPoints) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`Contenitore grafico ${containerId} non trovato.`);
        return; // Esce se il contenitore non esiste
    }

    container.innerHTML = ''; // Pulisce eventuale contenuto precedente
    const canvas = document.createElement('canvas');
    // Stili per rendere il canvas responsivo al contenitore
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    container.appendChild(canvas);
    const chartContext = canvas.getContext('2d');

    // Verifica se il contesto 2D è stato ottenuto
    if (!chartContext) {
        console.error(`Contesto 2D non ottenuto per ${containerId}`);
        container.innerHTML = `<span class="chart-fallback">Ctx Err</span>`; // Fallback
        return;
    }

    try {
        // Determina colore linea e gradiente sfondo
        const lineColor = determineTrendColor(dataPoints);
        const gradient = chartContext.createLinearGradient(0, 0, 0, container.clientHeight || 35); // Usa altezza container o default
        gradient.addColorStop(0, lineColor + '60'); // Opacità 60% all'inizio
        gradient.addColorStop(1, lineColor + '05'); // Opacità 5% alla fine

        // Crea il grafico
        new Chart(chartContext, {
            type: 'line',
            data: {
                labels: ['7d', '4h', '1h'], // Etichette assi (nascoste)
                datasets: [{
                    data: dataPoints,           // Dati numerici
                    borderColor: lineColor,     // Colore linea
                    backgroundColor: gradient,  // Sfondo sfumato
                    borderWidth: 2,             // Spessore linea
                    pointRadius: 3,             // Dimensione punti
                    pointBackgroundColor: lineColor, // Colore punti
                    tension: 0.4,               // Curvatura linea
                    fill: true                  // Riempie area sotto linea
                }]
            },
            options: {
                responsive: true,           // Adatta a dimensione contenitore
                maintainAspectRatio: false, // Non mantiene proporzioni fisse
                plugins: {
                    legend: { display: false }, // Nasconde legenda
                    tooltip: {
                        enabled: true,          // Abilita tooltip al hover
                        callbacks: {
                             // Formatta testo tooltip
                            label: function(context) {
                                return `Score: ${context.parsed.y.toFixed(1)}`;
                            }
                        }
                    }
                },
                scales: {
                    x: { display: false },  // Nasconde asse X
                    y: { display: false, min: 0 } // Nasconde asse Y, parte da 0
                }
            }
        });
    } catch (error) {
        // Gestisce errori durante la creazione del grafico specifico
        console.error(`Errore creazione grafico ${containerId}:`, error);
        // Mostra i dati numerici come fallback se il grafico fallisce
        container.innerHTML = `<span class="chart-fallback">${dataPoints.map(p => p.toFixed(0)).join('→')}</span>`;
    }
}

// Determina il colore della linea del grafico basato sul trend 4h -> 1h
function determineTrendColor(dataPoints) {
    const score4h = dataPoints[1] || 0; // Indice 1 = 4h
    const score1h = dataPoints[2] || 0; // Indice 2 = 1h
    if (score1h > score4h * 1.2) { // Aumento significativo (>20%)
        return '#27ae60'; // Verde
    } else if (score1h < score4h * 0.8) { // Calo significativo (>20%)
        return '#e74c3c'; // Rosso
    } else { // Variazione minore del 20%
        return '#f39c12'; // Giallo/Arancio (stabile/neutro)
    }
}

// Calcola l'indicatore di tendenza (icona freccia/uguale)
function calculateTrendIndicator(score1h, score4h) {
    const s1h = Number(score1h) || 0;
    const s4h = Number(score4h) || 0;

    // Se entrambi 0, è stabile
    if (s1h === 0 && s4h === 0) {
        return '<span class="trend-indicator trend-stable" title="Stabile"><i class="fas fa-equals"></i></span>';
    }

    const diff = s1h - s4h;
    // Calcola percentuale cambiamento (evita divisione per zero)
    const percentChange = s4h !== 0 ? (diff / s4h) * 100 : (s1h > 0 ? Infinity : 0); // Se 4h era 0, considera aumento infinito se 1h > 0
    const absDiff = Math.abs(diff);

    // Considera stabile se la differenza assoluta è piccola E la percentuale è bassa,
    // O se la variazione percentuale è molto piccola
    if ((absDiff < 1 && Math.abs(percentChange) < 20) || Math.abs(percentChange) < 5) {
        return '<span class="trend-indicator trend-stable" title="Stabile"><i class="fas fa-equals"></i></span>';
    }

    // Gestione Aumento
    if (diff > 0) {
        if (percentChange > 100 || percentChange === Infinity || (s4h < 1 && s1h > 5) ) { // Forte aumento (>100% o da quasi zero a > 5)
            return '<span class="trend-indicator trend-strong-up" title="Forte aumento"><i class="fas fa-arrow-up"></i></span>';
        } else if (percentChange > 30) { // Aumento medio (>30%)
            return '<span class="trend-indicator trend-medium-up" title="Aumento medio"><i class="fas fa-arrow-up"></i></span>';
        } else { // Aumento leggero
            return '<span class="trend-indicator trend-small-up" title="Leggero aumento"><i class="fas fa-arrow-up"></i></span>';
        }
    }
    // Gestione Calo
    else {
        if (percentChange < -50) { // Forte calo (<-50%)
            return '<span class="trend-indicator trend-strong-down" title="Forte calo"><i class="fas fa-arrow-down"></i></span>';
        } else if (percentChange < -20) { // Calo medio (<-20%)
            return '<span class="trend-indicator trend-medium-down" title="Calo medio"><i class="fas fa-arrow-down"></i></span>';
        } else { // Calo leggero
            return '<span class="trend-indicator trend-small-down" title="Leggero calo"><i class="fas fa-arrow-down"></i></span>';
        }
    }
}

// Filtra le righe della tabella in base al testo di ricerca
function filterTable(searchText) {
    const tableBody = document.getElementById('trendsTableBody');
    if (!tableBody) return; // Esce se la tabella non esiste
    const rows = tableBody.querySelectorAll('tr');
    const noResultsMessage = document.getElementById('noResultsMessage'); // Non usato qui, ma potrebbe servire
    let visibleCount = 0;

    // Rimuovi eventuale riga "Nessun risultato" precedente
    const noResultsRow = tableBody.querySelector('.no-results-row');
    if (noResultsRow) {
         noResultsRow.remove();
    }

    // Itera sulle righe dati
    rows.forEach(row => {
        // Salta righe speciali (loading, no-data, error)
        if (row.classList.contains('loading-row') || row.classList.contains('no-data-row') || row.classList.contains('error-row')) return;

        // Ottieni testi da controllare (da attributi data-*)
        const entityText = row.dataset.entity || '';
        const aiEntitiesText = row.dataset.aiEntities || '';

        // Controlla se il testo di ricerca è presente
        if (entityText.includes(searchText) || aiEntitiesText.includes(searchText)) {
            row.style.display = ''; // Mostra la riga
            visibleCount++;
        } else {
            row.style.display = 'none'; // Nascondi la riga
        }
    });

    // Rinumera le righe visibili
    let currentIndex = 1;
    rows.forEach(row => {
        if (row.classList.contains('loading-row') || row.classList.contains('no-data-row') || row.classList.contains('error-row')) return;
        // Se la riga è visibile, aggiorna il numero nella prima cella
        if (row.style.display !== 'none') {
            const cellIndex = row.querySelector('td:first-child');
            if (cellIndex) {
                 cellIndex.textContent = currentIndex++;
            }
        }
    });

    // Mostra messaggio "Nessun risultato" se necessario
    if (visibleCount === 0 && searchText) {
        let noResultRowInstance = tableBody.querySelector('.no-results-row'); // Ricontrolla se esiste
        if (!noResultRowInstance) { // Crea solo se non esiste già
             noResultRowInstance = document.createElement('tr');
             noResultRowInstance.className = 'no-results-row';
             // Colspan corretto a 9
             noResultRowInstance.innerHTML = `<td colspan="9" style="text-align: center; padding: 20px;">Nessun risultato trovato per "${escapeHtml(searchText)}"</td>`;
             tableBody.appendChild(noResultRowInstance);
        }
    }
}


// Ordina le righe della tabella
function sortTable() {
    const sortBy = document.getElementById('sortBy').value;
    const sortOrder = document.getElementById('sortOrder').value;
    const isAsc = sortOrder === 'asc'; // true se ascendente, false se decrescente
    const tableBody = document.getElementById('trendsTableBody');
    if (!tableBody) return; // Esce se la tabella non esiste

    // Prendi tutte le righe dati (escludendo quelle speciali)
    const rows = Array.from(tableBody.querySelectorAll('tr:not(.loading-row):not(.no-data-row):not(.error-row):not(.no-results-row)'));

    // Rimuovi eventuale riga "Nessun risultato" prima di ordinare
    const noResultRow = tableBody.querySelector('.no-results-row');
    if (noResultRow) {
        noResultRow.remove();
    }

    // Logica di ordinamento
    rows.sort((a, b) => {
        let valueA, valueB;
        // Estrai i valori da confrontare dagli attributi data-*
        switch (sortBy) {
            case 'discover_score':
                valueA = parseFloat(a.dataset.discoverScore || 0);
                valueB = parseFloat(b.dataset.discoverScore || 0);
                break;
            case 'rank':
                valueA = parseInt(a.dataset.rank || 0);
                valueB = parseInt(b.dataset.rank || 0);
                break;
            case 'saturation_score':
                 // *** Logica Corretta per Saturazione ***
                 // Assegna -Infinity se il valore è '-1' (errore), altrimenti parsa il numero
                 valueA = a.dataset.saturationScore === '-1' ? -Infinity : parseFloat(a.dataset.saturationScore || 0);
                 valueB = b.dataset.saturationScore === '-1' ? -Infinity : parseFloat(b.dataset.saturationScore || 0);
                 break;
            case 'score_1h':
                valueA = parseFloat(a.dataset.score1h || 0);
                valueB = parseFloat(b.dataset.score1h || 0);
                break;
            case 'score_4h':
                valueA = parseFloat(a.dataset.score4h || 0);
                valueB = parseFloat(b.dataset.score4h || 0);
                break;
            case 'score_7d':
                valueA = parseFloat(a.dataset.score7d || 0);
                valueB = parseFloat(b.dataset.score7d || 0);
                break;
            default: // Default a discover_score
                valueA = parseFloat(a.dataset.discoverScore || 0);
                valueB = parseFloat(b.dataset.discoverScore || 0);
        }

        // Confronto standard per numeri
        if (valueA < valueB) return isAsc ? -1 : 1; // Se A < B, A viene prima in ASC, dopo in DESC
        if (valueA > valueB) return isAsc ? 1 : -1; // Se A > B, A viene dopo in ASC, prima in DESC
        return 0; // Mantieni ordine relativo se uguali
    });

    // Riaggiungi le righe ordinate al tbody
    // Questo le rimuove dalla loro posizione originale e le appende alla fine nell'ordine corretto
    rows.forEach(row => tableBody.appendChild(row));

    // Rinumera le righe (solo quelle visibili dopo l'ordinamento)
    rows.forEach((row, index) => {
        const cellIndex = row.querySelector('td:first-child');
        if(cellIndex) {
             cellIndex.textContent = index + 1;
        }
    });

    // Riapplica il filtro se era attivo
    const searchBox = document.getElementById('searchBox');
    if (searchBox && searchBox.value) {
        filterTable(searchBox.value.trim().toLowerCase());
    }
}


// Funzione per escape di caratteri HTML potenzialmente dannosi
function escapeHtml(unsafe) {
     // Gestisce null o undefined
     if (unsafe === null || typeof unsafe === 'undefined') return '';
     // Converte in stringa se non lo è già
     if (typeof unsafe !== 'string') {
         try { unsafe = String(unsafe); } catch (e) { return ''; }
     }
     // Sostituisce i caratteri speciali HTML
     return unsafe.replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&#039;");
}
