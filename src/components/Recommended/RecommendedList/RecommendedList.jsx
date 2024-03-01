import RecommendedCard from '../RecommendedCard/RecomendedCard';
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
    <ul>
      {recommendedBooks.map(book => (
        <li key={book.id}>
          <RecommendedCard
            bookTitle={book.title}
            img={book.img}
            author={book.author}
          />
        </li>
      ))}
    </ul>
  );
};

export default RecommendedList;
