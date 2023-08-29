import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import { fetchIngredients } from '../../Services/Slices/ingredients';
import {
  ForgotPasswordPage,
  LoginPage,
  IngredientPage,
  RegisterPage,
  ResetPasswordPage,
  UserPage,
} from '../../Pages/index';
import styles from './App.module.css';

const url = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients(url));
  }, []);

  return (
    <>
      <AppHeader />
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <div className={styles.app}>
                <Main />
              </div>
            }
          />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
          <Route path='/reset-password' element={<ResetPasswordPage />} />
          <Route path='/profile' element={<UserPage />}>
            {/* {!loggedIn ? <Navigate to='/log-in' /> : <UserProfile />} */}
          </Route>
          <Route path='/ingredients/:id' element={<IngredientPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
