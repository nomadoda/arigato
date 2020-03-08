import styled from 'styled-components';
import { Modal } from '../../components/Modal';

export const StyledFilmModal = styled(Modal)`
  .content {
    display: flex;
    flex-direction: column;
  }
  ol {
    flex: 1;
    display: flex;
    flex-flow: column wrap;
    overflow: hidden;

    li {
      font-size: 1.2rem;
      line-height: 2.2rem;
    }
  }
`;
