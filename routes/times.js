const express = require('express');
const router = express.Router();
const Clube = require('../models/Clube');

// Rota para listar todos os clubes
router.get('/', async (req, res) => {
  try {
    // Buscar todos os clubes no banco de dados
    const clubes = await Clube.find();
    res.json(clubes); // Retorna a lista de clubes como JSON
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar os clubes', error: err });
  }
});

module.exports = router;

