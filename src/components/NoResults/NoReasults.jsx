import { Container, StyledImage } from "./NoResults.styled";

const NoResults = ({text}) => {
  return (
    <Container>
      <StyledImage src="./images/bookDefault.png" alt="No results" />
      <p dangerouslySetInnerHTML={{ __html: text}}/>
    </Container>
  );
};

export default NoResults;
