import React, { Fragment, useState } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Dashboard from './components/dashboard/Dashboard';
import Trainer from './components/trainer/Trainer';
import Footer from './components/layout/Footer';
import { DASHBOARD, TRAINER } from './constants/path';

import { Provider } from 'react-redux';
import store from './store';

//import './styles/argon.css';
//import './styles/App.css';

const App = () => {
  const [activePath, setActivePath] = useState(DASHBOARD);

  const getActivePath = () => {
    switch (activePath) {
      case DASHBOARD:
        return <Dashboard />;
      case TRAINER:
        return <Trainer />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Provider store={store}>
      <Fragment>
        <Header setActivePath={setActivePath} activePath={activePath} />
        <Main>{getActivePath()}</Main>
      </Fragment>
    </Provider>
  );
};

export default App;
