// Inizializzazione della dashboard
document.addEventListener('DOMContentLoaded', function() {
    if (typeof trendData === 'undefined' || typeof runMetadata === 'undefined') {
        console.error('Errore critico: file data.js non caricato o vuoto.');
        displayErrorMessage("Errore nel caricamento dei dati (data.js mancante o non valido). Impossibile visualizzare la dashboard.");
        return;
    }
    if (typeof trendData !== 'object' || !Array.isArray(trendData)) {
         console.error('Errore critico: trendData in data.js non è un array valido.');
         displayErrorMessage("Errore nel formato dei dati (trendData non è un array). Impossibile visualizzare la dashboard.");
         return;
     }

    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
    loadMetadata();
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
        // *** Aggiorna colspan a 9 ***
        tableBody.innerHTML = `<tr class="error-row"><td colspan="9" style="text-align: center; padding: 30px; color: red;">${escapeHtml(message)}</td></tr>`;
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
            document.getElementById('topScore').textContent = (runMetadata.top_score || 0).toFixed(1);
            document.getElementById('runtimeMinutes').textContent = (runMetadata.runtime_minutes || 0).toFixed(1) + 'm';
            document.getElementById('proxiesUsed').textContent = runMetadata.pytrends_proxies_used !== undefined ? runMetadata.pytrends_proxies_used : '?'; // Assicurati che la chiave corrisponda a quella in data.js
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
            // Qui potresti aggiungere la gestione di 'runMetadata.saturation_enabled' se lo includi in data.js
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

// Configura gli ascoltatori degli eventi
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
    } catch (error) {
        console.error("Errore durante setupEventListeners:", error);
    }
}

// Renderizza la tabella delle tendenze
function renderTrendsTable(data) {
    const tableBody = document.getElementById('trendsTableBody');
    if (!tableBody) { console.error("Elemento 'trendsTableBody' non trovato."); return; }
    tableBody.innerHTML = '';

    if (!data || data.length === 0) {
         // *** Aggiorna colspan a 9 ***
         tableBody.innerHTML = `<tr class="no-data-row"><td colspan="9">Nessun dato disponibile.</td></tr>`;
         return;
    }

    data.forEach((item, index) => {
        const row = document.createElement('tr');
        row.dataset.entity = String(item.entity || '').toLowerCase();
        row.dataset.rank = String(item.rank || 0);
        row.dataset.discoverScore = String(item.discover_score || 0);
        row.dataset.score1h = String(item.score_1h || 0);
        row.dataset.score4h = String(item.score_4h || 0);
        row.dataset.score7d = String(item.score_7d || 0);
        // *** Aggiungi data attribute per saturation_score ***
        // Salva -1 per errori, altrimenti il valore numerico arrotondato
        row.dataset.saturationScore = String(item.saturation_score === -1.0 ? -1 : Math.round(item.saturation_score || 0));
        row.dataset.aiEntities = String(item.extracted_entities || '').toLowerCase();

        const isHot = isEntityHotOriginal(item.score_1h, item.score_4h, item.score_7d);
        if (isHot) row.classList.add('hot-trend');

        let rankBadgeClass = '';
        if (item.rank <= 10) rankBadgeClass = 'top-10';
        else if (item.rank <= 25) rankBadgeClass = 'top-25';
        const trendIndicator = calculateTrendIndicator(item.score_1h, item.score_4h);
        let entityDisplay = escapeHtml(item.entity || 'N/A');

        let extractedEntitiesHtml = '';
        if (item.extracted_entities && typeof item.extracted_entities === 'string' && item.extracted_entities.trim() !== '') {
            const entitiesCleaned = item.extracted_entities.trim();
            extractedEntitiesHtml = `<div class="extracted-entities">${escapeHtml(entitiesCleaned)}</div>`;
        }

        // *** Formatta il saturation score per la visualizzazione ***
        let saturationDisplay = '-'; // Default per errore (-1) o non definito
        if (item.saturation_score !== undefined && item.saturation_score >= 0) {
            // Formatta come numero intero con separatore migliaia (punto per l'Italia)
            saturationDisplay = Math.round(item.saturation_score).toLocaleString('it-IT');
        }


        // *** Costruzione HTML riga (aggiungi cella per saturazione) ***
        row.innerHTML = `
            <td>${index + 1}</td>                     <td><span class="rank-badge ${rankBadgeClass}">${item.rank || 0}</span></td> <td class="trend-cell">                  <div class="main-entity">${entityDisplay}</div>
                 ${extractedEntitiesHtml}
            </td>
            <td class="score">                       ${(item.discover_score || 0).toFixed(1)} ${trendIndicator}
            </td>
            <td>${(item.score_1h || 0).toFixed(1)}</td> <td>${(item.score_4h || 0).toFixed(1)}</td> <td>${(item.score_7d || 0).toFixed(1)}</td> <td class="saturation-score">${saturationDisplay}</td> <td>                                     <div class="trend-chart-container" id="chart-${index}"></div>
            </td>
        `;
        tableBody.appendChild(row);
    });

    // Creazione grafici
    console.log("Avvio creazione grafici...");
    requestAnimationFrame(() => {
        console.log(`Inizio loop creazione grafici per ${data.length} elementi.`);
        if (typeof Chart === 'undefined') {
            console.error("Chart.js non è caricato!");
            const firstChartContainer = document.getElementById('chart-0');
            if (firstChartContainer) firstChartContainer.innerHTML = '<span class="chart-fallback" style="color:red;">ChartJS Err!</span>';
            return;
        }
        data.forEach((item, index) => {
            const containerId = `chart-${index}`;
            const chartData = [Number(item.score_7d) || 0, Number(item.score_4h) || 0, Number(item.score_1h) || 0];
            try {
                const container = document.getElementById(containerId);
                if(container) {
                    createTrendChart(containerId, chartData);
                }
            } catch (chartError) {
                console.error(`Errore durante la chiamata a createTrendChart per ${containerId}:`, chartError);
                const errorContainer = document.getElementById(containerId);
                if(errorContainer) {
                    errorContainer.innerHTML = '<span class="chart-fallback" style="color:red;">Chart Err!</span>';
                }
            }
        });
        console.log("Fine loop creazione grafici.");
    });
}

