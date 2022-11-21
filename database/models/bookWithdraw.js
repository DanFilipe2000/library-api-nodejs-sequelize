module.exports = (sequelize, DataTypes) => {
    const BookWithdraw = sequelize.define('BookWithdraw', {
      clientId: DataTypes.INTEGER,
      bookId: DataTypes.INTEGER,
      dataDeDevolução: DataTypes.DATE,
    },
    { timestamps: false });

    BookWithdraw.associate = (models) => {
        models.Client.belongsToMany(models.Book, {
          as: 'clients',
          through: 'BookWithdraw',
          foreignKey: 'clientId',
          otherKey: 'bookId',
        });
        models.Book.belongsToMany(models.Client, {
          as: 'books',
          through: 'BookWithdraw',
          foreignKey: 'bookId',
          otherKey: 'clientId',
        });
      }
  
    return BookWithdraw;
  }
