import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOwnBooksAsync } from '../../../redux/books/booksOperations';
import PagesTitle from '../../../components/PagesTitle/PagesTitle';
import { getOwnBooks } from '../../../redux/books/booksSelectors';
import MyLibraryBookCard from '../MyLibraryBookCard/MyLibraryBookCard';
import { BooksList, Box, Wrapper } from './MyLibraryList.styled';
import MyLibrarySelect from '../MyLibrarySelect/MyLibrarySelect';
import NoResults from '../../../components/NoResults/NoReasults';

const MyLibraryList = () => {
  const books = useSelector(getOwnBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOwnBooksAsync());
  }, [dispatch]);

  return (
    <Wrapper>
      <Box>
        <PagesTitle title="My library" />
        <MyLibrarySelect />
      </Box>
      {books.length ? (
        <BooksList>
          {books.map(book => (
            <MyLibraryBookCard
              key={book._id}
              img={book.imageUrl}
              title={book.title}
              author={book.author}
              id={book._id}
              totalPages={book.totalPages}
            />
          ))}
        </BooksList>
      ) : (
        <NoResults text="To start training, <span>add some of your books</span> or from the recommended ones" />
      )}
    </Wrapper>
  );
};

export default MyLibraryList;
