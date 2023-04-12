import React from 'react';
import Modal from '../Modal/Modal';
import style from './ModalOverlay.module.css';

const ModalOverlay = () => {
  return (
    <>
      <div className={style.modal_overlay} />
      <Modal />
    </>
  );
};

export default ModalOverlay;
