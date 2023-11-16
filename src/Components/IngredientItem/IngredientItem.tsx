import React, { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';

import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { RootState } from '../../Shared/Types/Store';
import { Ingredient } from '../../Shared/Types/Ingredient';
import { ingredientsPath } from '../../Shared/path';
import { digits_default, text_default } from '../../Shared/Typography';
import styles from './IngredientItem.module.css';

const getIds = (state: RootState) => state.counter.ids;
const getBun = (state: RootState) => state.cart.bun;

type Props = Ingredient & {
  onClick: () => void;
};

const IngredientItem: FC<Props> = ({
  onClick,
  _id,
  image,
  name,
  price,
  type,
}) => {
  const ids = useSelector(getIds);
  const bun = useSelector(getBun);
  const location = useLocation();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'box',
    item: { id: _id, image, name, price, type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const opacity = isDragging ? 0.4 : 1;

  return type !== 'bun' ? (
    <Link
      className={`${styles.item} mt-6 mb-10`}
      onClick={onClick}
      ref={drag}
      data-testid={`box`}
      style={{ opacity }}
      to={`${ingredientsPath}/${_id}`}
      state={{ background: location }}
    >
      <img
        src={image}
        alt={name}
        className={`${styles.ingredient_image} mr-4 ml-4`}
      />
      {ids.filter((item) => item === _id).length !== 0 ? (
        <Counter
          count={ids.filter((item) => item === _id).length}
          size='default'
          extraClass={styles.counter}
        />
      ) : null}
      <div className={`${styles.price} ${digits_default} mt-1 mb-1`}>
        <span className='mr-2'>{price}</span>
        <CurrencyIcon type='primary' />
      </div>
      <span className={`${styles.ingredient_name} ${text_default}`}>
        {name}
      </span>
    </Link>
  ) : (
    <Link
      className={`${styles.item} mt-6 mb-10`}
      onClick={onClick}
      ref={drag}
      data-testid={`box`}
      style={{ opacity }}
      to={`${ingredientsPath}/${_id}`}
      state={{ background: location }}
    >
      <img
        src={image}
        alt={name}
        className={`${styles.ingredient_image} mr-4 ml-4`}
      />
      {Object.keys(bun).length > 4 && bun.id === _id ? (
        <Counter count={2} size='default' extraClass={styles.counter} />
      ) : null}
      <div className={`${styles.price} ${digits_default} mt-1 mb-1`}>
        <span className='mr-2'>{price}</span>
        <CurrencyIcon type='primary' />
      </div>
      <span className={`${styles.ingredient_name} ${text_default}`}>
        {name}
      </span>
    </Link>
  );
};

export default IngredientItem;
