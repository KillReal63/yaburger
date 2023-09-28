import React from 'react';
import OrderCard from '../Components/OrderCard/OrderCard';
import {
  text_medium,
  digits_default,
  digits_large,
} from '../Shared/Typography';
import styles from './FeedPage.module.css';

export const FeedPage = () => {
  return (
    <div className={styles.page}>
      <div className={`${styles.feed} ${styles.custom_scroll}`}>
        <div className={`${styles.wrapper} mb-4`}>
          <OrderCard />
        </div>
        <div className={`${styles.wrapper} mb-4`}>
          <OrderCard />
        </div>
        <div className={`${styles.wrapper} mb-4`}>
          <OrderCard />
        </div>
        <div className={`${styles.wrapper} mb-4`}>
          <OrderCard />
        </div>
        <div className={`${styles.wrapper} mb-4`}>
          <OrderCard />
        </div>
      </div>
      <div className={`${styles.workspace}`}>
        <div className={styles.monitor}>
          <div className={styles.orders}>
            <p className={`${text_medium} mb-6`}>Готовы:</p>
            <p className={`${styles.number} ${digits_default} mb-2`}>{12738}</p>
            <p className={`${styles.number} ${digits_default} mb-2`}>{12738}</p>
            <p className={`${styles.number} ${digits_default} mb-2`}>{12738}</p>
          </div>
          <div className={styles.orders}>
            <p className={`${text_medium} mb-6`}>В работе:</p>
            <p className={`${digits_default} mb-2`}>{12738}</p>
            <p className={`${digits_default} mb-2`}>{12738}</p>
            <p className={`${digits_default} mb-2`}>{12738}</p>
          </div>
        </div>
        <div className='mt-15 mb-15'>
          <p className={`${text_medium}`}>Выполнено за все время:</p>
          <p className={digits_large}>{111000}</p>
        </div>
        <div>
          <p className={text_medium}>Выполнено за сегодня:</p>
          <p className={digits_large}>{777}</p>
        </div>
      </div>
    </div>
  );
};
