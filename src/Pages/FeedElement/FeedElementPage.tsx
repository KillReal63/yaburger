import React, { useEffect } from 'react';
import OrderElement from '../../Components/OrderElement/OrderElement';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../Shared/Types/Store';
import { connectAll, disconnect } from '../../Services/Sockets/wsActions';
import styles from './FeedElementPage.module.css';

export const FeedElementPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(connectAll());
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
