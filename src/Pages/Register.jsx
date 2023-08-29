import React from 'react';
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './Register.module.css';

export const RegisterPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Регистрация</h1>
      <Input
        type={'text'}
        placeholder={'Имя'}
        //onChange={e => setValue(e.target.value)}
        //value={value}
        //ref={inputRef}
        size={'default'}
        extraClass='ml-1'
      />
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
      <Button htmlType='submit' type='primary' size='large' extraClass='mb-20'>
        Зарегестрироваться
      </Button>
      <div className={`mb-4 ${styles.login}`}>
        <p className='text text_type_main-default text_color_inactive mr-2'>
          Уже зарегестрированы?
        </p>
        <Link to='/login'>Войти</Link>
      </div>
    </div>
  );
};
