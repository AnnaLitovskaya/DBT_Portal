/* eslint-disable object-curly-newline */
const { Router } = require('express');
const { v4: uuidV4 } = require('uuid');

const router = Router();

router.get('/', (req, res, next) => {
  try {
    res.send(uuidV4());
  } catch (err) {
    next(err);
  }
});

router.get('/:room', async (req, res, next) => {
  try {
    window.socket.emit('join-room', 10, req.params.room);
    // res.render('room', { roomId: req.params.room });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
