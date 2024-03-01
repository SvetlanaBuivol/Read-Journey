import { Form, Formik } from "formik";

const FilterForm = ({onSubmit, children, initialValues}) => {
    return (
       <Formik
      initialValues={initialValues}
    //   validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <Form >{children}</Form>}
    </Formik>
   )
}

export default FilterForm;