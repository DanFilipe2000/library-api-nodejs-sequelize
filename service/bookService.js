const { Book } = require('../database/models');

const create = async ({ isbn, nome, autor, editora, ano_de_publicacao, disponivel }) => {
	const verify = await Book.findOne({ where: { isbn } });
	if (verify) throw new Error('O Livro já foi cadastrado');
  const result = await Book.create({ isbn, nome, autor, editora, ano_de_publicacao, disponivel });
	return result;
};

const findAll = async (query) => {
  // const { isbn, nome, autor, editora, ano_de_publicacao, disponivel } = query;
  const isbn = query['isbn'];
  const nome = query['nome'];
  const autor = query['autor'];
  const editora = query['editora'];
  const ano_de_publicacao = query['anoDePublicacao'];
  var disponivel = query['disponivel'];
  console.log(disponivel)

  if (isbn) {
    return await Book.findAll({ where: { isbn } });
  } else if (nome) {
    return await Book.findAll({ where: { nome } });
  } else if (autor) {
    return await Book.findAll({ where: { autor: autor.trim() } });
  } else if (editora) {
    return await Book.findAll({ where: { editora: editora.trim() } });
  } else if (ano_de_publicacao) {
    return await Book.findAll({ where: { ano_de_publicacao } });
  } else if (disponivel) {
    if (disponivel === "true") {
      disponivel = 1
    } else {
      disponivel = 0
    }
    return await Book.findAll({ where: { disponivel } });
  } else {
    return await Book.findAll();
  };
}

const findByPk = async ({ id }) => await Book.findOne({ where: { id }});

module.exports = { create, findAll, findByPk };
