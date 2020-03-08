import React from 'react';
import { GlobalStyle } from './components/GlobalStyle';
import { FilmsList } from './compositions/FilmsList';

function App() {
  return (
    <>
      <GlobalStyle />
      <FilmsList />
    </>
  );
}

export default App;
