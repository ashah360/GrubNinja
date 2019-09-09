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
          <div className='row gen-table'>
            <div className='col'>
              <div className='gen-table-header text-muted'>
                <span>Reward</span>
                <span>Timestamp</span>
              </div>
              <div className='gen-table-rows'>
                <GenHistoryCard
                  type='elixir'
                  name='Energy Elixir'
                  time='6 minutes ago'
                />
                <GenHistoryCard
                  type='pack'
                  name='Ninja Lore Pack'
                  time='48 minutes ago'
                />
                <GenHistoryCard
                  type='gold'
                  name='W101 Gold (600)'
                  time='16 hours ago'
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
