import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import ScoreSlider from './ScoreSlider';
import MapSelect from '../../misc/MapSelect';
import PropTypes from 'prop-types';
import { sendNotification } from '../../../util/notify';

import { fetchRewards } from '../../../actions/fetchRewards';

export const energyElixirPreset = () => ({
  score: _.random(2500, 3999),
  map: 'MAP-PA-003'
});

export const hoardPackPreset = () => ({
  score: _.random(5300, 10000),
  map: _.sample(['MAP-AV-004', 'MAP-AZ-003', 'MAP-AZ-004'])
});

const GeneratorControl = props => {
  const handleGenerate = async score => {
    try {
      await props.fetchRewards(score);
      sendNotification('Success!', 'success');
    } catch (error) {
      sendNotification('Could not generate reward', 'danger');
    }
  };

  return (
    <div className='row'>
      <div className='col'>
        <div className='card gen-control-container'>
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
                <div className='row mb-2'>
                  <div className='col'>
                    <div
                      class='alert'
                      style={{
                        textAlign: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.06)'
                      }}
                      role='alert'
                    >
                      <span class='alert-inner--text'>
                        All premium maps are unlocked
                      </span>
                    </div>
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col'>
                    <MapSelect />
                  </div>
                </div>
                <div className='form-row mb-3'>
                  <div className='col'>
                    <ScoreSlider
                      score={props.score}
                      setScore={props.setScore}
                    />
                  </div>
                </div>
                <div className='form-row mb-3 preset-group form'>
                  <div className='col'>
                    <div class='custom-control custom-radio mb-3 mt-3'>
                      <input
                        name='preset-group'
                        class='custom-control-input preset-group'
                        id='no-preset'
                        type='radio'
                        defaultChecked={true}
                      />
                      <label class='custom-control-label' htmlFor='no-preset'>
                        No Preset
                      </label>
                    </div>
                    <div class='custom-control custom-radio mb-3'>
                      <input
                        name='preset-group'
                        class='custom-control-input preset-group'
                        id='ee-preset'
                        type='radio'
                        onClick={() =>
                          props.loadPreset(
                            ...Object.values(energyElixirPreset())
                          )
                        }
                      />
                      <label class='custom-control-label' htmlFor='ee-preset'>
                        Energy Elixir Preset
                      </label>
                    </div>
                    <div class='custom-control custom-radio mb-3'>
                      <input
                        name='preset-group'
                        class='custom-control-input preset-group'
                        id='hoard-preset'
                        type='radio'
                        onClick={() =>
                          props.loadPreset(...Object.values(hoardPackPreset()))
                        }
                      />
                      <label
                        class='custom-control-label'
                        htmlFor='hoard-preset'
                      >
                        Hoard & Lore Pack Preset
                      </label>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <button
                      className='btn btn-primary btn-block'
                      disabled={!props.account.isLoggedIn}
                      onClick={() => {
                        handleGenerate(props.score.toString());
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
  currentMapId: state.game.mapId,
  account: state.account
});

export default connect(
  mapStateToProps,
  { fetchRewards }
)(GeneratorControl);
