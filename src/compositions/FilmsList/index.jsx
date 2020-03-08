import React, { useEffect, useState } from 'react';
import { StyledFilmsList } from './style';
import { Card } from '../../components/Card';

const DATA_URL = 'https://swapi.co/api/films/';

export const FilmsList = () => {
  const [films, setFilms] = useState([]);

  async function getFilmsData() {
    const response = await fetch(DATA_URL);
    const json = await response.json();
    const films = json.results;
    setFilms(films);
  }

  useEffect(() => {
    getFilmsData();
  }, []);

  return (
    <StyledFilmsList>
      {films.map((film) => (
        <Card key={film.episode_id} title={film.title} subtitle={film.release_date} />
      ))}
    </StyledFilmsList>
  );
};
