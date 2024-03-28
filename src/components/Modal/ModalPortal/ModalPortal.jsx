import { createPortal } from 'react-dom';

const ModalPortal = ({ isOpen, children}) => {
  return isOpen
    ? createPortal(
        children,
        document.getElementById('modal-root')
      )
    : null;
};

export default ModalPortal