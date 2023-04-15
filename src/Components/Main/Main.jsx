import React from 'react';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import PropTypes from 'prop-types';

import styles from './Main.module.css';

const Main = ({ ingredients }) => {
  return (
    <main className={styles.main}>
      <BurgerIngredients ingredients={ingredients} />
      <BurgerConstructor ingredients={ingredients} />
    </main>
  );
};

Main.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default Main;
