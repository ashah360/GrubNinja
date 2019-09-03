import React from 'react';

const Nav = () => {
  return (
    <nav>
      Grub<span>Ninja</span>
      <div className='control-bar'>
        <div className='notifications'>
          <i className='far fa-bell'></i>
          <div className='notification-badge'></div>
        </div>
        <i className='minimize fas fa-minus'></i>
        <i className='exit fas fa-times'></i>
      </div>
    </nav>
  );
};

export default Nav;
