import { Link } from 'react-router-dom';
import DashboardTitle from '../DashboardTitle/DashboardTitle';
import BooksList from './BooksList/BooksList';
import { LinkWrapper, StyledLink, Wrapper } from './RecommendedBooks.styled';

const RecommendedBooks = () => {
  return (
    <Wrapper>
      <DashboardTitle title="Recommended books" />
      <BooksList />
      <LinkWrapper>
        <StyledLink to={'/recommended'}>Home</StyledLink>
        <Link to={'/library'}>
          <svg width={24} height={24}>
            <use xlinkHref="./svg/svgSprite.svg#icon-to"></use>
          </svg>
        </Link>
      </LinkWrapper>
    </Wrapper>
  );
};

export default RecommendedBooks;
