import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, innerWrapper, textSize } from '../../../css/variables';

export const Wrapper = styled.div`
  ${innerWrapper}
  padding: 26px 20px;
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
