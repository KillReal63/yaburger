import React from 'react';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';
import styles from './Account.module.css';

const Account = ({ pathname }) => {
  return (
    <div className={`${styles.account} pt-4 pr-5 pb-4 pl-5`}>
      <NavLink
        to='/profile'
        className={`${
          pathname === '/profile'
            ? `${styles.link} text text_type_main-default`
            : `${styles.disabled} text text_type_main-default text_color_inactive`
        }`}
      >
        <ProfileIcon type={`${pathname === '/profile' ? '' : 'secondary'}`} />
        <span className='ml-2'>Личный кабинет</span>
      </NavLink>
    </div>
  );
};

export default Account;
