import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css'; // Adjust the path as necessary
import { Link } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    if (!firstName || !lastName || !email || !mobileNumber || !password || !confirmPassword) {
      setErrorMessage('All fields are required.');
      setShowError(true);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      setShowError(true);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8001/api/auth/register', {
        firstName,
        lastName,
        email,
        mobileNumber,
        password,
      });

      console.log('Registration successful:', response.data);
      alert('User registered successfully!'); // Show success alert

      // Optionally, redirect to the login page or clear the form
      // For example:
      // window.location.href = '/login';

      setShowError(false);
    } catch (error) {
      console.error('Registration failed:', error.response ? error.response.data : error.message);
      setErrorMessage('Registration failed. Please try again.');
      setShowError(true);
    }
  };

  return (
    <section className="register">
      <div className="container">
        <div className="row justify-content-center d-flex">
          <div className="col-md-10">
            <div id="registerForm" className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Register</h5>
                <form>
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="registerFirstName" className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="registerFirstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="registerLastName" className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="registerLastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="registerEmail" className="form-label">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="registerEmail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="registerMobile" className="form-label">Mobile Number</label>
                        <input
                          type="text"
                          className="form-control"
                          id="registerMobile"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="registerPassword" className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="registerPassword"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="confirmPassword"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 justify-content-center d-flex flex-column">
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={handleRegister}
                      >
                        Register
                      </button>
                      {showError && (
                        <div id="registerError" className="text-danger mt-2">
                          {errorMessage}
                        </div>
                      )}
                    </div>
                  </div>
                </form>
                <p className="mt-3">
                  Already have an account?{' '}
                  <Link to="/login" className="text-primary">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
