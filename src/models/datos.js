const { Schema, model } = require("mongoose");

const DestiladorSchema = new Schema(
  {
    
    volumenagua: { type: Number,required: true},
    tempe_inicial: { type: Number,required: true},
    tempe_final: { type: Number,required: true},
    latitud: { type: Number,required: true},
    intensidadsolar: { type: Number,required: true},
    calor_prom: { type: Number,required: true},
    horas_radiacion: { type: Number,required: true},
    horas_utilizacion: { type: Number,required: true},
    altura_lamina: { type: Number,required: true},
    potencia_paneles: { type: Number,required: true},
    amperaje_bat: { type: Number,required: true},
    nombre: { type: String, required: true},
    },
    date: { type: Date, default: Date.now }
);

module.exports = model("DestiladorSolar", DestiladorSchema);