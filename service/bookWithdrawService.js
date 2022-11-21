const { Book, BookWithdraw } = require('../database/models');
const moment = require('moment'); // Biblioteca externa para calcular a diferenã de dias entre datas

const createAndUpdate = async ({ clientId, bookId }) => {
  // Verifica se o livro já foi retirado da biblioteca
  const verify = await BookWithdraw.findOne({ where: { bookId } });
  if (verify) throw new Error('O livro já foi retirado na biblioteca');

  // Verifica se o livro existe
  const verifyBook = await Book.findOne({ where: { id: bookId } });
  if (!verifyBook) throw new Error('O livro não existe');

  // Verifica se o cliente ainda pode pegar livros na biblioteca que tem um limite de 3 livros por cliente
  const bookQty = await BookWithdraw.findAll({ where: { bookId } });
  if (bookQty.length === 3) throw new Error('O cliente já pegou a quantidade máxima de livros');

  // Calcula a data para devolução do livro
  const dataDeDevolucao = new Date();
  dataDeDevolucao.setDate(dataDeDevolucao.getDate() + 7);
  
  // Registra no banco de dados a retirada do livro e muda o status do livro para indisposnivel
  const bookWithdrawCreate = await BookWithdraw.create({ clientId, bookId, dataDeDevolucao});
  await Book.update({ disponivel: false }, { where: { id: bookId }});
  const bookAtt = await Book.findOne({ where: { id: bookId }})

  // Retorna para controller a data de devolução do livro
  return [bookWithdrawCreate, bookAtt];
};

const deleteAndUpdate = async ({ id }, { data }) => {
  // Recupera a data em que o livro deveria ser devolvido
  const { dataDeDevolucao } = await BookWithdraw.findOne({ where: { bookId: id } });
  
  // Formata a data para o padrão pt-BR
  const devolutionDate = dataDeDevolucao.toLocaleString("pt-BR").split(' ')[0];

  // Utiliza a biblioteca momento para calcular a diferença em dias entre as datas
  const diferencaDias = moment(data, "DD/MM/YYYY").diff(moment(devolutionDate, "DD/MM/YYYY"));
  const diffAsDays = moment.duration(diferencaDias).asDays();

  // Faz as operações no banco de dados para remover o registro da BookWithdraws e atualiza o status do livro como disponível
  await BookWithdraw.destroy({ where: { bookId: id }});
  await Book.update({ disponivel: true }, { where: { id }});

  // Caso o livro seja entregue com atraso retorna uma mensagem com a quantidade de dias
  if (diffAsDays > 0) return `Livro entregue com ${ diffAsDays } dias de atraso`;
  return "Livro entregue sem atraso, obrigado!";
};

module.exports = { createAndUpdate, deleteAndUpdate };
