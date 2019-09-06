import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import { coreMaps, premiumMaps } from '../../constants/maps';
import setMap from '../../actions/setMap';

const customStyles = {
  container: provided => ({
    ...provided,
    fontSize: '11px',
    outline: 'none !important',
    boxShadow: 'none !important',
    borderRadius: '4px'
  }),
  control: provided => ({
    ...provided,
    backgroundColor: '#1f1f22',
    borderColor: '#2c2c2f',
    borderRadius: '4px',
    boxShadow: 'none',
    cursor: 'pointer',
    ':hover': {
      ...provided[':hover'],
      borderColor: '#2c2c2f'
    }
  }),
  indicatorSeparator: provided => ({
    ...provided,
    backgroundColor: '#2c2c2f'
  }),
  indicatorsContainer: provided => ({
    ...provided,
    color: '#2c2c2f'
  }),
  valueContainer: provided => ({
    ...provided,
    outline: 'none'
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: '#282830',
    textAlign: 'left',
    cursor: state.isDisabled ? 'not-allowed' : 'pointer',
    color: state.isDisabled ? '#ff5252' : '#6c757d',
    ':active': {
      ...provided[':active'],
      backgroundColor: '#282830'
    }
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: '#282830'
  })
};

const MapSelect = ({ currentMap, setMap, mapPacks }) => {
  let ownedMaps = coreMaps; // User owns core maps by default

  // Allow user to select premium maps if they own them
  mapPacks.forEach(pack => {
    ownedMaps = [...ownedMaps, ...premiumMaps[pack]];
  });

  const handleChange = selectedOption => {
    setMap(selectedOption.value);
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <Select
      className='GrubSelect'
      classNamePrefix='GrubSelectPre'
      styles={customStyles}
      value={currentMap}
      onChange={handleChange}
      options={ownedMaps}
      placeholder={ownedMaps.find(map => map.value === currentMap).label}
    />
  );
};

MapSelect.propTypes = {
  currentMap: PropTypes.string.isRequired,
  setMap: PropTypes.func.isRequired,
  mapPacks: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  currentMap: state.game.mapId,
  mapPacks: state.user.maps
});

export default connect(
  mapStateToProps,
  { setMap }
)(MapSelect);
