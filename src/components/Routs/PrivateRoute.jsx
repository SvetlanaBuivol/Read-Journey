import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const isLoggedIn = false;

    return isLoggedIn ? children : <Navigate to="/login"/>
}

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute