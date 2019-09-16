import React from 'react';
import commaNumber from 'comma-number';

const GeneratorStatCard = props => {
  return (
    <div className='card card-stats mb-4'>
      <div className='card-body'>
        <div className='row'>
          <div className='col'>
            <h5 className='card-title text-uppercase text-muted mb-0'>
              {props.title}
            </h5>
            <span className='h2 font-weight-bold mb-0'>
              {commaNumber(props.value)}
            </span>
          </div>
          <div className='col-auto'>
            <div className='rounded-circle shadow'>
              <img className='dash-img' src={props.img} alt={props.img} />
            </div>
          </div>
        </div>
        <p className='mt-3 mb-0 text-muted text-sm'>
          <span className='text-success mr-2'>
            <i className='fa fa-arrow-up'></i> {props.trend}
          </span>
          <span className='text-nowrap'>Current session</span>
        </p>
      </div>
    </div>
  );
};

export default GeneratorStatCard;
