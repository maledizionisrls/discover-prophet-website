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

    // Carica i metadati
    loadMetadata();

    // Carica e visualizza i dati delle tendenze
    renderTrendsTable(trendData); // Usa i dati da data.js

    // Configura gli ascoltatori per la ricerca e l'ordinamento
    setupEventListeners();

    // Rimuovi messaggio di caricamento iniziale (se presente)
    const loadingRow = document.querySelector('.loading-row');
    if (loadingRow) {
        loadingRow.remove();
    }
});

// Mostra un messaggio di errore generale nella tabella
function displayErrorMessage(message) {
    const tableBody = document.getElementById('trendsTableBody');
    if(tableBody) {
        // Sostituisce l'intero contenuto della tabella con il messaggio di errore
        tableBody.innerHTML = `<tr class="error-row"><td colspan="8" style="text-align: center; padding: 30px; color: red;">${escapeHtml(message)}</td></tr>`;
    }
    // Nascondi altri elementi se necessario
    const controls = document.querySelector('.controls');
    if(controls) controls.style.display = 'none';
    const stats = document.querySelector('.stats-container');
    if(stats) stats.style.display = 'none';
}

// Carica i metadati nella dashboard
function loadMetadata() {
    // Verifica che runMetadata esista e sia un oggetto
    if (typeof runMetadata === 'object' && runMetadata !== null) {
        document.getElementById('updateTimestamp').textContent = runMetadata.timestamp || 'N/A';
        document.getElementById('trendsCount').textContent = runMetadata.trends_count !== undefined ? runMetadata.trends_count : '?';
        document.getElementById('topScore').textContent = (runMetadata.top_score || 0).toFixed(2);
        document.getElementById('runtimeMinutes').textContent = (runMetadata.runtime_minutes || 0).toFixed(1) + 'm';
        document.getElementById('proxiesUsed').textContent = runMetadata.proxies_used !== undefined ? runMetadata.proxies_used : '?';

        // Info OpenAI
        const openaiStatusEl = document.getElementById('openaiStatus');
        const openaiModelEl = document.getElementById('openaiModel');
        const openaiInfoP = document.querySelector('.openai-info');

        if (openaiStatusEl && openaiModelEl && openaiInfoP) {
            if (runMetadata.openai_enabled) {
                openaiStatusEl.textContent = 'ATTIVA';
                openaiStatusEl.style.color = '#27ae60'; // Verde
                openaiModelEl.textContent = runMetadata.openai_model || 'N/A';
                openaiInfoP.style.display = ''; // Assicura sia visibile
            } else {
                openaiStatusEl.textContent = 'DISATTIVATA';
                openaiStatusEl.style.color = '#e74c3c'; // Rosso
                openaiModelEl.textContent = 'N/A';
                openaiInfoP.style.display = 'none'; // Nascondi se disattivato
            }
        }

    } else {
        console.error('Dati metadati (runMetadata) non disponibili o non validi in data.js');
        // Imposta valori di fallback visibili all'utente
        document.getElementById('updateTimestamp').textContent = 'Errore';
        document.getElementById('trendsCount').textContent = 'Errore';
        document.getElementById('topScore').textContent = 'Errore';
        document.getElementById('runtimeMinutes').textContent = 'Errore';
        document.getElementById('proxiesUsed').textContent = 'Errore';
        const openaiInfoP = document.querySelector('.openai-info');
        if(openaiInfoP) openaiInfoP.style.display = 'none';
    }
}

// Configura gli ascoltatori degli eventi per la ricerca e l'ordinamento
function setupEventListeners() {
    const searchBox = document.getElementById('searchBox');
    if (searchBox) {
        searchBox.addEventListener('input', function() {
            filterTable(this.value.trim().toLowerCase());
        });
    }

    const sortBy = document.getElementById('sortBy');
    const sortOrder = document.getElementById('sortOrder');
    if (sortBy) sortBy.addEventListener('change', sortTable);
    if (sortOrder) sortOrder.addEventListener('change', sortTable);
}

