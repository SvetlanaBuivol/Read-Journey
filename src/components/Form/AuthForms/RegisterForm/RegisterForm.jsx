import CustomInput from '../CustomInput/CustomInput';
import { validationRegisterSchema } from '../../../../helpers/form/validationSchema';
import { initialRegisterValues } from '../../../../helpers/form/initialValues';
import AuthLink from '../AuthLink/AuthLink';
import { AuthButtonsWrapper, InputWrapper } from './RegisterForm.styled';
import AuthButton from '../AuthButton/AuthButton';
import AuthForm from '../AuthForm/AuthForm';

const RegisterForm = () => {
  const onSubmit = (values, actions) => {
    console.log('onSubmit  values', values);
    actions.resetForm();
  };
  return (
    <AuthForm
      initialValues={initialRegisterValues}
      validationSchema={validationRegisterSchema}
      onSubmit={onSubmit}
    >
      <InputWrapper>
        <CustomInput
          label="Name:"
          name="name"
          type="text"
          placeholder="Yournamehere"
        />
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
        <AuthButton text='Registration' $register/>
        <AuthLink page="login" text="Already have an account?" />
      </AuthButtonsWrapper>
    </AuthForm>
  );
};

export default RegisterForm;
