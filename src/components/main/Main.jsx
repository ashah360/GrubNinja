import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import UserDropdown from '../misc/UserDropdown';
import { loadMetrics } from '../../actions/loadMetrics';
import { setAccountDetails } from '../../actions/character';

const Main = props => {
  useEffect(() => {
    window.ipcRenderer.send('request-metrics');
    window.ipcRenderer.send('request-saved-account');
  }, []);

  // On metrics event, update our state
  window.ipcRenderer.on('load-metrics', (e, payload) => {
    props.loadMetrics(payload);
  });

  // Same with username
  window.ipcRenderer.on('load-saved-account', (e, payload) => {
    props.setAccountDetails(payload.username, payload.password);
  });

  return (
    <main>
      <section className='view-container'>{props.children}</section>
    </main>
  );
};

export default connect(
  null,
  { loadMetrics, setAccountDetails }
)(Main);
