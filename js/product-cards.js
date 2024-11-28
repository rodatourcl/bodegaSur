// Obtener el contenedor de tarjetas de productos
const productCardsContainer = document.getElementById("product-cards");

// Crear un objeto para almacenar las cantidades seleccionadas
const productQuantities = {};

// Recuperar las cantidades almacenadas en localStorage
const savedQuantities = JSON.parse(localStorage.getItem('productQuantities')) || {};

// Verificar si hay un parámetro en la URL para limpiar las cantidades
const queryParams = new URLSearchParams(window.location.search);
const orderSent = queryParams.get('orderSent');

if (orderSent) {
    // Limpiar las cantidades almacenadas
    localStorage.removeItem('productQuantities');
    localStorage.removeItem('orderedProducts');
    // Reiniciar el objeto productQuantities
    Object.keys(savedQuantities).forEach(productId => {
        productQuantities[productId] = 0; // Establecer en 0 todas las cantidades
    });
} else {
    // Si no se ha enviado una orden, mantener las cantidades guardadas
    Object.keys(savedQuantities).forEach(productId => {
        productQuantities[productId] = savedQuantities[productId];
    });
}

// Crear el botón de "Ordenar"
// Obtener el idioma seleccionado desde localStorage
const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
const orderButton = document.createElement('button');
orderButton.id = 'order-button'; 
orderButton.innerHTML = selectedLanguage === 'es' ? 'Ordenar' : selectedLanguage === 'pl' ? 'Zamówienie' : 'Order';
orderButton.disabled = true; // Deshabilitado inicialmente

// Asignar la función de clic para el botón "Ordenar"
orderButton.onclick = function() {
    // Obtén la moneda seleccionada de localStorage (por defecto será 'priceLocal' para PLN)
    const storedCurrency = localStorage.getItem('selectedCurrency') || 'priceLocal';
    
    // Filtrar los productos seleccionados
    const orderedProducts = Object.keys(productQuantities)
        .filter(productId => productQuantities[productId] > 0) // Solo productos con cantidad > 0
        .map(productId => {
            const product = products.find(p => p.id === productId); // Obtener el producto por su ID
            const price = storedCurrency === 'priceEu' ? product.priceEu : product.priceLocal;

            return {
                id: product.id,
                title: product.title,
                footer: product.footer,
                price: price,
                description: product.desSmall,
                images: product.images,
                quantity: productQuantities[productId]
            };
        });

    // Almacenar los productos seleccionados en localStorage
    localStorage.setItem('orderedProducts', JSON.stringify(orderedProducts));

    // Redirigir a la página de orden
    location.href = 'order.html';
};

document.body.appendChild(orderButton);


// Crear el botón de "Clean Order"
const cleanOrderButton = document.createElement('button');
cleanOrderButton.id = 'clean-order-button'; // Añadir ID para estilos y animaciones
cleanOrderButton.innerHTML = selectedLanguage === 'es' ? 'Limpiar Orden' : selectedLanguage === 'pl' ? 'Wyczyść zamówienie' : 'Clean Order';
cleanOrderButton.disabled = true; // Deshabilitado inicialmente

// Asignar la función de clic para el botón "Clean Order"
cleanOrderButton.onclick = function() {
    // Establecer todas las cantidades de productos en 0
    Object.keys(productQuantities).forEach(productId => {
        productQuantities[productId] = 0;

        // Actualizar la cantidad en la interfaz
        const quantityElement = document.getElementById(`quantity-${productId}`);
        if (quantityElement) {
            quantityElement.textContent = 0;
        }
    });
    localStorage.removeItem('productQuantities');
    localStorage.removeItem('orderedProducts');
    // Guardar las cantidades actualizadas en localStorage
    localStorage.setItem('productQuantities', JSON.stringify(productQuantities));

    // Actualizar el estado de los botones
    updateOrderButtonState();
};

// Añadir el botón de "Clean Order" al DOM
document.body.appendChild(cleanOrderButton);



// Función para habilitar o deshabilitar el botón "Ordenar"
function updateOrderButtonState() {
    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    orderButton.innerHTML = selectedLanguage === 'es' ? 'Ordenar' : selectedLanguage === 'pl' ? 'Zamówienie' : 'Order';
    cleanOrderButton.innerHTML = selectedLanguage === 'es' ? 'Limpiar Orden' : selectedLanguage === 'pl' ? 'Wyczyść zamówienie' : 'Clean Order';
    const hasProductsToOrder = Object.values(productQuantities).some(quantity => quantity > 0);
    orderButton.disabled = !hasProductsToOrder; // Habilitar o deshabilitar el botón
    cleanOrderButton.disabled = !hasProductsToOrder; // Habilitar o deshabilitar el botón
    // Mostrar u ocultar el botón "Ordenar" con animación
    if (hasProductsToOrder) {
        orderButton.classList.add('visible');
        
    } else {
        orderButton.classList.remove('visible');
    }

    // También ocultar el botón "Clean Order" si no hay productos seleccionados
    if (hasProductsToOrder) {
        cleanOrderButton.classList.add('visible');
    } else {
        cleanOrderButton.classList.remove('visible');
    }
}

