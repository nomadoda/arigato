import React from 'react';
import { StyledFilmsList } from './style';

const mockData = [
  {
    title: 'A new hope',
    date: new Date(1977, 5, 25),
  },
  {
    title: 'Empire strikes back',
    date: new Date(1980, 5, 17),
  },
];

export const FilmsList = () => {
  return (
    <StyledFilmsList>
      {mockData.map((film) => (
        <li>{film.title}</li>
      ))}
    </StyledFilmsList>
  );
};
