import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { CharactersContext } from '../../contexts/CharactersContext';
import { StyledFilmModal } from './style';

export const FilmModal = ({ film, ...props }) => {
  const [characters, setCharacters] = useState();
  const [sortedCharacters, setSortedCharacters] = useState();

  const { getCharacters } = useContext(CharactersContext);

  useEffect(() => {
    let didCancel = false;
    async function getData() {
      const characterIds = film.characters.flatMap((url) => url.match(/\d+/g));
      const result = await getCharacters(characterIds);
      if (!didCancel) {
        setCharacters(result);
      }
    }
    getData();
    return function() {
      didCancel = true;
    };
  }, [film, getCharacters]);

  useEffect(() => {
    if (characters) {
      setSortedCharacters(characters.sort((a, b) => (a.name > b.name ? 1 : -1)));
    }
  }, [characters]);

  return (
    <StyledFilmModal title={film.title} {...props}>
      <div className="content">
        <h2>Characters</h2>
        {sortedCharacters ? (
          <ol>
            {sortedCharacters.map((character) => (
              <li key={character.id}>{character.name}</li>
            ))}
          </ol>
        ) : (
          <p>Loading characters...</p>
        )}
      </div>
    </StyledFilmModal>
  );
};

FilmModal.propTypes = {
  film: PropTypes.object,
};
