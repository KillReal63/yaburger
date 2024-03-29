import React, { useCallback, useMemo } from 'react';
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
import {
  addIngredient,
  resetCart,
  toggleBun,
} from '../../Services/Slices/Cart/cart';
import { increment } from '../../Services/Slices/Counter/counter';
import { open, close } from '../../Services/Slices/Order/order';
import { createOrder } from '../../Api/orderApi';
import { getCookie } from '../../Helpers';
import { Ingredient } from '../../Shared/Types/Ingredient';
import { digits_default } from '../../Shared/Typography';
import { Token } from '../../Shared/Types/Token';
import { useAppDispatch } from '../../Shared/Types/Store';
import {
  getBun,
  getIngredients,
  getTotalPrice,
} from '../../Services/Slices/Cart/cartSelectors';
import { getIsOpen } from '../../Services/Slices/Order/orderSelectors';
import { accessToken } from '../../Helpers/tokens';
import styles from './BurgerConstructor.module.css';

type Props = Token & {
  arr: string[];
};

const BurgerConstructor = () => {
  const dispatch = useAppDispatch();
  const totalPrice = useSelector(getTotalPrice);

  const bun = useSelector(getBun);
  const ingredients = useSelector(getIngredients);
  const isOpen = useSelector(getIsOpen);
  const isAuth = getCookie('isAuth');

  const ingredientsId = useMemo(() => ingredients.map((item) => item.id), [ingredients]);

  const onClose = useCallback(() => dispatch(close(false)), [dispatch]);

  const getOrder = useCallback(() => {
    const arr = [bun.id, bun.id, ...ingredientsId];
    dispatch(createOrder({ arr, accessToken } as Props));
    dispatch(open(true));
    dispatch(resetCart([]));
  }, [bun.id, ingredientsId, dispatch, accessToken]);

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

  const image =
    bun.image !== ''
      ? bun.image
      : 'https://code.s3.yandex.net/react/code/bun-01.png';

  const bunName = bun.name !== '' ? bun.name : 'Выберите булку';

  return (
    <>
      <div
        ref={dropBun}
        className={`${styles.burger_constructor} ml-10 mt-20 pl-4 pr-4`}
        data-bunid='drop-bun-area'
      >
        <ConstructorElement
          type='top'
          isLocked={true}
          text={bunName}
          price={bun.price}
          thumbnail={image as string}
          extraClass={`${styles.bun} ml-6 mb-4`}
        />
        <div
          ref={drop}
          data-id='drop-area'
          className={`${styles.items} ${styles.custom_scroll}`}
        >
          {ingredients.length > 0 ? (
            ingredients.map((item, index) => (
              <BurgerConstructorElement
                ingredient={item}
                index={index}
                key={uuidv4()}
              />
            ))
          ) : (
            <div>Добавьте ингредиенты</div>
          )}
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
              data-id='checkout'
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
