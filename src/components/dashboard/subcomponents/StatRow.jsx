import React from 'react';
import StatCard from './StatCard';

import expIcon from '../../../assets/icon-xp.png';
import petIcon from '../../../assets/pet-icon.png';
import giftIcon from '../../../assets/Button_Gift.png';

const StatRow = props => {
  return (
    <div className='row'>
      <div className='col-4'>
        <StatCard
          title='XP Trained'
          value='6,743'
          img={expIcon}
          trend='214 XP'
        />
      </div>
      <div className='col-4'>
        <StatCard title='Pets Leveled' value='9' img={petIcon} trend='0' />
      </div>
      <div className='col-4'>
        <StatCard title='Rewards' value='132' img={giftIcon} trend='214 XP' />
      </div>
    </div>
  );
};

export default StatRow;
