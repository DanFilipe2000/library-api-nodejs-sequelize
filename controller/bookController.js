const bookService = require('../service/bookService');

const create = async (req, res) => {
  try {
    const result = await bookService.create(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = { create };
