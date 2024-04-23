import { colors, textSize } from '../../../../../css/variables';
import styled from 'styled-components';

export const CircleContainer = styled.div`
  position: relative;
  width: 116px;
  height: 116px;

  @media screen and (min-width: 768px) {
    width: 138px;
    height: 138px;
  }

  @media screen and (min-width: 1440px) {
    width: 189px;
    height: 189px;
  }
`;

export const CircleSVG = styled.svg`
width: 100%;
height: 100%;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

export const BackgroundCircle = styled.circle`
  stroke: ${colors.darkGrey};
  stroke-width: 11;
  fill: transparent;
`;

export const ProgressCircle = styled.circle`
  stroke: ${colors.green};
  stroke-width: 10;
  fill: transparent;
  transition: stroke-dashoffset 0.35s;
  stroke-linecap: round;
`;

export const Text = styled.text`
  fill: ${colors.white};
  font-family: 'Gilroy-Bold';
  font-size: ${textSize.s};
  text-anchor: middle;
  transform: rotate(90deg);
  transform-origin: 60px 60px;

  @media screen and (min-width: 768px) {
    font-size: ${textSize.m};
  }
`