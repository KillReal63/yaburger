import React from 'react';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Сollector.module.css';

const Collector = () => {
  return (
    <div className={`${styles.collector} pt-4 pr-5 pb-4 pl-5`}>
      <BurgerIcon type='primary' />
      <span className='text text_type_main-default ml-2'>Конструктор</span>
    </div>
  );
};

export default Collector;
