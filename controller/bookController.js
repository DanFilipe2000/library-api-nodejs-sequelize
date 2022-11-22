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

const withdrawUpdate = async (req, res) => {
  try {
    const result = await bookWithdrawService.createAndUpdate(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

const withdrawDelete = async (req, res) => {
  try {
    const result = await bookWithdrawService.deleteAndUpdate(req.params, req.body);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

const getAll = async (req, res) => {
  try {
    const result = await bookService.findAll(req.query);
    if (result.length === 0) {
      return res.status(400).json({ message: "Nenhum registro foi encontrado pro filtro selecionado" });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

const getById = async (req, res) => {
  try {
    const result = await bookService.findByPk(req.params);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { create, withdrawUpdate, withdrawDelete, getAll, getById };
