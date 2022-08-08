import React, { useEffect } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Preloader from '../Preloader';
import MSI from '../../assets/images/svg/micro-star-international-logo.svg';
import Asus from '../../assets/images/svg/asus-rog-1.svg';
import Nvidia from '../../assets/images/svg/nvidia.svg';
import Intel from '../../assets/images/svg/intel-7.svg';
import Acer from '../../assets/images/svg/logo-acer-1.svg';
import Amd from '../../assets/images/svg/amd-logo-1.svg';
import HP from '../../assets/images/svg/hp-2.svg';
import Samsung from '../../assets/images/svg/samsung.svg';
import Corsair from '../../assets/images/svg/corsair-2.svg';
import Lenovo from '../../assets/images/svg/lenovo-2.svg';
import Apple from '../../assets/images/svg/apple-13.svg';

const LandingPage = () => {
  useEffect(() => {
    document.body.classList.add('bg-dark');

    return () => {
      document.body.classList.remove('bg-dark');
    };
  });
  return (
    <div>
      <div className="page-wrapper">
        {/* <Preloader /> */}
        <section class="custom-pt-1 custom-pb-2 position-relative bg-primary">
          <div class="container">
            <div class="row justify-content-center text-center">
              <div class="col-12 col-lg-10">
                <h4 class="text-white">
                  Online Shop <span class="typer text-white" data-words="Sass,Software,Startup,WebApp,Agency,Marketing,Designer,Developer"></span>
                  <span style={{ fontSize: '1.2em', verticalAlign: 'middle' }} class="cursor" data-cursorDisplay="|" data-owner="some-id"></span>
                </h4>
                <h1 class="display-4 mt-3 font-w-5 text-white">
                  Perkenalkan,
                  <br /> RizkiShop.
                </h1>
                <p class="lead text-light">Toko online yang menawarkan berbagai macam barang berkualitas dengan harga terjangkau</p>
                <a href="http://vimeo.com/99025203" class="btn text-white popup-vimeo me-1">
                  {' '}
                  <i class="la la-play-circle me-1 ic-3x align-middle line-h-0"></i> Watch Video
                </a>
                <a href="#" class="btn btn-dark">
                  Learn More
                </a>
              </div>
            </div>
            <div class="row text-center">
              <div class="col-12 ">
                <div class="owl-carousel mt-8 no-pb" data-dots="false" data-items="6" data-md-items="5" data-sm-items="3" data-xs-items="2" data-margin="30" data-autoplay="true">
                  <div class="item">
                    <div class="clients-logo">
                      <img class="img-fluid" style={{ height: '50px', width: '140px' }} src={Acer} alt="" />
                    </div>
                  </div>
                  <div class="item">
                    <div class="clients-logo">
                      <img class="img-fluid" style={{ height: '50px', width: '140px' }} src={MSI} alt="" />
                    </div>
                  </div>
                  <div class="item">
                    <div class="clients-logo">
                      <img class="img-fluid" style={{ height: '50px', width: '140px' }} src={Asus} alt="" />
                    </div>
                  </div>
                  <div class="item">
                    <div class="clients-logo">
                      <img class="img-fluid" style={{ height: '50px', width: '140px' }} src={Amd} alt="" />
                    </div>
                  </div>
                  <div class="item">
                    <div class="clients-logo">
                      <img class="img-fluid" style={{ height: '50px', width: '140px' }} src={Apple} alt="" />
                    </div>
                  </div>
                  <div class="item">
                    <div class="clients-logo">
                      <img class="img-fluid" style={{ height: '50px', width: '140px' }} src={Corsair} alt="" />
                    </div>
                  </div>
                  <div class="item">
                    <div class="clients-logo">
                      <img class="img-fluid" style={{ height: '50px', width: '140px' }} src={HP} alt="" />
                    </div>
                  </div>
                  <div class="item">
                    <div class="clients-logo">
                      <img class="img-fluid" style={{ height: '50px', width: '140px' }} src={Lenovo} alt="" />
                    </div>
                  </div>
                  <div class="item">
                    <div class="clients-logo">
                      <img class="img-fluid" style={{ height: '50px', width: '140px' }} src={Intel} alt="" />
                    </div>
                  </div>
                  <div class="item">
                    <div class="clients-logo">
                      <img class="img-fluid" style={{ height: '50px', width: '140px' }} src={Samsung} alt="" />
                    </div>
                  </div>
                  <div class="item">
                    <div class="clients-logo">
                      <img class="img-fluid" style={{ height: '50px', width: '140px' }} src={Nvidia} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="shape-1 bottom" style={{ height: '200px', overflow: 'hidden' }}>
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
              <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#060927' }}></path>
            </svg>
          </div>
        </section>
        <div class="page-content">
          <section class="pt-0">
            <div class="container">
              <div class="row align-items-end">
                <div class="col-lg-4 col-md-6 mb-8 mb-lg-0 text-white">
                  <div>
                    {' '}
                    <span class="badge badge-light-soft p-2">
                      <i class="la la-cubes ic-3x rotation"></i>
                    </span>
                    <h2 class="mt-3 mb-0">Satu ketukan, satu aplikasi. Semua bisa</h2>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div>
                    <div class="d-flex align-items-center mb-4">
                      <div class="me-3">
                        <img class="img-fluid" src="assets/images/icon/01.svg" alt="" />
                      </div>
                      <h5 class="m-0 text-light">App Development</h5>
                    </div>
                    <p class="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-6 mt-md-0">
                  <div>
                    <div class="d-flex align-items-center mb-4">
                      <div class="me-3">
                        <img class="img-fluid" src="assets/images/icon/02.svg" alt="" />
                      </div>
                      <h5 class="m-0 text-light">Clean Code</h5>
                    </div>
                    <p class="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-6">
                  <div>
                    <div class="d-flex align-items-center mb-4">
                      <div class="me-3">
                        <img class="img-fluid" src="assets/images/icon/03.svg" alt="" />
                      </div>
                      <h5 class="m-0 text-light">Software Development</h5>
                    </div>
                    <p class="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-6">
                  <div>
                    <div class="d-flex align-items-center mb-4">
                      <div class="me-3">
                        <img class="img-fluid" src="assets/images/icon/04.svg" alt="" />
                      </div>
                      <h5 class="m-0 text-light">Easy to customize</h5>
                    </div>
                    <p class="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-6">
                  <div>
                    <div class="d-flex align-items-center mb-4">
                      <div class="me-3">
                        <img class="img-fluid" src="assets/images/icon/05.svg" alt="" />
                      </div>
                      <h5 class="m-0 text-light">24/7 Support</h5>
                    </div>
                    <p class="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div class="container">
              <div class="row align-items-center justify-content-between">
                <div class="col-12 col-lg-6 mb-6 mb-lg-0">
                  <img src="assets/images/about/04.png" alt="Image" class="img-fluid" />
                </div>
                <div class="col-12 col-lg-6 col-xl-5">
                  <div class="mb-5">
                    {' '}
                    <span class="badge badge-light-soft p-2">
                      <i class="la la-tasks ic-3x rotation"></i>
                    </span>
                    <h2 class="mt-3 text-white">Solve Your Problem Very Fast With Bootsland</h2>
                    <p class="lead">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                  </div>
                  <div class="d-flex flex-wrap justify-content-start">
                    <div class="mb-3 me-4">
                      <div class="d-flex align-items-center">
                        <div class="badge-primary-soft rounded p-1">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p class="mb-0 ms-3">Fully Responsive</p>
                      </div>
                    </div>
                    <div class="mb-3 me-4">
                      <div class="d-flex align-items-center">
                        <div class="badge-primary-soft rounded p-1">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p class="mb-0 ms-3">Based On Bootstrap 4</p>
                      </div>
                    </div>
                    <div class="mb-3 me-4">
                      <div class="d-flex align-items-center">
                        <div class="badge-primary-soft rounded p-1">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p class="mb-0 ms-3">Built with Sass</p>
                      </div>
                    </div>
                    <div class="mb-3 me-4">
                      <div class="d-flex align-items-center">
                        <div class="badge-primary-soft rounded p-1">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p class="mb-0 ms-3">SVG Icon</p>
                      </div>
                    </div>
                  </div>{' '}
                  <a href="#" class="btn btn-primary mt-5">
                    About Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section class="pt-0">
            <div class="container">
              <div class="row text-center align-items-center justify-content-between">
                <div class="col-lg-3 col-md-4">
                  <div class="counter rounded py-8 px-3 shadow mb-5 mb-md-0">
                    <div class="counter-desc">
                      {' '}
                      <span class="count-number text-primary display-4" data-to="234" data-speed="10000">
                        234
                      </span>
                      <span class="display-4 text-light">k</span>
                      <h5 class="mb-0 mt-3 text-muted">Year Of Experience</h5>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="counter rounded py-8 px-3 shadow mb-5">
                    <div class="counter-desc">
                      {' '}
                      <span class="count-number text-success display-4" data-to="234" data-speed="10000">
                        234
                      </span>
                      <span class="display-4 text-light">k</span>
                      <h5 class="mb-0 mt-3 text-muted">Completed Project</h5>
                    </div>
                  </div>
                  <div class="counter rounded py-8 px-3 shadow mb-5 mb-md-0">
                    <div class="counter-desc">
                      {' '}
                      <span class="count-number text-warning display-4" data-to="455" data-speed="10000">
                        455
                      </span>
                      <span class="display-4 text-light">k</span>
                      <h5 class="mb-0 mt-3 text-muted">Member</h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4">
                  <div class="counter rounded py-8 px-3 shadow">
                    <div class="counter-desc">
                      {' '}
                      <span class="count-number text-danger display-4" data-to="455" data-speed="10000">
                        455
                      </span>
                      <span class="display-4 text-light">k</span>
                      <h5 class="mb-0 mt-3 text-muted">Satisfied Customers</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div class="container">
              <div class="row align-items-center justify-content-between">
                <div class="col-12 col-lg-6 mb-6 mb-lg-0 order-lg-1">
                  <div class="row align-items-center">
                    <div class="col-7">
                      <img src="assets/images/about/10.jpg" class="img-fluid rounded shadow-lg" alt="..." />
                    </div>
                    <div class="col-5">
                      <img src="assets/images/about/11.jpg" class="img-fluid rounded shadow-lg mb-4" alt="..." />
                      <img src="assets/images/about/12.jpg" class="img-fluid rounded shadow-lg mt-1" alt="..." />
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-5">
                  <div>
                    {' '}
                    <span class="badge badge-light-soft p-2">
                      <i class="la la-exclamation ic-3x rotation"></i>
                    </span>
                    <h2 class="mt-3 text-white">Bootsland Crafting Beautiful Experience</h2>
                    <p class="lead text-white">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    <p class="mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="position-relative">
            <div class="container-fluid">
              <div class="row align-items-center">
                <div class="col-12 col-md-12 col-lg-4 mb-6 mb-lg-0 order-lg-1">
                  <div>
                    {' '}
                    <span class="badge badge-light-soft p-2">
                      <i class="la la-users ic-3x rotation"></i>
                    </span>
                    <h2 class="mt-4 text-white">Discover Our Client Feedback</h2>
                    <p class="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-8">
                  <div class="row">
                    <div class="col-12 col-md-6 col-lg-6">
                      <div class="card p-4 bg-transparent border-primary flex-sm-row">
                        <div class="w-50 me-sm-5 mb-3 mb-sm-0">
                          <img alt="Image" src="assets/images/testimonial/01.jpg" class="shadow-primary img-fluid rounded-circle d-inline" />
                        </div>
                        <div class="card-body p-0">
                          <p>Bootsland Amazing Landing Page All-in-one, clean code, Crative & Modern design.</p>
                          <div>
                            <h5 class="text-primary d-inline">Romi Jensen</h5>
                            <small class="text-muted font-italic">- Founder</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 mt-5">
                      <div class="card p-4 bg-transparent border-success flex-sm-row">
                        <div class="w-50 me-sm-5 mb-3 mb-sm-0">
                          <img alt="Image" src="assets/images/testimonial/02.jpg" class="shadow-primary img-fluid rounded-circle d-inline" />
                        </div>
                        <div class="card-body p-0">
                          <p>Bootsland Amazing Landing Page All-in-one, clean code, Crative & Modern design.</p>
                          <div>
                            <h5 class="text-primary d-inline">Johny Stock</h5>
                            <small class="text-muted font-italic">- Supervisor</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 mt-5 mt-md-0">
                      <div class="card p-4 bg-transparent border-warning flex-sm-row">
                        <div class="w-50 me-sm-5 mb-3 mb-sm-0">
                          <img alt="Image" src="assets/images/testimonial/03.jpg" class="shadow-primary img-fluid rounded-circle d-inline" />
                        </div>
                        <div class="card-body p-0">
                          <p>Bootsland Amazing Landing Page All-in-one, clean code, Crative & Modern design.</p>
                          <div>
                            <h5 class="text-primary d-inline">Leeny Biton</h5>
                            <small class="text-muted font-italic">- Manager</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 mt-5">
                      <div class="card p-4 bg-transparent border-danger flex-sm-row">
                        <div class="w-50 me-sm-5 mb-3 mb-sm-0">
                          <img alt="Image" src="assets/images/testimonial/01.jpg" class="shadow-primary img-fluid rounded-circle d-inline" />
                        </div>
                        <div class="card-body p-0">
                          <p>Bootsland Amazing Landing Page All-in-one, clean code, Crative & Modern design.</p>
                          <div>
                            <h5 class="text-primary d-inline">Jensen Rom</h5>
                            <small class="text-muted font-italic">- Ceo</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div class="container">
              <div class="row align-items-center justify-content-between">
                <div class="col-12 col-lg-6 col-xl-5">
                  <div class="mb-5">
                    {' '}
                    <span class="badge badge-light-soft p-2">
                      <i class="la la-question-circle ic-3x rotation"></i>
                    </span>
                    <h2 class="mt-3 text-white">Frequently Asked Questions</h2>
                    <p class="lead">We use the latest technologies it voluptatem accusantium doloremque laudantium.</p>
                  </div>
                  <div class="accordion" id="accordion">
                    <div class="accordion-item bg-transparent border mb-4">
                      <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button border-0 mb-0 bg-transparent rounded text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          When our power of choice Bootsland ?
                        </button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse border-0 collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                        <div class="accordion-body text-muted">
                          Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered Many desktop publishing packages and web page
                          editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item bg-transparent border mb-4">
                      <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button border-0 mb-0 bg-transparent rounded text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Nam libero tempore, cum soluta nobis ?
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                        <div class="accordion-body text-muted">
                          Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered Many desktop publishing packages and web page
                          editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item bg-transparent border">
                      <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button border-0 mb-0 bg-transparent rounded text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          which is the same as saying through ?
                        </button>
                      </h2>
                      <div id="collapseThree" class="accordion-collapse border-0 collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                        <div class="accordion-body text-muted">
                          Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered Many desktop publishing packages and web page
                          editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 mb-8 mb-lg-0">
                  <div class="shadow rounded p-5">
                    <img class="img-fluid mb-8" src="assets/images/about/04.png" alt="Image" />
                    <form class="row" id="contact-form" method="post" action="https://themeht.com/bootsland/html/php/contact.php">
                      <div class="messages"></div>
                      <div class="form-group col-sm-6">
                        <label class="text-muted" for="InputName1">
                          First Name
                        </label>
                        <input type="text" class="form-control input-1" id="InputName1" placeholder="First Name" required="required" data-error="Firstname is required." />
                        <div class="help-block with-errors"></div>
                      </div>
                      <div class="form-group col-sm-6">
                        <label class="text-muted" for="InputName2">
                          Last Name
                        </label>
                        <input type="text" class="form-control input-1" id="InputName2" placeholder="Last Name" required="required" data-error="Lastname is required." />
                        <div class="help-block with-errors"></div>
                      </div>
                      <div class="form-group col-12">
                        <label class="text-muted" for="InputEmail1">
                          Email address
                        </label>
                        <input type="email" class="form-control input-1" id="InputEmail1" placeholder="Enter email" required="required" data-error="Valid email is required." />
                        <div class="help-block with-errors"></div>
                      </div>
                      <div class="form-group col-12">
                        <label class="text-muted" for="InputPassword1">
                          Password
                        </label>
                        <input type="password" class="form-control input-1" id="InputPassword1" placeholder="Password" />
                      </div>
                      <div class="col-12 mt-5">
                        <button class="btn btn-primary">Download</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div class="container">
              <div class="row justify-content-center text-center">
                <div class="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                  <div class="mb-8">
                    {' '}
                    <span class="badge badge-light-soft p-2">
                      <i class="la la-money ic-3x rotation"></i>
                    </span>
                    <h2 class="mt-4 text-white">Simple, Fair and affordable prices for all.</h2>
                    <p class="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-12">
                  <div class="row align-items-center">
                    <div class="col-12 col-lg-4 mb-8 mb-lg-0">
                      <div class="card bg-transparent border-0 hover-translate">
                        <div class="card-body py-11 px-6">
                          <div class="text-center mb-5">
                            {' '}
                            <span class="badge bg-light text-dark shadow">
                              <span class="h6 text-uppercase">Basic</span>
                            </span>
                          </div>
                          <div class="d-flex justify-content-center text-white">
                            {' '}
                            <span class="h2 mb-0 mt-2">$</span>
                            <span class="price display-2">29</span>
                            <span class="h2 align-self-end mb-1">/mo</span>
                          </div>
                          <p class="text-center text-muted mb-6 mb-md-8">Per user</p>
                          <div class="d-flex align-items-start justify-content-between">
                            <p>Responsive landing pages</p>
                            <div class="ms-4">
                              {' '}
                              <i class="la la-check text-primary fw-bold"></i>
                            </div>
                          </div>
                          <div class="d-flex align-items-start justify-content-between">
                            <p>Free Custom Domain</p>
                            <div class="ms-4">
                              {' '}
                              <i class="la la-check text-primary fw-bold"></i>
                            </div>
                          </div>
                          <div class="d-flex align-items-start justify-content-between">
                            <p>Flexible, simple license</p>
                            <div class="ms-4">
                              {' '}
                              <i class="la la-check text-primary fw-bold"></i>
                            </div>
                          </div>
                          <div class="d-flex align-items-start justify-content-between">
                            <p>Monthly updates</p>
                            <div class="ms-4">
                              {' '}
                              <i class="la la-check text-primary fw-bold"></i>
                            </div>
                          </div>
                          <div class="d-flex align-items-start justify-content-between">
                            <p>Outstanding Support</p>
                            <div class="ms-4">
                              {' '}
                              <i class="la la-check text-primary fw-bold"></i>
                            </div>
                          </div>
                          <div class="d-flex align-items-start justify-content-between">
                            <p>Happy Customers</p>
                            <div class="ms-4">
                              {' '}
                              <i class="la la-check text-primary fw-bold"></i>
                            </div>
                          </div>
                          <a href="#" class="btn btn-block btn-primary mt-5">
                            Choose Packege
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-4 mb-8 mb-lg-0">
                      <div class="card shadow bg-primary border-0 hover-translate">
                        <div class="card-body py-11 px-6">
                          <div class="text-center mb-5">
                            {' '}
                            <span class="badge bg-light text-dark">
                              <span class="h6 text-uppercase">Standard</span>
                            </span>
                          </div>
                          <div class="d-flex justify-content-center text-white">
                            {' '}
                            <span class="h2 mb-0 mt-2">$</span>
                            <span class="price display-2">59</span>
                            <span class="h2 align-self-end mb-1">/mo</span>
                          </div>
                          <p class="text-center text-muted mb-6 mb-md-8">Per user</p>
                          <div class="d-flex align-items-start justify-content-between">
                            <p class="text-light">Responsive landing pages</p>
                            <div class="ms-4">
                              {' '}
                              <i class="la la-check text-light fw-bold"></i>
                            </div>
                          </div>
                          <div class="d-flex align-items-start justify-content-between">
                            <p class="text-light">Free Custom Domain</p>

                            <div class="ms-4">
                              {' '}
                              <i class="la la-check text-light fw-bold"></i>
                            </div>
                          </div>
                          <div class="d-flex align-items-start justify-content-between">
                            <p class="text-light">Flexible, simple license</p>

                            <div class="ms-4">
                              {' '}
                              <i class="la la-check text-light fw-bold"></i>
                            </div>
                          </div>
                          <div class="d-flex align-items-start justify-content-between">
                            <p class="text-light">Monthly updates</p>

                            <div class="ms-4">
                              {' '}
                              <i class="la la-check text-light fw-bold"></i>
                            </div>
                          </div>
                          <div class="d-flex align-items-start justify-content-between">
                            <p class="text-light">Outstanding Support</p>

                            <div class="ms-4">
                              {' '}
                              <i class="la la-check text-light fw-bold"></i>
                            </div>
                          </div>
                          <div class="d-flex align-items-start justify-content-between">
                            <p class="text-light">Happy Customers</p>

                            <div class="ms-4">
                              {' '}
                              <i class="la la-check text-light fw-bold"></i>
                            </div>
                          </div>
                          <a href="#" class="btn btn-block btn-dark mt-5">
                            Choose Package
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-4">
                      <div class="card bg-transparent border-0 hover-translate">
                        <div class="card-body py-11 px-6">
                          <div class="text-center mb-5">
                            {' '}
                            <span class="badge bg-light text-dark shadow">
                              <span class="h6 text-uppercase">Extended</span>
                            </span>
                          </div>
                          <div class="d-flex justify-content-center text-white">
                            {' '}
                            <span class="h2 mb-0 mt-2">$</span>
                            <span class="price display-2">89</span>
                            <span class="h2 align-self-end mb-1">/mo</span>
                          </div>

                          <p class="text-center text-muted mb-6 mb-md-8">Per user</p>
                          <div class="d-flex align-items-start justify-content-between">
                            <p>Responsive landing pages</p>

                            <div class="ms-4">
                              {' '}
                              <i class="la la-check text-primary fw-bold"></i>
                            </div>
                          </div>
                          <div class="d-flex align-items-start justify-content-between">
                            <p>Free Custom Domain</p>

                            <div class="ms-4">
                              {' '}
                              <i class="la la-check text-primary fw-bold"></i>
                            </div>
                          </div>
                          <div class="d-flex align-items-start justify-content-between">
                            <p>Flexible, simple license</p>

                            <div class="ms-4">
                              {' '}
                              <i class="la la-check text-primary fw-bold"></i>
                            </div>
                          </div>
                          <div class="d-flex align-items-start justify-content-between">
                            <p>Monthly updates</p>

                            <div class="ms-4">
                              {' '}
                              <i class="la la-check text-primary fw-bold"></i>
                            </div>
                          </div>
                          <div class="d-flex align-items-start justify-content-between">
                            <p>Outstanding Support</p>

                            <div class="ms-4">
                              {' '}
                              <i class="la la-check text-primary fw-bold"></i>
                            </div>
                          </div>
                          <div class="d-flex align-items-start justify-content-between">
                            <p>Happy Customers</p>

                            <div class="ms-4">
                              {' '}
                              <i class="la la-check text-primary fw-bold"></i>
                            </div>
                          </div>
                          <a href="#" class="btn btn-block btn-primary mt-5">
                            Choose Package
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div class="container">
              <div class="row align-items-end mb-5">
                <div class="col-12 col-md-12 col-lg-4">
                  <div>
                    {' '}
                    <span class="badge badge-light-soft p-2">
                      <i class="la la-bold ic-3x rotation"></i>
                    </span>
                    <h2 class="mt-4 mb-0 text-white">From Our Blog List Latest Feed</h2>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-6 ms-auto">
                  <div>
                    <p class="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="owl-carousel" data-dots="false" data-nav="true" data-items="3" data-md-items="2" data-sm-items="1" data-margin="30" data-autoplay="true">
                    <div class="item">
                      <div class="card bg-transparent border-dark text-center">
                        <div class="position-absolute bg-white shadow-primary text-center p-2 rounded ms-3 mt-3">
                          15
                          <br />
                          July
                        </div>
                        <img class="card-img-top rounded" src="assets/images/blog/01.png" alt="Image" />
                        <div class="card-body pt-5">
                          {' '}
                          <a class="d-inline-block text-primary mb-2" href="#">
                            Sass
                          </a>
                          <h2 class="h5 font-weight-medium">
                            <a class="link-title text-white" href="blog-single.html">
                              Bootsland Perfect Performance landing Page
                            </a>
                          </h2>
                          <p class="mb-0">Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                        </div>
                        <div class="card-footer bg-transparent border-0 text-center">
                          <ul class="list-inline mb-0">
                            <li class="list-inline-item pe-4">
                              {' '}
                              <a href="#" class="text-muted">
                                <i class="ti-comments me-1 text-primary"></i> 131
                              </a>
                            </li>
                            <li class="list-inline-item pe-4">
                              {' '}
                              <a href="#" class="text-muted">
                                <i class="ti-eye me-1 text-primary"></i> 255
                              </a>
                            </li>
                            <li class="list-inline-item">
                              {' '}
                              <a href="#" class="text-muted">
                                <i class="ti-comments me-1 text-primary"></i> 14
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div></div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="card bg-transparent border-dark text-center">
                        <div class="position-absolute bg-white shadow-primary text-center p-2 rounded ms-3 mt-3">
                          15
                          <br />
                          July
                        </div>
                        <img class="card-img-top rounded" src="assets/images/blog/02.png" alt="Image" />
                        <div class="card-body pt-5">
                          {' '}
                          <a class="d-inline-block text-primary mb-2" href="#">
                            Sass
                          </a>
                          <h2 class="h5 font-weight-medium">
                            <a class="link-title text-white" href="blog-single.html">
                              The most powerfull template that make you.
                            </a>
                          </h2>
                          <p class="mb-0">Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                        </div>
                        <div class="card-footer bg-transparent border-0 text-center">
                          <ul class="list-inline mb-0">
                            <li class="list-inline-item pe-4">
                              {' '}
                              <a href="#" class="text-muted">
                                <i class="ti-comments me-1 text-primary"></i> 131
                              </a>
                            </li>
                            <li class="list-inline-item pe-4">
                              {' '}
                              <a href="#" class="text-muted">
                                <i class="ti-eye me-1 text-primary"></i> 255
                              </a>
                            </li>
                            <li class="list-inline-item">
                              {' '}
                              <a href="#" class="text-muted">
                                <i class="ti-comments me-1 text-primary"></i> 14
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div></div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="card bg-transparent border-dark text-center">
                        <div class="position-absolute bg-white shadow-primary text-center p-2 rounded ms-3 mt-3">
                          15
                          <br />
                          July
                        </div>
                        <img class="card-img-top rounded" src="assets/images/blog/03.png" alt="Image" />
                        <div class="card-body pt-5">
                          {' '}
                          <a class="d-inline-block text-primary mb-2" href="#">
                            Sass
                          </a>
                          <h2 class="h5 font-weight-medium">
                            <a class="link-title text-white" href="blog-single.html">
                              A brand for a company is like a reputation person.
                            </a>
                          </h2>
                          <p class="mb-0">Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                        </div>
                        <div class="card-footer bg-transparent border-0 text-center">
                          <ul class="list-inline mb-0">
                            <li class="list-inline-item pe-4">
                              {' '}
                              <a href="#" class="text-muted">
                                <i class="ti-comments me-1 text-primary"></i> 131
                              </a>
                            </li>
                            <li class="list-inline-item pe-4">
                              {' '}
                              <a href="#" class="text-muted">
                                <i class="ti-eye me-1 text-primary"></i> 255
                              </a>
                            </li>
                            <li class="list-inline-item">
                              {' '}
                              <a href="#" class="text-muted">
                                <i class="ti-comments me-1 text-primary"></i> 14
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div></div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="card bg-transparent border-dark text-center">
                        <div class="position-absolute bg-white shadow-primary text-center p-2 rounded ms-3 mt-3">
                          15
                          <br />
                          July
                        </div>
                        <img class="card-img-top rounded" src="assets/images/blog/02.png" alt="Image" />
                        <div class="card-body pt-5">
                          {' '}
                          <a class="d-inline-block text-primary mb-2" href="#">
                            Sass
                          </a>
                          <h2 class="h5 font-weight-medium">
                            <a class="link-title text-white" href="blog-single.html">
                              The most powerfull template that make you.
                            </a>
                          </h2>
                          <p class="mb-0">Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                        </div>
                        <div class="card-footer bg-transparent border-0 text-center">
                          <ul class="list-inline mb-0">
                            <li class="list-inline-item pe-4">
                              {' '}
                              <a href="#" class="text-muted">
                                <i class="ti-comments me-1 text-primary"></i> 131
                              </a>
                            </li>
                            <li class="list-inline-item pe-4">
                              {' '}
                              <a href="#" class="text-muted">
                                <i class="ti-eye me-1 text-primary"></i> 255
                              </a>
                            </li>
                            <li class="list-inline-item">
                              {' '}
                              <a href="#" class="text-muted">
                                <i class="ti-comments me-1 text-primary"></i> 14
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="scroll-top">
          <a class="smoothscroll" href="#top">
            <i class="las la-angle-up"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
