/* eslint no-console : 'off' */

const db = require('./index');
const {
  models: { User, Message },
} = require('./Associations');

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all([
      User.create({
        email: 'therapist1@gmail.com',
        name: 'Sandra',
        password: 'test123',
        role: 'Therapist',
      }),
      User.create({
        email: 'therapist2@gmail.com',
        name: 'Lenny',
        password: 'test123',
        role: 'Therapist',
      }),
      User.create({
        email: 'client1@gmail.com',
        name: 'Anna',
        password: 'test123',
        role: 'Client',
      }),
      User.create({
        email: 'client2@gmail.com',
        name: 'Ben',
        password: 'test123',
        role: 'Client',
      }),
      User.create({
        email: 'client3@gmail.com',
        name: 'Sarah',
        password: 'test123',
        role: 'Client',
      }),
      User.create({
        email: 'client4@gmail.com',
        name: 'Otto',
        password: 'test123',
        role: 'Client',
      }),
    ]);

    await Promise.all([
      Message.create({
        roomId: 1,
        fromUserId: 1,
        message: 'Hello World!',
      }),
      Message.create({
        roomId: 1,
        fromUserId: 2,
        message: 'This chat is lit.',
      }),
      Message.create({
        roomId: 1,
        fromUserId: 1,
        message: 'I am sample text.',
      }),
    ]);
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = syncAndSeed;
