import { wrapperMixin } from "../../../css/variables";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${wrapperMixin}
  flex-direction: column;
  padding: 40px 20px 65px;
  
  @media screen and (min-width: 768px) {
    padding: 40px 40px 170px;
  }
  
  @media screen and (min-width: 1440px) {
    padding: 40px 40px 28px;
  } 
`

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BooksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 21px;
  margin-top: 14px;

   @media screen and (min-width: 768px) {
    gap: 27px 25px;
  }
`

