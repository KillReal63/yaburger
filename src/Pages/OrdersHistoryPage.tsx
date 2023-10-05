import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { profilePath, defaultPath, ordersPath } from '../Shared/path';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../Services/Slices/user';
import { logoutUser } from '../Api/userApi';
import { deleteCookie } from '../Helpers';
import { text_inactive, text_medium } from '../Shared/Typography';
import OrderCard from '../Components/OrderCard/OrderCard';
import { useSocket } from '../Services/Hooks/useSocket';
import { getCookie } from '../Helpers/cookie';
import { Store } from '../Shared/Types/Store';
import styles from './OrdersHistoryPage.module.css';

const ws = 'wss://norma.nomoreparties.space/orders';
const getData = (store: Store) => store.history.data;

export const OrdersHistoryPage = () => {
  const token = getCookie('accessToken');

  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const history = useSelector(getData);

  const logout = () => {
    dispatch(deleteUser());
    dispatch(logoutUser());
    deleteCookie();
    navigate(defaultPath);
  };

  const { getHistory } = useSocket(ws);

  useEffect(() => {
    getHistory(token as string);
  }, []);

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
        {history ? (
          history.map((item: any, index: any) => {
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
          })
        ) : (
          <div>Refresh page</div>
        )}
      </div>
    </div>
  );
};
