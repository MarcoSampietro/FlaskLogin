document.getElementById('loginForm').addEventListener('submit', async (event) => {
event.preventDefault();

const formData = new FormData(event.target);
const username = formData.get('username');
const password = formData.get('password');

const response = await fetch('/login', {
    method: 'POST',
    body: formData
});

const data = await response.json();
const responseMessage = document.getElementById('responseMessage');
if (data.success) {
    responseMessage.innerHTML = `Benvenuto, ${data.name} ${data.surname}!`;
} else {
    responseMessage.innerHTML = data.message;
}
});