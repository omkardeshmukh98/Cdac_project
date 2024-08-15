import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Fertilizer from './components/Fertilizer';
import Disease from './components/Disease';
import Cultivation from './components/Cultivation';
import Investment from './components/Investment';
import Feedback from './components/Feedback';
import References from './components/Reference';
import Product from './components/Product';
import GetSolution from './components/GetSolution';
import Header from './components/Header'
import ProductDetails from './components/ProductDetails';



function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // Check login status from local storage
        const user = localStorage.getItem('user');
        if (user) {
            setIsLoggedIn(true);
            const userData = JSON.parse(user);
            setUserName(userData.firstName || 'User'); // Adjust according to your user data
        }
    }, []);

    return (
        <Router>
            <div>
                <Header
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    userName={userName}
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/fertilizers" element={<Fertilizer />} />
                    <Route path="/investment" element={<Investment />} />
                    <Route path="/disease-info" element={<Disease />} />
                    <Route path="/cultivation-guidance" element={<Cultivation />} />
                    <Route path="/feedback" element={<Feedback />} />
                    <Route path="/reference" element={<References />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/get-solution" element={<GetSolution />} />
                    <Route path="/product-details" element={<ProductDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
