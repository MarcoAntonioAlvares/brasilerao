const express = require('express');
const { obterEstatisticas, obterTimes, obterCampeonatos } = require('../controllers/timesController');
const router = express.Router();

router.get('/:id/estatisticas', obterEstatisticas);
router.get('/campeonato/:campeonatoId/times', obterTimes);
router.get('/campeonatos', obterCampeonatos);

module.exports = router;
