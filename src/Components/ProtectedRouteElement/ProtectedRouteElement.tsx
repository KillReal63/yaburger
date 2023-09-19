import React from 'react';
import { Navigate } from 'react-router-dom';
import { getCookie } from '../../Helpers';

interface elem {
  auth?: boolean;
  element: any;
  reset?: boolean;
}

const ProtectedRouteElement = ({ auth, element }: elem) => {
  const isAuth = getCookie('isAuth');
  if (auth && !isAuth) {
    return <Navigate to='/login' />;
  }

  if (!auth && isAuth) {
    return <Navigate to='/' />;
  }

  return element;
};

export default ProtectedRouteElement;
