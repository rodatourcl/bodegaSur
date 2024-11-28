// cargarCarrusel.js
fetch('../imagenCabecera.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la red: ' + response.statusText);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('carousel-container').innerHTML = data;
    })
    .catch(error => console.error('Error al cargar el carrusel:', error));