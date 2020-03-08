import styled from 'styled-components';

export const StyledCard = styled.li`
  min-height: 120px;
  position: relative;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #3498db;
  color: #ffffff;
  text-align: center;
  p {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 8px;
  }
`;
