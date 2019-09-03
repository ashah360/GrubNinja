import React from 'react';
import Talent from './Talent';
import AttributeStat from './AttributeStat';
import PetExpBar from './PetExpBar';

import PropTypes from 'prop-types';

import petIcon from '../../../assets/pet-icon.png';

const TrainingCard = props => {
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
                        <span id='pet-name'>Unnamed Pet</span>
                        <div id='pet-type'>
                          <span id='pet-type-text'>????? </span>
                          <span id='pet-rank' className='baby'>
                            (Baby)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div id='talents' className='talent-wrapper mt-3'>
                      <Talent />
                      <Talent />
                      <Talent />
                      <Talent />
                      <Talent />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-7 progress-group'>
                <AttributeStat name='strength' current='36' max='255' />
                <AttributeStat name='intellect' current='138' max='260' />
                <AttributeStat name='agility' current='234' max='255' />
                <AttributeStat name='will' current='95' max='250' />
                <AttributeStat name='power' current='255' max='255' />
              </div>
            </div>
            <PetExpBar current='450' max='2000' />
          </div>
        </div>
      </div>
    </div>
  );
};

TrainingCard.propTypes = {};

export default TrainingCard;
