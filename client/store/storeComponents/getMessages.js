/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
import axios from 'axios';

// action type
const GET_MESSAGES = 'GET_MESSAGES';

// action creators
const _getMessages = (messages) => ({ type: GET_MESSAGES, messages });

// thunk
const getMessages = (roomId) => async (dispatch) => {
  try {
    const messages = (await axios.get(`/api/portal/${roomId}`)).data;
    dispatch(_getMessages(messages));
    return messages;
  } catch (err) {
    console.log(err);
  }
};

export { getMessages, GET_MESSAGES };
