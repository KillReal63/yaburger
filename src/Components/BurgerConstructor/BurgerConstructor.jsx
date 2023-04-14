import React from 'react';
import { useModalReducer } from '../../Hooks/useModalReducer';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../OrderDetails/OrderDetails';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import styles from './BurgerConstructor.module.css';

const BurgerConstructor = ({ ingredients }) => {
  const { isOpen, closePopup, openPopup } = useModalReducer();

  const data = Object.values(ingredients.ingredients);

  return (
    <>
      <div className={`${styles.burger_constructor} ml-10 pl-4 pr-4`}>
        <div className='mt-25'>
          <ConstructorElement
            type='top'
            isLocked={true}
            text='Краторная булка N-200i (верх)'
            price={1255}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            extraClass='ml-6 mb-4'
          />
          <div className={styles.items}>
            {data.map((item) => {
              if (item.type === 'sauce' || item.type === 'main') {
                return (
                  <div className={`${styles.cart_item} mb-4`} key={item._id}>
                    <DragIcon type='primary' />
                    <ConstructorElement
                      text={item.name}
                      price={item.price}
                      thumbnail={item.image}
                    />
                  </div>
                );
              } else return null;
            })}
          </div>
          <ConstructorElement
            type='bottom'
            isLocked={true}
            text='Краторная булка N-200i (низ)'
            price={1255}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            extraClass='ml-6 mt-4'
          />
          <div className={`${styles.cart_controll} mt-10`}>
            <div className={`${styles.cart_price} mr-10`}>
              <div className='text text_type_digits-medium mr-2'>999</div>
              <CurrencyIcon type='primary' />
            </div>
            <Button
              htmlType='button'
              type='primary'
              size='large'
              onClick={() => openPopup()}
            >
              Нажми на меня
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal closePopup={closePopup} isOpen={isOpen}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.object,
};

export default BurgerConstructor;