// Renderizza la tabella delle tendenze
function renderTrendsTable(data) {
    const tableBody = document.getElementById('trendsTableBody');
    if (!tableBody) {
        console.error("Elemento 'trendsTableBody' non trovato nel DOM.");
        return;
    }
    tableBody.innerHTML = ''; // Pulisci prima di renderizzare

    if (!data || data.length === 0) {
         tableBody.innerHTML = `<tr class="no-data-row"><td colspan="8" style="text-align: center; padding: 30px;">Nessun dato di tendenza disponibile.</td></tr>`;
         return;
    }

    // Itera sui dati e crea le righe della tabella
    data.forEach((item, index) => {
        const row = document.createElement('tr');

        // Popola gli attributi data-* per ordinamento/filtro
        row.dataset.entity = String(item.entity || '').toLowerCase();
        row.dataset.rank = String(item.rank || 0);
        row.dataset.discoverScore = String(item.discover_score || 0);
        row.dataset.score1h = String(item.score_1h || 0);
        row.dataset.score4h = String(item.score_4h || 0);
        row.dataset.score7d = String(item.score_7d || 0);
        row.dataset.aiEntities = String(item.extracted_entities || '').toLowerCase();

        // Applica classe 'hot-trend' se necessario
        const isHot = isEntityHot(item.score_1h, item.score_4h, item.score_7d);
        if (isHot) {
            row.classList.add('hot-trend');
        }

        // Determina classe badge rank
        let rankBadgeClass = '';
        if (item.rank <= 10) rankBadgeClass = 'top-10';
        else if (item.rank <= 25) rankBadgeClass = 'top-25';

        // Calcola indicatore freccia
        const trendIndicator = calculateTrendIndicator(item.score_1h, item.score_4h);

        // Prepara visualizzazione entità principale (con fallback e escape)
        let entityDisplay = escapeHtml(item.entity || 'N/A');

        // --- LOGICA PER VISUALIZZARE extracted_entities ---
        let extractedEntitiesHtml = '';
        // Controlla che esista, sia stringa non vuota
        if (item.extracted_entities && typeof item.extracted_entities === 'string' && item.extracted_entities.trim() !== '') {
             const entitiesCleaned = item.extracted_entities.trim();
             // Crea il div con la classe corretta, applicando escapeHtml al contenuto
             extractedEntitiesHtml = `<div class="extracted-entities" title="Entità suggerite da AI">${escapeHtml(entitiesCleaned)}</div>`;
        }
        // --- FINE LOGICA ---

        // Costruisce l'HTML interno della riga
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
        // Aggiunge la riga completa al corpo della tabella
        tableBody.appendChild(row);
    });

    // Crea i grafici DOPO che tutte le righe sono state aggiunte al DOM
    requestAnimationFrame(() => {
        data.forEach((item, index) => {
            createTrendChart(
                `chart-${index}`,
                [Number(item.score_7d) || 0, Number(item.score_4h) || 0, Number(item.score_1h) || 0]
            );
        });
    });
}

// Verifica se un'entità è "hot"
function isEntityHot(score1h, score4h, score7d) {
    const s1h = Number(score1h) || 0;
    const s4h = Number(score4h) || 0;
    if (s4h === 0) { return s1h > 10; } // Soglia se parte da zero
    // Condizioni per essere 'hot'
    if (s1h > 30 && s1h > s4h * 1.3) return true;
    if (s1h > 15 && s1h > s4h * 1.6) return true;
    if (s1h > 8 && s1h > s4h * 2.0) return true;
    return false;
}


// Crea un grafico di tendenza per una entità
function createTrendChart(containerId, dataPoints) {
    const container = document.getElementById(containerId);
    if (!container) return; // Esce se il container non esiste

    container.innerHTML = ''; // Pulisce container
    const canvas = document.createElement('canvas');
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    container.appendChild(canvas);

    const chartContext = canvas.getContext('2d');
    if (!chartContext) {
        console.error(`Impossibile ottenere il contesto 2D per ${containerId}`);
        container.innerHTML = `<span class="chart-fallback">N/A</span>`; // Fallback
        return;
    }

    try {
        const lineColor = determineTrendColor(dataPoints);
        // Crea gradiente usando l'altezza effettiva del container se possibile
        const gradient = chartContext.createLinearGradient(0, 0, 0, container.clientHeight || 35);
        gradient.addColorStop(0, lineColor + '60'); // Opacità alta all'inizio
        gradient.addColorStop(1, lineColor + '05'); // Opacità bassa alla fine

        // Crea il grafico usando Chart.js
        new Chart(chartContext, {
            type: 'line',
            data: {
                labels: ['7d Avg', '4h Avg', '1h Avg'], // Etichette per tooltip
                datasets: [{
                    data: dataPoints, // Dati [7d, 4h, 1h]
                    borderColor: lineColor,
                    backgroundColor: gradient, // Usa il gradiente come sfondo
                    borderWidth: 2,            // Spessore linea
                    pointRadius: 2.5,          // Dimensione punti
                    pointBackgroundColor: lineColor,
                    pointHoverRadius: 4,       // Dimensione punti su hover
                    tension: 0.3,              // Curvatura linea
                    fill: true                 // Riempie area sotto la linea
                }]
            },
            options: {
                responsive: true,           // Adatta grafico al container
                maintainAspectRatio: false, // Permette al grafico di usare l'altezza definita dal CSS
                plugins: {
                    legend: { display: false }, // Nasconde legenda
                    tooltip: {                  // Configura tooltip
                        enabled: true,
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        titleFont: { size: 10 },
                        bodyFont: { size: 10 },
                        padding: 6,
                        displayColors: false, // Nasconde quadratino colore nel tooltip
                        callbacks: {
                            // Mostra etichetta (es. '4h Avg') come titolo
                            title: (tooltipItems) => tooltipItems[0].label,
                            // Mostra lo score nel corpo
                            label: (context) => `Score: ${context.parsed.y.toFixed(1)}`
                        }
                    }
                },
                scales: { // Configurazione assi
                    x: { display: false }, // Nasconde asse X
                    y: { display: false, beginAtZero: true } // Nasconde asse Y, parte da 0
                },
                animation: false, // Disabilita animazioni per performance
                parsing: false,   // Dati già nel formato corretto, disabilita parsing Chart.js
            }
        });
    } catch (error) {
        console.error(`Errore creazione grafico ${containerId}:`, error);
        // Fallback in caso di errore Chart.js
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
    rows.forEach((row, index) => {
        const cellIndex = row.querySelector('td:first-child');
        if(cellIndex) cellIndex.textContent = index + 1; // Aggiorna numero riga
        tableBody.appendChild(row); // Append riordina automaticamente
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
