import React, { useEffect, useState } from 'react';
import Ingredients from '../Ingredients/Ingredients';
import Tabs from '../Tabs/Tabs';
import { useInView } from 'react-intersection-observer';

import styles from './BurgerIngredients.module.css';

const BurgerIngredients = () => {
  const [activeTab, setActiveTab] = useState('buns');

  const [bunsRef, inViewBuns] = useInView({
    threshold: 0,
  });

  const [saucesRef, inViewSauces] = useInView({
    threshold: 0,
  });

  const [mainsRef, inViewFilling] = useInView({
    threshold: 0,
  });

  const refs = { bunsRef, saucesRef, mainsRef };


 

  useEffect(() => {
    if (inViewBuns) {
      setActiveTab('buns');
    } else if (inViewSauces) {
      setActiveTab('sauces');
    } else if (inViewFilling) {
      setActiveTab('mains');
    }
  }, [inViewBuns, inViewSauces, inViewFilling]);

  return (
    <div className={styles.burger_ingredients}>
      <div className='text text_type_main-large mt-10 mb-5'>
        Соберите бургер
      </div>
      <Tabs activeTab={activeTab} />
      <Ingredients refs={refs} />
    </div>
  );
};

export default BurgerIngredients;
