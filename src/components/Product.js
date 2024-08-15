// src/pages/Product.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/product.css'; // Import the CSS file for styling
import product1 from '../image/bg/product1.png';
import product2 from '../image/bg/product6.png';
import product3 from '../image/bg/product7.png';
import product4 from '../image/bg/product8.png';
import product5 from '../image/bg/product9.png';
import product6 from '../image/bg/product10.png';
import product7 from '../image/bg/product11.png';
import product8 from '../image/bg/product12.png'; // Added import for product8

const Product = () => {
  const navigate = useNavigate();

  // Function to handle "Buy Now" button click
  const handleBuyNow = (productName, productImage, productPrice) => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/product-details', { state: { productName, productImage, productPrice } });
    } else {
      alert('Please log in to purchase products.');
      navigate('/login');
    }
  };

  // Sample products array
  const products = [
    { image: product1, name: 'Bharat NPK', price: '1600/-' },
    { image: product2, name: 'Bharat MOP', price: '1300/-' },
    { image: product3, name: 'Bharat DAP', price: '1800/-' },
    { image: product4, name: 'Bharat TSP', price: '2000/-' },
    { image: product5, name: 'Bharat NPK', price: '1600/-' },
    { image: product6, name: 'Bharat Urea', price: '2500/-' },
    { image: product7, name: 'Bharat DAP', price: '1800/-' },
    { image: product8, name: 'Jaikisan Urea', price: '2300/-' }
  ];

  return (
    <div>
      <section className="py-md-5 py-3">
        <div className="container">
          <h2 className="text-center">Our Products</h2>
          <div className="row">
            {products.map((product, index) => (
              <div className="col-md-4" key={index}>
                <div className="product-item">
                  <img src={product.image} alt={product.name} />
                  <h5 className="mt-3">{product.name}</h5>
                  <p><span>&#8377;</span>{product.price}</p>
                  <button
                    className="buy-now-btn"
                    onClick={() => handleBuyNow(product.name, product.image, product.price)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
