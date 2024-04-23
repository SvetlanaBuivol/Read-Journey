import styled from 'styled-components';
import { colors, textSize } from '../../../css/variables';

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 310px;
  }
`;

export const Text = styled.p`
  margin-top: 14px;
  font-size: ${textSize.xxs};
  color: ${colors.lightGrey};
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    width: 325px;
  }
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: ${colors.mediumGrey};
  border-radius: 50%;
  margin: 20px auto 0;

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
    margin: 50px auto 0;
  }

  @media screen and (min-width: 1440px) {
    margin: 60px auto 0;
  }
`;
