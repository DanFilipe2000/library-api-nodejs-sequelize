'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Clients', {
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
      matricula: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      telefone: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Clients');
  }
};