// PrivateRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ path, element: Element }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return userInfo ? <Route path={path} element={<Element />} /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
