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
import { Ingredient } from '../../Shared/Types/Ingredient';
import { Data } from '../../Services/Slices/Sockets/wsActions';
import { getData } from '../../Services/Slices/Ingredients/ingredientsSelectors';
import { getMessage } from '../../Services/Slices/Sockets/wsSelectors';
import styles from './OrderElement.module.css';

type Props = {
  externalId?: string;
};

const OrderElement: FC<Props> = () => {
  const { id } = useParams();

  const ingredients = useSelector(getData);

  const message = useSelector(getMessage);

  if (!ingredients) {
    return <div>...Loading</div>;
  }

  if (!message) {
    return <div>...Loading</div>;
  }

  const order = message.orders.find((item: Data) => item._id === id);

  if (!order) {
    return <div>...Loading</div>;
  }

  const items = ingredients.filter((ingredient: Ingredient) =>
    order.ingredients.includes(ingredient._id)
  );

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    order.ingredients.forEach((ingredientId) => {
      const ingredient = ingredients.find((item) => item._id === ingredientId);
      if (ingredient) {
        totalPrice += ingredient.price;
      }
    });

    return totalPrice;
  };

  const totalPrice = calculateTotalPrice();

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
          {items.map((item: Ingredient, index: number) => (
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
                  {
                    order.ingredients.filter(
                      (elem: string) => elem === item._id
                    ).length
                  }{' '}
                  x {item.price}
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
