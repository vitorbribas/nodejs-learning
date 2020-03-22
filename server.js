const express = require('express'); // import Express and return a function
const mongoose = require('mongoose'); // import Mongoose to work with MongoDB database

// Init Application
const app = express();

// Init DB
mongoose.connect(
  'mongodb://localhost:27017/nodeapi',
  {useNewUrlParser: true, useUnifiedTopology: true}
);

// Require app models
require('./src/models/Product');  // require Product model

// Routes
app.get('/', (req, res) => {  // (requisition, response)
  res.send('Hello, Vitão')
});

// Uses port 3001 for application
app.listen(3001);