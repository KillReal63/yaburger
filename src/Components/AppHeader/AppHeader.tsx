import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Account from '../Account/Account';
import styles from './AppHeader.module.css';

const AppHeader = () => {
  const location = useLocation();
  const { pathname } = location;

  const [activeNavLink, setActiveNavLink] = useState(pathname);

  useEffect(() => {
    setActiveNavLink(pathname);
  }, [pathname]);

  return (
    <header className={styles.app_header}>
      <div className={styles.content}>
        <Navigation pathname={activeNavLink} />
        <Logo />
        <Account pathname={activeNavLink} />
      </div>
    </header>
  );
};

export default AppHeader;
