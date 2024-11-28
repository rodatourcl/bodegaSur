
// Traducciones dinámicas
const translations = {
    en: {
        totalOrder: 'Total Order',
        waitMessage: 'You can only place a new order once every 1 minute. Time remaining: %m minutes and %s seconds.',
        orderGreeting: "Hi, I'd like to place an order 👇\n*Order Summary*\nFrom www.bodegasur.com\n\n Order Items\n",
        confirmationMessage: 'www.bodegasur.com will confirm your order upon receiving the message.\nThank you. 🙏',
        proceedWhatsApp: 'Your order will continue via WhatsApp. Do you want to proceed?',
        orderCancelled: "Order not sent.",
      
    },
    es: {
        totalOrder: 'Total Orden',
        waitMessage: 'Solo puedes realizar un nuevo pedido una vez cada 1 minuto. Tiempo restante: %m minutos y %s segundos.',
        orderGreeting: "Hola, quiero realizar un pedido 👇\n*Resumen del Pedido*\nDesde www.bodegasur.com\n\n Productos Ordenados\n",
        confirmationMessage: 'www.bodegasur.com confirmará su pedido al recibir el mensaje.\nGracias. 🙏',
        proceedWhatsApp: 'Tu pedido continuará vía WhatsApp. ¿Deseas proceder?',
        orderCancelled: "La orden no fue enviada."
    },
    pl: {
        totalOrder: 'Całość zamówienia',
        waitMessage: 'Możesz złożyć nowe zamówienie tylko raz w ciągu minuty. Pozostały czas: %m minut i %s sekund.',
        orderGreeting: "Cześć, chcę złożyć zamówienie 👇\n*Podsumowanie zamówienia*\nZ www.bodegasur.com\n\n Zamówione produkty\n",
        confirmationMessage: 'www.bodegasur.com potwierdzi Twoje zamówienie po otrzymaniu wiadomości.\nDziękuję. 🙏',
        proceedWhatsApp: 'Twoje zamówienie będzie kontynuowane przez WhatsApp. Czy chcesz kontynuować?',
        orderCancelled: "Zamówienie nie zostało wysłane."
    },
};

// Obtener traducción según el idioma seleccionado
function getTranslation(key, language) {
    return translations[language]?.[key] || translations['en'][key];
}


// Obtener los parámetros de la URL y elementos clave
const queryParams = new URLSearchParams(window.location.search);
const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
const orderSummaryContainer = document.getElementById('order-summary');
showProducts();



// Calcula el total acumulado
function calculateGrandTotal(products) {
    return products.reduce((total, product) => {
        return total + product.quantity * parseFloat(product.price);
    }, 0);
}

// Renderiza una fila de producto
function renderProductRow(product, selectedLanguage, currencySymbol) {
    const firstImage = product.images?.[0] || 'placeholder-image-url.jpg';
    const totalPrice = product.quantity * parseFloat(product.price);

    const productRow = document.createElement('tr');
    productRow.innerHTML = `
        <td class="th-style">
            <img src="${firstImage}" alt="${product.title[selectedLanguage]}" class="product-image">
        </td>
        <td class="th-style">${product.title[selectedLanguage]} - ${product.footer[selectedLanguage]}</td>
        <td class="th-style">${product.quantity}</td>
        <td class="td-style">${parseFloat(product.price).toFixed(2)} ${currencySymbol}</td>
        <td class="td-style">${totalPrice.toFixed(2)} ${currencySymbol}</td>
    `;
    return productRow;
}

// Renderiza la fila del total acumulado
function renderTotalRow(grandTotal, currencySymbol, selectedLanguage) {
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `
        <td colspan="4" class="td-style">
            <strong>${getTranslation('totalOrder', selectedLanguage)}</strong>
        </td>
        <td class="td-style"><strong>${grandTotal.toFixed(2)} ${currencySymbol}</strong></td>
    `;
    return totalRow;
}

