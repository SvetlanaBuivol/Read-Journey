import styled from 'styled-components';
import { colors } from '../../css/variables';

export const PaginateWrapper = styled.div`
  position: absolute;
  display: flex;
  gap: 8px;
  top: 40px;
  right: 20px;

  @media screen and (min-width: 768px) {
    right: 40px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  border: 1px solid ${colors.transparentWhite};

  svg {
    width: 16px;
    height: 16px;
    fill: transparent;
    stroke: ${props =>
      props.disabled ? `${colors.transparentWhite}` : `${colors.white}`};

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 10px;
  }
`;
