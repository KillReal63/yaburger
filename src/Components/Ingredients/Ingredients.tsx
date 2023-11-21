import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTransition, useSpringRef, animated } from '@react-spring/web';
import { open } from '../../Services/Slices/CurrentIngredient/currentIngredient';
import IngredientItem from '../IngredientItem/IngredientItem';
import { Ingredient } from '../../Shared/Types/Ingredient';
import { text_medium } from '../../Shared/Typography';
import { RootState, useAppDispatch } from '../../Shared/Types/Store';
import styles from './Ingredients.module.css';

type Refs = Record<string, () => void>;

const categories = [
  { name: 'Булки', slug: 'bun' },
  { name: 'Соусы', slug: 'sauce' },
  { name: 'Начинки', slug: 'main' },
];

const getData = (store: RootState) => store.ingredients.data;
const getLoading = (store: RootState) => store.ingredients.loading;

const Ingredients = ({ refs }: { refs: Refs }) => {
  const dispatch = useAppDispatch();

  const data = useSelector(getData);
  const loading = useSelector(getLoading);

  const springRef = useSpringRef();

  let activeIndex = 0;

  const setModalItem = (item: Ingredient) => {
    dispatch(open(item));
  };

  const transitions = useTransition(activeIndex, {
    from: {
      clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)',
    },
    enter: {
      clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
    },
    exitBeforeEnter: true,
    config: {
      duration: 2000,
    },
    delay: 300,
    ref: springRef,
  });

  useLayoutEffect(() => {
    springRef.start();
  }, [activeIndex]);

  if (loading || data.length === 0) return <div>...Loading</div>;

  return (
    <div className={`${styles.ingredients} ${styles.custom_scroll}`}>
      {categories.map(({ name, slug }) => {
        const ref = refs[slug];
        return (
          <section key={slug} ref={ref}>
            <span className={text_medium}>{name}</span>
            <div className={`${styles.categories} pl-4 pr-4`}>
              {data
                .filter((item) => item.type === slug)
                .map((item) =>
                  transitions((springs) => (
                    <animated.div key={item._id} style={springs}>
                      <IngredientItem
                        onClick={() => setModalItem(item)}
                        {...item}
                      />
                    </animated.div>
                  ))
                )}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Ingredients;
