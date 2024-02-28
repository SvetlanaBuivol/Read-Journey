import styled from 'styled-components';
import { wrapperMixin } from '../../css/variables';

export const Wrapper = styled.div`
  ${wrapperMixin}
  flex-direction: column;
  padding: 20px 20px 40px;

  @media screen and (min-width: 768px) {
    padding: 40px 64px 214px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 64px;
  }
`;
