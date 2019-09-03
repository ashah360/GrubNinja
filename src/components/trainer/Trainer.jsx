import React, { Fragment } from 'react';
import TrainerStatCards from './subcomponents/TrainerStatCards';
import PetSelect from './subcomponents/PetSelect';
import TrainingCard from './subcomponents/TrainingCard';
import PetSnacks from './subcomponents/PetSnacks';
import PropTypes from 'prop-types';

const Trainer = props => {
  return (
    <Fragment>
      <h1>Pet Trainer</h1>
      <div className='row'>
        <div className='col-5'>
          <TrainerStatCards />
          <PetSelect />
        </div>
        <div className='col'>
          <TrainingCard />
          <PetSnacks />
          <div class='btn btn-block btn-primary feed-btn mt-4'>Feed Pet</div>
        </div>
      </div>
    </Fragment>
  );
};

Trainer.propTypes = {};

export default Trainer;
