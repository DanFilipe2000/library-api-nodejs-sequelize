'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('BooksWithdraw', {
      clientId: {
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
        references: {
          model: 'Clients',
          key: 'id',
        },
        type: DataTypes.INTEGER,
      },
      bookId: {
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
        references: {
          model: 'Books',
          key: 'id',
        },
        type: DataTypes.INTEGER,
      },
      dataDeDevolução: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('BooksWithdraw');
  }
};
