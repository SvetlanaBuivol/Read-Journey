import styled from 'styled-components';
import { containerMixin, wrapperMixin } from '../../css/variables';

export const Container = styled.div`
  ${containerMixin}
  padding-bottom: 0;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    padding-bottom: 0;
  }
`;

export const ContainerOutlet = styled.div`
  ${containerMixin}
  padding-top: 0;

  @media screen and (min-width: 768px) {
    padding-top: 0;
  }
`;

export const HeaderWrapper = styled.div`
  ${wrapperMixin}
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  padding: 11px 20px;

  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 94px;

  @media screen and (min-width: 1440px) {
    gap: 219px;
  }
`;
