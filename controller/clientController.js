const clientService = require('../service/clientService');

const create = async (req, res) => {
  try {
    const result = await clientService.create(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = { create };
