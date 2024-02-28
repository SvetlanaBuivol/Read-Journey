import { useState } from "react";
import ModalWrapper from "../Modal/ModalWrapper/ModalWrapper";
import MobileMenuModal from '../Modal/MobileMenuModal/MobileMenuModal'


const MobileMenu = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }
  return (
    <>
      <button type="button" onClick={handleOpenModal}>
        <svg width={28} height={28}>
          <use xlinkHref="./svg/svgSprite.svg#icon-menu"></use>
        </svg>
      </button>

      <ModalWrapper component={MobileMenuModal} isOpen={modalIsOpen} onClose={closeModal} />
    </>
  );
};

export default MobileMenu;
