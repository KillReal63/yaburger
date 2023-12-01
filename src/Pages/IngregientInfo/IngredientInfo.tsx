import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { text_inactive_medium, text_medium } from '../../Shared/Typography';
import { getData } from '../../Services/Slices/Ingredients/ingredientsSelectors';
import styles from './IngredientInfo.module.css';

export const IngredientPage = () => {
  const { pathname } = useLocation();

  const id = pathname.replace('/ingredients/', '');

  const data = useSelector(getData);

  const ingredient = data.find((item) => item._id === id);

  if (data.length === 0) return <div>Loading...</div>;

  if (ingredient !== undefined) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.modal_ingredient}>
          <img
            className={styles.modal_img}
            src={ingredient.image}
            alt={ingredient.name}
          />
          <span className={`${text_medium} mt-4 mb-8 `}>{ingredient.name}</span>
          <div className={`${styles.modal_about} mb-15`}>
            <div
              className={`${styles.modal_info} ${text_inactive_medium} mr-4`}
            >
              <span className='mb-4'>Калории,ккал</span>
              {ingredient.calories}
            </div>
            <div
              className={`${styles.modal_info} ${text_inactive_medium} mr-4`}
            >
              <span className='mb-4'>Белки, г</span>

              {ingredient.proteins}
            </div>
            <div
              className={`${styles.modal_info} ${text_inactive_medium} mr-4`}
            >
              <span className='mb-4'>Жиры, г</span>
              {ingredient.fat}
            </div>
            <div className={`${styles.modal_info} ${text_inactive_medium} `}>
              <span className='mb-4'>Углеводы, г</span>
              {ingredient.carbohydrates}
            </div>
          </div>
        </div>
      </div>
    );
  } else return <div>Loading...</div>;
};
