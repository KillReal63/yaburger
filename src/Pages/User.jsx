import React, { useEffect, useState } from 'react';
import {
  Input,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import styles from './User.module.css';
import { deleteUser, logoutUser } from '../Services/Slices/user';
import { useNavigate } from 'react-router-dom';

export const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((store) => store.user);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logout = () => {
    dispatch(deleteUser());
    dispatch(logoutUser());
    navigate('/')
  };

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setPassword(user.password);
  }, [user]);

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
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type={'text'}
          placeholder={'Имя'}
          size={'default'}
          extraClass='ml-1'
          icon='EditIcon'
          name={'name'}
        />
        <EmailInput
          extraClass='mt-6'
          onChange={(e) => setEmail(e.target.value)}
          name={'email'}
          isIcon={true}
          value={email}
        />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name={'password'}
          extraClass='mb-6 mt-6'
          icon='EditIcon'
        />
      </div>
    </div>
  );
};
