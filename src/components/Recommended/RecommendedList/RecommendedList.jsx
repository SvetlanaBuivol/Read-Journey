import PagesTitle from 'components/PagesTitle/PagesTitle';
import RecommendedCard from '../RecommendedCard/RecomendedCard';
import { BooksList, Wrapper } from './RecommendedList.styled';
import Pagination from 'components/Pagination/Pagination';
const recommendedBooks = [
  {
    id: 1,
    bookTitle: 'Lovers of Justice',
    img: 'https://res.cloudinary.com/drfvfno3o/image/upload/v1699733055/books/8.webp',
    author: 'Yuri Andrukhovych',
  },
  {
    id: 2,
    bookTitle: 'Lovers of Justice',
    img: 'https://res.cloudinary.com/drfvfno3o/image/upload/v1699733055/books/8.webp',
    author: 'Yuri Andrukhovych',
  },
  {
    id: 3,
    bookTitle: 'Lovers of Justice',
    img: 'https://res.cloudinary.com/drfvfno3o/image/upload/v1699733055/books/8.webp',
    author: 'Yuri Andrukhovych',
  },
  {
    id: 4,
    bookTitle: 'Lovers of Justice',
    img: 'https://res.cloudinary.com/drfvfno3o/image/upload/v1699733055/books/8.webp',
    author: 'Yuri Andrukhovych',
  },
  {
    id: 5,
    bookTitle: 'Lovers of Justice',
    img: 'https://res.cloudinary.com/drfvfno3o/image/upload/v1699733055/books/8.webp',
    author: 'Yuri Andrukhovych',
  },
  {
    id: 6,
    bookTitle: 'Lovers of Justice',
    img: 'https://res.cloudinary.com/drfvfno3o/image/upload/v1699733055/books/8.webp',
    author: 'Yuri Andrukhovych',
  },
  {
    id: 7,
    bookTitle: 'Lovers of Justice',
    img: 'https://res.cloudinary.com/drfvfno3o/image/upload/v1699733055/books/8.webp',
    author: 'Yuri Andrukhovych',
  },
  {
    id: 8,
    bookTitle: 'Lovers of Justice',
    img: 'https://res.cloudinary.com/drfvfno3o/image/upload/v1699733055/books/8.webp',
    author: 'Yuri Andrukhovych',
  },
  {
    id: 9,
    bookTitle: 'Lovers of Justice',
    img: 'https://res.cloudinary.com/drfvfno3o/image/upload/v1699733055/books/8.webp',
    author: 'Yuri Andrukhovych',
  },
  {
    id: 10,
    bookTitle: 'Lovers of Justice',
    img: 'https://res.cloudinary.com/drfvfno3o/image/upload/v1699733055/books/8.webp',
    author: 'Yuri Andrukhovych',
  },
];

const RecommendedList = () => {
  return (
    <Wrapper>
      <PagesTitle title="Recommended" />
      <BooksList>
        {recommendedBooks.map(book => (
          <li key={book.id}>
            <RecommendedCard
              bookTitle={book.bookTitle}
              img={book.img}
              author={book.author}
            />
          </li>
        ))}
      </BooksList>
      <Pagination/>
    </Wrapper>
  );
};

export default RecommendedList;
