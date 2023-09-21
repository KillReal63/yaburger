import React from 'react';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';
import { path } from '../../Shared/Types/Pathname';
import { feedPath } from '../../Shared/path';
import styles from './OrderFeed.module.css';

const OrderFeed = ({ pathname }: path) => {
  return (
    <div className={`${styles.order_feed} pt-4 pr-5 pb-4 pl-5 ml-2`}>
      <NavLink
        to={feedPath}
        className={`${
          pathname === '/feed'
            ? `${styles.link} text text_type_main-default`
            : `${styles.disabled} text text_type_main-default text_color_inactive`
        }`}
      >
        <ListIcon type={`${pathname === '/feed' ? 'primary' : 'secondary'}`} />
        <span className='ml-2'>Лента заказов</span>
      </NavLink>
    </div>
  );
};

export default OrderFeed;
