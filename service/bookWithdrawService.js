const { Book, BookWithdraw } = require('../database/models');

const createAndUpdate = async ({ clientId, bookId }) => {
  // Verifica se o livro já foi retirado da biblioteca
  const verify = await BookWithdraw.findOne({ where: { bookId } });
  if (verify) throw new Error('O livro já foi retirado na biblioteca');

  // Verifica se o livro existe
  const verifyBook = await Book.findOne({ where: { id: bookId } });
  if (!verifyBook) throw new Error('O livro não existe');

  // Verifica se o cliente ainda pode pegar livros na biblioteca que tem um limite de 3 livros por cliente
  const bookQty = await BookWithdraw.find({ where: { bookId } });
  if (bookQty.length === 3) throw new Error('O cliente já pegou a quantidade máxima de livros');

  // Calcula a data para devolução do livro
  const dataDeDevolução = new Date();
  dataDeDevolução.setDate(dataDeDevolução.getDate() + 7);
  
  // Registra no banco de dados a retirada do livro e muda o status do livro para indisposnivel
  const bookWithdrawCreate = await BookWithdraw.create({ clientId, bookId, dataDeDevolução});
  await Book.update({ disponivel: false }, { where: { id: bookId }});

  // Retorna para controller a data de devolução do livro
  return bookWithdrawCreate.dataDeDevolução;
};

module.exports = { createAndUpdate };
