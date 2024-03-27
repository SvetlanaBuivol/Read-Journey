import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 65px auto;

  @media screen and (min-width: 1440px) {
    margin: auto;
  }

  p {
    text-align: center;
  }
`;
export const StyledImage = styled.img`
  display: block;
  width: 100px;
  height: 100px;

  @media screen and (min-width: 768px) {
    width: 130px;
    height: 130px;
  }
`;
