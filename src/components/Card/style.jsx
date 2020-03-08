import styled from 'styled-components';
import { colors } from '../../helpers/constants/colors';
import { viewports } from '../../helpers/constants/viewports';

export const StyledCard = styled.li`
  min-height: 120px;
  position: relative;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${colors.lightBlue};
  color: #ffffff;
  text-align: center;

  @media ${viewports.mobile} {
    background-color: ${colors.blue};
    border-radius: 0;
  }

  p {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 8px 12px;

    @media ${viewports.mobile} {
      text-align: right;
    }
  }
`;
