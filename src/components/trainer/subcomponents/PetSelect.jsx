import React from 'react';
import PetCard from './PetCard';
import PropTypes from 'prop-types';

const PetSelect = props => {
  return (
    <div className='row mt-4'>
      <div className='col'>
        <div className='card choose-pet'>
          <div className='card-header border-0'>
            <div className='row align-items-center'>
              <div className='col'>
                <h5 className='card-title text-uppercase text-muted mb-0'>
                  Select Pet
                </h5>
              </div>
              <div className='col text-right'>
                <a href='#!' className='btn btn-sm btn-primary'>
                  Map Selection
                </a>
              </div>
            </div>
          </div>
          <div className='row pet-table'>
            <div className='col'>
              <div className='pet-table-header text-muted'>
                <span>Pet School & Name</span>
                <span>Level</span>
              </div>
              <div className='pet-table-rows'>
                <PetCard
                  name='Lord Bubba'
                  type='Freezing Rain Core'
                  school='Ice'
                  level='Ancient'
                />
                <PetCard
                  name='Sir Lucy'
                  type='Stormzilla'
                  school='Storm'
                  level='Mega'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PetSelect.propTypes = {};

export default PetSelect;
