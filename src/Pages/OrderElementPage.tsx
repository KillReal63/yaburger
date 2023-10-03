import React, { useEffect } from 'react';
import OrderElement from '../Components/OrderElement/OrderElement';
import styles from './OrderElementPage.module.css';
import { useLocation } from 'react-router-dom';
import { useSocket } from '../Services/Hooks/useSocket';
import { getCookie } from '../Helpers';

const ws = 'wss://norma.nomoreparties.space/orders';

export const OrderElementPage = () => {
  const token = getCookie('accessToken');
  const { pathname } = useLocation();

  const id = pathname.replace('/profile/orders/', '');

  const { getHistory } = useSocket(ws);

  useEffect(() => {
    getHistory(token as string);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.element}>
        <OrderElement externalId={id} />
      </div>
    </div>
  );
};
