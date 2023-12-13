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
  totalConsumo: { type: Number, default: 0 }, // Nuevo campo para almacenar la suma total
});

// Middleware para actualizar la suma total antes de guardar
propietarioSchema.pre('save', function (next) {
  // Calcula la suma total de consumo
  this.totalConsumo = this.equipos.reduce((sum, equipo) => sum + equipo.consumo, 0);
  next();
});

// Crea el modelo 'Propietario' utilizando el esquema del propietario
const Propietario = mongoose.model('Propietario', propietarioSchema);

module.exports = Propietario;
