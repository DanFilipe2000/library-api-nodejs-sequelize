require('dotenv').config();

const DB_NAME = process.env.MYSQL_DB_NAME;
const DB_USER = process.env.MYSQL_USER;
const DB_HOST = process.env.MYSQL_HOST;
const DB_PASSWORD = process.env.MYSQL_PASSWORD;
const DB_PORT = process.env.MYSQL_PORT;

module.exports = {
  development: {
    username: DB_USER || 'root',
    password: DB_PASSWORD || 'root',
    database: DB_NAME || 'libray-api',
    host: DB_HOST || '127.0.0.1',
    port: DB_PORT || '3306',
    dialect: 'mysql',
  },
};
