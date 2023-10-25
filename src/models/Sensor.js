const { Schema, model } = require("mongoose");

const SensorSchema = new Schema(
  {
      
    nombre: { type: String,required: true},
    ubicacion: { type: String,required: true},
    tipo: { type: String,required: true},
    latitud: { type: String,required: true},
    longitud: { type: String,required: true},
    date:{ type: Date, default: Date.now }

    },

);

module.exports = model("sensores", SensorSchema);