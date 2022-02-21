const { db } = require('./index');
const User = require('./User');
const Message = require('./Message');

// associations
Message.belongsTo(User, { as: 'fromUser' });

// export models and db
module.exports = {
  db,
  models: {
    Message,
    User,
  },
};
