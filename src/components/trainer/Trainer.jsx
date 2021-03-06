import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import TrainerStatCards from './subcomponents/TrainerStatCards';
import PetSelect from './subcomponents/PetSelect';
import TrainingCard from './subcomponents/TrainingCard';
import PetSnacks from './subcomponents/PetSnacks';
import TrainerControl from './subcomponents/TrainerControl';
import PropTypes from 'prop-types';
import { sendNotification, sendXPResult } from '../../util/notify';

import { generateGameId } from '../../actions/generateGameId';
import { fetchPetRewards } from '../../actions/fetchRewards';
import { feedSnack } from '../../actions/feedSnack';

const Trainer = props => {
  const [activeSnackId, setActiveSnackId] = useState('');
  const [trainerActive, setTrainerActive] = useState(false);

  const handleChangeSnack = id => {
    setActiveSnackId(id);
  };

  const handleGame = async () => {
    try {
      setTrainerActive(true);
      await props.generateGameId();
      const gameExp = await props.fetchPetRewards();
      const feedExp = await props.feedSnack(activeSnackId);
      setTrainerActive(false);
      sendXPResult(parseInt(gameExp) + parseInt(feedExp) || gameExp);
    } catch (err) {
      sendNotification(err, 'danger');
      setTrainerActive(false);
      console.log(err);
    }
  };

  return (
    <Fragment>
      <h1>Pet Trainer</h1>
      <div className='row'>
        <div className='col-5'>
          <TrainerStatCards
            currentSnacks={props.snacks}
            charId={props.charId}
            trainerActive={trainerActive}
          />
          <PetSelect trainerActive={trainerActive} />
        </div>
        <div className='col'>
          <TrainingCard />
          <div className='row'>
            <div className='col-7'>
              <PetSnacks
                activeSnackId={activeSnackId}
                setActiveSnackId={handleChangeSnack}
                currentSnacks={props.snacks}
              />
            </div>
            <div className='col'>
              <TrainerControl />
            </div>
          </div>

          <button
            className='btn btn-block btn-primary feed-btn mt-4'
            onClick={handleGame}
            disabled={trainerActive || !props.charId || !props.petId}
          >
            Feed Pet
          </button>
        </div>
      </div>
    </Fragment>
  );
};

Trainer.propTypes = {
  snacks: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  snacks: state.character.snacks,
  charId: state.character.data.CharId,
  petId: state.game.petId
});

export default connect(
  mapStateToProps,
  { generateGameId, fetchPetRewards, feedSnack }
)(Trainer);
