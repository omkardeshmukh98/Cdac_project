// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/style.css';
import product1 from '../image/bg/product1.png';
import product2 from '../image/bg/product6.png';
import product3 from '../image/bg/product7.png';
import slider1 from '../image/bg/aarogy-registration.png';
import slider2 from '../image/bg/aarogya-login.png';
import slider3 from '../image/bg/registration.png';
import imgSrc1 from '../image/bg/fertilizers.png';
import imgSrc2 from '../image/bg/disease1.png';
import imgSrc3 from '../image/bg/cultivating.png';
import imgSrc4 from '../image/bg/money.png';
import prevArrow from '../image/bg/left-arrow.svg';
import nextArrow from '../image/bg/right-arrow.svg';
import ctaImage from '../image/bg/farmerphone1.jpg';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
      const userData = JSON.parse(user);
      setUserName(userData.firstName || 'User');
    }
  }, []);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      localStorage.removeItem('user');
      setIsLoggedIn(false);
      setUserName('');
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  const handleGetSolution = () => {
    if (isLoggedIn) {
      navigate('/get-solution');
    } else {
      alert('Please log in to access the solutions.');
      navigate('/login');
    }
  };

  const handleBuyNow = (productName, productImage, productPrice) => {
    if (isLoggedIn) {
      navigate('/product-details', { state: { productName, productImage, productPrice } });
    } else {
      alert('Please log in to purchase products.');
      navigate('/login');
    }
  };

  const handleInvestmentLogger = () => {
    if (isLoggedIn) {
      navigate('/investment');
    } else {
      alert('Please log in to access the Investment Logger.');
      navigate('/login');
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <img src={prevArrow} alt="Prev" />,
    nextArrow: <img src={nextArrow} alt="Next" />,
  };

  return (
    <div>
      {/* Navbar */}
      {/* Add your navbar code here */}

      {/* Carousel */}
      <section className="home">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="slider-item">
              <img src={slider1} alt="Slider 1" className="slider-image" />
             
            </div>
            <div className="slider-item">
              <img src={slider2} alt="Slider 2" className="slider-image" />
             
            </div>
            <div className="slider-item">
              <img src={slider3} alt="Slider 3" className="slider-image" />
             
            </div>
          </Slider>
        </div>
      </section>
      <section>
      <div class="tomorrow"
           data-location-id="133504"
           data-language="HI"
           data-unit-system="METRIC"
           data-skin="dark"
           data-widget-type="upcoming"
           
        >
          <a
            href="https://www.tomorrow.io/weather-api/"
            rel="nofollow noopener noreferrer"
            target="_blank"
            
          >
          </a>
        </div>
        </section>

      {/* Crop Images Section */}
      <section className="crop-images-section py-md-5 py-3">
  <div className="container crop-images">
    <div className="row">
      {[ 
        { title: 'Fertilizers', imgSrc: imgSrc1, link: '/fertilizers', text: 'Find the right amount of fertilizers for your crops.' },
        { title: 'Disease Information', imgSrc: imgSrc2, link: '/disease-info', text: 'Learn about common crop diseases.' },
        { title: 'Cultivation Guidance', imgSrc: imgSrc3, link: '/cultivation-guidance', text: 'Get guidance on crop cultivation.' },
        { 
          title: 'Investment Logger', 
          imgSrc: imgSrc4, 
          onClick: handleInvestmentLogger, 
          text: 'Keep track of your expenses.' 
        }
      ].map((item, index) => (
        <div key={index} className="col-md-6 my-3">
          {item.onClick ? (
            <div onClick={item.onClick} className="image-animate-wrapper">
              <div className="image-wrapper">
                <h2>{item.title}</h2>
                <img src={item.imgSrc} className="img-fluid" alt={item.title} />
                <div className="image-overlay">
                  <div className="image-text">
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link to={item.link} className="image-animate-wrapper">
              <div className="image-wrapper">
                <h2>{item.title}</h2>
                <img src={item.imgSrc} className="img-fluid" alt={item.title} />
                <div className="image-overlay">
                  <div className="image-text">
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cropenq">
          <img src={ctaImage} alt="Farmer" className="cta-image" />
          <div className="text-overlay">
            <h2>
              Now just send us <br /> description of your crop & <br />
              Get a tailored solution for <br /> your crops.
            </h2>
            <button className="cta-button" onClick={handleGetSolution}>
              Get Solution Now
            </button>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-md-5 py-3">
        <div className="container">
          <h2 className="text-center mb-4">Our Products</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="product-item">
                <img src={product1} alt="Product 1" />
                <h5 className="mt-3">Bharat Urea</h5>
                <p><span>&#8377;</span>1500/-</p>
                <button className="buy-now-btn" onClick={() => handleBuyNow('Bharat Urea', product1, '1500/-')}>Buy Now</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <img src={product2} alt="Product 2" />
                <h5 className="mt-3">Bharat MOP</h5>
                <p><span>&#8377;</span>1300/-</p>
                <button className="buy-now-btn" onClick={() => handleBuyNow('Bharat MOP', product2, '1300/-')}>Buy Now</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <img src={product3} alt="Product 3" />
                <h5 className="mt-3">Bharat DAP</h5>
                <p><span>&#8377;</span>1800/-</p>
                <button className="buy-now-btn" onClick={() => handleBuyNow('Bharat DAP', product3, '1800/-')}>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="footer">
        <div class="container">
          <div class="row">
           
            <div class="col-md-4">
              <h5 class="footer-title">About Us</h5>
              <p>
                We provide comprehensive information to farmers on 
                variouscrop diseases,right amount of fertilizers.We 
                also provide farmsers with high quality assured 
                products and listen to their queries & provide 
                personalized solutions.
                Our mission is to promote 
                sustainable agriculture and empower farmers with the 
                help of technology.
              </p>
            </div>

           
            <div class="col-md-4">
             
            </div>
            <div class="col-md-4">
              <h5 class="footer-title">Contact Us</h5>
              <address>
                <strong>Agro🌱Arogya</strong><br />
                IET,Shivajinagar<br />
                Pune, Maharashtra 411 016.<br />
                <abbr title="Phone">Phone:</abbr> (020) 456-7890<br />
                <abbr title="Email">Email:</abbr>
                <a href="mailto:info@agriculture.com">agro@arogya.com</a>
              </address>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col text-center">
              <p>&copy; 2024 Agro🌱Arogya. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
