import styled from 'styled-components';
import { wrapperMixin } from '../../css/variables';

export const Wrapper = styled.div`
  ${wrapperMixin}
  justify-content: center;
  padding: 20px 40px 0;

  @media screen and (min-width: 1440px) {
    padding: 80px 97px 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 255px;
  height: auto;

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`;
