const { Sequelize } = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
});

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Conexão estabelecida com sucesso.");

    // Cria a base de dados se ela não existir
    await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${config.DB}`);

    console.log("Base de dados criada ou já existente.");
  } catch (error) {
    console.error("Não foi possível conectar ao banco de dados:", error);
  }
}

main();
