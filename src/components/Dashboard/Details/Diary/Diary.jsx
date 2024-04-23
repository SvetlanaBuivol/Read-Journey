import { useSelector } from 'react-redux';
import { getReadingBook } from '../../../../redux/books/booksSelectors';
import { List } from './Diary.styled';
import DiaryEvent from './DiaryEvent/DiaryEvent';

const Diary = () => {
  const book = useSelector(getReadingBook);

  const progress = book.progress;
  const totalPages = book.totalPages;

  return (
    <List>
      {progress?.map(event => (
        <DiaryEvent key={event._id} event={event} totalPages={totalPages} />
      ))}
    </List>
  );
};

export default Diary;
