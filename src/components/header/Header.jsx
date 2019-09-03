import React from 'react';
import Nav from './subcomponents/Nav';
import NavMenu from './subcomponents/NavMenu';
import logo from '../../assets/ninja_grey.png';

const Header = props => {
  return (
    <header>
      <Nav />
      <NavMenu />
      <img src={logo} alt='Ninja' class='logo' />
      <div class='draggable'></div>
    </header>
  );
};

export default Header;
