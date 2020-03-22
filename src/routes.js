const express = require('express');
const ProductController = require('./controllers/ProductController');

const routes = express.Router();

routes.get('/products', ProductController.index);   // get Products index page

module.exports  = routes;

