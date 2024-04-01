import {  useSelector } from 'react-redux';
import PagesTitle from '../../components/PagesTitle/PagesTitle';
import { Author, BookCard, Image, Svg, Title, Wrapper } from './ReadingBook.styled';
import { getReadingBook } from '../../redux/books/booksSelectors';
import { getBookStatus } from '../../helpers/books/getBookStatus';

const ReadingBook = () => {
    const book = useSelector(getReadingBook);

  const bookStatus = getBookStatus(book)

  return (
    <Wrapper>
      <PagesTitle title="My reading" />
      <BookCard>
        <Image src={book.imageUrl} alt={book.title} />
        <Title>{book.title}</Title>
        <Author>{book.author}</Author>
        {bookStatus === 'active' ? (
          <Svg>
            <use xlinkHref="./svg/svgSprite.svg#icon-active"></use>
          </Svg>
        ) : (
          <Svg>
            <use xlinkHref="./svg/svgSprite.svg#icon-pause"></use>
          </Svg>
        )}
      </BookCard>
    </Wrapper>
  );
};

export default ReadingBook;
