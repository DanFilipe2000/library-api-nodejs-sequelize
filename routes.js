const express = require('express');

const app = express();

app.use(express.json());

const userRouter = require('./router/userRouter.js');
const bookRouter = require('./router/bookRouter.js');
const clientRouter = require('./router/clientRouter.js');
const autorsRouter = require('./router/autorsRouter.js');

// As rotas da api devem ser colocadas abaixo
app.use('/login', userRouter.router);
app.use('/book', bookRouter.router);
app.use('/client', clientRouter.router);
app.use('/autor', autorsRouter.router);

module.exports = app;
