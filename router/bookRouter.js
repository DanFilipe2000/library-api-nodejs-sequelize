const { Router } = require('express');
const bookController = require('../controller/bookController.js')
const { tokenValidation } = require('../middleware/tokenAuth');

const router = Router();

// Altera registros no banco de dados
router.post('/', tokenValidation, bookController.create);
router.put('/withdraw', tokenValidation, bookController.withdrawUpdate);
router.delete('/devolution/:id', tokenValidation, bookController.withdrawDelete);

// Consulta os registros do banco de dados
router.get('/', tokenValidation, bookController.getAll);
router.get('/:id', tokenValidation, bookController.getById);

module.exports = { router };
