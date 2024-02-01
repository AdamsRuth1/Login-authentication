document.getElementById("resetsubmit").addEventListener("click", function () {
    // Retrieve the array of emails
    let storedEmails = JSON.parse(sessionStorage.getItem('userEmails')) || [];
    let resetEmail = document.getElementById("resetemail").value;

    // Check if the entered email exists in the array
    if (storedEmails.includes(resetEmail)) {
        alert("Check your email for the password reset link");
    } else {
        document.getElementById("error-span").innerText = "Email not registered";
    }
});
