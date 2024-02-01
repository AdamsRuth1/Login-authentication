document.getElementById("submit").addEventListener("click", function () {
    let passwordInput = document.getElementById("password");
    let emailInput = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let emailErrorMessage = document.getElementById("email-error");
    let passwordErrorMessage = document.getElementById("password-error");

    // Validate email

       
    if (!emailPattern.test(emailInput.value)) {
        emailErrorMessage.innerText = "Invalid email format. Please enter a valid email address.";
    } else {
        emailErrorMessage.innerText = "";
 // Retrieve existing emails or initialize an empty array
 let storedEmails = JSON.parse(sessionStorage.getItem('userEmails')) || [];

 // Push the new email into the array
 storedEmails.push(emailInput.value);

 // Save the updated array back to sessionStorage
 sessionStorage.setItem('userEmails', JSON.stringify(storedEmails));
    }

    // Validate password
    let minPasswordLength = 6;
    if (passwordInput.value.length < minPasswordLength) {
        passwordErrorMessage.innerText = "Password must be at least " + minPasswordLength + " characters long.";
    } else {
        passwordErrorMessage.innerText = "";
    }
    // Check if both email and password validations are successful
    if (emailErrorMessage.innerText === "" && passwordErrorMessage.innerText === "") {
        // Show welcome alert
        let welcomeMessage = "Welcome to my page " + emailInput.value;
        alert(welcomeMessage);
        window.location.href = 'https://portal.altschoolafrica.com/applications/school';
    }

    emailInput.value = "";
    passwordInput.value = "";
});
