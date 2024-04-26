import { Form, Formik } from 'formik';

const FilterForm = ({ onSubmit, children, initialValues }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {() => <Form>{children}</Form>}
    </Formik>
  );
};

export default FilterForm;
