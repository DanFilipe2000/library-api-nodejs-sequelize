const { Book } = require('../database/models');

const create = async ({ isbn, nome, autor, editora, ano_de_publicacao, disponivel }) => {
	const verify = await Book.findOne({ where: { nome } });
	if (verify) throw new Error('O Livro já foi cadastrado');
  const result = await Book.create({ isbn, nome, autor, editora, ano_de_publicacao, disponivel });
	return result;
};

module.exports = { create };
