const userService = require('../service/userService');

const login = async (req, res) => {
  try {
    const result = await userService.login(req.body);
    res.status(200).json({ token: result });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = { login };
