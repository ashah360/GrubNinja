import React from 'react';
import Snack from './Snack';
import PropTypes from 'prop-types';

const PetSnacks = props => {
  return (
    <div className='row snack-card mt-4'>
      <div className='col'>
        <div id='snack-container'>
          <Snack
            name='Frosted Flakes'
            quantity='32'
            school='ice'
            xp='30'
            key='a'
            strength='30'
            will='21'
            intellect='51'
          />
          <Snack
            name='Frosted Flakes'
            quantity='32'
            school='ice'
            xp='30'
            key='b'
            strength='30'
            will='21'
            intellect='51'
          />
          <Snack
            name='Frosted Flakes'
            quantity='32'
            school='ice'
            xp='30'
            key='c'
            strength='30'
            will='21'
            intellect='51'
          />
          <Snack
            name='Frosted Flakes'
            quantity='32'
            school='ice'
            xp='30'
            key='d'
            strength='30'
            will='21'
            intellect='51'
          />
          <Snack
            name='Frosted Flakes'
            quantity='32'
            school='ice'
            xp='30'
            key='x'
            strength='30'
            will='21'
            intellect='51'
          />
          <Snack
            name='Frosted Flakes'
            quantity='32'
            school='ice'
            xp='30'
            key='q'
            strength='30'
            will='21'
            intellect='51'
          />
          <Snack
            name='Frosted Flakes'
            quantity='32'
            school='ice'
            xp='30'
            key='rr'
            strength='30'
            will='21'
            intellect='51'
          />
          <Snack
            name='Frosted Flakes'
            quantity='32'
            school='ice'
            xp='30'
            strength='30'
            key='42f'
            will='21'
            intellect='51'
          />
        </div>
      </div>
    </div>
  );
};

PetSnacks.propTypes = {};

export default PetSnacks;
