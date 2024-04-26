import { createGlobalStyle } from 'styled-components';
import { colors } from './variables';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Gilroy-Medium';
    font-size: 12px;
    letter-spacing: 0.02em;
    line-height: 1.28;
    background-color: ${colors.mainBgColor};
    color: ${colors.white};
   };

   &.container {
    background-color: ${colors.lightGrey};
   }
`;

export default GlobalStyle;
