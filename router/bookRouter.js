const { Router } = require('express');
const bookController = require('../controller/bookController.js')
const { tokenValidation } = require('../middleware/tokenAuth');

const router = Router();

router.post('/', tokenValidation, bookController.create);
router.put('/withdraw', tokenValidation, bookController.withdrawUpdate);
router.delete('/devolution/:id', tokenValidation, bookController.withdrawDelete);

module.exports = { router };
