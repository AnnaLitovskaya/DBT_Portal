/* eslint-disable no-underscore-dangle */
const LOGOUT_USER = 'LOGOUT USER';

const _logout = () => ({ type: LOGOUT_USER });

const logout = () => {
  window.localStorage.removeItem('userToken');
  return (dispatch) => {
    dispatch(_logout());
  };
};

export { LOGOUT_USER, logout };
