import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import Navigation from '../Navigation/Navigation';
import Account from '../Account/Account';
import styles from './AppHeader.module.css'

const AppHeader = () => {
  return (
    <div className={styles.app_header}>
      <div className={styles.content}>
        <Navigation />
        <Logo />
        <Account />
      </div>
    </div>
  );
};

export default AppHeader;
