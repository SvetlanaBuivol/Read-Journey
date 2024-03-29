import styled from 'styled-components';
import { buttonMixin } from '../../../../css/variables';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 38px;
  }
`;

export const Button = styled.button`
  ${buttonMixin}
`;
