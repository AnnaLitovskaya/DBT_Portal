/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';

// action type
const LOGIN_USER = 'LOGIN_USER';

// action creators
const _loginUser = (user) => ({ type: LOGIN_USER, user });

// thunk
const loginUser = (user) => async (dispatch) => {
  try {
    let response;
    let token;
    if (user) {
      response = (await axios.post('/api/auth', user)).data;
      token = response.token;
      window.localStorage.setItem('token', token);
    } else {
      token = window.localStorage.getItem('token');
    }
    const authenticatedUser = await axios.get('/api/auth', {
      headers: {
        authorization: token,
      },
    });
    delete authenticatedUser.data.password;
    if (authenticatedUser.data.email) {
      dispatch(_loginUser(authenticatedUser.data));
    }
    if (authenticatedUser.data) return true;
  } catch (err) {
    console.log(err.response);
  }
};

export { loginUser, LOGIN_USER };
