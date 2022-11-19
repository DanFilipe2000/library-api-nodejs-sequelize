const { Router } = require('express');
const clientController = require('../controller/clientController.js')

const router = Router();

router.post('/', clientController.create);

module.exports = { router };
