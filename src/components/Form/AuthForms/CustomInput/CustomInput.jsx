import { useField } from 'formik';
import PropTypes from 'prop-types';
import {
  ErrorMessage,
  IconWrapper,
  Input,
  InputWrapper,
  ValidMessage,
} from './CustomInput.styled';
import { useState } from 'react';
import StatusIcon from '../StatusIcon/StatusIcon';
import VisiblePasswordIcon from '../VisiblePasswordIcon/VisiblePasswordIcon';

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [visiblePassword, setVisiblePassword] = useState(false);

  const isError = meta.error && meta.touched;
  const isValid = !!(!meta.error && meta.value.trim());
  const isPasswordInput = field.name === 'password';

  const togglePasswordVisibility = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <>
      <div>
      <InputWrapper $error={isError} $valid={isValid}>
        <label>{label}</label>
        <Input
          {...field}
          {...props}
          type={
            isPasswordInput
              ? visiblePassword
                ? 'text'
                : 'password'
              : props.type
          }
          autoComplete="off"
        />
        <IconWrapper>
          {isPasswordInput && (
            <VisiblePasswordIcon
              visiblePassword={visiblePassword}
              onClick={togglePasswordVisibility}
            />
          )}
          <StatusIcon isError={isError} isValid={isValid} />
        </IconWrapper>
      </InputWrapper>
      {isError && <ErrorMessage>{meta.error}</ErrorMessage>}
      {isValid && isPasswordInput && (
        <ValidMessage>Password is secure</ValidMessage>
        )}
        </div>
    </>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default CustomInput;
