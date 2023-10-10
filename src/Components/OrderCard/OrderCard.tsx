import React, { FC } from 'react';
import {
  CurrencyIcon,
  FormattedDate,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {
  text_medium,
  text_inactive,
  digits_default,
  digits_medium,
} from '../../Shared/Typography';
import { useSelector } from 'react-redux';
import { RootState } from '../../Shared/Types/Store';
import { Data } from '../../Services/Sockets/wsActions';
import styles from './OrderCard.module.css';

const getData = (store: RootState) => store.ingredients.data;

const OrderCard: FC<Data> = ({ ingredients, number, createdAt, name }) => {
  const data = useSelector(getData);

  const items = data.filter(({ _id }) => ingredients.includes(_id));

  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  const date = () => {
    const dateFromServer = createdAt;
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
        <p className={`${styles.id} ${digits_default}`}>#{number}</p>
        {date()}
      </div>
      <h2 className={`${styles.name} ${text_medium} mb-6 mt-6`}>{name}</h2>
      <div className={`${styles.info} mb-6`}>
        <div className={styles.ingredients}>
          {items.slice(0, 5).map((item, index) => (
            <Button
              htmlType='button'
              type='secondary'
              size='small'
              extraClass={styles.ingredient}
              style={{ zIndex: items.length - index }}
              key={item._id}
            >
              <img src={item.image} className={styles.img} />
            </Button>
          ))}
          {items.length > 5 && (
            <Button
              htmlType='button'
              type='secondary'
              size='small'
              extraClass={styles.ingredient}
              style={{ zIndex: 1 }}
            >
              <p className={digits_medium}>+{items.length - 5}</p>
              <img src={``} className={styles.img} />
            </Button>
          )}
        </div>
        <div className={styles.price}>
          <p className={`${digits_default} mr-2`}>{totalPrice}</p>
          <CurrencyIcon type='primary' />
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
