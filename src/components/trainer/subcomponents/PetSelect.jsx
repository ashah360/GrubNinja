import React from 'react';
import { connect } from 'react-redux';
import PetCard from './PetCard';
import PropTypes from 'prop-types';
import mapLevel from '../../../util/mapLevel';
import { setPet } from '../../../actions/character';

const PetSelect = ({ petList, setPet }) => {
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
                {petList.length > 0 ? (
                  petList.map(pet => {
                    return (
                      <PetCard
                        name={pet.PetName}
                        type={pet.DisplayName}
                        school={pet.PetClass}
                        level={mapLevel(pet.PetLevel)}
                        petId={pet.PetId}
                        key={pet.PetId}
                        onClick={() => setPet(pet.PetId)}
                      />
                    );
                  })
                ) : (
                  <p
                    style={{ textAlign: 'center', fontSize: '0.875rem' }}
                    className='mt-4'
                  >
                    No Pets to Show :(
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

PetSelect.propTypes = {
  petList: PropTypes.array.isRequired,
  setPet: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  petList: state.character.pets
});

export default connect(
  mapStateToProps,
  { setPet }
)(PetSelect);
