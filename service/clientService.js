const { Client } = require('../database/models');

const create = async ({ nome, matricula, telefone }) => {
	const verify = await Client.findOne({ where: { matricula } });
	if (verify) throw new Error('O cliente já foi cadastrado');
  const result = await Client.create({ nome, matricula, telefone });
	return result;
};

module.exports = { create };
