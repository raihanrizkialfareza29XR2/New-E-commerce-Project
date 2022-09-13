import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import NumberFormat from 'react-number-format';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
  useEffect(() => {
    document.body.classList.add('bg-dark');

    return () => {
      document.body.classList.remove('bg-dark');
    };
  });

  const [cart, setCart] = useState([]);
  const [province, setProvince] = useState([]);
  const [provinceId, setProvinceId] = useState();
  const [shipping, setPriceShip] = useState(15000);
  const [cities, setCities] = useState([]);
  var total = 0;
  const [checkoutInput, setCheckoutInput] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    address: '',
    zipcode: '',
    courier: '',
    paymentmethod: '',
  });
  const [citiesId, setCitiesId] = useState();
  const [courier, setCourier] = useState('');
  var subTotal = 0;

  const handleInput = (e) => {
    e.persist();

    setCheckoutInput({ ...checkoutInput, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getProvince();
  }, []);

  useEffect(() => {
    // getVar();
    getCart();
  });

  const getCart = async () => {
    const data = await axios.get('http://localhost:8000/api/cart', { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
    setCart(data.data.data);
    console.log(data);
  };

  const getProvince = async () => {
    const data = await axios.get('http://localhost:8000/api/shipping/province', { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
    setProvince(data.data.data);
    console.log(data);
  };

  const submitOrder = async (e) => {
    e.preventDefault();

    const data = {
      firstname: checkoutInput.firstname,
      lastname: checkoutInput.lastname,
      phone: checkoutInput.phone,
      email: checkoutInput.email,
      address: checkoutInput.address,
      zipcode: checkoutInput.zipcode,
      courier: courier,
      total_price: total,
      shipping_price: shipping,
      payment_method: checkoutInput.paymentmethod,
    };

    await axios.post('http://localhost:8000/api/place-order', data, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }).then((res) => {
      if (res.data.code === 200) {
        history('/');
      }
    });
  };

  const getCities = async (province_id) => {
    console.log(provinceId);
    const data = await axios.get(`http://localhost:8000/api/shipping/cities/${provinceId}`, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
    setCities(data.data.data);
    console.log(data);
  };

  const token = localStorage.getItem('token');
  const history = useNavigate();
  return (
    <div className="text-white">
      <section class="position-relative custom-pt-1 custom-pb-1">
        <div id="particles-js"></div>
        <div class="container">
          <div class="row  text-center">
            <div class="col">
              <h1>Product Checkout</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center bg-transparent p-0 m-0">
                  <li class="breadcrumb-item">
                    <a class="text-white" href="#">
                      Home
                    </a>
                  </li>
                  <li class="breadcrumb-item">Shop</li>
                  <li class="breadcrumb-item active text-primary" aria-current="page">
                    Product Checkout
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
              <div class="col-lg-7 col-md-12">
                <div class="checkout-form box-shadow white-bg">
                  <h2 class="mb-4">Billing Details</h2>
                  <form class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>First Name</label>
                        <input type="text" onChange={handleInput} name="firstname" value={checkoutInput.firstname} id="firstname" class="form-control" placeholder="Your firstname" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Last Name</label>
                        <input type="text" onChange={handleInput} name="lastname" value={checkoutInput.lastname} id="lastname" class="form-control" placeholder="Your lastname" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>E-mail Address</label>
                        <input type="text" onChange={handleInput} name="email" value={checkoutInput.email} id="email" class="form-control" placeholder="State Province" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Phone Number</label>
                        <input type="text" onChange={handleInput} name="phone" value={checkoutInput.phone} id="phone" class="form-control" placeholder="" />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Address</label>
                        <input type="text" id="address" name="address" onChange={handleInput} value={checkoutInput.address} class="form-control" placeholder="Enter Your Address" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group mb-md-0">
                        <label>State/Province</label>
                        <select
                          name="provinces"
                          onClick={(e) => {
                            setProvinceId(e.target.value);
                            getCities(e.target.value);
                          }}
                          className="form-control"
                        >
                          {province.map((item, key) => {
                            return <option value={item.province_id}>{item.province}</option>;
                          })}
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Town/City</label>
                        <select
                          className="form-control"
                          name="cities"
                          onChange={(e) => {
                            setCitiesId(e.target.value);
                          }}
                          id=""
                        >
                          {cities.map((item, key) => {
                            return <option value={item.city_id}>{item.city_name}</option>;
                          })}
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group mb-md-0">
                        <label>Zip/Postal Code</label>
                        <input type="text" onChange={handleInput} value={checkoutInput.zipcode} id="zipcode" name="zipcode" class="form-control" placeholder="Zip / Postal" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group mb-md-0">
                        <label>Courier</label>
                        <select
                          name="courier"
                          id="courier"
                          onChange={(e) => {
                            setCourier(e.target.value);
                          }}
                          className="form-control"
                        >
                          <option value="jne" selected>
                            JNE
                          </option>
                          <option value="tiki">Tiki</option>
                          <option value="pos">Kantor Pos</option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-5 col-md-12 md-mt-5">
                <div class="row mb-5">
                  {/* <div class="col-md-12">
                    <h3 class="mb-3 text-white">Coupon Code</h3>
                    <div class="p-3 p-lg-5 border">
                      <label class="text-white mb-3">Enter your coupon code if you have one</label>
                      <div class="input-group">
                        <input class="form-control" id="c-code" placeholder="Coupon Code" aria-label="Coupon Code" aria-describedby="button-addon2" type="text" />
                        <div class="input-group-append">
                          <button class="btn btn-primary btn-sm px-4" type="button" id="button-addon2">
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div class="p-3 p-lg-5 border">
                  <h3 class="mb-3">Your Order</h3>
                  <ul class="list-unstyled">
                    {cart.map((item, idx) => {
                      const harga = item.variant != null ? `${item.variant.price}` : `${item.product.price}`;
                      subTotal += harga * item.quantity;
                      total = subTotal + shipping;
                      return (
                        <li class="mb-3 border-bottom pb-3">
                          <span>
                            {' '}
                            {item.quantity} x {item.product.name}
                          </span>
                          <NumberFormat className={'mb-0 text-white ms-2'} value={harga} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                        </li>
                      );
                    })}
                    <li class="mb-3 border-bottom pb-3">
                      <span> Shipping </span> <NumberFormat className={'mb-0 text-white'} value={shipping} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                    </li>
                    <li class="mb-3 border-bottom pb-3">
                      <span> Subtotal </span> <NumberFormat className={'mb-0 text-white'} value={subTotal} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                    </li>
                    <li>
                      <span>
                        <strong class="cart-total"> Total :</strong>
                      </span>{' '}
                      <strong class="cart-total">
                        <NumberFormat className={'mb-0 text-white'} value={total} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />{' '}
                      </strong>
                    </li>
                  </ul>
                </div>
                <div class="cart-detail my-5">
                  <h3 class="mb-3">Payment Method</h3>
                  <div class="form-group">
                    <select name="paymentmethod" className="form-control" onChange={handleInput} value={checkoutInput.paymentmethod} id="">
                      <option value="MANUAL">Manual Transfer</option>
                      <option value="AUTOMATIC">Automatic Payment</option>
                    </select>
                  </div>
                </div>
                <button class="btn btn-primary btn-block" onClick={submitOrder}>
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CheckOut;
