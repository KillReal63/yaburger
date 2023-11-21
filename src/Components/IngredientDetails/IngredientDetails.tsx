import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { text_inactive, text_medium } from '../../Shared/Typography';
import { getData } from '../../Services/Slices/Ingredients/ingredientsSelectors';
import styles from './IngredientDetails.module.css';

const IngredientDetails = () => {
  const { id } = useParams();

  const data = useSelector(getData);

  const ingredient = data.find((item) => item._id === id);

  if (!ingredient) return <div>Loading...</div>;

  return (
    <div className={styles.modal_ingredient}>
      <img
        className={styles.modal_img}
        src={ingredient.image}
        alt={ingredient.name}
      />
      <p className={`${text_medium} mt-4 mb-8 `}>{ingredient.name}</p>
      <div className={`${styles.modal_about} mb-15`}>
        <div className={`${styles.modal_info} ${text_inactive} mr-4`}>
          <p className='mb-4'>Калории,ккал</p>
          {ingredient.calories}
        </div>
        <div className={`${styles.modal_info} ${text_inactive} mr-4`}>
          <p className='mb-4'>Белки, г</p>
          {ingredient.proteins}
        </div>
        <div className={`${styles.modal_info} ${text_inactive} mr-4`}>
          <p className='mb-4'>Жиры, г</p>
          {ingredient.fat}
        </div>
        <div className={`${styles.modal_info} ${text_inactive} `}>
          <p className='mb-4'>Углеводы, г</p>
          {ingredient.carbohydrates}
        </div>
      </div>
    </div>
  );
};

export default IngredientDetails;
