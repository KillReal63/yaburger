import React from 'react';
import PropTypes from 'prop-types';
import styles from './IngredientDetails.module.css';

const IngredientDetails = ({ ...itemProps }) => {
  return (
    <div className={styles.modal_ingredient}>
      <img
        className={styles.modal_img}
        src={itemProps.image}
        alt={itemProps.name}
      />
      <span className='text text_type_main-medium mt-4 mb-8 '>
        {itemProps.name}
      </span>
      <div className={`${styles.modal_about} mb-15`}>
        <div
          className={`${styles.modal_info} text text_type_main-medium text_color_inactive mr-4`}
        >
          <span className='mb-4'>Калории,ккал</span>
          {itemProps.calories}
        </div>
        <div
          className={`${styles.modal_info} text text_type_main-medium text_color_inactive mr-4`}
        >
          <span className='mb-4'>Белки, г</span>

          {itemProps.proteins}
        </div>
        <div
          className={`${styles.modal_info} text text_type_main-medium text_color_inactive mr-4`}
        >
          <span className='mb-4'>Жиры, г</span>
          {itemProps.fat}
        </div>
        <div
          className={`${styles.modal_info} text text_type_main-medium text_color_inactive `}
        >
          <span className='mb-4'>Углеводы, г</span>
          {itemProps.carbohydrates}
        </div>
      </div>
    </div>
  );
};

IngredientDetails.propTypes = {
  itemProps: PropTypes.array,
};

export default IngredientDetails;
