import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer class="py-11 bg-primary position-relative" data-bg-img="assets/images/bg/03.png">
        <div class="shape-1" style={{ height: '150px', overflow: 'hidden' }}>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#060927' }}></path>
          </svg>
        </div>
        <div class="container mt-11">
          <div class="row">
            <div class="col-12 col-lg-5 col-xl-4 me-auto mb-6 mb-lg-0">
              <div class="subscribe-form bg-warning-soft p-5 rounded">
                <h5 class="mb-4 text-white">Newsletter</h5>
                <h6 class="text-light">Subscribe Our Newsletter</h6>
                <form id="mc-form" class="group">
                  <input type="email" value="" name="EMAIL" class="email form-control" id="mc-email" placeholder="Email Address" required="" style={{ height: '60px' }} />
                  <input class="btn btn-outline-light btn-block mt-3 mb-2" type="submit" name="subscribe" value="Subscribe" />
                </form>{' '}
                <small class="text-light">Get started for 1 Month free trial No Purchace required.</small>
              </div>
            </div>
            <div class="col-12 col-lg-6 col-xl-7">
              <div class="row">
                <div class="col-12 col-sm-4 navbar-dark">
                  <h5 class="mb-4 text-white">Pages</h5>
                  <ul class="navbar-nav list-unstyled mb-0">
                    <li class="mb-3 nav-item">
                      <a class="nav-link" href="about-us-1.html">
                        About
                      </a>
                    </li>
                    <li class="mb-3 nav-item">
                      <a class="nav-link" href="product-grid.html">
                        Shop
                      </a>
                    </li>
                    <li class="mb-3 nav-item">
                      <a class="nav-link" href="faq.html">
                        Faq
                      </a>
                    </li>
                    <li class="mb-3 nav-item">
                      <a class="nav-link" href="blog-card.html">
                        Blogs
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="contact-us.html">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-12 col-sm-4 mt-6 mt-sm-0 navbar-dark">
                  <h5 class="mb-4 text-white">Service</h5>
                  <ul class="navbar-nav list-unstyled mb-0">
                    <li class="mb-3 nav-item">
                      <a class="nav-link" href="#">
                        Content Writing
                      </a>
                    </li>
                    <li class="mb-3 nav-item">
                      <a class="nav-link" href="#">
                        Documentation
                      </a>
                    </li>
                    <li class="mb-3 nav-item">
                      <a class="nav-link" href="login.html">
                        Account
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="career.html">
                        Careers
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-12 col-sm-4 mt-6 mt-sm-0 navbar-dark">
                  <h5 class="mb-4 text-white">Legal</h5>
                  <ul class="navbar-nav list-unstyled mb-0">
                    <li class="mb-3 nav-item">
                      <a class="nav-link" href="terms-and-conditions.html">
                        Term Of Service
                      </a>
                    </li>
                    <li class="mb-3 nav-item">
                      <a class="nav-link" href="privacy-policy.html">
                        Privacy Policy
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-12 col-sm-6">
                  <a class="footer-logo text-white h2 mb-0" href="index.html">
                    Boots<span class="fw-bold">Land.</span>
                  </a>
                </div>
                <div class="col-12 col-sm-6 mt-6 mt-sm-0">
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                      <a class="text-light ic-2x" href="#">
                        <i class="la la-facebook"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-light ic-2x" href="#">
                        <i class="la la-dribbble"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-light ic-2x" href="#">
                        <i class="la la-instagram"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-light ic-2x" href="#">
                        <i class="la la-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-light ic-2x" href="#">
                        <i class="la la-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row text-white text-center mt-8">
            <div class="col">
              <hr class="mb-8" />
              Copyright 2019 Bootsland Theme by{' '}
              <u>
                <a class="text-white" href="#">
                  ThemeHt
                </a>
              </u>{' '}
              | All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
