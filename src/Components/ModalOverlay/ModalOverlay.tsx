import React, { HTMLProps } from 'react';
import styles from './ModalOverlay.module.css';

type ModalOverlayProps = HTMLProps<HTMLDivElement>;
const ModalOverlay = (props: ModalOverlayProps) => {
  return <div className={styles.modal_overlay} {...props} />;
};

export default ModalOverlay;
