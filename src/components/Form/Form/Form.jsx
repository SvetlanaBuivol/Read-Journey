import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { StyledForm } from './Form.styled';

const FormBox = ({ initialValues, validationSchema, onSubmit, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <StyledForm >{children}</StyledForm>}
    </Formik>
  );
};

FormBox.propTypes = {
    initialValues: PropTypes.object.isRequired,
    validationSchema: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

export default FormBox;
