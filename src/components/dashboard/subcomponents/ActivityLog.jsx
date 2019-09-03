import React from 'react';

const ActivityLog = props => {
  return (
    <div className='row'>
      <div className='col'>
        <div className='card'>
          <div className='card-body'>
            <div className='row mb-3'>
              <div className='col'>
                <h5 className='card-title text-uppercase text-muted mb-0'>
                  Activity Log
                </h5>
              </div>
            </div>
            <div className='row'>
              <div className='col activity-log'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
