import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import NumberFormat from 'react-number-format';
import { useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from 'react-slick';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';

import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';

SwiperCore.use([EffectCoverflow, Pagination]);

const SingleProduct = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [category, setCategory] = useState('');
  const [variant, setVariant] = useState([]);
  const [galleries, setGalleries] = useState([]);
  const [variantId, setVariantId] = useState();
  const [quantity, setQuantity] = useState(1);

  const [price, setPriceFe] = useState(0);

  useEffect(() => {
    getData();
  });

  useEffect(() => {
    document.body.classList.add('bg-dark');

    return () => {
      document.body.classList.remove('bg-dark');
    };
  });

  // console.log(variantId);

  const setPrice = async (variantId) => {
    if (variantId != 0) {
      const price = await axios.get(`http://localhost:8000/api/price/${variantId}`, { withCredentials: true });
      console.log(price);
      setPriceFe(price.data.data.price);
    } else {
      setPriceFe(0);
    }
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  const history = useNavigate();

  const token = localStorage.getItem('token');

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const tambahKeranjang = async (e) => {
    if (variantId != 0) {
      await axios.post(`http://localhost:8000/api/add/to/cart`, { quantity: quantity, product_id: id, variant_id: variantId }, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
    } else {
      await axios.post(`http://localhost:8000/api/add/to/cart`, { quantity: quantity, product_id: id }, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
    }
    history('/cart');
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const getData = async () => {
    const data = await axios.get(`http://localhost:8000/api/product/${id}`, { withCredentials: true });
    // console.log(data.data.data.galleries.length);
    setData(data.data.data);
    setCategory(data.data.data.category.name);
    setVariant(data.data.data.variant);
    setGalleries(data.data.data.galleries);
  };
  return (
    <div className="text-white">
      <section class="position-relative custom-pb-1 custom-pt-1">
        <div id="particles-js"></div>
        <div class="container">
          <div class="row  text-center">
            <div class="col">
              <h1>Product single</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center bg-transparent p-0 m-0">
                  <li class="breadcrumb-item">
                    <a class="text-dark" href="#">
                      Home
                    </a>
                  </li>
                  <li class="breadcrumb-item">Shop</li>
                  <li class="breadcrumb-item active text-primary" aria-current="page">
                    Product single
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
              <div class="col-lg-5 col-md-5">
                {/* <ul id="imageGallery">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    centeredSlides={true}
                    grabCursor={true}
                    effect={'coverflow'}
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 6,
                      slideShadows: true,
                    }}
                  >
                    {galleries.length >= 1
                      ? galleries.map((item, key) => {
                          return (
                            <SwiperSlide>
                              <img src={item.url} />
                            </SwiperSlide>
                          );
                        })
                      : ''}
                  </Swiper>
                </ul> */}
                <Slider {...settings}>
                  {galleries.length >= 1
                    ? galleries.map((item, key) => {
                        return <img src={item.url} />;
                      })
                    : ''}
                </Slider>
              </div>
              <div class="col-lg-6 col-md-6 mt-5 mt-md-0" style={{ marginLeft: '60px' }}>
                <div class="product-details">
                  <h4>{data.name}</h4>
                  <div class="product-price my-4">
                    {' '}
                    <span class="d-block">
                      {' '}
                      <NumberFormat className={'mb-0'} value={price == 0 ? data.price : price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                    </span>
                    <span class="text-primary">
                      <i class="ti-star"></i>
                      <i class="ti-star"></i>
                      <i class="ti-star"></i>
                      <i class="ti-star"></i>
                      <i class="ti-star"></i>
                    </span>
                  </div>
                  <ul class="list-unstyled mb-4">
                    <li class="mb-2">
                      <span class="text-white"> Availibility: </span> {data.inStock == 1 ? 'In Stock' : 'Out Of Stock'}
                    </li>
                    <li>
                      <span class="text-white"> Categories :</span> {category}
                    </li>
                  </ul>
                  <p>Nulla eget sem vitae eros pharetra viverra Nam vitae luctus ligula suscipit risus nec eleifend Pellentesque eu quam sem, ac malesuada leo sem quam pellente Awesome sliders opportunity</p>
                  <div class="row my-4">
                    <div class="col-lg-5 col-sm-6">
                      <h6 class="mb-2 text-dark">Variant</h6>
                      <select
                        class="form-select"
                        onChange={(e) => {
                          setVariantId(e.target.value);
                          setPrice(e.target.value);
                        }}
                      >
                        <option value={0} selected>
                          Default
                        </option>
                        {variant.map((index, id) => {
                          return <option value={index.id}>{index.name}</option>;
                        })}
                      </select>
                    </div>
                    {/* <div class="col-lg-7 col-sm-6 mt-3 mt-sm-0">
                      <div class="widget-color">
                        <h6>Color</h6>
                        <div class="d-flex">
                          <div class="form-check ps-0 me-3">
                            <input type="radio" class="form-check-input" id="color-filter1" name="Radios" />
                            <label class="form-check-label" for="color-filter1" data-bg-color="#3cb371" style={{ backgroundColor: 'rgb(60, 179, 113)' }}></label>
                          </div>
                          <div class="form-check ps-0 me-3">
                            <input type="radio" class="form-check-input" id="color-filter2" name="Radios" checked="" />
                            <label class="form-check-label" for="color-filter2" data-bg-color="#4876ff" style={{ backgroundColor: 'rgb(72, 118, 255)' }}></label>
                          </div>
                          <div class="form-check ps-0 me-3">
                            <input type="radio" class="form-check-input" id="color-filter3" name="Radios" />
                            <label class="form-check-label" for="color-filter3" data-bg-color="#0a1b2b" style={{ backgroundColor: 'rgb(10, 27, 43)' }}></label>
                          </div>
                          <div class="form-check ps-0">
                            <input type="radio" class="form-check-input" id="color-filter4" name="Radios" />
                            <label class="form-check-label" for="color-filter4" data-bg-color="#f94f15" style={{ backgroundColor: 'rgb(249, 79, 21)' }}></label>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div class="d-flex align-items-center">
                    <button class="btn-product btn-product-up" onClick={() => handleDecrement()}>
                      {' '}
                      <i class="ti-minus"></i>
                    </button>
                    <input class="form-product" type="number" name="form-product" value={quantity} />
                    <button class="btn-product btn-product-down" onClick={() => handleIncrement()}>
                      {' '}
                      <i class="ti-plus"></i>
                    </button>
                  </div>
                  <div class="d-flex align-items-center mt-5">
                    <a class="btn btn-primary me-4" onClick={tambahKeranjang}>
                      <i class="ti-bag me-2"></i>Add To Cart
                    </a>
                    {/* <div class="product-link">
                      <a class="wishlist-btn" href="#">
                        {' '}
                        <i class="ti-heart"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="tab">
                  <nav>
                    <div class="nav nav-tabs border-0" id="nav-tab" role="tablist">
                      {' '}
                      <a class="nav-item nav-link active ms-0" id="nav-tab1" data-bs-toggle="tab" href="#tab3-1" role="tab" aria-selected="true">
                        Description
                      </a>
                      <a class="nav-item nav-link" id="nav-tab2" data-bs-toggle="tab" href="#tab3-2" role="tab" aria-selected="false">
                        Additional information
                      </a>
                      <a class="nav-item nav-link" id="nav-tab3" data-bs-toggle="tab" href="#tab3-3" role="tab" aria-selected="false">
                        Reviews (2)
                      </a>
                    </div>
                  </nav>
                  <div class="tab-content pt-5">
                    <div role="tabpanel" class="tab-pane fade show active" id="tab3-1">
                      <h5 class="mb-3">Product Description</h5>
                      <p class="mb-0">
                        ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat Praesent pharetra, justo ut scelerisque mattis, leo quam aliquet
                        diam, congue laoreet elit metus eget diam. Proin ac metus diam. In quis scelerisque velit. Proin pellentesque neque ut scelerisque dapibus. Praesent elementum feugiat dignissim. Nunc placerat mi id nisi interdum
                        mollis. Praesent pharetra, justo ut scelerisque mattis, leo quam aliquet diam, nisi interdum mollis. Praesent pharetra, justo ut scelerisque mattis, leo quam aliquet diam.
                      </p>
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="tab3-2">
                      <h5 class="mb-3">Additional information</h5>
                      <table class="table table-bordered mb-0">
                        <tbody>
                          <tr>
                            <td>Size</td>
                            <td>Small, Medium, Large &amp; Extra Large</td>
                          </tr>
                          <tr>
                            <td>Color</td>
                            <td>Red, Blue, Green &amp; Black</td>
                          </tr>
                          <tr>
                            <td>Chest</td>
                            <td>38 inches</td>
                          </tr>
                          <tr>
                            <td>Waist</td>
                            <td>20 cm</td>
                          </tr>
                          <tr>
                            <td>Length</td>
                            <td>35 cm</td>
                          </tr>
                          <tr>
                            <td>Fabric</td>
                            <td>Cotton, Silk &amp; Synthetic</td>
                          </tr>
                          <tr>
                            <td>Warranty</td>
                            <td>6 Months</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="tab3-3">
                      <div class="row">
                        <div class="col-md-7">
                          <div class="row total-rating">
                            <div class="col-md-6">
                              <div class="bg-light shadow-sm text-center p-5">
                                <h5>Overall</h5>
                                <h4>4.0</h4>
                                <h6>(03 Reviews)</h6>
                              </div>
                            </div>
                            <div class="col-md-6 mt-3 mt-lg-0">
                              <div class="rating-list">
                                <div class="rating-list">
                                  <div class="d-flex align-items-center mb-2">
                                    <div class="text-nowrap me-3">5 Star</div>
                                    <div class="w-100">
                                      <div class="progress" style={{ height: '5px' }}>
                                        <div class="progress-bar bg-success" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                    </div>
                                    <span class="text-muted ms-3">90%</span>
                                  </div>
                                  <div class="d-flex align-items-center mb-2">
                                    <div class="text-nowrap me-3">4 Star</div>
                                    <div class="w-100">
                                      <div class="progress" style={{ height: '5px' }}>
                                        <div class="progress-bar bg-success" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                    </div>
                                    <span class="text-muted ms-3">60%</span>
                                  </div>
                                  <div class="d-flex align-items-center mb-2">
                                    <div class="text-nowrap me-3">3 Star</div>
                                    <div class="w-100">
                                      <div class="progress" style={{ height: '5px' }}>
                                        <div class="progress-bar bg-success" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                    </div>
                                    <span class="text-muted ms-3">40%</span>
                                  </div>
                                  <div class="d-flex align-items-center mb-2">
                                    <div class="text-nowrap me-3">2 Star</div>
                                    <div class="w-100">
                                      <div class="progress" style={{ height: '5px' }}>
                                        <div class="progress-bar bg-warning" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                    </div>
                                    <span class="text-muted ms-3">20%</span>
                                  </div>
                                  <div class="d-flex align-items-center mb-2">
                                    <div class="text-nowrap me-3">1 Star</div>
                                    <div class="w-100">
                                      <div class="progress" style={{ height: '5px' }}>
                                        <div class="progress-bar bg-danger" role="progressbar" style={{ width: '10%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                    </div>
                                    <span class="text-muted ms-3">10%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="media-holder review-list mt-5">
                            <div class="row">
                              <div class="mb-4 mb-md-0 col-md-auto">
                                <img class="img-fluid" alt="image" src="assets/images/thumbnail/01.jpg" />
                              </div>
                              <div class="col-md">
                                <h6>Sasha James</h6>
                                <p>
                                  Seuismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et tantas
                                  semper delicatissimi.
                                </p>{' '}
                                <span class="text-primary">
                                  <i class="ti-star"></i>
                                  <i class="ti-star"></i>
                                  <i class="ti-star"></i>
                                  <i class="ti-star"></i>
                                  <i class="ti-star"></i>
                                </span>
                              </div>
                            </div>
                            <div class="row mt-5">
                              <div class="mb-4 mb-md-0 col-md-auto">
                                <img class="img-fluid" alt="image" src="assets/images/thumbnail/02.jpg" />
                              </div>
                              <div class="col-md">
                                <h6 class="mb-0">Ben Miller</h6>
                                <p>
                                  Seuismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et tantas
                                  semper delicatissimi.
                                </p>{' '}
                                <span class="text-primary">
                                  <i class="ti-star"></i>
                                  <i class="ti-star"></i>
                                  <i class="ti-star"></i>
                                  <i class="ti-star"></i>
                                  <i class="ti-star"></i>
                                </span>
                              </div>
                            </div>
                            <div class="row mt-5">
                              <div class="mb-4 mb-md-0 col-md-auto">
                                <img class="img-fluid" alt="image" src="assets/images/thumbnail/03.jpg" />
                              </div>
                              <div class="col-md">
                                <h6 class="mb-0">Keron Jolie</h6>
                                <p>
                                  Seuismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et tantas
                                  semper delicatissimi.
                                </p>{' '}
                                <span class="text-primary">
                                  <i class="ti-star"></i>
                                  <i class="ti-star"></i>
                                  <i class="ti-star"></i>
                                  <i class="ti-star"></i>
                                  <i class="ti-star"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-5">
                          <div class="post-comments mt-5 pos-r">
                            <div class="section-title mb-3">
                              <h5>Add Review</h5>
                            </div>
                            <form id="contact-form" method="post" action="https://themeht.com/bootsland/html/contact.php">
                              <div class="messages"></div>
                              <div class="form-group">
                                <input id="form_name" type="text" name="name" class="form-control" placeholder="Name" required="required" data-error="Name is required." />
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="form-group">
                                <input id="form_email" type="email" name="email" class="form-control" placeholder="Email Address" required="required" data-error="Valid email is required." />
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="form-group clearfix">
                                <select class="form-control form-select">
                                  <option value="">Rating -- Select</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                </select>
                              </div>
                              <div class="form-group">
                                <input id="form_number" type="text" name="name" class="form-control" placeholder="Phone Number" required="required" />
                              </div>
                              <div class="form-group">
                                <textarea id="form_message" name="message" class="form-control" placeholder="Type Comment" rows="4" required="required" data-error="Please,leave us a message."></textarea>
                                <div class="help-block with-errors"></div>
                              </div>
                              <button class="btn btn-primary mt-3">Post Review</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SingleProduct;
