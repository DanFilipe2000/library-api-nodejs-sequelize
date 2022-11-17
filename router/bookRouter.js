const { Router } = require('express');
const bookController = require('../controller/bookController.js')

const router = Router();

router.post('/', bookController.create);

module.exports = { router };
