Backend JWT CRUD
This is a backend for an authentication system based on JSON Web Tokens (JWT) using Node.js, Express, and MongoDB.

The project includes the implementation of two main routes: register and login, and allows JWT-based authentication to protect routes and access user data.

Technologies
Node.js: JavaScript runtime environment.
Express.js: Node.js framework for building APIs.
MongoDB: NoSQL database for storing users.
Mongoose: ODM (Object Data Modeling) for MongoDB.
JWT: Authentication based on JSON Web Tokens.
Bcryptjs: For encrypting user passwords.
Requirements
Before running this project, make sure you have the following installed:

Node.js
MongoDB (You can use MongoDB Atlas for cloud databases)
Postman or Thunder Client (to test the API routes)
Installation
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/your_username/backend-jwt-crud.git
Navigate to the project directory:

bash
Copy code
cd backend-jwt-crud
Install the dependencies:

bash
Copy code
npm install
Create a .env file at the root of the project and add the necessary environment variables:

env
Copy code
MONGO_URI=your_mongo_uri_here
JWT_SECRET=your_secret_key_here
PORT=5000
MONGO_URI: The connection URI for your MongoDB database (you can get it from MongoDB Atlas).
JWT_SECRET: A secret key used to sign the JWT tokens.
Start the server:

bash
Copy code
npm start
The server will run on port 5000 (or the port configured in the .env file).

API Routes
1. User Registration
URL: /api/users/register

Method: POST

Description: Create a new user.

Body:

json
Copy code
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password123"
}
Response:

json
Copy code
{
  "message": "User created successfully"
}
2. User Login
URL: /api/users/login

Method: POST

Description: Authenticate the user and return a JWT token.

Body:

json
Copy code
{
  "email": "user@example.com",
  "password": "password123"
}
Response:

json
Copy code
{
  "token": "your_jwt_token_here"
}
3. Get Users (optional, if you add this route)
URL: /api/users

Method: GET

Description: Get a list of all registered users.

Response:

json
Copy code
[
  {
    "_id": "user_id",
    "name": "User Name",
    "email": "user@example.com",
    "password": "encrypted_password"
  }
]
Testing
To test the API routes, you can use Postman or Thunder Client and send requests to the routes mentioned above.

Test Registration:
Open Postman or Thunder Client.
Send a POST request to http://localhost:5000/api/users/register with the body as shown above.
You should receive a success message in the response.
Test Login:
Send a POST request to http://localhost:5000/api/users/login with the email and password of a registered user.
If the credentials are correct, you should receive a JWT token in the response.
Security
User passwords are hashed using bcryptjs before being stored.
Protected routes require a JWT token to be accessed.
Deployment
To deploy this backend, you can use platforms like Heroku, AWS, or DigitalOcean.

Heroku:

Create an account on Heroku.

Use the Heroku CLI to deploy your project:

bash
Copy code
heroku create
git push heroku master
heroku config:set MONGO_URI=your_mongo_uri JWT_SECRET=your_secret_key
AWS EC2 or DigitalOcean:

Upload your code to a virtual server and configure environment variables as you would locally.
License
This project is licensed under the Apache-2.0 License.





----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Backend JWT CRUD
Este es un backend para un sistema de autenticación basado en JSON Web Tokens (JWT) utilizando Node.js, Express, y MongoDB.

El proyecto incluye la implementación de dos rutas principales: registro y login, además de permitir la autenticación con JWT para proteger rutas y acceder a los datos de los usuarios.

Tecnologías
Node.js: Entorno de ejecución para JavaScript.
Express.js: Framework de Node.js para construir APIs.
MongoDB: Base de datos NoSQL para almacenar los usuarios.
Mongoose: ODM (Object Data Modeling) para MongoDB.
JWT: Autenticación basada en JSON Web Tokens.
Bcryptjs: Para encriptar las contraseñas de los usuarios.
Requisitos
Antes de ejecutar este proyecto, asegúrate de tener lo siguiente instalado:

Node.js
MongoDB (puedes usar MongoDB Atlas para bases de datos en la nube)
Postman o Thunder Client (para realizar pruebas de las rutas de la API)
Instalación
Clona el repositorio en tu máquina local:

bash
Copy code
git clone https://github.com/tu_usuario/backend-jwt-crud.git
Navega al directorio del proyecto:

bash
Copy code
cd backend-jwt-crud
Instala las dependencias:

bash
Copy code
npm install
Crea un archivo .env en la raíz del proyecto y agrega las variables de entorno necesarias:

env
Copy code
MONGO_URI=tu_mongo_uri_aqui
JWT_SECRET=tu_clave_secreta_aqui
PORT=5000
MONGO_URI: La URI de conexión a tu base de datos MongoDB (puedes obtenerla de MongoDB Atlas).
JWT_SECRET: Una clave secreta que se utiliza para firmar los tokens JWT.
Inicia el servidor:

bash
Copy code
npm start
El servidor estará corriendo en el puerto 5000 (o el puerto configurado en el archivo .env).

Rutas de la API
1. Registro de usuario
URL: /api/users/register

Método: POST

Descripción: Crea un nuevo usuario.

Body:

json
Copy code
{
  "name": "Nombre del usuario",
  "email": "correo@ejemplo.com",
  "password": "contraseña123"
}
Respuesta:

json
Copy code
{
  "message": "Usuario creado con éxito"
}
2. Login de usuario
URL: /api/users/login

Método: POST

Descripción: Autentica al usuario y devuelve un token JWT.

Body:

json
Copy code
{
  "email": "correo@ejemplo.com",
  "password": "contraseña123"
}
Respuesta:

json
Copy code
{
  "token": "jwt_token_aqui"
}
3. Consultar los usuarios (opcional, si agregas esta ruta)
URL: /api/users

Método: GET

Descripción: Obtiene una lista de todos los usuarios registrados.

Respuesta:

json
Copy code
[
  {
    "_id": "usuario_id",
    "name": "Nombre del usuario",
    "email": "correo@ejemplo.com",
    "password": "contraseña_encriptada"
  }
]
Pruebas
Para probar las rutas de la API, puedes usar Postman o Thunder Client y enviar las solicitudes a las rutas mencionadas arriba.

Probar Registro:
Abre Postman o Thunder Client.
Realiza una solicitud POST a http://localhost:5000/api/users/register con el cuerpo que se muestra arriba.
Deberías recibir una respuesta con un mensaje de éxito.
Probar Login:
Realiza una solicitud POST a http://localhost:5000/api/users/login con el correo y la contraseña de un usuario registrado.
Si los datos son correctos, deberías recibir un token JWT en la respuesta.
Seguridad
Las contraseñas de los usuarios se guardan encriptadas usando bcryptjs.
Las rutas protegidas requieren un token JWT para ser accedidas.
Despliegue
Para desplegar este backend, puedes utilizar plataformas como Heroku, AWS, o DigitalOcean.

Heroku:

Crea una cuenta en Heroku.

Usa la CLI de Heroku para subir tu proyecto:

bash
Copy code
heroku create
git push heroku master
heroku config:set MONGO_URI=tu_mongo_uri JWT_SECRET=tu_clave_secreta
AWS EC2 o DigitalOcean:

Sube tu código a un servidor virtual y configura las variables de entorno como lo harías localmente.
Licencia
Este proyecto está licenciado bajo la Licencia Apache-2.0.

