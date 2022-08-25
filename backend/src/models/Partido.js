const { Schema, model } = require('mongoose');

const partidoSchema = new Schema({
    dia: String,
    mes: String,
    ano: String,
    hora: String,
    lugar: String,
    dificultad: String
}, {
    timestamps: true
});

module.exports = model('Partido', partidoSchema, 'partidos');