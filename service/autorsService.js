const { Autor } = require('../database/models');

const create = async ({ nome, pais_de_origem }) => {
	const verify = await Autor.findOne({ where: { nome } });
	if (verify) throw new Error('O Autor já foi cadastrado');
  const result = await Autor.create({ nome, pais_de_origem });
	return result;
};

module.exports = { create };
