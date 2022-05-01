/* eslint-disable no-param-reassign */
/* eslint-disable default-param-last */
import { GET_MESSAGES } from '../storeComponents/getMessages';
import { SEND_MESSAGE } from '../storeComponents/sendMessage';

const messageReducer = (state = [], action) => {
  if (action.type === GET_MESSAGES) {
    state = [...action.messages];
  }
  if (action.type === SEND_MESSAGE) {
    state = [...state, action.message];
  }
  return state;
};

export default messageReducer;
