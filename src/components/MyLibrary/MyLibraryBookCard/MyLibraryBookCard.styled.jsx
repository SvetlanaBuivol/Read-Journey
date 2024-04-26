import styled from 'styled-components';
import { colors, textSize } from '../../../css/variables';

export const Card = styled.div`
  width: 137px;
  list-style: none;
`;

export const Image = styled.img`
  height: 208px;
  border-radius: 10px;
  margin-bottom: 8px;
`;

export const BookInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 95px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  h3 {
    font-family: 'Gilroy-Bold';
    font-size: ${textSize.xxs};
    letter-spacing: -0.02em;
  }

  p {
    font-size: 10px;
    letter-spacing: -0.02em;
    color: ${colors.lightGrey};
  }
`;
