import { Container, StyledImage } from "./NoResults.styled";

const NoResults = () => {
  return (
    <Container>
      <StyledImage src="./images/bookDefault.png" alt="No results" />
      <p>Oops! Nothing found for your search query.<br/> Please try again</p>
    </Container>
  );
};

export default NoResults;
