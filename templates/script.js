// Inizializzazione della dashboard
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing dashboard...");
    
    // Inizializza anno corrente nel footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Carica i metadati
    loadMetadata();
    
    // Verifica se Chart.js è disponibile
    if (typeof Chart === 'undefined') {
        console.error("Chart.js not found! Charts will not be displayed.");
        document.body.classList.add('no-charts');
    } else {
        console.log("Chart.js found and ready.");
    }
    
    // Carica e visualizza i dati delle tendenze
    if (typeof trendData !== 'undefined' && trendData.length > 0) {
        console.log(`Found ${trendData.length} trend items to display.`);
        renderTrendsTable(trendData);
    } else {
        console.error("No trend data available or trendData is undefined.");
        document.getElementById('trendsTableBody').innerHTML = 
            '<tr><td colspan="8" style="text-align:center">Nessun dato disponibile. Esegui lo script Python per generare i dati.</td></tr>';
    }
    
    // Configura gli ascoltatori per la ricerca e l'ordinamento
    setupEventListeners();
});

// Carica i metadati nella dashboard
function loadMetadata() {
    if (typeof runMetadata !== 'undefined') {
        console.log("Loading metadata:", runMetadata);
        document.getElementById('updateTimestamp').textContent = runMetadata.timestamp;
        document.getElementById('trendsCount').textContent = runMetadata.trends_count;
        document.getElementById('topScore').textContent = runMetadata.top_score.toFixed(2);
        document.getElementById('runtimeMinutes').textContent = runMetadata.runtime_minutes.toFixed(1) + 'm';
        document.getElementById('proxiesUsed').textContent = runMetadata.proxies_used;
    } else {
        console.error('Metadata not available (runMetadata is undefined)');
        document.getElementById('updateTimestamp').textContent = "N/A";
        document.getElementById('trendsCount').textContent = "N/A";
        document.getElementById('topScore').textContent = "N/A";
        document.getElementById('runtimeMinutes').textContent = "N/A";
        document.getElementById('proxiesUsed').textContent = "N/A";
    }
}

// Configura gli ascoltatori degli eventi per la ricerca e l'ordinamento
function setupEventListeners() {
    // Ricerca in tempo reale
    const searchBox = document.getElementById('searchBox');
    if (searchBox) {
        searchBox.addEventListener('input', function() {
            filterTable(this.value.trim().toLowerCase());
        });
    }
    
    // Ordinamento
    const sortBySelect = document.getElementById('sortBy');
    const sortOrderSelect = document.getElementById('sortOrder');
    
    if (sortBySelect) {
        sortBySelect.addEventListener('change', sortTable);
    }
    
    if (sortOrderSelect) {
        sortOrderSelect.addEventListener('change', sortTable);
    }
}

