import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { StyledForm } from './AuthForm.styled';

const AuthForm = ({ initialValues, validationSchema, onSubmit, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <StyledForm autoComplete="off">{children}</StyledForm>}
    </Formik>
  );
};

AuthForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default AuthForm;
