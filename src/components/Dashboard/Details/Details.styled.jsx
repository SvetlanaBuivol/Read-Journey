import { colors } from "../../../css/variables";
import styled from "styled-components";

export const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Box = styled.div`
    display: flex;
    gap: 8px;
`

export const Svg = styled.svg`
    width: 16px;
    height: 16px;
    stroke: ${({$isActive}) => $isActive ? `${colors.white}` : `${colors.lightGrey}`};
    
    @media screen and (min-width: 768px) {
        width: 20px;
    height: 20px;
    }
`