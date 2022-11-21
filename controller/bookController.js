const bookService = require('../service/bookService');
const bookWithdrawService = require('../service/bookWithdrawService');

const create = async (req, res) => {
  try {
    const result = await bookService.create(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

const update = async (req, res) => {
  try {
    const result = await bookWithdrawService.createAndUpdate(req.body);
    res.status(200).json(`Sucesso! Devolva o livro até o dia ${ result.toLocaleString("pt-BR").split(' ')[0] }`);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = { create, update };
