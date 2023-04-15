import React from 'react';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Account.module.css';

const Account = () => {
  return (
    <div className={`${styles.account} pt-4 pr-5 pb-4 pl-5`}>
      <ProfileIcon type='secondary' />
      <span className='text text_type_main-default text_color_inactive ml-2'>
        Личный кабинет
      </span>
    </div>
  );
};

export default Account;
