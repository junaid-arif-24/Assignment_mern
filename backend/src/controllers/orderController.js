const {CART} = require('../models/cartModel');
const {ORDERS} = require('../models/orderModel');

const placeOrder = (req, res) => {
  const userId = req.query.userId;
  const userCart = CART.find(cart => cart.userId === userId);

  if (!userCart) {
    return res.status(404).json({message: "User's cart not found"});
  }

  const products = userCart.products;

  if (products.length === 0) {
    return res.status(400).json({message: 'Cart is empty'});
  }

  const order = {
    userId: userId,
    products: products,
    totalPrice: calculateTotalPrice(products),
    timestamp: new Date().toISOString(),
  };

  ORDERS.push(order);
  clearUserCart(userId);

  return res
    .status(201)
    .json({message: 'Order placed successfully', order: order});
};

function calculateTotalPrice(products) {
  let totalPrice = 0;
  for (const product of products) {
    totalPrice += product.price;
  }
  return totalPrice;
}

function clearUserCart(userId) {
  const index = CART.findIndex(cart => cart.userId === userId);
  if (index !== -1) {
    CART.splice(index, 1);
  }
}

module.exports = {placeOrder};
