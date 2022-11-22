const { Router } = require('express');
const userController = require('../controller/userController.js')

const router = Router();

router.post('/', userController.login);

module.exports = { router };
