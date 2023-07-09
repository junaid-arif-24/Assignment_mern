import React, {useContext,useState,useEffect} from 'react';
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";


import './cart.css';
const Cart = () => {
  const {cartItems, getTotalCartAmount, checkout} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/cart?userId=2`);
        const data = await response.json();

        if (response.ok) {
          setProducts(...data);
        } 
        } catch (error) {
        throw new Error('Error occurred while fetching products.');
      } 
    
    };
    fetchProducts();
  });  

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map(product => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate('/')}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate('/orders');
            }}>
            Checkout
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
export default Cart;
