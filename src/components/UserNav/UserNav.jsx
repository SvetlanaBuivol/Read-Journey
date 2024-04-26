import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { LinkList, StyledLink } from './UserNav.styled';

const UserNav = ({ onClose }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleCloseModal = () => {
    if (isMobile) {
      onClose();
    }
  };

  return (
    <nav>
      <LinkList>
        <li>
          <StyledLink onClick={handleCloseModal} to={'recommended'}>
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink onClick={handleCloseModal} to={'library'}>
            My library
          </StyledLink>
        </li>
      </LinkList>
    </nav>
  );
};

UserNav.propTypes = {
  onClose: PropTypes.func,
};

export default UserNav;
