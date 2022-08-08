import React, { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    document.body.classList.add('bg-dark');

    return () => {
      document.body.classList.remove('bg-dark');
    };
  });
  return (
    <div className="text-white">
      <section class="custom-pt-1 custom-pb-2 position-relative">
        <div id="particles-js"></div>
        <div class="container">
          <div class="row  text-center">
            <div class="col">
              <h1>About Us</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center bg-transparent p-0 m-0">
                  <li class="breadcrumb-item">
                    <a class="text-dark" href="#">
                      Home
                    </a>
                  </li>
                  <li class="breadcrumb-item">Pages</li>
                  <li class="breadcrumb-item">Company</li>
                  <li class="breadcrumb-item active text-white" aria-current="page">
                    About Us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div class="page-content">
        <section class="pb-11">
          <div class="container">
            <div class="row align-items-center justify-content-between">
              <div class="col-12 col-lg-6 mb-6 mb-lg-0">
                <div class="row align-items-center">
                  <div class="col-6">
                    <img src="assets/images/about/10.jpg" class="img-fluid rounded shadow-lg" alt="..." />
                  </div>
                  <div class="col-6">
                    <img src="assets/images/about/11.jpg" class="img-fluid rounded shadow-lg mb-5" alt="..." />
                    <img src="assets/images/about/13.jpg" class="img-fluid rounded shadow-lg" alt="..." />
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6 col-xl-5">
                <div>
                  {' '}
                  <span class="badge badge-primary-soft p-2 font-w-6">About Bootsland</span>
                  <h2 class="mt-3 font-w-5">Bootsland Small Tean Crafting Beautiful Experience</h2>
                  <p class="lead">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                  <p class="mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="container">
            <div class="row align-items-center justify-content-between">
              <div class="col-12 col-lg-6 col-xl-5">
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
                <div class="row text-center">
                  <div class="col-lg-6 col-md-6">
                    <div class="counter bg-blue rounded p-5 shadow">
                      <div class="counter-desc text-muted">
                        <h5>Project</h5>
                        <span class="count-number display-4 text-success" data-to="234" data-speed="10000">
                          234
                        </span>
                        <span class="display-4">k</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 mt-5">
                    <div class="counter bg-blue rounded p-5 shadow">
                      <div class="counter-desc text-muted">
                        <h5>Member</h5>
                        <span class="count-number display-4 text-danger" data-to="455" data-speed="10000">
                          455
                        </span>
                        <span class="display-4 text-white">k</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 mt-5 mt-md-0">
                    <div class="counter bg-blue rounded p-5 shadow">
                      <div class="counter-desc text-muted">
                        <h5>Love Us</h5>
                        <span class="count-number display-4 text-warning" data-to="365" data-speed="10000">
                          365
                        </span>
                        <span class="display-4 text-white">k</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 mt-5">
                    <div class="counter bg-blue rounded p-5 shadow">
                      <div class="counter-desc text-muted">
                        <h5>Happy Client</h5>
                        <span class="count-number display-4 text-primary" data-to="528" data-speed="10000">
                          528
                        </span>
                        <span class="display-4">k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="custom-pt-1 custom-pb-2 bg-dark position-relative" data-bg-img="assets/images/bg/02.png">
          <div class="container">
            <div class="row align-items-end">
              <div class="col-lg-4 col-md-6 mb-8 mb-lg-0 text-white">
                <div>
                  {' '}
                  <span class="badge badge-primary-soft p-2 font-w-6 text-white">Bootsland Services</span>
                  <h2 class="mt-3 mb-0">One Platform, Deep Insight Why Choose Bootsland</h2>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="bg-primary-soft rounded p-5">
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
                <div class="bg-primary-soft rounded p-5">
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
                <div class="bg-primary-soft rounded p-5">
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
                <div class="bg-primary-soft rounded p-5">
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
                <div class="bg-primary-soft rounded p-5">
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
          <div class="shape-1" style={{ height: '150px', overflow: 'hidden' }}>
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
              <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#060927' }}></path>
            </svg>
          </div>
          <div class="shape-1 bottom" style={{ height: '200px', overflow: 'hidden' }}>
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
              <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#060927' }}></path>
            </svg>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
