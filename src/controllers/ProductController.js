const mongoose = require('mongoose')
const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {   // method index
    const products = await Product.find();

    return res.json(products);  // return db products
  }
};