import React from 'react';

const Log = props => {
  return (
    <div className={`log-item log-${props.type}`}>
      [{props.timestamp.toString()}] {props.msg}
    </div>
  );
};

export default Log;
