import React from 'react';
import OrderCard from '../Components/OrderCard/OrderCard';
import styles from './FeedPage.module.css';

export const FeedPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.feed}>
        <div className={`${styles.wrapper} mb-4`}>
          <OrderCard />
        </div>
        <div className={`${styles.wrapper} mb-4`}>
          <OrderCard />
        </div>
      </div>
      <div className={`${styles.workspace} ml-15`}>
        <div className={styles.monitor}>
          <div className={styles.orders}>
            <p className='text text_type_main-medium mb-6'>Готовы:</p>
            <p
              className={`${styles.number} text text_type_digits-default mb-2`}
            >
              {12738}
            </p>
            <p
              className={`${styles.number} text text_type_digits-default mb-2`}
            >
              {12738}
            </p>
            <p
              className={`${styles.number} text text_type_digits-default mb-2`}
            >
              {12738}
            </p>
          </div>
          <div className={styles.orders}>
            <p className='text text_type_main-medium mb-6'>В работе:</p>
            <p className='text text_type_digits-default mb-2'>{12738}</p>
            <p className='text text_type_digits-default mb-2'>{12738}</p>
            <p className='text text_type_digits-default mb-2'>{12738}</p>
          </div>
        </div>
        <div className='mt-15 mb-15'>
          <p className='text text_type_main-medium'>Выполнено за все время:</p>
          <p className={`text text_type_digits-large`}>{111000}</p>
        </div>
        <div>
          <p className='text text_type_main-medium'>Выполнено за сегодня:</p>
          <p className={`text text_type_digits-large`}>{777}</p>
        </div>
      </div>
    </div>
  );
};
