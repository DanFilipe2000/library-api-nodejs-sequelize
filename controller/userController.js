const userService = require('../service/userService');

const login = async (req, res) => {
  // O try catch é utilizado para capturar erros caso algum erro ocorra na utilização de uma função no caso é função da service que faz a query pro banco de dados
  try {
    const token = await userService.login(req.body);
    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = { login };
