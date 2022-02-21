const { DataTypes } = require('sequelize');
const db = require('./index');

const Message = db.define('message', {
  roomId: {
    type: DataTypes.STRING,
  },
  toUserId: {
    type: DataTypes.INTEGER,
  },
  message: {
    type: DataTypes.TEXT,
  },
});

module.exports = Message;