let currentCurrency = 'priceLocal'; // Por defecto, mostramos el precio en PLN

function updatePrices() {
   // Obtén el valor seleccionado del selector de moneda
    const selectedCurrency = document.getElementById('currency').value;
    currentCurrency = selectedCurrency; // Actualiza la moneda actual

    // Almacena la moneda seleccionada en localStorage
    localStorage.setItem('selectedCurrency', currentCurrency);

    // Actualiza el precio en todas las tarjetas de productos
    products.forEach(product => {
        const priceElement = document.getElementById(`price-${product.id}`);
        priceElement.innerHTML = `<strong>Price: ${product[currentCurrency]} ${currentCurrency === 'priceLocal' ? 'PLN' : '€'}</strong>`;
        
    });
}

// Función para inicializar los productos
function initializeProducts() {
    productCardsContainer.innerHTML = ""; // Vaciar el contenedor de tarjetas
    // Verificar y aplicar la moneda almacenada en localStorage
    const storedCurrency = localStorage.getItem('selectedCurrency');
    if (storedCurrency) {
        currentCurrency = storedCurrency;
        document.getElementById('currency').value = currentCurrency;
    }
    
    // Verificar y aplicar el idioma almacenado en localStorage
    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4";

        // Inicializar el contador de productos para cada tarjeta con el valor almacenado (o 0 si no hay)
        const initialQuantity = productQuantities[product.id] || 0;
        productQuantities[product.id] = initialQuantity;

        // Generar el HTML de la tarjeta de producto
        card.innerHTML = `
            <a href="product-details.html?id=${product.id}" class="text-decoration-none text-reset">
                <div class="card">
                    <div class="card-img-section p-3">
                        <div id="${product.id}" class="carousel slide" data-bs-ride="carousel" data-interval="false">
                            <div class="carousel-inner">
                                ${product.images.map((img, index) => `
                                    <div class="carousel-item ${index === 0 ? 'active' : ''}">
                                        <img src="${img}" class="d-block w-100 product-image" alt="Image ${index + 1}">
                                    </div>
                                `).join('')}
                            </div>
                            <a class="carousel-control-prev" href="#${product.id}" type="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#${product.id}" type="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                    <div class="card-text-section p-3">
                        <h4 class="card-title">${product.title[selectedLanguage]}</h4>
                        <p>${product.desSmall[selectedLanguage]}</p>
                        <p id="price-${product.id}"><strong>Price: ${product.price}</strong></p>

                        <!-- Contador de productos -->
                        <div class="text-center mt-3">
                            <button class="btn btn-secondary" onclick="updateQuantity('${product.id}', -1)">-</button>
                            <span id="quantity-${product.id}">${initialQuantity}</span>
                            <button class="btn btn-secondary" onclick="updateQuantity('${product.id}', 1)">+</button>
                        </div>

                        <!-- Botón de detalles -->
                        <div class="text-center mt-3">
                            <button type="button" onclick="location.href='product-details.html?id=${product.id}'">
                                ${selectedLanguage === 'es' ? 'Detalles' : selectedLanguage === 'pl' ? 'Szczegóły' : 'Details'}
                            </button>
                        </div>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted" style="font-family: 'Lato', sans-serif;">${product.footer[selectedLanguage]}</small>
                    </div>
                </div>
            </a>
        `;

        productCardsContainer.appendChild(card);
    });

    // Actualizar precios según la moneda seleccionada
    updatePrices();

    // Actualizar el estado del botón "Ordenar"
    updateOrderButtonState();
}


// Función para actualizar el contador de productos
function updateQuantity(productId, change) {
    const quantityElement = document.getElementById(`quantity-${productId}`);
    const currentQuantity = productQuantities[productId];
    const newQuantity = Math.max(0, currentQuantity + change); // Evitar cantidades negativas
    productQuantities[productId] = newQuantity;
    quantityElement.textContent = newQuantity;

    // Guardar las cantidades actuales en localStorage
    localStorage.setItem('productQuantities', JSON.stringify(productQuantities));

    // Actualizar los productos en localStorage
    updateLocalStorageWithProducts();


    // Verificar si al menos un producto tiene cantidad > 0 para habilitar el botón "Ordenar"
    updateOrderButtonState();
}

// Actualiza localStorage con los productos y cantidades
function updateLocalStorageWithProducts() {
    const orderedProducts = products.map(product => ({
        id: product.id,
        title: product.title,
        footer: product.footer,
        price: currentCurrency === 'priceEu' ? product.priceEu : product.priceLocal,
        desSmall: product.desSmall,
        images: product.images,
        quantity: productQuantities[product.id]
    })).filter(product => product.quantity > 0); // Filtra productos con cantidad mayor a 0

    localStorage.setItem('orderedProducts', JSON.stringify(orderedProducts)); // Guardar en localStorage
}


// Ejecutar la función al cargar la página
window.onload = function() {
    // Inicializar los productos
    initializeProducts();
    // Verificar el estado inicial del botón "Clean Order"
    updateOrderButtonState();
};