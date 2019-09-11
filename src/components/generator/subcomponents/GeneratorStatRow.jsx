import React from 'react';
import { connect } from 'react-redux';
import GeneratorStatCard from './GeneratorStatCard';
import {
  getTotalQuantities,
  getTotalRewardCount
} from '../../../selectors/metricSelectors';

import goldIcon from '../../../assets/Art_Gold.png';
import elixirIcon from '../../../assets/Art_Quest_Elixir.png';
import packIcon from '../../../assets/Art_Pack.png';
//import housingIcon from '../../../assets/Art_Housing.png';
//import reagentIcon from '../../../assets/Icon_Reagent.png';
//import petIcon from '../../../assets/pet-icon.png';
import giftIcon from '../../../assets/Button_Gift.png';

const GeneratorStatRow = props => {
  return (
    <div className='row'>
      <div className='col'>
        <GeneratorStatCard
          title='Gold'
          value={props.metrics.Gold}
          img={goldIcon}
          trend='500'
        />
      </div>
      <div className='col'>
        <GeneratorStatCard
          title='Packs'
          value={props.metrics.Packs}
          img={packIcon}
          trend='2'
        />
      </div>
      <div className='col'>
        <GeneratorStatCard
          title='Elixirs'
          value={props.metrics.Elixirs}
          img={elixirIcon}
          trend='5'
        />
      </div>
      <div className='col'>
        <GeneratorStatCard
          title='Total Rewards'
          value={props.totalRewardCount}
          img={giftIcon}
          trend='29'
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  metrics: getTotalQuantities(state),
  totalRewardCount: getTotalRewardCount(state)
});

export default connect(mapStateToProps)(GeneratorStatRow);
