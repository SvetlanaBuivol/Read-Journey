import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import CustomInput from '../CustomInput/CustomInput';
import { validationLoginSchema } from '../../../../helpers/form/validationSchema';
import { initialLoginValues } from '../../../../helpers/form/initialValues';
import AuthLink from '../AuthLink/AuthLink';
import { AuthButtonsWrapper, InputWrapper } from './LoginForm.styled';
import AuthButton from '../AuthButton/AuthButton';
import AuthForm from '../AuthForm/AuthForm';
import { loginAsync } from '../../../../redux/auth/authOperations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, actions) => {
    dispatch(loginAsync(values))
      .unwrap()
      .catch(() =>
        Notiflix.Notify.failure('Please, check your email or password', {
          position: 'center-center',
        })
      );
    actions.resetForm();
  };

  return (
    <AuthForm
      initialValues={initialLoginValues}
      validationSchema={validationLoginSchema}
      onSubmit={onSubmit}
    >
      <InputWrapper>
        <CustomInput
          label="Email:"
          name="email"
          type="email"
          placeholder="Your@email.com"
        />
        <CustomInput
          label="Password:"
          name="password"
          type="password"
          placeholder="Yourpasswordhere"
        />
      </InputWrapper>
      <AuthButtonsWrapper>
        <AuthButton type="submit" text="Log in" />
        <AuthLink page="register" text="Don’t have an account? " />
      </AuthButtonsWrapper>
    </AuthForm>
  );
};

export default LoginForm;
