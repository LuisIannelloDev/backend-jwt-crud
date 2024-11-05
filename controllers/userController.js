// controllers/userController.js

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Asegúrate de importar el modelo correctamente

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Hashear la contraseña antes de guardarla
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword }); // Usa la contraseña hasheada
        await user.save();
        res.status(201).json({ message: 'Usuario creado con éxito' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    const User = require('../models/user');
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Usuario no encontrado' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Contraseña incorrecta' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// controllers/userController.js

// Método para obtener todos los usuarios
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find(); // Obtiene todos los usuarios
        res.json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// controllers/userController.js

// Método para obtener un solo usuario por su ID
exports.getUserById = async (req, res) => {
    const { id } = req.params; // Obtener el ID desde los parámetros de la ruta
    try {
        const user = await User.findById(id); // Buscar el usuario por ID
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};



// Otros métodos CRUD
// exports.getUsers, exports.updateUser, exports.deleteUser
