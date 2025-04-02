// Inizializzazione della dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Verifica caricamento dati
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

    // Imposta anno corrente nel footer
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // Carica metadati (inclusa la profezia) e tabella principale
    loadMetadata(); // Ora carica anche la profezia
    try {
        renderTrendsTable(trendData);
    } catch (error) {
        console.error("Errore durante renderTrendsTable:", error);
        displayErrorMessage("Si è verificato un errore durante la visualizzazione dei dati della tabella.");
    }

    // Imposta ascoltatori eventi
    setupEventListeners();

    // Rimuovi messaggio "Caricamento..." dalla tabella
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
    // Nasconde controlli e sezione profezia in caso di errore grave sui dati principali
    const controls = document.querySelector('.controls'); if(controls) controls.style.display = 'none';
    const prophecyContainer = document.querySelector('.prophecy-container'); if(prophecyContainer) prophecyContainer.style.display = 'none'; // Nasconde anche profezia
}


// Carica i metadati nell'header E la profezia
function loadMetadata() {
    try {
        if (typeof runMetadata === 'object' && runMetadata !== null) {
            // Aggiorna header info
            document.getElementById('updateTimestamp').textContent = runMetadata.timestamp || 'N/A';
            const openaiStatusEl = document.getElementById('openaiStatus');
            const openaiModelEl = document.getElementById('openaiModel');
            const openaiInfoP = document.querySelector('.openai-info');
            if (openaiStatusEl && openaiModelEl && openaiInfoP) {
                if (runMetadata.openai_enabled) { // Controlla se OpenAI (per entità o sommario) era attivo
                    openaiStatusEl.textContent = 'ATTIVA';
                    openaiStatusEl.style.color = '#27ae60';
                    openaiModelEl.textContent = runMetadata.openai_model || 'N/A'; // Mostra modello base
                    openaiInfoP.style.display = '';
                } else {
                    openaiStatusEl.textContent = 'DISATTIVATA';
                    openaiStatusEl.style.color = '#e74c3c';
                    openaiModelEl.textContent = 'N/A';
                    openaiInfoP.style.display = 'none';
                }
            }

            // *** CARICA E GESTISCI LA PROFEZIA ***
            const prophecyTextEl = document.getElementById('prophecyText');
            const prophecyToggleBtn = document.getElementById('toggleProphecy');
            const prophecyText = runMetadata.prophecy_text || "Nessuna profezia disponibile per oggi."; // Testo di fallback

            if (prophecyTextEl && prophecyToggleBtn) {
                 // Chiama la funzione per impostare testo, troncamento ed evento
                 setupProphecyDisplay(prophecyText, 'prophecyText', 'toggleProphecy', 250, 120); // Limiti desktop/mobile in caratteri
            } else {
                 console.error("Elemento #prophecyText o #toggleProphecy non trovato.");
            }

            // *** RIMOSSE RIGHE PER AGGIORNARE LE VECCHIE STAT CARD ***
            // document.getElementById('trendsCount').textContent = ...
            // document.getElementById('topScore').textContent = ...
            // document.getElementById('runtimeMinutes').textContent = ...
            // document.getElementById('proxiesUsed').textContent = ...

        } else {
            console.error('Dati metadati (runMetadata) non disponibili o non validi.');
            document.getElementById('updateTimestamp').textContent = 'Errore';
            // Nascondi info AI se metadati mancano
            const openaiInfoP = document.querySelector('.openai-info');
            if(openaiInfoP) openaiInfoP.style.display = 'none';
            // Mostra errore anche nella profezia
             const prophecyTextEl = document.getElementById('prophecyText');
             if (prophecyTextEl) prophecyTextEl.textContent = "Errore nel caricamento dei metadati.";
        }
    } catch (error) {
        console.error("Errore durante loadMetadata:", error);
    }
}

