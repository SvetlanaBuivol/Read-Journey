import PropTypes from 'prop-types';
import { StyledLink } from './AuthLink.styled';

const AuthLink = ({ page, text }) => {
  return <StyledLink to={`/${page}`}>{text}</StyledLink>;
};

AuthLink.propTypes = {
  page: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AuthLink;
