const axios = require('axios');

const API_URL = 'https://api.api-futebol.com.br/v1';
const API_KEY = process.env.API_KEY;
console.log('API_KEY usada em apiFutebol.js:', API_KEY); // Log antes de usar

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Authorization': `Bearer ${API_KEY}` }
});

async function getEstatisticasTime(timeId, campeonatoId = '10') {
  try {
    const response = await api.get(`/campeonatos/${campeonatoId}/times/${timeId}/estatisticas`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar estatísticas:', error.response ? error.response.data : error.message);
    throw error;
  }
}

async function getTimesCampeonato(campeonatoId) {
  try {
    const response = await api.get(`/campeonatos/${campeonatoId}/times`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar times:', error.response ? error.response.data : error.message);
    throw error;
  }
}

async function getCampeonatos() {
  try {
    console.log('Fazendo requisição para /campeonatos com Authorization:', api.defaults.headers['Authorization']);
    const response = await api.get('/campeonatos');
    console.log('Resposta de /campeonatos:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar campeonatos:', error.response ? error.response.data : error.message);
    throw error;
  }
}

module.exports = { getEstatisticasTime, getTimesCampeonato, getCampeonatos };