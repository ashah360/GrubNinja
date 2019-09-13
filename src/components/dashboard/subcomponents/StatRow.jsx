import React from 'react';
import { connect } from 'react-redux';
import StatCard from './StatCard';
import {
  getTotalRewardCount,
  getSessionRewardCount
} from '../../../selectors/metricSelectors';

import expIcon from '../../../assets/icon-xp.png';
import petIcon from '../../../assets/pet-icon.png';
import giftIcon from '../../../assets/Button_Gift.png';

const StatRow = props => {
  return (
    <div className='row'>
      <div className='col-4'>
        <StatCard
          title='XP Trained'
          value={props.expTrained}
          img={expIcon}
          trend={`${props.sessionExp} XP`}
        />
      </div>
      <div className='col-4'>
        <StatCard
          title='Pets Leveled'
          value={props.petsLeveled}
          img={petIcon}
          trend={props.sessionPets}
        />
      </div>
      <div className='col-4'>
        <StatCard
          title='Rewards'
          value={props.totalRewardCount}
          img={giftIcon}
          trend={props.sessionRewardCount}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  totalRewardCount: getTotalRewardCount(state),
  sessionRewardCount: getSessionRewardCount(state),
  expTrained: state.metrics.expTrained,
  petsLeveled: state.metrics.petsLeveled,
  sessionExp: state.metrics.sessionExp,
  sessionPets: state.metrics.sessionPets
});

export default connect(mapStateToProps)(StatRow);
