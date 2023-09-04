import React from 'react';
import styles from './IngredientDetails.module.css';
import { useSelector } from 'react-redux';

const IngredientDetails = () => {
  const currentIngredient = useSelector(
    (store) => store.currentIngredient.ingredient
  );

  return (
    <div className={styles.modal_ingredient}>
      <img
        className={styles.modal_img}
        src={currentIngredient.image}
        alt={currentIngredient.name}
      />
      <span className='text text_type_main-medium mt-4 mb-8 '>
        {currentIngredient.name}
      </span>
      <div className={`${styles.modal_about} mb-15`}>
        <div
          className={`${styles.modal_info} text text_type_main-medium text_color_inactive mr-4`}
        >
          <span className='mb-4'>Калории,ккал</span>
          {currentIngredient.calories}
        </div>
        <div
          className={`${styles.modal_info} text text_type_main-medium text_color_inactive mr-4`}
        >
          <span className='mb-4'>Белки, г</span>

          {currentIngredient.proteins}
        </div>
        <div
          className={`${styles.modal_info} text text_type_main-medium text_color_inactive mr-4`}
        >
          <span className='mb-4'>Жиры, г</span>
          {currentIngredient.fat}
        </div>
        <div
          className={`${styles.modal_info} text text_type_main-medium text_color_inactive `}
        >
          <span className='mb-4'>Углеводы, г</span>
          {currentIngredient.carbohydrates}
        </div>
      </div>
    </div>
  );
};

export default IngredientDetails;
