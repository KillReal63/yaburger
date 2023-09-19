//@ts-nocheck

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useDrop } from 'react-dnd';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../OrderDetails/OrderDetails';
import Modal from '../Modal/Modal';
import BurgerConstructorElement from '../BurgerConstructorElement/BurgerConstructorElement';
import { addIngredient, toggleBun } from '../../Services/Slices/cart';
import { increment } from '../../Services/Slices/counter.ts';
import { open, close } from '../../Services/Slices/order';
import { createOrder } from '../../Api/orderApi';
import { getCookie } from '../../Helpers';
import { Store } from '../../Shared/Types/Store';
import { Ingredient } from '../../Shared/Types/Ingredient';
import styles from './BurgerConstructor.module.css';

type buns = {};

const getTotalPrice = (store: Store) =>
  store.cart.ingredients.reduce((acc, item) => acc + item.price, 0);
const getBun = (store: Store) => store.cart.bun;
const getIngredients = (store: Store) => store.cart.ingredients;
const getIngredientsId = (store: Store) =>
  store.cart.ingredients.map((item) => item.id);
const getIsOpen = (store: Store) => store.order.isOpen;

const BurgerConstructor = () => {
  const dispatch: any = useDispatch();
  const location = useLocation();
  const totalPrice = useSelector(getTotalPrice);
  const bun: Ingredient = useSelector(getBun);
  const ingredients = useSelector(getIngredients);
  const ingredientsId = useSelector(getIngredientsId);
  const isOpen = useSelector(getIsOpen);

  const isAuth = getCookie('isAuth');

  const onClose = () => dispatch(close());

  const getOrder = () => {
    const arr = [].concat(bun.id, ingredientsId);
    dispatch(createOrder(arr));
    dispatch(open(true));
  };

  const addItem = (item: Ingredient) => {
    console.log(item);

    if (item.type !== 'bun') {
      dispatch(addIngredient(item));
      dispatch(increment(item.id));
    }
  };

  const addBun = (item: Ingredient) => {
    if (item.type === 'bun') {
      dispatch(toggleBun(item));
    }
  };

  const [, drop] = useDrop(() => ({
    accept: 'box',
    drop: (item: Ingredient) => addItem(item),
  }));

  const [, dropBun] = useDrop(() => ({
    accept: 'box',
    drop: (item: Ingredient) => addBun(item),
  }));

  return (
    <>
      <div
        ref={dropBun}
        className={`${styles.burger_constructor} ml-10 mt-20 pl-4 pr-4`}
        state={{ background: location }}
      >
        <ConstructorElement
          type='top'
          isLocked={true}
          text={bun.name}
          price={bun.price}
          thumbnail={bun.image}
          extraClass={`${styles.bun} ml-6 mb-4`}
        />
        <div ref={drop} className={styles.items}>
          {ingredients.map((item, index) => (
            <BurgerConstructorElement
              ingredient={item}
              index={index}
              key={item.unID}
            />
          ))}
        </div>
        <ConstructorElement
          type='bottom'
          isLocked={true}
          text={bun.name}
          price={bun.price}
          thumbnail={bun.image}
          extraClass={`${styles.bun} ml-6 mt-4`}
        />
        <div className={`${styles.cart_controll} mt-10`}>
          <div className={`${styles.cart_price} mr-10`}>
            <div className='text text_type_digits-medium mr-2'>
              {totalPrice || bun.price ? totalPrice + bun.price * 2 : 0}
            </div>
            <CurrencyIcon type='primary' />
          </div>
          {Object.keys(bun).length > 1 && isAuth ? (
            <Button
              htmlType='button'
              type='primary'
              size='large'
              onClick={() => getOrder()}
            >
              Нажми на меня
            </Button>
          ) : (
            <Button htmlType='button' type='primary' size='large' disabled>
              Нажми на меня
            </Button>
          )}
        </div>
      </div>
      {isOpen && (
        <Modal onClose={onClose}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
};

export default BurgerConstructor;
