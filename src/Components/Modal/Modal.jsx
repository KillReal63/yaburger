import React, { useEffect } from 'react';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { close } from '../../Services/Slices/currentIngredient';
import { close as closeOrder } from '../../Services/Slices/order';
import style from './Modal.module.css';
import { useDispatch, useSelector } from 'react-redux';

const modal = document.getElementById('modals');

const Modal = ({ children, headerInfo }) => {
  const { isOpen, open } = useSelector((store) => ({
    isOpen: store.currentIngredient.isOpen,
    open: store.order.isOpen,
  }));

  const dispatch = useDispatch();

  const allClose = () => {
    dispatch(close());
    dispatch(closeOrder());
  };

  useEffect(() => {
    const closeByEscape = (event) => {
      if (event.key === 'Escape') {
        allClose();
      }
    };

    if (isOpen || open) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      };
    }
  }, [isOpen]);

  return createPortal(
    <>
      <ModalOverlay onClick={() => dispatch(close())} />
      <div className={style.modal}>
        <header
          className={`${style.modal_header} text text_type_main-large mt-10`}
        >
          {headerInfo}
          <CloseIcon type='primary' onClick={() => allClose()} />
        </header>
        <div>{children}</div>
      </div>
    </>,
    modal
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  headerInfo: PropTypes.string,
  closePopup: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Modal;
