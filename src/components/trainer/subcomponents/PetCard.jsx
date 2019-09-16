import React from 'react';
import mapLevel from '../../../util/mapLevel';

const PetCard = props => {
  const petLevel = mapLevel(props.level);
  return (
    <div className='pet-card' onClick={props.onClick}>
      <img
        src={require(`../../../assets/schools/${props.school.toLowerCase()}.png`)}
        alt={props.school}
      />
      <div className='pet-card-name'>
        {props.name} ({props.type})
      </div>

      <div className={`pet-card-level ${petLevel.toLowerCase()}`}>
        {petLevel}
      </div>
    </div>
  );
};

PetCard.propTypes = {};

export default PetCard;
