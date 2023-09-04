import React from 'react';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './CollectorBurger.module.css';
import { NavLink } from 'react-router-dom';

const CollectorBurger = ({ pathname }) => {
  return (
    <div className={`${styles.collector} pt-4 pr-5 pb-4 pl-5`}>
      <NavLink
        to='/'
        className={`${
          pathname === '/'
            ? `${styles.link} text text_type_main-default`
            : `${styles.disabled} text text_type_main-default text_color_inactive`
        }`}
      >
        <BurgerIcon type={`${pathname === '/' ? '' : 'secondary'}`} />
        <span className='ml-2'>Конструктор</span>
      </NavLink>
    </div>
  );
};

export default CollectorBurger;
