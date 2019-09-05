import React from 'react';
import SnackAttribute from './SnackAttribute';
import PropTypes from 'prop-types';

import expIcon from '../../../assets/icon-xp.png';

const Snack = props => {
  return (
    <div className='pet-snack'>
      <span className='badge badge-danger snack-qty'>{props.quantity}</span>
      <div className='snack-name'>{props.name}</div>
      <div className='snack-body'>
        <div className='snack-attributes'>
          {props.Strength && (
            <SnackAttribute name='strength' value={props.Strength} />
          )}

          {props.Intellect && (
            <SnackAttribute name='intellect' value={props.Intellect} />
          )}

          {props.Will && <SnackAttribute name='will' value={props.Will} />}

          {props.Agility && (
            <SnackAttribute name='agility' value={props.Agility} />
          )}

          {props.Power && <SnackAttribute name='power' value={props.Power} />}
        </div>
        <div className='snack-description'>
          <div className='snack-xp-container'>
            <img src={expIcon} alt='snack xp' />
            <div>{props.Exp} XP</div>
          </div>
          <div className='snack-school-wrapper'>
            <img
              src={require(`../../../assets/schools/${props.school.toLowerCase()}.png`)}
              alt={props.school}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Snack.propTypes = {};

export default Snack;
