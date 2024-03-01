import styled from 'styled-components';
import { colors } from '../../../../css/variables';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 14px;
  border-radius: 12px;
  background-color: ${colors.mediumGrey};

  ${props =>
    props.$error &&
    `
    border: 1px solid ${colors.red};
   `}

  ${props =>
    props.$valid &&
    `
    border: 1px solid ${colors.green};
   `}

   label {
    margin-right: 10px;
    line-height: 1.3;
    letter-spacing: -0.02em;
    color: ${colors.lightGrey};

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 14px 16px;
  }
`;

export const Input = styled.input`
  line-height: 1.3;
  letter-spacing: -0.02em;
  width: 100%;

  &::placeholder {
    color: ${colors.white};
    line-height: 1.3;
    letter-spacing: -0.02em;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const ErrorMessage = styled.p`
  font-size: 10px;
  color: ${colors.red};
  padding-top: 4px;
  padding-left: 14px;

  @media screen and (min-width: 768px) {
    font-size: inherit;
    padding-top: 8px;
  }
`;

export const ValidMessage = styled.p`
  font-size: 10px;
  color: ${colors.green};
  padding-top: 4px;
  padding-left: 14px;

  @media screen and (min-width: 768px) {
    font-size: inherit;
    padding-top: 8px;
  }
`;
