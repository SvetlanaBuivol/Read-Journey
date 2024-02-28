import styled from 'styled-components';
import { colors, textSize } from '../../css/variables';

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Gilroy-Bold';
  font-size: ${textSize.xs};
  line-height: 1;
  letter-spacing: -0.02em;
`;

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid ${colors.transparentWhite};
  background-color: ${colors.mediumGrey};
  width: 35px;
  height: 35px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    line-height: 1.1;
  }
`;

export const UserName = styled.p`
  @media screen and (max-width: 1439px) {
    display: none;
  }
`;
