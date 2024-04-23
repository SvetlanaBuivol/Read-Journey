import { useSelector } from 'react-redux';
import CircularProgressBar from './ProgressBar/CircularProgressBar';
import { Box, Pages, Percent, Wrapper } from './Statistic.styled';
import { getReadingBook } from '../../../../redux/books/booksSelectors';
import { getPrevPercent } from 'helpers/books/getPrevPercent';
import { getCurrentPercent } from 'helpers/books/getCurrentPercent';

const Statistic = () => {
  const book = useSelector(getReadingBook);

  const readPages = book?.progress[book.progress?.length - 1].finishPage;
  const totalPages = book?.totalPages;

  const currentPercent = getCurrentPercent(readPages, totalPages);

  const prevPercent = getPrevPercent(book, totalPages);

  return (
    <Wrapper>
      {!currentPercent && !prevPercent ? (
        <div>In progress</div>
      ) : (
        <>
          <CircularProgressBar percent={currentPercent || prevPercent} />
          <Box>
            <Percent>{currentPercent || prevPercent}%</Percent>
            <Pages>{readPages} pages read</Pages>
          </Box>
        </>
      )}
    </Wrapper>
  );
};

export default Statistic;
