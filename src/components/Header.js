import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ isLoggedIn, setIsLoggedIn, userName }) => {
  const navigate = useNavigate();

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      localStorage.removeItem('user');
      setIsLoggedIn(false);
    } else {
      navigate('/login'); // Navigate to the login screen
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h4>Agro🌱Arogya</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
          <div id="google_translate_element" style={{ marginRight: '10px' }}></div>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feedback">
                Feedback
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reference">
                References
              </Link>
            </li>
            <li className="nav-item ms-2">
           
              <button
                type="button"
                className="btn btn-danger"
                id="login-logout-btn"
                onClick={handleLoginLogout}
              >
                {isLoggedIn ? `Logout (${userName})` : 'Login'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
