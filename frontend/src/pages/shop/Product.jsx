import React, {useContext} from 'react';
import {ShopContext} from '../../context/shop-context';

export const Product = props => {
  const {
    id,
    productName,
    price,
    description,
    imageUrl, 
  } = props.data;
  const {addToCart, cartItems} = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
    <div className="card">
      <img src={imageUrl} alt="product_image" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <p>{description}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  </div>
  
  );
};
export default Product;