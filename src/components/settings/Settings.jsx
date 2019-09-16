import React, { Fragment } from 'react';
import Rodal from 'rodal';

const launch = () => {
  window.ipcRenderer.send('init:launch');
};

const Settings = props => {
  return (
    <Fragment>
      <Rodal
        width={500}
        height={260}
        duration={300}
        visible={props.visible}
        onClose={() => props.setSettingsState(false)}
      >
        <div className='modal-body'>
          <div className='row'>
            <div className='col'>
              <h1>Settings</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='alert version-alert fade show mb-3' role='alert'>
                <span
                  className='alert-inner--icon'
                  style={{ marginRight: '8px' }}
                >
                  <i className='fas fa-info-circle'></i>
                </span>
                <span className='alert-inner--text'>
                  You are currently running{' '}
                  <strong>Version {props.version}</strong>
                </span>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='form-group'>
                <div className='input-group mb-3'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>
                      <i className='fab fa-discord'></i>
                    </span>
                  </div>
                  <input
                    className='form-control'
                    placeholder='Custom Webhook URL'
                    type='text'
                    style={{ paddingLeft: '8px' }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='form-row'>
            <div className='col'>
              <button className='btn btn-block btn-primary' onClick={launch}>
                Launch Game
              </button>
            </div>
          </div>
        </div>
      </Rodal>
    </Fragment>
  );
};

Settings.propTypes = {};

export default Settings;
