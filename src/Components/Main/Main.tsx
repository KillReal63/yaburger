import React from 'react';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import styles from './Main.module.css';
import { type IngredientsProps } from '../Ingredients/Ingredients';

const Main = ({ ingredients }: IngredientsProps) => {
  return (
    <main className={styles.main}>
      <BurgerIngredients ingredients={ingredients} />
      <BurgerConstructor ingredients={ingredients} />
    </main>
  );
};

export default Main;
