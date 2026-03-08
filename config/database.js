const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/pedido-api");
    console.log("Banco conectado");
  } catch (error) {
    console.error("Erro ao conectar no banco:", error);
  }
};

module.exports = connectDB;