import styled from 'styled-components';
import { colors, textSize, wrapperMixin } from '../../css/variables';

export const Wrapper = styled.div`
  ${wrapperMixin}
  flex-direction: column;
  padding: 40px 20px;

  @media screen and (min-width: 768px) {
    padding: 40px 40px 25px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 40px 53px;
  }
`;

export const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 44px;
  }
`;

export const Image = styled.img`
  width: 137px;
  height: 208px;
  border-radius: 11px;

  @media screen and (min-width: 768px) {
    width: 169px;
    height: 256px;
    border-radius: 13px;
  }

  @media screen and (min-width: 1440px) {
    width: 224px;
    height: 340px;
    border-radius: 17px;
  }
`;

export const Title = styled.h3`
  font-family: 'Gilroy-Bold';
  font-size: ${textSize.xxs};
  letter-spacing: -0.02em;
  width: 146px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    font-size: ${textSize.m};
    margin-top: 25px;
    width: 350px;
  }
`;

export const Author = styled.p`
  font-size: 10px;
  color: ${colors.lightGrey};
  letter-spacing: -0.02em;
  margin-top: 5px;

  @media screen and (min-width: 768px) {
    font-size: ${textSize.xxs};
    margin-top: 4px;
  }
`;

export const Svg = styled.svg`
  width: 40px;
  height: 40px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
    margin-top: 16px;
  }
`;
