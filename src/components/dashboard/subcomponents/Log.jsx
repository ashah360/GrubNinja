import React from 'react';

const Log = props => {
  return (
    <div class={`log-item log-${props.type}`}>
      [{props.timestamp.toString()}] {props.msg}
    </div>
  );
};

export default Log;
