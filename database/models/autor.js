module.exports = (sequelize, DataTypes) => {
    const Autor = sequelize.define('Autor', {
      nome: DataTypes.STRING,
      pais_de_origem: DataTypes.STRING,
    },
    { timestamps: false });
  
    return Autor;
  }
