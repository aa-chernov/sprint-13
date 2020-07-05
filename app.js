const express = require('express');
const path = require('path');
const cardsPath = require('./routes/cards');
const usersPath = require('./routes/users');
const resourcePath = require('./routes/resource');

const { PORT = 3000 } = process.env;

const app = express();

app
  .use(express.static(path.join(__dirname, 'public')))
  .use('/', cardsPath)
  .use('/', usersPath)
  .use('/', resourcePath)
  .listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Слушаем порт: ${PORT}`);
  });
