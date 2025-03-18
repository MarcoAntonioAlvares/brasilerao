const dotenv = require('dotenv');

// Carrega o .env antes de qualquer outro módulo
dotenv.config({ path: './.env' });
console.log('API_KEY carregada em app.js:', process.env.API_KEY);

const express = require('express');
const timesRouter = require('./routes/times');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/times', timesRouter);

app.get('/', (req, res) => {
  res.send('API de Futebol está funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});