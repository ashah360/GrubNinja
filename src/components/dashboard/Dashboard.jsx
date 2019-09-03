import React, { Fragment } from 'react';
import StatRow from './subcomponents/StatRow.jsx';
import ActivityLog from './subcomponents/ActivityLog';
import LoginCard from './subcomponents/LoginCard';

const Dashboard = () => {
  return (
    <Fragment>
      <h1>Dashboard</h1>
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

export default Dashboard;
