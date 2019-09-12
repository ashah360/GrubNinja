import React from 'react';
import PropTypes from 'prop-types';

const UserDropdown = props => {
  return (
    <div className='dropdown user-dropdown'>
      <button
        className='btn btn-secondary dropdown-toggle'
        type='button'
        id='dropdownMenuButton'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'
      >
        Regular
      </button>
      <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
        <a className='dropdown-item' href='#!'>
          Action
        </a>
        <a className='dropdown-item' href='#!'>
          Another action
        </a>
        <a className='dropdown-item' href='#!'>
          Something else here
        </a>
      </div>
    </div>
  );
};

UserDropdown.propTypes = {};

export default UserDropdown;
