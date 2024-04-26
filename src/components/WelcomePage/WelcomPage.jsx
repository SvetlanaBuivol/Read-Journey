import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import { Wrapper } from './WelcomePage.styled';
import Logo from '../Logo/Logo';
import GrittingTitle from '../GrittingTitle/GritingTitle';
import LogoText from '../../components/Logo/LogoText';

const WelcomPage = ({ children }) => {
  return (
    <Wrapper>
      <MediaQuery maxWidth={767}>
        {matches => (matches ? <Logo /> : <LogoText />)}
      </MediaQuery>

      <GrittingTitle />
      {children}
    </Wrapper>
  );
};

WelcomPage.propTypes = {
  children: PropTypes.node,
};

export default WelcomPage;
