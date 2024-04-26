import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Notiflix from 'notiflix';
import {
  Author,
  BookCard,
  BookTitle,
  Button,
  CloseButton,
  Image,
  ModalContant,
  Pages,
} from './ModalBookCard.styled';
import {
  addBookByIdAsync,
  getOwnBooksAsync,
} from '../../../redux/books/booksOperations';
import { getOwnBooks } from '../../../redux/books/booksSelectors';

const ModalBookCard = ({ onClose, book, myLibrary }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ownBooks = useSelector(getOwnBooks);

  useEffect(() => {
    dispatch(getOwnBooksAsync());
  }, [dispatch]);

  const handleAddBook = () => {
    const existingBook = ownBooks.some(item => item.title === book.bookTitle);
    if (ownBooks.length === 0 || !existingBook) {
      dispatch(addBookByIdAsync(book.id))
        .unwrap()
        .then(() =>
          Notiflix.Notify.success('Added to your library', {
            position: 'center-center',
          })
        )
        .catch(() =>
          Notiflix.Notify.failure(
            'OOps! Something went wrong. Please, try again',
            { position: 'center-center' }
          )
        );
    } else {
      Notiflix.Notify.warning('This book is already in your library', {
        position: 'center-center',
      });
    }

    onClose();
  };

  const handleStartReading = () => {
    onClose();
    navigate(`/reading?bookId=${book.id}`);
  };

  return (
    <ModalContant>
      <CloseButton type="button" onClick={onClose}>
        <svg width={28} height={28}>
          <use xlinkHref="./svg/svgSprite.svg#icon-close"></use>
        </svg>
      </CloseButton>

      <BookCard>
        <Image
          src={book.img || './images/ownDefaultImage.jpg'}
          alt="bookTitle"
        />
        <BookTitle>{book.bookTitle}</BookTitle>
        <Author>{book.author}</Author>
        <Pages>{book.totalPages} pages</Pages>
      </BookCard>
      {myLibrary ? (
        <Button onClick={handleStartReading}>Start reading</Button>
      ) : (
        <Button onClick={handleAddBook}>Add to library</Button>
      )}
    </ModalContant>
  );
};

export default ModalBookCard;
