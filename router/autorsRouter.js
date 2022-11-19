const { Router } = require('express');
const autorsController = require('../controller/autorsController.js')

const router = Router();

router.post('/', autorsController.create);

module.exports = { router };
