const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {  // (requisition, response)
  return res.send('Hello, Vitão');
});

module.exports  = routes;

