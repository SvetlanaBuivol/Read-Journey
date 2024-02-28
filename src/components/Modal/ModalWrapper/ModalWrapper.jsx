import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const ModalWrapper = ({ isOpen, onClose, component: Component}) => {
  return isOpen
    ? createPortal(
        <Component onClose={onClose}/>,
        document.getElementById('modal-root')
      )
    : null;
};

ModalWrapper.propTypes = {
  component: PropTypes.elementType,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default ModalWrapper;