const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {   // method index
    const products = await Product.find();

    return res.json(products);  // return db products
  },

  async create(req, res) {   // method new
    const product = await Product.create(req.body); // assign requisition body to new product
    return res.json(product);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(product);
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);

    return res.send();
  },



  
};