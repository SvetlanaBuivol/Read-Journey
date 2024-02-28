import styled from 'styled-components';
import {
  authButtonWrapperMixin,
  inputWrapperMixin,
} from '../../../css/variables';

export const InputWrapper = styled.div`
  ${inputWrapperMixin}
  margin-bottom: 72px;

  @media screen and (min-width: 768px) {
    gap: 14px;
    margin-bottom: 146px;
  }
`;

export const AuthButtonsWrapper = styled.div`
  ${authButtonWrapperMixin}
`;
