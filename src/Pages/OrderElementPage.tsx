import React from 'react';
import OrderElement from '../Components/OrderElement/OrderElement';
import styles from './OrderElementPage.module.css';

export const OrderElementPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.element}>
        <OrderElement />
      </div>
    </div>
  );
};