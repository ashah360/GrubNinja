import React from 'react';
import PropTypes from 'prop-types';

const Talent = ({ name }) => {
  return (
    <div className='talent'>
      <div className={`dot ${name ? 'green' : 'red'}-dot`}></div>
      <div className='talent-name'>{name ? name : '???'}</div>
    </div>
  );
};

Talent.propTypes = {
  name: PropTypes.string
};

export default Talent;
