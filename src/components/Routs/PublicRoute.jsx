import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PublicRoute = ({children}) => {
    const isLoggedIn = false;

    return !isLoggedIn ? children : <Navigate to="/"/>
}

PublicRoute.propTypes = {
    children: PropTypes.node
}

export default PublicRoute