// *** NUOVA FUNZIONE: Imposta testo profezia e bottone "Mostra tutto" ***
function setupProphecyDisplay(fullText, textElementId, buttonElementId, desktopCharLimit, mobileCharLimit) {
    const paragraph = document.getElementById(textElementId);
    const button = document.getElementById(buttonElementId);

    if (!paragraph || !button || !fullText) {
        console.warn("Elementi profezia o testo mancanti.");
        if(paragraph) paragraph.textContent = fullText || "Profezia non disponibile."; // Mostra testo se esiste
        return;
    }

    // Pulisce il testo da eventuali spazi multipli o newline iniziali/finali
    const cleanedText = fullText.replace(/\s+/g, ' ').trim();
    paragraph.textContent = cleanedText; // Inizia mostrando tutto

    // Determina limite caratteri in base alla larghezza finestra
    const charLimit = window.innerWidth < 768 ? mobileCharLimit : desktopCharLimit;

    // Verifica se il testo eccede il limite
    if (cleanedText.length > charLimit) {
        // Trova l'ultimo spazio prima del limite per un taglio più pulito
        let cutOff = cleanedText.lastIndexOf(' ', charLimit);
        // Se non trova spazi o lo spazio è troppo all'inizio, taglia al limite
        if (cutOff <= charLimit / 2) {
            cutOff = charLimit;
        }
        const truncatedText = cleanedText.substring(0, cutOff) + '...';

        // Imposta il testo iniziale troncato
        paragraph.textContent = truncatedText;
        // Salva testi completi e troncati negli attributi data-*
        paragraph.dataset.fulltext = cleanedText;
        paragraph.dataset.truncatedtext = truncatedText;
        // Imposta lo stato iniziale
        paragraph.dataset.state = 'truncated';
        // Imposta e mostra il bottone
        button.innerHTML = 'Mostra tutto <i class="fas fa-chevron-down"></i>';
        button.style.display = 'inline-block';

        // Rimuovi eventuali listener precedenti prima di aggiungerne uno nuovo
        button.removeEventListener('click', handleToggleProphecy); // Rimuove se esiste
        button.addEventListener('click', handleToggleProphecy); // Aggiunge nuovo

    } else {
        // Se il testo non eccede, mostra tutto e nascondi il bottone
        paragraph.textContent = cleanedText;
        button.style.display = 'none';
        // Rimuovi eventuali attributi data-* e listener non necessari
        delete paragraph.dataset.fulltext;
        delete paragraph.dataset.truncatedtext;
        delete paragraph.dataset.state;
        button.removeEventListener('click', handleToggleProphecy);
    }
}

// *** NUOVA FUNZIONE: Gestore evento click per bottone Profezia ***
function handleToggleProphecy(event) {
    const button = event.currentTarget; // Il bottone cliccato
    const paragraph = document.getElementById('prophecyText'); // Trova il paragrafo associato

    if (!paragraph || !paragraph.dataset.state) return; // Sicurezza

    const state = paragraph.dataset.state;
    const fullText = paragraph.dataset.fulltext;
    const truncatedText = paragraph.dataset.truncatedtext;

    if (state === 'truncated') {
        // Espandi
        paragraph.textContent = fullText;
        button.innerHTML = 'Mostra meno <i class="fas fa-chevron-up"></i>';
        paragraph.dataset.state = 'expanded';
    } else {
        // Comprimi
        paragraph.textContent = truncatedText;
        button.innerHTML = 'Mostra tutto <i class="fas fa-chevron-down"></i>';
        paragraph.dataset.state = 'truncated';
    }
}


