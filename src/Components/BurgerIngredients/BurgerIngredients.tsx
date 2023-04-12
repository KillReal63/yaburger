import React from 'react';
import Ingredients, { type IngredientsProps } from '../Ingredients/Ingredients';
import Tabs from '../Tabs/Tabs';
import styles from './BurgerIngredients.module.css';

type BurgerIngredients = IngredientsProps & {};

const BurgerIngredients = ({ ingredients }: BurgerIngredients) => {
  return (
    <div className={styles.burger_ingredients}>
      <div className='text text_type_main-large mt-10 mb-5'>
        Соберите бургер
      </div>
      <Tabs />
      <Ingredients ingredients={ingredients} />
    </div>
  );
};

export default BurgerIngredients;
