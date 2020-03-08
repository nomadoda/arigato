import React, { useState } from 'react';
import { GlobalStyle } from '../components/GlobalStyle';
import { FilmsList } from '../compositions/FilmsList';
import { StyledApp } from './style';

export const App = () => {
  const [selectedFilm, setSelectedFilm] = useState(null);

  return (
    <StyledApp>
      <GlobalStyle />
      <FilmsList onFilmSelect={setSelectedFilm} />
    </StyledApp>
  );
};
