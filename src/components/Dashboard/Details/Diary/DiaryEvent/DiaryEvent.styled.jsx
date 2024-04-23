import styled from 'styled-components';
import { colors, textSize } from '../../../../../css/variables';

export const Line = styled.div`
  position: absolute;
  top: 16px;
  width: 2px;
  left: -18px;
  height: 100%;
  background-color: ${colors.darkGrey};

  @media screen and (min-width: 768px) {
    top: 20px;
    left: -21px;
    height: calc(100% - 8px);
  }

  @media screen and (min-width: 1440px) {
    height: 100%;
  }
`;

export const Event = styled.li`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 25px;

  @media screen and (min-width: 768px) {
    margin-left: 30px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -25px;
    width: 16px;
    height: 16px;
    border: 4px solid ${colors.lightGrey};
    border-radius: 4px;

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
      left: -30px;
    }
  }

  &:last-of-type::before {
    border: 4px solid ${colors.white};
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const Container = styled.div`
  text-align: end;
`;

export const Data = styled.p`
  font-family: 'Gilroy-Bold';

  @media screen and (min-width: 768px) {
    font-size: ${textSize.xs};
  }
`;

export const Percentage = styled.p`
  font-size: ${textSize.xxs};
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    font-size: ${textSize.m};
  }

  @media screen and (min-width: 1440px) {
    margin-top: 28px;
  }
`;

export const Time = styled.p`
  font-size: 10px;
  color: ${colors.lightGrey};
  margin-top: 4px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    margin-top: 8px;
  }
`;

export const Pages = styled.p`
  color: ${colors.lightGrey};

  @media screen and (min-width: 768px) {
    font-size: ${textSize.xxs};
  }
`;

export const Speed = styled.p`
  font-size: 9px;
  color: ${colors.lightGrey};
  margin-top: 7px;
  width: 45px;
  letter-spacing: -0.02em;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 55px;
    font-size: 11px;
  }
`;

export const GrafficSvg = styled.svg`
  width: 43px;
  height: 18px;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    width: 59px;
    height: 25px;
    margin-top: 18px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 30px;
  }
`;