// Renderizza la tabella delle tendenze
function renderTrendsTable(data) {
    const tableBody = document.getElementById('trendsTableBody');
    if (!tableBody) {
        console.error("Table body element not found!");
        return;
    }
    
    tableBody.innerHTML = '';
    
    data.forEach((item, index) => {
        const row = document.createElement('tr');
        row.dataset.entity = item.entity.toLowerCase();
        row.dataset.rank = item.rank;
        row.dataset.discoverScore = item.discover_score;
        row.dataset.score1h = item.score_1h;
        row.dataset.score4h = item.score_4h;
        row.dataset.score7d = item.score_7d;
        
        // Determina la classe del badge in base al rank originale
        let rankBadgeClass = '';
        if (item.rank <= 10) rankBadgeClass = 'top-10';
        else if (item.rank <= 25) rankBadgeClass = 'top-25';
        
        // Calcola l'indicatore di tendenza (in aumento, in calo, stabile)
        const trendIndicator = calculateTrendIndicator(item.score_1h, item.score_4h, item.score_7d);
        
        // Crea il contenuto della riga
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><span class="rank-badge ${rankBadgeClass}">${item.rank}</span></td>
            <td>${item.entity}</td>
            <td class="score">${item.discover_score.toFixed(3)}</td>
            <td>${item.score_1h.toFixed(1)}</td>
            <td>${item.score_4h.toFixed(1)}</td>
            <td>${item.score_7d.toFixed(1)}</td>
            <td>
                <div class="trend-chart-container" id="chart-${index}"></div>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
    
    console.log("Table rows added, now creating charts...");
    
    // Crea i grafici dopo aver aggiunto le righe alla tabella - CON TIMEOUT AUMENTATO
    setTimeout(() => {
        data.forEach((item, index) => {
            try {
                console.log(`Creating chart for index ${index}: ${item.entity}`);
                createTrendChart(`chart-${index}`, [item.score_1h, item.score_4h, item.score_7d]);
            } catch (e) {
                console.error(`Failed to create chart ${index}:`, e);
                // Fallback per i grafici che non si caricano
                const chartContainer = document.getElementById(`chart-${index}`);
                if (chartContainer) {
                    chartContainer.innerHTML = `<div class="chart-fallback">1h: ${item.score_1h.toFixed(1)} | 4h: ${item.score_4h.toFixed(1)} | 7d: ${item.score_7d.toFixed(1)}</div>`;
                }
            }
        });
    }, 500);  // Aumentato da 100 a 500ms
}

// Crea un grafico di tendenza per una entità
function createTrendChart(containerId, dataPoints) {
    const ctx = document.getElementById(containerId);
    if (!ctx) {
        console.error(`Element with id ${containerId} not found`);
        return;
    }
    
    try {
        // Verifica che Chart.js sia disponibile
        if (typeof Chart === 'undefined') {
            throw new Error("Chart.js not available");
        }
        
        // Determina colore della linea in base alla tendenza
        const lineColor = determineTrendColor(dataPoints);
        
        // Crea gradiente per lo sfondo
        const chartContext = ctx.getContext('2d');
        if (!chartContext) {
            throw new Error("Unable to get 2d context from canvas");
        }
        
        const gradient = chartContext.createLinearGradient(0, 0, 0, 40);
        gradient.addColorStop(0, lineColor + '50'); // 50 = 31% opacity
        gradient.addColorStop(1, lineColor + '10'); // 10 = 6% opacity
        
        // Distruggi eventuali grafici esistenti
        if (ctx.chart) {
            ctx.chart.destroy();
        }
        
        // Crea il nuovo grafico
        ctx.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1h', '4h', '7d'],
                datasets: [{
                    data: dataPoints,
                    borderColor: lineColor,
                    backgroundColor: gradient,
                    borderWidth: 2,
                    pointRadius: 3,
                    pointBackgroundColor: lineColor,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: true,
                        callbacks: {
                            label: function(context) {
                                return `Score: ${context.parsed.y.toFixed(1)}`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        display: false,
                        min: 0
                    }
                }
            }
        });
    } catch (error) {
        console.error(`Error creating chart ${containerId}:`, error);
        // Fallback: mostra i valori come testo
        ctx.innerHTML = `<div class="chart-fallback">1h: ${dataPoints[0].toFixed(1)} | 4h: ${dataPoints[1].toFixed(1)} | 7d: ${dataPoints[2].toFixed(1)}</div>`;
    }
}

// Crea gradiente per lo sfondo del grafico
function createGradient(ctx, color) {
    try {
        const chartContext = ctx.getContext('2d');
        const gradient = chartContext.createLinearGradient(0, 0, 0, 40);
        gradient.addColorStop(0, color + '50'); // 50 = 31% opacity
        gradient.addColorStop(1, color + '10'); // 10 = 6% opacity
        return gradient;
    } catch (error) {
        console.error("Error creating gradient:", error);
        return color + '20'; // Fallback - colore con opacità 20%
    }
}

// Determina colore della tendenza in base all'andamento dei punteggi
function determineTrendColor(dataPoints) {
    // Confronta il valore più recente (1h) con quello a medio termine (7d)
    try {
        if (dataPoints[0] > dataPoints[2] * 1.1) {
            return '#27ae60'; // verde - tendenza in crescita
        } else if (dataPoints[0] < dataPoints[2] * 0.9) {
            return '#e74c3c'; // rosso - tendenza in calo
        } else {
            return '#f39c12'; // arancione - tendenza stabile
        }
    } catch (error) {
        console.error("Error determining trend color:", error);
        return '#3498db'; // fallback - blu
    }
}

// Calcola l'indicatore di tendenza
function calculateTrendIndicator(score1h, score4h, score7d) {
    try {
        if (score1h > score7d * 1.2) {
            return '<span class="trend-indicator trend-up"><i class="fas fa-arrow-up"></i></span>';
        } else if (score1h < score7d * 0.8) {
            return '<span class="trend-indicator trend-down"><i class="fas fa-arrow-down"></i></span>';
        } else {
            return '<span class="trend-indicator trend-neutral"><i class="fas fa-arrow-right"></i></span>';
        }
    } catch (error) {
        console.error("Error calculating trend indicator:", error);
        return '<span class="trend-indicator"><i class="fas fa-minus"></i></span>';
    }
}

// Filtra la tabella in base al testo di ricerca
function filterTable(searchText) {
    try {
        const rows = document.querySelectorAll('#trendsTableBody tr');
        let visibleCount = 0;
        
        rows.forEach(row => {
            const entity = row.dataset.entity || '';
            if (entity.includes(searchText)) {
                row.classList.remove('hidden-row');
                visibleCount++;
            } else {
                row.classList.add('hidden-row');
            }
        });
        
        console.log(`Filter applied: ${visibleCount}/${rows.length} rows visible`);
    } catch (error) {
        console.error("Error filtering table:", error);
    }
}

// Ordina la tabella in base al criterio selezionato
function sortTable() {
    try {
        const sortBy = document.getElementById('sortBy').value;
        const sortOrder = document.getElementById('sortOrder').value;
        const isAsc = sortOrder === 'asc';
        
        const tableBody = document.getElementById('trendsTableBody');
        const rows = Array.from(tableBody.querySelectorAll('tr'));
        
        // Ordina le righe
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
            
            return isAsc ? valueA - valueB : valueB - valueA;
        });
        
        // Rimuovi le righe esistenti
        while (tableBody.firstChild) {
            tableBody.removeChild(tableBody.firstChild);
        }
        
        // Aggiungi le righe riordinate
        rows.forEach((row, index) => {
            // Aggiorna il numero d'ordine
            if (row.cells && row.cells[0]) {
                row.cells[0].textContent = index + 1;
            }
            tableBody.appendChild(row);
        });
        
        console.log(`Table sorted by ${sortBy} in ${sortOrder} order`);
    } catch (error) {
        console.error("Error sorting table:", error);
    }
}