// Configura gli ascoltatori degli eventi (invariato nel contenuto)
function setupEventListeners() {
    try {
        const searchBox = document.getElementById('searchBox');
        if (searchBox) {
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

// Renderizza la tabella delle tendenze (invariato rispetto a versione precedente con saturazione)
function renderTrendsTable(data) {
    const tableBody = document.getElementById('trendsTableBody');
    if (!tableBody) {
        console.error("Elemento 'trendsTableBody' non trovato nel DOM.");
        return;
    }
    tableBody.innerHTML = '';

    if (!data || data.length === 0) {
         tableBody.innerHTML = `<tr class="no-data-row"><td colspan="9" style="text-align: center;">Nessun dato disponibile.</td></tr>`;
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
        row.dataset.saturationScore = String(item.saturation_score === -1.0 ? -1 : Math.round(item.saturation_score || 0));
        row.dataset.aiEntities = String(item.extracted_entities || '').toLowerCase();

        const isHot = isEntityHotOriginal(item.score_1h, item.score_4h, item.score_7d);
        if (isHot) {
            row.classList.add('hot-trend');
        }

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

        let saturationDisplay = '-';
        if (item.saturation_score !== undefined && item.saturation_score >= 0) {
            saturationDisplay = Math.round(item.saturation_score).toLocaleString('it-IT');
        }

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
            <td class="saturation-score">${saturationDisplay}</td>
            <td>
                 <div class="trend-chart-container" id="chart-${index}"></div>
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

// Funzione isEntityHot (invariata)
function isEntityHotOriginal(score1h, score4h, score7d) {
    const s1h = Number(score1h) || 0;
    const s4h = Number(score4h) || 0;
    if (s4h === 0) { return s1h > 10; }
    if (s1h > 30 && s1h > s4h * 1.5) return true;
    if (s1h > 15 && s1h > s4h * 2.0) return true;
    if (s1h > 10 && s1h > s4h * 3.0) return true;
    return false;
}

// Crea un grafico di tendenza (invariata)
function createTrendChart(containerId, dataPoints) {
    const container = document.getElementById(containerId);
    if (!container) { return; }
    container.innerHTML = '';
    const canvas = document.createElement('canvas');
    canvas.style.display = 'block'; canvas.style.width = '100%'; canvas.style.height = '100%';
    container.appendChild(canvas);
    const chartContext = canvas.getContext('2d');
    if (!chartContext) { container.innerHTML = `<span class="chart-fallback">Ctx Err</span>`; return; }
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

// Determina colore della linea (invariata)
function determineTrendColor(dataPoints) {
    const score4h = dataPoints[1] || 0; const score1h = dataPoints[2] || 0;
    if (score1h > score4h * 1.2) { return '#27ae60'; }
    else if (score1h < score4h * 0.8) { return '#e74c3c'; }
    else { return '#f39c12'; }
}

// Calcola l'indicatore di tendenza (invariata)
function calculateTrendIndicator(score1h, score4h) {
    const s1h = Number(score1h) || 0; const s4h = Number(score4h) || 0; if (s1h === 0 && s4h === 0) { return '<span class="trend-indicator trend-stable" title="Stabile"><i class="fas fa-equals"></i></span>'; } const diff = s1h - s4h; const percentChange = s4h !== 0 ? (diff / s4h) * 100 : (s1h > 0 ? Infinity : 0); const absDiff = Math.abs(diff); if ((absDiff < 1 && Math.abs(percentChange) < 20) || Math.abs(percentChange) < 5) { return '<span class="trend-indicator trend-stable" title="Stabile"><i class="fas fa-equals"></i></span>'; } if (diff > 0) { if (percentChange > 100 || percentChange === Infinity || (s4h < 1 && s1h > 5) ) { return '<span class="trend-indicator trend-strong-up" title="Forte aumento"><i class="fas fa-arrow-up"></i></span>'; } else if (percentChange > 30) { return '<span class="trend-indicator trend-medium-up" title="Aumento medio"><i class="fas fa-arrow-up"></i></span>'; } else { return '<span class="trend-indicator trend-small-up" title="Leggero aumento"><i class="fas fa-arrow-up"></i></span>'; } } else { if (percentChange < -50) { return '<span class="trend-indicator trend-strong-down" title="Forte calo"><i class="fas fa-arrow-down"></i></span>'; } else if (percentChange < -20) { return '<span class="trend-indicator trend-medium-down" title="Calo medio"><i class="fas fa-arrow-down"></i></span>'; } else { return '<span class="trend-indicator trend-small-down" title="Leggero calo"><i class="fas fa-arrow-down"></i></span>'; } }
}

// Filtra la tabella (corretto colspan messaggio)
function filterTable(searchText) {
    const tableBody = document.getElementById('trendsTableBody');
    if (!tableBody) return;
    const rows = tableBody.querySelectorAll('tr');
    const noResultsMessage = document.getElementById('noResultsMessage');
    let visibleCount = 0;

    const noResultsRow = tableBody.querySelector('.no-results-row');
    if (noResultsRow) { noResultsRow.remove(); }

    rows.forEach(row => {
        if (row.classList.contains('loading-row') || row.classList.contains('no-data-row') || row.classList.contains('error-row')) return;
        const entityText = row.dataset.entity || '';
        const aiEntitiesText = row.dataset.aiEntities || '';
        if (entityText.includes(searchText) || aiEntitiesText.includes(searchText)) {
            row.style.display = ''; visibleCount++;
        } else {
            row.style.display = 'none';
        }
    });

    let currentIndex = 1;
    rows.forEach(row => {
        if (row.classList.contains('loading-row') || row.classList.contains('no-data-row') || row.classList.contains('error-row')) return;
        if (row.style.display !== 'none') {
            const cellIndex = row.querySelector('td:first-child');
            if (cellIndex) { cellIndex.textContent = currentIndex++; }
        }
    });

    if (visibleCount === 0 && searchText) {
        let noResultRowInstance = tableBody.querySelector('.no-results-row');
        if (!noResultRowInstance) {
             noResultRowInstance = document.createElement('tr');
             noResultRowInstance.className = 'no-results-row';
             // Colspan corretto a 9
             noResultRowInstance.innerHTML = `<td colspan="9" style="text-align: center; padding: 20px;">Nessun risultato trovato per "${escapeHtml(searchText)}"</td>`;
             tableBody.appendChild(noResultRowInstance);
        }
    }
}

// Ordina la tabella (aggiunto case per saturation_score, corretto logica -Infinity)
function sortTable() {
    const sortBy = document.getElementById('sortBy').value;
    const sortOrder = document.getElementById('sortOrder').value;
    const isAsc = sortOrder === 'asc';
    const tableBody = document.getElementById('trendsTableBody');
    if (!tableBody) return;

    const rows = Array.from(tableBody.querySelectorAll('tr:not(.loading-row):not(.no-data-row):not(.error-row):not(.no-results-row)'));
    const noResultRow = tableBody.querySelector('.no-results-row');
    if (noResultRow) { noResultRow.remove(); }

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
            case 'saturation_score':
                 // Assegna -Infinity se il valore è '-1', altrimenti parsa il numero. Gestisce NaN/undefined con 0.
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
            default:
                valueA = parseFloat(a.dataset.discoverScore || 0);
                valueB = parseFloat(b.dataset.discoverScore || 0);
        }

        // Logica di ordinamento standard per numeri (inclusi +/- Infinity)
        if (valueA < valueB) return isAsc ? -1 : 1;
        if (valueA > valueB) return isAsc ? 1 : -1;
        return 0;
    });

    rows.forEach(row => tableBody.appendChild(row));

    rows.forEach((row, index) => {
        const cellIndex = row.querySelector('td:first-child');
        if(cellIndex) { cellIndex.textContent = index + 1; }
    });

    const searchBox = document.getElementById('searchBox');
    if (searchBox && searchBox.value) {
        filterTable(searchBox.value.trim().toLowerCase());
    }
}

// Funzione escapeHtml (invariata)
function escapeHtml(unsafe) {
     if (unsafe === null || typeof unsafe === 'undefined') return '';
     if (typeof unsafe !== 'string') { try { unsafe = String(unsafe); } catch (e) { return ''; } }
     return unsafe.replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&#039;");
}
