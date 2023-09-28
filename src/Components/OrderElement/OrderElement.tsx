import React from 'react';
import styles from './OrderElement.module.css';
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

const OrderElement = () => {
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
    <div className={styles.element}>
      <p className={`${digits_default} ${styles.id} mb-10`}>#034533</p>
      <div className='mb-15'>
        <p className={`${text_medium} mb-3`}>
          Black Hole Singularity острый бургер
        </p>
        <p className={styles.status}>Выполнен</p>
      </div>
      <div className={`${styles.about} mb-10`}>
        <p className={`${text_medium} mb-6`}>Состав:</p>
        <div className={`${styles.wrapper} ${styles.custom_scroll}`}>
          <div className={`${styles.ingredient_info} mb-4`}>
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
            <p className={`${text_default} ml-4 mr-4`}>
              Филе Люминесцентного тетраодонтимформа
            </p>
            <div className={`${styles.counter}`}>
              <p className={`${digits_default} mr-2`}>
                {1} x {20}
              </p>
              <CurrencyIcon type='primary' />
            </div>
          </div>
          <div className={`${styles.ingredient_info} mb-4`}>
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
            <p className={`${text_default} ml-4 mr-4`}>
              Филе Люминесцентного тетраодонтимформа
            </p>
            <div className={`${styles.counter}`}>
              <p className={`${digits_default} mr-2`}>
                {1} x {20}
              </p>
              <CurrencyIcon type='primary' />
            </div>
          </div>
          <div className={`${styles.ingredient_info} mb-4`}>
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
            <p className={`${text_default} ml-4 mr-4`}>
              Филе Люминесцентного тетраодонтимформа
            </p>
            <div className={`${styles.counter}`}>
              <p className={`${digits_default} mr-2`}>
                {1} x {20}
              </p>
              <CurrencyIcon type='primary' />
            </div>
          </div>
          <div className={`${styles.ingredient_info} mb-4`}>
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
            <p className={`${text_default} ml-4 mr-4`}>
              Филе Люминесцентного тетраодонтимформа
            </p>
            <div className={`${styles.counter}`}>
              <p className={`${digits_default} mr-2`}>
                {1} x {20}
              </p>
              <CurrencyIcon type='primary' />
            </div>
          </div>
          <div className={`${styles.ingredient_info} mb-4`}>
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
            <p className={`${text_default} ml-4 mr-4`}>
              Филе Люминесцентного тетраодонтимформа
            </p>
            <div className={`${styles.counter}`}>
              <p className={`${digits_default} mr-2`}>
                {1} x {20}
              </p>
              <CurrencyIcon type='primary' />
            </div>
          </div>
          <div className={`${styles.ingredient_info} mb-4`}>
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
            <p className={`${text_default} ml-4 mr-4`}>
              Филе Люминесцентного тетраодонтимформа
            </p>
            <div className={`${styles.counter}`}>
              <p className={`${digits_default} mr-2`}>
                {1} x {20}
              </p>
              <CurrencyIcon type='primary' />
            </div>
          </div>
          <div className={`${styles.ingredient_info} mb-4`}>
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
            <p className={`${text_default} ml-4 mr-4`}>
              Филе Люминесцентного тетраодонтимформа
            </p>
            <div className={`${styles.counter}`}>
              <p className={`${digits_default} mr-2`}>
                {1} x {20}
              </p>
              <CurrencyIcon type='primary' />
            </div>
          </div>
          <div className={`${styles.ingredient_info} mb-4`}>
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
            <p className={`${text_default} ml-4 mr-4`}>
              Филе Люминесцентного тетраодонтимформа
            </p>
            <div className={`${styles.counter}`}>
              <p className={`${digits_default} mr-2`}>
                {1} x {20}
              </p>
              <CurrencyIcon type='primary' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        {date()}
        <div className={styles.total}>
          <p className={digits_default}>510</p>
          <CurrencyIcon type='primary' />
        </div>
      </div>
    </div>
  );
};

export default OrderElement;
