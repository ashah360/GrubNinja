import React from 'react';
import SnackAttribute from './SnackAttribute';
import PropTypes from 'prop-types';

import expIcon from '../../../assets/icon-xp.png';

const SnackCard = props => {
  return (
    <div className='row mb-3'>
      <div className='col'>
        <div
          className={`card pet-snack-card ${
            props.isActive ? 'active-snack' : ''
          }`}
          onClick={props.onClick}
        >
          <span className='badge badge-danger snack-qty'>{props.quantity}</span>
          <div className='snack-school-wrapper'>
            <img
              src={require(`../../../assets/schools/${props.school.toLowerCase()}.png`)}
              alt={props.school}
            />
          </div>
          <div className='pet-snack-name'>{props.name}</div>
          <img className='exp-icon' src={expIcon} alt='snack xp' />
          <div className='pet-snack-exp'>{props.Exp} XP</div>
        </div>
      </div>
    </div>
  );
};

SnackCard.propTypes = {};

export default SnackCard;
