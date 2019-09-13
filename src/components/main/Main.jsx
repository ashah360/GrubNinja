import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadMetrics } from '../../actions/loadMetrics';
import { setAccountDetails } from '../../actions/character';
import { sendNotification } from '../../util/notify';

// Handle receiving notifications from main process
window.ipcRenderer.on('showNotif', (e, msg, type = 'info') =>
  sendNotification(msg, type)
);

const Main = props => {
  useEffect(() => {
    window.ipcRenderer.send('request-metrics');
    window.ipcRenderer.send('request-saved-account');
  }, []);

  // On metrics event, update our state
  window.ipcRenderer.on('load-metrics', (e, payload) => {
    props.loadMetrics(payload);
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
