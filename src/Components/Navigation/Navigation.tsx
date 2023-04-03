import React from 'react';
import Сollector from '../Constructor/Сollector';
import OrderFeed from '../OrderFeed/OrderFeed';
import styles from './Navigation.module.css';


const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Сollector />
      <OrderFeed />
    </div>
  );
};

export default Navigation;
