import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { open } from '../../Services/Slices/currentIngredient';
import IngredientItem from '../IngredientItem/IngredientItem';
import styles from './Ingredients.module.css';

const categories = [
  { name: 'Булки', slug: 'bun' },
  { name: 'Соусы', slug: 'sauce' },
  { name: 'Начинки', slug: 'main' },
];

const Ingredients = ({ refs }) => {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((store) => ({
    data: store.ingredients.data,
  }));

  const setModalItem = (item) => {
    dispatch(open(item));
  };

  if (loading || data.length === 0) return <div>...Loading</div>;

  return (
    <div className={styles.ingredients}>
      {categories.map(({ name, slug }) =>
        slug === 'bun' ? (
          <section key={name} ref={refs.bunsRef}>
            <span className='text text_type_main-medium'>{name}</span>
            <div className={`${styles.categories} pl-4 pr-4`}>
              {data
                .filter((item) => item.type === slug)
                .map((item) => (
                  <IngredientItem
                    key={uuidv4()}
                    onClick={() => setModalItem(item)}
                    {...item}
                  />
                ))}
            </div>
          </section>
        ) : slug === 'sauce' ? (
          <section key={name} ref={refs.saucesRef}>
            <span className='text text_type_main-medium'>{name}</span>
            <div className={`${styles.categories} pl-4 pr-4`}>
              {data
                .filter((item) => item.type === slug)
                .map((item) => (
                  <IngredientItem
                    key={uuidv4()}
                    onClick={() => setModalItem(item)}
                    {...item}
                  />
                ))}
            </div>
          </section>
        ) : (
          <section key={name} ref={refs.mainsRef}>
            <span className='text text_type_main-medium'>{name}</span>
            <div className={`${styles.categories} pl-4 pr-4`}>
              {data
                .filter((item) => item.type === slug)
                .map((item) => (
                  <IngredientItem
                    key={uuidv4()}
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
