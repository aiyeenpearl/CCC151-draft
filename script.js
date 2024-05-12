document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields');
        return false;
    }

    // Here you would usually handle the login request to your server
    alert('Logging in...');
    // Simulating successful login
    window.location.href = 'home.html'; // Redirect to a home page (which you will need to create)
});
