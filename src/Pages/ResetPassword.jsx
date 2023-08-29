import React from 'react';
import { PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './ResetPassword.module.css';

export const ResetPasswordPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Восстановление пароля</h1>
      <PasswordInput
        //onChange={onChange}
        //value={value}
        placeholder={'Введите новый пароль'}
        name={'password'}
        extraClass='mb-6 mt-6'
      />
      <Input
        type={'text'}
        placeholder={'Введите код из письма'}
        //onChange={e => setValue(e.target.value)}
        //value={value}
        //ref={inputRef}
        size={'default'}
        extraClass='ml-1 mb-6'
      />
      <Button htmlType='button' type='primary' size='large' extraClass='mb-20'>
        Сохранить
      </Button>
      <div className={styles.login}>
        <p className='text text_type_main-default text_color_inactive'>
          Вспомнили пароль?
          <Link to='/forgot-password' className='ml-2'>
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};
