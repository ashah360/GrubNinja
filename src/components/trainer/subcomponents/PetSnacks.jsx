import React from 'react';
import Slider from 'react-slick';
import Snack from './Snack';
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
    <div className='row snack-card mt-4'>
      <div className='col'>
        <div id='snack-container'>
          <Slider {...settings}>
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
              <p className='mt-3' style={{ textAlign: 'center' }}>
                No snacks loaded
              </p>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

PetSnacks.propTypes = {
  currentSnacks: PropTypes.array.isRequired
};

export default PetSnacks;
