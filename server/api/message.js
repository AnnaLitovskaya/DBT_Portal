/* eslint-disable object-curly-newline */
const { Router } = require('express');
const {
  models: { Message, User },
} = require('../db/Associations');

const router = Router();

// get all messages in the room
router.get('/:room', async (req, res, next) => {
  try {
    const roomId = req.params.room;
    const messages = await Message.findAll({
      where: {
        roomId,
      },
      include: ['fromUser', 'toUser'],
    });
    res.send(messages);
  } catch (err) {
    next(err);
  }
});

// creates a new message
router.post('/:room', async (req, res, next) => {
  try {
    const roomId = req.params.room;
    const { message, toUserId, token } = req.body;
    const user = await User.byToken(token);
    const newMessage = await Message.create({
      fromUserId: user.id,
      toUserId,
      message,
      roomId,
    });
    const returnMessage = await Message.findOne({
      where: {
        id: newMessage.id,
      },
      include: ['fromUser', 'toUser'],
    });
    res.send(returnMessage);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
