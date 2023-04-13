import React from 'react';
import style from './ModalOverlay.module.css';

const ModalOverlay = (props) => {
  return <div className={style.modal_overlay} {...props} />;
};

export default ModalOverlay;
