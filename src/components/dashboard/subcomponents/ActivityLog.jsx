import React from 'react';
import { connect } from 'react-redux';
import Log from './Log';

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
              <div className='col activity-log'>
                {props.log.length > 0 &&
                  props.log.map((line, i) => {
                    return (
                      <Log
                        type={line.type}
                        msg={line.msg}
                        timestamp={line.timestamp}
                        key={i}
                      />
                    );
                  })}
              </div>
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
