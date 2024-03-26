import PagesTitle from 'components/PagesTitle/PagesTitle';
import RecommendedCard from '../RecommendedCard/RecomendedCard';
import { BooksList, Wrapper } from './RecommendedList.styled';
import Pagination from 'components/Pagination/Pagination';

const RecommendedList = ({books}) => {
  return (
    <Wrapper>
      <PagesTitle title="Recommended" />
      <BooksList>
        {books.map(book => (
          <li key={book._id}>
            <RecommendedCard
              bookTitle={book.title}
              img={book.imageUrl}
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
