import React, { Fragment } from 'react';
import Rodal from 'rodal';

const Notifications = props => {
  return (
    <Fragment>
      <Rodal
        width={650}
        height={400}
        duration={300}
        visible={props.visible}
        onClose={() => props.setNotifState(false)}
      >
        <div className='modal-body'>
          <h1>Notifications</h1>
        </div>
      </Rodal>
    </Fragment>
  );
};

export default Notifications;
