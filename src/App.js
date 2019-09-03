import React, { Fragment } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Dashboard from './components/dashboard/Dashboard';
import Trainer from './components/trainer/Trainer';
import Footer from './components/layout/Footer';

import { Provider } from 'react-redux';
import store from './store';

//import './styles/argon.css';
//import './styles/App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <Main>
          <Dashboard />
        </Main>
      </Fragment>
    </Provider>
  );
};

export default App;
