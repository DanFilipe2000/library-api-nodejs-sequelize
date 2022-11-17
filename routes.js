const express = require('express');

const app = express();

app.use(express.json());

const userRouter = require('./router/userRouter.js')

// As rotas da api devem ser colocadas abaixo
app.use('/login', userRouter.router);

module.exports = app;
