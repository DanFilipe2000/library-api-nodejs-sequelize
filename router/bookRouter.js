const { Router } = require('express');
const bookController = require('../controller/bookController.js')
const { tokenValidation } = require('../middleware/tokenAuth');

const router = Router();

router.post('/', tokenValidation, bookController.create);
router.post('/withdraw', tokenValidation, bookController.update);

module.exports = { router };
