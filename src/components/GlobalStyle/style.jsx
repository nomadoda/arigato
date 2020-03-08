import { createGlobalStyle } from 'styled-components';

export const StyledGlobalStyles = createGlobalStyle`
  html {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #34495E;
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
