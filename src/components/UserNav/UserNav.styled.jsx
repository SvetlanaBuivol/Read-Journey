import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors, textSize } from '../../css/variables';

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  padding-bottom: 4px;
  font-size: ${textSize.xxs};
  line-height: 1.28;
  letter-spacing: -0.02em;
  color: ${colors.lightGrey};

  &.active {
    color: ${colors.white};

    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: ${colors.blue};
      border-radius: 8px;
    }
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 8px;
    font-size: ${textSize.xs};
    line-height: 1.12;
  }
`;
