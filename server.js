const express = require('express'); // import Express and return a function
const mongoose = require('mongoose'); // import Mongoose to work with MongoDB database
const requireDir = require('require-dir');  // import RequireDir to require all models once

// Init Application
const app = express();

// Init DB
mongoose.connect(
  'mongodb://localhost:27017/nodeapi',
  {useNewUrlParser: true, useUnifiedTopology: true}
);

// Require app models
requireDir('./src/models');  // require Product model

const Product = mongoose.model('Product');

// Routes
app.use('/api', require('./src/routes'));

// Uses port 3001 for application
app.listen(3001);