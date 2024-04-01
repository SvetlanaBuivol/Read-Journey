import FilterStartPage from '../components/Form/FilterForms/FilterStartPage/FilterStartPage';
import Dashboard from '../components/Dashboard/Dashboard';
import Progress from '../components/Dashboard/Progress/Progress';
import ReadingBook from '../components/ReadingBook/ReadingBook';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { getBookByIdAsync } from '../redux/books/booksOperations';
import { getReadingBook } from '../redux/books/booksSelectors';
import { getBookStatus } from '../helpers/books/getBookStatus';
import FilterStopPage from '../components/Form/FilterForms/FilterStopPage/FilterStopPage';
import Details from '../components/Dashboard/Details/Details';

const Reading = () => {
  const book = useSelector(getReadingBook);
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const bookId = searchParams.get('bookId');

  const bookStatus = getBookStatus(book);

  useEffect(() => {
    dispatch(getBookByIdAsync({ id: bookId }));
  }, [dispatch, bookId]);

  return (
    <>
      <Dashboard
        $padding={{ mob: '20px 20px 40px', tablet: '32px 32px 84px' }}
        $gap="40px"
      >
        {bookStatus === 'active' ? (
          <FilterStopPage id={bookId} />
        ) : (
          <FilterStartPage id={bookId} />
        )}
              {/* <Progress /> */}
              <Details/>
      </Dashboard>
      <ReadingBook />
    </>
  );
};

export default Reading;
