import React from 'react';
import { useNavigate } from 'react-router-dom';
import { profilePath, defaultPath, ordersPath } from '../Shared/path';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../Services/Slices/user';
import { logoutUser } from '../Api/userApi';
import { deleteCookie } from '../Helpers';
import { text_inactive, text_medium } from '../Shared/Typography';
import OrderCard from '../Components/OrderCard/OrderCard';
import styles from './OrdersHistoryPage.module.css';

export const OrdersHistoryPage = () => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(deleteUser());
    dispatch(logoutUser());
    deleteCookie();
    navigate(defaultPath);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <p className={`${text_medium} ${styles.nav}`}>
          <button
            className={styles.navButton}
            type='button'
            onClick={() => navigate(profilePath)}
          >
            Профиль
          </button>
        </p>
        <p className={`${text_inactive} ${styles.nav}`}>
          <button
            className={styles.navButton}
            type='button'
            onClick={() => navigate(ordersPath)}
          >
            История заказов
          </button>
        </p>
        <p className={`${text_inactive} ${styles.nav}`}>
          <button
            className={styles.navButton}
            type='button'
            onClick={() => logout()}
          >
            Выход
          </button>
        </p>
        <p className={`${text_inactive} mt-20 ${styles.about}`}>
          В этом разделе вы можете просмотреть свою историю заказов
        </p>
      </div>
      <div className={`${styles.orders_history} ${styles.custom_scroll} ml-25`}>
        <div className={`${styles.orders} mb-4`}>
          <OrderCard />
        </div>
        <div className={`${styles.orders} mb-4`}>
          <OrderCard />
        </div>
        <div className={`${styles.orders} mb-4`}>
          <OrderCard />
        </div>
        <div className={`${styles.orders} mb-4`}>
          <OrderCard />
        </div>
        <div className={`${styles.orders} mb-4`}>
          <OrderCard />
        </div>
        <div className={`${styles.orders} mb-4`}>
          <OrderCard />
        </div>
      </div>
    </div>
  );
};
