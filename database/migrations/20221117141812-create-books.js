// O comando responsável por criar as migrations é o seguinte:
// npx sequelize migration:create --name=create-users
// onde create-users é o nome da migration

'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      isbn: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      autor: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      editora: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      ano_de_publicacao: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Books');
  }
};