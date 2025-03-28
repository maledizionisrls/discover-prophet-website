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
        
        // Verifica se l'entità è "hot" (aumento significativo con buona base)
        const isHot = isEntityHot(item.score_1h, item.score_4h, item.score_7d);
        if (isHot) {
            row.classList.add('hot-trend');
        }
        
        // Determina la classe del badge in base al rank originale
        let rankBadgeClass = '';
        if (item.rank <= 10) rankBadgeClass = 'top-10';
        else if (item.rank <= 25) rankBadgeClass = 'top-25';
        
        // Calcola l'indicatore di tendenza in base alla differenza tra 4h e 1h
        const trendIndicator = calculateTrendIndicator(item.score_1h, item.score_4h);
        
        // Crea il contenuto della riga
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><span class="rank-badge ${rankBadgeClass}">${item.rank}</span></td>
            <td>${item.entity}</td>
            <td class="score">${item.discover_score.toFixed(3)} ${trendIndicator}</td>
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
            createTrendChart(`chart-${index}`, [item.score_7d, item.score_4h, item.score_1h]);
        });
    }, 500);
}

// Verifica se un'entità è "hot" (aumento significativo ma con buona base)
function isEntityHot(score1h, score4h, score7d) {
    // Condizioni per considerare un'entità "hot":
    // 1. Deve avere una base decente (score_7d >= 5)
    // 2. L'aumento da 7d a 1h deve essere almeno del 150%
    // 3. L'aumento da 4h a 1h deve essere almeno del 50%
    return score7d >= 5 && 
           score1h >= score7d * 2.5 && 
           score1h >= score4h * 1.5;
}

// Crea un grafico di tendenza per una entità
function createTrendChart(containerId, dataPoints) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    try {
        // SOLUZIONE: Creare un canvas all'interno del container
        container.innerHTML = ''; // Pulisci il container
        const canvas = document.createElement('canvas');
        // Imposta le dimensioni del canvas per riempire il contenitore
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        container.appendChild(canvas);

        // Ora usa il canvas per il grafico
        const chartContext = canvas.getContext('2d');
        if (!chartContext) {
            throw new Error("Impossibile ottenere il contesto 2D del canvas.");
        }

        // Determina colore della linea in base alla tendenza
        const lineColor = determineTrendColor(dataPoints);
        
        // Crea gradiente per lo sfondo
        const gradient = chartContext.createLinearGradient(0, 0, 0, 40);
        gradient.addColorStop(0, lineColor + '50'); // 50 = 31% opacity
        gradient.addColorStop(1, lineColor + '10'); // 10 = 6% opacity
        
        new Chart(canvas, {
            type: 'line',
            data: {
                labels: ['7d', '4h', '1h'], // Invertito l'ordine per mostrare l'evoluzione temporale
                datasets: [{
                    data: dataPoints, // [7d, 4h, 1h]
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
        console.error(`Errore creazione grafico ${containerId}:`, error);
        // Fallback: mostra i valori come testo
        container.innerHTML = `<span style="font-size:10px; color: #555;">7d: ${dataPoints[0]?.toFixed(1) ?? 'N/A'} → 4h: ${dataPoints[1]?.toFixed(1) ?? 'N/A'} → 1h: ${dataPoints[2]?.toFixed(1) ?? 'N/A'}</span>`;
    }
}

// Determina colore della linea in base all'andamento dei punteggi
function determineTrendColor(dataPoints) {
    // Nota: dataPoints è ora [7d, 4h, 1h]
    const score7d = dataPoints[0];
    const score4h = dataPoints[1];
    const score1h = dataPoints[2];
    
    // Confronta il valore più recente (1h) con quello precedente (4h)
    if (score1h > score4h * 1.2) {
        return '#27ae60'; // verde - tendenza in crescita
    } else if (score1h < score4h * 0.8) {
        return '#e74c3c'; // rosso - tendenza in calo
    } else {
        return '#f39c12'; // arancione - tendenza stabile
    }
}

// Calcola l'indicatore di tendenza basato sulla differenza tra 4h e 1h
function calculateTrendIndicator(score1h, score4h) {
    const diff = score1h - score4h;
    const absDiff = Math.abs(diff);
    
    // Se la differenza è piccola (meno di 2 punti), mostra un segno uguale
    if (absDiff < 2) {
        return '<span class="trend-indicator trend-stable" title="Stabile"><i class="fas fa-equals"></i></span>';
    }
    
    // Se la differenza è significativa, mostra la freccia appropriata
    if (diff > 0) {
        // Differenza positiva (incremento)
        if (absDiff >= 20) {
            // Aumento molto grande
            return '<span class="trend-indicator trend-strong-up" title="Forte aumento"><i class="fas fa-arrow-up"></i></span>';
        } else if (absDiff >= 10) {
            // Aumento medio
            return '<span class="trend-indicator trend-medium-up" title="Aumento medio"><i class="fas fa-arrow-up"></i></span>';
        } else {
            // Aumento piccolo
            return '<span class="trend-indicator trend-small-up" title="Leggero aumento"><i class="fas fa-arrow-up"></i></span>';
        }
    } else {
        // Differenza negativa (decremento)
        if (absDiff >= 20) {
            // Diminuzione molto grande
            return '<span class="trend-indicator trend-strong-down" title="Forte calo"><i class="fas fa-arrow-down"></i></span>';
        } else if (absDiff >= 10) {
            // Diminuzione media
            return '<span class="trend-indicator trend-medium-down" title="Calo medio"><i class="fas fa-arrow-down"></i></span>';
        } else {
            // Diminuzione piccola
            return '<span class="trend-indicator trend-small-down" title="Leggero calo"><i class="fas fa-arrow-down"></i></span>';
        }
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
