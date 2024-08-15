import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Add Link here
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css'; // Adjust the path as necessary

const Login = () => {
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Replace with actual API call
    try {
      const response = await fetch('http://localhost:8001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginIdentifier,
          password: loginPassword,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(data));
        // Redirect to home page
        navigate('/');
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.error('Login error:', error);
      setShowError(true);
    }
  };

  return (
    <section className="login">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div id="loginForm" className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Login</h5>
                <form>
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="loginIdentifier" className="form-label">
                        Email or Mobile Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="loginIdentifier"
                        value={loginIdentifier}
                        onChange={(e) => setLoginIdentifier(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="loginPassword" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="loginPassword"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row mt-3">
                    <div className="col-12 justify-content-center d-flex flex-column">
                      <button
                        type="button"
                        className="btn btn-success px-md-5 px-4"
                        onClick={handleLogin}
                      >
                        Login
                      </button>
                      {showError && (
                        <div id="loginError" className="text-danger mt-2">
                          Invalid identifier or password
                        </div>
                      )}
                    </div>
                  </div>
                </form>
                <p className="mt-3">
                  Don't have an account?{' '}
                  <Link to="/registration" className="text-primary">
                    Register
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

export default Login;
