document.addEventListener('DOMContentLoaded', () => {
    /**
     * Toggles visibility of forms based on the form ID
     * @param {string} formId - The ID of the form to show
     */
    function toggleForm(formId) {
        // Hide all forms
        document.querySelectorAll('.form-card').forEach(form => {
            form.classList.add('hidden');
        });

        // Show the selected form
        document.getElementById(`${formId}-form`).classList.remove('hidden');
    }

    // Attach the toggleForm function to global scope for inline onclick events
    window.toggleForm = toggleForm;

    /**
     * Handle form submission and redirect users
     */
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Login Form Submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simulate login validation (replace this logic with real backend validation)
        if (email === 'user@example.com' && password === '123') {
            alert('Login successful!');
            window.location.href = 'index.html'; // Redirect to dashboard
        } else if(email === 'admin@example.com' && password === '123') {
           alert('Login successful!');
            window.location.href = 'admin/admin.html'
        }else {
            alert('Invalid email or password!');
        }
    });

    // Register Form Submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const email = document.getElementById('email-register').value;
        const password = document.getElementById('password-register').value;

        // Simulate registration success (replace this logic with real backend validation)
        alert('Registration successful! You can now log in.');
        toggleForm('login'); // Switch to the login form
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const form = params.get('form');
    if (form) {
        toggleForm(form);
    }
});