import React from 'react';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrop } from 'react-dnd';
import OrderDetails from '../OrderDetails/OrderDetails';
import Modal from '../Modal/Modal';
import { addIngredient, toggleBun } from '../../Services/Slices/cart';
import BurgerConstructorElement from '../BurgerConstructorElement/BurgerConstructorElement';
import { increment } from '../../Services/Slices/counter';
import { open, close } from '../../Services/Slices/order';
import { useSelector, useDispatch } from 'react-redux';
import { createOrder } from '../../Services/Slices/order';
import { getCookie } from '../../Services/utils';
import { useLocation } from 'react-router-dom';
import styles from './BurgerConstructor.module.css';

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { totalPrice, bun, isOpen, ingredients, ingId } = useSelector(
    (store) => ({
      totalPrice: store.cart.ingredients.reduce(
        (acc, item) => acc + item.price,
        0
      ),
      isOpen: store.order.isOpen,
      bun: store.cart.bun,
      ingredients: store.cart.ingredients,
      ingId: store.cart.ingredients.map((item) => item.id),
    })
  );

  const isAuth = getCookie('isAuth');

  const onClose = () => dispatch(close());

  const getOrder = () => {
    const arr = [].concat(bun.id, ingId);
    dispatch(createOrder(arr));
    dispatch(open());
  };

  const addItem = (item) => {
    if (item.type !== 'bun') {
      dispatch(addIngredient(item));
      dispatch(increment(item.id));
    }
  };

  const addBun = (item) => {
    if (item.type === 'bun') {
      dispatch(toggleBun(item));
    }
  };

  const [, drop] = useDrop(() => ({
    accept: 'box',
    drop: (item) => addItem(item),
  }));

  const [, dropBun] = useDrop(() => ({
    accept: 'box',
    drop: (item) => addBun(item),
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
