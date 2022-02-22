/* eslint-disable object-curly-newline */
const { Router } = require('express');

const router = Router();
const {
  models: { User },
} = require('../db/Associations');

// creates new user
router.post('/', async (req, res, next) => {
  try {
    const { email, password, name, role } = req.body;
    const newUser = await User.create({
      email,
      password,
      name,
      role,
    });
    res.send(newUser);
  } catch (err) {
    next(err);
  }
});

// gets all users
router.get('/', async (req, res, next) => {
  try {
    const users = User.findAll();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
