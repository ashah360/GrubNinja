import React from 'react';
import PropTypes from 'prop-types';

const LoginCard = props => {
  return (
    <div className='row'>
      <div className='col'>
        <div class='card login-card mb-4'>
          <div class='card-body'>
            <div class='row mb-3'>
              <div class='col'>
                <h5 class='card-title text-uppercase text-muted mb-0'>Login</h5>
              </div>
            </div>
            <div class='row'>
              <div class='col'>
                <div class='form-group'>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Username'
                  />
                </div>
              </div>
            </div>
            <div class='row'>
              <div class='col'>
                <div class='form-group'>
                  <input
                    type='password'
                    class='form-control'
                    placeholder='Password'
                  />
                </div>
              </div>
            </div>
            <div class='row'>
              <div class='col'>
                <div class='custom-control custom-checkbox mb-3'>
                  <input
                    class='remember-me custom-control-input'
                    type='checkbox'
                    id='remember-account'
                  />
                  <label class='custom-control-label' for='remember-account'>
                    Remember Me
                  </label>
                </div>
              </div>
            </div>
            <div class='row'>
              <div class='col'>
                <div class='btn btn-primary btn-block'>Login</div>
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
