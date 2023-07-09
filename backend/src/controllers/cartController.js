const {CART} = require('../models/cartModel');

const addToCart = (req, res) => {
  const userId = req.query.userId;
  const productsArray = req.body;
  const user = CART.find(cart => cart.userId === userId);
  if (user) {
    user.products = user.products.concat(productsArray);
    res.status(201).json({message: 'Product added to Cart'});
  } else {
    let productCart = {
      userId: `${userId}`,
      products: [].concat(productsArray),
    };
    CART.push(productCart);
    return res.status(201).send('Product added to Cart');
  }
};

const getCart = (req, res) => {
  const userId = req.query.userId;
  const user = CART.find(cart => cart.userId === userId);
  if (user) {
    if (user.products.length === 0) {
      res.status(404).json({message: 'No products found in the cart'});
    } else {
      res.json(user.products);
    }
  } else {
    res.status(404).json({message: 'Nothing in the cart'});
  }
};

module.exports = {addToCart, getCart};
