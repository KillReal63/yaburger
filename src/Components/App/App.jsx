import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import {
  ForgotPasswordPage,
  LoginPage,
  IngredientPage,
  RegisterPage,
  ResetPasswordPage,
  UserPage,
} from '../../Pages/index';
import { getCookie } from '../../Services/utils';
import { authUser } from '../../Services/Slices/user';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const token = getCookie('accessToken');

  const { _id } = useSelector((store) => store.currentIngredient.ingredient);

  useEffect(() => {
    if (!token === undefined) {
      dispatch(authUser(token));
    }
  }, [dispatch]);

  return (
    <>
      <Router>
        <AppHeader />
        <Routes>
          <Route
            path='/'
            element={
              <div className={styles.app}>
                <Main />
              </div>
            }
          />
          <Route path={`'/ingredients/'${_id}`} element={<IngredientPage />} />
          <Route
            path='/login'
            element={<ProtectedRouteElement element={<LoginPage />} />}
          />
          <Route
            path='/register'
            element={<ProtectedRouteElement element={<RegisterPage />} />}
          />
          <Route
            path='/forgot-password'
            element={<ProtectedRouteElement element={<ForgotPasswordPage />} />}
          />
          <Route
            path='/reset-password'
            element={<ProtectedRouteElement element={<ResetPasswordPage />} />}
          />
          <Route
            path='/profile'
            element={<ProtectedRouteElement element={<UserPage />} auth />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
