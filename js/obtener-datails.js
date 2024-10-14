function formatDescription(description) {
    return description.replace(/\n/g, '<br>'); // Reemplaza saltos de línea con <br>
}

function getProductDetails() {
    const storedCurrency = localStorage.getItem('selectedCurrency') || 'price';
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    // Validar que el id existe y es válido
    if (!productId) {
        window.location.href = 'index.html'; // Redirigir si no hay id
        return;
    }

    const product = products.find(p => p.id === productId);

    if (product) {
        // Actualizar el contenido de la página con los detalles del producto
        document.getElementById('product-title').textContent = product.title;
        const productDescription = formatDescription(product.description);
        document.getElementById('product-description').innerHTML = productDescription; // Usar innerHTML para que <br> y <strong> funcionen

        // Determinar la moneda y mostrar el precio
        document.getElementById('product-price').innerHTML = `
            <p style="font-weight: bold;">Price: ${product[storedCurrency]} ${storedCurrency === 'priceLocal' ? 'PLN' : '€'}</p>
        `;
        
        // Mostrar la disponibilidad
        document.getElementById('product-footer').innerHTML = `
            <p style="font-weight: bold;">Available: ${product.footer}</p>
        `;
        
        // Actualizar la imagen del producto
        document.getElementById('product-image').src = product.image;
    } else {
        // Redirigir a index.html si no se encuentra el producto
        window.location.href = 'index.html';
    }
}

window.onload = getProductDetails;
