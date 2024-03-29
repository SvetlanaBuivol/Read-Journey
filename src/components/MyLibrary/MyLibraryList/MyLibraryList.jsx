import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOwnBooksAsync } from '../../../redux/books/booksOperations';
import PagesTitle from '../../../components/PagesTitle/PagesTitle';
import { getOwnBooks } from '../../../redux/books/booksSelectors';
import MyLibraryBookCard from '../MyLibraryBookCard/MyLibraryBookCard';
import { BooksList, Wrapper } from './MyLibraryList.styled';

const MyLibraryList = () => {
  const books = useSelector(getOwnBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOwnBooksAsync());
  }, [dispatch]);

  return (
    <Wrapper>
      <PagesTitle title="My library" />
      {books.length ? (
        <BooksList>
          {books.map(book => (
            <MyLibraryBookCard
              key={book._id}
              image={book.imageUrl}
              title={book.title}
              author={book.author}
              id={book._id}
            />
          ))}
        </BooksList>
      ) : (
        <p>Not found</p>
      )}
    </Wrapper>
  );
};

export default MyLibraryList;
