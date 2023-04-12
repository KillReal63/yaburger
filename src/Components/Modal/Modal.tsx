//@ts-nocheck
import React, { useEffect } from 'react';
import style from './Modal.module.css';
import { useModalReducer } from '../../Hooks/useModalReducer';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { createPortal } from 'react-dom';

const modalHTML = document.getElementById('modals');

const Modal = ({ children, headerInfo }: { children?: React.ReactNode }) => {
  const { closePopup, isOpen } = useModalReducer();
  
  
  useEffect(() => {
    const closeByEscape = (event: any) => {
      if (event.keys === 'Escape') {
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
      {/* <ModalOverlay onClick={closePopup}/> */}
      <div className={style.modal}>
        <header className={`${style.modal_header} text text_type_main-large`}>
          {headerInfo}
          <CloseIcon type='primary' onClick={console.log('exit')} />
        </header>
        <div>{children}</div>
      </div>
    </>,
    modalHTML
  );
};

export default Modal;
