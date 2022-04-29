/* eslint-disable default-param-last */
import { GET_MESSAGES } from '../storeComponents/getMessages';

const userReducer = (state = {}, action) => {
  if (action.type === GET_MESSAGES) {
    return { ...state, ...action.messages };
  }
  return state;
};

export default userReducer;
