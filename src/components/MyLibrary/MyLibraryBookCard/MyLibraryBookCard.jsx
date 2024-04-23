import { useDispatch } from 'react-redux';
import { BookInfo, BookInfoBox, Card, Image } from './MyLibraryBookCard.styled';
import { deleteOwnBookAsync } from '../../../redux/books/booksOperations';
import ModalPortal from '../../../components/Modal/ModalPortal/ModalPortal';
import ModalBackdrop from '../../../components/Modal/ModalBackdrop/ModalBackdrop';
import ModalBookCard from '../../Modal/ModalBookCard/ModalBookCard';
import { useState } from 'react';
import Notiflix from 'notiflix';

const MyLibraryBookCard = ({ img, title, author, id, totalPages }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteBook = () => {
    dispatch(deleteOwnBookAsync(id)).unwrap().catch(error => Notiflix.Notify.warning('Oops! Somethimg went wrong. Please, try again', {
      position: 'center-center',
    }));
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <Card>
        <Image
          src={img ? img : './images/ownDefaultImage.jpg'}
          alt={title}
          onClick={handleOpenModal}
        />
        <BookInfoBox>
          <BookInfo>
            <h3>{title}</h3>
            <p>{author}</p>
          </BookInfo>
          <button onClick={handleDeleteBook}>
            <svg width={28} height={28}>
              <use xlinkHref="./svg/svgSprite.svg#icon-trash"></use>
            </svg>
          </button>
        </BookInfoBox>
      </Card>

      <ModalPortal isOpen={modalIsOpen}>
        <ModalBackdrop onClose={closeModal}>
          <ModalBookCard
            onClose={closeModal}
            book={{ img, title, author, totalPages, id }}
            myLibrary={true}
          />
        </ModalBackdrop>
      </ModalPortal>
    </>
  );
};

export default MyLibraryBookCard;
