import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, innerWrapper, textSize } from '../../../css/variables';

export const Wrapper = styled.div`
  ${innerWrapper}
  padding: 20px;

  @media screen and (min-width: 768px) {
    width: 313px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 20px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  gap: 12px;
`;

export const Number = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${colors.white};
  color: ${colors.darkGrey};
  font-family: 'Gilroy-Bold';
  font-size: ${textSize.s};
  letter-spacing: -0.02em;
  line-height: 1;
`;

export const Text = styled.p`
  font-size: ${textSize.xxs};
  letter-spacing: -0.02em;

  span {
    color: ${colors.lightGrey};
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const StyledLink = styled(Link)`
  font-size: ${textSize.xxs};
  color: ${colors.lightGrey};
  letter-spacing: -0.02em;
`;
