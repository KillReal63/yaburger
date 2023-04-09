import React from 'react';
import Сollector from '../Constructor/Сollector';
import OrderFeed from '../OrderFeed/OrderFeed';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Сollector />
      <OrderFeed />
    </nav>
  );
};

export default Navigation;
