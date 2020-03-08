import styled from 'styled-components';
import { StyledFilmsList } from '../compositions/FilmsList/style';

export const StyledApp = styled.main`
  min-height: 100vh;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${StyledFilmsList} {
    width: 100%;
    max-width: 800px;
  }
`;
