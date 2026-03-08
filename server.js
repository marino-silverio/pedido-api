const express = require("express");

const app = express();

const orderRoutes = require("./routes/orderRoutes");

app.use(express.json());

app.use("/order", orderRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});