// Redirige si no hay productos en el resumen
function redirectIfNoProducts(products) {
    if (products.length === 0) {
        window.location.href = 'index.html';
    }
}

function showProducts() {
    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    const orderedProducts = JSON.parse(localStorage.getItem('orderedProducts')) || [];
    const storedCurrency = localStorage.getItem('selectedCurrency') || 'priceLocal';
    const currencySymbol = storedCurrency === 'priceEu' ? '€' : 'PLN';

    // Redirigir si no hay productos
    redirectIfNoProducts(orderedProducts);

    // **Asegurarse de limpiar el contenedor antes de renderizar**
    orderSummaryContainer.innerHTML = '';

    // Renderizar filas de productos
    orderedProducts.forEach(product => {
        const productRow = renderProductRow(product, selectedLanguage, currencySymbol);
        orderSummaryContainer.appendChild(productRow);
    });

    // Calcular el total acumulado
    const grandTotal = calculateGrandTotal(orderedProducts);
    // Guardar el total en localStorage
    localStorage.setItem('grandTotal', grandTotal);

    // Renderizar la fila del total
    const totalRow = renderTotalRow(grandTotal, currencySymbol, selectedLanguage);
    orderSummaryContainer.appendChild(totalRow);

    // Configurar el botón de WhatsApp
    //setupWhatsAppButton(orderedProducts, grandTotal, currencySymbol, selectedLanguage);
}


function setupWhatsAppButton() {
    document.getElementById('send-whatsapp').addEventListener('click', function () {
        // Leer los productos y la información desde localStorage
        const orderedProducts = JSON.parse(localStorage.getItem('orderedProducts')) || [];
        const grandTotal = localStorage.getItem('grandTotal');
        const storedCurrency = localStorage.getItem('selectedCurrency') || 'priceLocal';
        const currencySymbol = storedCurrency === 'priceEu' ? '€' : 'PLN';
        const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';

        // Verificar si no hay productos o total
        if (orderedProducts.length === 0 || grandTotal === null) {
            alert("No hay productos en el pedido.");
            return;
        }

        const lastOrderTime = localStorage.getItem('lastOrderTime');
        const now = Date.now();
        const timeLimit = 1 * 60 * 1000; // 1 minuto en milisegundos

        if (lastOrderTime && now - lastOrderTime < timeLimit) {
            const timeRemaining = timeLimit - (now - lastOrderTime);
            const minutes = Math.floor(timeRemaining / 60000);
            const seconds = Math.floor((timeRemaining % 60000) / 1000);

            alert(getTranslation('waitMessage', selectedLanguage).replace('%m', minutes).replace('%s', seconds));
            return;
        }

        // Crear el mensaje para WhatsApp
        let message = getTranslation('orderGreeting', selectedLanguage);
        orderedProducts.forEach(product => {
            message += `* ${product.quantity} x ${parseFloat(product.price).toFixed(2)} ${currencySymbol} - ${product.title[selectedLanguage]} - ${product.footer[selectedLanguage]} = ${(product.quantity * product.price).toFixed(2)} ${currencySymbol}\n`;
        });
        message += `\n${getTranslation('totalOrder', selectedLanguage)}: ${parseFloat(grandTotal).toFixed(2)} ${currencySymbol}`;
        message += `\n\n${getTranslation('confirmationMessage', selectedLanguage)}`;

        // Codificar el mensaje para WhatsApp
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "+48451687470"; // Número de WhatsApp del destinatario
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

        // Confirmar si el usuario quiere proceder con el envío
        if (confirm(getTranslation('proceedWhatsApp', selectedLanguage))) {
            window.open(whatsappUrl, '_blank');
            localStorage.setItem('lastOrderTime', now);
            setTimeout(() => {
                window.location.href = 'index.html?orderSent=true';
            }, 500);
        } else {
            // Manejo de la cancelación de la orden
            console.log('La orden no fue enviada.');
            alert(getTranslation('orderCancelled', selectedLanguage));
        }
    });
}

