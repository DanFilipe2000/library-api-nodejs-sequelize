const { Router } = require('express');

const router = Router();

router.post('/login', userController.login);

module.exports = { router };
