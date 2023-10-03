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
} from '../../Shared/Typography';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './OrderElement.module.css';

type Props = {
  externalId?: string;
};

const OrderElement: FC<Props> = ({ externalId }) => {
  const { id } = useParams();

  //@ts-ignore
  const data = useSelector((store) => store.feed.orders);

  //@ts-ignore
  const ingredients = useSelector((store) => store.ingredients.data);

  const order = data.find(
    (item: any) => item._id === (externalId ? externalId : id)
  );

  if (data.length === 0) return <div>...Loading</div>;
  const items = ingredients.filter(({ _id }: any) =>
    order.ingredients.includes(_id)
  );

  //@ts-ignore
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
      <div className='mb-15'>
        <p className={`${text_medium} mb-3`}>{order.name}</p>
        <p className={styles.status}>Выполнен</p>
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
