import React from 'react';
import PropTypes from 'prop-types';

const TrainerControl = props => {
  return (
    <div className='row mt-4'>
      <div className='col'>
        <div className='card'>
          <div className='card-body'>
            <div className='row mb-3'>
              <div className='col'>
                <h5 className='card-title text-uppercase text-muted mb-0'>
                  Auto Trainer Options
                </h5>
              </div>
            </div>
            <div className='row'>
              <div className='col trainer-control'>
                <div className='row'>
                  <div className='col'>
                    <div className='custom-control custom-checkbox mb-3'>
                      <input
                        className='auto-trainer-input custom-control-input'
                        type='checkbox'
                        id='enable-auto-trainer'
                      />
                      <label
                        className='custom-control-label'
                        htmlFor='enable-auto-trainer'
                      >
                        Enable Auto Trainer
                      </label>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className='custom-control custom-checkbox mb-3'>
                      <input
                        className='auto-refill-energy custom-control-input'
                        type='checkbox'
                        id='auto-refill-energy'
                      />
                      <label
                        className='custom-control-label'
                        htmlFor='auto-refill-energy'
                      >
                        Automatically refill energy
                      </label>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className='custom-control custom-checkbox'>
                      <input
                        className='train-next-level custom-control-input'
                        type='checkbox'
                        id='train-next-level'
                      />
                      <label
                        className='custom-control-label'
                        htmlFor='train-next-level'
                      >
                        Train until next level
                      </label>
                    </div>
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

TrainerControl.propTypes = {};

export default TrainerControl;
