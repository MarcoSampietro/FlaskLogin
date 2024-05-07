document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let formData = new FormData(this);

    fetch('/elenco', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.message === 'Login successful') {
            document.getElementById('message').innerHTML = '<p>Login successful!</p>';
            document.getElementById('loginForm').style.display = 'none';
        } else {
            document.getElementById('message').innerHTML = '<p>Invalid username or password</p>';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});