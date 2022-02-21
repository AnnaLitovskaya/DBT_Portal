const { Router } = require('express');

const router = Router();
const {
  models: { User },
} = require('../db/Associations');

// auth post for user. Returns token.
router.post('/', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await User.authenticate({ email, password });
    res.send({ token });
  } catch (err) {
    next(err);
  }
});

// auth get for user. Returns user.
router.get('/', async (req, res, next) => {
  try {
    const user = await User.byToken(req.headers.authorization);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
