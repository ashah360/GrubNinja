import React from 'react';
import { Notyf } from 'notyf';

export default React.createContext(
  new Notyf({
    duration: 1000,
    types: [
      {
        type: 'warning',
        backgroundColor: 'orange',
        icon: {
          className: 'material-icons',
          tagName: 'i',
          text: 'warning'
        }
      },
      {
        type: 'error',
        backgroundColor: '#f5365c',
        duration: 2000
      },
      {
        type: 'trainer',
        backgroundColor: '#9083eb',
        duration: 1500,
        icon: {
          className: 'fas fa-graduation-cap',
          tagName: 'i'
        }
      }
    ]
  })
);
