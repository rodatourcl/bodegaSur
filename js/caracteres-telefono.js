document.getElementById("phone").addEventListener("keydown", function (e) {
    // Permitir solo las teclas numéricas (0-9), retroceso (backspace), tab, y delete.
    if (
        (e.keyCode < 48 || e.keyCode > 57) && // Números del teclado principal
        (e.keyCode < 96 || e.keyCode > 105) && // Números del teclado numérico
        e.keyCode !== 8 && // Retroceso (backspace)
        e.keyCode !== 9 && // Tab
        e.keyCode !== 46 && // Suprimir (delete)
        e.keyCode !== 32 && // Espacio
        e.keyCode !== 189 && // Guion en teclado principal (-)
        e.keyCode !== 109 // Guion en teclado numérico (-)
    ) {
        e.preventDefault(); // Bloquea cualquier otra tecla
    }
});
