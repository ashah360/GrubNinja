import React from 'react';
import TimeAgo from 'react-timeago';

const Log = props => {
  return (
    <div className='log'>
      <div className='log-title'>{props.title}</div>
      <div className='log-ts'>
        <TimeAgo date={props.timestamp} />
      </div>
      <div className='log-content'>{props.content}</div>
    </div>
  );
};

export default Log;
