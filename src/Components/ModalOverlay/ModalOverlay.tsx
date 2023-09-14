import React from 'react';
import style from './ModalOverlay.module.css';

const ModalOverlay = (props: any) => {
  return <div className={style.modal_overlay} {...props} />;
};

export default ModalOverlay;
