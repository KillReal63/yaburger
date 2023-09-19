import React, { useState, FormEvent } from 'react';
import {
  EmailInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { forgotPassword } from '../Api/passwordApi';
import { User } from '../Shared/Types/User';
import styles from './ForgotPassword.module.css';

export const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const nextPage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email !== '') {
      forgotPassword({ email });
      navigate('/reset-password?reset=true');
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>Восстановление пароля</h1>
      <form className={styles.form} onSubmit={nextPage}>
        <EmailInput
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
