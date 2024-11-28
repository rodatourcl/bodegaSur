document.getElementById("phoneOrder").addEventListener("keydown", function (e) {
    // Permitir solo las teclas numéricas (0-9), retroceso (backspace), tab, y delete.
    if (
        !(
            (e.key >= '0' && e.key <= '9') ||   // Números (0-9)
            e.key === 'Backspace' ||             // Retroceso (backspace)
            e.key === 'Tab' ||                   // Tab
            e.key === 'Delete' ||                // Suprimir (delete)
            e.key === ' ' ||                     // Espacio
            e.key === '-'                        // Guion (-)
        )
    ) {
        e.preventDefault(); // Bloquea cualquier otra tecla
    }
});