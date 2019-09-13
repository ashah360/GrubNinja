import React from 'react';

const TrainerStatCard = props => {
  return (
    <div className='col'>
      <div
        className={`card card-stats h-100 ${
          props.energy ? 'energy-stats' : ''
        }`}
      >
        <div className='card-body'>
          <div className='row'>
            <div className='col'>
              <h5 className='card-title text-uppercase text-muted mb-0'>
                {props.title}
              </h5>
              <span className='h2 font-weight-bold mb-0'>{props.value}</span>
            </div>
            <div className='col-auto'>
              <div className='rounded-circle'>
                <img className='dash-img' src={props.img} alt='dashboard' />
              </div>
            </div>
          </div>
          {props.energy ? (
            <p className='mt-3 mb-0 text-muted text-sm card-button'>
              <button
                type='button'
                className='btn btn-primary btn-sm'
                onClick={props.handleBuyEnergy}
                disabled={props.trainerActive || !props.charId}
              >
                Buy Elixir
              </button>
            </p>
          ) : (
            <p className='mt-3 mb-0 text-muted text-sm'>
              <span className='text-nowrap'>{props.snackQty} Mega Snacks</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

TrainerStatCard.propTypes = {};

export default TrainerStatCard;
