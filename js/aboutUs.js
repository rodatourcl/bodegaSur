function toggleText(event) {
    event.preventDefault(); // Evita que el enlace recargue la página

    const moreInfo = document.getElementById('more-info');
    const moreInfo2 = document.getElementById('more-info2');
    
    // Obtener las traducciones correctas dependiendo del idioma actual
    //const translations = currentLanguage === 'es' ? translationsEs : translationsEn;

    const translationMap = {
        en: translationsEn,
        es: translationsEs,
        pl: translationsPl
    };
    
    const translations = translationMap[currentLanguage] || translationsEn; // Default to English if no match

    // Cambiar la visibilidad de los párrafos
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        moreInfo2.style.display = 'block';
        event.target.innerText = translations['readLess']; // Cambiar el texto del enlace
    } else {
        moreInfo.style.display = 'none';
        moreInfo2.style.display = 'none';
        event.target.innerText = translations['readMore']; // Cambiar el texto del enlace
    }
}