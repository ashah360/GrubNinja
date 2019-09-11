import React from 'react';
import { connect } from 'react-redux';
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
                {props.generatorItems.length ? (
                  props.generatorItems.map((item, index) => {
                    return (
                      <GenHistoryCard
                        type={item.type}
                        name={item.name}
                        score={item.score}
                        map={item.map}
                        timestamp={item.timestamp}
                        key={index}
                      />
                    );
                  })
                ) : (
                  <p
                    style={{ textAlign: 'center', fontSize: '0.875rem' }}
                    className='mt-4'
                  >
                    No reward data recorded.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GeneratorLog.propTypes = {
  generatorItems: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  generatorItems: state.metrics.items
});

export default connect(mapStateToProps)(GeneratorLog);
