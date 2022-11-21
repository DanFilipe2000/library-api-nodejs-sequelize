const { Book } = require('../database/models');

const create = async ({ isbn, nome, autor, editora, ano_de_publicacao, disponivel }) => {
	const verify = await Book.findOne({ where: { isbn } });
	if (verify) throw new Error('O Livro já foi cadastrado');
  const result = await Book.create({ isbn, nome, autor, editora, ano_de_publicacao, disponivel });
	return result;
};

const findAll = async () => await Book.findAll();

const findByPk = async ({ id }) => await Book.findOne({ where: { id }});

module.exports = { create, findAll, findByPk };
