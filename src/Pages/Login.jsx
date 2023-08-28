import React from 'react';
import {
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

export const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Вход</h1>
      <EmailInput
        //onChange={onChange}
        //value={value}
        extraClass='mt-6'
        name={'email'}
        isIcon={false}
      />
      <PasswordInput
        //onChange={onChange}
        //value={value}
        name={'password'}
        extraClass='mb-6 mt-6'
      />
      <Button htmlType='button' type='primary' size='large' extraClass='mb-20'>
        Войти
      </Button>
      <div className={`mb-4 ${styles.register}`}>
        <p className='text text_type_main-default text_color_inactive mr-2'>
          Вы - новый пользователь?
        </p>
        <Link to='/register'>Зарегестрироваться</Link>
      </div>
      <div className={styles.forgotPassword}>
        <p className='text text_type_main-default text_color_inactive'>
          Забыли пароль?
          <Link to='/forgot-password' className='ml-2'>
            Восстановить
          </Link>
        </p>
      </div>
    </div>
  );
};
