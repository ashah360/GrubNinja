import React from 'react';
import SnackCard from './SnackCard';
import PropTypes from 'prop-types';

const PetSnacks = props => {
  return (
    <div className='row mt-4'>
      <div className='col'>
        <div className='card snack-card'>
          <div className='row pet-table'>
            <div className='col'>
              <div className='snack-table-header text-muted'>
                <span>Select a Snack</span>
              </div>
              <div className='pet-snack-rows'>
                {props.currentSnacks.length > 0 ? (
                  props.currentSnacks
                    .sort(
                      (a, b) =>
                        parseFloat(b.AttrGains.Exp) -
                        parseFloat(a.AttrGains.Exp)
                    )
                    .map(snack => (
                      <SnackCard
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
                  <p
                    className='mt-4'
                    style={{ textAlign: 'center', fontSize: '0.875rem' }}
                  >
                    You don't have any snacks.
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

PetSnacks.propTypes = {
  currentSnacks: PropTypes.array.isRequired
};

export default PetSnacks;
