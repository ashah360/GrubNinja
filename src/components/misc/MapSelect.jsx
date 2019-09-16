import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import { allMaps } from '../../constants/maps';
import setMap from '../../actions/setMap';

const background = '#1f1f22';
const foreground = '#2c2c2f';
const lightGrey = '#282830';
const carminePink = '#ff5252';

const styles = {
  container: provided => ({
    ...provided,
    fontSize: '11px',
    borderRadius: '0.375rem'
  }),
  control: provided => ({
    ...provided,
    backgroundColor: background,
    borderColor: foreground,
    borderRadius: '0.375rem',
    boxShadow: 'none',
    cursor: 'pointer',
    ':hover': {
      ...provided[':hover'],
      borderColor: foreground
    }
  }),
  indicatorSeparator: provided => ({
    ...provided,
    backgroundColor: foreground
  }),
  indicatorsContainer: provided => ({
    ...provided,
    color: 'grey'
  }),
  valueContainer: provided => ({
    ...provided,
    outline: 'none'
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: lightGrey,
    textAlign: 'left',
    cursor: state.isDisabled ? 'not-allowed' : 'default',
    color: state.isDisabled ? carminePink : '#6c757d',
    ':active': {
      ...provided[':active'],
      backgroundColor: lightGrey,
      color: 'white'
    },
    ':hover': {
      ...provided[':hover'],
      color: 'white'
    }
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: lightGrey
  })
};

const MapSelect = ({ currentMap, setMap, mapPacks }) => {
  /*
  let ownedMaps = coreMaps; 

  mapPacks.forEach(pack => {
    ownedMaps = [...ownedMaps, ...premiumMaps[pack]];
  });
  */

  const handleChange = selectedOption => {
    setMap(selectedOption.value);
    console.log(`Option selected: `, selectedOption);
  };

  return (
    <Select
      className='GrubSelect'
      classNamePrefix='GrubSelectPre'
      styles={styles}
      value={currentMap}
      onChange={handleChange}
      options={allMaps}
      placeholder={allMaps.find(map => map.value === currentMap).label}
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
