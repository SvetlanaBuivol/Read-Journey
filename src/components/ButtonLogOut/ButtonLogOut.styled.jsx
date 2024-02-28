import styled from 'styled-components';
import { colors, textSize } from '../../css/variables';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: 1px solid ${colors.transparentWhite};
  padding: 10px 20px;
  font-family: 'Gilroy-Bold';
  font-size: ${textSize.xxs};
  line-height: 1.28;
  letter-spacing: 0.02em;

  @media screen and (min-width: 768px) {
    padding: 12px 28px;
    font-size: ${textSize.xs};
    line-height: 1.12;
  }
`;
