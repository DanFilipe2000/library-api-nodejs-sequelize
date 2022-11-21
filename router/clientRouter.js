const { Router } = require('express');
const clientController = require('../controller/clientController.js');
const { tokenValidation } = require('../middleware/tokenAuth');

const router = Router();

router.post('/', tokenValidation, clientController.create);

module.exports = { router };
