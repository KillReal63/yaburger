import React from 'react';
import {
  EmailInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './ForgotPassword.module.css';

export const ForgotPasswordPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Восстановление пароля</h1>
      <EmailInput
        //onChange={onChange}
        //value={value}
        extraClass='m-6'
        name={'email'}
        isIcon={false}
      />
      <Button htmlType='button' type='primary' size='large' extraClass='mb-20'>
        Восстановить
      </Button>
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
