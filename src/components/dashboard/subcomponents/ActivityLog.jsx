import React from 'react';
import { connect } from 'react-redux';

const ActivityLog = props => {
  return (
    <div className='row'>
      <div className='col'>
        <div className='card'>
          <div className='card-body'>
            <div className='row mb-3'>
              <div className='col'>
                <h5 className='card-title text-uppercase text-muted mb-0'>
                  IDK
                </h5>
              </div>
            </div>
            <div className='row activity-log'>
              What the FUCK do i put here niggers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  log: state.log
});

export default connect(mapStateToProps)(ActivityLog);
