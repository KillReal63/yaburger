import React from 'react';
import style from './ModalOverlay.module.css';

const ModalOverlay = ({ ...otherProps }) => {
  return <div className={style.modal_overlay} {...otherProps} />;
};

export default ModalOverlay;
