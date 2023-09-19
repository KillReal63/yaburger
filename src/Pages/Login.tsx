import React, { useEffect, useState, FormEvent } from 'react';
import {
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Api/userApi';
import { Store } from '../Shared/Types/Store';
import styles from './Login.module.css';

const getIsAuth = (store: Store) => store.user.isAuth;

// export type LoginData = {
//   email: string;
//   password: string;
// };

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector(getIsAuth);

  useEffect(() => {
    if (isAuth === true) {
      navigate('/');
    }
  }, [isAuth]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //@ts-ignore
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
          Войти
        </Button>
      </form>
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
