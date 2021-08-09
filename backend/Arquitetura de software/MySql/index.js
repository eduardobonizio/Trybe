const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

const Author = require('./models/Author');
const Books = require('./models/Books');


app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.get('/books', async (req, res) => {
  const authorId = req.query.author_id;
  if(authorId){
    const bookList = await Books.getByAuthorId(authorId);

    return res.status(200).json(bookList);
  }
  const bookList = await Books.getAll();

  return res.status(200).json(bookList);
});

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`))
