//@ts-nocheck

import React, { useEffect } from 'react';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';

const modal = document.getElementById('modals');

const Modal = ({
  children,
  headerInfo,
  closePopup,
  isOpen,
}: {
  children?: React.ReactNode;
}) => {
  useEffect(() => {
    const closeByEscape = (event) => {
      if (event.key === 'Escape') {
        closePopup();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      };
    }
  }, [isOpen]);

  return createPortal(
    <>
      <ModalOverlay onClick={closePopup} />
      <div className={style.modal}>
        <header
          className={`${style.modal_header} text text_type_main-large mt-10`}
        >
          {headerInfo}

          <CloseIcon type='primary' onClick={closePopup} />
        </header>
        <div>{children}</div>
      </div>
    </>,
    modal
  );
};

export default Modal;
