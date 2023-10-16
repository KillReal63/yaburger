import React from 'react';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';
import { path } from '../../Shared/Types/Pathname';
import { profilePath } from '../../Shared/path';
import { text_default, text_inactive } from '../../Shared/Typography';
import styles from './Account.module.css';

const Account = ({ pathname }: path) => {
  return (
    <div className={`${styles.account} pt-4 pr-5 pb-4 pl-5`} data-id='user-profile'>
      <NavLink
        to={profilePath}
        className={`${
          pathname === '/profile'
            ? `${styles.link} ${text_default}`
            : `${styles.disabled} ${text_inactive}`
        }`}
      >
        <ProfileIcon
          type={`${pathname === '/profile' ? 'primary' : 'secondary'}`}
        />
        <span className='ml-2'>Личный кабинет</span>
      </NavLink>
    </div>
  );
};

export default Account;
