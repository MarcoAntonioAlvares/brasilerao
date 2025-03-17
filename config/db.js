const mongoose = require('mongoose');

const conectarBanco = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado ao MongoDB com sucesso!');
  } catch (error) {
    console.log('Erro ao conectar ao MongoDB:', error.message);
  }
};

module.exports = conectarBanco;
