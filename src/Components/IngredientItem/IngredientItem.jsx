import React from 'react';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';
import styles from './IngredientItem.module.css';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const IngredientItem = ({ onClick, _id, image, name, price, type }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'box',
    item: { id: _id, image, name, price, type, unID: uuidv4() },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;

  const { ids } = useSelector((store) => store.counter);

  return type !== 'bun' ? (
    <div
      className={`${styles.item} mt-6 mb-10`}
      onClick={onClick}
      ref={drag}
      data-testid={`box`}
      style={{ opacity }}
    >
      <img
        src={image}
        alt={name}
        className={`${styles.ingredient_image} mr-4 ml-4`}
      />
      <Counter
        count={ids.filter((item) => item === _id).length}
        size='default'
        extraClass={styles.counter}
      />
      <div
        className={`${styles.price} text text_type_digits-default mt-1 mb-1`}
      >
        <span className='mr-2'>{price}</span>
        <CurrencyIcon type='primary' />
      </div>
      <span className={`${styles.ingredient_name} text text_type_main-default`}>
        {name}
      </span>
    </div>
  ) : (
    <div
      className={`${styles.item} mt-6 mb-10`}
      onClick={onClick}
      ref={drag}
      data-testid={`box`}
      style={{ opacity }}
    >
      <img
        src={image}
        alt={name}
        className={`${styles.ingredient_image} mr-4 ml-4`}
      />
      <div
        className={`${styles.price} text text_type_digits-default mt-1 mb-1`}
      >
        <span className='mr-2'>{price}</span>
        <CurrencyIcon type='primary' />
      </div>
      <span className={`${styles.ingredient_name} text text_type_main-default`}>
        {name}
      </span>
    </div>
  );
};

export default IngredientItem;
