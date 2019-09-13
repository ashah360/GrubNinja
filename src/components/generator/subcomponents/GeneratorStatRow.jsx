import React from 'react';
import { connect } from 'react-redux';
import GeneratorStatCard from './GeneratorStatCard';
import {
  getTotalQuantities,
  getSessionQuantities,
  getTotalRewardCount,
  getSessionRewardCount
} from '../../../selectors/metricSelectors';

import goldIcon from '../../../assets/Art_Gold.png';
import elixirIcon from '../../../assets/Art_Quest_Elixir.png';
import packIcon from '../../../assets/Art_Pack.png';
import giftIcon from '../../../assets/Button_Gift.png';

const GeneratorStatRow = props => {
  return (
    <div className='row'>
      <div className='col'>
        <GeneratorStatCard
          title='Gold'
          value={props.metrics.Gold}
          img={goldIcon}
          trend={props.sessionMetrics.Gold}
        />
      </div>
      <div className='col'>
        <GeneratorStatCard
          title='Packs'
          value={props.metrics.Packs}
          img={packIcon}
          trend={props.sessionMetrics.Packs}
        />
      </div>
      <div className='col'>
        <GeneratorStatCard
          title='Elixirs'
          value={props.metrics.Elixirs}
          img={elixirIcon}
          trend={props.sessionMetrics.Elixirs}
        />
      </div>
      <div className='col'>
        <GeneratorStatCard
          title='Total Rewards'
          value={props.totalRewardCount}
          img={giftIcon}
          trend={props.sessionRewardCount}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  metrics: getTotalQuantities(state),
  totalRewardCount: getTotalRewardCount(state),
  sessionMetrics: getSessionQuantities(state),
  sessionRewardCount: getSessionRewardCount(state)
});

export default connect(mapStateToProps)(GeneratorStatRow);
