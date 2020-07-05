const cardsRouter = require('express').Router();
const path = require('path');

// eslint-disable-next-line import/no-dynamic-require
const cardsArray = require(path.join(__dirname, '../data/cards.json'));

cardsRouter.get('/cards', (req, res) => {
  res.send(cardsArray);
});

module.exports = cardsRouter;
