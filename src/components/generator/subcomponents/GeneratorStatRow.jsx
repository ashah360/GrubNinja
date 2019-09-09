import React from 'react';
import GeneratorStatCard from './GeneratorStatCard';

import goldIcon from '../../../assets/Art_Gold.png';
import elixirIcon from '../../../assets/Art_Quest_Elixir.png';
import packIcon from '../../../assets/Art_Pack.png';
import housingIcon from '../../../assets/Art_Housing.png';
import reagentIcon from '../../../assets/Icon_Reagent.png';
import petIcon from '../../../assets/pet-icon.png';
import giftIcon from '../../../assets/Button_Gift.png';

const GeneratorStatRow = props => {
  return (
    <div className='row'>
      <div className='col'>
        <GeneratorStatCard
          title='Gold'
          value='42,500'
          img={goldIcon}
          trend='500'
        />
      </div>
      <div className='col'>
        <GeneratorStatCard title='Packs' value='32' img={packIcon} trend='2' />
      </div>
      <div className='col'>
        <GeneratorStatCard
          title='Elixirs'
          value='72'
          img={elixirIcon}
          trend='5'
        />
      </div>
      <div className='col'>
        <GeneratorStatCard
          title='Total Rewards'
          value='239'
          img={giftIcon}
          trend='29'
        />
      </div>
    </div>
  );
};

export default GeneratorStatRow;
