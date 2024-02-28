import CustomInput from '../CustomInput/CustomInput';
import { validationLoginSchema } from '../../../helpers/form/validationSchema';
import { initialLoginValues } from '../../../helpers/form/initialValues';
import AuthLink from '../AuthLink/AuthLink';
import FormBox from '../Form/Form';
import { AuthButtonsWrapper, InputWrapper } from './LoginForm.styled';
import AuthButton from '../AuthButton/AuthButton';

const LoginForm = () => {
  const onSubmit = (values, actions) => {
    console.log('onSubmit  values', values);
    actions.resetForm();
  };

  return (
    <FormBox
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
        <AuthButton type="submit" text='Log in'/>
        <AuthLink page="register" text="Don’t have an account? " />
      </AuthButtonsWrapper>
    </FormBox>
  );
};

export default LoginForm;
