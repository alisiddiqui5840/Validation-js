document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessageBox = document.getElementById("error-message");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Replace with your actual authentication logic
        const validUsername = "user123";
        const validPassword = "pass123";

        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;

        if (enteredUsername === validUsername && enteredPassword === validPassword) {
            // Successful login
            errorMessageBox.textContent = "Login successful!";
            errorMessageBox.style.color = "green";
        } else {
            // Failed login
            errorMessageBox.textContent = "Invalid username or password.";
            errorMessageBox.style.color = "red";
        }
    });
});
