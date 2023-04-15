import React from 'react';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './OrderFeed.module.css';

const OrderFeed = () => {
  return (
    <div className={`${styles.order_feed} pt-4 pr-5 pb-4 pl-5 ml-2`}>
      <ListIcon type='secondary' />
      <span className='text text_type_main-default text_color_inactive ml-2'>
        Лента заказов
      </span>
    </div>
  );
};

export default OrderFeed;
