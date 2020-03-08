import { createGlobalStyle } from 'styled-components';
import { viewports } from '../../helpers/constants/viewports';
import { colors } from '../../helpers/constants/colors';

export const StyledGlobalStyles = createGlobalStyle`
  * {
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
  }

  html {
    background-color: ${colors.blue};
    color: ${colors.white};

    @media ${viewports.mobile} {
      background-color: ${colors.lightBlue};
    }
  }

  body {
    margin: 0;
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1 {
    font-size: 2.2rem;
    font-weight: normal;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: lighter;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: lighter;
  }
`;
