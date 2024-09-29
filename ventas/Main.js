async function fetchSalesData() {
    const url = 'https://script.google.com/macros/s/AKfycbweF2Gg-u1o6uGcmm2s9dbZQhCbJasgEZAoWgMAkce2d4Sx4EoY7YYaxbnlfTEFdZty/exec'; // Reemplaza con tu URL

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Imprimir datos recuperados
        console.log('Datos recuperados:', data);
        
        // Comprobar si los datos están vacíos
        if (data.length === 0) {
            console.error('No se encontraron datos.');
            return;
        }
        
        createBarChart(data); // Llama a la función para crear el gráfico de barras
        createLineChart(data); // Llama a la función para crear el gráfico lineal
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchSalesData);

function createBarChart(data) {
    const labels = data.map(item => item.day);
    const salesData = data.map(item => item.sales);

    // Imprimir etiquetas y datos de ventas
    console.log('Etiquetas para gráfico de barras:', labels);
    console.log('Datos de ventas para gráfico de barras:', salesData);
    
    const ctx = document.getElementById('salesBarChart').getContext('2d');
    const salesBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Ventas (Gráfico de Barras)',
                data: salesData,
                backgroundColor: [
                    'rgb(172,20,252)',
                    'rgb(172,20,252)',
                    'rgb(172,20,252)',
                    'rgb(172,20,252)',
                    'rgb(172,20,252)',
                    'rgb(172,20,252)',
                    'rgb(172,20,252)',
                    'rgb(172,20,252)',
                    'rgb(172,20,252)'
                ],
                borderColor: [
                    'rgb(172,20,252)',
                    'rgb(172,20,252)',
                    'rgb(172,20,252)',
                    'rgb(172,20,252)',
                    'rgb(172,20,252)',
                    'rgb(172,20,252)',
                    'rgb(172,20,252)',
                    'rgb(172,20,252)',
                    'rgb(172,20,252)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 16
                        }
                    }
                }
            }
        }
    });
}

function createLineChart(data) {
    const labels = data.map(item => item.day);
    const salesData = data.map(item => item.sales);

    // Imprimir etiquetas y datos de ventas
    console.log('Etiquetas para gráfico lineal:', labels);
    console.log('Datos de ventas para gráfico lineal:', salesData);
    
    const ctx = document.getElementById('salesLineChart').getContext('2d');
    const salesLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Ventas (Gráfico Lineal)',
                data: salesData,
                backgroundColor: 'rgb(172,20,252, 0.2)',
                borderColor: 'rgb(172,20,252)',
                borderWidth: 2,
                fill: true,
                tension: 0.3 // Controla la suavidad de la línea
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 16
                        }
                    }
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', fetchSalesData);
