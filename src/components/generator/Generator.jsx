import React, { Fragment } from 'react';
import GeneratorStatRow from './subcomponents/GeneratorStatRow';
import GeneratorLog from './subcomponents/GeneratorLog';
import GeneratorControl from './subcomponents/GeneratorControl';
import PropTypes from 'prop-types';

const Generator = props => {
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
          <GeneratorLog />
        </div>
        <div className='col'>
          <GeneratorControl />
        </div>
      </div>
    </Fragment>
  );
};

Generator.propTypes = {};

export default Generator;