// Configurar el botón para enviar la orden por WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    setupWhatsAppButton(); // Llamada para configurar el botón después de que la página cargue
});


// Definir las traducciones en inglés y español
const translationsEn = {
    //header
    "authenticFlavours": "Authentic Flavours",
    "optionProduct": "PRODUCTS",
    "optionRestaurant": "FOR RESTAURANTS",
    "optionAbout": "ABOUT US",
    "optionContact": "CONTACT",
    //sección footer
    "followUs": "Follow us",
    "shortCuts": "Links",
    "ourPruductsLinks": "Our products",
    "forRestaurantsLinks": "For restaurants",
    "aboutUsLink": "About us",
    "contactLinks": "Contact",
    "usufulLinks": "About",
    "shippigInfoLinks": "Shipping info",
    "policyLinks": "Privacy policy",

    //orden-tabla
    "order-summary-title": "Order Summary",
    "products": "Product",
    "description": "Description",
    "quantity": "Quantity",
    "price": "Price",
    "total": "Total",

    //botones Principales
    "backProducts": "Back to Products",
    "send-whatsapp": "Send Order via WhatsApp",
    "openPopupButton": "Send Order via Form",

    //Formulario ordern
    "order-via-form":"Order via Form",
    "deliveryButton": "Delivery",
    "pickupButton": "Pick up",
    
    "your-name-form": "Name*:",
    "name-ph-form": "Your name",
    "your-phone-form": "Contact number*:",
    "phoneOrder": "Enter contact number",
    "whatsapp-ok-form":"I can receive messages via WhatsApp",
    "phoneError-form": "Please enter a valid phone number",
    "your-address-form":"Address*:",
    "address-form":"Street / number / postal code / city / country",
    "instructions-form": "Special instructions (optional):",
    "specialInstructions-form":"Any instructions for delivery?",
    "charCount-form": "0/100 characters",
    "sendEmail-form": "Send Order",

    "delivery":"You have selected: Delivery",
    "pickup":"You have selected: Pick up",
    

    // Continúa con más textos según sea necesario
};

