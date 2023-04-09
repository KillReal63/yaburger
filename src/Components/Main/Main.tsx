import React from 'react';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import styles from './Main.module.css';
import { type IngredientsProps } from '../Ingredients/Ingredients';

const Main = ({ ingredient }: IngredientsProps) => {
  return (
    <main className={styles.main}>
      <BurgerIngredients ingredient={ingredient} />
      <BurgerConstructor ingredient={ingredient} />
    </main>
  );
};

export default Main;
