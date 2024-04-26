import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, textSize } from '../../../../css/variables';

export const StyledLink = styled(Link)`
  line-height: 1.16;
  letter-spacing: -0.02em;
  text-decoration: underline;
  color: ${colors.lightGrey};
  transition: color 250ms ease-in;

  &:hover {
    color: ${colors.white};
  }

  @media screen and (min-width: 768px) {
    font-size: ${textSize.xxs};
    line-height: 1.28;
  }
`;
