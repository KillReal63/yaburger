import React, { useState, FormEvent } from 'react';
import {
  PasswordInput,
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { resetPassword } from '../../Api/passwordApi';
import { loginPath, defaultPath, forgotPasswordPath } from '../../Shared/path';
import { text_inactive } from '../../Shared/Typography';
import styles from './ResetPassword.module.css';

export const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();

  const reset = searchParams.get('reset');

  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetPassword({ password, code });
    navigate(loginPath);
  };

  if (!reset) return <Navigate to={defaultPath} />;

  return (
    <div className={styles.wrapper}>
      <h1>Восстановление пароля</h1>
      <form className={styles.form} onSubmit={onSubmit}>
        <PasswordInput
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder={'Введите новый пароль'}
          name={'password'}
          extraClass='mb-6 mt-6'
        />
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          onChange={(e) => setCode(e.target.value)}
          value={code}
          size={'default'}
          extraClass='ml-1 mb-6'
        />
        <Button
          htmlType='submit'
          type='primary'
          size='large'
          extraClass='mb-20'
        >
          Сохранить
        </Button>
      </form>
      <div className={styles.login}>
        <p className={text_inactive}>
          Вспомнили пароль?
          <Link to={forgotPasswordPath} className='ml-2'>
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};
