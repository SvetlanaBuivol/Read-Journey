import PropTypes from 'prop-types';
import ButtonLogOut from '../../ButtonLogOut/ButtonLogOut';
import UserNav from '../../UserNav/UserNav';
import { Backdrop, Modal } from './MobileMenuModal.styled';
import { useEffect } from 'react';

const MobileMenuModal = ({ onClose }) => {
  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);

  return (
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <button type="button" onClick={onClose}>
          <svg width={28} height={28}>
            <use xlinkHref="/src/assets/svg/svgSprite.svg#icon-close"></use>
          </svg>
        </button>

        <UserNav onClose={onClose} />
        <ButtonLogOut onClose={onClose} />
      </Modal>
    </Backdrop>
  );
};

MobileMenuModal.propTypes = {
  onClose: PropTypes.func,
};

export default MobileMenuModal;
