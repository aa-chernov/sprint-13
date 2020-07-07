const usersRouter = require('express').Router();

// eslint-disable-next-line import/no-dynamic-require
const { getUserById, getUsers, createUser } = require('../controllers/users');

usersRouter.route('/users')
  .get(getUsers)
  .post(createUser);
usersRouter.get('/users/:_id', getUserById);

module.exports = usersRouter;
