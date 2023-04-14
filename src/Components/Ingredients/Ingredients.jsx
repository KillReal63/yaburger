import React from 'react';
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { useModalReducer } from '../../Hooks/useModalReducer';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import styles from './Ingredients.module.css';

const Ingredients = ({ ingredients }) => {
  const { isOpen, closePopup, itemProps, dispatch } = useModalReducer();

  const setModalItem = (item) =>
    dispatch({ type: 'open', payload: { ...item } });

  const data = Object.values(ingredients.ingredients);
  return (
    <div className={styles.ingredients}>
      <section>
        <span className='text text_type_main-medium'>Булки</span>
        <div className={`${styles.categories} pl-4 pr-4`}>
          {data.map((item) => {
            if (item.type === 'bun') {
              return (
                <div
                  className={`${styles.item} mt-6 mb-10`}
                  key={item._id}
                  onClick={() => setModalItem(item)}
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
            } else return null;
          })}
        </div>
      </section>
      <section>
        <span className='text text_type_main-medium'>Соусы</span>
        <div className={`${styles.categories} pl-4 pr-4`}>
          {data.map((item) => {
            if (item.type === 'sauce') {
              return (
                <div
                  className={`${styles.item} mt-6 mb-8`}
                  key={item._id}
                  onClick={() => setModalItem(item)}
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
            } else return null;
          })}
        </div>
      </section>
      <section>
        <span className='text text_type_main-medium'>Начинки</span>
        <div className={`${styles.categories} pl-4 pr-4`}>
          {data.map((item) => {
            if (item.type === 'main') {
              return (
                <div
                  className={`${styles.item} mt-6 mb-8`}
                  key={item._id}
                  onClick={() => setModalItem(item)}
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
            } else return null;
          })}
        </div>
      </section>
      {isOpen && (
        <Modal
          headerInfo='Добавить ингредиент'
          closePopup={closePopup}
          isOpen={isOpen}
        >
          <IngredientDetails {...itemProps} />
        </Modal>
      )}
    </div>
  );
};

Ingredients.propTypes = {
  ingredients: PropTypes.object,
};

export default Ingredients;
