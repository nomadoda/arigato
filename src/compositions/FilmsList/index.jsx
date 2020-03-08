import React, { useEffect, useState } from 'react';
import { StyledFilmsList } from './style';
import { Card } from '../../components/Card';
import { useFetch } from '../../utils/useFetch';

const FILMS_DATA_URL = 'https://swapi.co/api/films/';

export const FilmsList = ({ onFilmSelect }) => {
  const [films, setFilms] = useState([]);
  const { response, error, loading } = useFetch(FILMS_DATA_URL);

  useEffect(() => {
    if (response && response.results) {
      const films = response.results;
      const sortedFilms = films.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
      setFilms(sortedFilms);
    }
  }, [response]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Some error occured</div>;
  }

  return (
    <StyledFilmsList>
      {films.map((film) => (
        <Card
          key={film.episode_id}
          title={film.title}
          subtitle={film.release_date}
          onClick={() => onFilmSelect(film)}
        />
      ))}
    </StyledFilmsList>
  );
};
