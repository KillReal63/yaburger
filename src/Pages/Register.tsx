import React, { useState, FormEvent } from 'react';
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../Api/userApi';
import { useDispatch } from 'react-redux';
import styles from './Register.module.css';

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUser({ email, password, name }));
    navigate('/login');
  };

  return (
    <div className={styles.wrapper}>
      <h1>Регистрация</h1>
      <form className={styles.form} onSubmit={onSubmit}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={(e) => setName(e.target.value)}
          value={name}
          size={'default'}
          extraClass='ml-1'
        />
        <EmailInput
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          extraClass='mt-6'
          name={'email'}
          isIcon={false}
        />
        <PasswordInput
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name={'password'}
          extraClass='mb-6 mt-6'
        />
        <Button
          htmlType='submit'
          type='primary'
          size='large'
          extraClass='mb-20'
        >
          Зарегестрироваться
        </Button>
      </form>
      <div className={`mb-4 ${styles.login}`}>
        <p className='text text_type_main-default text_color_inactive mr-2'>
          Уже зарегестрированы?
        </p>
        <Link to='/login'>Войти</Link>
      </div>
    </div>
  );
};
