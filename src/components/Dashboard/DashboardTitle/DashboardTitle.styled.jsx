import styled from 'styled-components';
import { textSize } from 'css/variables';

export const Title = styled.h2`
  font-family: 'Gilroy-Bold';
  font-size: ${textSize.s};
  line-height: 1;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    font-size: ${textSize.m};
  }
`;
