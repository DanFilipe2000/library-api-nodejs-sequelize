module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
      isbn: DataTypes.STRING,
      nome: DataTypes.STRING,
      autor: DataTypes.STRING,
      editora: DataTypes.STRING,
      ano_de_publicacao: DataTypes.INTEGER,
    },
    { timestamps: false });
  
    return Book;
  }
