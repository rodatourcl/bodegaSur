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

    //detalles
    "spicy-title": "Spice level",
    "backToProduts": "Back to Products",
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

    "spicy-title": "Nivel de picante",
    "backToProduts": "Volver a Productos",


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


    //detalles
    "spicy-title": "Poziom ostrości",
    "backToProduts": "Wróć do produktów",


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
        getProductDetails();
    }
    if (language === "en") {
        loadTranslations(translationsEn);
        getProductDetails();

    }
    if (language === "pl") {
        loadTranslations(translationsPl);
        getProductDetails();

    }
    initializeProducts();  // Asegúrate de que esta función actualice las tarjetas correctamente en el idioma seleccionado
    // Añadir los botones de "Ordenar" y "Clean Order" al DOM

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

    document.querySelector("p#spicy-title").textContent = translations["spicy-title"];
    document.querySelector("#backToProduts").textContent = translations["backToProduts"];
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

function formatDescription(description) {
    return description.replace(/\n/g, '<br>'); // Reemplaza saltos de línea con <br>
}

function displaySpicyLevel(spicyLevel) {
    const spicyLevelContainer = document.getElementById("spicy-level-container");  // Contenedor completo
    const spicyLevelDiv = document.getElementById("spicy-level");  // Contenedor de los círculos

    // Limpiar el contenedor antes de agregar nuevos círculos
    spicyLevelDiv.innerHTML = "";

    // Si el nivel de picante es 0, ocultar todo el contenedor
    if (spicyLevel === 0) {
        spicyLevelContainer.style.display = 'none';  // Ocultar el bloque de nivel de picante
    } else {
        spicyLevelContainer.style.display = 'block';  // Asegurarse de que el bloque esté visible

        // Mostrar los círculos de picante según el nivel
        for (let i = 1; i <= 10; i++) {
            const levelBox = document.createElement("div");

            // Si el círculo corresponde al nivel de picante, añadir la clase 'active' y asignar el color correspondiente
            if (i <= spicyLevel) {
                levelBox.classList.add("active");  // Añadir la clase 'active' a los círculos correspondientes
                levelBox.classList.add(`level-${i}`);  // Asignar la clase del color para este nivel (level-1, level-2, ..., level-10)
            } else {
                // Si el círculo no está activo, asignarle la clase 'level-inactive' para que sea gris
                levelBox.classList.add("level-inactive");  // Clase para los círculos inactivos (gris)
            }

            // Añadir el nivel de picante al contenedor
            spicyLevelDiv.appendChild(levelBox);
        }
    }
}



function getProductDetails() {
    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    const storedCurrency = localStorage.getItem('selectedCurrency') || 'price';
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const disponible = { en: "Available", es: "Disponible", pl: "Dostępność" };
    const precio = { en: "Price", es: "Precio", pl: "Cena" };

    // Validar que el id existe y es válido
    if (!productId) {
        window.location.href = 'index.html'; // Redirigir si no hay id
        return;
    }

    const product = products.find(p => p.id === productId);

    if (product) {
        // Actualizar el contenido de la página con los detalles del producto
        document.getElementById('product-title').textContent = product.title[selectedLanguage];
        const productDescription = formatDescription(product.description[selectedLanguage]);
        document.getElementById('product-description').innerHTML = productDescription; // Usar innerHTML para que <br> y <strong> funcionen

        // Determinar la moneda y mostrar el precio
        document.getElementById('product-price').innerHTML = `
            <p style="font-weight: bold;">${precio[selectedLanguage]}: ${product[storedCurrency]} ${storedCurrency === 'priceLocal' ? 'PLN' : '€'}</p>
        `;

        // Mostrar la disponibilidad
        document.getElementById('product-footer').innerHTML = `
            <p style="font-weight: bold;">${disponible[selectedLanguage]}: ${product.footer[selectedLanguage]}</p>
        `;

        // Actualizar la imagen del producto
        document.getElementById('product-image-details').src = product.image;

        // Mostrar u ocultar la imagen de "gluten-free" dependiendo del valor de glutenFree
        const glutenImage = document.getElementById('product-image-glutenFree'); // La imagen donde queremos mostrar el ícono de gluten-free
        if (product.glutenFree === 1) {
            // Si glutenFree es 1, mostramos la imagen
            glutenImage.style.display = 'block'; // Aseguramos que la imagen se vea
            glutenImage.src = "images/gluten-free.PNG"; // Establecemos la fuente de la imagen
        } else {
            // Si glutenFree es 0, ocultamos la imagen
            glutenImage.style.display = 'none'; // Ocultamos la imagen
        }
        // Mostrar u ocultar la imagen de "gluten-free" dependiendo del valor de productoPolski
        const productPolski = document.getElementById('product-image-productPolski'); // La imagen donde queremos mostrar el ícono de produkt-polski
        if (product.productoPolski === 1) {
            // Si glutenFree es 1, mostramos la imagen
            productPolski.style.display = 'block'; // Aseguramos que la imagen se vea
            productPolski.src = "images/logoPolski.png"; // Establecemos la fuente de la imagen
        } else {
            // Si glutenFree es 0, ocultamos la imagen
            productPolski.style.display = 'none'; // Ocultamos la imagen
        }

        // Mostrar el nivel de picante
        displaySpicyLevel(product.spicyLevel);  // Mostrar visualmente el nivel de picante



    } else {
        // Redirigir a index.html si no se encuentra el producto
        window.location.href = 'index.html';
    }
}
window.onload = getProductDetails;