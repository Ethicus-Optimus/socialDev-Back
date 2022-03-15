'use strict';

const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT;
const notFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500')
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_MONGO_SERVER);

//hello world
app.get('/', (request, response) => {
  response.send('working');
});

//error handling
app.use(notFound);
app.use(serverError);


module.exports = {
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('Server on port: ' + PORT);
    });
  },
  app,
};