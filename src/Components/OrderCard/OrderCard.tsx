import React from 'react';
import {
  CurrencyIcon,
  FormattedDate,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {
  text_medium,
  text_inactive,
  digits_default,
} from '../../Shared/Typography';
import styles from './OrderCard.module.css';

const OrderCard = () => {
  const date = () => {
    const dateFromServer = '2022-10-10T17:33:32.877Z';
    return (
      <FormattedDate
        date={new Date(dateFromServer)}
        className={text_inactive}
      />
    );
  };

  return (
    <div className={`${styles.wrapper} pl-6 pr-6`}>
      <div className={`${styles.header} mt-6`}>
        <p className={`${styles.id} ${digits_default}`}>#123456</p>
        {date()}
      </div>
      <h2 className={`${styles.name} ${text_medium} mb-6 mt-6`}>
        Death Star Starship Main бургер
      </h2>
      <div className={`${styles.info} mb-6`}>
        <div className={styles.ingredients}>
          <Button
            htmlType='button'
            type='secondary'
            size='small'
            extraClass={styles.ingredient}
          >
            <img
              src='https://code.s3.yandex.net/react/code/bun-02.png'
              className={styles.img}
            />
          </Button>
          <Button
            htmlType='button'
            type='secondary'
            size='small'
            extraClass={styles.ingredient}
          >
            <img
              src='https://code.s3.yandex.net/react/code/bun-02.png'
              className={styles.img}
            />
          </Button>
        </div>
        <div className={styles.price}>
          <p className={`${digits_default} mr-2`}>777</p>
          <CurrencyIcon type='primary' />
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
