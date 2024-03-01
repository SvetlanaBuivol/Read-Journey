import PropTypes from 'prop-types';
import { Button } from "./AuthButton.styled";

const AuthButton = ({ text, ...props }) => {
    return (
        <Button type="submit" {...props}>{text}</Button>
   )
}

AuthButton.propTypes = {
    text: PropTypes.string.isRequired,
}

export default AuthButton;