import React from 'react';
import Nav from './subcomponents/Nav';
import NavMenu from './subcomponents/NavMenu';
import logo from '../../assets/ninja_grey.png';

const Header = props => {
  return (
    <header>
      <Nav />
      <NavMenu
        setActivePath={props.setActivePath}
        activePath={props.activePath}
      />
      <img src={logo} alt='Ninja' className='logo' />
      <div className='draggable'></div>
    </header>
  );
};

export default Header;
