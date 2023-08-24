import React from 'react';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import {
  deleteIngredient,
  constructorReorder,
} from '../../Services/Slices/cart';
import { decrement } from '../../Services/Slices/counter';
import styles from './BurgerConstructorElement.module.css';

const BurgerConstructorElement = ({ ingredient, index }) => {
  const dispatch = useDispatch();

  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: 'CARD',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect =
        ref.current && ref.current.getBoundingClientRect();
      const hoverMiddleY =
        hoverBoundingRect &&
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      dispatch(constructorReorder({to: dragIndex, from: hoverIndex}));
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: () => {
      return { ingredient, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  const deleteItem = (item) => {
    if (item.type !== 'bun') {
      dispatch(deleteIngredient(item));
      dispatch(decrement(item.id));
    }
  };

  return ingredient.type === 'sauce' || ingredient.type === 'main' ? (
    <li
      className={`${styles.cart_item} mb-4`}
      style={{ opacity }}
      data-handler-id={handlerId}
      ref={ref}
    >
      <DragIcon type='primary' />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => deleteItem(ingredient)}
      />
    </li>
  ) : null;
};

export default BurgerConstructorElement;
