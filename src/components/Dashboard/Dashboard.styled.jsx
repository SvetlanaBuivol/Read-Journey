import styled from "styled-components";
import { wrapperMixin } from "../../css/variables";

export const Wrapper = styled.div`
    ${wrapperMixin}
    flex-direction: column;
    padding: 20px;
    gap: ${props => props.$gap || '20px'};

    @media screen and (min-width: 768px) {
        flex-direction: row;
        padding: 32px;
    }

    @media screen and (min-width: 1440px) {
        flex-direction: column;
        width: 353px;
        padding: 40px 20px 20px;
    }
`