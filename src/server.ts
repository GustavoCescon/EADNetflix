import express from "express";
import { sequelize } from "./database";

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log("Conexão com o banco de dados foi bem sucedido");
  });
  console.log(`Servidor iniciado na porta ${PORT}`);
});
