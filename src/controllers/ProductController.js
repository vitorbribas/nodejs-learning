const mongoose = require('mongoose')
const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {   // method index
    const products = await Product.find();

    return res.json(products);  // return db products
  },

  async create(req, res) {   // method new
    const product = await Product.create(req.body); // assign requisition body to new product
    return res.json(product);
  }
};