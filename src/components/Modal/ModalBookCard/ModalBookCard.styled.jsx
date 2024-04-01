import styled from 'styled-components';
import { buttonMixin, colors, textSize } from '../../../css/variables';

export const ModalContant = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 89%;
  max-width: 335px;
  padding: 40px 97px;
  border-radius: 12px;
  border: 1px solid ${colors.lightGrey20};
  background-color: ${colors.darkGrey};

  @media screen and (min-width: 768px) {
    width: 65%;
    max-width: 500px;
    padding: 50px 167px;
  }
`;

export const BookCard = styled.div`
  width: 140px;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 153px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 22px;
  height: 22px;
`;

export const Image = styled.img`
  width: 140px;
  height: 213px;
  margin-bottom: 16px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 153px;
    height: 233px;
  }
`;

export const BookTitle = styled.h3`
  font-family: 'Gilroy-Bold';
  font-size: ${textSize.s};
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 2px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`;

export const Author = styled.p`
  line-height: 1.16;
  letter-spacing: -0.02em;
  color: ${colors.lightGrey};
  margin-bottom: 4px;
`;

export const Pages = styled.p`
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Button = styled.button`
  ${buttonMixin}
`;
