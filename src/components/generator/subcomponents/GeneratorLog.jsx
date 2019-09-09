import React from 'react';
import GenHistoryCard from './GenHistoryCard';
import PropTypes from 'prop-types';

const GeneratorLog = props => {
  return (
    <div className='row'>
      <div className='col'>
        <div className='card generator-log'>
          <div className='card-header'>
            <div className='row align-items-center'>
              <div className='col'>
                <h5 className='card-title text-uppercase text-muted mb-0'>
                  Reward History
                </h5>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col gen-table'>
              <div className='gen-table-header text-muted'>
                <span>Reward</span>
                <span></span>
                <span>Score</span>
                <span>Map</span>
                <span>Timestamp</span>
              </div>
              <div className='gen-table-rows'>
                <GenHistoryCard
                  type='gold'
                  name='W101 Gold (600)'
                  map='MAP-PA-003'
                  score='2945'
                  time={Date.now() + 500}
                />
                <GenHistoryCard
                  type='gold'
                  name='W101 Gold (600)'
                  map='MAP-PA-003'
                  score='2945'
                  time={Date.now() + 500}
                />
                <GenHistoryCard
                  type='gold'
                  name='W101 Gold (600)'
                  map='MAP-PA-003'
                  score='2945'
                  time={Date.now() + 5}
                />
                <GenHistoryCard
                  type='gold'
                  name='W101 Gold (600)'
                  map='MAP-PA-003'
                  score='2945'
                  time={Date.now() + 5}
                />
                <GenHistoryCard
                  type='gold'
                  name='W101 Gold (600)'
                  map='MAP-PA-003'
                  score='2945'
                  time={Date.now() + 5}
                />
                <GenHistoryCard
                  type='gold'
                  name='W101 Gold (600)'
                  map='MAP-PA-003'
                  score='2945'
                  time={Date.now() + 5}
                />
                <GenHistoryCard
                  type='gold'
                  name='W101 Gold (600)'
                  map='MAP-PA-003'
                  score='2945'
                  time={Date.now() + 5}
                />
                <GenHistoryCard
                  type='gold'
                  name='W101 Gold (600)'
                  map='MAP-PA-003'
                  score='2945'
                  time={Date.now() + 5}
                />
                <GenHistoryCard
                  type='gold'
                  name='W101 Gold (600)'
                  map='MAP-PA-003'
                  score='2945'
                  time={Date.now() + 5}
                />
                <GenHistoryCard
                  type='gold'
                  name='W101 Gold (600)'
                  map='MAP-PA-003'
                  score='2945'
                  time={Date.now() + 5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GeneratorLog.propTypes = {};

export default GeneratorLog;