const translationsEs = {
    //header
    "authenticFlavours": "Sabores Auténticos",
    "optionProduct": "PRODUCTOS",
    "optionRestaurant": "PARA RESTAURANTES",
    "optionAbout": "SOBRE NOSOTROS",
    "optionContact": "CONTACTO",
    //sección footer
    "followUs": "Siguenos",
    "shortCuts": "Links",
    "ourPruductsLinks": "Nuestros productos",
    "forRestaurantsLinks": "Para restaurantes",
    "aboutUsLink": "Sobre nosotros",
    "contactLinks": "Contacto",
    "usufulLinks": "Sobre",
    "shippigInfoLinks": "Información de envío",
    "policyLinks": "Política de privacidad",

    //orden-tabla
    "order-summary-title": "Resumen del pedido",
    "products": "Producto",
    "description": "Descripción",
    "quantity": "Cantidad",
    "price": "Precio",
    "total": "Total",

    //botones Principales
    "backProducts": "Volver a Productos",
    "send-whatsapp": "Enviar Orden via WhatsApp",
    "openPopupButton": "Enviar Orden via Formulario",

    //Formulario ordern
    "order-via-form":"Pedido via formulario",
    "deliveryButton": "Despacho",
    "pickupButton": "Retiro en tienda",

    "your-name-form": "Nombre*:",
    "name-ph-form": "Ingrese su nombre",
    "your-phone-form": "Número de teléfono:",
    "phoneOrder": "Ingrese un número de teléfono válido",
    "whatsapp-ok-form":"Puedo recibir mensajes via WhatsApp",
    "phoneError-form": "Favor ingrese un número de teléfono válido.",
    "your-address-form":"Dirección*:",
    "address-form":"Calle / número / código postal / ciudad / país",
    "instructions-form": "Instrucciónes especiales (opcional):",
    "specialInstructions-form":"Alguna instrucción para el despacho?",
    "charCount-form": "0/100 caracteres",
    "sendEmail-form": "Enviar Pedido",

    "delivery":"Has seleccionado: Despacho",
    "pickup":"Has seleccionado: Retiro en tienda",

    // Continúa con más textos según sea necesario
};
const translationsPl = {
    //header
    "authenticFlavours": "Authentic Flavours",
    "optionProduct": "PRODUKTY",
    "optionRestaurant": "DLA RESTAURACJI",
    "optionAbout": "O NAS",
    "optionContact": "KONTAKT",
    //sección footer
    "followUs": "Obserwuj nas",
    "shortCuts": "Poznaj nas",
    "ourPruductsLinks": "Produkty",
    "forRestaurantsLinks": "Dla restauracji",
    "aboutUsLink": "O nas",
    "contactLinks": "Kontakt",
    "usufulLinks": "Przydatne",
    "shippigInfoLinks": "Wysyłka",
    "policyLinks": "Polityka prywatności",

    //orden-tabla
    "order-summary-title": "Podsumowanie zamówienia",
    "products": "Produkt",
    "description": "Opis",
    "quantity": "Ilość",
    "price": "Cena",
    "total": "Suma",

    //botones Principales
    "backProducts": "Wróć do produktów",
    "send-whatsapp": "Wyślij zamówienie przez WhatsApp",
    "openPopupButton": "Wyślij zamówienie przez formularz",

    //Formulario ordern
    "order-via-form":"Złóż zamówienie przez formularz",
    "deliveryButton": "Dostawa",
    "pickupButton": "Odbiór osobisty",

    "your-name-form": "Imię*:",
    "name-ph-form": "Twoje imię",
    "your-phone-form": "Numer telefonu:",
    "phoneOrder": "Twój numer telefonu",
    "whatsapp-ok-form":"Mogę otrzymywać wiadomości na WhatsApp",
    "phoneError-form": "Wprowadź poprawny numer telefonu",
    "your-address-form":"Adres*:",
    "address-form":"Ulica / numer domu / numer mieszkania / kod pocztowy / miasto / państwo",
    "instructions-form": "Informacje dodatkowe (opcjonalnie):",
    "specialInstructions-form":"Specjalne wytyczne jeżeli chodzi o wysyłkę?",
    "charCount-form": "0/100 znaków",
    "sendEmail-form": "Wyślij zamówienie",

    "delivery":"Wybrałeś: dostawa",
    "pickup":"Wybrałeś: odbiór osobisty",
  


    // Continúa con más textos según sea necesario
};

// Cambia el idioma y guarda la selección en localStorage
function changeLanguage() {
    const language = document.getElementById("language").value;
    currentLanguage = language; // Actualiza el idioma actual
    localStorage.setItem("selectedLanguage", language); // Guarda el idioma seleccionado en localStorage
    console.log("Idioma guardado en localStorage:", language); // Verificar el idioma guardado

    if (language === "es") {
        loadTranslations(translationsEs);
        showProducts();
    }
    if (language === "en") {
        loadTranslations(translationsEn);
        showProducts();
    }
    if (language === "pl") {
        loadTranslations(translationsPl);
        showProducts();
    }


}

