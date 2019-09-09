import React, { Fragment, useState } from 'react';
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

const App = () => {
  // Implement toasts for simple things like showing XP each time the game runthrough action is called
  // Impelement modals for error messages, and talent reveals

  const [activePath, setActivePath] = useState(DASHBOARD);

  const getActivePath = () => {
    switch (activePath) {
      case DASHBOARD:
        return <Dashboard />;
      case TRAINER:
        return <Trainer />;
      case GENERATOR:
        return <Generator />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Provider store={store}>
      <Fragment>
        <ReactNotification />
        <Header setActivePath={setActivePath} activePath={activePath} />
        <Main>{getActivePath()}</Main>
      </Fragment>
    </Provider>
  );
};

export default App;
