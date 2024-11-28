const messageInput = document.getElementById('messageInput');
const charCount = document.getElementById('charCount');
const phoneInputField = document.querySelector("#phone");
const whatsappCheckbox = document.getElementById('whatsapp');
const phoneError = document.getElementById('phoneErrorForm'); // Mensaje de error

// Configuración de intl-tel-input para selección de código de país
const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "pl",
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
});

// Contador de caracteres para el mensaje
messageInput.addEventListener('input', function() {
    const currentLength = messageInput.value.length;
    const maxLength = 300;

    // Actualiza el contador de caracteres según el idioma actual
    if (currentLanguage === 'es') {
        charCount.textContent = `${currentLength}/${maxLength} caracteres`;
    } 
    if(currentLanguage === 'en')  {
        charCount.textContent = `${currentLength}/${maxLength} characters`;
    }
    if(currentLanguage === 'pl')  {
        charCount.textContent = `${currentLength}/${maxLength} znaków`;
    }
});

// Habilitar el checkbox de WhatsApp solo si hay un número válido
phoneInputField.addEventListener('input', function() {
    const fullPhoneNumber = phoneInput.getNumber(); // Obtiene el número completo
    document.getElementById('fullPhone').value = fullPhoneNumber; // Actualiza el campo visible
    
    if (fullPhoneNumber && phoneInput.isValidNumber()) { // Solo validar si hay número
        phoneError.style.display = 'none'; // Ocultar mensaje de error
        whatsappCheckbox.disabled = false; // Habilitar checkbox de WhatsApp
    } else {
        console.log("Número inválido");
        whatsappCheckbox.checked = false; // Desmarcar checkbox de WhatsApp
        whatsappCheckbox.disabled = true; // Deshabilitar checkbox de WhatsApp
    }
});

// Almacenar el tiempo de inicio del formulario
const formStartTime = Date.now();

// Validar el número al enviar el formulario
document.getElementById('questionForm').addEventListener('submit', function(event) {
    const isValid = phoneInput.isValidNumber();
    const phoneValue = phoneInputField.value.trim(); // Eliminar espacios en blanco

    if (phoneValue && !isValid) {  // Solo validar si hay número
        event.preventDefault(); // Evitar envío del formulario
        phoneError.style.display = 'block'; // Mostrar mensaje de error
    } else {
        phoneError.style.display = 'none'; // Ocultar mensaje de error si es válido o vacío
        
        // Validación del tiempo de envío (completar el formulario demasiado rápido)
        const formCompletionTime = Date.now() - formStartTime;
        if (formCompletionTime < 20000) { // Si el formulario se completa en menos de 20 segundos
            alert('Apparently you are not a human!');
            event.preventDefault(); // Detener el envío
        }

        // Validación del tiempo de frecuencia de envíos (evitar múltiples envíos en 1 hora)
        const lastSubmission = localStorage.getItem('lastSubmission');
        const now = Date.now(); // Hora actual en milisegundos
        const timeLimit = 1 * 60 * 60 * 1000; // 1 hora en milisegundos (1 hora * 60 minutos * 60 segundos * 1000 ms)

        // Verifica si hubo un envío anterior y si no ha pasado 1 hora desde entonces
        if (lastSubmission && now - lastSubmission < timeLimit) {
            // Calcular el tiempo restante antes de que el usuario pueda enviar de nuevo
            const timeRemaining = timeLimit - (now - lastSubmission);
            const minutes = Math.floor(timeRemaining / (1000 * 60)); // Convertir a minutos
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000); // Convertir los restos en segundos

            // Mostrar el tiempo restante en el alert
            alert(`You can only submit the form once every 1 hour.\nTime remaining: ${minutes}m ${seconds}s`);
            
            event.preventDefault(); // Detener el envío del formulario
        } else {
            // Guardar la hora del envío actual en el localStorage
            localStorage.setItem('lastSubmission', now);
        }

        // Si el formulario es válido, lo enviamos y luego limpiamos los campos
        setTimeout(function() {
            // Reiniciar el formulario
            document.getElementById('questionForm').reset();

            // Opcional: Si usas intl-tel-input, reiniciar el número de teléfono
            phoneInput.setNumber(''); // Limpia el número del teléfono
            whatsappCheckbox.disabled = true; // Deshabilitar checkbox
            whatsappCheckbox.checked = false; // Desmarcar checkbox
        }, 500); // Opcionalmente, puedes retrasar el reset para asegurarte de que el formulario se envíe antes de limpiarlo
    }
});