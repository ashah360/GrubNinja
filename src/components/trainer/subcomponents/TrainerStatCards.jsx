import React from 'react';
import { connect } from 'react-redux';
import TrainerStatCard from './TrainerStatCard';
import energyGlobe from '../../../assets/energy.png';
import petSnack from '../../../assets/Art_Snack.png';

const TrainerStatCards = ({ energyCurrent, energyMax }) => {
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
        value='427'
        energy={false}
        snackQty='52'
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
