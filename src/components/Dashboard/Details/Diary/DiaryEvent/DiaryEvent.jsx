import Notiflix from 'notiflix';
import { readingTime } from '../../../../../helpers/books/readingTime';
import { calculatePercentage } from '../../../../../helpers/books/calculatePercentage';
import { formatDate } from '../../../../../helpers/books/formatDate';
import {
  Box,
  Container,
  Data,
  Event,
  GrafficSvg,
  Line,
  Pages,
  Percentage,
  Speed,
  Time,
} from './DiaryEvent.styled';
import { readPages } from '../../../../../helpers/books/readPages';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReadingEventAsync } from '../../../../../redux/books/booksOperations';
import { getReadingBook } from '../../../../../redux/books/booksSelectors';

const DiaryEvent = ({ event, totalPages }) => {
  const book = useSelector(getReadingBook);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(
      deleteReadingEventAsync({ bookId: book._id, readingId: event._id })
    )
      .unwrap()
      .catch(() =>
        Notiflix.Notify.warning(
          'Oops! Somethimg went wrong. Please, try again',
          {
            position: 'center-center',
          }
        )
      );
  };

  return event.finishReading ? (
    <Event>
      <Line></Line>
      <div>
        <Data>{formatDate(event.finishReading)}</Data>
        <Percentage>
          {calculatePercentage(event.finishPage - event.startPage, totalPages)}
        </Percentage>
        <Time>{readingTime(event.finishReading, event.startReading)}</Time>
      </div>
      <Box>
        <Container>
          <Pages>{readPages(event.startPage, event.finishPage)}</Pages>
          <GrafficSvg>
            <use xlinkHref="./svg/svgSprite.svg#icon-grafic"></use>
          </GrafficSvg>
          <Speed>{event.speed} pages per hour</Speed>
        </Container>

        <button onClick={handleDelete}>
          <svg width={14} height={14}>
            <use xlinkHref="./svg/svgSprite.svg#icon-trashGrey"></use>
          </svg>
        </button>
      </Box>
    </Event>
  ) : null;
};

export default DiaryEvent;
