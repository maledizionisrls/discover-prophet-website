// Crea un grafico di tendenza per una entità
function createTrendChart(containerId, dataPoints) {
    const ctx = document.getElementById(containerId);
    if (!ctx) return;
    
    try {
        // Determina colore della linea in base alla tendenza
        let lineColor = '#3498db'; // Default blu
        
        // Controlla se il primo valore (1h) è maggiore dell'ultimo (7d)
        if (dataPoints[0] > dataPoints[2] * 1.1) {
            lineColor = '#27ae60'; // Verde - tendenza in crescita
        } else if (dataPoints[0] < dataPoints[2] * 0.9) {
            lineColor = '#e74c3c'; // Rosso - tendenza in calo
        } else {
            lineColor = '#f39c12'; // Arancione - tendenza stabile
        }
        
        // Crea gradiente per lo sfondo
        const chartContext = ctx.getContext('2d');
        const gradient = chartContext.createLinearGradient(0, 0, 0, 40);
        gradient.addColorStop(0, lineColor + '50'); // 50 = 31% opacity
        gradient.addColorStop(1, lineColor + '10'); // 10 = 6% opacity
        
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
    } catch (error) {
        console.error("Error creating chart:", error);
        // Fallback: mostra i valori come testo
        ctx.innerHTML = `1h: ${dataPoints[0]} | 4h: ${dataPoints[1]} | 7d: ${dataPoints[2]}`;
    }
}
