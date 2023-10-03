import React, { useEffect } from 'react';
import OrderElement from '../Components/OrderElement/OrderElement';
import styles from './FeedElementPage.module.css';
import { useLocation } from 'react-router-dom';
import { useSocket } from '../Services/Hooks/useSocket';

const ws = 'wss://norma.nomoreparties.space/orders/all';


export const FeedElementPage = () => {
  const { pathname } = useLocation();

  const id = pathname.replace('/feed/', '');

  const { getFeed } = useSocket(ws);

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.element}>
        <OrderElement externalId={id} />
      </div>
    </div>
  );
};
