const { Router } = require('express');

const router = Router();

router.post('/', usrController.login);

module.exports = { router };
