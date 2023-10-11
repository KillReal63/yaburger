import React from 'react';
import { useSelector } from 'react-redux';
import { open } from '../../Services/Slices/currentIngredient';
import IngredientItem from '../IngredientItem/IngredientItem';
import { Ingredient } from '../../Shared/Types/Ingredient';
import { text_medium } from '../../Shared/Typography';
import { RootState, useAppDispatch } from '../../Shared/Types/Store';
import styles from './Ingredients.module.css';

const categories = [
  { name: 'Булки', slug: 'bun' },
  { name: 'Соусы', slug: 'sauce' },
  { name: 'Начинки', slug: 'main' },
];

type RefsType = {
  bunsRef: () => void;
  saucesRef: () => void;
  mainsRef: () => void;
};

const getData = (store: RootState) => store.ingredients.data;
const getLoading = (store: RootState) => store.ingredients.loading;

const Ingredients = ({ refs }: { refs: RefsType }) => {
  const dispatch = useAppDispatch();

  const data = useSelector(getData);
  const loading = useSelector(getLoading);

  const setModalItem = (item: Ingredient) => {
    dispatch(open(item));
  };

  if (loading || data.length === 0) return <div>...Loading</div>;

  return (
    <div className={`${styles.ingredients} ${styles.custom_scroll}`}>
      {categories.map(({ name, slug }) =>
        slug === 'bun' ? (
          <section key={name} ref={refs.bunsRef}>
            <span className={text_medium}>{name}</span>
            <div className={`${styles.categories} pl-4 pr-4`}>
              {data
                .filter((item) => item.type === slug)
                .map((item) => (
                  <IngredientItem
                    key={item._id}
                    onClick={() => setModalItem(item)}
                    {...item}
                  />
                ))}
            </div>
          </section>
        ) : slug === 'sauce' ? (
          <section key={name} ref={refs.saucesRef}>
            <span className={text_medium}>{name}</span>
            <div className={`${styles.categories} pl-4 pr-4`}>
              {data
                .filter((item) => item.type === slug)
                .map((item) => (
                  <IngredientItem
                    key={item._id}
                    onClick={() => setModalItem(item)}
                    {...item}
                  />
                ))}
            </div>
          </section>
        ) : (
          <section key={name} ref={refs.mainsRef}>
            <span className={text_medium}>{name}</span>
            <div className={`${styles.categories} pl-4 pr-4`}>
              {data
                .filter((item) => item.type === slug)
                .map((item) => (
                  <IngredientItem
                    key={item._id}
                    onClick={() => setModalItem(item)}
                    {...item}
                  />
                ))}
            </div>
          </section>
        )
      )}
    </div>
  );
};

export default Ingredients;
