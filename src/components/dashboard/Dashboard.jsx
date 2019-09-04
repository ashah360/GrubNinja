import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Rodal from 'rodal';
import StatRow from './subcomponents/StatRow.jsx';
import ActivityLog from './subcomponents/ActivityLog';
import LoginCard from './subcomponents/LoginCard';
import { login } from '../../actions/login';

import 'rodal/lib/rodal.css';

const Dashboard = props => {
  const [modalState, setModalState] = useState({ visible: false });

  const show = () => setModalState({ visible: true });
  const hide = () => setModalState({ visible: false });

  return (
    <Fragment>
      <h1
        onClick={() => props.login({ username: 'ashah7', password: 'ashah7' })}
      >
        Dashboard
      </h1>
      <Rodal visible={modalState.visible} onClose={hide}>
        <div>Content</div>
      </Rodal>
      <div className='row'>
        <div className='col-9'>
          <StatRow />
          <ActivityLog />
        </div>
        <div className='col-3'>
          <LoginCard />
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { login }
)(Dashboard);
