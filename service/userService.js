const { User } = require('../database/models');
const jwt = require('../jwt/auth');

const login = async ({ email, password }) => {
  const data = await User.findOne({ where: { email }}); // Faz a query pro banco de dados e retorna o usuário de acordo com o email passado
  if (!data || data.dataValues.password !== password) throw new Error('Senha inválida ou usuário inexistente'); // Caso o usuário não exista ou senha for inválida dispara um erro
  const token = jwt.createToken(data.dataValues.name); // Cria um token para autenticar nas demais rotas
  return token; // Retorna o token para ser utilizado na header das outras rotas
}

module.exports = {
  login,
}
