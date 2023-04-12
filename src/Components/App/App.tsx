import React, { useEffect, useState } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import styles from './App.module.css';

function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const url = 'https://norma.nomoreparties.space/api/ingredients';
    const getIngredients = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Нет ответа сети');
        }
        const result = await response.json();
        const { success, data } = result;
        setIngredients(data);
      } catch (error) {
        console.error();
      }
    };
    getIngredients();
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Main ingredients={ingredients} />
    </div>
  );
}

export default App;
