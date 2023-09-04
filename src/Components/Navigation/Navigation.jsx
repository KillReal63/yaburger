import React from 'react';
import CollectorBurger from '../Constructor/CollectorBurger';
import OrderFeed from '../OrderFeed/OrderFeed';
import styles from './Navigation.module.css';

const Navigation = ({pathname}) => {
  return (
    <nav className={styles.navigation}>
      <CollectorBurger pathname={pathname} />
      <OrderFeed />
    </nav>
  );
};

export default Navigation;
