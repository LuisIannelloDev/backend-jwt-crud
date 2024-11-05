// routes/userRoutes.js

const express = require('express');
const { register, login, getUsers, getUserById } = require('../controllers/userController');
const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', register);
// Ruta para iniciar sesión
router.post('/login', login);

// Ruta para obtener todos los usuarios
router.get('/', getUsers);  // Esto devolverá todos los usuarios

// Ruta para obtener un solo usuario por su ID
router.get('/:id', getUserById);  // Esto devolverá el usuario por ID

module.exports = router;

