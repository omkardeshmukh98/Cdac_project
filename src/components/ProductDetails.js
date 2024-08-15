// src/pages/ProductDetails.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { productName, productImage, productPrice } = location.state || {};

  // State for managing form visibility and form data
  const [isFormVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    note: ''
  });

  // Function to handle form data change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit form data
    alert('Form submitted successfully!');
    setFormVisible(false);
    navigate('/'); // Redirect to home screen after submission
    // You can add additional logic to send the data to the server here
  };

  // Function to handle order button click
  const handleOrder = () => {
    setFormVisible(true);
  };

  return (
    <div className="product-details">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={productImage} alt={productName} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>{productName}</h2>
            <p><span>&#8377;</span>{productPrice}</p>
            <button className="btn btn-primary" onClick={handleOrder}>
              Order Now
            </button>
            {isFormVisible && (
              <form onSubmit={handleSubmit} className="mt-3">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="note">Cash on Delivery Note</label>
                  <textarea
                    id="note"
                    name="note"
                    value={formData.note}
                    onChange={handleInputChange}
                    className="form-control"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
