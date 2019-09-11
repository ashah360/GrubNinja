import React from 'react';
import { connect } from 'react-redux';
import MapSelect from '../../misc/MapSelect';
import PropTypes from 'prop-types';
import { sendNotification } from '../../../util/notify';

import { fetchRewards } from '../../../actions/fetchRewards';

const GeneratorControl = props => {
  const testGenerate = async score => {
    try {
      await props.fetchRewards(score);
      sendNotification('Success!', 'success');
    } catch (error) {
      sendNotification(error, 'danger');
    }
  };

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
                <div className='row mb-3'>
                  <div className='col'>
                    <MapSelect />
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <button
                      className='btn btn-primary btn-block'
                      onClick={() => {
                        testGenerate('3995');
                      }}
                    >
                      Generate
                    </button>
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

GeneratorControl.propTypes = {
  currentMapId: PropTypes.string.isRequired,
  fetchRewards: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentMapId: state.game.mapId
});

export default connect(
  mapStateToProps,
  { fetchRewards }
)(GeneratorControl);
