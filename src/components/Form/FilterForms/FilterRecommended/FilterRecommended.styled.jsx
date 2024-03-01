import styled from "styled-components";
import { buttonMixin } from "../../../../css/variables";

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
`

export const Button = styled.button`
    ${buttonMixin}
`

