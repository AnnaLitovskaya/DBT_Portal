/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import axios from 'axios';

// action type
const SEND_MESSAGE = 'SEND_MESSAGE';

// action creators
const _sendMessage = (message) => ({ type: SEND_MESSAGE, message });

// thunk
const sendMessage = (roomId, messageToSend) => async (dispatch) => {
  try {
    const newMessage = (
      await axios.post(`/api/message/${roomId}`, messageToSend)
    ).data;
    window.socket.emit('send', _sendMessage(newMessage));
    dispatch(_sendMessage(newMessage));
    return newMessage;
  } catch (err) {
    console.log(err);
  }
};

export { sendMessage, SEND_MESSAGE };
