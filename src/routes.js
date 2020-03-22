const express = require('express');
const ProductController = require('./controllers/ProductController');

const routes = express.Router();

routes.get('/products', ProductController.index);   // get Products index page
routes.post('/products', ProductController.create); // insert new Product
routes.get('/products/:id', ProductController.show); // show Product details
routes.put('/products/:id', ProductController.update);  // update Product attributes
routes.delete('/products/:id', ProductController.destroy); // remove Product from database

module.exports  = routes;

