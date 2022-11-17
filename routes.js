const express = require('express');

const app = express();

app.use(express.json());

const userRouter = require('./router/userRouter.js')
const bookRouter = require('./router/bookRouter.js')

// As rotas da api devem ser colocadas abaixo
app.use('/login', userRouter.router);
app.use('/book', bookRouter.router)

module.exports = app;
