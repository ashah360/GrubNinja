import React from 'react';
import PropTypes from 'prop-types';

const PetCard = props => {
  return (
    <div className='pet-card'>
      <img
        src={require(`../../../assets/schools/${props.school.toLowerCase()}.png`)}
        alt={props.school}
      />
      <div className='pet-card-name'>
        {props.name} ({props.type})
      </div>

      <div className={`pet-card-level ${props.level.toLowerCase()}`}>
        {props.level}
      </div>
    </div>
  );
};

PetCard.propTypes = {};

export default PetCard;
