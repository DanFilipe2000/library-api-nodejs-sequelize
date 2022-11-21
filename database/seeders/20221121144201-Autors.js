module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Autors',
      [{
        nome: "Machado de Assis",
        pais_de_origem: "Brasil",
      },
      {
        nome: "Aluísio de Azevedo",
        pais_de_origem: "Brasil",
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Autors', null, {});
  },
};
