// Inizializzazione della dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Verifica caricamento dati prima di procedere
    if (typeof trendData === 'undefined' || typeof runMetadata === 'undefined') {
        console.error('Errore critico: file data.js non caricato o vuoto.');
        displayErrorMessage("Errore nel caricamento dei dati (data.js mancante o non valido). Impossibile visualizzare la dashboard.");
        return; // Interrompi esecuzione se i dati mancano
    }
    // Verifica aggiuntiva che trendData sia un array
    if (typeof trendData !== 'object' || !Array.isArray(trendData)) {
         console.error('Errore critico: trendData in data.js non è un array valido.');
         displayErrorMessage("Errore nel formato dei dati (trendData non è un array). Impossibile visualizzare la dashboard.");
         return;
    }

    // Inizializza anno corrente nel footer
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
    loadMetadata();
    // Aggiungi un try-catch attorno a renderTrendsTable per sicurezza
    try {
        renderTrendsTable(trendData);
    } catch (error) {
        console.error("Errore durante renderTrendsTable:", error);
        displayErrorMessage("Si è verificato un errore durante la visualizzazione dei dati della tabella.");
    }
    setupEventListeners();
    const loadingRow = document.querySelector('.loading-row');
    if (loadingRow) {
        loadingRow.remove();
    }
});

// Mostra un messaggio di errore generale
function displayErrorMessage(message) {
    const tableBody = document.getElementById('trendsTableBody');
    if(tableBody) {
        tableBody.innerHTML = `<tr class="error-row"><td colspan="8" style="text-align: center; padding: 30px; color: red;">${escapeHtml(message)}</td></tr>`;
    }
    const controls = document.querySelector('.controls'); if(controls) controls.style.display = 'none';
    const stats = document.querySelector('.stats-container'); if(stats) stats.style.display = 'none';
}

// Carica i metadati nella dashboard
function loadMetadata() {
    try {
        if (typeof runMetadata === 'object' && runMetadata !== null) {
            document.getElementById('updateTimestamp').textContent = runMetadata.timestamp || 'N/A';
            document.getElementById('trendsCount').textContent = runMetadata.trends_count !== undefined ? runMetadata.trends_count : '?';
            document.getElementById('topScore').textContent = (runMetadata.top_score || 0).toFixed(2);
            document.getElementById('runtimeMinutes').textContent = (runMetadata.runtime_minutes || 0).toFixed(1) + 'm';
            document.getElementById('proxiesUsed').textContent = runMetadata.proxies_used !== undefined ? runMetadata.proxies_used : '?';
            const openaiStatusEl = document.getElementById('openaiStatus');
            const openaiModelEl = document.getElementById('openaiModel');
            const openaiInfoP = document.querySelector('.openai-info');
            if (openaiStatusEl && openaiModelEl && openaiInfoP) {
                if (runMetadata.openai_enabled) {
                    openaiStatusEl.textContent = 'ATTIVA'; openaiStatusEl.style.color = '#27ae60';
                    openaiModelEl.textContent = runMetadata.openai_model || 'N/A'; openaiInfoP.style.display = '';
                } else {
                    openaiStatusEl.textContent = 'DISATTIVATA'; openaiStatusEl.style.color = '#e74c3c';
                    openaiModelEl.textContent = 'N/A'; openaiInfoP.style.display = 'none';
                }
            }
        } else {
            console.error('Dati metadati (runMetadata) non disponibili o non validi.');
            document.getElementById('updateTimestamp').textContent = 'Errore';
            document.getElementById('trendsCount').textContent = 'Errore';
            document.getElementById('topScore').textContent = 'Errore';
            document.getElementById('runtimeMinutes').textContent = 'Errore';
            document.getElementById('proxiesUsed').textContent = 'Errore';
            const openaiInfoP = document.querySelector('.openai-info');
            if(openaiInfoP) openaiInfoP.style.display = 'none';
        }
    } catch (error) {
        console.error("Errore durante loadMetadata:", error);
    }
}

