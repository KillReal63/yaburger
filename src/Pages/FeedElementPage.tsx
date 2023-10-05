import React from 'react';
import OrderElement from '../Components/OrderElement/OrderElement';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Store } from '../Shared/Types/Store';
import styles from './FeedElementPage.module.css';

const getOrder = (store: Store) => store.feed.orders;

export const FeedElementPage = () => {
  const { pathname } = useLocation();

  const data = useSelector(getOrder);

  const id = pathname.replace('/feed/', '');

  return (
    <div className={styles.wrapper}>
      <div className={styles.element}>
        <OrderElement externalId={id} data={data} />
      </div>
    </div>
  );
};
