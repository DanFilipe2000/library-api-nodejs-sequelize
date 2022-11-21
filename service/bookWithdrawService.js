const { Book, BookWithdraw } = require('../database/models');

const createAndUpdate = async ({ clientId, bookId }) => {
  const verify = await BookWithdraw.findOne({ where: { bookId } });
  const verifyBook = await Book.findOne({ where: { id: bookId } });
  if (!verifyBook) throw new Error('O livro não existe');
  if (verify) throw new Error('O livro já foi retirado na biblioteca');
  const dataDeDevolução = new Date();
  dataDeDevolução.setDate(dataDeDevolução.getDate() + 7);
  const bookWithdrawCreate = await BookWithdraw.create({ clientId, bookId, dataDeDevolução});
  await Book.update({ disponivel: false }, { where: { id: bookId }});
  return bookWithdrawCreate.dataDeDevolução;
};

module.exports = { createAndUpdate };
