import React from 'react';
import style from './Modal.module.css';

const Modal = ({ children }: { children?: React.ReactNode }) => {
  return <div className={style.modal}>{children}</div>;
};

export default Modal;
