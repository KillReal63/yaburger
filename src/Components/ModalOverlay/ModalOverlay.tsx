import React from 'react';
import Modal from '../Modal/Modal';
import style from './ModalOverlay.module.css';
import { createPortal } from 'react-dom';

type ModalOverlayProps = {
  children: any;
};

const ModalOverlay = ({ children}: ModalOverlayProps) => {
  return createPortal(
    <div className={style.modal_overlay}>
      <Modal>{children}</Modal>
    </div>,
    document.body
  );
};

export default ModalOverlay;
