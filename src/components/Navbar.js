import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cart from '../assets/images/cart.svg';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('isAuth');
  return (
    <div>
      <header class="site-header navbar-dark">
        <div id="header-wrap" class="position-absolute w-100 z-index-1">
          <div class="container">
            <div class="row">
              <div class="col">
                <nav class="navbar navbar-expand-lg">
                  <Link class="navbar-brand logo text-white h2 mb-0" to={'/products'}>
                    Rizki<span class="text-white fw-bold">Shop.</span>
                  </Link>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    {' '}
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                      <li class="nav-item">
                        {' '}
                        <Link class="nav-link" to="/">
                          Home
                        </Link>
                      </li>
                      <li class="nav-item">
                        {' '}
                        <Link class="nav-link" to="/about-us">
                          About Us
                        </Link>
                      </li>
                      <li class="nav-item">
                        {' '}
                        <Link class="nav-link" to="/contact-us">
                          Contact Us
                        </Link>
                      </li>
                      <li class="nav-item">
                        {' '}
                        <Link class="nav-link" to="/faq">
                          FAQ
                        </Link>
                      </li>
                      <li class="nav-item">
                        {' '}
                        <Link class="nav-link" to="/products">
                          Shop
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {isLoggedIn ? (
                    <>
                      <Link to={'/cart'}>
                        <img src={Cart} width={40} class="ms-2"></img>
                      </Link>
                      <Link class="btn btn-danger ms-5 d-none d-md-block" to="/logout">
                        Log Out
                      </Link>
                    </>
                  ) : (
                    <Link class="btn btn-light ms-5 d-none d-md-block" to="/login">
                      Log In
                    </Link>
                  )}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
