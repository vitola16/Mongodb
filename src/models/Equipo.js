const { Schema, model } = require("mongoose");

const EquipoSchema = new Schema(
  {
      
    consumo: { type: String,required: true},
    tipos: {type: Array, required: true},
    date:{ type: Date, default: Date.now }


    },

);

module.exports = model("Equipos_Registrados", EquipoSchema);