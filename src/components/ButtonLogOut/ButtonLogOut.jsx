import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import { Button } from './ButtonLogOut.styled';
import { useDispatch } from 'react-redux';
import { signoutAsync } from '../../redux/auth/authOperations';

const ButtonLogOut = ({ onClose }) => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleLogOut = () => {
    if (isMobile) {
      onClose();
    }
    dispatch(signoutAsync());
  };

  return <Button onClick={handleLogOut}>Log out</Button>;
};

ButtonLogOut.propTypes = {
  onClose: PropTypes.func,
};

export default ButtonLogOut;
