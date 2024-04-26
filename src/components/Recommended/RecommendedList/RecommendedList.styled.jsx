import styled from 'styled-components';
import { wrapperMixin } from 'css/variables';

export const Wrapper = styled.div`
  ${wrapperMixin}
  position: relative;
  flex-direction: column;
  padding: 40px 20px;

  @media screen and (min-width: 768px) {
    padding: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 40px 28px;
  }
`;

export const BooksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 21px;
  margin-top: 34px;

  @media screen and (min-width: 768px) {
    gap: 27px 25px;
    margin-top: 28px;
  }

  @media screen and (min-width: 1440px) {
    gap: 27px 20px;
  }
`;
