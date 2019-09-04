import React from 'react';
import CharacterCard from './CharacterCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CharacterSelect = ({ characters }) => {
  return (
    <div className='row'>
      <div className='col'>
        <div className='card choose-character'>
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
                  characters.map(char => {
                    return (
                      <CharacterCard
                        name={char.Name}
                        school={char.School}
                        level={char.Level}
                        id={char.CharId}
                        key={char.CharId}
                      />
                    );
                  })
                ) : (
                  <p style={{ textAlign: 'center' }} class='mt-4'>
                    No Characters Loaded :(
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
  characters: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  characters: state.user.characters
});

export default connect(mapStateToProps)(CharacterSelect);
