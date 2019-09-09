import React from 'react';
import mapLevel from '../../../util/mapLevel';
import PropTypes from 'prop-types';

// Icons
import giftIcon from '../../../assets/Button_Gift.png';
import goldIcon from '../../../assets/Art_Gold.png';
import elixirIcon from '../../../assets/Art_Quest_Elixir.png';
import packIcon from '../../../assets/Art_Pack.png';
import reagentIcon from '../../../assets/Icon_Reagent.png';
import housingIcon from '../../../assets/Art_Housing.png';
import snackIcon from '../../../assets/Art_Snack.png';
import petIcon from '../../../assets/pet-icon.png';

const GenHistoryCard = props => {
  const mapTypeToIcon = type => {
    switch (type) {
      case 'elixir':
        return elixirIcon;
      case 'gold':
        return goldIcon;
      case 'pack':
        return packIcon;
      case 'reagent':
        return reagentIcon;
      case 'housingItem':
        return housingIcon;
      case 'snack':
        return snackIcon;
      case 'pet':
        return petIcon;
      default:
        return giftIcon;
    }
  };
  return (
    <div className='gen-history-card'>
      <img src={mapTypeToIcon(props.type.toLowerCase())} alt={props.type} />
      <div className='gen-history-card-name'>{props.name}</div>

      <div className={'gen-history-card-timestamp'}>{props.time}</div>
    </div>
  );
};

GenHistoryCard.propTypes = {};

export default GenHistoryCard;
