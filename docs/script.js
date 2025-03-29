// Inizializzazione della dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Verifica caricamento dati prima di procedere
    if (typeof trendData === 'undefined' || typeof runMetadata === 'undefined') {
        console.error('Errore critico: file data.js non caricato o vuoto.');
        displayErrorMessage("Errore nel caricamento dei dati (data.js mancante o non valido). Impossibile visualizzare la dashboard.");
        return; // Interrompi esecuzione se i dati mancano
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

// Configura gli ascoltatori degli eventi (SENZA toggle AI)
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

        // RIMOSSO event listener per '.toggle-ai-btn'

    } catch (error) {
        console.error("Errore durante setupEventListeners:", error);
    }
}

// Renderizza la tabella delle tendenze (SENZA bottone toggle)
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

        // Logica HOT (versione originale, meno restrittiva)
        const isHot = isEntityHotOriginal(item.score_1h, item.score_4h, item.score_7d); // Usa funzione originale
        if (isHot) row.classList.add('hot-trend');

        // Badge Rank
        let rankBadgeClass = '';
        if (item.rank <= 10) rankBadgeClass = 'top-10';
        else if (item.rank <= 25) rankBadgeClass = 'top-25';
        // Indicatore Trend
        const trendIndicator = calculateTrendIndicator(item.score_1h, item.score_4h);
        // Entità principale
        let entityDisplay = escapeHtml(item.entity || 'N/A');

        // --- LOGICA SEMPLIFICATA PER extracted_entities ---
        let extractedEntitiesHtml = '';
        if (item.extracted_entities && typeof item.extracted_entities === 'string' && item.extracted_entities.trim() !== '') {
             const entitiesCleaned = item.extracted_entities.trim();
             // Crea semplicemente il div, senza classi 'collapsible' o 'visible'
             extractedEntitiesHtml = `<div class="extracted-entities" title="Entità suggerite da AI">${escapeHtml(entitiesCleaned)}</div>`;
        }
        // --- FINE LOGICA SEMPLIFICATA ---

        // Costruzione HTML riga (SENZA .main-entity-container e toggleButtonHtml)
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><span class="rank-badge ${rankBadgeClass}">${item.rank || 0}</span></td>
            <td class="trend-cell">
                 <div class="main-entity">${entityDisplay}</div>
                 ${extractedEntitiesHtml} </td>
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

    // Creazione grafici (assicurati che questa parte sia corretta)
    console.log("Avvio creazione grafici...");
    requestAnimationFrame(() => {
        console.log(`Inizio loop creazione grafici per ${data.length} elementi.`);
        if (typeof Chart === 'undefined') {
             console.error("Chart.js non è caricato!"); // Verifica caricamento libreria
             return;
        }
        data.forEach((item, index) => {
            const containerId = `chart-${index}`;
            const chartData = [Number(item.score_7d) || 0, Number(item.score_4h) || 0, Number(item.score_1h) || 0];
             try {
                 const container = document.getElementById(containerId);
                 if(container) { // Controlla se il container esiste
                    createTrendChart(containerId, chartData);
                 } else {
                    // Non stampare warning per ogni grafico su mobile dove la colonna è nascosta
                    // console.warn(`Container ${containerId} non trovato nel DOM.`);
                 }
            } catch (chartError) {
                 console.error(`Errore durante la chiamata a createTrendChart per ${containerId}:`, chartError);
                 const errorContainer = document.getElementById(containerId);
                 if(errorContainer) {
                     errorContainer.innerHTML = '<span class="chart-fallback" style="color:red;">Err!</span>';
                 }
            }
        });
        console.log("Fine loop creazione grafici.");
    });
}

// --- FUNZIONE isEntityHot RIPRISTINATA (VERSIONE ORIGINALE MENO RESTRITTIVA) ---
function isEntityHotOriginal(score1h, score4h, score7d) {
    const s1h = Number(score1h) || 0;
    const s4h = Number(score4h) || 0;
    if (s4h === 0) { return s1h > 10; } // Soglia originale
    // Condizioni originali
    if (s1h > 30 && s1h > s4h * 1.3) return true;
    if (s1h > 15 && s1h > s4h * 1.6) return true;
    if (s1h > 8 && s1h > s4h * 2.0) return true;
    return false;
}
// --- FINE FUNZIONE isEntityHot RIPRISTINATA ---


// Crea un grafico di tendenza per una entità
function createTrendChart(containerId, dataPoints) {
    const container = document.getElementById(containerId);
    if (!container) return;

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

    try {
        const lineColor = determineTrendColor(dataPoints);
        const gradient = chartContext.createLinearGradient(0, 0, 0, container.clientHeight || 35);
        gradient.addColorStop(0, lineColor + '60'); gradient.addColorStop(1, lineColor + '05');

        // Configurazione Chart.js COMPLETA e CORRETTA
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
                parsing: false   // Disabilita parsing dati
            } // Fine options
        }); // Fine new Chart
    } catch (error) {
        console.error(`Errore creazione grafico ${containerId}:`, error);
        container.innerHTML = `<span class="chart-fallback">${dataPoints.map(p => p.toFixed(0)).join('→')}</span>`;
    }
}


