import React from 'react';
import styles from './IngredientInfo.module.css';

export const IngredientPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal_ingredient}>
        <h1>Детали Ингредиента</h1>
        <img
          className={styles.modal_img}
          src={'https://code.s3.yandex.net/react/code/meat-01.png'}
          alt={'Биокотлета из марсианской Магнолии'}
        />
        <span className='text text_type_main-medium mt-4 mb-8 '>
          Биокотлета из марсианской Магнолии
        </span>
        <div className={`${styles.modal_about} mb-15`}>
          <div
            className={`${styles.modal_info} text text_type_main-medium text_color_inactive mr-4`}
          >
            <span className='mb-4'>Калории,ккал</span>
            4242
          </div>
          <div
            className={`${styles.modal_info} text text_type_main-medium text_color_inactive mr-4`}
          >
            <span className='mb-4'>Белки, г</span>
            420
          </div>
          <div
            className={`${styles.modal_info} text text_type_main-medium text_color_inactive mr-4`}
          >
            <span className='mb-4'>Жиры, г</span>
            142
          </div>
          <div
            className={`${styles.modal_info} text text_type_main-medium text_color_inactive `}
          >
            <span className='mb-4'>Углеводы, г</span>
            242
          </div>
        </div>
      </div>
    </div>
  );
};
