import React, { Fragment } from 'react';
import GeneratorStatRow from './subcomponents/GeneratorStatRow';
import GeneratorLog from './subcomponents/GeneratorLog';
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
        <div className='col-6'>
          <GeneratorLog />
        </div>
        <div className='col'>controls</div>
      </div>
    </Fragment>
  );
};

Generator.propTypes = {};

export default Generator;
