// Configuração padrão do ORM Sequelize:
const Sequelize = require('sequelize'); // Importa o sequelize
require('dotenv').config(); // Importa as variáveis de ambiente

// Atribuir as variáveis de ambiente para constantes:
const DB_NAME = process.env.MYSQL_DB_NAME;
const DB_USER = process.env.MYSQL_USER;
const DB_HOST = process.env.MYSQL_HOST;
const DB_PASSWORD = process.env.MYSQL_PASSWORD;

// Cria uma nova instancia do Sequelize para se conectar ao banco de dados MySQL:
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
// Passar os dados para o Sequelize
dialect: "mysql", // Aqui nos informamos qual o banco que vamos utilizar
host: DB_HOST, // O host é um banco local
});

module.exports = { sequelize }; // Vamos exportar para poder usar no server.js
