import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import setMap from '../../../actions/setMap';
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
                  Map Quick Select
                </h5>
              </div>
            </div>
            <div className='form-row mb-3 preset-group form'>
              <div className='col'>
                <div className='custom-control custom-radio mb-3'>
                  <input
                    name='preset-group'
                    className='custom-control-input preset-group'
                    id='no-preset'
                    type='radio'
                    defaultChecked={true}
                  />
                  <label className='custom-control-label' htmlFor='no-preset'>
                    No Preset
                  </label>
                </div>
                <div className='custom-control custom-radio mb-3'>
                  <input
                    name='preset-group'
                    className='custom-control-input preset-group'
                    id='tots-preset'
                    type='radio'
                    onClick={() => props.setMap('MAP-CL-004')}
                  />
                  <label className='custom-control-label' htmlFor='tots-preset'>
                    Free Maps (12 XP)
                  </label>
                </div>
                <div className='custom-control custom-radio'>
                  <input
                    name='preset-group'
                    className='custom-control-input preset-group'
                    id='wondra-preset'
                    type='radio'
                    onClick={() =>
                      props.setMap(
                        _.sample(['MAP-AV-004', 'MAP-AZ-003', 'MAP-AZ-004'])
                      )
                    }
                  />
                  <label
                    className='custom-control-label'
                    htmlFor='wondra-preset'
                  >
                    Premium Maps (16 XP)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TrainerControl.propTypes = {
  setMap: PropTypes.func.isRequired
};

export default connect(
  null,
  { setMap }
)(TrainerControl);
