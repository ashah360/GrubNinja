import React from 'react';
import MapSelect from '../../misc/MapSelect';
import PropTypes from 'prop-types';

const GeneratorControl = props => {
  return (
    <div className='row'>
      <div className='col'>
        <div className='card'>
          <div className='card-body'>
            <div className='row mb-3'>
              <div className='col'>
                <h5 className='card-title text-uppercase text-muted mb-0'>
                  Generator Options
                </h5>
              </div>
            </div>
            <div className='row'>
              <div className='col gen-control'>
                <div class='row mb-3'>
                  <div class='col'>
                    <MapSelect />
                  </div>
                </div>
                <div class='row'>
                  <div class='col'>
                    <button class='btn btn-primary btn-block'>Generate</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GeneratorControl.propTypes = {};

export default GeneratorControl;
