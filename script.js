// Function to generate a random password
function generatePass() {
    const length = 12; // Set the length of the password
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    // Display the generated password
    document.getElementById('Password').value = password;
}

// Function to copy the password to clipboard
function copyToClipboard() {
    const passwordField = document.getElementById('Password');
    passwordField.select();
    document.execCommand('copy');
}

// Event listeners for button clicks
document.querySelector('button').addEventListener('click', generatePass);
document.querySelector('.display img').addEventListener('click', copyToClipboard);
