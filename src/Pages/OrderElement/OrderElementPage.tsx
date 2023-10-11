import React, { useEffect } from 'react';
import OrderElement from '../../Components/OrderElement/OrderElement';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../Shared/Types/Store';
import styles from './OrderElementPage.module.css';
import { getCookie } from '../../Helpers';
import { connectHistory, disconnect } from '../../Services/Sockets/wsActions';

export const OrderElementPage = () => {
  const dispatch = useAppDispatch();
  const token = getCookie('accessToken');

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

  return (
    <div className={styles.wrapper}>
      <div className={styles.element}>
        <OrderElement />
      </div>
    </div>
  );
};
