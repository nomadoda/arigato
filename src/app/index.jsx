import React from 'react';
import { GlobalStyle } from '../components/GlobalStyle';
import { FilmsList } from '../compositions/FilmsList';
import { StyledApp } from './style';

export const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <FilmsList />
    </StyledApp>
  );
};
