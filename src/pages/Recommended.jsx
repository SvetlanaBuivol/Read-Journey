// import { useDispatch, useSelector } from 'react-redux';
// import { useMediaQuery } from 'react-responsive';
// import { useEffect } from 'react';
import FilterRecommended from '../components/Form/FilterForms/FilterRecommended/FilterRecommended';
import Dashboard from '../components/Dashboard/Dashboard';
import CallToAction from '../components/Dashboard/CallToAction/CallToAction';
import Quote from '../components/Dashboard/Quote/Quote';
import RecommendedList from '../components/Recommended/RecommendedList/RecommendedList';
// import { recommendedBooksAsync } from '../redux/books/booksOperations';
// import { getBooks, getCurrentPage } from '../redux/books/booksSelectors';
// import { getBooksPerPage } from '../helpers/getBooksPerPage/getBooksPerPage';

const Recommended = () => {
  // const books = useSelector(getBooks);
  // const currentPage = useSelector(getCurrentPage);

  // const dispatch = useDispatch();

  // const isMobile = useMediaQuery({ maxWidth: 767 });
  // const isTablet = useMediaQuery({ maxWidth: 1439 });

  // const limit = getBooksPerPage({ isMobile, isTablet });

  // useEffect(() => {
  //   dispatch(recommendedBooksAsync({ limit, page: currentPage })).catch(() => {
  //     console.log('fail');
  //   });
  // }, [dispatch, limit, currentPage]);

  
  // const filterBooks = ({ title, author }) => {
  //   console.log(title, author)
  //    return {title, author}
  // }

  return (
    <>
      <Dashboard>
        <FilterRecommended
          // filterBooks={filterBooks}
        />
        <CallToAction />
        <Quote />
      </Dashboard>

      <RecommendedList  />
    </>
  );
};

export default Recommended;
