import React from 'react';
import PropTypes from 'prop-types';

const ScoreSlider = ({ score, setScore }) => {
  const handleSetScore = e => setScore(e.target.value);

  return (
    <div class='slider-wrapper'>
      <input
        type='text'
        class='form-control'
        value={score}
        placeholder='Score'
        onChange={handleSetScore}
      />
      <input
        type='range'
        min='500'
        max='10000'
        value={score}
        step='1'
        class='val'
        id='r1'
        onChange={handleSetScore}
      />
    </div>
  );
};

ScoreSlider.propTypes = {};

export default ScoreSlider;
