import React, { useState } from 'react';
import { connect } from 'react-redux';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';
import Loading from '../../misc/Loading';
import { sendNotification } from '../../../util/notify';
import { setCharacter, getPetList } from '../../../actions/character';

const CharacterSelect = ({
  characters,
  currentCharacter,
  setCharacter,
  getPetList
}) => {
  const [activeCharacter, setActiveCharacter] = useState('');

  const handleSetCharacter = async id => {
    setCharacter(id);
    setActiveCharacter(id); // We can use a selector for this too
    try {
      await getPetList();
    } catch (error) {
      sendNotification(
        error || 'Could not fetch pet data. Please login again.',
        'danger'
      );
    }
  };

  return (
    <div className='row'>
      <div className='col'>
        <div className='card choose-character'>
          {currentCharacter.data.CharId && <Loading />}
          <div className='card-header'>
            <div className='row align-items-center'>
              <div className='col'>
                <h5 className='card-title text-uppercase text-muted mb-0'>
                  Select Character
                </h5>
              </div>
            </div>
          </div>
          <div className='row pet-table'>
            <div className='col'>
              <div className='char-table-rows'>
                {characters.length > 0 ? (
                  characters.map(function(char) {
                    return (
                      <CharacterCard
                        name={char.Name}
                        school={char.School}
                        level={char.Level}
                        charId={char.CharId}
                        key={char.CharId}
                        onClick={() => handleSetCharacter(char.CharId)}
                        activeCharacter={activeCharacter}
                      />
                    );
                  })
                ) : (
                  <p
                    style={{ textAlign: 'center', fontSize: '0.875rem' }}
                    className='mt-4'
                  >
                    No Characters Loaded
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CharacterSelect.propTypes = {
  characters: PropTypes.array.isRequired,
  setCharacter: PropTypes.func.isRequired,
  getPetList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  characters: state.user.characters,
  currentCharacter: state.character
});

export default connect(
  mapStateToProps,
  { setCharacter, getPetList }
)(CharacterSelect);
