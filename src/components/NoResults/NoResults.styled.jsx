import styled from 'styled-components';
import { colors, textSize } from '../../css/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 65px auto;

  @media screen and (min-width: 1440px) {
    margin: auto;
  }

  p {
    text-align: center;
    width: 197px;
    color: ${colors.lightGrey};
    font-size: ${textSize.xxs};
    span {
      color: ${colors.white};
    }

    @media screen and (min-width: 768px) {
      width: 274px;
    }
  }
`;
export const StyledImage = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 130px;
    height: 130px;
    margin-bottom: 30px;
  }
`;
