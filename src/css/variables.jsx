import { css } from 'styled-components';

export const colors = {
  white: '#F9F9F9',
  transparentWhite: 'rgb(249, 249, 249, 0.2)',
  lightGrey: '#686868',
  lightGrey30: 'rgba(227, 227, 227, 0.3)',
  lightGrey50: 'rgba(227, 227, 227, 0.5)',
  mediumGrey: '#262626',
  darkGrey: '#1F1F1F',
  mainBgColor: '#141414',
  backdrop: 'rgba(20, 20, 20, 0.6)',
  blue: '#4F92F7',
  green: '#30B94D',
  red: '#E90516',
};

export const textSize = {
  xxs: '14px',
  xs: '16px',
  s: '18px',
  m: '20px',
  l: '28px',
  xl: '64px',
};

export const wrapperMixin = css`
  display: flex;
  width: 100%;
  border-radius: 30px;
  margin: 0 auto;
  background-color: ${colors.darkGrey};
`;

export const backdropMixin = css`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.backdrop};
`;

export const inputWrapperMixin = css`
   display: flex;
  flex-direction: column;
  gap: 8px;
`

export const authButtonWrapperMixin = css`
  display: flex;
    gap: 14px;
    align-items: center;

    @media screen and (min-width: 768px) {
       gap: 20px; 
    }
`
