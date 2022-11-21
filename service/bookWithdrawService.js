const { Book, BookWithdraw } = require('../database/models');

const createAndUpdate = async ({ clientId, bookId }) => {
  const dataDeDevolução = new Date();
  dataDeDevolução.setDate(dataDeDevolução.getDate() + 7);
  const bookWithdrawCreate = await BookWithdraw.create({ clientId, bookId, dataDeDevolução});
  await Book.update({ disponivel: false }, { where: { id: bookId }, returning: true});
  return bookWithdrawCreate.dataDeDevolução;
};

module.exports = { createAndUpdate };
