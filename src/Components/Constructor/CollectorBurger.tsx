import React from 'react';
import { NavLink } from 'react-router-dom';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { path } from '../../Shared/Types/Pathname';
import { defaultPath } from '../../Shared/path';
import { text_default, text_inactive } from '../../Shared/Typography';
import styles from './CollectorBurger.module.css';

const CollectorBurger = ({ pathname }: path) => {
  return (
    <div className={`${styles.collector} pt-4 pr-5 pb-4 pl-5`}>
      <NavLink
        to={defaultPath}
        className={`${
          pathname === '/'
            ? `${styles.link} ${text_default}`
            : `${styles.disabled} ${text_inactive}`
        }`}
      >
        <BurgerIcon type={`${pathname === '/' ? 'primary' : 'secondary'}`} />
        <span className='ml-2'>Конструктор</span>
      </NavLink>
    </div>
  );
};

export default CollectorBurger;
