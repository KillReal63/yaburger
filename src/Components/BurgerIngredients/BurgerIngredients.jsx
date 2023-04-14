import React from 'react';
import Ingredients from '../Ingredients/Ingredients';
import Tabs from '../Tabs/Tabs';
import styles from './BurgerIngredients.module.css';
import PropTypes from 'prop-types';

const BurgerIngredients = ({ ingredients }) => {
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

BurgerIngredients.propTypes = {
  ingredients: PropTypes.object,
};

export default BurgerIngredients;