// Funzione isEntityHot (ORIGINALE)
function isEntityHotOriginal(score1h, score4h, score7d) {
    const s1h = Number(score1h) || 0; const s4h = Number(score4h) || 0;
    if (s4h === 0) { return s1h > 10; }
    if (s1h > 30 && s1h > s4h * 1.5) return true;
    if (s1h > 15 && s1h > s4h * 2) return true;
    if (s1h > 10 && s1h > s4h * 3) return true;
    return false;
}

// Crea un grafico di tendenza
function createTrendChart(containerId, dataPoints) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    const canvas = document.createElement('canvas');
    canvas.style.display = 'block'; canvas.style.width = '100%'; canvas.style.height = '100%';
    container.appendChild(canvas);
    const chartContext = canvas.getContext('2d');
    if (!chartContext) { console.error(`Ctx 2D non trovato per ${containerId}`); container.innerHTML = `<span class="chart-fallback">Ctx Err</span>`; return; }

    try {
        const lineColor = determineTrendColor(dataPoints);
        const gradient = chartContext.createLinearGradient(0, 0, 0, container.clientHeight || 35);
        gradient.addColorStop(0, lineColor + '60'); gradient.addColorStop(1, lineColor + '05');
        new Chart(chartContext, { type: 'line', data: { labels: ['7d', '4h', '1h'], datasets: [{ data: dataPoints, borderColor: lineColor, backgroundColor: gradient, borderWidth: 2, pointRadius: 3, pointBackgroundColor: lineColor, tension: 0.4, fill: true }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { enabled: true, callbacks: { label: function(context) { return `Score: ${context.parsed.y.toFixed(1)}`; } } } }, scales: { x: { display: false }, y: { display: false, min: 0 } } } });
    } catch (error) {
        console.error(`Errore grafico ${containerId}:`, error);
        container.innerHTML = `<span class="chart-fallback">${dataPoints.map(p => p.toFixed(0)).join('→')}</span>`;
    }
}

// Determina colore della linea
function determineTrendColor(dataPoints) {
    const score4h = dataPoints[1] || 0; const score1h = dataPoints[2] || 0;
    if (score1h > score4h * 1.2) { return '#27ae60'; } // Verde - Crescita
    else if (score1h < score4h * 0.8) { return '#e74c3c'; } // Rosso - Calo
    else { return '#f39c12'; } // Giallo/Arancio - Stabile
}

// Calcola l'indicatore di tendenza
function calculateTrendIndicator(score1h, score4h) {
    const s1h = Number(score1h) || 0; const s4h = Number(score4h) || 0; if (s1h === 0 && s4h === 0) { return '<span class="trend-indicator trend-stable" title="Stabile"><i class="fas fa-equals"></i></span>'; } const diff = s1h - s4h; const percentChange = s4h ? (diff / s4h) * 100 : 0; const absDiff = Math.abs(diff); if ((absDiff < 1 && Math.abs(percentChange) < 20) || Math.abs(percentChange) < 5) { return '<span class="trend-indicator trend-stable" title="Stabile"><i class="fas fa-equals"></i></span>'; } if (diff > 0) { if (percentChange > 100 || (s4h < 1 && s1h > 5)) { return '<span class="trend-indicator trend-strong-up" title="Forte aumento"><i class="fas fa-arrow-up"></i></span>'; } else if (percentChange > 30) { return '<span class="trend-indicator trend-medium-up" title="Aumento medio"><i class="fas fa-arrow-up"></i></span>'; } else { return '<span class="trend-indicator trend-small-up" title="Leggero aumento"><i class="fas fa-arrow-up"></i></span>'; } } else { if (percentChange < -50) { return '<span class="trend-indicator trend-strong-down" title="Forte calo"><i class="fas fa-arrow-down"></i></span>'; } else if (percentChange < -20) { return '<span class="trend-indicator trend-medium-down" title="Calo medio"><i class="fas fa-arrow-down"></i></span>'; } else { return '<span class="trend-indicator trend-small-down" title="Leggero calo"><i class="fas fa-arrow-down"></i></span>'; } }
}

