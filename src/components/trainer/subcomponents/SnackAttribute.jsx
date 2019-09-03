import React from 'react';
import PropTypes from 'prop-types';

const SnackAttribute = ({ name, value }) => {
  name = name.toLowerCase();
  return (
    <div className='snack-attribute'>
      <div className='snack-attr-number'>+{value}</div>
      <img src={require(`../../../assets/training/${name}.png`)} alt={name} />
    </div>
  );
};

SnackAttribute.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default SnackAttribute;
