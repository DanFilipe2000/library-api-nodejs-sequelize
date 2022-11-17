// Recupera as variáveis de ambiente
require('dotenv').config();
const app = require('./routes.js');

const port = process.env.API_PORT || 3000;

// End-point pradão para garantir que a aplicação está subindo
app.get('/', (_request, response) => {
  response.send('Sucesso!');
});

app.listen(port, () => console.log('ouvindo porta', port));
