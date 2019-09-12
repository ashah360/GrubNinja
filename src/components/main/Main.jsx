import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import UserDropdown from '../misc/UserDropdown';
import { loadMetrics } from '../../actions/loadMetrics';

const Main = props => {
  useEffect(() => {
    window.ipcRenderer.send('request-metrics');
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
  { loadMetrics }
)(Main);
