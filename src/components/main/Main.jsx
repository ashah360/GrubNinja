import React from 'react';

const Main = props => {
  return (
    <main>
      <section className='view-container'>{props.children}</section>
    </main>
  );
};

export default Main;
