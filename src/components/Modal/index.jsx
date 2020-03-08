import React from 'react';
import PropTypes from 'prop-types';
import { StyledModal } from './style';

export const Modal = ({ children, ...props }) => (
  <StyledModal {...props}>
    <h1>{props.title}</h1>
    <button onClick={props.onClose} name="close">
      Close
    </button>
    {children}
  </StyledModal>
);

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  onClose: PropTypes.func,
};
