import styled from 'styled-components';
import { colors } from '../../../../css/variables';

export const Card = styled.li`
  width: 71px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  img {
    border-radius: 8px;
    height: 107px;
    margin-bottom: 8px;
  }

  h3 {
    font-family: 'Gilroy-Bold';
    font-size: 10px;
    letter-spacing: -0.02em;
    margin-bottom: 2px;
  }

  p {
    font-size: 10px;
    letter-spacing: -0.02em;
    color: ${colors.lightGrey};
  }
`;
