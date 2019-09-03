import React from 'react';
import TrainerStatCard from './TrainerStatCard';
import energyGlobe from '../../../assets/energy.png';
import petSnack from '../../../assets/Art_Snack.png';

const TrainerStatCards = () => {
  return (
    <div className='row trainer-stat-cards'>
      <TrainerStatCard
        title='Energy'
        value='56 / 92'
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

export default TrainerStatCards;