// Configura gli ascoltatori degli eventi (incluso il toggle AI)
function setupEventListeners() {
    try {
        const searchBox = document.getElementById('searchBox');
        if (searchBox) {
            searchBox.addEventListener('input', () => filterTable(searchBox.value.trim().toLowerCase()));
        }
        const sortBy = document.getElementById('sortBy');
        const sortOrder = document.getElementById('sortOrder');
        if (sortBy) sortBy.addEventListener('change', sortTable);
        if (sortOrder) sortOrder.addEventListener('change', sortTable);

        // Event Listener per Toggle Entità AI (Delegato al tbody)
        const tableBody = document.getElementById('trendsTableBody');
        if (tableBody) {
            tableBody.addEventListener('click', function(event) {
                const button = event.target.closest('.toggle-ai-btn');
                if (button) {
                    const cell = button.closest('td.trend-cell');
                    if (cell) {
                        const entitiesDiv = cell.querySelector('.extracted-entities.collapsible');
                        if (entitiesDiv) {
                            entitiesDiv.classList.toggle('visible');
                            const icon = button.querySelector('i');
                            if (icon) {
                                if (entitiesDiv.classList.contains('visible')) {
                                    icon.classList.remove('fa-plus-circle'); icon.classList.add('fa-minus-circle');
                                    button.setAttribute('title', 'Nascondi entità AI');
                                } else {
                                    icon.classList.remove('fa-minus-circle'); icon.classList.add('fa-plus-circle');
                                    button.setAttribute('title', 'Mostra entità AI');
                                }
                            }
                        }
                    }
                }
            });
        }
    } catch (error) {
        console.error("Errore durante setupEventListeners:", error);
    }
}

