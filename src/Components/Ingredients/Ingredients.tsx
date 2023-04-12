//@ts-nocheck

import React from 'react';
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Ingredients.module.css';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { useModalReducer } from '../../Hooks/useModalReducer';
import Modal from '../Modal/Modal';

export type IngredientsProps = {
  ingredients: object[];
};

const Ingredients = ({ ingredients }: IngredientsProps) => {
  const value = useModalReducer();

  const data = Object.values(ingredients);

  return (
    <div className={styles.ingredients}>
      <section>
        <span className='text text_type_main-medium'>Булки</span>
        <div className={`${styles.categories} pl-4 pr-4`}>
          {data.map((item: any) => {
            if (item.type === 'bun') {
              return (
                <div
                  className={`${styles.item} mt-6 mb-10`}
                  key={item._id}
                  // onClick={}
                >
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
          {data.map((item: any) => {
            if (item.type === 'sauce') {
              return (
                <div
                  className={`${styles.item} mt-6 mb-8`}
                  key={item._id}
                  onClick={() =>
                    // @ts-ignore
                    value.dispatch({ type: 'open', payload: { ...item } })
                  }
                >
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
          {data.map((item: any) => {
            if (item.type === 'main') {
              return (
                <div
                  className={`${styles.item} mt-6 mb-8`}
                  key={item._id}
                  onClick={() =>
                    // @ts-ignore
                    value.dispatch({ type: 'open', payload: { ...item } })
                  }
                >
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
      {value.isOpen && (
        <Modal headerInfo="Добавить ингредиент">
          <IngredientDetails {...value.itemProps} />
        </Modal>
      )}
    </div>
  );
};

export default Ingredients;
