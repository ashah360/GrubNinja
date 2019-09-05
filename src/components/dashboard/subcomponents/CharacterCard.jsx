import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = props => {
  return (
    <div
      className={`character-card ${props.activeCharacter === props.charId &&
        'card-active'}`}
      onClick={props.onClick}
    >
      <img
        src={require(`../../../assets/schools/${props.school.toLowerCase()}.png`)}
        alt={props.school}
      />
      <div className='pet-card-name sff'>
        {props.name} ({props.level})
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  school: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default CharacterCard;
