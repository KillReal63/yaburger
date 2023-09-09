import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { v4 as uuidv4 } from 'uuid';
import styles from './IngredientItem.module.css';

const getIds = (state) => state.counter.ids;
const getBun = (state) => state.cart.bun;

const IngredientItem = ({ onClick, _id, image, name, price, type }) => {
  const ids = useSelector(getIds);
  const bun = useSelector(getBun);
  const location = useLocation();


  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'box',
    item: { id: _id, image, name, price, type, unID: uuidv4() },
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
      to={`ingredients/${_id}`}
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
      <div
        className={`${styles.price} text text_type_digits-default mt-1 mb-1`}
      >
        <span className='mr-2'>{price}</span>
        <CurrencyIcon type='primary' />
      </div>
      <span className={`${styles.ingredient_name} text text_type_main-default`}>
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
      to={`/ingredients/${_id}`}
      state={{ background: location }}
    >
      <img
        src={image}
        alt={name}
        className={`${styles.ingredient_image} mr-4 ml-4`}
      />
      {Object.keys(bun).length > 1 ? (
        <Counter
          count={bun.id === _id ? 2 : <></>}
          size='default'
          extraClass={styles.counter}
        />
      ) : null}
      <div
        className={`${styles.price} text text_type_digits-default mt-1 mb-1`}
      >
        <span className='mr-2'>{price}</span>
        <CurrencyIcon type='primary' />
      </div>
      <span className={`${styles.ingredient_name} text text_type_main-default`}>
        {name}
      </span>
    </Link>
  );
};

IngredientItem.propTypes = {
  onClick: PropTypes.func,
  _id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.string,
};

export default IngredientItem;
