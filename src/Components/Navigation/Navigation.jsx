import React from 'react';
import CollectorBurger from '../Constructor/CollectorBurger';
import OrderFeed from '../OrderFeed/OrderFeed';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <CollectorBurger />
      <OrderFeed />
    </nav>
  );
};

export default Navigation;
