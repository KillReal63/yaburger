import React, { useEffect, FC, PropsWithChildren } from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { createPortal } from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { digits_medium, text_large } from '../../Shared/Typography';
import style from './Modal.module.css';

const modal = document.getElementById('modals') as HTMLElement;

type Props = {
  onClose: () => void;
  title?: string | number;
  open: boolean;
};

const Modal: FC<PropsWithChildren<Props>> = ({
  onClose,
  children,
  title,
  open,
}) => {
  useEffect(() => {
    const closeByEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      };
    }
  }, []);

  return createPortal(
    <>
      <ModalOverlay onClick={() => onClose()} />
      <div className={style.modal}>
        <header className={`${style.modal_header} ${text_large} mt-10`}>
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
