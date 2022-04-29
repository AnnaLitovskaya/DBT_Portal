import { combineReducers } from 'redux';
import userReducer from './userReducer';
import messageReducer from './messageReducer';

const megaReducer = combineReducers({
  user: userReducer,
  messages: messageReducer,
});

export default megaReducer;
