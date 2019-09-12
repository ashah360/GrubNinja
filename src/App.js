import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Dashboard from './components/dashboard/Dashboard';
import Trainer from './components/trainer/Trainer';
import Generator from './components/generator/Generator';
import ReactNotification from 'react-notifications-component';

import { DASHBOARD, TRAINER, GENERATOR } from './constants/path';

import { Provider } from 'react-redux';
import store from './store';

import 'animate.css';
import 'react-notifications-component/dist/theme.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/argon.css';
import './styles/App.css';

const App = props => {
  const [activePath, setActivePath] = useState(DASHBOARD);
  const [score, setScore] = useState(500);

  const getActivePath = () => {
    switch (activePath) {
      case DASHBOARD:
        return <Dashboard />;
      case TRAINER:
        return <Trainer />;
      case GENERATOR:
        return <Generator score={score} setScore={setScore} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Provider store={store}>
      <Fragment>
        <Header setActivePath={setActivePath} activePath={activePath} />
        <Main>
          <ReactNotification />
          {getActivePath()}
        </Main>
      </Fragment>
    </Provider>
  );
};

export default App;
