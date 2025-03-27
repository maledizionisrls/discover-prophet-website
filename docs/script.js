// Inizializzazione della dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Inizializza anno corrente nel footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Carica i metadati
    loadMetadata();
    
    // Carica e visualizza i dati delle tendenze
    renderTrendsTable(trendData);
    
    // Configura gli ascoltatori per la ricerca e l'ordinamento
    setupEventListeners();
});

// Carica i metadati nella dashboard
function loadMetadata() {
    if (typeof runMetadata !== 'undefined') {
        document.getElementById('updateTimestamp').textContent = runMetadata.timestamp;
        document.getElementById('trendsCount').textContent = runMetadata.trends_count;
        document.getElementById('topScore').textContent = runMetadata.top_score.toFixed(2);
        document.getElementById('runtimeMinutes').textContent = runMetadata.runtime_minutes.toFixed(1) + 'm';
        document.getElementById('proxiesUsed').textContent = runMetadata.proxies_used;
    } else {
        console.error('Dati dei metadati non disponibili');
    }
}

// Configura gli ascoltatori degli eventi per la ricerca e l'ordinamento
function setupEventListeners() {
    // Ricerca in tempo reale
    document.getElementById('searchBox').addEventListener('input', function() {
        filterTable(this.value.trim().toLowerCase());
    });
    
    // Ordinamento
    document.getElementById('sortBy').addEventListener('change', sortTable);
    document.getElementById('sortOrder').addEventListener('change', sortTable);
}

// Renderizza la tabella delle tendenze
function renderTrendsTable(data) {
    const tableBody = document.getElementById('trendsTableBody');
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
    
    // Crea i grafici dopo aver aggiunto le righe alla tabella
    setTimeout(() => {
        data.forEach((item, index) => {
            createTrendChart(`chart-${index}`, [item.score_1h, item.score_4h, item.score_7d]);
        });
    }, 100);
}

// Crea un grafico di tendenza per una entità
function createTrendChart(containerId, dataPoints) {
    const ctx = document.getElementById(containerId);
    if (!ctx) return;
    
    // Determina colore della linea in base alla tendenza
    const lineColor = determineTrendColor(dataPoints);
    
    // Crea gradiente per lo sfondo
    const gradient = createGradient(ctx, lineColor);
    
    new Chart(ctx, {
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
}

// Crea gradiente per lo sfondo del grafico
function createGradient(ctx, color) {
    const chartContext = ctx.getContext('2d');
    const gradient = chartContext.createLinearGradient(0, 0, 0, 40);
    gradient.addColorStop(0, color + '50'); // 50 = 31% opacity
    gradient.addColorStop(1, color + '10'); // 10 = 6% opacity
    return gradient;
}

// Determina colore della tendenza in base all'andamento dei punteggi
function determineTrendColor(dataPoints) {
    // Confronta il valore più recente (1h) con quello a medio termine (7d)
    if (dataPoints[0] > dataPoints[2] * 1.1) {
        return '#27ae60'; // verde - tendenza in crescita
    } else if (dataPoints[0] < dataPoints[2] * 0.9) {
        return '#e74c3c'; // rosso - tendenza in calo
    } else {
        return '#f39c12'; // arancione - tendenza stabile
    }
}

// Calcola l'indicatore di tendenza
function calculateTrendIndicator(score1h, score4h, score7d) {
    if (score1h > score7d * 1.2) {
        return '<span class="trend-indicator trend-up"><i class="fas fa-arrow-up"></i></span>';
    } else if (score1h < score7d * 0.8) {
        return '<span class="trend-indicator trend-down"><i class="fas fa-arrow-down"></i></span>';
    } else {
        return '<span class="trend-indicator trend-neutral"><i class="fas fa-arrow-right"></i></span>';
    }
}

// Filtra la tabella in base al testo di ricerca
function filterTable(searchText) {
    const rows = document.querySelectorAll('#trendsTableBody tr');
    
    rows.forEach(row => {
        const entity = row.dataset.entity;
        if (entity.includes(searchText)) {
            row.classList.remove('hidden-row');
        } else {
            row.classList.add('hidden-row');
        }
    });
}

// Ordina la tabella in base al criterio selezionato
function sortTable() {
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
                valueA = parseFloat(a.dataset.discoverScore);
                valueB = parseFloat(b.dataset.discoverScore);
                break;
            case 'rank':
                valueA = parseInt(a.dataset.rank);
                valueB = parseInt(b.dataset.rank);
                break;
            case 'score_1h':
                valueA = parseFloat(a.dataset.score1h);
                valueB = parseFloat(b.dataset.score1h);
                break;
            case 'score_4h':
                valueA = parseFloat(a.dataset.score4h);
                valueB = parseFloat(b.dataset.score4h);
                break;
            case 'score_7d':
                valueA = parseFloat(a.dataset.score7d);
                valueB = parseFloat(b.dataset.score7d);
                break;
            default:
                valueA = parseFloat(a.dataset.discoverScore);
                valueB = parseFloat(b.dataset.discoverScore);
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
        row.cells[0].textContent = index + 1;
        tableBody.appendChild(row);
    });
}