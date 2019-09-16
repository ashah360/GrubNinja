import React from 'react';
import unescape from '../../../util/unescape';
import PropTypes from 'prop-types';

const Talent = ({ name }) => {
  return (
    <div className='talent'>
      <div className={`dot ${name ? 'green' : 'red'}-dot`}></div>
      <div className='talent-name'>{name ? unescape(name) : '???'}</div>
    </div>
  );
};

Talent.propTypes = {
  name: PropTypes.string
};

export default Talent;
