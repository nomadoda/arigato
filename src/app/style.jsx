import styled from 'styled-components';
import { StyledFilmsList } from '../compositions/FilmsList/style';

export const StyledApp = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  ${StyledFilmsList} {
    max-width: 800px;
  }
`;
