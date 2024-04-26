import styled from 'styled-components';
import { backdropMixin, colors } from '../../../css/variables';

export const Backdrop = styled.div`
  ${backdropMixin}
  justify-content: flex-end;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 100hv;
  background-color: ${colors.mediumGrey};
  padding: 34px 40px 40px;

  button {
    align-self: flex-end;
  }
`;
