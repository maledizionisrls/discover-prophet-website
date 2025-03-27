// Inizializzazione della dashboard
document.addEventListener('DOMContentLoaded', function() {
    console.log("Discover Prophet Dashboard v7.2 - Inizializzazione dashboard...");

    // Inizializza anno corrente nel footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Carica i metadati
    loadMetadata();

    // Carica e visualizza i dati delle tendenze
    renderTrendsTable(trendData); // Assicurati che 'trendData' sia disponibile globalmente o passata qui

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
        console.log("Metadati caricati con successo:", runMetadata);
    } else {
        console.error('Errore: Dati dei metadati non disponibili');
        // Potresti voler mostrare un messaggio di errore all'utente qui
        document.getElementById('updateTimestamp').textContent = 'N/A';
        document.getElementById('trendsCount').textContent = 'N/A';
        document.getElementById('topScore').textContent = 'N/A';
        document.getElementById('runtimeMinutes').textContent = 'N/A';
        document.getElementById('proxiesUsed').textContent = 'N/A';
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
    } else {
        console.error("Elemento searchBox non trovato!");
    }

    // Ordinamento
    const sortBy = document.getElementById('sortBy');
    const sortOrder = document.getElementById('sortOrder');
    if (sortBy && sortOrder) {
        sortBy.addEventListener('change', sortTable);
        sortOrder.addEventListener('change', sortTable);
    } else {
        console.error("Elementi sortBy o sortOrder non trovati!");
    }

    console.log("Event listeners configurati correttamente (se trovati)");
}

// Renderizza la tabella delle tendenze
function renderTrendsTable(data) {
    console.log(`Rendering tabella con ${data.length} trend...`);
    const tableBody = document.getElementById('trendsTableBody');

    if (!tableBody) {
        console.error("Elemento trendsTableBody non trovato!");
        return;
    }

    tableBody.innerHTML = ''; // Pulisce la tabella prima di renderizzare

    data.forEach((item, index) => {
        const row = document.createElement('tr');
        // Usa dataset per memorizzare i dati per l'ordinamento/filtraggio
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

        // Genera un ID univoco per il contenitore del grafico
        const chartContainerId = `chart-${index}`;

        // Crea il contenuto della riga
        row.innerHTML = `
            <td>${index + 1}</td> {/* Numero riga dinamico */}
            <td><span class="rank-badge ${rankBadgeClass}">${item.rank}</span></td>
            <td>${item.entity}</td>
            <td class="score">${item.discover_score.toFixed(3)} ${trendIndicator}</td>
            <td>${item.score_1h.toFixed(1)}</td>
            <td>${item.score_4h.toFixed(1)}</td>
            <td>${item.score_7d.toFixed(1)}</td>
            <td>
                {/* Contenitore DIV per il grafico, con ID univoco */}
                <div class="trend-chart-container" id="${chartContainerId}" style="width: 100px; height: 40px; position: relative;"></div>
            </td>
        `;

        tableBody.appendChild(row);
    });

    console.log("Tabella renderizzata, creazione grafici...");

    // Crea i grafici DOPO che le righe sono state aggiunte al DOM
    // Usa requestAnimationFrame o un piccolo timeout per assicurarsi che il DOM sia pronto
    // Aumentato timeout come nell'esempio originale
    setTimeout(() => {
        try {
            console.log(`Creazione ${data.length} grafici...`);
            data.forEach((item, index) => {
                const chartContainerId = `chart-${index}`;
                try {
                    // Passa l'ID del contenitore DIV e i dati
                    createTrendChart(chartContainerId, [item.score_1h, item.score_4h, item.score_7d]);
                } catch (e) {
                    console.error(`Errore nella creazione del grafico ${index} (${chartContainerId}):`, e);
                    // Potresti voler mostrare un messaggio di errore nel container
                     const container = document.getElementById(chartContainerId);
                     if(container) {
                         container.innerHTML = `<span style="font-size:10px; color:red;">Errore Grafico</span>`;
                     }
                }
            });
            console.log("Creazione grafici completata.");
        } catch (error) {
            console.error("Errore generale nella creazione dei grafici:", error);
        }
    }, 500); // Timeout di 500ms
}


