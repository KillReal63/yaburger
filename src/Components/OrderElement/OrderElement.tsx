import React, { FC } from 'react';
import {
  Button,
  CurrencyIcon,
  FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {
  digits_default,
  text_default,
  text_medium,
  text_inactive,
  digits_medium,
} from '../../Shared/Typography';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Store } from '../../Shared/Types/Store';
import styles from './OrderElement.module.css';

type Data = {
  createdAt?: string;
  ingredients?: string[];
  name?: string;
  number?: number;
  status?: string;
  updatedAt?: string;
  _id?: string;
  length?: number;
  find?: any;
};

type Props = {
  externalId?: string;
  data: Data;
};

const getIngredients = (store: Store) => store.ingredients.data;

const OrderElement: FC<Props> = ({ externalId, data }) => {
  const { id } = useParams();

  const ingredients = useSelector(getIngredients);

  if (ingredients.length === 0) {
    return <div>...Loading</div>;
  }

  if (data.length === 0) {
    return <div>...Loading</div>;
  }

  const order = data.find(
    (item: any) => item._id === (externalId ? externalId : id)
  );

  const items = ingredients.filter(({ _id }: any) =>
    order.ingredients.includes(_id)
  );

  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  const date = () => {
    const dateFromServer = `${order.createdAt}`;
    return (
      <FormattedDate
        date={new Date(dateFromServer)}
        className={text_inactive}
      />
    );
  };

  return (
    <div className={styles.element}>
      <p className={`${digits_medium} mb-4`}>#{order.number}</p>
      <div className='mb-15'>
        <p className={`${text_medium} mb-3`}>{order.name}</p>
        <p className={styles.status}>
          {order.status === 'done' ? 'Выполнен' : 'В процессе'}
        </p>
      </div>
      <div className={`${styles.about} mb-10`}>
        <p className={`${text_medium} mb-6`}>Состав:</p>
        <div className={`${styles.wrapper} ${styles.custom_scroll}`}>
          {items.map((item: any, index: any) => (
            <div className={`${styles.ingredient_info} mb-4`} key={index}>
              <Button
                htmlType='button'
                type='secondary'
                size='small'
                extraClass={styles.ingredient}
              >
                <img src={item.image} className={styles.img} />
              </Button>
              <p className={`${text_default} ml-4 mr-4`}>{item.name}</p>
              <div className={`${styles.counter}`}>
                <p className={`${digits_default} mr-2`}>
                  {1} x {item.price}
                </p>
                <CurrencyIcon type='primary' />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        {date()}
        <div className={styles.total}>
          <p className={`${digits_default} mr-2`}>{totalPrice}</p>
          <CurrencyIcon type='primary' />
        </div>
      </div>
    </div>
  );
};

export default OrderElement;
