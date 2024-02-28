import { Wrapper } from './WelcomePage.styled';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import GrittingTitle from '../GrittingTitle/GritingTitle';
// import RegisterForm from '../Form/RegisterForm/RegisterForm';

const WelcomPage = ({children}) => {
  return (
    
      <Wrapper>
        <Logo $hide />
        <GrittingTitle />
        {children}
      </Wrapper>
    
  );
};

WelcomPage.propTypes = {
    children: PropTypes.node
}

export default WelcomPage;
