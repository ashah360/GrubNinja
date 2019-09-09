import React, { Fragment, useState, useEffect, useContext } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Dashboard from './components/dashboard/Dashboard';
import Trainer from './components/trainer/Trainer';
import Generator from './components/generator/Generator';
import { DASHBOARD, TRAINER, GENERATOR } from './constants/path';
import NotyfContext from './context/NotyfContext';

import { Provider } from 'react-redux';
import store from './store';

import 'notyf/notyf.min.css';
import './styles/argon.css';
import './styles/App.css';

const App = () => {
  const notyf = useContext(NotyfContext);

  const triggerToast = (message, type = 'default') => {
    notyf.open({ type, message });
  };

  // Implement toasts for simple things like showing XP each time the game runthrough action is called
  // Impelement modals for error messages, and talent reveals

  const [activePath, setActivePath] = useState(DASHBOARD);

  const getActivePath = () => {
    switch (activePath) {
      case DASHBOARD:
        return <Dashboard />;
      case TRAINER:
        return <Trainer triggerToast={triggerToast} />;
      case GENERATOR:
        return <Generator />;
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
