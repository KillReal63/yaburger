import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styles from './IngredientInfo.module.css';

export const IngredientPage = () => {
  const { pathname } = useLocation();

  const id = pathname.replace('/ingredients/', '');

  const { data } = useSelector((store) => ({
    data: store.ingredients.data,
  }));

  const ingredient = data.find((item) => item._id === id);

  if (data.length === 0) return <div>Loading...</div>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal_ingredient}>
        <img
          className={styles.modal_img}
          src={ingredient.image}
          alt={ingredient.name}
        />
        <span className='text text_type_main-medium mt-4 mb-8 '>
          {ingredient.name}
        </span>
        <div className={`${styles.modal_about} mb-15`}>
          <div
            className={`${styles.modal_info} text text_type_main-medium text_color_inactive mr-4`}
          >
            <span className='mb-4'>Калории,ккал</span>
            {ingredient.calories}
          </div>
          <div
            className={`${styles.modal_info} text text_type_main-medium text_color_inactive mr-4`}
          >
            <span className='mb-4'>Белки, г</span>

            {ingredient.proteins}
          </div>
          <div
            className={`${styles.modal_info} text text_type_main-medium text_color_inactive mr-4`}
          >
            <span className='mb-4'>Жиры, г</span>
            {ingredient.fat}
          </div>
          <div
            className={`${styles.modal_info} text text_type_main-medium text_color_inactive `}
          >
            <span className='mb-4'>Углеводы, г</span>
            {ingredient.carbohydrates}
          </div>
        </div>
      </div>
    </div>
  );
};
