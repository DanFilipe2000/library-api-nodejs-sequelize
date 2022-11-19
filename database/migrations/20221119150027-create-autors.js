// O comando responsável por criar as migrations é o seguinte:
// npx sequelize migration:create --name=create-autors
// onde create-users é o nome da migration

'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Autors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      pais_de_origem: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Autors');
  }
};