import styled from "styled-components";
import { colors, textSize } from "../../../../css/variables";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    border: 1px solid ${colors.white};
    padding: ${(props) => props.$register ? '12px 29px' : '12px 45px'};
    font-family: 'Gilroy-Bold';
    font-size: ${textSize.xxs};
    line-height: 1.28;
    letter-spacing: 0.02em;
    background-color: ${colors.white};
    color: ${colors.darkGrey};
    transition: background-color 250ms ease-in, color 250ms ease-in, border 250ms ease-in;

    @media screen and (min-width: 768px) {
        font-size: ${textSize.m};
        line-height: 1;
        padding: 16px 54px;
    }

    &:hover {
        background-color: transparent;
        color: ${colors.white};
        border: 1px solid ${colors.transparentWhite};
    }
`