// --- INIZIO FUNZIONE MODIFICATA ---
// Crea un grafico di tendenza per una entità
function createTrendChart(containerId, dataPoints) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Elemento con id ${containerId} non trovato`);
        return;
    }

    try {
        // SOLUZIONE: Creare un canvas all'interno del container
        container.innerHTML = ''; // Pulisci il container
        const canvas = document.createElement('canvas');
        // Imposta le dimensioni del canvas per riempire il contenitore
        // Nota: clientWidth/Height potrebbero essere 0 se non visibile/dimensionato con CSS.
        // Assicurati che .trend-chart-container abbia dimensioni definite nel CSS.
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        // canvas.width = container.clientWidth; // Imposta la risoluzione interna
        // canvas.height = container.clientHeight; // Imposta la risoluzione interna
        container.appendChild(canvas);

        // Ora usa il canvas per il grafico
        const chartContext = canvas.getContext('2d');
        if (!chartContext) {
            throw new Error("Impossibile ottenere il contesto 2D del canvas.");
        }

        // Determina colore della linea e crea gradiente
        const lineColor = determineTrendColor(dataPoints);
        const gradient = chartContext.createLinearGradient(0, 0, 0, canvas.clientHeight || 40); // Usa altezza canvas o fallback
        gradient.addColorStop(0, lineColor + '50'); // 50 = ~31% opacity
        gradient.addColorStop(1, lineColor + '10'); // 10 = ~6% opacity

        new Chart(canvas, { // Passa l'elemento canvas
            type: 'line',
            data: {
                labels: ['1h', '4h', '7d'],
                datasets: [{
                    data: dataPoints,
                    borderColor: lineColor,
                    backgroundColor: gradient, // Usa il gradiente creato
                    borderWidth: 2,
                    pointRadius: 3,
                    pointBackgroundColor: lineColor,
                    tension: 0.4, // Curva le linee
                    fill: true // Riempie l'area sotto la linea
                }]
            },
            options: {
                responsive: true, // Rende il grafico responsivo al contenitore
                maintainAspectRatio: false, // Permette al grafico di non mantenere l'aspetto ratio originale
                plugins: {
                    legend: {
                        display: false // Nasconde la legenda
                    },
                    tooltip: {
                        enabled: true, // Abilita i tooltip al passaggio del mouse
                        callbacks: {
                            label: function(context) {
                                // Formatta il testo del tooltip
                                return `Score: ${context.parsed.y.toFixed(1)}`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        display: false // Nasconde l'asse X
                    },
                    y: {
                        display: false, // Nasconde l'asse Y
                        min: 0 // Imposta il minimo dell'asse Y a 0
                    }
                }
            }
        });
    } catch (error) {
        console.error(`Errore creazione grafico ${containerId}:`, error);
        // Fallback: mostra i valori come testo se la creazione del grafico fallisce
        container.innerHTML = `<span style="font-size:10px; color: #555;">1h: ${dataPoints[0]?.toFixed(1) ?? 'N/A'} | 4h: ${dataPoints[1]?.toFixed(1) ?? 'N/A'} | 7d: ${dataPoints[2]?.toFixed(1) ?? 'N/A'}</span>`;
    }
}
// --- FINE FUNZIONE MODIFICATA ---

// Determina colore della tendenza in base all'andamento dei punteggi
function determineTrendColor(dataPoints) {
    // Assicurati che ci siano abbastanza dati
    if (!dataPoints || dataPoints.length < 3) {
        return '#f39c12'; // Colore neutro/default se mancano dati
    }
    // Confronta il valore più recente (1h, indice 0) con quello a lungo termine (7d, indice 2)
    const score1h = dataPoints[0];
    const score7d = dataPoints[2];
    const thresholdUp = 1.1; // Aumento del 10%
    const thresholdDown = 0.9; // Diminuzione del 10%

    if (score1h > score7d * thresholdUp) {
        return '#27ae60'; // verde - tendenza in crescita
    } else if (score1h < score7d * thresholdDown) {
        return '#e74c3c'; // rosso - tendenza in calo
    } else {
        return '#f39c12'; // arancione - tendenza stabile
    }
}

// Calcola l'indicatore di tendenza (icona freccia)
function calculateTrendIndicator(score1h, score4h, score7d) {
    const thresholdUp = 1.2; // Aumento del 20% per l'icona
    const thresholdDown = 0.8; // Diminuzione del 20% per l'icona

    if (score1h > score7d * thresholdUp) {
        // Usa classi Font Awesome se incluse nel progetto, altrimenti caratteri Unicode
        return '<span class="trend-indicator trend-up" title="In crescita"><i class="fas fa-arrow-up"></i></span>'; // ↑
    } else if (score1h < score7d * thresholdDown) {
        return '<span class="trend-indicator trend-down" title="In calo"><i class="fas fa-arrow-down"></i></span>'; // ↓
    } else {
        return '<span class="trend-indicator trend-neutral" title="Stabile"><i class="fas fa-arrow-right"></i></span>'; // →
    }
}

// Filtra la tabella in base al testo di ricerca
function filterTable(searchText) {
    const rows = document.querySelectorAll('#trendsTableBody tr');
    let visibleCount = 0;

    rows.forEach(row => {
        // Usa dataset.entity che è già in lowercase
        const entity = row.dataset.entity;
        // Controlla se l'entità include il testo di ricerca
        if (entity.includes(searchText)) {
            row.classList.remove('hidden-row'); // Mostra la riga
            visibleCount++;
        } else {
            row.classList.add('hidden-row'); // Nasconde la riga
        }
    });
     console.log(`Filtraggio per "${searchText}", ${visibleCount} righe visibili.`);
}

// Ordina la tabella in base al criterio selezionato
function sortTable() {
    const sortBy = document.getElementById('sortBy').value;
    const sortOrder = document.getElementById('sortOrder').value;
    const isAsc = sortOrder === 'asc'; // true per ascendente, false per discendente

    const tableBody = document.getElementById('trendsTableBody');
    // Converti NodeList in Array per usare sort()
    const rows = Array.from(tableBody.querySelectorAll('tr'));

    // Ordina l'array di righe
    rows.sort((a, b) => {
        let valueA, valueB;

        // Estrai i valori da confrontare dal dataset della riga
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
            case 'entity': // Aggiungi ordinamento per nome entità (alfabetico)
                 valueA = a.dataset.entity;
                 valueB = b.dataset.entity;
                 // Confronto stringhe
                 if (valueA < valueB) return isAsc ? -1 : 1;
                 if (valueA > valueB) return isAsc ? 1 : -1;
                 return 0;
            default: // Fallback su discover_score se sortBy non è riconosciuto
                valueA = parseFloat(a.dataset.discoverScore);
                valueB = parseFloat(b.dataset.discoverScore);
        }

        // Gestione NaN (valori non numerici) - mettili alla fine
        if (isNaN(valueA)) return 1;
        if (isNaN(valueB)) return -1;

        // Ritorna la differenza per l'ordinamento numerico
        return isAsc ? valueA - valueB : valueB - valueA;
    });

    // Rimuovi le righe esistenti dal DOM (più efficiente che innerHTML = '')
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    // Aggiungi le righe riordinate al DOM
    rows.forEach((row, index) => {
        // Aggiorna il numero progressivo nella prima cella
        row.cells[0].textContent = index + 1;
        tableBody.appendChild(row);
    });

    console.log(`Tabella ordinata per ${sortBy} (${sortOrder})`);
}

// Aggiungi qui eventuali altre funzioni necessarie...

// Assicurati che 'trendData' sia definito prima che DOMContentLoaded sia completo
// Esempio: <script> var trendData = [...]; </script> prima di questo script
// o caricalo con fetch/AJAX dentro DOMContentLoaded se necessario.
// let trendData = []; // Definisci o carica i dati qui
