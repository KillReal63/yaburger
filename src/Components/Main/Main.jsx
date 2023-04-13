import React from 'react';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import styles from './Main.module.css';

const Main = (ingredients) => {
  return (
    <main className={styles.main}>
      <BurgerIngredients {...ingredients} />
      <BurgerConstructor ingredients={ingredients} />
    </main>
  );
};

export default Main;
