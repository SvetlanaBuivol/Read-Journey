import { useState } from 'react';
import { BookCard, BookInfo } from './RecommendedCard.styled';
import ModalBackdrop from '../../../components/Modal/ModalBackdrop/ModalBackdrop';
import ModalRecommended from '../../../components/Modal/ModalRecommended/ModalRecommended';
import ModalPortal from '../../../components/Modal/ModalPortal/ModalPortal';

const RecommendedCard = ({ img, bookTitle, author, totalPages, id }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <BookCard>
        <img src={img} alt={bookTitle} onClick={handleOpenModal} />
        <BookInfo>
          <h3>{bookTitle}</h3>
          <p>{author}</p>
        </BookInfo>
      </BookCard>
     
          <ModalPortal isOpen={modalIsOpen}>
              <ModalBackdrop  onClose={closeModal}>
                  <ModalRecommended onClose={closeModal} book={{img, bookTitle, author, totalPages, id} } />
          </ModalBackdrop>
          </ModalPortal>
    </>
  );
};

export default RecommendedCard;
