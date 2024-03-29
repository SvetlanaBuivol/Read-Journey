import styled from 'styled-components';
import { colors } from '../../../css/variables';

export const Box = styled.select`
  width: 120px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid ${colors.borderGrey};
  padding: 12px 14px;
`;

export const Option = styled.option`
  font-size: 12px;
  background-color: ${colors.mediumGrey};
  color: ${colors.lightGrey};

  &:checked {
    color: ${colors.white};
  }
  &:focus-within {
    background-color: red !important;
  }
`;

export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: 120,
    height: 40,
    border: state.isFocused ? '1px solid #3E3E3E' : '1px solid #3E3E3E',
    borderRadius: 12,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    color: '#F9F9F9',
    boxShadow: state.isFocused ? 'none' : provided.boxShadow,
    '@media screen and (min-width:768px)': {
      width: 153,
      height: 46,
      fontSize: 14,
    },
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
  }),
  menu: (provided, state) => ({
    ...provided,
    width: 120,
    borderRadius: 12,
    backgroundColor: '#262626',
    '@media screen and (min-width:768px)': {
      width: 153,
      fontSize: 14,
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#F9F9F9',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#262626' : '#262626',
    color: state.isSelected ? '#F9F9F9' : '#686868',
  }),
};
