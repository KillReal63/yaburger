import React from 'react';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <BurgerIngredients />
      <BurgerConstructor />
    </main>
  );
};

export default Main;
