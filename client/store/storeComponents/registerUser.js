/* eslint-disable consistent-return */
/* eslint-disable no-console */
import axios from 'axios';

const createUser = (user) => async () => {
  try {
    const newUser = await axios.post('/api/user', user);
    return newUser;
  } catch (err) {
    console.log(err);
  }
};

export default createUser;
