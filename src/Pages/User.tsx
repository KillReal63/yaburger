import React, { useEffect, useState, FormEvent } from 'react';
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../Services/Slices/user';
import { logoutUser, updateUser } from '../Api/userApi';
import { useNavigate } from 'react-router-dom';
import { defaultPath } from '../Shared/path';
import { deleteCookie, getCookie } from '../Helpers';
import styles from './User.module.css';

export const UserPage = () => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const user = JSON.parse(getCookie('user') as string);
    if (user !== undefined) {
      setName(user.name);
      setEmail(user.email);
    }
  }, []);

  const logout = () => {
    dispatch(deleteUser());
    dispatch(logoutUser());
    deleteCookie();
    navigate(defaultPath);
  };

  const cancel = () => {
    setIsDirty(false);
    const user = JSON.parse(getCookie('user') as string);
    if (user !== undefined) {
      setName(user.name);
      setEmail(user.email);
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateUser({ email: email, name: name }));
    setIsDirty(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <p className={`text text_type_main-medium ${styles.nav}`}>Профиль</p>
        <p
          className={`text text_type_main-medium text_color_inactive ${styles.nav}`}
        >
          История заказов
        </p>
        <p
          className={`text text_type_main-medium text_color_inactive ${styles.nav}`}
        >
          <button
            className={styles.navButton}
            type='button'
            onClick={() => logout()}
          >
            Выход
          </button>
        </p>
        <p
          className={`text text_type_main-default text_color_inactive mt-20 ${styles.about}`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div className={`ml-25 ${styles.inputs}`}>
        <form onSubmit={onSubmit}>
          <Input
            onChange={(e) => {
              setName(e.target.value);
              setIsDirty(true);
            }}
            value={name}
            type={'text'}
            placeholder={'Имя'}
            extraClass='ml-1'
            icon='EditIcon'
            name={'name'}
          />
          <EmailInput
            extraClass='mt-6'
            onChange={(e) => {
              setEmail(e.target.value);
              setIsDirty(true);
            }}
            name={'email'}
            isIcon={true}
            value={email}
          />
          <PasswordInput
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setIsDirty(true);
            }}
            name={'password'}
            extraClass='mb-6 mt-6'
            icon='EditIcon'
          />
          {isDirty && (
            <div className={styles.buttons}>
              <Button
                htmlType='button'
                type='primary'
                size='large'
                onClick={() => cancel()}
              >
                Отмена
              </Button>
              <Button htmlType='submit' type='primary' size='large'>
                Сохранить
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
