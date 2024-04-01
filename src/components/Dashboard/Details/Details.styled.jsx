import { colors } from "../../../css/variables";
import styled from "styled-components";

export const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Svg = styled.svg`
    width: 20px;
    height: 20px;
    stroke: ${colors.lightGrey}
    ${({ $isActive }) => $isActive && `
        width: 20px;
        stroke: ${colors.white};
    `}
`