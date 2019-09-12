import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import GeneratorStatRow from './subcomponents/GeneratorStatRow';
import GeneratorLog from './subcomponents/GeneratorLog';
import GeneratorControl from './subcomponents/GeneratorControl';

import setMap from '../../actions/setMap';

const Generator = props => {
  const loadPreset = (score, map) => {
    // check if owns map
    props.setMap(map);
    props.setScore(score.toString());
  };
  return (
    <Fragment>
      <h1>Reward Generator</h1>
      <div className='row'>
        <div className='col'>
          <GeneratorStatRow />
        </div>
      </div>
      <div className='row'>
        <div className='col-8'>
          <GeneratorLog loadPreset={loadPreset} />
        </div>
        <div className='col'>
          <GeneratorControl
            loadPreset={loadPreset}
            score={props.score}
            setScore={props.setScore}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default connect(
  null,
  { setMap }
)(Generator);
