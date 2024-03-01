import Container from '../components/Container/Container';
import RegisterForm from '../components/Form/AuthForms/RegisterForm/RegisterForm';
import PhoneImage from '../components/PhoneImage/PhoneImage';
import WelcomPage from '../components/WelcomePage/WelcomPage';

const Register = () => {
  return (
    <Container>
      <WelcomPage>
        <RegisterForm />
      </WelcomPage>
      <PhoneImage />
    </Container>
  );
};

export default Register;
