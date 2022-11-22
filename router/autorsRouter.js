const { Router } = require('express');
const autorsController = require('../controller/autorsController.js')
const { tokenValidation } = require('../middleware/tokenAuth');

const router = Router();

router.post('/', tokenValidation, autorsController.create);

module.exports = { router };
