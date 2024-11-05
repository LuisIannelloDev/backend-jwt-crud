const userForm = document.getElementById('userForm');
const userList = document.getElementById('userList');

// Función para obtener usuarios y mostrarlos
async function getUsers() {
    const response = await fetch('http://localhost:5000/api/users');
    const users = await response.json();
    userList.innerHTML = ''; // Limpiar la lista antes de mostrar nuevos usuarios
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.username} (${user.email})`;
        userList.appendChild(li);
    });
}

// Manejo del formulario
userForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
        getUsers(); // Actualizar la lista de usuarios
        userForm.reset(); // Limpiar el formulario
    } else {
        console.error('Error al crear el usuario');
    }
});

// Obtener usuarios al cargar la página
getUsers();
