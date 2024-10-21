// Function to simulate OTP sending (for demo purposes)
function sendOTP() {
    const phone = document.getElementById('phone').value;
    if (phone) {
        alert('OTP sent to ' + phone);
    } else {
        alert('Please enter your phone number first.');
    }
}

// Function to handle redirection to the login page
function redirectToLogin() {
    window.location.href = 'login.html';  // Replace with your login page URL
}

// Function to handle form submission
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const otp = document.getElementById('otp').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const bloodGroup = document.getElementById('bloodGroup').value;

    if (otp === "1234") {  // Mock OTP validation
        alert('Registration successful for ' + name);
    } else {
        alert('Invalid OTP, please try again.');
    }
});
