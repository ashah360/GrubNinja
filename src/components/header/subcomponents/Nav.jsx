import React from 'react';

const closeApp = () => window.ipcRenderer.send('exit');
const minimizeApp = () => window.ipcRenderer.send('minimize');

const Nav = props => {
  return (
    <nav>
      Grub<span>Ninja</span>
      <div className='control-bar'>
        <div
          className='notifications'
          onClick={() => props.setNotifState(true)}
        >
          <i className='far fa-bell'></i>
          <div className='notification-badge'></div>
        </div>
        <i className='minimize fas fa-minus' onClick={minimizeApp}></i>
        <i className='exit fas fa-times' onClick={closeApp}></i>
      </div>
    </nav>
  );
};

export default Nav;
