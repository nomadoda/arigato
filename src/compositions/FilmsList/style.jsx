import styled from 'styled-components';
import { StyledCard } from '../../components/Card/style';
import { viewports } from '../../helpers/constants/viewports';

export const StyledFilmsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px 40px;

  ${StyledCard} {
  }

  @media ${viewports.mobile} {
    grid-template-columns: 1fr;
  }
`;
