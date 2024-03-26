import styled from "styled-components";
import { colors, textSize } from "../../../css/variables";

export const BookCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 137px;

    img {
        height: 208px;
        border-radius: 8px;
    }
`

export const BookInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
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
`