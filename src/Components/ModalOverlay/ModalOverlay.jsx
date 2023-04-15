import React from 'react';
import style from './ModalOverlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = (props) => {
  return <div className={style.modal_overlay} {...props} />;
};

ModalOverlay.propTypes = {
  props: PropTypes.element,
};

export default ModalOverlay;
