import { colors } from '../../../../css/variables';
import styled from 'styled-components';

export const List = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  gap: 17px;
  margin-top: 20px;
  height: 211px;
  padding: 16px;
  overflow-y: auto;
  background-color: ${colors.mediumGrey};
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
    height: 240px;
    width: 321px;
    gap: 14px;
    padding-bottom: 31px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
    height: 373px;
    width: 313px;
    gap: 22px;
    padding: 20px 20px 28px;
  }
`;
