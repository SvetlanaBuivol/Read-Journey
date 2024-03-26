import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return !isLoggedIn ? children : <Navigate to="/" />;
};

PublicRoute.propTypes = {
  children: PropTypes.node,
};

export default PublicRoute;
