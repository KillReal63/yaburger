import React, { useEffect } from 'react';
import OrderElement from '../Components/OrderElement/OrderElement';
import { useLocation } from 'react-router-dom';
import { useSocket } from '../Services/Hooks/useSocket';
import { getCookie } from '../Helpers';
import { useSelector } from 'react-redux';
import { Store } from '../Shared/Types/Store';
import styles from './OrderElementPage.module.css';

const ws = 'wss://norma.nomoreparties.space/orders';
const getData = (store: Store) => store.history.data;

export const OrderElementPage = () => {
  const token = getCookie('accessToken');
  const { pathname } = useLocation();

  const history = useSelector(getData);

  const id = pathname.replace('/profile/orders/', '');

  const { getHistory } = useSocket(ws);

  useEffect(() => {
    getHistory(token as string);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.element}>
        <OrderElement externalId={id} data={history} />
      </div>
    </div>
  );
};
