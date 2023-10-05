import React from 'react';
import { useSelector } from 'react-redux';
import Done from '../../Assets/Images/done.jpg';
import { Store } from '../../Shared/Types/Store';
import {
  digits_large,
  text_default,
  text_inactive,
  text_large,
  text_medium,
} from '../../Shared/Typography';
import styles from './OrderDetails.module.css';

const getOrderNumber = (store: Store) => store.order.orderNumber;

const OrderDetails = () => {
  const orderNumber = useSelector(getOrderNumber);

  return (
    <div className={styles.modal_order}>
      <div className={styles.order_info}>
        {orderNumber ? (
          <span className={`${digits_large} mt-4 mb-8`}>{orderNumber}</span>
        ) : (
          <span className={`${text_large} mt-4 mb-8`}>Ожидайте</span>
        )}
        <span className={text_medium}>идентификатор заказа</span>
        <img src={Done} alt='' className={`${styles.order_img} mb-15 mt-15`} />
        <span className={`${text_default} mb-2`}>
          Ваш заказ начали готовить
        </span>
        <span className={`${text_inactive} mb-30`}>
          Дождитесь готовности на орбитальной станции
        </span>
      </div>
    </div>
  );
};

export default OrderDetails;
