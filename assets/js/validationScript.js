// Get references to the custom alert elements
const customAlert = document.getElementById('custom-alert');
const customAlertMessage = document.getElementById('custom-alert-message');
const customAlertClose = document.getElementById('custom-alert-close');

// Function to show the custom alert
function showCustomAlert(message) {
    customAlertMessage.textContent = message;
    customAlert.style.display = 'flex';
}

// Function to hide the custom alert
function hideCustomAlert() {
    customAlert.style.display = 'none';
}

// Add event listener to the close button
customAlertClose.addEventListener('click', hideCustomAlert);

// Example usage
function validateForm() {
    // Clear any previous error messages
    nameError.innerHTML = '';
    emailError.innerHTML = '';
    phoneError.innerHTML = '';
    subjectError.innerHTML = '';
    submitError.innerHTML = '';

    if (!validateName() || !validateEmail() || !validatePhone() || !validateSubject()) {
        showCustomAlert('Enter correct credentials');
        return false;
    }
    return true;
}
