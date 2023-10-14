document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");
    const errorMessageBox = document.getElementById("error-message");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validate the form inputs here
        const username = usernameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;

        const password = passwordInput.value;

        if (username.trim() === "") {
            displayError("Username is required.");
        } else if (!validateEmail(email)) {
            displayError("Invalid email address.");
        }else if (!validatephone(phone)) {
                displayError("Mobile number should be 10 digit.");
        } else if (password.length < 6) {
            displayError("Password must be at least 6 characters.");
        } else {
            // Registration successful
            displaySuccess("Registration successful!");
            // Show the pop-up
            popup.style.display = "block";
        }
    });

    closePopup.addEventListener("click", function () {
        // Close the pop-up
        popup.style.display = "none";
    });

    function displayError(message) {
        errorMessageBox.textContent = message;
        errorMessageBox.style.color = "red";
    }

    function validatephone(phone) {
        // Define a regular expression for a 10-digit phone number
        const phoneRegex = /^\d{10}$/;
    
        // Use the test method to check if the phone number matches the pattern
        return phoneRegex.test(phone);
    }
    function displaySuccess(message) {
        errorMessageBox.textContent = message;
        errorMessageBox.style.color = "green";
    }


    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
