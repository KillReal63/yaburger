import type { XYCoord, Identifier } from 'dnd-core';
import React, { useRef, FC } from 'react';
import { useDrag, useDrop, DragSourceMonitor } from 'react-dnd';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {
  deleteIngredient,
  constructorReorder,
} from '../../Services/Slices/Cart/cart';
import { decrement } from '../../Services/Slices/Counter/counter';
import { Ingredient } from '../../Shared/Types/Ingredient';
import { useAppDispatch } from '../../Shared/Types/Store';
import styles from './BurgerConstructorElement.module.css';

type Props = {
  ingredient: Ingredient;
  index: number;
};

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const BurgerConstructorElement: FC<Props> = ({ ingredient, index }) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLLIElement>(null);

  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: 'CARD',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
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
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      dispatch(constructorReorder({ to: dragIndex, from: hoverIndex }));
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: () => {
      return { ingredient, index };
    },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  const deleteItem = (item: Ingredient) => {
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
