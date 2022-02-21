/* eslint-disable default-param-last */
import { LOGIN_USER } from '../storeComponents/loginUser';
import { LOGOUT_USER } from '../storeComponents/logoutUser';

const userReducer = (state = {}, action) => {
  if (action.type === LOGIN_USER) {
    return { ...state, ...action.user };
  }
  if (action.type === LOGOUT_USER) {
    return {};
  }
  return state;
};

export default userReducer;
