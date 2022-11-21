module.exports = (sequelize, DataTypes) => {
    const BookWithdraw = sequelize.define('BookWithdraw', {
      clientId: DataTypes.INTEGER,
      bookId: DataTypes.INTEGER,
      dataDeDevolução: DataTypes.DATE,
    },
    { timestamps: false });

    BookWithdraw.associate = (models) => {
        models.BlogPost.belongsToMany(models.Client, {
          as: 'clients',
          through: 'BookWithdraw',
          foreignKey: 'clientId',
          otherKey: 'bookId',
        });
        models.Category.belongsToMany(models.BlogPost, {
          as: 'books',
          through: 'BookWithdraw',
          foreignKey: 'bookId',
          otherKey: 'clientId',
        });
      }
  
    return BookWithdraw;
  }
