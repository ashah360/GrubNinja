import React from 'react';

const NavMenu = () => {
  return (
    <section className='navigation-menu'>
      <a href='#!' className='nav-menu-item menu-active'>
        <i className='fas fa-crown'></i>
        <span>Dashboard</span>
      </a>
      <a href='#!' className='nav-menu-item'>
        <i className='fas fa-paw'></i>
        <span>Trainer</span>
      </a>
      <a href='#!' className='nav-menu-item'>
        <i className='fas fa-unlock'></i>
        <span>Generator</span>
      </a>
      <a href='#!' className='nav-menu-item'>
        <i className='fas fa-cog'></i>
        <span>Settings</span>
      </a>
      <a href='#!' className='nav-menu-item'>
        <i className='fab fa-discord'></i>
        <span>Discord</span>
      </a>
    </section>
  );
};

export default NavMenu;