// Renderizza la tabella delle tendenze (con bottone toggle)
function renderTrendsTable(data) {
    const tableBody = document.getElementById('trendsTableBody');
    if (!tableBody) { console.error("Elemento 'trendsTableBody' non trovato."); return; }
    tableBody.innerHTML = '';

    if (!data || data.length === 0) {
         tableBody.innerHTML = `<tr class="no-data-row"><td colspan="8">Nessun dato disponibile.</td></tr>`;
         return;
    }

    data.forEach((item, index) => {
        const row = document.createElement('tr');
        // Popola dataset
        row.dataset.entity = String(item.entity || '').toLowerCase();
        row.dataset.rank = String(item.rank || 0);
        row.dataset.discoverScore = String(item.discover_score || 0);
        row.dataset.score1h = String(item.score_1h || 0);
        row.dataset.score4h = String(item.score_4h || 0);
        row.dataset.score7d = String(item.score_7d || 0);
        row.dataset.aiEntities = String(item.extracted_entities || '').toLowerCase();

        // Logica HOT
        const isHot = isEntityHot(item.score_1h, item.score_4h, item.score_7d);
        if (isHot) row.classList.add('hot-trend');

        // Badge Rank
        let rankBadgeClass = '';
        if (item.rank <= 10) rankBadgeClass = 'top-10';
        else if (item.rank <= 25) rankBadgeClass = 'top-25';
        // Indicatore Trend
        const trendIndicator = calculateTrendIndicator(item.score_1h, item.score_4h);
        // Entità principale
        let entityDisplay = escapeHtml(item.entity || 'N/A');

        // Logica per entità AI collapsible
        let extractedEntitiesHtml = '';
        let toggleButtonHtml = '';
        if (item.extracted_entities && typeof item.extracted_entities === 'string' && item.extracted_entities.trim() !== '') {
             const entitiesCleaned = item.extracted_entities.trim();
             toggleButtonHtml = `<button class="toggle-ai-btn" title="Mostra entità AI"><i class="fas fa-plus-circle"></i></button>`;
             extractedEntitiesHtml = `<div class="extracted-entities collapsible" title="Entità suggerite da AI"><span class="scrolling-text-inner">${escapeHtml(entitiesCleaned)}</span></div>`;
        }

        // Costruzione HTML riga
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><span class="rank-badge ${rankBadgeClass}">${item.rank || 0}</span></td>
            <td class="trend-cell">
                 <div class="main-entity-container">
                    <span class="main-entity">${entityDisplay}</span>
                    ${toggleButtonHtml}
                 </div>
                 ${extractedEntitiesHtml}
            </td>
            <td class="score">
                ${(item.discover_score || 0).toFixed(3)} ${trendIndicator}
                ${isHot ? '<span class="hot-indicator" title="Trend in forte crescita recente">HOT</span>' : ''}
            </td>
            <td>${(item.score_1h || 0).toFixed(1)}</td>
            <td>${(item.score_4h || 0).toFixed(1)}</td>
            <td>${(item.score_7d || 0).toFixed(1)}</td>
            <td>
                <div class="trend-chart-container" id="chart-${index}"></div>
            </td>
        `;
        tableBody.appendChild(row);
    });

    // Creazione grafici con log per debug
    console.log("Avvio creazione grafici..."); // DEBUG
    requestAnimationFrame(() => {
        console.log(`Inizio loop creazione grafici per ${data.length} elementi.`); // DEBUG
        data.forEach((item, index) => {
            const containerId = `chart-${index}`;
            const chartData = [Number(item.score_7d) || 0, Number(item.score_4h) || 0, Number(item.score_1h) || 0];
            // console.log(`Tentativo creazione grafico per ${containerId} con dati:`, chartData); // DEBUG (molto verboso)
            try {
                 // Verifica se il container esiste PRIMA di chiamare la funzione
                 if(document.getElementById(containerId)) {
                    createTrendChart(containerId, chartData);
                 } else {
                    console.warn(`Container ${containerId} non trovato nel DOM prima di chiamare createTrendChart.`);
                 }
            } catch (chartError) {
                 console.error(`Errore durante la chiamata a createTrendChart per ${containerId}:`, chartError);
                 const errorContainer = document.getElementById(containerId);
                 if(errorContainer) {
                     errorContainer.innerHTML = '<span class="chart-fallback" style="color:red;">Err!</span>';
                 }
            }
        });
        console.log("Fine loop creazione grafici."); // DEBUG
    });
}

// --- FUNZIONE isEntityHot AGGIORNATA (MENO SENSIBILE) ---
function isEntityHot(score1h, score4h, score7d) {
    const s1h = Number(score1h) || 0;
    const s4h = Number(score4h) || 0;
    // Caso base: crescita da zero o quasi zero -> richiede picco più alto
    if (s4h < 1) {
         return s1h > 15; // Era 10
    }
    // Condizioni più restrittive
    // 1. Volume alto (>40) e crescita notevole (>50%)
    if (s1h > 40 && s1h > s4h * 1.5) return true; // Era >30 e >1.3
    // 2. Volume medio (>20) e crescita forte (>80%)
    if (s1h > 20 && s1h > s4h * 1.8) return true; // Era >15 e >1.6
    // 3. Volume basso (>12) ma crescita molto forte (>150%)
    if (s1h > 12 && s1h > s4h * 2.5) return true; // Era >8 e >2.0

    return false; // Se nessuna condizione è soddisfatta
}
// --- FINE FUNZIONE isEntityHot AGGIORNATA ---


// Crea un grafico di tendenza per una entità
function createTrendChart(containerId, dataPoints) {
    const container = document.getElementById(containerId);
    // console.log(`createTrendChart: Trovato container ${containerId}?`, container); // DEBUG (attivare se necessario)
    if (!container) {
        // console.warn(`createTrendChart: Container ${containerId} non trovato.`); // DEBUG (attivare se necessario)
        return;
    }

    container.innerHTML = ''; // Pulisce container
    const canvas = document.createElement('canvas');
    canvas.style.display = 'block'; canvas.style.width = '100%'; canvas.style.height = '100%';
    container.appendChild(canvas);

    const chartContext = canvas.getContext('2d');
    if (!chartContext) {
        console.error(`Impossibile ottenere il contesto 2D per ${containerId}`);
        container.innerHTML = `<span class="chart-fallback">Ctx Err</span>`;
        return;
    }
    // console.log(`createTrendChart: Contesto 2D OK per ${containerId}`); // DEBUG

    try {
        const lineColor = determineTrendColor(dataPoints);
        const gradient = chartContext.createLinearGradient(0, 0, 0, container.clientHeight || 35);
        gradient.addColorStop(0, lineColor + '60'); gradient.addColorStop(1, lineColor + '05');

        // --- Configurazione Chart.js COMPLETA ---
        new Chart(chartContext, {
            type: 'line',
            data: {
                labels: ['7d Avg', '4h Avg', '1h Avg'],
                datasets: [{
                    data: dataPoints,
                    borderColor: lineColor,
                    backgroundColor: gradient,
                    borderWidth: 2,
                    pointRadius: 2.5,
                    pointBackgroundColor: lineColor,
                    pointHoverRadius: 4,
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        enabled: true,
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        titleFont: { size: 10 },
                        bodyFont: { size: 10 },
                        padding: 6,
                        displayColors: false,
                        callbacks: {
                            title: (tooltipItems) => tooltipItems[0].label,
                            label: (context) => `Score: ${context.parsed.y.toFixed(1)}`
                        }
                    }
                },
                scales: {
                    x: { display: false },
                    y: { display: false, beginAtZero: true }
                },
                animation: false, // Disabilita animazioni
                parsing: false,   // Disabilita parsing dati
                // Aggiungi eventuali altre opzioni necessarie qui sotto
                // Esempio: interaction: { mode: 'index', intersect: false }, // Se vuoi tooltip più interattivi
                // Esempio: elements: { point: { hoverRadius: 5 } } // Esempio opzione elementi
            } // Fine blocco options
        }); // Fine new Chart
        // console.log(`createTrendChart: Grafico creato per ${containerId}`); // DEBUG
    } catch (error) {
        console.error(`Errore creazione grafico ${containerId}:`, error);
        container.innerHTML = `<span class="chart-fallback">${dataPoints.map(p => p.toFixed(0)).join('→')}</span>`;
    }
}


// Determina colore della linea in base all'andamento dei punteggi
function determineTrendColor(dataPoints) {
    // dataPoints è [7d, 4h, 1h]
    const score4h = dataPoints[1];
    const score1h = dataPoints[2];
    // Confronta 1h vs 4h per determinare tendenza recente
    if (score1h > score4h * 1.3) { return '#27ae60'; } // verde (crescita > 30%)
    else if (score1h < score4h * 0.7) { return '#e74c3c'; } // rosso (calo > 30%)
    else { return '#f39c12'; } // arancione (stabile o variazione minore)
}

// Calcola l'indicatore di tendenza (freccia/uguale)
function calculateTrendIndicator(score1h, score4h) {
    const s1h = Number(score1h) || 0;
    const s4h = Number(score4h) || 0;

    // Caso base: nessun dato
    if (s1h === 0 && s4h === 0) {
        return '<span class="trend-indicator trend-stable" title="Nessun dato recente"><i class="fas fa-minus"></i></span>';
    }

    const diff = s1h - s4h;
    const absDiff = Math.abs(diff);

    // Calcola variazione percentuale (con cautela per valori bassi)
    let percentChange = 0;
    if (s4h > 0.5) { // Evita divisione per valori vicini a zero
         percentChange = (diff / s4h) * 100;
    } else if (s1h > s4h) { // Se parte da quasi zero e cresce, considera grande aumento
         percentChange = 1000;
    } // Altrimenti (se cala da quasi zero), percentChange rimane 0 o negativo piccolo

    // Stabile se differenza assoluta e percentuale sono piccole
    if (absDiff < 2 && Math.abs(percentChange) < 25) {
        return '<span class="trend-indicator trend-stable" title="Stabile"><i class="fas fa-equals"></i></span>';
    }

    // Altrimenti, mostra freccia in base alla direzione e intensità
    if (diff > 0) { // Incremento
        if (percentChange > 100 || (s4h < 1 && s1h > 5)) { // Aumento molto forte (raddoppio o da zero)
            return '<span class="trend-indicator trend-strong-up" title="Forte aumento"><i class="fas fa-angles-up"></i></span>'; // Doppia freccia su
        } else if (percentChange > 40) { // Aumento medio
            return '<span class="trend-indicator trend-medium-up" title="Aumento"><i class="fas fa-arrow-up"></i></span>';
        } else { // Aumento leggero
            return '<span class="trend-indicator trend-small-up" title="Leggero aumento"><i class="fas fa-arrow-up"></i></span>';
        }
    } else { // Decremento
        if (percentChange < -60) { // Calo molto forte
            return '<span class="trend-indicator trend-strong-down" title="Forte calo"><i class="fas fa-angles-down"></i></span>'; // Doppia freccia giù
        } else if (percentChange < -30) { // Calo medio
            return '<span class="trend-indicator trend-medium-down" title="Calo"><i class="fas fa-arrow-down"></i></span>';
        } else { // Calo leggero
            return '<span class="trend-indicator trend-small-down" title="Leggero calo"><i class="fas fa-arrow-down"></i></span>';
        }
    }
}


// Filtra la tabella in base al testo di ricerca
function filterTable(searchText) {
    const tableBody = document.getElementById('trendsTableBody');
    const rows = tableBody.querySelectorAll('tr');
    const noResultsMessage = document.getElementById('noResultsMessage');
    let visibleCount = 0;

    rows.forEach(row => {
        // Ignora righe non-dati
        if (row.classList.contains('loading-row') || row.classList.contains('no-data-row') || row.classList.contains('error-row')) {
            return;
        }

        const entityText = row.dataset.entity || '';
        const aiEntitiesText = row.dataset.aiEntities || ''; // Legge anche le entità AI dal dataset

        // Cerca il testo nell'entità principale O nelle entità AI
        if (entityText.includes(searchText) || aiEntitiesText.includes(searchText)) {
            row.style.display = ''; // Mostra riga
            visibleCount++;
        } else {
            row.style.display = 'none'; // Nascondi riga
        }
    });

    // Aggiorna numerazione progressiva delle righe visibili
    let currentIndex = 1;
    rows.forEach(row => {
        if (row.classList.contains('loading-row') || row.classList.contains('no-data-row') || row.classList.contains('error-row')) return;
        if (row.style.display !== 'none') {
            const cellIndex = row.querySelector('td:first-child');
            if (cellIndex) cellIndex.textContent = currentIndex++;
        }
    });

    // Mostra/Nascondi messaggio "Nessun risultato"
    if (noResultsMessage) {
        if (visibleCount === 0 && searchText) {
            noResultsMessage.textContent = `Nessun risultato trovato per "${escapeHtml(searchText)}"`;
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
    }
}


// Ordina la tabella in base al criterio selezionato
function sortTable() {
    const sortBy = document.getElementById('sortBy').value;
    const sortOrder = document.getElementById('sortOrder').value;
    const isAsc = sortOrder === 'asc';

    const tableBody = document.getElementById('trendsTableBody');
    // Seleziona solo le righe dati
    const rows = Array.from(tableBody.querySelectorAll('tr:not(.loading-row):not(.no-data-row):not(.error-row)'));

    const noResultsMessage = document.getElementById('noResultsMessage');
    if (noResultsMessage) noResultsMessage.style.display = 'none'; // Nascondi msg durante sort


    // Logica di ordinamento basata sugli attributi data-*
    rows.sort((a, b) => {
        let valueA, valueB;
        // Estrae e converte i valori in numeri per il confronto
        switch (sortBy) {
            case 'discover_score': valueA = parseFloat(a.dataset.discoverScore || 0); valueB = parseFloat(b.dataset.discoverScore || 0); break;
            case 'rank': valueA = parseInt(a.dataset.rank || 0); valueB = parseInt(b.dataset.rank || 0); break;
            case 'score_1h': valueA = parseFloat(a.dataset.score1h || 0); valueB = parseFloat(b.dataset.score1h || 0); break;
            case 'score_4h': valueA = parseFloat(a.dataset.score4h || 0); valueB = parseFloat(b.dataset.score4h || 0); break;
            case 'score_7d': valueA = parseFloat(a.dataset.score7d || 0); valueB = parseFloat(b.dataset.score7d || 0); break;
            default: valueA = parseFloat(a.dataset.discoverScore || 0); valueB = parseFloat(b.dataset.discoverScore || 0); // Fallback
        }
        // Confronta i valori
        if (valueA < valueB) return isAsc ? -1 : 1;
        if (valueA > valueB) return isAsc ? 1 : -1;
        return 0; // Sono uguali
    });

    // Ri-appendi le righe ordinate al tbody
    // Nota: appendChild sposta l'elemento se già presente nel DOM, quindi basta appenderle in ordine
    rows.forEach((row, index) => {
        const cellIndex = row.querySelector('td:first-child');
        if(cellIndex) cellIndex.textContent = index + 1; // Aggiorna numero riga
        tableBody.appendChild(row);
    });

     // Se c'era una ricerca attiva, riapplicala dopo l'ordinamento
     const searchBox = document.getElementById('searchBox');
     if (searchBox && searchBox.value) {
         filterTable(searchBox.value.trim().toLowerCase());
     }
}

// *** IMPORTANTE: Funzione escapeHtml ***
// Usata per prevenire XSS quando si inserisce testo (es. entità) nell'HTML
function escapeHtml(unsafe) {
    // Gestisce null, undefined, numeri, ecc. convertendoli a stringa
    if (unsafe === null || typeof unsafe === 'undefined') {
        return '';
    }
    if (typeof unsafe !== 'string') {
        try {
            unsafe = String(unsafe);
        } catch (e) {
            return ''; // Fallback se la conversione fallisce
        }
    }
    // Effettua l'escape dei caratteri HTML speciali
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }
