import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../../../../redux/books/booksSelectors';
import { recommendedBooksAsync } from '../../../../redux/books/booksOperations';
import BookCard from '../BookCard/BookCard';
import { List } from './BooksList.styled';

const BooksList = () => {
  const books = useSelector(getBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recommendedBooksAsync({ limit: 3 }));
  }, [dispatch]);

  return (
    <List>
      {books.length ? (
        books.map(book => (
          <BookCard
            key={book._id}
            title={book.title}
            imageUrl={book.imageUrl}
            author={book.author}
          />
        ))
      ) : (
        <p>Not found</p>
      )}
    </List>
  );
};

export default BooksList;
