import styled from "styled-components";
import { colors } from "../../css/variables";

export const Title = styled.h1`
    font-family: 'Gilroy-Bold';
    font-size: 32px;
    line-height: 1;
    letter-spacing: 0.02em;
    margin-top: 40px;
    margin-bottom: 20px;

    span {
        color: ${colors.lightGrey50};
    }

    @media screen and (min-width: 768px) {
        margin-top: 157px;
    margin-bottom: 40px;
        font-size: 64px;
        line-height: 0.9;
        width: 444px;
    }

    @media screen and (min-width: 1440px) {
         margin-top: 107px;
    }
`