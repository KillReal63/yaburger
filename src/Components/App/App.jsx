import React, { useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import styles from './App.module.css';
import { fetchIngredients } from '../../Services/Slices/ingredients';
import { useDispatch } from 'react-redux';

const url = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients(url));
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Main />
    </div>
  );
}

export default App;
