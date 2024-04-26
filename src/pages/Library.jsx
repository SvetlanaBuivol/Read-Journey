import { useState } from 'react';
import RecommendedBooks from 'components/Dashboard/RecommendedBooks/RecommendedBooks';
import Dashboard from '../components/Dashboard/Dashboard';
import FilterMyLibrary from '../components/Form/FilterForms/FilterMyLibrary/FilterMyLibrary';
import MyLibraryList from '../components/MyLibrary/MyLibraryList/MyLibraryList';
import ModalPortal from '../components/Modal/ModalPortal/ModalPortal';
import ModalBackdrop from '../components/Modal/ModalBackdrop/ModalBackdrop';
import ModalAddedBook from '../components/Modal/ModalAddedBook/ModalAddedBook';

const Library = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <Dashboard>
        <FilterMyLibrary openModal={handleOpenModal} />
        <RecommendedBooks />
      </Dashboard>
      <MyLibraryList />

      <ModalPortal isOpen={modalIsOpen}>
        <ModalBackdrop onClose={closeModal}>
          <ModalAddedBook onClose={closeModal} />
        </ModalBackdrop>
      </ModalPortal>
    </>
  );
};

export default Library;
