import { useState } from "react";
import MobileMenuModal from '../Modal/MobileMenuModal/MobileMenuModal'
import ModalPortal from "components/Modal/ModalPortal/ModalPortal";


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

      <ModalPortal isOpen={modalIsOpen} ><MobileMenuModal onClose={closeModal}/></ModalPortal>
    </>
  );
};

export default MobileMenu;
