import React, { useEffect } from 'react';
import OrderElement from '../../Components/OrderElement/OrderElement';
import { useAppDispatch } from '../../Shared/Types/Store';
import {
  connectHistory,
  disconnect,
} from '../../Services/Slices/Sockets/wsActions';
import { accessToken } from '../../Helpers/tokens';
import styles from './OrderElementPage.module.css';

export const OrderElementPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (accessToken) {
      const wsToken = accessToken.replace('Bearer ', '');
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
