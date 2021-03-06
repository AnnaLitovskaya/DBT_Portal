/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/order */
/* eslint-disable no-console */
const app = require('./app');
const io = require('socket.io');

const syncAndSeed = require('./db/seed');

const PORT = process.env.PORT || 3000;

const init = () => {
  try {
    syncAndSeed();
    const server = app.listen(PORT, () =>
      console.log(`now listening to port ${PORT}`)
    );

    const socketServer = new io.Server(server);
    socketServer.on('connection', (socket) => {
      socket.on('join-portal', (ID) => {
        socket.join(ID);
      });
      socket.on('send', (message) => {
        socketServer.to(message.message.roomId).emit('send', message);
      });
    });
  } catch (err) {
    console.log('error listening on port', err);
  }
};
init();
