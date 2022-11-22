const autorsService = require('../service/autorsService');

const create = async (req, res) => {
  try {
    const result = await autorsService.create(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = { create };
