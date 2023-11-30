const mongoose = require('mongoose');

// Define un esquema para el equipo
const equipoSchema = new mongoose.Schema({
  numEquipo: { type: String, required: true },
  consumo: { type: Number, required: true },
  nombreEquipo: { type: String, required: true },
  referencia: { type: String, required: true },
});

// Define un esquema para el propietario
const propietarioSchema = new mongoose.Schema({
  propietario: { type: String, required: true },
  equipos: [equipoSchema], // Un arreglo de objetos de equipo
});

// Crea el modelo 'Propietario' utilizando el esquema del propietario
const Propietario = mongoose.model('Propietario', propietarioSchema);

module.exports = Propietario;