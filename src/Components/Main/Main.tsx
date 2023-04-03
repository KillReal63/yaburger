import React from 'react';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
  );
};

export default Main;
