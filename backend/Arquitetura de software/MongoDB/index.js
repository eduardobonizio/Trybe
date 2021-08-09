const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const Author = require('./controllers/Author');
const Books = require('./models/Books');

const errorMiddleware = require('./middlewares/error');


app.use(bodyParser.json());
app.use(errorMiddleware);

app.get('/authors', Author.getAll);
app.get('/authors/:id', Author.findById);
app.post('/authors', Author.create);

app.get('/books', async (req, res) => {
  const authorId = req.query.author_id;
  if(authorId){
    const bookList = await Books.getByAuthorId(authorId);

    return res.status(200).json(bookList);
  }
  const bookList = await Books.getAll();

  return res.status(200).json(bookList);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Books.findById(id);

  if (!book[0]) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(book);
});


app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`))
