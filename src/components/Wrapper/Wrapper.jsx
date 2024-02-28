import PropTypes from 'prop-types';
import { Box } from './Wrapper.styled';

const Wrapper = ({children}) => {
    return (
        <Box>{children}</Box>
   )
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired
}

export default Wrapper;