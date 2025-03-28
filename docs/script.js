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
        console.error('Dati metadati non disponibili');
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
        const isSuperHot = isSuperHotEntity(item.score_1h, item.score_4h, item.score_7d);
        
        if (isHot) {
            row.classList.add('hot-trend');
            // Per trend particolarmente esplosivi aggiungiamo una classe extra
            if (isSuperHot) {
                row.classList.add('super-hot-trend');
            }
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
            <td class="score">
                ${item.discover_score.toFixed(3)} ${trendIndicator}
                ${isHot ? '<span class="hot-badge"><i class="fas fa-fire"></i>HOT</span>' : ''}
            </td>
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
    }, 100);
}

// Verifica se un'entità è "hot" (aumento significativo ma con buona base)
function isEntityHot(score1h, score4h, score7d) {
    // Un trend è considerato "hot" se:
    
    // Caso 1: Volumi molto alti (esplosione immediata)
    if (score1h > 30 && score1h > score4h * 2) {
        return true;
    }
    
    // Caso 2: Crescita sostenuta con base decente
    if (score1h > 15 && 
        score1h > score4h * 1.8 && 
        score1h > score7d * 1.5) {
        return true;
    }
    
    // Caso 3: Trend emergente con accelerazione
    if (score1h > 10 && 
        score4h > 5 &&
        score1h > score4h * 1.5 && 
        score4h > score7d * 1.5) {
        return true;
    }
    
    return false;
}

// Verifica se un'entità è "super-hot" (trend particolarmente esplosivo)
function isSuperHotEntity(score1h, score4h, score7d) {
    // Per aggiungere fiamme più intense (super-hot)
    // deve avere un punteggio 1h estremamente alto rispetto ai precedenti
    return score1h > 50 && (score1h > score4h * 3 || score1h > score7d * 4);
}

// Crea un grafico di tendenza per una entità
function createTrendChart(containerId, dataPoints) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    try {
        // Crea un canvas all'interno del container
        container.innerHTML = ''; // Pulisci il container
        const canvas = document.createElement('canvas');
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        container.appendChild(canvas);

        // Usa il canvas per il grafico
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
    // Nota: dataPoints è [7d, 4h, 1h]
    const score7d = dataPoints[0] || 0;
    const score4h = dataPoints[1] || 0;
    const score1h = dataPoints[2] || 0;
    
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
    if (score1h === 0 && score4h === 0) {
        return '<span class="trend-indicator trend-stable" title="Stabile"><i class="fas fa-equals"></i></span>';
    }
    
    const diff = score1h - score4h;
    const percentChange = score4h ? (diff / score4h) * 100 : 0;
    const absDiff = Math.abs(diff);
    
    // Se la differenza è piccola (meno di 5% o meno di 1 punto), mostra un segno uguale
    if ((absDiff < 1 && Math.abs(percentChange) < 20) || Math.abs(percentChange) < 5) {
        return '<span class="trend-indicator trend-stable" title="Stabile"><i class="fas fa-equals"></i></span>';
    }
    
    // Se la differenza è significativa, mostra la freccia appropriata
    if (diff > 0) {
        // Differenza positiva (incremento)
        if (percentChange > 100 || (score4h < 1 && score1h > 5)) {
            // Aumento molto grande (più del doppio)
            return '<span class="trend-indicator trend-strong-up" title="Forte aumento"><i class="fas fa-arrow-up"></i></span>';
        } else if (percentChange > 30) {
            // Aumento medio (tra 30% e 100%)
            return '<span class="trend-indicator trend-medium-up" title="Aumento medio"><i class="fas fa-arrow-up"></i></span>';
        } else {
            // Aumento piccolo (meno del 30%)
            return '<span class="trend-indicator trend-small-up" title="Leggero aumento"><i class="fas fa-arrow-up"></i></span>';
        }
    } else {
        // Differenza negativa (decremento)
        if (percentChange < -50) {
            // Diminuzione molto grande (più della metà)
            return '<span class="trend-indicator trend-strong-down" title="Forte calo"><i class="fas fa-arrow-down"></i></span>';
        } else if (percentChange < -20) {
            // Diminuzione media (tra 20% e 50%)
            return '<span class="trend-indicator trend-medium-down" title="Calo medio"><i class="fas fa-arrow-down"></i></span>';
        } else {
            // Diminuzione piccola (meno del 20%)
            return '<span class="trend-indicator trend-small-down" title="Leggero calo"><i class="fas fa-arrow-down"></i></span>';
        }
    }
}

// Filtra la tabella in base al testo di ricerca
function filterTable(searchText) {
    const rows = document.querySelectorAll('#trendsTableBody tr');
    let visibleCount = 0;
    
    rows.forEach(row => {
        const entity = row.dataset.entity;
        if (entity.includes(searchText)) {
            row.classList.remove('hidden-row');
            visibleCount++;
        } else {
            row.classList.add('hidden-row');
        }
    });
    
    // Aggiorna numerazione delle righe visibili
    let currentIndex = 1;
    rows.forEach(row => {
        if (!row.classList.contains('hidden-row')) {
            row.cells[0].textContent = currentIndex++;
        }
    });
    
    // Mostra messaggio se nessun risultato
    if (visibleCount === 0 && searchText) {
        let noResultRow = document.querySelector('.no-results-row');
        if (!noResultRow) {
            noResultRow = document.createElement('tr');
            noResultRow.className = 'no-results-row';
            noResultRow.innerHTML = `<td colspan="8" style="text-align: center; padding: 20px;">Nessun risultato trovato per "${searchText}"</td>`;
            document.getElementById('trendsTableBody').appendChild(noResultRow);
        }
    } else {
        const noResultRow = document.querySelector('.no-results-row');
        if (noResultRow) {
            noResultRow.remove();
        }
    }
}

// Ordina la tabella in base al criterio selezionato
function sortTable() {
    const sortBy = document.getElementById('sortBy').value;
    const sortOrder = document.getElementById('sortOrder').value;
    const isAsc = sortOrder === 'asc';
    
    const tableBody = document.getElementById('trendsTableBody');
    const rows = Array.from(tableBody.querySelectorAll('tr:not(.no-results-row)'));
    
    // Rimuovi eventuali righe di "nessun risultato"
    const noResultRow = document.querySelector('.no-results-row');
    if (noResultRow) {
        noResultRow.remove();
    }
    
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
