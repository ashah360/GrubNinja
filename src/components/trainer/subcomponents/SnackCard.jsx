import React from 'react';

import expIcon from '../../../assets/icon-xp.png';

const SnackCard = props => {
  return (
    <div
      className={`pet-snack-card ${props.isActive ? 'active-snack' : ''}`}
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
  );
};

SnackCard.propTypes = {};

export default SnackCard;
