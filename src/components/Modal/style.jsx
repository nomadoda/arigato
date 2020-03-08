import styled from 'styled-components';
import { colors } from '../../helpers/constants/colors';
import { viewports } from '../../helpers/constants/viewports';

export const StyledModal = styled.aside`
  position: fixed;
  margin: 40px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 40px;
  z-index: 2;
  background-color: #ffffff;

  @media ${viewports.mobile} {
    margin: 0;
    overflow: auto;
    overscroll-behavior: contain;
  }

  h1 {
    margin: 0;
    margin-bottom: 60px;

    @media ${viewports.mobile} {
      margin-top: 60px;
      margin-bottom: 30px;
    }
  }

  button[name='close'] {
    position: absolute;
    top: 0;
    right: 0;
    margin: 40px;
    outline: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;
