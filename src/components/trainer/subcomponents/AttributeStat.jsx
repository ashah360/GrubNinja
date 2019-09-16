import React from 'react';

const AttributeStat = ({ name, current, max }) => {
  let ratio = Math.round((current / max) * 100).toString();
  name = name.toLowerCase();
  return (
    <div className='attribute'>
      <img src={require(`../../../assets/training/${name}.png`)} alt={name} />

      <div className='progress'>
        <div
          className='progress-bar progress-bar-attr'
          id={name + '-bar'}
          role='progressbar'
          style={{ width: `${ratio}%` }}
          aria-valuenow={ratio}
          aria-valuemin='0'
          aria-valuemax='100'
        ></div>
      </div>

      <div className='statistic' id={name}>
        {parseInt(current) < parseInt(max)
          ? `${current}/${max}`
          : `${max} (MAX)`}
      </div>
    </div>
  );
};

AttributeStat.propTypes = {};

export default AttributeStat;
