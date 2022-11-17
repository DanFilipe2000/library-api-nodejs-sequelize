// Recupera as variáveis de ambiente
require('dotenv').config();
const app = require('./routes.js');
const { sequelize } = require('./db.js');

const port = process.env.API_PORT || 3000;

// Conecta o banco quando subir o servidor
sequelize.sync(() => console.log(`Banco de dados conectado: ${process.env.MYSQL_DB_NAME}`));

// End-point padrão para garantir que a aplicação está subindo
app.get('/', (_request, response) => {
  response.send('Sucesso!');
});

app.listen(port, () => console.log('ouvindo porta', port));
