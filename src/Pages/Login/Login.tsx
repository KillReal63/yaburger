import React, { useEffect, useState, FormEvent } from 'react';
import {
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { loginUser } from '../../Api/userApi';
import { RootState, useAppDispatch } from '../../Shared/Types/Store';
import {
  registerPath,
  forgotPasswordPath,
  defaultPath,
} from '../../Shared/path';
import { text_inactive } from '../../Shared/Typography';
import styles from './Login.module.css';

const getIsAuth = (store: RootState) => store.user.isAuth;

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector(getIsAuth);

  useEffect(() => {
    if (isAuth === true) {
      navigate(defaultPath);
    }
  }, [isAuth]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className={styles.wrapper}>
      <h1>Вход</h1>
      <form className={styles.form} onSubmit={onSubmit}>
        <EmailInput
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          extraClass='mt-6'
          name={'email'}
          isIcon={false}
          data-id='email_input'
        />
        <PasswordInput
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name={'password'}
          extraClass='mb-6 mt-6'
          data-id='password_input'
        />
        <Button
          htmlType='submit'
          type='primary'
          size='large'
          extraClass='mb-20'
          data-id='login-button'
        >
          Войти
        </Button>
      </form>
      <div className={`mb-4 ${styles.register}`}>
        <p className={`${text_inactive} mr-2`}>Вы - новый пользователь?</p>
        <Link to={registerPath}>Зарегестрироваться</Link>
      </div>
      <div className={styles.forgotPassword}>
        <p className={text_inactive}>
          Забыли пароль?
          <Link to={forgotPasswordPath} className='ml-2'>
            Восстановить
          </Link>
        </p>
      </div>
    </div>
  );
};
