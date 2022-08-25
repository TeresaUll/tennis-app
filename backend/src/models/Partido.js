const { Schema, model } = require('mongoose');

const partidoSchema = new Schema({
    dia: Number,
    mes: Number,
    ano: Number,
    hora: String,
    lugar: String,
    dificultad: String
}, {
    timestamps: true
});

module.exports = model('Partido', partidoSchema, 'partidos');