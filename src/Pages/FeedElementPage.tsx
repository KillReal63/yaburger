import React from 'react';
import OrderElement from '../Components/OrderElement/OrderElement';
import styles from './FeedElementPage.module.css'

export const FeedElementPage = () => {
  return <div className={styles.wrapper}>
    <OrderElement />
  </div>;
};
