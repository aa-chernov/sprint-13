const cardsRouter = require('express').Router();

// eslint-disable-next-line import/no-dynamic-require
const { getCards, createCard, deleteCard } = require('../controllers/cards');

cardsRouter.route('/cards')
  .get(getCards)
  .post(createCard);
cardsRouter.delete('/cards/:_id', deleteCard);

module.exports = cardsRouter;
