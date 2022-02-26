/* eslint-disable consistent-return */
/* eslint-disable no-console */
import axios from 'axios';

const createPortal = () => async () => {
  try {
    const uuid = (await axios.get('/api/portal')).data;
    return uuid;
  } catch (err) {
    console.log(err);
  }
};

const joinPortal = (uuid) => async () => {
  try {
    await axios.get(`/api/portal/${uuid}`);
  } catch (err) {
    console.log(err);
  }
};

export { createPortal, joinPortal };
