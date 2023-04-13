import React from 'react';
import styles from './OrderDetails.module.css';
import Done from '../../Images/done.jpg';

const OrderDetails = () => {
  return (
    <div className={styles.modal_order}>
      <div className={styles.order_info}>
        <span className='text text_type_digits-large mt-4 mb-8'>034546</span>
        <span className='text text_type_main-medium'>идентификатор заказа</span>
        <img src={Done} alt='' className={`${styles.order_img} mb-15 mt-15`} />
        <span className='text text_type_main-default mb-2'>
          Ваш заказ начали готовить
        </span>
        <span className='text text_type_main-default text_color_inactive mb-30'>
          Дождитесь готовности на орбитальной станции
        </span>
      </div>
    </div>
  );
};

export default OrderDetails;
