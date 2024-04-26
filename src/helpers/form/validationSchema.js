import { object, string } from 'yup';

export const validationRegisterSchema = object().shape({
  name: string().required('Name is requared'),
  email: string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email format')
    .required('Email is required'),
  password: string()
    .min(7, 'Password must be at least 7 characters long')
    .required('Password is required'),
});

export const validationLoginSchema = object().shape({
  email: string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email format')
    .required('Email is required'),
  password: string()
    .min(7, 'Password must be at least 7 characters long')
    .required('Password is required'),
});
