import styled from 'styled-components';
import {
  authButtonWrapperMixin,
  inputWrapperMixin,
} from '../../../css/variables';

export const InputWrapper = styled.div`
  ${inputWrapperMixin}
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    gap: 14px;
    margin-bottom: 82px;
  }
`;

export const AuthButtonsWrapper = styled.div`
  ${authButtonWrapperMixin}
  
`;
