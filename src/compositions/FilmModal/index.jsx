import React, { useContext, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyledFilmModal } from './style';
import { CharactersContext } from '../../contexts/CharactersContext';

export const FilmModal = ({ film, ...props }) => {
  const [characters, setCharacters] = useState();
  const { getCharacters } = useContext(CharactersContext);

  useEffect(() => {
    async function getData() {
      const characterIds = film.characters.flatMap((url) => url.match(/\d+/g));
      const result = await getCharacters(characterIds);
      setCharacters(result);
    }
    getData();
  }, [film, getCharacters]);

  return (
    <StyledFilmModal title={film.title} {...props}>
      <h2>Characters</h2>
      {characters ? (
        <ul>
          {characters.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading characters</p>
      )}
    </StyledFilmModal>
  );
};

FilmModal.propTypes = {
  film: PropTypes.object,
};
