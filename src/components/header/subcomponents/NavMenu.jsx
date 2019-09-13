import React from 'react';
import { DASHBOARD, TRAINER, GENERATOR } from '../../../constants/path';

const discordInvite = 'https://discord.gg/AJJcbMu';

const NavMenu = ({ activePath, setActivePath, setSettingsState }) => {
  return (
    <section className='navigation-menu'>
      <a
        href='#!'
        className={`nav-menu-item ${activePath === DASHBOARD && 'menu-active'}`}
        onClick={() => setActivePath(DASHBOARD)}
      >
        <i className='fas fa-crown'></i>
        <span>Dashboard</span>
      </a>
      <a
        href='#!'
        className={`nav-menu-item ${activePath === TRAINER && 'menu-active'}`}
        onClick={() => setActivePath(TRAINER)}
      >
        <i className='fas fa-paw'></i>
        <span>Trainer</span>
      </a>
      <a
        href='#!'
        className={`nav-menu-item ${activePath === GENERATOR && 'menu-active'}`}
        onClick={() => setActivePath(GENERATOR)}
      >
        <i className='fas fa-unlock'></i>
        <span>Generator</span>
      </a>
      <a
        href='#!'
        className='nav-menu-item'
        onClick={() => setSettingsState(true)}
      >
        <i className='fas fa-cog'></i>
        <span>Settings</span>
      </a>
      <a
        href='#!'
        className='nav-menu-item'
        onClick={() => window.ipcRenderer.send('openUrl', discordInvite)}
      >
        <i className='fab fa-discord'></i>
        <span>Discord</span>
      </a>
    </section>
  );
};

export default NavMenu;
