import React from 'react';
import CollectorBurger from '../Constructor/CollectorBurger';
import OrderFeed from '../OrderFeed/OrderFeed';
import { path } from '../../Shared/Types/Pathname';
import styles from './Navigation.module.css';

const Navigation = ({ pathname }: path) => {
  return (
    <nav className={styles.navigation}>
      <CollectorBurger pathname={pathname} />
      <OrderFeed pathname={pathname} />
    </nav>
  );
};

export default Navigation;
