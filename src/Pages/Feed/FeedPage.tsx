import React, { useEffect } from 'react';
import chunk from 'lodash.chunk';
import OrderCard from '../../Components/OrderCard/OrderCard';
import {
  text_medium,
  digits_default,
  digits_large,
} from '../../Shared/Typography';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../Shared/Types/Store';
import { Data, connectAll, disconnect } from '../../Services/Sockets/wsActions';
import styles from './FeedPage.module.css';

const getMessage = (store: RootState) => store.ws.message;

export const FeedPage = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const message = useSelector(getMessage);

  useEffect(() => {
    dispatch(connectAll());
    return () => {
      console.log('Connection CLOSED');
      dispatch(disconnect());
    };
  }, [dispatch]);

  if (!message) return <div>...Loading</div>;

  const ordersChunks = chunk(message.orders, 10);
  return (
    <div className={styles.page}>
      <div className={`${styles.feed} ${styles.custom_scroll}`}>
        {message.orders.map((item: Data, index: number) => {
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
          <div>
            <p className={`${text_medium} mb-6`}>Готовы:</p>
            {ordersChunks.slice(4).map((order, index) => (
              <div className={styles.orders} key={index}>
                {order
                  .filter((item: Data) => item.status === 'done')
                  .map((item: Data, index: number) => (
                    <p
                      className={`${styles.number} ${digits_default} mb-2`}
                      key={index}
                    >
                      {item.number}
                    </p>
                  ))}
              </div>
            ))}
          </div>
          <div>
            <p className={`${text_medium} mb-6`}>В работе:</p>
            <div className={styles.orders}>
              {message.orders
                .filter((item: Data) => item.status === 'preparing')
                .map((item: Data, index: number) => (
                  <p
                    className={`${styles.number} ${digits_default} mb-2`}
                    key={index}
                  >
                    {item.number}
                  </p>
                ))}
            </div>
          </div>
        </div>
        <div className='mt-15 mb-15'>
          <p className={`${text_medium}`}>Выполнено за все время:</p>
          <p className={digits_large}>{message.total}</p>
        </div>
        <div>
          <p className={text_medium}>Выполнено за сегодня:</p>
          <p className={digits_large}>{message.totalToday}</p>
        </div>
      </div>
    </div>
  );
};
