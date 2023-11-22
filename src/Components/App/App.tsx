import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '../Router/Router';
import AppHeader from '../AppHeader/AppHeader';
import { authUser } from '../../Api/userApi';
import { fetchIngredients } from '../../Api/ingredientsApi';
import { Token } from '../../Shared/Types/Token';
import { urlPath } from '../../Shared/path';
import { useAppDispatch } from '../../Shared/Types/Store';
import { accessToken } from '../../Helpers/tokens';

const url = `${urlPath}/ingredients`;

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!accessToken) {
      dispatch(authUser(accessToken as Token));
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
