import React from 'react';
import styles from './IngredientDetails.module.css';
import { useSelector } from 'react-redux';

const IngredientDetails = () => {
  const { compound } = useSelector((store) => store.currentIngredient);

  return (
    <div className={styles.modal_ingredient}>
      <img
        className={styles.modal_img}
        src={compound.image}
        alt={compound.name}
      />
      <span className='text text_type_main-medium mt-4 mb-8 '>
        {compound.name}
      </span>
      <div className={`${styles.modal_about} mb-15`}>
        <div
          className={`${styles.modal_info} text text_type_main-medium text_color_inactive mr-4`}
        >
          <span className='mb-4'>Калории,ккал</span>
          {compound.calories}
        </div>
        <div
          className={`${styles.modal_info} text text_type_main-medium text_color_inactive mr-4`}
        >
          <span className='mb-4'>Белки, г</span>

          {compound.proteins}
        </div>
        <div
          className={`${styles.modal_info} text text_type_main-medium text_color_inactive mr-4`}
        >
          <span className='mb-4'>Жиры, г</span>
          {compound.fat}
        </div>
        <div
          className={`${styles.modal_info} text text_type_main-medium text_color_inactive `}
        >
          <span className='mb-4'>Углеводы, г</span>
          {compound.carbohydrates}
        </div>
      </div>
    </div>
  );
};

export default IngredientDetails;
