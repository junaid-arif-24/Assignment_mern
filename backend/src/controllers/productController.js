const {PRODUCTS} = require('../models/productModel');

const getProducts = (req, res) => {
  if (PRODUCTS.length === 0) {
    res.status(404).json({message: 'No products found'});
  }
  res.json(PRODUCTS);
};

module.exports = {getProducts};
