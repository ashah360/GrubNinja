import React, { Fragment } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Dashboard from './components/dashboard/Dashboard';
import Trainer from './components/trainer/Trainer';
import Footer from './components/layout/Footer';

//import './styles/argon.css';
//import './styles/App.css';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Main>
        <Trainer />
      </Main>
    </Fragment>
  );
};

export default App;
