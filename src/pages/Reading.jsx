import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import Progress from '../components/Dashboard/Progress/Progress';
import ReadingBook from '../components/ReadingBook/ReadingBook';
import FilterStopPage from '../components/Form/FilterForms/FilterStopPage/FilterStopPage';
import Details from '../components/Dashboard/Details/Details';
import FilterStartPage from '../components/Form/FilterForms/FilterStartPage/FilterStartPage';
import { getBookByIdAsync } from '../redux/books/booksOperations';
import { getReadingBook } from '../redux/books/booksSelectors';
import { getBookStatus } from '../helpers/books/getBookStatus';
import ModalPortal from '../components/Modal/ModalPortal/ModalPortal';
import ModalBackdrop from '../components/Modal/ModalBackdrop/ModalBackdrop';
import ModalEndReading from '../components/Modal/ModalEndReading/ModalEndReading';

const Reading = () => {
  const book = useSelector(getReadingBook);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const bookId = searchParams.get('bookId');

  const bookStatus = getBookStatus(book);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    dispatch(getBookByIdAsync({ id: bookId }));
  }, [dispatch, bookId]);

  return (
    <>
      <Dashboard
        $padding={{ mob: '20px 20px 40px', tablet: '32px 32px 84px' }}
        $gap="40px"
      >
        {bookStatus.status === 'active' ? (
          <FilterStopPage id={bookId} openModal={handleOpenModal} />
        ) : (
          <FilterStartPage id={bookId} />
        )}
        {bookStatus.status === null || !bookStatus.isBookStarted ? (
          <Progress />
        ) : (
          <Details />
        )}
      </Dashboard>
      <ReadingBook />

      <ModalPortal isOpen={modalIsOpen}>
        <ModalBackdrop onClose={closeModal}>
          <ModalEndReading onClose={closeModal}/>
        </ModalBackdrop>
        </ModalPortal>
    </>
  );
};

export default Reading;
