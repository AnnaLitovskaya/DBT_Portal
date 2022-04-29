const { db } = require('./index');
const User = require('./User');
const Message = require('./Message');

// associations
Message.belongsTo(User, { as: 'fromUser' });
Message.belongsTo(User, { as: 'toUser' });

// export models and db
module.exports = {
  db,
  models: {
    Message,
    User,
  },
};
