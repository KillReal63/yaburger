//@ts-nocheck

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
} from '../../Shared/Typography';
import styles from './OrderCard.module.css';
import { Ingredient } from '../../Shared/Types/Ingredient';
import { useSelector } from 'react-redux';

type Props = Ingredient & {
  createdAt: string;
  ingredients: string[];
  status: string;
  number: number;
};

const OrderCard: FC<Props> = ({ ingredients, number, createdAt, name }) => {
  const { data } = useSelector((store) => store.ingredients);

  const items = data.filter(({ _id }) => ingredients.includes(_id));

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
          {items.slice(0, 5).map((item) => (
            <Button
              htmlType='button'
              type='secondary'
              size='small'
              extraClass={styles.ingredient}
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
            >
              {items.length - 5}
              <img src={'123'} className={styles.img} />
            </Button>
          )}
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
