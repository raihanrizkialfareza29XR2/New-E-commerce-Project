import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  useEffect(() => {
    logout();
  }, []);

  const history = useNavigate();

  const logout = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAuth');
    localStorage.removeItem('username');
    history('/login');
  };
  return <div></div>;
};

export default LogOut;
