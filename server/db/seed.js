/* eslint no-console : 'off' */

const db = require('./index');
const User = require('./User');

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
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = syncAndSeed;
