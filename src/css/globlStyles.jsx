import { createGlobalStyle } from 'styled-components';
import { colors } from './variables';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Gilroy-Medium';
    font-size: 12px;
    background-color: ${colors.mainBgColor};
    color: ${colors.white};
   };

   &.container {
    width: 80%;
    background-color: ${colors.lightGrey};
   }
`;

export default GlobalStyle;
