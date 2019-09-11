import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';
import { allMaps } from '../../../constants/maps';

// Icons
import giftIcon from '../../../assets/Button_Gift.png';
import goldIcon from '../../../assets/Art_Gold.png';
import elixirIcon from '../../../assets/Art_Quest_Elixir.png';
import packIcon from '../../../assets/Art_Pack.png';
import reagentIcon from '../../../assets/Icon_Reagent.png';
import housingIcon from '../../../assets/Art_Housing.png';
import snackIcon from '../../../assets/Art_Snack.png';
import petIcon from '../../../assets/pet-icon.png';

const mapTypeToIcon = type => {
  switch (type) {
    case 'Elixir':
      return elixirIcon;
    case 'Gold':
      return goldIcon;
    case 'Pack':
      return packIcon;
    case 'Reagent':
      return reagentIcon;
    case 'Housing':
      return housingIcon;
    case 'Snack':
      return snackIcon;
    case 'Pet':
      return petIcon;
    default:
      return giftIcon;
  }
};

const convertMapId = mapId =>
  allMaps.find(map => map.value === mapId).label || 'Unknown Map';

const GenHistoryCard = props => {
  return (
    <div className='gen-history-card'>
      <img src={mapTypeToIcon(props.type)} alt={props.type} />
      <div className='gen-history-card-name'>{props.name}</div>
      <div className='gen-history-card-score'>{props.score}</div>
      <div className='gen-history-card-map'>{convertMapId(props.map)}</div>
      <div className={'gen-history-card-timestamp'}>
        <TimeAgo date={props.timestamp} />
      </div>
    </div>
  );
};

GenHistoryCard.propTypes = {};

export default GenHistoryCard;
