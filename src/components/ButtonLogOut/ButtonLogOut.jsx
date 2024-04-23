import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { signoutAsync } from '../../redux/auth/authOperations';
import { Button } from './ButtonLogOut.styled';

const ButtonLogOut = ({ onClose }) => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleLogOut = () => {
    if (isMobile) {
      onClose();
    }
    dispatch(signoutAsync())
      .unwrap()
      .catch(() => {
        Notiflix.Notify.failure(
          'Oops! Something went wrong. Please try again',
          {
            position: 'center-center',
          }
        );
      });
  };

  return <Button onClick={handleLogOut}>Log out</Button>;
};

ButtonLogOut.propTypes = {
  onClose: PropTypes.func,
};

export default ButtonLogOut;
