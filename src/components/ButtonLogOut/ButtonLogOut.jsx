import { useMediaQuery } from "react-responsive";
import PropTypes from 'prop-types';
import { Button } from "./ButtonLogOut.styled";

const ButtonLogOut = ({ onClose }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const handleCloseModal = () => {
    if (isMobile) {
      onClose()
    }
  };

    return (
        <Button onClick={handleCloseModal}>Log out</Button>
    )
}

ButtonLogOut.propTypes = {
  onClose: PropTypes.func,
};

export default ButtonLogOut;