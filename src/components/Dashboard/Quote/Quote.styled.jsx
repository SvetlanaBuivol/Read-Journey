import styled from 'styled-components';
import { colors, innerWrapper, textSize } from '../../../css/variables';

export const Wrapper = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    ${innerWrapper}
    display: flex;
    align-items: center;
    gap: 14px;
    width: 100%;
    padding: 15px 20px;

    p {
      font-size: ${textSize.xxs};
      letter-spacing: -0.02em;
      color: ${colors.lightGrey};

      span {
        color: ${colors.white};
      }
    }
  }
`;
