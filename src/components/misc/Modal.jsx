import React from 'react';
import Rodal from 'rodal';
import PropTypes from 'prop-types';

const Modal = props => {
  return (
    <Rodal
      width={500}
      height={300}
      duration={300}
      visible={props.visible}
      onClose={0}
    >
      {props.children}
    </Rodal>
  );
};

Modal.propTypes = {};

export default Modal;
