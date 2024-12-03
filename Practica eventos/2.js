// Referencias a elementos
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const submitButton = document.getElementById('submit-btn');

// Validadores
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const isValidEmail = (email) => emailRegex.test(email);
const isValidPassword = (password) => password.length >= 8 && password.length <= 10;

// Gestión de eventos
emailInput.addEventListener('blur', () => {
    if (!isValidEmail(emailInput.value)) {
        emailError.style.display = 'inline';
    } else {
        emailError.style.display = 'none';
    }
    validateForm();
});

passwordInput.addEventListener('blur', () => {
    if (!isValidPassword(passwordInput.value)) {
        passwordError.style.display = 'inline';
    } else {
        passwordError.style.display = 'none';
    }
    validateForm();
});

emailInput.addEventListener('input', () => {
    emailError.style.display = 'none';
    validateForm();
});

passwordInput.addEventListener('input', () => {
    passwordError.style.display = 'none';
    validateForm();
});

const validateForm = () => {
    if (isValidEmail(emailInput.value) && isValidPassword(passwordInput.value)) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
};

// Prevenir envío del formulario por defecto
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulario enviado correctamente.');
});