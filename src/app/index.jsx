import React, { useState } from 'react';
import { GlobalStyle } from '../components/GlobalStyle';
import { FilmsList } from '../compositions/FilmsList';
import { StyledApp } from './style';
import { FilmModal } from '../compositions/FilmModal';
import { CharactersContextProvider } from '../contexts/CharactersContext';

export const App = () => {
  const [selectedFilm, setSelectedFilm] = useState(null);

  return (
    <StyledApp>
      <GlobalStyle />
      <CharactersContextProvider>
        {selectedFilm && <FilmModal film={selectedFilm} onClose={() => setSelectedFilm(null)} />}
      </CharactersContextProvider>
      <FilmsList onFilmSelect={setSelectedFilm} />
    </StyledApp>
  );
};
