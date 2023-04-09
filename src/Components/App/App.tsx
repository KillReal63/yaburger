import React, { useEffect, useState } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import styles from './App.module.css';

function App() {
  const [ingredient, setIngredient] = useState([]);

  useEffect(() => {
    const url = 'https://norma.nomoreparties.space/api/ingredients';
    const getIngredient = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Нет ответа сети');
        }
        const result = await response.json();
        const { success, data } = result;
        setIngredient(data);
      } catch (error) {
        console.error();
      }
    };
    getIngredient();
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Main ingredient={ingredient} />
    </div>
  );
}

export default App;
