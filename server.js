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
app.get('/', (req, res) => {  // (requisition, response)
  Product.create({
    title: 'Luminária',
    description: 'Cor preta',
    url: 'https://casaevideodigital.vteximg.com.br/arquivos/ids/193831-1000-1000/Luminaria-de-Mesa-Asus-Copa-Preta-Bivolt-1489895.jpg?v=636782267778700000'
  });

  return res.send('Hello, Vitão');
});

// Uses port 3001 for application
app.listen(3001);