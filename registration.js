document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");
    const errorMessageBox = document.getElementById("error-message");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    const docFileInput = document.getElementById("doc-file");
    const fileErrorMessage = document.getElementById("file-error-message");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validate the form inputs here
        const username = usernameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;
        const password = passwordInput.value;

        const docFile = docFileInput.files[0];

        if (username.trim() === "") {
            displayError("Username is required.");
        } else if (!validateEmail(email)) {
            displayError("Invalid email address.");
        } else if (!validatephone(phone)) {
            displayError("Invalid Mobile number.");
        } else if (password.length < 6) {
            displayError("Password must be at least 6 characters.");
        } else if (!validateDocFile(docFile)) {
            displayError("Invalid or too large DOC file.");
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

    function displaySuccess(message) {
        errorMessageBox.textContent = message;
        errorMessageBox.style.color = "green";
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
        return emailRegex.test(email);
    }

    function validatephone(phone) {
        const phoneRegex = /^\d{11}$/;
        return phoneRegex.test(phone);
    }

    function validateDocFile(file) {
        if (!file) {
            fileErrorMessage.textContent = "Please select a DOC file.";
            fileErrorMessage.style.color = "red";
            return false;
        }

        const maxSizeInBytes = 15 * 1024 * 1024; // 15 MB
        if (file.size > maxSizeInBytes) {
            fileErrorMessage.textContent = "File size exceeds 15 MB limit.";
            fileErrorMessage.style.color = "red";
            return false;
        }

        fileErrorMessage.textContent = ""; // Clear any previous error message
        return true;
    }
});

