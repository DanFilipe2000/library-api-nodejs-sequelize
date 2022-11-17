const { User } = require('../database/models');
const jwt = require('../jwt/auth');

const login = async ({ email, password }) => {
  const data = await User.findOne({ where: { email }});
  if (!data || data.dataValues.password !== password) throw new Error('Senha Inválida');
  const token = jwt.createToken(data.dataValues.name);
  return token;
}

module.exports = {
  login,
}