// Función para reemplazar los textos según el idioma seleccionado
function loadTranslations(translations) {
    //header
    document.getElementById("authenticFlavoursText").textContent = translations["authenticFlavours"];
    document.querySelector("a#optionProduct").textContent = translations["optionProduct"];
    document.querySelector("a#optionRestaurant").textContent = translations["optionRestaurant"];
    document.querySelector("a#optionAbout").textContent = translations["optionAbout"];
    document.querySelector("a#optionContact").textContent = translations["optionContact"];

    //sección footer
    document.querySelector("h5#followUs").textContent = translations["followUs"];
    document.querySelector("h5#shortCuts").textContent = translations["shortCuts"];
    document.querySelector("a#ourPruductsLinks").textContent = translations["ourPruductsLinks"];
    document.querySelector("a#forRestaurantsLinks").textContent = translations["forRestaurantsLinks"];
    document.querySelector("a#aboutUsLink").textContent = translations["aboutUsLink"];
    document.querySelector("a#contactLinks").textContent = translations["contactLinks"];
    document.querySelector("h5#usufulLinks").textContent = translations["usufulLinks"];
    document.querySelector("a#shippigInfoLinks").textContent = translations["shippigInfoLinks"];
    document.querySelector("a#policyLinks").textContent = translations["policyLinks"];

    //orden-tabla
    document.querySelector("h1#order-summary-title").textContent = translations["order-summary-title"];
    document.querySelector("#products").textContent = translations["products"];
    document.querySelector("#description").textContent = translations["description"];
    document.querySelector("#quantity").textContent = translations["quantity"];
    document.querySelector("#price").textContent = translations["price"];
    document.querySelector("#total").textContent = translations["total"];

    //botones principales
    document.querySelector("#backProducts").textContent = translations["backProducts"];
    document.querySelector("#send-whatsapp").textContent = translations["send-whatsapp"];
    document.querySelector("#openPopupButton").textContent = translations["openPopupButton"];

    //Formulario Orden
    document.querySelector("h1#order-via-form").textContent = translations["order-via-form"];
    document.querySelector("#deliveryButton").textContent = translations["deliveryButton"];
    document.querySelector("#pickupButton").textContent = translations["pickupButton"];

    document.querySelector("#your-name-form").textContent = translations["your-name-form"];
    document.getElementById("name-ph-form").placeholder = translations["name-ph-form"];
    document.querySelector("#your-phone-form").textContent = translations["your-phone-form"];
    document.getElementById("phoneOrder").placeholder = translations["phoneOrder"];
    document.querySelector("#phoneError-form").textContent = translations["phoneError-form"];
    document.querySelector("#whatsapp-ok-form").textContent = translations["whatsapp-ok-form"];
    document.querySelector("#your-address-form").textContent = translations["your-address-form"];
    document.getElementById("address-form").placeholder = translations["address-form"];
    document.querySelector("#instructions-form").textContent = translations["instructions-form"];
    document.getElementById("specialInstructions-form").placeholder = translations["specialInstructions-form"];
    document.querySelector("#charCount-form").textContent = translations["charCount-form"];
    document.querySelector("#sendEmail-form").textContent = translations["sendEmail-form"];

    if (document.getElementById('addressField').style.display === 'block') {
        document.querySelector("#orderTypeMessage").textContent = translations["delivery"];
        console.log('Bloqueo');
        console.log(document.querySelector("#orderTypeMessage").textContent);
    } else {
        
        document.querySelector("#orderTypeMessage").textContent = translations["pickup"];
        console.log(document.querySelector("#orderTypeMessage").textContent);
        console.log('No bloqueo');
    }
       



    // Continúa reemplazando más textos según los elementos en tu página
}

document.addEventListener("DOMContentLoaded", function () {
    const observer = new MutationObserver(function (mutations) {
        const languageSelector = document.getElementById("language");
        const footerElement = document.getElementById("footer-container"); // Asegúrate de que el contenedor del footer esté cargado

        if (languageSelector && footerElement) {
            observer.disconnect(); // Deja de observar cuando ambos elementos están disponibles
            initializeLanguage(languageSelector); // Llama a la función de inicialización
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
});

function initializeLanguage(languageSelector) {
    const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
    console.log("Idioma cargado desde localStorage: (initializeLanguage)", selectedLanguage);

    languageSelector.value = selectedLanguage;
    currentLanguage = selectedLanguage;


    if (selectedLanguage === "es") {
        loadTranslations(translationsEs);
    } else if (selectedLanguage === "en") {
        loadTranslations(translationsEn);
    } else if (selectedLanguage === "pl") {
        loadTranslations(translationsPl);
    }

}