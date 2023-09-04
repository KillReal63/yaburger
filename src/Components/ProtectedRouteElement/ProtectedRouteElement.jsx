import React from 'react';
import { Navigate } from 'react-router-dom';
import { getCookie } from '../../Services/utils';

const ProtectedRouteElement = ({ auth, element }) => {
  
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
