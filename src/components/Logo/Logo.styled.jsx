import styled from 'styled-components';
import { textSize } from '../../css/variables';

export const LogoName = styled.h1`
display: none;
  font-family: 'Gilroy-Bold';
  text-transform: uppercase;
  font-size: ${textSize.s};
  line-height: 1;
  letter-spacing: 0.02em;
  
  @media screen and (min-width: 768px) {
    display: ${props => props.$hide ? 'block' : 'none'};
  }
  @media screen and (min-width: 1440px) {
    display: block;
  }
  `;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
