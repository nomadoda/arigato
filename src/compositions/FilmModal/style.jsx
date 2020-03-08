import styled from 'styled-components';
import { Modal } from '../../components/Modal';
import { viewports } from '../../helpers/constants/viewports';

export const StyledFilmModal = styled(Modal)`
  h2 {
    @media ${viewports.mobile} {
      display: none;
    }
  }
  ol {
    column-count: 3;

    @media ${viewports.mobile} {
      column-count: unset;
    }

    li {
      font-size: 1.2rem;
      line-height: 2.2rem;
    }
  }
`;