// Filtra la tabella
function filterTable(searchText) {
    const tableBody = document.getElementById('trendsTableBody'); const rows = tableBody.querySelectorAll('tr'); const noResultsMessage = document.getElementById('noResultsMessage'); let visibleCount = 0; const noResultsRow = document.querySelector('.no-results-row'); if (noResultsRow) noResultsRow.remove(); rows.forEach(row => { if (row.classList.contains('loading-row') || row.classList.contains('no-data-row') || row.classList.contains('error-row')) return; const entityText = row.dataset.entity || ''; const aiEntitiesText = row.dataset.aiEntities || ''; if (entityText.includes(searchText) || aiEntitiesText.includes(searchText)) { row.style.display = ''; visibleCount++; } else { row.style.display = 'none'; } }); let currentIndex = 1; rows.forEach(row => { if (row.classList.contains('loading-row') || row.classList.contains('no-data-row') || row.classList.contains('error-row')) return; if (row.style.display !== 'none') { const cellIndex = row.querySelector('td:first-child'); if (cellIndex) cellIndex.textContent = currentIndex++; } }); if (visibleCount === 0 && searchText) { let noResultRowInstance = tableBody.querySelector('.no-results-row'); if (!noResultRowInstance) { noResultRowInstance = document.createElement('tr'); noResultRowInstance.className = 'no-results-row'; // *** Aggiorna colspan a 9 *** noResultRowInstance.innerHTML = `<td colspan="9" style="text-align: center; padding: 20px;">Nessun risultato trovato per "${escapeHtml(searchText)}"</td>`; tableBody.appendChild(noResultRowInstance); } }
}

// Ordina la tabella
function sortTable() {
    const sortBy = document.getElementById('sortBy').value;
    const sortOrder = document.getElementById('sortOrder').value;
    const isAsc = sortOrder === 'asc';
    const tableBody = document.getElementById('trendsTableBody');
    const rows = Array.from(tableBody.querySelectorAll('tr:not(.loading-row):not(.no-data-row):not(.error-row):not(.no-results-row)'));
    const noResultRow = document.querySelector('.no-results-row');
    if (noResultRow) noResultRow.remove();

    rows.sort((a, b) => {
        let valueA, valueB;
        switch (sortBy) {
            case 'discover_score':
                valueA = parseFloat(a.dataset.discoverScore || 0);
                valueB = parseFloat(b.dataset.discoverScore || 0);
                break;
            case 'rank':
                valueA = parseInt(a.dataset.rank || 0);
                valueB = parseInt(b.dataset.rank || 0);
                break;
            // *** NUOVO CASE per saturation_score ***
            case 'saturation_score':
                // Tratta -1 come valore più basso (-Infinity) per l'ordinamento corretto (ASC/DESC)
                valueA = parseFloat(a.dataset.saturationScore === '-1' ? -Infinity : (a.dataset.saturationScore || 0));
                valueB = parseFloat(b.dataset.saturationScore === '-1' ? -Infinity : (b.dataset.saturationScore || 0));
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
            default: // Default a discover_score se il valore non è riconosciuto
                valueA = parseFloat(a.dataset.discoverScore || 0);
                valueB = parseFloat(b.dataset.discoverScore || 0);
        }

        // Logica di ordinamento
        if (valueA < valueB) return isAsc ? -1 : 1;
        if (valueA > valueB) return isAsc ? 1 : -1;
        return 0; // Mantieni ordine originale se i valori sono uguali
    });

    // Riordina le righe nel DOM
    rows.forEach(row => tableBody.appendChild(row));

    // Rinumera le righe visibili
    rows.forEach((row, index) => {
        const cellIndex = row.querySelector('td:first-child');
        if(cellIndex) cellIndex.textContent = index + 1;
    });

    // Riapplica il filtro se presente
    const searchBox = document.getElementById('searchBox');
    if (searchBox && searchBox.value) {
        filterTable(searchBox.value.trim().toLowerCase());
    }
}

// Funzione escapeHtml
function escapeHtml(unsafe) {
     if (unsafe === null || typeof unsafe === 'undefined') return '';
     if (typeof unsafe !== 'string') { try { unsafe = String(unsafe); } catch (e) { return ''; } }
     return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
