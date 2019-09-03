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
          {props.strength && (
            <SnackAttribute name='strength' value={props.strength} />
          )}

          {props.intellect && (
            <SnackAttribute name='intellect' value={props.intellect} />
          )}

          {props.will && <SnackAttribute name='will' value={props.will} />}

          {props.agility && (
            <SnackAttribute name='agility' value={props.agility} />
          )}

          {props.power && <SnackAttribute name='power' value={props.power} />}
        </div>
        <div className='snack-description'>
          <div className='snack-xp-container'>
            <img src={expIcon} alt='snack xp' />
            <div>{props.xp} XP</div>
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
