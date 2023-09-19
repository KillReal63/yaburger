import React from 'react';
import { Navigate } from 'react-router-dom';
import { getCookie } from '../../Helpers';
import { loginPath, defaultPath } from '../../Shared/path';
interface elem {
  auth?: boolean;
  element: any;
  reset?: boolean;
}

const ProtectedRouteElement = ({ auth, element }: elem) => {
  const isAuth = getCookie('isAuth');
  if (auth && !isAuth) {
    return <Navigate to={loginPath} />;
  }

  if (!auth && isAuth) {
    return <Navigate to={defaultPath} />;
  }

  return element;
};

export default ProtectedRouteElement;
