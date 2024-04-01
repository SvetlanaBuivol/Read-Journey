import { useDispatch } from 'react-redux';
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
import { addBookByIdAsync } from '../../../redux/books/booksOperations';
import { useNavigate } from 'react-router-dom';

const ModalBookCard = ({ onClose, book, myLibrary }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddBook = () => {
    dispatch(addBookByIdAsync(book.id));
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
        <Image src={book.img} alt="bookTitle" />
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
