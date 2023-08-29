import React from 'react';
import {
  Input,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './User.module.css';

export const UserPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <p className={`text text_type_main-medium ${styles.nav}`}>Профиль</p>
        <p className={`text text_type_main-medium ${styles.nav}`}>История заказов</p>
        <p className={`text text_type_main-medium ${styles.nav}`}>Выход</p>
        <p className={`text text_type_main-default text_color_inactive mt-20 ${styles.about}`}>В этом разделе вы можете изменить свои персональные данные</p>
      </div>
      <div className={`ml-25 ${styles.inputs}`}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          //onChange={e => setValue(e.target.value)}
          //value={value}
          //ref={inputRef}
          size={'default'}
          extraClass='ml-1'
          icon="EditIcon"
        />
        <EmailInput
          //onChange={onChange}
          //value={value}
          extraClass='mt-6'
          name={'email'}
          isIcon={true}
        />
        <PasswordInput
          //onChange={onChange}
          //value={value}
          name={'password'}
          extraClass='mb-6 mt-6'
          icon="EditIcon"
        />
      </div>
    </div>
  );
};
