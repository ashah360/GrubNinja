import React from 'react';
import { connect } from 'react-redux';
import Talent from './Talent';
import AttributeStat from './AttributeStat';
import PetExpBar from './PetExpBar';
import mapLevel from '../../../util/mapLevel';

import PropTypes from 'prop-types';

import petIcon from '../../../assets/pet-icon.png';

const TrainingCard = ({ pet }) => {
  return (
    <div className='row training-card'>
      <div className='col'>
        <div className='card'>
          <div className='card-body'>
            <div className='row'>
              <div className='col-sm-5'>
                <div className='row'>
                  <div className='col'>
                    <div className='pet-name-container'>
                      <img src={petIcon} alt='Current Pet' />
                      <div className='pet-name'>
                        <span id='pet-name'>{pet.PetName}</span>
                        <div id='pet-type'>
                          <span id='pet-type-text'>{pet.DisplayName} </span>
                          <span
                            id='pet-rank'
                            className={mapLevel(pet.PetLevel).toLowerCase()}
                          >
                            ({mapLevel(pet.PetLevel)})
                          </span>
                        </div>
                      </div>
                    </div>
                    <div id='talents' className='talent-wrapper mt-3'>
                      {pet.Talent.map(talent => {
                        return <Talent name={talent} key={talent} />;
                      })}
                      {new Array(5 - pet.Talent.length).fill(0).map((t, i) => (
                        <Talent key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-7 progress-group'>
                <AttributeStat
                  name='strength'
                  current={pet.Strength}
                  max={pet.MaxStr}
                />
                <AttributeStat
                  name='intellect'
                  current={pet.Intellect}
                  max={pet.MaxInt}
                />
                <AttributeStat
                  name='agility'
                  current={pet.Agility}
                  max={pet.MaxAgi}
                />
                <AttributeStat
                  name='will'
                  current={pet.Will}
                  max={pet.MaxWil}
                />
                <AttributeStat
                  name='power'
                  current={pet.Power}
                  max={pet.MaxPow}
                />
              </div>
            </div>
            <PetExpBar current={pet.Exp} max={pet.ExpNextLevel} />
          </div>
        </div>
      </div>
    </div>
  );
};

TrainingCard.propTypes = {};

const mapStateToProps = state => ({
  pet: state.pet
});

export default connect(mapStateToProps)(TrainingCard);
