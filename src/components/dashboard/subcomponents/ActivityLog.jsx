import React from 'react';
import changelog from '../../../changelog';
import Log from './Log';
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
                  Changelog
                </h5>
              </div>
            </div>
            <div className='row activity-log'>
              <div className='col'>
                {changelog.map((log, i) => (
                  <Log
                    title={log.title}
                    content={log.content}
                    timestamp={log.timestamp}
                    key={i}
                  />
                ))}
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
