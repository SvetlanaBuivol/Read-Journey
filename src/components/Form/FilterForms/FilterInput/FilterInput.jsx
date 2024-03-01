import { useField } from 'formik';
import { Input, InputWrapper } from './FilterInput.styled';

const FilterInput = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <InputWrapper>
      <label>{label}</label>
      <Input {...field} {...props} />
    </InputWrapper>
  );
};

export default FilterInput;
