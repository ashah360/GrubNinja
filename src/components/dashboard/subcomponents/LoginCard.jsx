import React from 'react';
import PropTypes from 'prop-types';

const LoginCard = props => {
  return (
    <div className='row'>
      <div className='col'>
        <div className='card login-card mb-4'>
          <div className='card-body'>
            <div className='row mb-3'>
              <div className='col'>
                <h5 className='card-title text-uppercase text-muted mb-0'>Login</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Username'
                  />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div className='form-group'>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Password'
                  />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div className='custom-control custom-checkbox mb-3'>
                  <input
                    className='remember-me custom-control-input'
                    type='checkbox'
                    id='remember-account'
                  />
                  <label className='custom-control-label' htmlFor='remember-account'>
                    Remember Me
                  </label>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div className='btn btn-primary btn-block'>Login</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginCard.propTypes = {};

export default LoginCard;
