import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import NumberFormat from 'react-number-format';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  useEffect(() => {
    document.body.classList.add('bg-dark');

    return () => {
      document.body.classList.remove('bg-dark');
    };
  });
  const [cart, setCart] = useState([]);
  var subTotal = 0;
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [cartId, setCartId] = useState();
  const token = localStorage.getItem('token');

  const handleDecrement = (cart_id) => {
    setCart((cart) => cart.map((item) => (cart_id === item.id ? { ...item, quantity: item.quantity - (item.quantity > 1 ? 1 : 0) } : item)));
    updateQuantityCart(cart_id, 'dec');
  };

  const handleIncrement = (cart_id) => {
    setCart((cart) => cart.map((item) => (cart_id === item.id ? { ...item, quantity: item.quantity + (item.quantity < 10 ? 1 : 0) } : item)));
    updateQuantityCart(cart_id, 'inc');
  };

  const updateQuantityCart = async (cart_id, scope) => {
    await axios.put(`http://localhost:8000/api/update/cart/${cart_id}/${scope}`, {}, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
  };

  const deleteCartItem = async (e, cart_id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText = 'Removing';

    await axios.delete(`http://localhost:8000/api/delete/cart/${cart_id}`, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }).then((response) => {
      thisClicked.innerText = <i class="ti-close"></i>;
    });
  };

  console.log(cartId);
  useEffect(() => {
    // const table = document.getElementById('table-cart')
    getCart();
  });
  const getCart = async () => {
    const data = await axios.get('http://localhost:8000/api/cart', { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
    setCart(data.data.data);
    console.log(data);
  };
  const history = useNavigate();
  return (
    <div className="text-white">
      <section class="position-relative custom-pb-1 custom-pt-1">
        <div id="particles-js"></div>
        <div class="container">
          <div class="row  text-center">
            <div class="col">
              <h1>Product Cart</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center bg-transparent p-0 m-0">
                  <li class="breadcrumb-item">
                    <a class="text-white" href="#">
                      Home
                    </a>
                  </li>
                  <li class="breadcrumb-item">Shop</li>
                  <li class="breadcrumb-item active text-primary" aria-current="page">
                    Product Cart
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
              <div class="col">
                <div class="table-responsive">
                  <table id="table-cart" class="cart-table table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col text-white">Product</th>
                        <th scope="col text-white">Price</th>
                        <th scope="col text-white">Quantity</th>
                        <th scope="col text-white">Total</th>
                        <th scope="col text-white">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((ct, index) => {
                        // setPrice(price)
                        const harga = ct.variant != null ? `${ct.variant.price}` : `${ct.product.price}`;
                        const jumlah = quantity == null ? ct.quantity : quantity;
                        subTotal += harga * jumlah;
                        return (
                          <tr key={index}>
                            <td>
                              <div class="d-md-flex align-items-center">
                                <a href="#">{ct.product.galleries.length > 0 ? <img class="img-fluid me-lg-2 mb-2 mb-lg-0" width={42} src={ct.product.galleries[0].url} alt="" /> : ''}</a>
                                <div class="text-start">
                                  <p class="mb-0 ms-2 text-white">{ct.product.name}</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              {/* <h5 class="mb-0"></h5> */}
                              <NumberFormat className={'mb-0 text-white'} value={harga} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                            </td>
                            <td>
                              <div class="d-flex justify-content-center align-items-center">
                                <button class="btn-product btn-product-up" onClick={() => handleDecrement(ct.id)}>
                                  {' '}
                                  <i class="ti-minus"></i>
                                </button>
                                <input class="form-product" type="number" name="form-product" value={ct.quantity} />
                                <button class="btn-product btn-product-down" onClick={() => handleIncrement(ct.id)}>
                                  {' '}
                                  <i class="ti-plus"></i>
                                </button>
                                {/* <input type="number" value={quantity == null ? ct.quantity : quantity} onChange={(e) => {setQuantity(e.target.value); setCartId(ct.id);}} /> */}
                              </div>
                            </td>
                            <td>
                              <NumberFormat className={'mb-0 text-white'} value={harga * jumlah} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                            </td>
                            <td>
                              <button type="submit" onClick={(e) => deleteCartItem(e, ct.id)} class="btn btn-danger btn-sm">
                                <i class="ti-close"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="row mt-8">
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-md-12">
                    <label class="text-white h4" for="coupon">
                      Coupon
                    </label>
                    <p>Enter your coupon code if you have one.</p>
                  </div>
                  <div class="col-md-8 mb-3 mb-md-0">
                    <input class="form-control py-3" id="coupon" placeholder="Coupon Code" type="text" />
                  </div>
                  <div class="col-md-4">
                    <button class="btn btn-primary btn-sm px-4">Apply Coupon</button>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 pe-5 mt-5 mt-lg-0">
                <div class="row justify-content-end">
                  <div class="col-md-7">
                    <div class="row">
                      <div class="col-md-12 text-end border-bottom mb-5">
                        <h3 class="text-white h4 text-uppercase">Cart Totals</h3>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-md-6">
                        <span class="text-white">Subtotal</span>
                      </div>
                      <div class="col-md-6 text-end">
                        <NumberFormat className={'mb-0'} value={subTotal} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                      </div>
                    </div>
                    <div class="row mb-5">
                      <div class="col-md-6">
                        <span class="text-white">Total</span>
                      </div>
                      <div class="col-md-6 text-end">
                        <strong class="text-white">
                          <NumberFormat className={'mb-0'} value={subTotal} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                        </strong>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <Link class="btn btn-primary btn-md btn-block mb-2" to={'/checkout'}>
                          Proceed To Checkout
                        </Link>
                        <Link class="btn btn-outline-primary btn-md btn-block" to={'/products'}>
                          Continue Shopping
                        </Link>
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

export default Cart;
