import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import FAQ from './components/FAQ/FAQ';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar';
import Products from './components/Products/Products';
import Login from './components/Account/Login';
import LogOut from './components/Account/LogOut';
import Cart from './components/Cart/Cart';
import SingleProduct from './components/Products/SingleProduct';
import CheckOut from './components/Cart/CheckOut';

function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <Router forceRefresh={true}>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
