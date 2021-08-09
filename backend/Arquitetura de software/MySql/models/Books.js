const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
      'SELECT title FROM model_example.books;',
  );

  return books;
};

const getByAuthorId = async (authorId) => {
  const [books] = await connection.execute(
      'SELECT title FROM model_example.books WHERE author_id = ?;',[authorId],
  );

  return books;
};

module.exports = {
  getAll,
  getByAuthorId,
}
