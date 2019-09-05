import React from 'react';
import Snack from './Snack';
import PropTypes from 'prop-types';

const PetSnacks = ({ currentSnacks }) => {
  return (
    <div className='row snack-card mt-4'>
      <div className='col'>
        <div id='snack-container'>
          {currentSnacks.length ? (
            currentSnacks.map(snack => (
              <Snack
                name={snack.Name}
                quantity={snack.Qty}
                school={snack.School}
                id={snack.TemplateId}
                key={snack.TemplateId}
                {...snack.AttrGains}
              />
            ))
          ) : (
            <p>No snacks loaded</p>
          )}
        </div>
      </div>
    </div>
  );
};

PetSnacks.propTypes = {
  currentSnacks: PropTypes.array.isRequired
};

export default PetSnacks;
