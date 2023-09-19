import React, { useEffect, FC, ReactNode } from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { Store } from '../../Shared/Types/Store';
import style from './Modal.module.css';

const modal = document.getElementById('modals') as HTMLElement;

const getIsOpen = (store: Store) => store.currentIngredient.isOpen;
const getOpen = (store: Store) => store.order.isOpen;

type Props = {
  onClose: () => void;
  children: ReactNode;
  title: string;
};

const Modal: FC<Props> = ({ onClose, children, title }) => {
  const isOpen = useSelector(getIsOpen);
  const open = useSelector(getOpen);

  useEffect(() => {
    const closeByEscape = (event: KeyboardEvent) => {
      console.log(event);

      if (event.key === 'Escape') {
        onClose();
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
      <ModalOverlay onClick={() => onClose()} />
      <div className={style.modal}>
        <header
          className={`${style.modal_header} text text_type_main-large mt-10`}
        >
          {title}
          <CloseIcon type='primary' onClick={() => onClose()} />
        </header>
        <div>{children}</div>
      </div>
    </>,
    modal
  );
};

export default Modal;
