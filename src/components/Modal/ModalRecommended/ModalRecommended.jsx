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
} from './ModalRecommended.styled';
import { addBookByIdAsync } from '../../../redux/books/booksOperations';

const ModalRecommended = ({ onClose, book }) => {
  const dispatch = useDispatch();

  const handleAddBook = () => {
    dispatch(addBookByIdAsync(book.id));
    onClose();
  };
  console.log('handleAddBook  book._id', book.id);
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

      <Button onClick={handleAddBook}>Add to library</Button>
    </ModalContant>
  );
};

export default ModalRecommended;
