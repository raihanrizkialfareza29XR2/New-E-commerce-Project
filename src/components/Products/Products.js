import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import { Link, useNavigate } from 'react-router-dom';

const Products = () => {
  useEffect(() => {
    document.body.classList.add('bg-dark');

    return () => {
      document.body.classList.remove('bg-dark');
    };
  });
  const history = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    getCategory();
  }, []);
  const [products, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [width, setWidth] = useState();

  const addToCart = async (id) => {
    await axios.post(`http://localhost:8000/api/add/to/cart`, { quantity: 1, product_id: id }, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
    history('/cart');
  };

  const getProduct = async () => {
    const products = await axios.get('http://localhost:8000/api/products');
    console.log(products.data.data.data);
    setProduct(products.data.data.data);
  };
  const getCategory = async () => {
    const categories = await axios.get('http://localhost:8000/api/categories');
    console.log(categories.data.data);
    setCategories(categories.data.data);
  };
  return (
    <div className="text-white">
      <section class="position-relative custom-pt-1">
        <div id="particles-js"></div>
        <div class="container">
          <div class="row  text-center">
            <div class="col">
              <h1>Product Grid</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center bg-transparent p-0 m-0">
                  <li class="breadcrumb-item">
                    <a class="text-white" href="#">
                      Home
                    </a>
                  </li>
                  <li class="breadcrumb-item">Shop</li>
                  <li class="breadcrumb-item active text-primary" aria-current="page">
                    Product Grid
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
              <div class="col-lg-9 col-md-12 order-lg-1">
                <div class="row text-center">
                  {products.map((product) => {
                    return (
                      <div class="col-lg-4 col-md-6">
                        <div class="product-item" key={product.id}>
                          <div class="product-img">{product.galleries.length > 0 ? <img width={width} class="img-fluid" src={product.galleries[0].url} alt="" /> : ''}</div>
                          <div class="product-desc">
                            {' '}
                            <Link to={`/product/${product.id}`} class="product-name mt-4 mb-2 d-block text-white link-title">
                              {product.name}
                            </Link>
                            <span class="product-price">
                              <NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                            </span>
                            <div class="product-link mt-3">
                              <button
                                type="submit"
                                onClick={() => {
                                  addToCart(product.id);
                                }}
                                class="add-cart btn btn-primary me-2"
                              >
                                <i class="ti-bag me-2"></i>Add To Cart
                              </button>
                              {/* <a class="wishlist-btn" href="#">
                                {' '}
                                <i class="ti-heart"></i>
                              </a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <nav aria-label="..." class="mt-8">
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
              <div class="col-lg-3 col-md-12 sidebar">
                <div class="mt-4 widget widget-size">
                  <h4 class="widget-title mb-3">Width Image</h4>
                  <ul class="list-inline clearfix">
                    <li>
                      <input name="sc" value="100" onChange={(e) => setWidth(e.target.value)} id="s-size" type="radio" />
                      <label for="s-size">100</label>
                    </li>
                    <li>
                      <input name="sc" value="200" onChange={(e) => setWidth(e.target.value)} id="m-size" type="radio" />
                      <label for="m-size">200</label>
                    </li>
                    <li>
                      <input name="sc" value="300" onChange={(e) => setWidth(e.target.value)} id="l-size" type="radio" />
                      <label for="l-size">300</label>
                    </li>
                    <li>
                      <input name="sc" value="400" onChange={(e) => setWidth(e.target.value)} id="xl-size" type="radio" />
                      <label for="xl-size">400</label>
                    </li>
                    <li>
                      <input name="sc" value="500" onChange={(e) => setWidth(e.target.value)} id="xll-size" type="radio" />
                      <label for="xll-size">500</label>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 class="">Categories</h4>
                  <ul class="list-unstyled list-group list-group-flush">
                    {' '}
                    {/* {console.log(categories)} */}
                    {Object.keys(categories).map((category, i) => (
                      <li key={i}>
                        <a class="list-group-item bg-transparent text-white list-group-item-action border-0 p-0 mb-2" href="#">
                          {categories[category].name}
                          <span class="badge badge-primary-soft text-white fw-normal rounded-pill ms-2">{categories[category].products_count}</span>
                        </a>
                      </li>
                    ))}
                    {/* {categories.map((category, index) => {
                      return (
                        <li key={index}>
                          <a class="list-group-item bg-transparent text-white list-group-item-action border-0 p-0" href="#">
                            {category.name}
                            <span class="badge badge-primary-soft text-white fw-normal rounded-pill ms-2">74</span>
                          </a>
                        </li>
                      );
                    })} */}
                  </ul>
                </div>
                <div class="mt-4 widget widget-price">
                  <h4 class="widget-title mb-3">Price</h4>
                  <div class="form-check mb-2">
                    <input type="checkbox" class="form-check-input" id="priceCheck1" />
                    <label class="form-check-label" for="priceCheck1">
                      $10 - $100
                    </label>
                  </div>
                  <div class="form-check mb-2">
                    <input type="checkbox" class="form-check-input" id="priceCheck2" />
                    <label class="form-check-label" for="priceCheck2">
                      $100 - $200
                    </label>
                  </div>
                  <div class="form-check mb-2">
                    <input type="checkbox" class="form-check-input" id="priceCheck3" />
                    <label class="form-check-label" for="priceCheck3">
                      $200 - $300
                    </label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="priceCheck4" />
                    <label class="form-check-label" for="priceCheck4">
                      $300 - $400
                    </label>
                  </div>
                </div>
                <div class="mt-8 widget widget-color">
                  <h4 class="widget-title mb-3">Color</h4>
                  <ul class="list-inline">
                    <li>
                      <div class="form-check ps-0">
                        <input type="radio" class="form-check-input" id="color-filter1" />
                        <label class="form-check-label" for="color-filter1" data-bg-color="#3cb371"></label>
                      </div>{' '}
                      <small>Green</small>
                    </li>
                    <li>
                      <div class="form-check ps-0">
                        <input type="radio" class="form-check-input" id="color-filter2" checked />
                        <label class="form-check-label" for="color-filter2" data-bg-color="#4876ff"></label>
                      </div>{' '}
                      <small>Blue</small>
                    </li>
                    <li>
                      <div class="form-check ps-0">
                        <input type="radio" class="form-check-input" id="color-filter3" />
                        <label class="form-check-label" for="color-filter3" data-bg-color="#0a1b2b"></label>
                      </div>{' '}
                      <small>Black</small>
                    </li>
                    <li>
                      <div class="form-check ps-0">
                        <input type="radio" class="form-check-input" id="color-filter4" />
                        <label class="form-check-label" for="color-filter4" data-bg-color="#f94f15"></label>
                      </div>{' '}
                      <small>Orange</small>
                    </li>
                    <li class="mb-0">
                      <div class="form-check ps-0">
                        <input type="radio" class="form-check-input" id="color-filter5" />
                        <label class="form-check-label" for="color-filter5" data-bg-color="#FF00FF"></label>
                      </div>{' '}
                      <small>Fuchsia</small>
                    </li>
                    <li class="mb-0">
                      <div class="form-check ps-0">
                        <input type="radio" class="form-check-input" id="color-filter6" />
                        <label class="form-check-label" for="color-filter6" data-bg-color="#ffc300"></label>
                      </div>{' '}
                      <small>Yellow</small>
                    </li>
                    <li class="mb-0">
                      <div class="form-check ps-0">
                        <input type="radio" class="form-check-input" id="color-filter7" />
                        <label class="form-check-label" for="color-filter7" data-bg-color="#808080"></label>
                      </div>{' '}
                      <small>Gray</small>
                    </li>
                    <li class="mb-0">
                      <div class="form-check ps-0">
                        <input type="radio" class="form-check-input" id="color-filter8" />
                        <label class="form-check-label" for="color-filter8" data-bg-color="#008080"></label>
                      </div>{' '}
                      <small>Teal</small>
                    </li>
                  </ul>
                </div>
                <div class="mt-8 widget widget-size">
                  <h4 class="widget-title mb-3">Size</h4>
                  <ul class="list-inline clearfix">
                    <li>
                      <input name="sc" id="s-size" type="radio" />
                      <label for="s-size">S</label>
                    </li>
                    <li>
                      <input name="sc" id="m-size" checked="" type="radio" />
                      <label for="m-size">M</label>
                    </li>
                    <li>
                      <input name="sc" id="l-size" type="radio" />
                      <label for="l-size">L</label>
                    </li>
                    <li>
                      <input name="sc" id="xl-size" type="radio" />
                      <label for="xl-size">XL</label>
                    </li>
                    <li>
                      <input name="sc" id="xll-size" type="radio" />
                      <label for="xll-size">XLL</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
