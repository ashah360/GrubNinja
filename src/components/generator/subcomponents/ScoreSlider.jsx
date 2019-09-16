import React from 'react';

const ScoreSlider = ({ score, setScore }) => {
  const handleSetScore = e => setScore(e.target.value);

  return (
    <div className='slider-wrapper'>
      <input
        type='text'
        className='form-control'
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
        className='val'
        id='r1'
        onChange={handleSetScore}
      />
    </div>
  );
};

ScoreSlider.propTypes = {};

export default ScoreSlider;
