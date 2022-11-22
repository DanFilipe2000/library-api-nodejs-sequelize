module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Books',
      [{
        isbn: "9780850515022",
        nome: "Memórias Póstumas de Brás Cubas",
        autor: "Machado de Assis",
        editora: "Tipografia Nacional",
        ano_de_publicacao: 1881,
        disponivel: true,
      },
      {
        isbn: "9788582850343",
        nome: "O Cortiço",
        autor: "Aluísio Azevedo",
        editora: "B. L. Garnier",
        ano_de_publicacao: 1890,
        disponivel: true,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  },
};
