document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let formData = new FormData(this);

    fetch('https://3245-marcosampiet-flasklogin-kfwjlqg5ant.ws-eu111.gitpod.io/elenco', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.message === 'Login successful') {
            document.getElementById('message').innerHTML = '<p>Login successful!</p>';
            document.getElementById('loginForm').reset();
            document.getElementById('loginForm').style.display = 'none';
        } else {
            document.getElementById('message').innerHTML = '<p>Invalid username or password</p>';
        }
    })
    .catch(error => {
        console.error('Error:', error.message);
        document.getElementById('message').innerHTML = '<p>An error occurred, please try again later</p>';
    });
});