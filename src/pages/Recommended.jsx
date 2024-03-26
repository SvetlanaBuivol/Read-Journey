import FilterRecommended from '../components/Form/FilterForms/FilterRecommended/FilterRecommended';
import Dashboard from '../components/Dashboard/Dashboard';
import CallToAction from '../components/Dashboard/CallToAction/CallToAction';
import Quote from '../components/Dashboard/Quote/Quote';
import RecommendedList from '../components/Recommended/RecommendedList/RecommendedList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { recommendedBooksAsync } from '../redux/books/booksOperations';
import { getBooks } from '../redux/books/booksSelectors';

const Recommended = () => {
  const books = useSelector(getBooks)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recommendedBooksAsync()).catch(() => {
      console.log('fail')
    });
  }, [dispatch]);

  return (
    <>
      <Dashboard>
        <FilterRecommended />
        <CallToAction />
        <Quote />
      </Dashboard>

      <RecommendedList books={books} />
    </>
  );
};

export default Recommended;
