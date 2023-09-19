import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Router from '../Router/Router';
import AppHeader from '../AppHeader/AppHeader';
import { getCookie } from '../../Helpers';
import { authUser } from '../../Api/userApi';
import { fetchIngredients } from '../../Api/ingredientsApi';
import { Token } from '../../Shared/Types/Token';
import { urlPath } from '../../Shared/path';

const url = `${urlPath}/ingredients`;

function App() {
  const dispatch: any = useDispatch();
  const token = getCookie('accessToken');

  useEffect(() => {
    if (!token === undefined) {
      dispatch(authUser(token as Token));
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
