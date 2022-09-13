import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const http = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
  });

  // useEffect(() => {
  //   getCsrf();
  // }, []);

  // const getCsrf = async () => {
  //   const csrf = await http.get('/sanctum/csrf-cookie');
  //   console.log('csrf = ', csrf);
  // };

  const login = async () => {
    await axios
      .post(
        'http://localhost:8000/api/login',
        {
          email: username,
          password: password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        localStorage.setItem('isAuth', true);
        localStorage.setItem('token', response.data.data.access_token);
        localStorage.setItem('username', response.data.data.user.username);
        history('/');
      });
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useNavigate();
  useEffect(() => {
    document.body.classList.add('bg-dark');

    return () => {
      document.body.classList.remove('bg-dark');
    };
  });
  return (
    <div className="text-white">
      <section class="position-relative">
        <div id="particles-js"></div>
        <div class="container">
          <div class="row  text-center">
            <div class="col">
              <h1>Login</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center bg-transparent p-0 m-0">
                  <li class="breadcrumb-item">
                    <a class="text-dark" href="#">
                      Home
                    </a>
                  </li>
                  <li class="breadcrumb-item">Pages</li>
                  <li class="breadcrumb-item">Account</li>
                  <li class="breadcrumb-item active text-primary" aria-current="page">
                    Login
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
            <div class="row align-items-center">
              <div class="col-lg-7 col-12">
                <img class="img-fluid" src="assets/images/login.png" alt="" />
              </div>
              <div class="col-lg-5 col-12 mt-5 mt-lg-0">
                <div>
                  <h2 class="mb-3">Sign In</h2>
                  <div class="messages"></div>
                  <div class="form-group">
                    <input
                      id="form_name"
                      type="text"
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      name="username"
                      class="form-control"
                      placeholder="User name"
                      required="required"
                      data-error="Username is required."
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="form-group">
                    <input
                      id="form_password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      type="password"
                      name="password"
                      class="form-control"
                      placeholder="Password"
                      required="required"
                      data-error="password is required."
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="form-group mt-4 mb-5">
                    <div class="remember-checkbox d-flex align-items-center justify-content-between">
                      <div class="form-check mb-0">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label mb-0" for="flexCheckDefault">
                          Remember Me
                        </label>
                      </div>
                      <a href="#">Forgot Password?</a>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary btn-block" onClick={login}>
                    Login Now
                  </button>
                  <div class="d-flex align-items-center text-center justify-content-center mt-4">
                    <span class="text-muted me-1">Don't have an account?</span>
                    <a href="/signup">Sign Up</a>
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

export default Login;
