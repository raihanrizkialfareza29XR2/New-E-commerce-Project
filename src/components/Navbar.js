import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header class="site-header navbar-dark">
        <div id="header-wrap" class="position-absolute w-100 z-index-1">
          <div class="container">
            <div class="row">
              <div class="col">
                <nav class="navbar navbar-expand-lg">
                  <a class="navbar-brand logo text-white h2 mb-0" href="index.html">
                    Rizki<span class="text-white fw-bold">Shop.</span>
                  </a>
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
                        <Link class="nav-link" to="/blog">
                          Blog
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
                  <a class="btn btn-light ms-8 d-none d-md-block" href="#">
                    Log In
                  </a>
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
