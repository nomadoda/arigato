import { createGlobalStyle } from 'styled-components';
import { viewports } from '../../helpers/constants/viewports';
import { colors } from '../../helpers/constants/colors';

export const StyledGlobalStyles = createGlobalStyle`
  html {
    font-family: Arial, Helvetica, sans-serif;
    background-color: ${colors.blue};

    @media ${viewports.mobile} {
      background-color: ${colors.lightBlue};
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: lighter;
  }
`;
