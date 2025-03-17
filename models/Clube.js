const mongoose = require('mongoose');

const clubeSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  vitorias: { type: Number, default: 0 },
  derrotas: { type: Number, default: 0 },
  empates: { type: Number, default: 0 },
  golsMarcados: { type: Number, default: 0 },
  escanteios: { type: Number, default: 0 },
});

const Clube = mongoose.model('Clube', clubeSchema);

module.exports = Clube;
