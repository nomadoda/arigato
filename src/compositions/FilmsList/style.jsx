import styled from 'styled-components';
import { StyledCard } from '../../components/Card/style';

export const StyledFilmsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px 40px;
  ${StyledCard} {
  }
`;
