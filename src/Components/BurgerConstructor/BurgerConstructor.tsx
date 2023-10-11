import React from 'react';
import { useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../OrderDetails/OrderDetails';
import Modal from '../Modal/Modal';
import BurgerConstructorElement from '../BurgerConstructorElement/BurgerConstructorElement';
import { v4 as uuidv4 } from 'uuid';
import { addIngredient, toggleBun } from '../../Services/Slices/cart';
import { increment } from '../../Services/Slices/counter';
import { open, close } from '../../Services/Slices/order';
import { createOrder } from '../../Api/orderApi';
import { getCookie } from '../../Helpers';
import { Ingredient } from '../../Shared/Types/Ingredient';
import { digits_default } from '../../Shared/Typography';
import { Token } from '../../Shared/Types/Token';
import { RootState, useAppDispatch } from '../../Shared/Types/Store';
import styles from './BurgerConstructor.module.css';

type Props = Token & {
  arr: string[];
};

const getTotalPrice = (store: RootState) =>
  store.cart.ingredients.reduce((acc, item) => acc + item.price, 0);
const getBun = (store: RootState) => store.cart.bun;
const getIngredients = (store: RootState) => store.cart.ingredients;
const getIngredientsId = (store: RootState) =>
  store.cart.ingredients.map((item) => item.id);
const getIsOpen = (store: RootState) => store.order.isOpen;

const BurgerConstructor = () => {
  const dispatch = useAppDispatch();
  const totalPrice = useSelector(getTotalPrice);
  const token = getCookie('accessToken');
  const bun = useSelector(getBun);
  const ingredients = useSelector(getIngredients);
  const ingredientsId = useSelector(getIngredientsId);
  const isOpen = useSelector(getIsOpen);
  const isAuth = getCookie('isAuth');

  const onClose = () => dispatch(close(false));

  const getOrder = () => {
    const arr = [bun.id, bun.id, ...ingredientsId];
    dispatch(createOrder({ arr, token } as Props));
    dispatch(open(true));
  };

  const addItem = (item: Ingredient) => {
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

  const image = bun.image !== '' ? bun.image : null;

  return (
    <>
      <div
        ref={dropBun}
        className={`${styles.burger_constructor} ml-10 mt-20 pl-4 pr-4`}
      >
        <ConstructorElement
          type='top'
          isLocked={true}
          text={bun.name}
          price={bun.price}
          thumbnail={image as string}
          extraClass={`${styles.bun} ml-6 mb-4`}
        />
        <div ref={drop} className={`${styles.items} ${styles.custom_scroll}`}>
          {ingredients.map((item, index) => (
            <BurgerConstructorElement
              ingredient={item}
              index={index}
              key={uuidv4()}
            />
          ))}
        </div>
        <ConstructorElement
          type='bottom'
          isLocked={true}
          text={bun.name}
          price={bun.price}
          thumbnail={image as string}
          extraClass={`${styles.bun} ml-6 mt-4`}
        />
        <div className={`${styles.cart_controll} mt-10`}>
          <div className={`${styles.cart_price} mr-10`}>
            <div className={`${digits_default} mr-2`}>
              {totalPrice || bun.price ? totalPrice + bun.price * 2 : 0}
            </div>
            <CurrencyIcon type='primary' />
          </div>
          {Object.keys(bun).length > 4 && isAuth ? (
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
        <Modal onClose={onClose} open>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
};

export default BurgerConstructor;
