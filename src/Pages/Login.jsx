import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

export const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <h1 className={styles.heading}>Вход</h1>
      </form>
      <Link to='/register'>Зарегестрироваться</Link>
      <Link to='/forgot-password'>Забыл пароль</Link>
    </div>
  );
};
