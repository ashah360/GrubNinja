import React from 'react';
import { connect } from 'react-redux';
import TrainerStatCard from './TrainerStatCard';
import energyGlobe from '../../../assets/energy.png';
import petSnack from '../../../assets/Art_Snack.png';

const TrainerStatCards = ({ energyCurrent, energyMax, currentSnacks }) => {
  const getSnackCount = () => {
    if (currentSnacks.length > 0) {
      return currentSnacks.reduce(
        (acc, current) => acc + parseInt(current.Qty),
        0
      );
    }
    return 0;
  };

  const getMegaSnackCount = () => {
    if (currentSnacks.length > 0) {
      return currentSnacks.reduce(
        (acc, current) =>
          acc + (current.AttrGains.Exp > 17 ? parseInt(current.Qty) : 0),
        0
      );
    }
    return 0;
  };

  return (
    <div className='row trainer-stat-cards'>
      <TrainerStatCard
        title='Energy'
        value={`${energyCurrent} / ${energyMax}`}
        energy={true}
        img={energyGlobe}
      />
      <TrainerStatCard
        title='Snacks'
        value={getSnackCount()}
        energy={false}
        snackQty={getMegaSnackCount()}
        img={petSnack}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  // eslint-disable-next-line
  energyCurrent: state.character.data.Energy || '0',

  energyMax: state.character.data.MaxEnergy || '0'
});

export default connect(mapStateToProps)(TrainerStatCards);
