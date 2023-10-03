//@ts-nocheck

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
import { useSocket } from '../../Services/Hooks/useSocket';

const url = `${urlPath}/ingredients`;
const ws = 'wss://norma.nomoreparties.space/orders/all';

function App() {
  const dispatch: any = useDispatch();
  const token = getCookie('accessToken');

  useEffect(() => {
    if (!token === undefined) {
      dispatch(authUser(token as Token));
    }
    dispatch(fetchIngredients(url));
  }, [dispatch]);

  const { getFeed } = useSocket(ws);

  useEffect(() => {
    getFeed();
  }, []);

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
