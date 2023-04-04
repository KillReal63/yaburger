import React from 'react';
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { data } from '../../Utils/data.js';
import styles from './Ingredients.module.css';

const Ingredients = () => {
  return (
    <div className={styles.ingredients}>
      <section>
        <span className='text text_type_main-medium'>Булки</span>
        <div className={`${styles.categories} pl-4 pr-4`}>
          {data.map((item) => {
            if (item.type === 'bun') {
              return (
                <div className={`${styles.item} mt-6 mb-10`} key={item._id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`${styles.ingredient_image} mr-4 ml-4`}
                  />
                  <Counter
                    count={1}
                    size='default'
                    extraClass={styles.counter}
                  />
                  <div
                    className={`${styles.price} text text_type_digits-default mt-1 mb-1`}
                  >
                    <span className='mr-2'>{item.price}</span>
                    <CurrencyIcon type='primary' />
                  </div>
                  <span
                    className={`${styles.ingredient_name} text text_type_main-default`}
                  >
                    {item.name}
                  </span>
                </div>
              );
            }
          })}
        </div>
      </section>
      <section>
        <span className='text text_type_main-medium'>Соусы</span>
        <div className={`${styles.categories} pl-4 pr-4`}>
          {data.map((item) => {
            if (item.type === 'sauce') {
              return (
                <div className={`${styles.item} mt-6 mb-8`} key={item._id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`${styles.ingredient_image} mr-4 ml-4`}
                  />
                  <Counter
                    count={1}
                    size='default'
                    extraClass={styles.counter}
                  />
                  <div
                    className={`${styles.price} text text_type_digits-default mt-1 mb-1`}
                  >
                    <span className='mr-2'>{item.price}</span>
                    <CurrencyIcon type='primary' />
                  </div>
                  <span
                    className={`${styles.ingredient_name} text text_type_main-default`}
                  >
                    {item.name}
                  </span>
                </div>
              );
            }
          })}
        </div>
      </section>
      <section>
        <span className='text text_type_main-medium'>Начинки</span>
        <div className={`${styles.categories} pl-4 pr-4`}>
          {data.map((item) => {
            if (item.type === 'main') {
              return (
                <div className={`${styles.item} mt-6 mb-8`} key={item._id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`${styles.ingredient_image} mr-4 ml-4`}
                  />
                  <Counter
                    count={1}
                    size='default'
                    extraClass={styles.counter}
                  />
                  <div
                    className={`${styles.price} text text_type_digits-default mt-1 mb-1`}
                  >
                    <span className='mr-2'>{item.price}</span>
                    <CurrencyIcon type='primary' />
                  </div>
                  <span
                    className={`${styles.ingredient_name} text text_type_main-default`}
                  >
                    {item.name}
                  </span>
                </div>
              );
            }
          })}
        </div>
      </section>
    </div>
  );
};

export default Ingredients;
