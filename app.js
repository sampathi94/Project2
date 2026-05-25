function selectCountry(value) {
    if (value) {
        localStorage.setItem('selectedCountry', value);
        document.getElementById('authButtons').classList.add('show');
    } else {
        document.getElementById('authButtons').classList.remove('show');
    }
}

function goToGuest() {
    window.location.href = 'guest.html';
}

function goToLogin() {
    window.location.href = 'login.html';
}
