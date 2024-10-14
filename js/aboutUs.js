function toggleText(event) {
    event.preventDefault(); // Evita que el enlace recargue la página

    const moreInfo = document.getElementById('more-info');
    const moreInfo2 = document.getElementById('more-info2');
    
    // Cambiar la visibilidad de los párrafos
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        moreInfo2.style.display = 'block';
        event.target.innerText = 'Read less'; // Cambiar el texto del enlace
    } else {
        moreInfo.style.display = 'none';
        moreInfo2.style.display = 'none';
        event.target.innerText = 'Read more'; // Cambiar el texto del enlace
    }
}
