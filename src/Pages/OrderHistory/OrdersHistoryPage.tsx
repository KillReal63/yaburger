import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { profilePath, defaultPath, ordersPath } from '../../Shared/path';
import { useSelector } from 'react-redux';
import { deleteUser } from '../../Services/User/user';
import { logoutUser } from '../../Api/userApi';
import { deleteCookie } from '../../Helpers';
import { text_inactive, text_medium } from '../../Shared/Typography';
import OrderCard from '../../Components/OrderCard/OrderCard';
import { getCookie } from '../../Helpers/cookie';
import { RootState, useAppDispatch } from '../../Shared/Types/Store';
import {
  Data,
  connectHistory,
  disconnect,
} from '../../Services/Sockets/wsActions';
import styles from './OrdersHistoryPage.module.css';

const getMessage = (store: RootState) => store.ws.message;

export const OrdersHistoryPage = () => {
  const token = getCookie('accessToken');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const message = useSelector(getMessage);

  useEffect(() => {
    if (token) {
      const wsToken = token.replace('Bearer ', '');
      dispatch(connectHistory(wsToken));
    }
    return () => {
      console.log('Connection CLOSED');
      dispatch(disconnect());
    };
  }, [dispatch]);

  const logout = () => {
    dispatch(deleteUser());
    dispatch(logoutUser());
    deleteCookie();
    navigate(defaultPath);
  };

  if (!message) return <div>Loading...</div>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <p className={`${text_inactive} ${styles.nav}`}>
          <button
            className={styles.navButton}
            type='button'
            onClick={() => navigate(profilePath)}
          >
            Профиль
          </button>
        </p>
        <p className={`${text_medium} ${styles.nav}`}>
          <button
            className={`${styles.navButton} ${styles.link}`}
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
        {message.orders.map((item: Data, index: number) => {
          return (
            <Link
              className={`${styles.orders} mb-4`}
              to={`/profile/orders/${item._id}`}
              state={{ background: location }}
              key={index}
            >
              <OrderCard {...item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
