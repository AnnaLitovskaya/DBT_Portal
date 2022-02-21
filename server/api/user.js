/* eslint-disable object-curly-newline */
const { Router } = require('express');

const router = Router();
const User = require('../db/User');

// auth post for user. Returns token.
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

module.exports = router;
