import React, { HTMLProps } from 'react';
import style from './ModalOverlay.module.css';

type ModalOverlayProps = HTMLProps<HTMLDivElement>;
const ModalOverlay = (props: ModalOverlayProps) => {
  return <div className={style.modal_overlay} {...props} />;
};

export default ModalOverlay;
