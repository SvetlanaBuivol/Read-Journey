import PagesTitle from 'components/PagesTitle/PagesTitle';
import RecommendedCard from '../RecommendedCard/RecomendedCard';
import { BooksList, Wrapper } from './RecommendedList.styled';
import Pagination from 'components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, getCurrentPage } from '../../../redux/books/booksSelectors';
import { useMediaQuery } from 'react-responsive';
import { getBooksPerPage } from 'helpers/getBooksPerPage/getBooksPerPage';
import { useEffect } from 'react';
import { recommendedBooksAsync } from '../../../redux/books/booksOperations';
import NoResults from '../../../components/NoResults/NoReasults';

const RecommendedList = () => {
  const books = useSelector(getBooks);
  const currentPage = useSelector(getCurrentPage);

  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1439 });

  const limit = getBooksPerPage({ isMobile, isTablet });

  useEffect(() => {
    dispatch(recommendedBooksAsync({ limit, page: currentPage })).catch(() => {
      console.log('fail');
    });
  }, [dispatch, limit, currentPage]);

  return (
    <Wrapper>
      <PagesTitle title="Recommended" />
      {books.length ? (<BooksList>
        {books.map(book => (
          <li key={book._id}>
            <RecommendedCard
              bookTitle={book.title}
              img={book.imageUrl}
              author={book.author}
            />
          </li>
        ))}
      </BooksList>) : (<NoResults/>)
      }
      <Pagination/>
    </Wrapper>
  );
};

export default RecommendedList;
