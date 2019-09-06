import React from 'react';
import Snack from './Snack';
import PropTypes from 'prop-types';

const PetSnacks = props => {
  return (
    <div className='row snack-card mt-4'>
      <div className='col'>
        <div id='snack-container'>
          {props.currentSnacks.length ? (
            props.currentSnacks.map(snack => (
              <Snack
                isActive={props.activeSnackId === snack.TemplateId}
                name={snack.Name}
                quantity={snack.Qty}
                school={snack.School}
                id={snack.TemplateId}
                key={snack.TemplateId}
                onClick={() => props.setActiveSnackId(snack.TemplateId)}
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
