import React, {useEffect, useState} from 'react';
// import { PRODUCTS } from "../../products";
import {Product} from './Product';
import './shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();

        if (response.ok) {
          setProducts(data);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError('Error occurred while fetching products.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Junaid Shop</h1>
      </div>

      <div className="products">
        {products.map(product => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
export default Shop;