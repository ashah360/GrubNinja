import React from 'react';
import PropTypes from 'prop-types';

import expIcon from '../../../assets/icon-xp.png';

const PetExpBar = ({ current, max }) => {
  let ratio = Math.round((current / max) * 100).toString();
  return (
    <div className='row exp-row mt-4'>
      <div className='col xp-wrapper'>
        <img src={expIcon} alt='experience' />
        <div className='progress'>
          <div
            className='progress-bar progress-bar-striped progress-bar-animated bg-info'
            id='xp-bar'
            role='progressbar'
            style={{ width: `${ratio}%` }}
            aria-valuenow={ratio}
            aria-valuemin='0'
            aria-valuemax='100'
          ></div>
        </div>
        <div id='pet-exp'>
          {current}/{max}
        </div>
      </div>
    </div>
  );
};

PetExpBar.propTypes = {};

export default PetExpBar;
