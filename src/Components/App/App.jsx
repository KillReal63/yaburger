import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Router from '../Router/Router';
import AppHeader from '../AppHeader/AppHeader';
import { getCookie } from '../../Helpers';
import { authUser } from '../../Api/userApi';
import { fetchIngredients } from '../../Api/ingredientsApi';

const url = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
  const dispatch = useDispatch();
  const token = getCookie('accessToken');

  useEffect(() => {
    if (!token === undefined) {
      dispatch(authUser(token));
    }
    dispatch(fetchIngredients(url));
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <AppHeader />
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
