import PhoneImage from '../components/PhoneImage/PhoneImage';
import Container from '../components/Container/Container';
import WelcomPage from '../components/WelcomePage/WelcomPage';
import LoginForm from '../components/Form/LoginForm/LoginForm';

const Login = () => {
  return (
    <Container>
      <WelcomPage>
        <LoginForm />
      </WelcomPage>
      <PhoneImage />
    </Container>
  );
};

export default Login;
