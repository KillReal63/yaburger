import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { createPortal } from 'react-dom';
import { close } from '../../Services/Slices/currentIngredient';
import { close as closeOrder } from '../../Services/Slices/order';
import { useDispatch, useSelector } from 'react-redux';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import style from './Modal.module.css';

const modal = document.getElementById('modals');

const getIsOpen = (store) => store.currentIngredient.isOpen;
const getOpen = (store) => store.order.isOpen;

const Modal = ({ children, headerInfo }) => {
  const isOpen = useSelector(getIsOpen);
  const open = useSelector(getOpen);

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
      <ModalOverlay onClick={() => allClose()} />
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
};

export default Modal;
