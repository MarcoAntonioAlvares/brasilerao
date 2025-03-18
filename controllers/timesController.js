const { getEstatisticasTime, getTimesCampeonato, getCampeonatos } = require('../services/apiFutebol');

async function obterEstatisticas(req, res) {
  try {
    const timeId = req.params.id;
    const campeonatoId = req.query.campeonatoId || '10'; // Permite passar campeonatoId como query
    const estatisticas = await getEstatisticasTime(timeId, campeonatoId);
    res.json(estatisticas);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar estatísticas', erro: error.message });
  }
}

async function obterTimes(req, res) {
  try {
    const campeonatoId = req.params.campeonatoId;
    const times = await getTimesCampeonato(campeonatoId);
    res.json(times);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar times', erro: error.message });
  }
}

async function obterCampeonatos(req, res) {
  try {
    const campeonatos = await getCampeonatos();
    res.json(campeonatos);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar campeonatos', erro: error.message });
  }
}

module.exports = { obterEstatisticas, obterTimes, obterCampeonatos };