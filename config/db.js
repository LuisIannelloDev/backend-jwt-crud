// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // Ya no necesitas estas opciones en versiones recientes del controlador de MongoDB
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });

        console.log(`MongoDB conectado: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error al conectar a MongoDB: ${error.message}`);
        process.exit(1); // Termina el proceso si no se puede conectar a MongoDB
    }
};

module.exports = connectDB;

