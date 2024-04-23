import { colors, textSize } from '../../../css/variables';
import styled from 'styled-components';

export const ModalContant = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 89%;
  max-width: 335px;
  padding: 60px 47px;
  border-radius: 12px;
  border: 1px solid ${colors.lightGrey20};
  background-color: ${colors.darkGrey};

  @media screen and (min-width: 768px) {
    width: 342px;
    max-width: 342px;
    padding: 50px;
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
    width: 50px;
    height: 50px;
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
    width: 68px;
    height: 70px;
    margin-bottom: 32px;
  }
`

export const Title = styled.h2`
    font-family: 'Gilroy-Bold';
    font-size: ${textSize.s};
    letter-spacing: -0.02em;
    margin-bottom: 10px;

    @media screen and (min-width: 768px) {
    font-size: ${textSize.m};
    margin-bottom: 14px;
  }
`

export const Text = styled.p`
    font-size: ${textSize.xxs};
    color: ${colors.lightGrey};
    letter-spacing: -0.02em;

    span{
        color: ${colors.white};
    }
`