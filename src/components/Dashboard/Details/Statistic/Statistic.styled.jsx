import { colors, innerWrapper, textSize } from "../../../../css/variables";
import styled from "styled-components";

export const Wrapper = styled.div`
   ${innerWrapper}
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 20px;
   margin-top: 20px;

   @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding: 28px;
    width: 321px;
    margin-top: 16px;
   }

   @media screen and (min-width: 1440px) {
    width: 313px;
   }
`

export const Percent = styled.p`
    font-size: ${textSize.xxs};
    letter-spacing: -0.02em;

    @media screen and (min-width: 768px) {
        font-size: ${textSize.m};
    }
`

export const Box = styled.div`
    position: relative;
    padding-left: 29px;
    margin-top: 21px;

    &::before {
        content: '';
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 14px;
        height: 14px;
        background-color: ${colors.green};
        border-radius: 4px;
    }
`

export const Pages = styled.p`
    font-size: 10px;
    color: ${colors.lightGrey};
    margin-top: 4px;

     @media screen and (min-width: 768px) {
        font-size: 12px;
        margin-top: 8px;
    }
`