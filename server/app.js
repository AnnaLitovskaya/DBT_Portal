/* eslint-disable no-console */
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./api/router');

const app = express();

app.use(morgan('dev'));

app.use('/public', express.static('./public'));

app.use(express.json());

app.use('/api', router);

app.get('/', (req, res, next) => {
  try {
    res
      .status(200)
      .sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  } catch (error) {
    next(error);
  }
});

app.use((error, req, res) => {
  console.log(error.message);
  res.status(error.statusCode || 500).send({ error: error.message });
});

module.exports = app;
