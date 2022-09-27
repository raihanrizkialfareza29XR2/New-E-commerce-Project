import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  useEffect(() => {
    logout();
  }, []);

  const history = useNavigate();

  const token = localStorage.getItem('token');
  const logout = async () => {
    axios.post('http://localhost:8000/api/logout', {}, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
    localStorage.removeItem('token');
    localStorage.removeItem('isAuth');
    localStorage.removeItem('username');
    history('/login');
  };
  return <div></div>;
};

export default LogOut;
