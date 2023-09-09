import React, { useState } from 'react';
import {
  EmailInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { forgotPassword } from '../Services/auth';
import styles from './ForgotPassword.module.css';

export const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState('');

  const nextPage = (e) => {
    e.preventDefault();
    if (value !== '') {
      forgotPassword(value);
      navigate('/reset-password?reset=true');
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>Восстановление пароля</h1>
      <form className={styles.form} onSubmit={nextPage}>
        <EmailInput
          onChange={(e) => setValue(e.target.value)}
          value={value}
          extraClass='m-6'
          name={'email'}
          isIcon={false}
        />
        <Button
          htmlType='submit'
          type='primary'
          size='large'
          extraClass='mb-20'
        >
          Восстановить
        </Button>
      </form>
      <div className={styles.login}>
        <p className='text text_type_main-default text_color_inactive'>
          Вспомнили пароль?
          <Link to='/login' className='ml-2'>
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};
