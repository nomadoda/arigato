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
  padding: 20px;
  z-index: 2;
  background-color: #ffffff;

  @media ${viewports.mobile} {
    margin: 0;
  }
  button[name='close'] {
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    outline: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
  }
`;
