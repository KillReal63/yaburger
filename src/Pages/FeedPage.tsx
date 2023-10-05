import React, { useEffect } from 'react';
import OrderCard from '../Components/OrderCard/OrderCard';
import {
  text_medium,
  digits_default,
  digits_large,
} from '../Shared/Typography';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Store } from '../Shared/Types/Store';
import styles from './FeedPage.module.css';

const getOrder = (store: Store) => store.feed.orders;
const getTotal = (store: Store) => store.feed.total;
const getTotalToday = (store: Store) => store.feed.totalToday;

export const FeedPage = () => {
  const orders = useSelector(getOrder);
  const total = useSelector(getTotal);
  const totalToday = useSelector(getTotalToday);
  const location = useLocation();

  if (orders.length === 0) return <div>...Loading</div>;

  return (
    <div className={styles.page}>
      <div className={`${styles.feed} ${styles.custom_scroll}`}>
        {orders.map((item: any, index: any) => {
          return (
            <Link
              className={`${styles.wrapper} mb-4`}
              to={`/feed/${item._id}`}
              state={{ background: location }}
              key={index}
            >
              <OrderCard {...item} />
            </Link>
          );
        })}
      </div>
      <div className={`${styles.workspace}`}>
        <div className={styles.monitor}>
          <div className={styles.orders}>
            <p className={`${text_medium} mb-6`}>Готовы:</p>
            {orders
              .filter((item: any) => item.status === 'done')
              .map((item: any, index: number) => (
                <p
                  className={`${styles.number} ${digits_default} mb-2`}
                  key={index}
                >
                  {item.number}
                </p>
              ))}
          </div>
          <div className={styles.orders}>
            <p className={`${text_medium} mb-6`}>В работе:</p>
            {orders
              .filter((item: any) => item.status === 'preparing')
              .map((item: any, index: number) => (
                <p
                  className={`${styles.number} ${digits_default} mb-2`}
                  key={index}
                >
                  {item.number}
                </p>
              ))}
          </div>
        </div>
        <div className='mt-15 mb-15'>
          <p className={`${text_medium}`}>Выполнено за все время:</p>
          <p className={digits_large}>{total}</p>
        </div>
        <div>
          <p className={text_medium}>Выполнено за сегодня:</p>
          <p className={digits_large}>{totalToday}</p>
        </div>
      </div>
    </div>
  );
};
