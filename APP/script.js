document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Simular la verificación del correo electrónico
    if (validateEmail(email)) {
        document.getElementById('confirmation-message').innerText = `¡Gracias, ${name}! Tu correo electrónico (${email}) ha sido recibido y verificado.`;
    } else {
        document.getElementById('confirmation-message').innerText = 'Por favor, introduce una dirección de correo electrónico válida.';
    }
});

// Función simple para validar el formato del correo electrónico
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
