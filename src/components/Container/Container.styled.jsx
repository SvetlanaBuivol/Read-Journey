import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 375px;
  padding: 20px 20px 10px;
  margin: 0 auto;

  @media screen and (max-width: 375px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 32px;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    width: 1280px;
  }
`;