// Determina colore della linea
function determineTrendColor(dataPoints) {
    const score4h = dataPoints[1]; const score1h = dataPoints[2];
    if (score1h > score4h * 1.3) return '#27ae60';
    else if (score1h < score4h * 0.7) return '#e74c3c';
    else return '#f39c12';
}

// Calcola l'indicatore di tendenza
function calculateTrendIndicator(score1h, score4h) {
    const s1h = Number(score1h) || 0; const s4h = Number(score4h) || 0;
    if (s1h === 0 && s4h === 0) return '<span class="trend-indicator trend-stable" title="Nessun dato recente"><i class="fas fa-minus"></i></span>';
    const diff = s1h - s4h; const absDiff = Math.abs(diff); let percentChange = 0;
    if (s4h > 0.5) percentChange = (diff / s4h) * 100; else if (s1h > s4h) percentChange = 1000;
    if (absDiff < 2 && Math.abs(percentChange) < 25) return '<span class="trend-indicator trend-stable" title="Stabile"><i class="fas fa-equals"></i></span>';
    if (diff > 0) { if (percentChange > 100 || (s4h < 1 && s1h > 5)) return '<span class="trend-indicator trend-strong-up" title="Forte aumento"><i class="fas fa-angles-up"></i></span>'; else if (percentChange > 40) return '<span class="trend-indicator trend-medium-up" title="Aumento"><i class="fas fa-arrow-up"></i></span>'; else return '<span class="trend-indicator trend-small-up" title="Leggero aumento"><i class="fas fa-arrow-up"></i></span>';
    } else { if (percentChange < -60) return '<span class="trend-indicator trend-strong-down" title="Forte calo"><i class="fas fa-angles-down"></i></span>'; else if (percentChange < -30) return '<span class="trend-indicator trend-medium-down" title="Calo"><i class="fas fa-arrow-down"></i></span>'; else return '<span class="trend-indicator trend-small-down" title="Leggero calo"><i class="fas fa-arrow-down"></i></span>'; }
}


// Filtra la tabella
function filterTable(searchText) {
    const tableBody = document.getElementById('trendsTableBody'); const rows = tableBody.querySelectorAll('tr'); const noResultsMessage = document.getElementById('noResultsMessage'); let visibleCount = 0;
    rows.forEach(row => { if (row.classList.contains('loading-row') || row.classList.contains('no-data-row') || row.classList.contains('error-row')) return; const entityText = row.dataset.entity || ''; const aiEntitiesText = row.dataset.aiEntities || ''; if (entityText.includes(searchText) || aiEntitiesText.includes(searchText)) { row.style.display = ''; visibleCount++; } else { row.style.display = 'none'; } }); let currentIndex = 1; rows.forEach(row => { if (row.classList.contains('loading-row') || row.classList.contains('no-data-row') || row.classList.contains('error-row')) return; if (row.style.display !== 'none') { const cellIndex = row.querySelector('td:first-child'); if (cellIndex) cellIndex.textContent = currentIndex++; } }); if (noResultsMessage) { if (visibleCount === 0 && searchText) { noResultsMessage.textContent = `Nessun risultato trovato per "${escapeHtml(searchText)}"`; noResultsMessage.style.display = 'block'; } else { noResultsMessage.style.display = 'none'; } }
}


// Ordina la tabella
function sortTable() {
    const sortBy = document.getElementById('sortBy').value; const sortOrder = document.getElementById('sortOrder').value; const isAsc = sortOrder === 'asc'; const tableBody = document.getElementById('trendsTableBody'); const rows = Array.from(tableBody.querySelectorAll('tr:not(.loading-row):not(.no-data-row):not(.error-row)')); const noResultsMessage = document.getElementById('noResultsMessage'); if (noResultsMessage) noResultsMessage.style.display = 'none'; rows.sort((a, b) => { let valueA, valueB; switch (sortBy) { case 'discover_score': valueA = parseFloat(a.dataset.discoverScore || 0); valueB = parseFloat(b.dataset.discoverScore || 0); break; case 'rank': valueA = parseInt(a.dataset.rank || 0); valueB = parseInt(b.dataset.rank || 0); break; case 'score_1h': valueA = parseFloat(a.dataset.score1h || 0); valueB = parseFloat(b.dataset.score1h || 0); break; case 'score_4h': valueA = parseFloat(a.dataset.score4h || 0); valueB = parseFloat(b.dataset.score4h || 0); break; case 'score_7d': valueA = parseFloat(a.dataset.score7d || 0); valueB = parseFloat(b.dataset.score7d || 0); break; default: valueA = parseFloat(a.dataset.discoverScore || 0); valueB = parseFloat(b.dataset.discoverScore || 0); } if (valueA < valueB) return isAsc ? -1 : 1; if (valueA > valueB) return isAsc ? 1 : -1; return 0; }); rows.forEach(row => tableBody.appendChild(row)); rows.forEach((row, index) => { const cellIndex = row.querySelector('td:first-child'); if(cellIndex) cellIndex.textContent = index + 1; }); const searchBox = document.getElementById('searchBox'); if (searchBox && searchBox.value) { filterTable(searchBox.value.trim().toLowerCase()); }
}

// Funzione escapeHtml
function escapeHtml(unsafe) {
    if (unsafe === null || typeof unsafe === 'undefined') return '';
    if (typeof unsafe !== 'string') { try { unsafe = String(unsafe); } catch (e) { return ''; } }
    return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
 }
