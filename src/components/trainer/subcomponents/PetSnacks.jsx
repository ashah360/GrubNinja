import React from 'react';
import Snack from './Snack';
import SnackCard from './SnackCard';
import PropTypes from 'prop-types';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  dots: false,
  variableWidth: true,
  slidesToScroll: 4,
  initialSlide: 0
};

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
                {props.currentSnacks.length ? (
                  props.currentSnacks.map(snack => (
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
