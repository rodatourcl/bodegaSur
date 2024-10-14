// Inicialización de intl-tel-input para selección de código de país
const phoneInputField = document.querySelector("#phoneOrder");
const whatsappCheckbox = document.getElementById('whatsappOrder');
const phoneError = document.getElementById('phoneError'); // Mensaje de error
const charCount = document.getElementById('charCount');
const messageInput = document.getElementById('specialInstructions');

// para reiniciar el valor del local storage 
//localStorage.removeItem('lastSubmissionOrder');

const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "pl", // Cambia esto si necesitas otro país predeterminado
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
});

console.log("intl-tel-input inicializado:", phoneInput);

// Validar el número al escribir
phoneInputField.addEventListener('input', function() {
    const fullPhoneNumber = phoneInput.getNumber(); // Obtener el número completo
    document.getElementById('fullPhoneOrder').value = fullPhoneNumber; // Actualiza el campo oculto

    // Validar número
    if (phoneInput.isValidNumber()) {
        phoneError.style.display = 'none'; // Ocultar mensaje de error
        whatsappCheckbox.disabled = false; // Habilitar checkbox de WhatsApp
         
    } else {
        whatsappCheckbox.checked = false; // Desmarcar checkbox de WhatsApp
        whatsappCheckbox.disabled = true; // Deshabilitar checkbox de WhatsApp
    }
});

// Almacenar el tiempo de inicio del formulario
const formStartTimeOrder = Date.now();

// Validar el número al enviar el formulario
document.getElementById('orderForm').addEventListener('submit', function(event) {
    const isValid = phoneInput.isValidNumber();
    

    if (!isValid) { // validar número
        event.preventDefault(); // Evitar envío del formulario
        phoneError.style.display = 'block'; // Mostrar mensaje de error
    } else {
        
        phoneError.style.display = 'none'; // Ocultar mensaje de error
    }
});

// Contador de caracteres para el mensaje
messageInput.addEventListener('input', function() {
    const currentLength = messageInput.value.length;
    charCount.textContent = `${currentLength}/100 characters`;
});
