module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
      nome: DataTypes.STRING,
      matricula: DataTypes.STRING,
      telefone: DataTypes.STRING
    },
    { timestamps: false });
  
    return Client;
  }
