import React, { useEffect } from 'react';

const Blog = () => {
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
              <h1>Blog Card Style</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center bg-transparent p-0 m-0">
                  <li class="breadcrumb-item">
                    <a class="text-dark" href="#">
                      Home
                    </a>
                  </li>
                  <li class="breadcrumb-item">Pages</li>
                  <li class="breadcrumb-item">Blog</li>
                  <li class="breadcrumb-item active text-primary" aria-current="page">
                    Blog Card
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div class="page-content">
        <section>
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-4 mb-6 mb-lg-0">
                <div class="card border-0 bg-transparent">
                  <div class="position-absolute bg-blue shadow-primary text-center p-2 rounded ms-3 mt-3">
                    15
                    <br />
                    July
                  </div>
                  <img class="card-img-top shadow rounded" src="assets/images/blog/01.png" alt="Image" />
                  <div class="card-body pt-5">
                    {' '}
                    <a class="d-inline-block text-muted mb-2" href="#">
                      Sass
                    </a>
                    <h2 class="h5 font-weight-medium">
                      <a class="link-title text-white" href="blog-single.html">
                        Bootsland Perfect Performance landing Page
                      </a>
                    </h2>
                    <p>Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                  </div>
                  <div class="card-footer bg-transparent border-0 pt-0">
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
              <div class="col-12 col-lg-4 mb-6 mb-lg-0">
                <div class="card border-0 bg-transparent">
                  <div class="position-absolute bg-blue shadow-primary text-center p-2 rounded ms-3 mt-3">
                    15
                    <br />
                    July
                  </div>
                  <img class="card-img-top shadow rounded" src="assets/images/blog/02.png" alt="Image" />
                  <div class="card-body pt-5">
                    {' '}
                    <a class="d-inline-block text-muted mb-2" href="#">
                      Marketing
                    </a>
                    <h2 class="h5 font-weight-medium">
                      <a class="link-title text-white" href="blog-single.html">
                        The most powerfull template that make you.
                      </a>
                    </h2>
                    <p>Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                  </div>
                  <div class="card-footer bg-transparent border-0 pt-0">
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
              <div class="col-12 col-lg-4">
                <div class="card border-0 bg-transparent">
                  <div class="position-absolute bg-blue shadow-primary text-center p-2 rounded ms-3 mt-3">
                    15
                    <br />
                    July
                  </div>
                  <img class="card-img-top shadow rounded" src="assets/images/blog/03.png" alt="Image" />
                  <div class="card-body pt-5">
                    {' '}
                    <a class="d-inline-block text-muted mb-2" href="#">
                      Landing
                    </a>
                    <h2 class="h5 font-weight-medium">
                      <a class="link-title text-white" href="blog-single.html">
                        A brand for a company is like a reputation person.
                      </a>
                    </h2>
                    <p>Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                  </div>
                  <div class="card-footer bg-transparent border-0 pt-0">
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

            <div class="row mt-8">
              <div class="col-12 col-lg-6 mb-6 mb-lg-0">
                <div class="card border-0 bg-transparent">
                  <div class="position-absolute bg-blue shadow-primary text-center p-2 rounded ms-3 mt-3">
                    15
                    <br />
                    July
                  </div>
                  <img class="card-img-top shadow rounded" src="assets/images/blog/01.png" alt="Image" />
                  <div class="card-body pt-5">
                    {' '}
                    <a class="d-inline-block text-muted mb-2" href="#">
                      Sass
                    </a>
                    <h2 class="h5 font-weight-medium">
                      <a class="link-title text-white" href="blog-single.html">
                        Bootsland Perfect Performance landing Page
                      </a>
                    </h2>
                    <p>Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                  </div>
                  <div class="card-footer bg-transparent border-0 pt-0">
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
              <div class="col-12 col-lg-6">
                <div class="card border-0 bg-transparent">
                  <div class="position-absolute bg-blue shadow-primary text-center p-2 rounded ms-3 mt-3">
                    15
                    <br />
                    July
                  </div>
                  <img class="card-img-top shadow rounded" src="assets/images/blog/02.png" alt="Image" />
                  <div class="card-body pt-5">
                    {' '}
                    <a class="d-inline-block text-muted mb-2" href="#">
                      Marketing
                    </a>
                    <h2 class="h5 font-weight-medium">
                      <a class="link-title text-white" href="blog-single.html">
                        The most powerfull template that make you.
                      </a>
                    </h2>
                    <p>Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                  </div>
                  <div class="card-footer bg-transparent border-0 pt-0">
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

            <div class="row mt-11">
              <div class="col-12">
                <nav aria-label="...">
                  <ul class="pagination">
                    <li class="page-item me-auto">
                      {' '}
                      <a class="page-link" href="#">
                        Previous
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link border-0 rounded text-dark" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item active" aria-current="page">
                      {' '}
                      <a class="page-link border-0 rounded" href="#">
                        2 <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link border-0 rounded text-dark" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link border-0 rounded text-dark" href="#">
                        ...
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link border-0 rounded text-dark" href="#">
                        5
                      </a>
                    </li>
                    <li class="page-item ms-auto">
                      {' '}
                      <a class="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
