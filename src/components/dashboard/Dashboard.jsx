import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import Rodal from 'rodal';
import StatRow from './subcomponents/StatRow.jsx';
import ActivityLog from './subcomponents/ActivityLog';
import LoginCard from './subcomponents/LoginCard';
import CharacterSelect from './subcomponents/CharacterSelect';
import { login } from '../../actions/login';
import reset from '../../actions/reset';
import { logMessage } from '../../actions/logMessage';
import { sendXPResult } from '../../util/notify';

import 'rodal/lib/rodal.css';

const Dashboard = props => {
  const [modalState, setModalState] = useState({ visible: false });

  const show = () => setModalState({ visible: true });
  const hide = () => setModalState({ visible: false });

  return (
    <Fragment>
      <h1>Dashboard</h1>
      <div className='row'>
        <div className='col-9'>
          <StatRow />
          <ActivityLog log={props.log} />
        </div>
        <div className='col-3'>
          <LoginCard
            handleLogin={props.login}
            handleResetState={props.reset}
            logMessage={props.logMessage}
          />
          <CharacterSelect />
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
  { login, reset, logMessage }
)(Dashboard);
