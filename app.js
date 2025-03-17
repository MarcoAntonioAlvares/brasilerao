const express = require('express');
const conectarBanco = require('./config/db'); // Conexão com o banco de dados
const dotenv = require('dotenv');  // Carregar variáveis de ambiente
const timesRouter = require('./routes/times');  // Importar as rotas de times

dotenv.config();  // Carregar variáveis do arquivo .env

const app = express(); // Inicializar o Express
const port = process.env.PORT || 3000;  // Definir a porta

// Conectar ao MongoDB
conectarBanco();

// Middleware para usar JSON nas requisições
app.use(express.json());  // Permitir que a API receba e envie JSON

// Usar as rotas de times
app.use('/times', timesRouter);

// Rota simples para verificar se está funcionando
app.get('/', (req, res) => {
  res.send('API de Futebol está funcionando!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

console.log('MONGO_URI:', process.env.MONGO_URI);  // Verifica o valor de MONGO_URI
