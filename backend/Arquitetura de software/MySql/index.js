const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

const Author = require('./models/Author');
const Books = require('./models/Books');


app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books', async (_req, res) => {
  const bookList = await Books.getAll();

  res.status(200).json(bookList);
});

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`))
